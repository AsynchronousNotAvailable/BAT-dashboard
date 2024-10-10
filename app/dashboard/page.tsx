"use client";
import React, { useRef } from "react";
import { Card, Col, Row, Typography, Layout, Button } from "antd";
import { BellOutlined, GlobalOutlined, LineChartOutlined, FireOutlined, UserOutlined, MessageOutlined } from "@ant-design/icons";
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

  return (
    <Layout style={{ padding: "16px", backgroundColor: "#f0f2f5" }}>
      <Content>
        {/* Welcome Banner Section */}
        <Card style={compactWelcomeBannerStyle}>
          <Row align="middle" justify="space-between" gutter={[12, 12]}>
            <Col xs={24} lg={10}>
              <Title level={3} style={compactGradientTitleStyle}>
                Welcome Back, Admin!
              </Title>
              <Text style={{ fontStyle: "italic", fontSize: "14px" }}>
                Energy Efficiency up by 20%. Small changes today, lasting impact tomorrow!
              </Text>
              {/* ChatBot Button on a new line and styled */}
              <div style={{ marginTop: "16px" }}>
                <Button
                  type="primary"
                  icon={<MessageOutlined />}
                  style={largeChatBotButtonStyle}

                >
                  Chat with AI
                </Button>
              </div>
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
                  <BellOutlined style={iconStyle} /> {/* Black Bell Icon */}
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
                      <GlobalOutlined style={iconStyle} /> {/* Black Globe Icon */}
                    </Col>
                    <Col>
                      <Title level={4} style={cardTitleStyle}>
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
                      <UserOutlined style={iconStyle} /> {/* Black User Icon */}
                    </Col>
                    <Col>
                      <Title level={4} style={cardTitleStyle}>
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
                  <LineChartOutlined style={iconStyle} /> {/* Black Line Chart Icon */}
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
                  <FireOutlined style={iconStyle} /> {/* Black Fire Icon */}
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
  padding: "0px 16px", // Reduced padding to make the section more compact
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

// Large and styled ChatBot Button
const largeChatBotButtonStyle = {
  backgroundColor: "#4F46E5",
  fontSize: "16px",
  padding: "10px 20px",
  borderRadius: "8px",
  height: "50px",
};
