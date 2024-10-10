"use client";
import React, { useEffect, useRef } from "react";
import { Button, Card, Col, Row, Typography, Carousel, Layout, Progress } from "antd";
import Image from "next/image";
import { DashboardBarChart } from "./components/barchart";
import UserCard from "./components/card";
import Notice from "./components/list";
import ThreadCard from "./components/forum";
import ProductDevelopmentTimeline from "./components/productDevTimeline";
import ProgressBar from "./components/progress";
import AIProductInsightsCard from "./chat/components/aiProductInsight";
import SustainabilityIndex from "./components/progress";

const { Title, Text } = Typography;
const { Content } = Layout;

const Dashboard: React.FC = () => {
  const chartRef: any = useRef();

  useEffect(() => {
    console.log({ chartRef });
    if (chartRef.current) {
      // Additional setup logic if required
    }
  }, []);

  return (
    <Layout style={{ padding: "24px" }}>
      <Content style={{ backgroundColor: "#f0f2f5" }}>
        <div style={{ marginBottom: "24px" }}>
          {/* Welcome Banner */}
          <Card style={{ borderRadius: "10px" }}>
            <Row align="middle" justify="space-between">
              <Col span={16}>
                <Title
                  level={2}
                  style={{
                    fontWeight: "bold",
                    background: "linear-gradient(90deg, #42004B, #B100B1)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Welcome Back, Admin! Let's drive innovation in mental wellbeing today.
                </Title>
                <Text style={{ fontStyle: "italic" }}>
                  Energy Efficiency up by 20%. Small changes today, lasting impact tomorrow!
                </Text>
              </Col>
              <Col span={8}>
                <SustainabilityIndex />
              </Col>
            </Row>
          </Card>
        </div>

        <Row gutter={16} style={{ marginBottom: "24px" }}>
          {/* Regulatory Compliance and AI Product Insights */}
          <Col span={6}>
            <Card title="Regulatory Compliance Approval Status" bordered={false}>
              <Notice />
            </Card>
          </Col>
          <Col span={18}>
          <Row gutter={[18, 18]} style={{ marginBottom: "24px" }}>
  <Col span={18}>
    <ProductDevelopmentTimeline />
  </Col>
</Row>

          </Col>
          <Col span={4}>
            <UserCard />
          </Col>
        </Row>



        <Row gutter={16} style={{ marginBottom: "24px" }}>
          {/* SEO Analysis and Competitive Analysis */}
          <Col span={12}>
            <Card title="Competitive Product Analysis" bordered={false}>
              <DashboardBarChart />
            </Card>
          </Col>
          <Col span={12}>
            <ThreadCard />
          </Col>
        </Row>


        <Row gutter={16}>
          {/* Product Timeline & Updates */}
          <Col span={24}>

          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Dashboard;