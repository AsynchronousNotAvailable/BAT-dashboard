"use client";
import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "./components/chatSidebar";
import ChatWindow from "./components/chatWindow";
import ChatConfig from "./components/chatConfig";
import TrendingPromptList from "./components/prompts";

const { Sider, Content } = Layout;

interface Chat {
    messages: { sender: "user" | "bot"; text: string; chartData?: any[] }[];
    config: { temperature: number; model: string; maxTokens: number };
}

const Chat: React.FC = () => {
    const [chats, setChats] = useState<Chat[]>([
        {
            messages: [],
            config: {
                temperature: 0.5,
                model: "gpt-4o",
                maxTokens: 100,
            },
        },
    ]);

    const [currentChat, setCurrentChat] = useState(0);
    const [currentReplyIndex, setCurrentReplyIndex] = useState(0);

    // New Prompts Focused on Validation, Suggestion, and Analytics
    const botReplies = [

        {
            text: "To validate your product idea, consider surveying potential users on their preferred features. Our insights suggest integrating user feedback loops early in development. Here are the top 3 desired features from our survey:",
            chartData: [
                { name: "Stress Monitoring", value: 70 },
                { name: "Guided Meditation", value: 50 },
                { name: "Sleep Tracking", value: 65 },
            ],
        },
        {
            text: "Based on current market trends, incorporating mindfulness tracking with AI-powered suggestions could enhance user satisfaction. Here's a chart showing the growth of mindfulness products over the last year:",
            chartData: [
                { name: "Jan", growth: 20 },
                { name: "Feb", growth: 30 },
                { name: "Mar", growth: 25 },
                { name: "Apr", growth: 35 },
                { name: "May", growth: 45 },
                { name: "Jun", growth: 50 },
            ],
        },
        {
            text: "Competitor analysis reveals a growing trend in brainwave tracking for personalized mental wellness. Adding customizable tracking features might set us apart. Below is a comparison chart of features across top competitors:",
            chartData: [
                { name: "MindSync", brainwaveTracking: 80, stressMonitoring: 70 },
                { name: "MindfulMe", brainwaveTracking: 60, stressMonitoring: 65 },
                { name: "HeadHealth", brainwaveTracking: 85, stressMonitoring: 60 },
            ],
        },
    ];

    const sendMessage = (message: string) => {
        const newChats = [...chats];
        newChats[currentChat].messages.push({ sender: "user", text: message });

        // Ensure the bot reply follows the sequence
        const botReply = botReplies[currentReplyIndex];
        newChats[currentChat].messages.push({
            sender: "bot",
            text: botReply.text,
            chartData: botReply.chartData,
        });

        // Update the reply index for the next message
        setCurrentReplyIndex((prevIndex) => (prevIndex + 1) % botReplies.length);
        setChats(newChats);
    };

    const createNewChat = () => {
        setChats([
            ...chats,
            {
                messages: [],
                config: {
                    temperature: 0.5,
                    model: "gpt-4o",
                    maxTokens: 100,
                },
            },
        ]);
        setCurrentChat(chats.length);
        setCurrentReplyIndex(0); // Reset the reply index for the new chat
    };

    const setChatConfig = (config: Chat["config"]) => {
        const newChats = [...chats];
        newChats[currentChat].config = config;
        setChats(newChats);
    };

    const deleteConversation = (index: number) => {
        const newChats = [...chats];
        newChats.splice(index, 1);
        setChats(newChats);
    };

    return (
        <Layout style={{ height: "100vh" }}>
            <Sider theme="light" width={250}>
                <Sidebar
                    chats={chats}
                    currentChat={currentChat}
                    setCurrentChat={setCurrentChat}
                    createNewChat={createNewChat}
                    onDeleteChat={deleteConversation}
                />
            </Sider>
            <Layout>
                {chats[currentChat] ? (
                    <Content style={{ display: "flex" }}>
                        <ChatWindow
                            messages={chats[currentChat].messages}
                            sendMessage={sendMessage}
                        />
                        <div style={{ width: "430px", marginLeft: "20px" }}>
                            <ChatConfig />
                        </div>
                    </Content>
                ) : (
                    <Content style={{ display: "flex" }}>
                        <TrendingPromptList />
                    </Content>
                )}
            </Layout>
        </Layout>
    );
};

export default Chat;
