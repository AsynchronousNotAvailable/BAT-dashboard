// Sidebar.tsx
import React, { useState } from "react";
import { Menu, Button, Flex, Typography, Space } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Edit } from "lucide-react";
import Confirm from "./confirm";
interface SidebarProps {
    chats: { messages: any[]; config: any }[];
    currentChat: number;
    setCurrentChat: (index: number) => void;
    createNewChat: () => void;
    onDeleteChat: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    chats,
    currentChat,
    setCurrentChat,
    createNewChat,
    onDeleteChat,
}) => {
    const { Text } = Typography;
    const [confirmation, setConfirmation] = useState(false);
    return (
        <div style={{ width: 250, padding: "16px" }}>
            <Flex
                vertical={false}
                align="center"
                justify="space-between"
                style={{ marginBottom: "16px" }}
            >
                <div
                    style={{
                        fontWeight: "bold",
                        fontSize: "22px",
                        background: "linear-gradient(90deg, #42004B, #B100B1)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    MindSync
                </div>
                <Button
                    type="primary"
                    onClick={createNewChat}
                    style={{
                        padding: "8px",
                        borderRadius: "100%",
                        backgroundColor: "#B100B1",
                    }}
                >
                    <EditOutlined />
                </Button>
            </Flex>

            <Menu
                selectedKeys={[currentChat.toString()]}
                onClick={(e) => setCurrentChat(Number(e.key))}
                mode="inline"
            >
                {chats.map((_, index) => (
                    <Menu.Item key={index.toString()}>
                        <Flex
                            vertical={false}
                            style={{
                                alignItems: "center",
                                width: "100%",
                            }}
                            justify="space-between"
                        >
                            <Text>Chat {index + 1}</Text>
                            <Confirm onDeleteChat={onDeleteChat} index={index}/>
                        </Flex>
                    </Menu.Item>
                ))}
            </Menu>
        </div>
    );
};

export default Sidebar;
