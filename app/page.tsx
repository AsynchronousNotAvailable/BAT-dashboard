
"use client";

import { Button, Input, Form, Divider, Space, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";


const { Title, Text } = Typography;

const LoginPage = () => {
    const router = useRouter();

    const onFinish = (values: any) => {
        console.log("Form Values: ", values);
        // Assuming the login is successful, navigate to the dashboard
        router.push("/dashboard");
    };
    return (
        <section
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#f0f2f5",
            }}
        >
            <div
                style={{
                    padding: 40,
                    backgroundColor: "white",
                    borderRadius: 8,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    maxWidth: 400,
                    width: "100%",
                }}
            >
                <Space direction="vertical" align="center" style={{ width: "100%" }}>
                    <img
                        style={{ width: 50, height: 50 }}
                        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                        alt="Ant Design Logo"
                    />
                    <Title level={2} style={{ marginBottom: 20 }}>
                        Login
                    </Title>
                </Space>

                <Divider />

                <Form
                    name="login_form"
                    initialValues={{ remember: true }}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    {/* Username Input */}
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: "Please input your username!" }]}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Username"
                            size="large"
                        />
                    </Form.Item>

                    {/* Password Input */}
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: "Please input your password!" }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Password"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block size="large">
                            Log In
                        </Button>
                    </Form.Item>
                </Form>

                <Divider>Or</Divider>

                <Button href="/register" type="link" block>
                    Register Now
                </Button>
            </div>
        </section>
    );
};

export default LoginPage;

