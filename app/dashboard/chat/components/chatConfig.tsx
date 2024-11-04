import React from "react";
import { Flex, Typography, Divider } from "antd";
import AIProductInsightsCard from "./aiProductInsight";

const ChatConfig: React.FC<{ chartData?: any; focusText: string }> = ({
    chartData,
    focusText,
}) => {
    const { Text } = Typography;

    return (
        <Flex
            vertical={true}
            style={{
                padding: "16px 24px",
                backgroundColor: "white",
                width: "100%",
            }}
        >
            <Flex vertical={true} gap={5}>
                <Text style={{ fontWeight: "bold", fontSize: "16px" }}>
                    AI Product Insights
                </Text>
                <Divider style={{ marginTop: 0 }} />
            </Flex>

            <AIProductInsightsCard
                chartData={chartData}
                focusText={focusText}
            />
        </Flex>
    );
};

export default ChatConfig;
