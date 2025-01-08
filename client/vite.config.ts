import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@api': path.resolve(__dirname, './src/api'),
            '@pages': path.resolve(__dirname, './src/pages')
        }
    },
    server: {
        port: 3000,
        proxy: {
            '/api': {
                target: `http://${process.env.HOST}:${process.env.PORT}`,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
}) 