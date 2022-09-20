// http.js封装axios的请求方式(get请求、post请求)
// 封装axios超时请求时间
// token设置

import axios from 'axios' // 引用axios
import config from '@/api/config'

// 使用到代理
const _baseUrl = config.baseUrl.dev
const apiUrl = _baseUrl
// axios 配置
// 设置接口响应时间
axios.defaults.timeout = 120000
// 这是调用数据接口,公共接口url+调用接口名
axios.defaults.baseURL = 'http://192.168.137.1:8080'+apiUrl

// 增加token（先写了个固定的token，实际项目中应该是通过接口获取到token）
// axios.defaults.headers.common['X-Access-Token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzkxMTYzMzcsInVzZXJuYW1lIjoiYWRtaW4ifQ.YPJ7BV_Pg27NtPVk0FfoYsTXRpR35KXA64mMDibUzHI';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 封装get请求
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params
            })
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

// 封装post请求
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(
            response => {
                resolve(response.data)
            },
            err => {
                reject(err)
            }
        )
    })
}