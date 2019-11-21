import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export const axiosInstance = axios.create({
  baseURL: "http://api.ichannels.com.tw/sitemember"
})
axiosInstance.interceptors.request.use((config: AxiosRequestConfig & { startAt: number }) => {
  const startAt: number = new Date().getTime()
  config.startAt = startAt
  return config
})
axiosInstance.interceptors.response.use((response: AxiosResponse & { durationTime: number; config: { startAt: number } }) => {
  const endTime: number = new Date().getTime()
  const durationTime = endTime - response.config.startAt
  response.durationTime = durationTime
  return response
})