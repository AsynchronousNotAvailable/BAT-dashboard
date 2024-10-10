import { Progress, Tooltip, Card, Row, Col, Typography } from "antd";
import {
    CheckCircleOutlined,
    WarningOutlined,
    ThunderboltOutlined,
    GlobalOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const { Title } = Typography;

const SustainabilityIndex: React.FC = () => (
    <StyledCard>


        <Row gutter={24}>
            {/* Column 1 */}
            <Col xs={24} sm={12}>
                <MetricWrapper>
                    <Tooltip title="Target: Reduce waste to 150 kg per month">
                        <MetricHeader>Waste Reduction</MetricHeader>
                        <ProgressWrapper>
                            <Progress
                                percent={67} // Real metric: 67% of the target achieved
                                strokeColor="#FFA500"
                                trailColor="lightgrey"
                                status="active"
                            />
                            <WarningOutlined style={{ color: "#FFA500", marginLeft: "10px" }} />
                        </ProgressWrapper>
                        <Hint>Current: 200 kg / Target: 150 kg per month</Hint>
                    </Tooltip>
                </MetricWrapper>

                <MetricWrapper>
                    <Tooltip title="Target: Achieve 90% renewable energy usage">
                        <MetricHeader>Renewable Energy Usage</MetricHeader>
                        <ProgressWrapper>
                            <Progress
                                percent={85} // Real metric: 85% renewable energy usage achieved
                                strokeColor="#007BFF"
                                trailColor="lightgrey"
                                status="active"
                            />
                            <ThunderboltOutlined style={{ color: "#007BFF", marginLeft: "10px" }} />
                        </ProgressWrapper>
                        <Hint>Current: 85% / Target: 90% renewable energy</Hint>
                    </Tooltip>
                </MetricWrapper>
            </Col>

            {/* Column 2 */}
            <Col xs={24} sm={12}>
                <MetricWrapper>
                    <Tooltip title="Target: Improve energy efficiency by 25%">
                        <MetricHeader>Energy Efficiency</MetricHeader>
                        <ProgressWrapper>
                            <Progress
                                percent={60} // Real metric: 60% energy efficiency improvement
                                strokeColor="#FFD700"
                                trailColor="lightgrey"
                                status="active"
                            />
                            <CheckCircleOutlined style={{ color: "#FFD700", marginLeft: "10px" }} />
                        </ProgressWrapper>
                        <Hint>Current: 15% / Target: 25% improvement</Hint>
                    </Tooltip>
                </MetricWrapper>

                <MetricWrapper>
                    <Tooltip title="Target: Reduce carbon footprint to 50 kg CO2 per month">
                        <MetricHeader>Carbon Footprint</MetricHeader>
                        <ProgressWrapper>
                            <Progress
                                percent={72} // Real metric: 72% progress toward reducing carbon footprint
                                strokeColor="#52C41A"
                                trailColor="lightgrey"
                                status="active"
                            />
                            <CheckCircleOutlined style={{ color: "#52C41A", marginLeft: "10px" }} />
                        </ProgressWrapper>
                        <Hint>Current: 55 kg CO2 / Target: 50 kg CO2 per month</Hint>
                    </Tooltip>
                </MetricWrapper>
            </Col>
        </Row>
    </StyledCard>
);

export default SustainabilityIndex;

// Styled Components
const StyledCard = styled(Card)`
    margin: 0; /* Remove shadow by setting margin to 0 */
    // padding: 16px;
    border: none; /* Remove the border to integrate smoothly */
    background-color: transparent; /* Set the background to transparent */
`;

const MetricWrapper = styled.div`
    margin-bottom: 20px;
`;

const MetricHeader = styled.span`
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 4px;
    display: inline-block;
`;

const ProgressWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
`;

const Hint = styled.span`
    color: #8c8c8c;
    font-size: 12px;
    margin-top: 4px;
    display: inline-block;
`;
