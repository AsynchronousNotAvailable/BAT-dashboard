"use client";
import React from "react";
import { List, Card, Typography, Space, Spin } from "antd";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import ChatInput from "./chatInput";

interface ChatWindowProps {
    messages: { sender: "user" | "bot"; text: string; chartData?: any[] }[];
    sendMessage: (message: string) => void;
    isLoading: boolean;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
    messages,
    sendMessage,
    isLoading,
}) => {
    const { Text } = Typography;

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
                style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: "16px",
                    border: "1px solid #f0f0f0",
                }}
                dataSource={messages}
                renderItem={(msg, idx) => (
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
                                maxWidth: "90%", // Increased width for better layout
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            {/* Message Text */}
                            {/* <Text style={{ maxWidth: "350px" }}>
                                {msg.text}
                            </Text> */}

                            {isLoading && msg.sender === "bot" && (idx === messages.length-1) ? (
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
                                            <BarChart
                                                width={460} // Increased width for a longer chart
                                                height={180} // Slightly increased height for improved visualization
                                                data={msg.chartData}
                                            >
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis
                                                    dataKey={
                                                        Object.keys(
                                                            msg.chartData[0]
                                                        )[0]
                                                    }
                                                />
                                                <YAxis />
                                                <Tooltip />
                                                {/* Dynamically render bars for all data keys except the 'name' key */}
                                                {Object.keys(msg.chartData[0])
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
                                                            dataKey={key}
                                                            fill={getBarColor(
                                                                key
                                                            )}
                                                        />
                                                    ))}
                                            </BarChart>
                                        </div>
                                    )}
                                </>
                            )}
                        </Space>
                    </List.Item>
                )}
            />

            {/* Conditionally render loader below the last message if loading */}
            {/* {isLoading && (
                <div style={{ padding: "16px", textAlign: "center" }}>
                    <Spin tip="Generating response..." />
                </div>
            )} */}

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
