import { Progress, Tooltip, Space, Flex, Card } from "antd";
import {
    CheckCircleOutlined,
    WarningOutlined,
    ExclamationCircleOutlined,
    ThunderboltOutlined,
} from "@ant-design/icons";

const SustainabilityIndex: React.FC = () => (
    <Card style={{margin: "10px"}}>
        <Flex vertical={false} gap={10}>
            <Space
                direction="vertical"
                size="middle"
                style={{ width: "350px", marginRight: "20px" }}
            >
                <Tooltip title="Waste Reduction: Target 75%">
                    <div>
                        <span>Waste Reduction</span>
                        <Flex vertical={false}>
                            <Progress
                                percent={50}
                                strokeColor="orange"
                                trailColor="lightgrey"
                            />
                            <WarningOutlined
                                style={{ color: "orange", marginLeft: "10px" }}
                            />
                        </Flex>
                    </div>
                </Tooltip>

                {/* Renewable Energy */}

                <Tooltip title="Renewable Energy: Target 90%">
                    <div>
                        <span>Renewable Energy</span>
                        <Flex vertical={false}>
                            <Progress
                                percent={95}
                                strokeColor="blue"
                                trailColor="lightgrey"
                            />
                            <ThunderboltOutlined
                                style={{ color: "blue", marginLeft: "10px" }}
                            />
                        </Flex>
                    </div>
                </Tooltip>
            </Space>

            <Space
                direction="vertical"
                size="middle"
                style={{ width: "350px" }}
            >
                {/* Energy Efficiency */}
                <Tooltip title="Energy Efficiency: Target 80%">
                    <div>
                        <span>Energy Efficiency</span>
                        <Flex vertical={false}>
                            <Progress
                                percent={60}
                                strokeColor="yellow"
                                trailColor="lightgrey"
                            />
                            <CheckCircleOutlined
                                style={{ color: "yellow", marginLeft: "10px" }}
                            />
                        </Flex>
                    </div>
                </Tooltip>

                {/* Water Conservation */}

                {/* Carbon Footprint */}
                <Tooltip title="Carbon Footprint: Target 90%">
                    <div>
                        <span>Carbon Footprint</span>
                        <Flex vertical={false}>
                            <Progress
                                percent={85}
                                strokeColor="green"
                                trailColor="lightgrey"
                            />
                            <CheckCircleOutlined
                                style={{ color: "green", marginLeft: "10px" }}
                            />
                        </Flex>
                    </div>
                </Tooltip>
            </Space>
        </Flex>
    </Card>
);

export default SustainabilityIndex;
