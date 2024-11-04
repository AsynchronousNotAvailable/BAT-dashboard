"use client";
import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "./components/chatSidebar";
import ChatWindow from "./components/chatWindow";
import ChatConfig from "./components/chatConfig";
import TrendingPromptList from "./components/prompts";

const { Sider, Content } = Layout;

interface Chat {
    messages: {
        sender: "user" | "bot";
        text: string;
        chartData?: any[];
        type?: string;
    }[];
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

    const [isLoading, setIsLoading] = useState(false);
    const beforeData = [
        { aspect: "Consumer Demand", value: 10 },
        { aspect: "Innovation", value: 20 },
        { aspect: "Market Fit", value: 70 },
        { aspect: "Scalability", value: 33 },
        { aspect: "Sustainability", value: 40 },
        
    ];

   

    const afterData = [
        { aspect: "Consumer Demand", value: 85 },
        { aspect: "Innovation", value: 75 },
        { aspect: "Market Fit", value: 90 },
        { aspect: "Scalability", value: 60 },
        { aspect: "Sustainability", value: 80 },
    ];


    const [currentChatConfig, setCurrentChatConfig] = useState(beforeData); 
    const [focusText, setFocusText] = useState("Stress Reduction");
    const [samplePrompt, setSamplePrompt] = useState("Suggest Improvements")
    // New Prompts Focused on Validation, Suggestion, and Analytics
    const samplePrompts = ["Compare my product with other companies", "Visualize growth in monthly active user"]
    const [promptCounter, setPromptCounter] = useState(0);
    const botReplies = [
        {
            text: "User demand for mindfulness monitoring has increased by 35% in the last 6 months. I recommend considering an integration of mindfulness monitoring to enhance user engagement. Here’s a growth chart illustrating this trend.",
            chartData: [
                { name: "May", growth: 20 },
                { name: "Jun", growth: 30 },
                { name: "Jul", growth: 25 },
                { name: "Aug", growth: 35 },
                { name: "Sep", growth: 45 },
                { name: "Oct", growth: 50 },
            ],
            type: "bar",
        },
        {
            text: "Competitors like MindfulMe and HeadHealth recently launched similar features. Here’s a growth chart and a feature comparison.",
            chartData: [
                {
                    name: "MindSync",
                    brainwaveTracking: 80,
                    stressMonitoring: 70,
                },
                {
                    name: "MindfulMe",
                    brainwaveTracking: 60,
                    stressMonitoring: 65,
                },
                {
                    name: "HeadHealth",
                    brainwaveTracking: 85,
                    stressMonitoring: 60,
                },
            ],
            type: "bar",
        },
        {
            text: "Based on market data, products with mindfulness monitoring report a 20% increase in user satisfaction. Our internal user feedback indicates similar interest, with 72% of survey respondents highlighting mindfulness as a desired feature. Implementing this feature is projected to enhance user satisfaction significantly.",
            chartData: [
                { time: "Current Market", satisfaction: 50 },
                { time: "Internal Feedback", satisfaction: 72 },
                { time: "Projected Satisfaction", satisfaction: 60 },
            ],
            type: "bar",
        },

        {
            text: "Absolutely. I’ll track usage, adoption rates, and notify you of any shifts in market demand. Here’s an updated Emerging Trends Radar showing mindfulness as a key focus area to how this trend aligns with our long-term product strategy",
            chartData: [
                { aspect: "Consumer Demand", value: 85 },
                { aspect: "Innovation", value: 75 },
                { aspect: "Market Fit", value: 90 },
                { aspect: "Scalability", value: 60 },
                { aspect: "Sustainability", value: 80 },
            ],
            type: "radar",
        },
    ];
    
    const preLoadMessage = async () => {
       setIsLoading(true); // Start loading
       const newChats = [...chats];
        const firstReply = botReplies[0];
        const secondReply = botReplies[1];
        
        
        newChats[currentChat].messages.push(
            {
                sender: "bot",
                text: "Hi Alex! I’ve detected a growing trend in mindfulness monitoring with AI-powered stress relief. Would you like to explore this?",
            },
            {
                sender: "user",
                text: "Yes",
            },
            
        );
        const minLoadingTime = new Promise((resolve) =>
             setTimeout(resolve, 2000)
        );
        

        setCurrentReplyIndex(2);
        
       
        newChats[currentChat].messages.push({
            sender: "bot",
            text: firstReply.text,
            chartData: firstReply.chartData,
            type: firstReply.type,
        },
            {
                sender: "bot",
                text: secondReply.text,
                chartData: secondReply.chartData,
                type: firstReply.type,
            });
        await minLoadingTime;
        setIsLoading(false);
        setChats(newChats);
       
    }

    const sendMessage = async (message: string) => {
        const newChats = [...chats];
        newChats[currentChat].messages.push({ sender: "user", text: message });
        setChats(newChats);

        const minLoadingTime = new Promise((resolve) =>
            setTimeout(resolve, 2000)
        );
        setIsLoading(true);

        if (currentReplyIndex === 0) {
            // If it's the first bot reply, push the first two replies
            const firstReply = botReplies[0];
            const secondReply = botReplies[1];

            newChats[currentChat].messages.push(
                {
                    sender: "bot",
                    text: firstReply.text,
                    chartData: firstReply.chartData,
                    type: firstReply.type,
                },
                {
                    sender: "bot",
                    text: secondReply.text,
                    chartData: secondReply.chartData,
                    type: firstReply.type,
                }
            );

            setCurrentReplyIndex(2); // Set reply index to skip the first two replies
        } else if (currentReplyIndex < botReplies.length) {
            // For subsequent replies, add the next reply
            const botReply = botReplies[currentReplyIndex];
            newChats[currentChat].messages.push({
                sender: "bot",
                text: botReply.text,
                chartData: botReply.chartData,
                type: botReply.type,
            });
            if (botReply.type === "radar") {
                // Set the config for AIProductInsightsCard
                const configToPass =
                    botReply.type === "radar" ? afterData : beforeData;
                // Here you can also set this configuration to be used later
                await minLoadingTime;
                setCurrentChatConfig(configToPass);
                setFocusText("Personalisation, Stress Reduction");
            }
            setCurrentReplyIndex((prevIndex) => prevIndex + 1);
        } else {
            
            try {
                newChats[currentChat].messages.push({
                    sender: "bot",
                    text: "",
                });
                const res = await fetch("/api/chatgpt", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ message }),
                });

                const data = await res.json();
                if (data) {
                    newChats[currentChat].messages.pop();
                    newChats[currentChat].messages.push({
                        sender: "bot",
                        text: data.choices[0].message.content,
                    });
                }
                
            } catch (error) {
                console.error("Error:", error);
            }
        }

        setChats(newChats);
        setSamplePrompt(samplePrompts[promptCounter])
        setPromptCounter((counter) => counter + 1)
        await minLoadingTime;
        setIsLoading(false);
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


    React.useEffect(() => {
        
    }, [])

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
                            isLoading={isLoading}
                            preLoadMessage={preLoadMessage}
                            config={currentChatConfig}
                            samplePrompt={samplePrompt}
                            setSamplePrompt={setSamplePrompt}
                        />
                        <div style={{ width: "430px", marginLeft: "20px" }}>
                            <ChatConfig
                                chartData={currentChatConfig}
                                focusText={focusText}
                            />
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
