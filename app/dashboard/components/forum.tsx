import React, { useState } from "react";
import {
    Card,
    Avatar,
    Typography,
    Divider,
    Space,
    Button,
    Input,
    List,
} from "antd";
import {
    LikeOutlined,
    MessageOutlined,
    RetweetOutlined,
    SendOutlined,
} from "@ant-design/icons";

const { Text, Paragraph } = Typography;
const { TextArea } = Input;

const ThreadCard: React.FC = () => {
    const [replies, setReplies] = useState([
        {
            id: 1,
            user: "Jane Smith",
            content: "I totally agree! It's very smooth.",
        },
        {
            id: 2,
            user: "Bob Johnson",
            content: "It’s like a breath of fresh air compared to other apps.",
        },
    ]);
    const [newReply, setNewReply] = useState("");

    // Handle submitting a new reply
    const handleAddReply = () => {
        if (newReply.trim()) {
            setReplies([
                ...replies,
                { id: replies.length + 1, user: "You", content: newReply },
            ]);
            setNewReply(""); // Clear the input field after submitting
        }
    };

    return (
        <Card
            style={{
                width: 600,
                margin: "20px auto",
                borderRadius: "10px",
                boxShadow: "0 0 10px 0 #A5B4FC",
            }}
            bodyStyle={{ padding: "15px" }}
        >
            {/* Header: Avatar and Username */}
            <Space align="start">
                <Avatar size={48} src="https://i.pravatar.cc/150?img=5" />
                <div>
                    <Text strong>John Doe</Text>
                    <Text type="secondary" style={{ marginLeft: "10px" }}>
                        @johndoe · 2h
                    </Text>
                </div>
            </Space>

            {/* Post Content */}
            <Paragraph style={{ marginTop: "10px" }}>
                Just tried out the new Threads app, and I'm loving the clean
                interface. What do you all think? #Meta #Threads
            </Paragraph>

            {/* Divider */}
            <Divider style={{ margin: "10px 0" }} />

            {/* Replies */}
            <List
                dataSource={replies}
                renderItem={(reply) => (
                    <div style={{ display: "flex" }}>
                        {/* Vertical line for the thread */}
                        <div
                            style={{
                                width: "1px",
                                backgroundColor: "#d9d9d9",
                                marginLeft: "10px",
                                marginRight: "10px",
                            }}
                        ></div>

                        <List.Item style={{ padding: "10px 0", flex: 1 }}>
                            <Space align="start">
                                <Avatar
                                    size={36}
                                    src="https://i.pravatar.cc/150?img=3"
                                />
                                <div>
                                    <Text strong>{reply.user}</Text>
                                    <Paragraph style={{ marginBottom: 0 }}>
                                        {reply.content}
                                    </Paragraph>
                                </div>
                            </Space>
                        </List.Item>
                    </div>
                )}
            />

            {/* Divider before input */}
            <Divider style={{ margin: "10px 0" }} />

            {/* Input Bar for New Reply */}
            <Space style={{ width: "100%" }} direction="vertical">
                <TextArea
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                    placeholder="Write a reply..."
                    autoSize={{ minRows: 1, maxRows: 4 }}
                    style={{ borderRadius: "20px", padding: "10px" }}
                />
                <Button
                    type="primary"
                    shape="round"
                    icon={<SendOutlined />}
                    onClick={handleAddReply}
                    disabled={!newReply.trim()}
                    style={{ alignSelf: "flex-end" }}
                >
                    Reply
                </Button>
            </Space>
        </Card>
    );
};

export default ThreadCard;
