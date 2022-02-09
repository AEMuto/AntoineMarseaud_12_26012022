import { useEffect, useState } from 'react'
import axios from 'axios'
import { getDay } from '../utils/getDay'
import translatePerfType from '../utils/translatePerfType'
import { colors } from '../theme/colors'

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
        let {
          data: {
            data: {
              userInfos: { firstName },
              todayScore,
              keyData,
            },
          },
        } = await axios.get(`${URL}${userId}`)

        // Mapping todayScore for use in Chart
        todayScore = [
          { score: todayScore * 100 },
          { score: 100 - todayScore * 100 },
        ]

        // Get user's activity data
        let {
          data: {
            data: { sessions: activity },
          },
        } = await axios.get(`${URL}${userId}/activity`)

        // Remapping activity data for use in Chart
        activity = activity.map((obj) => {
          return {
            day: obj.day[obj.day.length - 1],
            kilogram: obj.kilogram,
            calories: obj.calories,
          }
        })

        // Get user's average sessions data
        let {
          data: {
            data: { sessions: average },
          },
        } = await axios.get(`${URL}${userId}/average-sessions`)

        // Remapping average session data for use in Chart
        average = average.map((obj) => {
          return {
            day: `${getDay(obj.day)}`,
            sessionLength: obj.sessionLength,
          }
        })

        // Get user's performance data
        const {
          data: {
            data: { data: perfValues, kind: perfType },
          },
        } = await axios.get(`${URL}${userId}/performance`)

        // Remapping perf data for use in Chart
        const perf = perfValues.map((obj) => {
          return {
            type: translatePerfType(perfType[obj.kind]),
            score: obj.value,
          }
        })

        const data = {
          firstName,
          todayScore,
          keyData,
          activity,
          average,
          perf,
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
