// http.js 或 http.ts（如果是 TypeScript）
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// 创建一个 Axios 实例
const service = axios.create({
    // 基础 URL
    baseURL: 'http://localhost:8080',
    // 超时时间
    timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么，例如设置 token
        // const token = localStorage.getItem('token');
        // token && (config.headers.Authorization = `Bearer ${token}`);
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        // 对响应错误做点什么
        if (error.response) {
            // 存在响应体，根据响应状态码处理
            if (error.response.status === 401) {
                // 例如，处理未授权的访问
                // 可能需要执行一些额外的操作，比如跳转到登录页面
            }
            // 其他状态码的处理...
        } else if (error.request) {
            // 请求已发出但没有收到响应
        } else {
            // 发生了触发请求错误的问题
        }
        return Promise.reject(error);
    }
);

export default service;