// ChatWindow.tsx
import React, { useState } from "react";
import { List, Card, Button } from "antd";

import Message from "./chatMessage";
import ChatInput from "./chatInput";

interface ChatWindowProps {
    messages: { sender: "user" | "bot"; text: string }[];
    sendMessage: (message: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, sendMessage }) => {
     const [currentMessages, setCurrentMessages] = useState(messages);
    const deleteMessage = (index: number) => {

        setCurrentMessages((prevMessages) =>
            prevMessages.filter((_, i) => i !== index)
        );
    };
    return (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", backgroundColor: "white" }}>
            <List
                style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: "16px",
                    border: "1px solid #f0f0f0",
                }}
                dataSource={messages}
                renderItem={(msg, idx) => (
                    <List.Item style={{borderWidth: 0}} key={idx}>
                        <Message
                            msg={msg}
                            onDelete={() => deleteMessage(idx)}
                        />
                        
                    </List.Item>
                )}
            />
            <Card>
                <ChatInput sendMessage={sendMessage} />
            </Card>
        </div>
    );
};

export default ChatWindow;
