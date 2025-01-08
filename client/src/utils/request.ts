import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { message } from 'antd'

const request = axios.create({
    baseURL: '/api',
    timeout: 10000
})

// 请求拦截器
request.interceptors.request.use(
    (config) => {
        // 可以在这里添加token等认证信息
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
request.interceptors.response.use(
    (response: AxiosResponse) => {
        const { data } = response
        // 这里可以根据后端的响应结构调整
        if (data.code === 200) {
            return data.data
        }
        message.error(data.message || '请求失败')
        return Promise.reject(data)
    },
    (error) => {
        message.error(error.message || '网络错误')
        return Promise.reject(error)
    }
)

export default request 