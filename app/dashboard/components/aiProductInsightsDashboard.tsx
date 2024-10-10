import React from "react";
import { Card, Typography, Row, Col, Progress, Statistic, Tooltip } from "antd";
import { ExperimentOutlined, BulbOutlined, ToolOutlined, RocketOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Title } = Typography;

const AIProductInsightsDashboard: React.FC = () => {
  return (
    <EqualSizedCard>
      <Row align="middle" style={{ marginBottom: 12 }}>
        <Col span={24}>
          <Title level={4} style={{ marginBottom: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Product Development Tracking
          </Title>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Tooltip title="Ideas being generated.">
            <EqualTrackingCard>
              <BulbOutlined style={{ fontSize: 24, color: "#FFA500" }} />
              <Statistic title="Ideation" value={7} suffix="Ideas" />
              <Progress percent={40} size="small" status="active" strokeColor="#FFA500" />
            </EqualTrackingCard>
          </Tooltip>
        </Col>
        <Col span={6}>
          <Tooltip title="Ideas in concept validation.">
            <EqualTrackingCard>
              <ExperimentOutlined style={{ fontSize: 24, color: "#007BFF" }} />
              <Statistic title="Concept Validation" value={3} suffix="Ideas" />
              <Progress percent={60} size="small" status="active" strokeColor="#007BFF" />
            </EqualTrackingCard>
          </Tooltip>
        </Col>
        <Col span={6}>
          <Tooltip title="Ideas in prototyping.">
            <EqualTrackingCard>
              <ToolOutlined style={{ fontSize: 24, color: "#52C41A" }} />
              <Statistic title="Prototyping & Testing" value={1} suffix="Product" />
              <Progress percent={70} size="small" status="active" strokeColor="#52C41A" />
            </EqualTrackingCard>
          </Tooltip>
        </Col>
        <Col span={6}>
          <Tooltip title="Ideas ready for launch.">
            <EqualTrackingCard>
              <RocketOutlined style={{ fontSize: 24, color: "#FF4D4F" }} />
              <Statistic title="Launch Preparation" value={1} suffix="Product" />
              <Progress percent={85} size="small" status="active" strokeColor="#FF4D4F" />
            </EqualTrackingCard>
          </Tooltip>
        </Col>
      </Row>
    </EqualSizedCard>
  );
};

export default AIProductInsightsDashboard;

// Styled Components
const EqualSizedCard = styled(Card)`
  padding: 1px;
  background-color: #fff;
  border-radius: 8px;
`;

const EqualTrackingCard = styled.div`
  background-color: #fafafa;
  padding: 12px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  width: 100%;
  text-align: center;
`;
