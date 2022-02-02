import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null)
  const navigate = useNavigate()

  /**
   * In order to keep alive the user's ID we selected in SelectUser.jsx,
   * we use the useEffect hook with 'userId' as its dependency.
   * 'userId' is initialized as 'null' so we verify if it's present in the
   * sessionStorage. If it isn't we force navigation to the homepage where
   * we render the SelectUser page thanks to the useNavigate hook from react-router.
   * Otherwise, we set the user's ID in the context as the one from the sessionStorage.
   */
  useEffect(() => {
    if (!userId) {
      const sessionUserId = JSON.parse(window.sessionStorage.getItem('userId'))
      if (!sessionUserId) navigate('/')
      else setUserId(sessionUserId)
    }
  }, [userId])

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  )
}
