import axios from 'axios'

const baseURL = 'http://localhost:3000/user/'

const api = axios.create({ baseURL })

export default api
