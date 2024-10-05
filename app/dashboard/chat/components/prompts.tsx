// TrendingPromptList.tsx
import React from "react";
import { List, Card } from "antd";

const trendingPrompts = [
    {
        prompt: "What is the meaning of life?",
        response:
            "The meaning of life is subjective, often revolving around happiness, love, and purpose.",
    },
    {
        prompt: "Can AI replace human jobs?",
        response:
            "AI can replace some jobs, but it also creates new opportunities that require human skills.",
    },
    {
        prompt: "What are the latest advancements in AI?",
        response:
            "Some of the latest advancements include GPT models, reinforcement learning, and AI in healthcare.",
    },
    {
        prompt: "How do I learn React?",
        response:
            "Start by understanding JavaScript, then move on to React by following tutorials and building projects.",
    },
    // Add more prompts and responses as necessary
];

const TrendingPromptList: React.FC = () => {
    return (
        <div style={{ padding: "20px", width: "100%" }}>
            <Card title="Trending Prompts and Responses" bordered={false}>
                <List
                    itemLayout="vertical"
                    dataSource={trendingPrompts}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                title={<b>Prompt:</b>}
                                description={<div>{item.prompt}</div>}
                            />
                            <div>
                                <b>Response:</b> {item.response}
                            </div>
                        </List.Item>
                    )}
                />
            </Card>
        </div>
    );
};

export default TrendingPromptList;
