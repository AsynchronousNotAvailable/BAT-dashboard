// ChatInput.tsx
import React, { useState } from "react";
import { Input, Button, Flex, Card, Typography } from "antd";
import {SendOutlined, PaperClipOutlined} from "@ant-design/icons";
interface ChatInputProps {
    sendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ sendMessage }) => {
    const [input, setInput] = useState("");
    const { Text } = Typography;
    const handleSend = () => {
        if (input.trim()) {
            sendMessage(input);
            setInput("");
        }
    };

    return (
        <div
            style={{
                display: "flex",

                border: "1px solid #f0f0f0",
                padding: "10px",
            }}
        >
            <Flex vertical={true} style={{ width: "100%" }}>
                <Flex vertical={false} style={{ padding: "10px 0" }}>
                    <Button
                        style={{
                            boxShadow: "0 0 10px 0 #A5B4FC",
                            borderRadius: "25px 25px",
                            padding: "4px 10px",
                            margin: "0 10px",
                            marginTop: 0,
                            maxHeight: "fit-content",
                        }}
                    >
                        <Text style={{ fontSize: "12px", fontWeight: "bold" }}>
                            Give me the top trending products in the market
                        </Text>
                    </Button>

                    <Button
                        style={{
                            boxShadow: "0 0 10px 0 #A5B4FC",
                            borderRadius: "25px 25px",
                            padding: "4px 10px",
                            margin: "0 10px",
                            marginTop: 0,
                            maxHeight: "fit-content",
                        }}
                    >
                        <Text style={{ fontSize: "12px", fontWeight: "bold" }}>
                            Help me to analyze the overall feedbacks for my
                            products
                        </Text>
                    </Button>

                    <Button
                        style={{
                            boxShadow: "0 0 10px 0 #A5B4FC",
                            borderRadius: "25px 25px",
                            padding: "4px 10px",
                            marginBottom: "10px",
                            maxHeight: "fit-content",
                        }}
                    >
                        <Text style={{ fontSize: "12px", fontWeight: "bold" }}>
                            Summarize...
                        </Text>
                    </Button>
                </Flex>

                <Flex vertical={false} style={{ width: "100%" }}>
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onPressEnter={handleSend}
                        placeholder="Type a message..."
                        style={{ marginRight: 8 }}
                    />
                    <Flex vertical={false} gap={8}>
                        <Button
                            type="primary"
                            icon={<PaperClipOutlined />}
                            style={{
                                borderRadius: "50%",
                                backgroundColor: "white",
                                color: "#B100B1",
                            }}
                            onClick={handleSend}
                        />
                        <Button
                            type="primary"
                            icon={<SendOutlined />}
                            style={{
                                borderRadius: "50%",
                                backgroundColor: "#B100B1",
                                color: "white",
                            }}
                            onClick={handleSend}
                        />
                    </Flex>
                </Flex>
            </Flex>
        </div>
    );
};

export default ChatInput;
