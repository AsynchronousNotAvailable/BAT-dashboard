import React, { useState } from "react";
import { Input, Button, Flex, Typography } from "antd";
import { SendOutlined, PaperClipOutlined } from "@ant-design/icons";

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
                            borderRadius: "25px",
                            padding: "4px 10px",
                            margin: "0 10px",
                            maxHeight: "fit-content",
                        }}
                        onClick={() =>
                            sendMessage(
                                "Can you validate the latest product idea for mental wellness using AI insights?"
                            )
                        }
                    >
                        <Text style={{ fontSize: "12px", fontWeight: "bold" }}>
                            Validate Product Idea
                        </Text>
                    </Button>

                    <Button
                        style={{
                            boxShadow: "0 0 10px 0 #A5B4FC",
                            borderRadius: "25px",
                            padding: "4px 10px",
                            margin: "0 10px",
                            maxHeight: "fit-content",
                        }}
                        onClick={() =>
                            sendMessage(
                                "Suggest improvements for my current wellbeing product lineup."
                            )
                        }
                    >
                        <Text style={{ fontSize: "12px", fontWeight: "bold" }}>
                            Suggest Improvements
                        </Text>
                    </Button>

                    <Button
                        style={{
                            boxShadow: "0 0 10px 0 #A5B4FC",
                            borderRadius: "25px",
                            padding: "4px 10px",
                            marginBottom: "10px",
                            maxHeight: "fit-content",
                        }}
                        onClick={() =>
                            sendMessage(
                                "What features are missing compared to leading competitors in the market?"
                            )
                        }
                    >
                        <Text style={{ fontSize: "12px", fontWeight: "bold" }}>
                            Compare Features
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
                                color: "#4F46E5",
                            }}
                            onClick={handleSend}
                        />
                        <Button
                            type="primary"
                            icon={<SendOutlined />}
                            style={{
                                borderRadius: "50%",
                                backgroundColor: "#4F46E5",
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
