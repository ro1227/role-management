import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import Sider from './components/Sider'
import Header from './components/Header'

const { Content } = Layout

const MainLayout = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider />
            <Layout>
                <Header />
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff'
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}

export default MainLayout 