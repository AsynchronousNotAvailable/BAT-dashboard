// App.tsx
"use client";
import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "./components/chatSidebar";
import ChatWindow from "./components/chatWindow";
import ChatConfig from "./components/chatConfig";
import TrendingPromptList from "./components/prompts";

const { Sider, Content } = Layout;

interface Chat {
    messages: { sender: "user" | "bot"; text: string }[];
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
    // "What are the latest mental health products we should consider adding to our lineup?",
    // "How can we improve our existing offerings to better support mental well-being?",
    // "What insights do we have from competitor analysis on mental health trends?",
    const botReplies = [
        "According to recent market analysis, products like mindfulness apps and wearable stress trackers have seen a 30% increase in consumer interest over the past year. We should consider adding similar offerings.",
        "Surveys indicate that 65% of consumers prefer products made from eco-friendly materials. Integrating sustainable materials while enhancing user-friendly technology could significantly increase customer satisfaction.",
        "Competitors are focusing heavily on brainwave modulation devices, which have grown in popularity by 25%. Additionally, subscription services for guided meditation have become a key trend, capturing 40% of the market.",
    ];

    const sendMessage = (message: string) => {
        const newChats = [...chats];
        newChats[currentChat].messages.push({ sender: "user", text: message });

        // Ensure the bot reply follows the sequence
        const botReply = botReplies[currentReplyIndex];
        newChats[currentChat].messages.push({
            sender: "bot",
            text: botReply,
        });

        // Update the reply index for the next message
        setCurrentReplyIndex(
            (prevIndex) => (prevIndex + 1) % botReplies.length
        );
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
                        <ChatConfig
                            config={chats[currentChat].config}
                            setConfig={setChatConfig}
                        />
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
