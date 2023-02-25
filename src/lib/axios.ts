import axios, { AxiosHeaders } from 'axios'

const BACKEND_API_URL = process.env.BACKEND_API_URL

const api = axios.create({
  baseURL: `${BACKEND_API_URL}`,
})

api.interceptors.request.use(
  config => {
    if (config.headers) {
      ;(config.headers as AxiosHeaders).set('Authorization', ``)
    }
    return config
  },
  error => Promise.reject(error),
)

api.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
)

export default api

export interface ApiResponse {
  status: 'success' | 'fail' | 'error'
  meta: {
    total: number
    lastPage: number
    currentPage: number
    perPage: number
    prev: number | null
    next: number | null
  }
}
