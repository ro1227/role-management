import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Spin } from 'antd'

// 懒加载组件
const lazyLoad = (Component: React.LazyExoticComponent<() => JSX.Element>) => {
    return (
        <Suspense
            fallback={
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh'
                    }}
                >
                    <Spin size="large" />
                </div>
            }
        >
            <Component />
        </Suspense>
    )
}

// 页面组件
const Layout = lazy(() => import('@/layout'))
const Login = lazy(() => import('@/pages/login'))
const Dashboard = lazy(() => import('@/pages/dashboard'))
const NotFound = lazy(() => import('@/pages/404'))

const router = createBrowserRouter([
    {
        path: '/login',
        element: lazyLoad(Login)
    },
    {
        path: '/',
        element: lazyLoad(Layout),
        children: [
            {
                path: 'dashboard',
                element: lazyLoad(Dashboard)
            }
        ]
    },
    {
        path: '*',
        element: lazyLoad(NotFound)
    }
])

export default router 