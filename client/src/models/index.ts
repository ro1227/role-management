import { create } from 'dva-core'
import createLoading from 'dva-loading'

// 创建dva实例
const app = create({
    onError(error: any) {
        console.error(error)
    }
})

// 注册插件
app.use(createLoading())

// 注册models
const files = import.meta.glob('./*/index.ts', { eager: true })
Object.values(files).forEach((model: any) => {
    app.model(model.default)
})

// 启动
app.start()

export default app._store 