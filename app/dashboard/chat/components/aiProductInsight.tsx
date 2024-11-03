"use client";

import React from "react";
import { Card, Space, Button, Tooltip, Row, Col, Typography } from "antd";
import { Radar } from "@ant-design/plots";
import {
    BarChartOutlined,
    RiseOutlined,
    ProfileOutlined,
    InfoCircleOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const { Title, Text } = Typography;

const AIProductInsightsCard: React.FC<{ config: any, focusText: string }> = ({ config, focusText }) => {
    const afterdata = [
        { aspect: "Consumer Demand", value: 85 },
        { aspect: "Innovation", value: 75 },
        { aspect: "Market Fit", value: 90 },
        { aspect: "Scalability", value: 60 },
        { aspect: "Sustainability", value: 80 },
    ];

    const afterConfig = {
        data: afterdata,
        xField: "aspect",
        yField: "value",
        areaStyle: { fillOpacity: 0.2 },
        point: {
            size: 4,
            shape: "circle",
            style: { fill: "#fff", stroke: "#4F46E5", lineWidth: 1 },
        },
        line: {
            color: "#4F46E5", // Updated line color
        },
        xAxis: {
            line: null,
            label: {
                style: { fill: "#8c8c8c", fontSize: 12 },
            },
        },
        yAxis: {
            min: 0,
            max: 100,
            tickCount: 4,
            label: {
                style: { fill: "#8c8c8c", fontSize: 12 },
            },
        },
        legend: false,
    };

    return (
        <StyledCard>
            <Row align="middle">
                <Col span={16}>
                    <Title
                        level={4}
                        style={{ marginBottom: 0, color: "#4F46E5" }}
                    >
                        <RiseOutlined style={{ marginRight: 8 }} />
                        AI Product Insights
                    </Title>
                </Col>
                <Col span={8} style={{ textAlign: "right" }}>
                    <Tooltip title="Summary of AI-driven insights on product performance.">
                        <InfoCircleOutlined
                            style={{ fontSize: 18, color: "#8c8c8c" }}
                        />
                    </Tooltip>
                </Col>
            </Row>

            <Row gutter={[16, 16]} align="middle" style={{ marginTop: 16 }}>
                {/* Key Metrics Section */}
                <Col span={12}>
                    <MetricCard>
                        <Space size={8}>
                            <BarChartOutlined
                                style={{ fontSize: 18, color: "#ff5722" }}
                            />
                            <MetricInfo>
                                <Text strong style={{ fontSize: 14 }}>
                                    Top Focus Areas
                                </Text>
                                <Text type="secondary" style={{ fontSize: 13 }}>
                                    {focusText}
                                </Text>
                            </MetricInfo>
                        </Space>
                    </MetricCard>
                </Col>
                <Col span={12}>
                    <MetricCard>
                        <Space size={8}>
                            <ProfileOutlined
                                style={{ fontSize: 18, color: "#52c41a" }}
                            />
                            <MetricInfo>
                                <Text strong style={{ fontSize: 14 }}>
                                    Emerging Trends
                                </Text>
                                <Text type="secondary" style={{ fontSize: 13 }}>
                                    Brainwave Wearables, Cognitive Support
                                </Text>
                            </MetricInfo>
                        </Space>
                    </MetricCard>
                </Col>
            </Row>

            {/* Radar Chart to Show AI Analysis */}
            <div style={{ width: "100%", marginTop: 16 }}>
                <Radar {...config} />
            </div>

            {/* Actionable Insights Button */}
            <Button
                type="primary"
                icon={<RiseOutlined />}
                size="middle"
                style={{
                    marginTop: 16,
                    width: "100%",
                    borderRadius: 6,
                    backgroundColor: "#4F46E5",
                    borderColor: "#4F46E5",
                }}
            >
                Explore Insights
            </Button>
        </StyledCard>
    );
};

// Styled Components
const StyledCard = styled(Card)`
    border-radius: 10px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    padding: 10px;
    max-width: 500px;
    margin: 10px auto;
    background-color: #ffffff;
`;

const MetricCard = styled.div`
    background-color: #fafafa;
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const MetricInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export default AIProductInsightsCard;
