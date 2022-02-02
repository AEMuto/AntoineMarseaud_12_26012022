import { useEffect, useState } from 'react'
import axios from 'axios'

const URL = 'http://localhost:3000/user/'

export function useAxios(userId) {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!userId) return
    setIsLoading(true)
    async function getUserData() {
      try {
        // Get user's info, score and key data
        const {
          data: {
            data: {
              userInfos: { firstName },
              todayScore,
              keyData,
            },
          },
        } = await axios.get(`${URL}${userId}`)
        // console.log(firstName, todayScore, keyData)

        // Get user's activity data
        const {
          data: {
            data: { sessions: activity },
          },
        } = await axios.get(`${URL}${userId}/activity`)
        // console.log(activity)

        // Get user's average sessions data
        const {
          data: {
            data: { sessions: average },
          },
        } = await axios.get(`${URL}${userId}/average-sessions`)
        // console.log(average)

        // Get user's performance data
        const {
          data: {
            data: { data: perfValues, kind: perfTypes },
          },
        } = await axios.get(`${URL}${userId}/performance`)
        // console.log(perfValues, perfTypes)

        const data = {
          firstName,
          todayScore,
          keyData,
          activity,
          average,
          perfValues,
          perfTypes,
        }

        setData(data)
      } catch (error) {
        console.log(error)
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    getUserData()
  }, [userId])
  return { isLoading, data, error }
}
