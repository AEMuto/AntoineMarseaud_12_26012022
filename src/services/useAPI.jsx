import { useEffect, useState } from 'react'
import wait from '../utils/wait'
import mockData from '../mock/data'
import handlePathAPI from './handlePathAPI'

/**
 * Custom hook where we centralize our API calls and data remapping. It returns
 * an object containing three keys.
 * @param {string} userId - The user uuid
 * @param {('everything'|'activity'|'average-sessions'|'info'|'performance')} path - The API path
 * @returns {{isLoading: boolean, data: {}, error: {}}}
 * 'isLoading' is used to display a loading spinner while we fetch the data.
 * 'error' is used to display an error message if an error occurs while we fetch the data.
 * 'data' contains every information we need in the charts.
 */
export function useAPI(userId, path) {
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

    async function fetchData(userId, path) {
      try {
        const result = await handlePathAPI(userId, path)
        setData(result)
      } catch (error) {
        console.log(error)
        setError(error)
      } finally {
        await wait(600)
        setIsLoading(false)
      }
    }
    fetchData(userId, path)
  }, [userId, path])
  return { isLoading, data, error }
}
