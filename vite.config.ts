import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080', //接口地址
                changeOrigin: true, // 允许跨域
                rewrite: (path) => path.replace(/^\/api/, ''),// 路径重写，去掉/api
            },
        },
    },
})
