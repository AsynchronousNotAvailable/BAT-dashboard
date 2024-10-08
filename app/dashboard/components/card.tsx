import { Card, Space, Typography, Flex } from "antd";
import {
    RiseOutlined,
    EyeOutlined,
    FallOutlined,
    BulbOutlined,
    ThunderboltOutlined,
} from "@ant-design/icons";
const UserCard: React.FC = () => {
    const { Title, Text } = Typography;

    return (
        <Card
            bordered={true}
            style={{
                borderRadius: "1em",
                width: 300,
                height: "min-content",
                flexShrink: 0.1,
                
            }}
        >
            <Flex vertical={true} style={{}} gap={16}>
                <Flex vertical={true}>
                    <Text
                        style={{
                            fontWeight: "normal",
                            fontSize: "1.2em",
                            color: "#475569",
                        }}
                    >
                        Total Users
                    </Text>
                    <Flex
                        vertical={false}
                        gap={50}
                        align="baseline"
                        justify="space-between"
                    >
                        <Flex vertical={false} gap={30}>
                            <Space align="baseline" size={10}>
                                <Title level={3}>4818</Title>
                                {/* icon */}
                                <RiseOutlined
                                    style={{
                                        color: "#22C55E",
                                        fontWeight: "bold",
                                    }}
                                />
                                <Text style={{ color: "#22C55E" }}>44.2%</Text>
                            </Space>
                        </Flex>
                        <EyeOutlined
                            style={{
                                color: "rgba(79,70,229,1)",
                                fontSize: "1.2em",
                                backgroundColor: "rgba(238,242,255,1)",
                                padding: "10px", // Adjust the padding to make the background bigger
                                borderRadius: "50%", // This makes the background circular
                            }}
                        />
                    </Flex>
                </Flex>
                <Flex vertical={true}>
                    <Text
                        style={{
                            fontWeight: "normal",
                            fontSize: "1.2em",
                            color: "#475569",
                        }}
                    >
                        Average Use Time
                    </Text>
                    <Flex
                        vertical={false}
                        gap={50}
                        align="baseline"
                        justify="space-between"
                    >
                        <Flex vertical={false} gap={30}>
                            <Space align="baseline" size={10}>
                                <Title level={3}>118, 818</Title>
                                {/* icon */}
                                <FallOutlined
                                    style={{
                                        color: "red",
                                        fontWeight: "bold",
                                    }}
                                />
                                <Text
                                    style={{
                                        color: "red",
                                    }}
                                >
                                    2.8%
                                </Text>
                            </Space>
                        </Flex>
                        <BulbOutlined
                            style={{
                                color: "rgba(79,70,229,1)",
                                fontSize: "1.2em",
                                backgroundColor: "rgba(238,242,255,1)",
                                padding: "10px", // Adjust the padding to make the background bigger
                                borderRadius: "50%", // This makes the background circular
                            }}
                        />
                    </Flex>
                </Flex>
                <Flex vertical={true}>
                    <Text
                        style={{
                            fontWeight: "normal",
                            fontSize: "1.2em",
                            color: "#475569",
                        }}
                    >
                        Average Sustainability Index
                    </Text>
                    <Flex
                        vertical={false}
                        gap={50}
                        align="baseline"
                        justify="space-between"
                    >
                        <Flex vertical={false} gap={30}>
                            <Space align="baseline" size={10}>
                                <Title level={3}>12,158</Title>
                                <RiseOutlined style={{ color: "#22C55E" }} />
                                <Text
                                    style={{
                                        color: "#22C55E",
                                    }}
                                >
                                    8%
                                </Text>
                            </Space>
                        </Flex>
                        <ThunderboltOutlined
                            style={{
                                color: "rgba(79,70,229,1)",
                                fontSize: "1.2em",
                                backgroundColor: "rgba(238,242,255,1)",
                                padding: "10px", // Adjust the padding to make the background bigger
                                borderRadius: "50%", // This makes the background circular
                            }}
                        />
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    );

}

export default UserCard;