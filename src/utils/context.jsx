import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    // TODO: persist userId with a key named 'currentId' in sessionStorage
  }, [userId])

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  )
}
