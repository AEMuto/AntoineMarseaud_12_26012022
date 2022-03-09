import api from './api'

/**
 * A utilitarian function to abstract the use of the get method on our axios instance.
 * @param {string} userId - The user uuid
 * @param {('activity'|'average-sessions'|'performance')} [path] - The API path
 * @returns {Promise<*>}
 */
export async function fetchUserData(userId, path) {
  const {
    data: { data },
  } = await api.get(`${userId}${path ? '/' + path : ''}`)
  return data
}

/**
 * Put here the future method. Ex: another GET | PUT | UPDATE etc...
 */
