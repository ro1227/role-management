import { Form, Input, Button, Card } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import styles from './index.module.css'

const Login = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values)
    }

    return (
        <div className={styles.container}>
            <Card
                title="角色管理系统"
                className={styles.card}
            >
                <Form
                    name="login"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名'
                            }
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="用户名"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码'
                            }
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="密码"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                        >
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login 