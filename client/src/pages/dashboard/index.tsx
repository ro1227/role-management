import { Card, Row, Col, Statistic } from 'antd'
import {
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    CheckCircleOutlined
} from '@ant-design/icons'

const Dashboard = () => {
    return (
        <div>
            <Row gutter={16}>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title="用户总数"
                            value={112}
                            prefix={<UserOutlined />}
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title="角色总数"
                            value={8}
                            prefix={<TeamOutlined />}
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title="权限总数"
                            value={36}
                            prefix={<FileOutlined />}
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title="在线用户"
                            value={5}
                            prefix={<CheckCircleOutlined />}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard 