"use client";

import React from "react";
import { Card, Typography, Space, Row, Col, Progress, Statistic } from "antd";
import { ExperimentOutlined, BulbOutlined, ToolOutlined, RocketOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Title } = Typography;

const AIProductInsightsDashboard: React.FC = () => {
    return (
        <CompactStyledCard>
            <Row align="middle" style={{ marginBottom: 12 }}>
                <Col span={24}>
                    <Title level={4} style={{ marginBottom: 0, color: "#4F46E5" }}>
                        <RocketOutlined style={{ marginRight: 8 }} />
                        Product Development Tracking
                    </Title>
                </Col>
            </Row>

            <Row gutter={[8, 8]} align="middle" justify="space-between">
                {/* Tracking Metrics Section - Compact Layout in a Single Row */}
                <Col flex="1 1 auto">
                    <CompactTrackingCard>
                        <BulbOutlined style={{ fontSize: 20, color: "#FFA500" }} />
                        <Statistic title="Ideation" value={25} suffix="Ideas" />
                        <Progress percent={40} size="small" status="active" />
                    </CompactTrackingCard>
                </Col>
                <Col flex="1 1 auto">
                    <CompactTrackingCard>
                        <ExperimentOutlined style={{ fontSize: 20, color: "#007BFF" }} />
                        <Statistic title="Concept Validation" value={18} suffix="Ideas" />
                        <Progress percent={60} size="small" status="active" />
                    </CompactTrackingCard>
                </Col>
                <Col flex="1 1 auto">
                    <CompactTrackingCard>
                        <ToolOutlined style={{ fontSize: 20, color: "#52C41A" }} />
                        <Statistic title="Prototyping & Testing" value={12} suffix="Ideas" />
                        <Progress percent={70} size="small" status="active" />
                    </CompactTrackingCard>
                </Col>
                <Col flex="1 1 auto">
                    <CompactTrackingCard>
                        <RocketOutlined style={{ fontSize: 20, color: "#FF4D4F" }} />
                        <Statistic title="Launch Preparation" value={7} suffix="Ideas" />
                        <Progress percent={85} size="small" status="active" />
                    </CompactTrackingCard>
                </Col>
            </Row>
        </CompactStyledCard>
    );
};

// Styled Components
const CompactStyledCard = styled(Card)`
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 8px;
    max-width: 800px;
    margin: 10px auto;
    background-color: #ffffff;
`;

const CompactTrackingCard = styled(Space)`
    background-color: #fafafa;
    padding: 8px;
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default AIProductInsightsDashboard;
