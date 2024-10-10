import React from "react";
import { Card, Space, Typography, Row, Col } from "antd";
import {
    RiseOutlined,
    EyeOutlined,
    FallOutlined,
    BulbOutlined,
    ThunderboltOutlined,
    UserOutlined,
} from "@ant-design/icons";

const UserCard: React.FC = () => {
    const { Title, Text } = Typography;

    return (
        <Card
            bordered={false}
            style={{
                borderRadius: "none",
                padding: "0px", // Remove padding for a compact design
                width: "100%", // Full width for responsiveness
                backgroundColor: "transparent", // Remove the card background
                boxShadow: "none", // Remove box shadow
            }}
        >
            <Space direction="vertical" size={15} style={{ width: "100%" }}>
                {/* Total Users */}
                <Space direction="vertical" size={2} style={{ width: "100%" }}>
                    <Text style={{ fontSize: "1.2em", color: "#475569" }}>Total Users</Text>
                    <Row align="middle" justify="space-between">
                        <Col>
                            <Space align="baseline" size={6}>
                                <EyeOutlined
                                    style={{
                                        color: "#4F46E5",
                                        fontSize: "18px",
                                        backgroundColor: "#EEF2FF",
                                        padding: "6px",
                                        borderRadius: "50%",
                                    }}
                                />
                                <Title level={5} style={{ margin: 0 }}>4,818</Title>
                                <RiseOutlined style={{ color: "#22C55E", fontSize: "16px" }} />
                                <Text style={{ color: "#22C55E", fontSize: "1.0em" }}>44.2%</Text>
                            </Space>
                        </Col>
                    </Row>
                </Space>

                {/* Average Use Time */}
                <Space direction="vertical" size={2} style={{ width: "100%" }}>
                    <Text style={{ fontSize: "1.2em", color: "#475569" }}>Average Use Time</Text>
                    <Row align="middle" justify="space-between">
                        <Col>
                            <Space align="baseline" size={6}>
                                <BulbOutlined
                                    style={{
                                        color: "#F59E0B", // New vibrant color
                                        fontSize: "18px",
                                        backgroundColor: "#FFF7E6",
                                        padding: "6px",
                                        borderRadius: "50%",
                                    }}
                                />
                                <Title level={5} style={{ margin: 0 }}>118,818</Title>
                                <FallOutlined style={{ color: "red", fontSize: "16px" }} />
                                <Text style={{ color: "red", fontSize: "1.0em" }}>2.8%</Text>
                            </Space>
                        </Col>
                    </Row>
                </Space>

                {/* Average Sustainability Index */}
                <Space direction="vertical" size={2} style={{ width: "100%" }}>
                    <Text style={{ fontSize: "1.2em", color: "#475569" }}>Average Sustainability Index</Text>
                    <Row align="middle" justify="space-between">
                        <Col>
                            <Space align="baseline" size={6}>
                                <ThunderboltOutlined
                                    style={{
                                        color: "#FF4D4F", // New vibrant color
                                        fontSize: "18px",
                                        backgroundColor: "#FFF1F0",
                                        padding: "6px",
                                        borderRadius: "50%",
                                    }}
                                />
                                <Title level={5} style={{ margin: 0 }}>12,158</Title>
                                <RiseOutlined style={{ color: "#22C55E", fontSize: "16px" }} />
                                <Text style={{ color: "#22C55E", fontSize: "1.0em" }}>8%</Text>
                            </Space>
                        </Col>
                    </Row>
                </Space>
            </Space>
        </Card>
    );
};

export default UserCard;
