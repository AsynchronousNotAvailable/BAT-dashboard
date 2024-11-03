import React, { useEffect, useRef } from "react";
import { List, Card, Typography, Space, Spin } from "antd";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    LineChart,
    Legend,
    Line,
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
} from "recharts";
import ChatInput from "./chatInput";

interface ChatWindowProps {
    messages: {
        sender: "user" | "bot";
        text: string;
        chartData?: any[];
        type?: string;
    }[];
    sendMessage: (message: string) => void;
    isLoading: boolean;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
    messages,
    sendMessage,
    isLoading,
}) => {
    const { Text } = Typography;
    const listRef = useRef<HTMLDivElement>(null); // Create a ref for the chat list

    // Effect to scroll to bottom whenever messages change
    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight; // Scroll to the bottom
        }
    }, [messages]); // Run effect when messages change

    return (
        <div
            style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
            }}
        >
            <List
                ref={listRef} // Assign the ref to the List
                style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: "16px",
                    border: "1px solid #f0f0f0",
                }}
                dataSource={messages}
                renderItem={(msg, idx) => {
                    return (
                        <List.Item
                            key={idx}
                            style={{
                                borderBottom: "none",
                                display: "flex",
                                justifyContent:
                                    msg.sender === "user"
                                        ? "flex-end"
                                        : "flex-start",
                            }}
                        >
                            <Space
                                direction="horizontal"
                                size="small"
                                style={{
                                    padding: "12px",
                                    borderRadius:
                                        msg.sender === "user"
                                            ? "20px 20px 0 20px"
                                            : "20px 20px 20px 0",
                                    backgroundColor:
                                        msg.sender === "user"
                                            ? "#F3F6FB"
                                            : "#E5E9F0",
                                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                                    maxWidth: "90%",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                {isLoading &&
                                msg.sender === "bot" &&
                                idx === messages.length - 1 ? (
                                    <div
                                        style={{
                                            padding: "16px",
                                            textAlign: "center",
                                        }}
                                    >
                                        <Spin tip="Generating response..." />
                                    </div>
                                ) : (
                                    <>
                                        <Text style={{ maxWidth: "350px" }}>
                                            {msg.text}
                                        </Text>

                                        {msg.chartData && (
                                            <div style={{ marginLeft: "15px" }}>
                                                {msg.type === "bar" && (
                                                    <BarChart
                                                        width={460}
                                                        height={180}
                                                        data={msg.chartData}
                                                    >
                                                        <CartesianGrid strokeDasharray="3 3" />
                                                        <XAxis
                                                            dataKey={
                                                                Object.keys(
                                                                    msg
                                                                        .chartData[0]
                                                                )[0]
                                                            }
                                                        />
                                                        <YAxis />
                                                        <Tooltip />
                                                        {Object.keys(
                                                            msg.chartData[0]
                                                        )
                                                            .filter(
                                                                (key) =>
                                                                    key !==
                                                                    Object.keys(
                                                                        msg.chartData[0]
                                                                    )[0]
                                                            )
                                                            .map((key) => (
                                                                <Bar
                                                                    key={key}
                                                                    dataKey={
                                                                        key
                                                                    }
                                                                    fill={getBarColor(
                                                                        key
                                                                    )}
                                                                />
                                                            ))}
                                                    </BarChart>
                                                )}

                                                {msg.type === "line" && (
                                                    <LineChart
                                                        width={460}
                                                        height={300}
                                                        data={msg.chartData}
                                                        margin={{
                                                            top: 20,
                                                            right: 30,
                                                            left: 20,
                                                            bottom: 20,
                                                        }}
                                                    >
                                                        <CartesianGrid strokeDasharray="3 3" />
                                                        <XAxis dataKey="time" />
                                                        <YAxis />
                                                        <Tooltip />
                                                        <Legend />
                                                        <Line
                                                            type="monotone"
                                                            dataKey="satisfaction"
                                                            stroke="#8884d8"
                                                            strokeWidth={2}
                                                            activeDot={{ r: 8 }}
                                                        />
                                                    </LineChart>
                                                )}

                                                {msg.type === "radar" && (
                                                    <RadarChart
                                                        width={460}
                                                        height={300}
                                                        data={msg.chartData}
                                                    >
                                                        <PolarGrid />
                                                        <PolarAngleAxis dataKey="aspect" />
                                                        <PolarRadiusAxis />
                                                        <Radar
                                                            name="User Feedback"
                                                            dataKey="value"
                                                            stroke="#4F46E5"
                                                            fill="#4F46E5"
                                                            fillOpacity={0.6}
                                                        />
                                                        <Tooltip />
                                                    </RadarChart>
                                                )}
                                            </div>
                                        )}
                                    </>
                                )}
                            </Space>
                        </List.Item>
                    );
                }}
            />

            <Card style={{ borderTop: "1px solid #f0f0f0" }}>
                <ChatInput sendMessage={sendMessage} />
            </Card>
        </div>
    );
};

// Function to assign colors dynamically based on the data key
const getBarColor = (key: string) => {
    const colors = {
        growth: "#8884d8",
        value: "#82ca9d",
        brainwaveTracking: "#ffc658",
        stressMonitoring: "#ff7300",
        guidedMeditation: "#8dd1e1",
        sleepTracking: "#a4de6c",
        MindSync: "#8884d8",
        MindfulMe: "#82ca9d",
        HeadHealth: "#ffc658",
    };
    return colors[key] || "#8884d8";
};

export default ChatWindow;
