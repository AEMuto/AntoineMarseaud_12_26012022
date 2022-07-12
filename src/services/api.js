import axios from 'axios'

const baseURL = 'https://antoine-marseaud-sportsee-api.herokuapp.com/user/'

/**
 * We create an axios instance to use across our services
 * https://axios-http.com/docs/instance
 * @type {any} - An axios instance
 */
const api = axios.create({ baseURL })

export default api
