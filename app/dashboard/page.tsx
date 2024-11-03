"use client";
import React, { useRef } from "react";
import { Card, Col, Row, Typography, Layout, Button, notification } from "antd";
import {
    BellOutlined,
    GlobalOutlined,
    LineChartOutlined,
    FireOutlined,
    UserOutlined,
    MessageOutlined,
} from "@ant-design/icons";
import AIProductInsightsDashboard from "./components/aiProductInsightsDashboard";
import SustainabilityIndex from "./components/progress";
import UserCard from "./components/card";
import Notice from "./components/list";
import ThreadCard from "./components/forum";
import { DashboardBarChart } from "./components/barchart";

const { Title, Text } = Typography;
const { Content } = Layout;

const Dashboard: React.FC = () => {
    const chartRef: any = useRef();

    // Notification function
    const openNotification = () => {
        const handleYesClick = () => {
            notification.close("persistent-notification"); // Close the notification
            console.log("Yes clicked"); // Add additional actions if needed
        };

        const handleNoClick = () => {
            notification.close("persistent-notification"); // Close the notification
            console.log("No clicked"); // Add additional actions if needed
        };

        // Check if notification is already open to prevent duplicates
        notification.open({
            key: "persistent-notification", // Unique key to prevent multiple notifications
            message: "New Update Available",
            description:
                "Hi Alex! I’ve detected a growing trend in mindfulness monitoring with AI-powered stress relief. Would you like to explore this?",
            icon: <BellOutlined style={{ color: "#108ee9" }} />,
            placement: "topRight",
            btn: (
                <div>
                    <Button
                        type="primary"
                        onClick={handleYesClick}
                        style={{ marginRight: 8 }}
                    >
                        Yes
                    </Button>
                    <Button onClick={handleNoClick}>No</Button>
                </div>
            ),
        });
    };

  
  React.useEffect(() => {
      openNotification(); // Call the notification function
  }, []);


    return (
        <Layout style={{ padding: "16px", backgroundColor: "#f0f2f5" }}>
            <Content>
                {/* Welcome Banner Section */}
                <Card style={compactWelcomeBannerStyle}>
                    <Row
                        align="middle"
                        justify="space-between"
                        gutter={[12, 12]}
                    >
                        <Col xs={24} lg={10}>
                            <Title level={3} style={compactGradientTitleStyle}>
                                Welcome Back, Admin!
                            </Title>
                            <Text
                                style={{
                                    fontStyle: "italic",
                                    fontSize: "14px",
                                }}
                            >
                                Energy Efficiency up by 20%. Small changes
                                today, lasting impact tomorrow!
                            </Text>
                            <div style={{ marginTop: "16px" }}>
                                <Button
                                    type="primary"
                                    icon={<MessageOutlined />}
                                    style={largeChatBotButtonStyle}
                                >
                                    Chat with AI
                                </Button>
                            </div>
                            {/* Notification Toggle Button */}
                            {/* <div style={{ marginTop: "16px" }}>
                                <Button
                                    type="default"
                                    icon={<BellOutlined />}
                                    onClick={openNotification}
                                    style={{ borderRadius: "8px" }}
                                >
                                    Toggle Notification
                                </Button>
                            </div> */}
                        </Col>
                        <Col xs={24} lg={14}>
                            <AIProductInsightsDashboard />
                        </Col>
                    </Row>
                </Card>

                <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
                    {/* Left Column: Regulatory Compliance */}
                    <Col xs={24} lg={6}>
                        <Card bordered={false} style={cardStyle}>
                            <Row align="middle" gutter={[8, 8]}>
                                <Col>
                                    <BellOutlined style={iconStyle} />
                                </Col>
                                <Col>
                                    <Title level={4} style={cardTitleStyle}>
                                        Regulatory Compliance Notices
                                    </Title>
                                </Col>
                            </Row>
                            <Notice />
                        </Card>
                    </Col>

                    {/* Right Column: Sustainability and User Metrics */}
                    <Col xs={24} lg={18}>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} lg={16}>
                                <Card bordered={false} style={cardStyle}>
                                    <Row align="middle" gutter={[8, 8]}>
                                        <Col>
                                            <GlobalOutlined style={iconStyle} />
                                        </Col>
                                        <Col>
                                            <Title
                                                level={4}
                                                style={cardTitleStyle}
                                            >
                                                Sustainability Metrics
                                            </Title>
                                        </Col>
                                    </Row>
                                    <SustainabilityIndex />
                                </Card>
                            </Col>

                            <Col xs={24} lg={8}>
                                <Card bordered={false} style={cardStyle}>
                                    <Row align="middle" gutter={[8, 8]}>
                                        <Col>
                                            <UserOutlined style={iconStyle} />
                                        </Col>
                                        <Col>
                                            <Title
                                                level={4}
                                                style={cardTitleStyle}
                                            >
                                                User Metrics
                                            </Title>
                                        </Col>
                                    </Row>
                                    <UserCard />
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* Bottom Section: Competitive Analysis and Threads */}
                <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
                    <Col xs={24} lg={12}>
                        <Card bordered={false} style={cardStyle}>
                            <Row align="middle" gutter={[8, 8]}>
                                <Col>
                                    <LineChartOutlined style={iconStyle} />
                                </Col>
                                <Col>
                                    <Title level={4} style={cardTitleStyle}>
                                        Competitive Product Analysis
                                    </Title>
                                </Col>
                            </Row>
                            <DashboardBarChart />
                        </Card>
                    </Col>
                    <Col xs={24} lg={12}>
                        <Card bordered={false} style={cardStyle}>
                            <Row align="middle" gutter={[8, 8]}>
                                <Col>
                                    <FireOutlined style={iconStyle} />
                                </Col>
                                <Col>
                                    <Title level={4} style={cardTitleStyle}>
                                        Hottest Thread
                                    </Title>
                                </Col>
                            </Row>
                            <ThreadCard />
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default Dashboard;

// Consistent styles for cards, titles, and layout
const compactWelcomeBannerStyle = {
    borderRadius: "10px",
    padding: "0px 16px",
    background: "#fff",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",
};

const compactGradientTitleStyle = {
    fontWeight: "bold",
    background: "linear-gradient(90deg, #42004B, #B100B1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "22px",
};

const cardStyle = {
    borderRadius: "10px",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",
    padding: "10px",
    backgroundColor: "#ffffff",
};

const cardTitleStyle = {
    margin: 0,
    fontWeight: 500,
};

const iconStyle = {
    fontSize: "24px",
    color: "#000",
};

const largeChatBotButtonStyle = {
    backgroundColor: "#4F46E5",
    fontSize: "16px",
    padding: "10px 20px",
    borderRadius: "8px",
    height: "50px",
};
