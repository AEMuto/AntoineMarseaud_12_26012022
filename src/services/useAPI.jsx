import { useEffect, useState } from 'react'
import axios from 'axios'
import getDay from '../utils/getDay'
import translatePerfType from '../utils/translatePerfType'
import wait from '../utils/wait'
import mockData from '../mock/data'
import api from './api'

//const URL = 'http://localhost:3000/user/'

/**
 * Custom hook where we centralize our API calls and data remapping. It returns
 * an object containing three keys.
 * @param {string} userId - The user uuid
 * @param {('everything'|'activity'|'average-sessions'|'info'|'performance')} param - The allowed option
 * @returns {{isLoading: boolean, data: {}, error: {}}}
 * 'isLoading' is used to display a loading spinner while we fetch the data.
 * 'error' is used to display an error message if an error occurs while we fetch the data.
 * 'data' contains every information we need in the charts.
 */
export function useAPI(userId, param) {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({})

  useEffect(() => {
    if (!userId) return
    if (userId === 'mock') {
      setData(mockData)
      setIsLoading(false)
      return
    }

    setIsLoading(true)

    async function fetchData(userId, param) {
      try {
        let fetchedData

        switch (param) {
          case 'everything':
            const userInfo = await fetchUserData(userId)
            console.table(userInfo)
            const { sessions: userActivity } = await fetchUserData(
              userId,
              'activity'
            )
            console.table(userActivity)
            const { sessions: userAverage } = await fetchUserData(
              userId,
              'average-sessions'
            )
            console.table(userAverage)
            const userPerformance = await fetchUserData(userId, 'performance')
            console.table(userPerformance)
            fetchedData = {
              userInfo,
              userActivity,
              userAverage,
              userPerformance,
            }
            console.log(fetchedData)
            break
          case 'activity':
            // Fetch user activity
            fetchedData = await fetchUserData(userId, param)
            break
          case 'average-sessions':
            //Fetch user average session
            fetchedData = await fetchUserData(userId, param)
            break
          case 'performance':
            // Fetch user performance
            fetchedData = await fetchUserData(userId, param)
            break
          case 'info':
            // Get userInfo
            fetchedData = await fetchUserData(userId)
            break
          default:
            return new Error('Invalid API path')
        }

        // 1.0 Get user's info, score and key data.
        let {
          data: {
            data: {
              userInfos: { firstName },
              todayScore,
              keyData,
            },
          },
        } = await axios.get(`${URL}${userId}`)

        // 1.1 Mapping todayScore for use in Chart.
        todayScore = [
          { score: todayScore * 100 },
          { score: 100 - todayScore * 100 },
        ]

        // 2.0 Get user's activity data.
        let {
          data: {
            data: { sessions: activity },
          },
        } = await axios.get(`${URL}${userId}/activity`)

        // 2.1 Remapping activity data for use in Chart.
        activity = activity.map((obj) => {
          // const date = new Date(obj.day)
          // console.log(date.getDate())
          return {
            day: obj.day[obj.day.length - 1],
            kilogram: obj.kilogram,
            calories: obj.calories,
          }
        })

        // 3.0 Get user's average sessions data.
        let {
          data: {
            data: { sessions: average },
          },
        } = await axios.get(`${URL}${userId}/average-sessions`)

        // 3.1 Remapping average session data for use in Chart.
        average = average.map((obj) => {
          return {
            day: `${getDay(obj.day)}`,
            sessionLength: obj.sessionLength,
          }
        })

        // 4.0 Get user's performance data.
        const {
          data: {
            data: { data: perfValues, kind: perfType },
          },
        } = await axios.get(`${URL}${userId}/performance`)

        // 4.1 Remapping perf data for use in Chart.
        const perf = perfValues.map((obj) => {
          return {
            type: translatePerfType(perfType[obj.kind]),
            score: obj.value,
          }
        })

        // 5.0 If all goes well, we have all our datas. So we construct our
        // top-level data object.
        const data = {
          firstName,
          todayScore,
          keyData,
          activity,
          average,
          perf,
        }
        // 5.1 And we update our data state with it.
        setData(data)
      } catch (error) {
        console.log(error)
        setError(error)
      } finally {
        await wait(600)
        setIsLoading(false)
      }
    }
    fetchData(userId, param)
  }, [userId, param])
  return { isLoading, data, error }
}

async function fetchUserData(userId, param) {
  const {
    data: { data },
  } = await api.get(`${userId}${param ? '/' + param : ''}`)
  return data
}
