import axios from 'axios'

const baseURL = 'http://localhost:3000/user/'

/**
 * We create an axios instance to use across our services
 * https://axios-http.com/docs/instance
 * @type {any} - An axios instance
 */
const api = axios.create({ baseURL })

export default api
