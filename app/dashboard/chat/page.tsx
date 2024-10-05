// App.tsx
"use client"
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
    const botReplies = ["I'm sorry, I don't understand.", "Can you rephrase that?", "I'm not sure what you mean."];
    const sendMessage = (message: string) => {
        const newChats = [...chats];
        newChats[currentChat].messages.push({ sender: "user", text: message });
        // Simulate a bot reply
        newChats[currentChat].messages.push({
            sender: "bot",
            text: `${botReplies[Math.floor(Math.random() * botReplies.length)]}`,
        });
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
    }

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
