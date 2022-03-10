import modelingData from './modelingData'
import { fetchUserData } from './fetchData'
import ModelingData from './modelingData'

/**
 * A utilitarian function that get us the data we need, depending on the path parameter we pass in.
 * @param userId
 * @param {('everything'|'activity'|'average-sessions'|'info'|'performance')} path - The options for the path parameter
 * @returns {Promise<{}|Error>}
 */
async function handlePathAPI(userId, path) {
  const fetchedData = {}
  switch (path) {
    // ********************************
    case 'everything':
      fetchedData.userInfo = await fetchUserData(userId)

      fetchedData.userActivity = await fetchUserData(userId, 'activity').then(
        (res) => res['sessions']
      )

      fetchedData.userAverage = await fetchUserData(
        userId,
        'average-sessions'
      ).then((res) => res['sessions'])

      fetchedData.userPerformance = await fetchUserData(userId, 'performance')

      return new ModelingData(fetchedData)
    // ********************************
    case 'activity':
      fetchedData.userActivity = await fetchUserData(userId, path).then(
        (res) => res['sessions']
      )
      return new ModelingData(fetchedData)
    // ********************************
    case 'average-sessions':
      fetchedData.userAverage = await fetchUserData(userId, path).then(
        (res) => res['sessions']
      )
      return new ModelingData(fetchedData)
    // ********************************
    case 'performance':
      fetchedData.userPerformance = await fetchUserData(userId, path)
      return new ModelingData(fetchedData)
    // ********************************
    case 'info':
      fetchedData.userInfo = await fetchUserData(userId)
      return new ModelingData(fetchedData)
    // ********************************
    default:
      return new Error('Invalid API path')
  }
}

export default handlePathAPI
