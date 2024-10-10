import React, { useState } from "react";
import { Card, Avatar, Typography, Divider, Space, Button, Input, List } from "antd";
import { SendOutlined } from "@ant-design/icons";
import styled from "styled-components"; // Make sure styled is imported

const { Text, Paragraph } = Typography;
const { TextArea } = Input;

const ThreadCard: React.FC = () => {
    const [replies, setReplies] = useState([
        {
            id: 1,
            user: "Jane Smith",
            content: "I noticed our new mindfulness features are really gaining traction.",
        },
        {
            id: 2,
            user: "Weng Hong",
            content: "I've seen that many competitors are focusing on AI-driven personalization.",
        },
    ]);

    const [newReply, setNewReply] = useState("");

    // Handle submitting a new reply
    const handleAddReply = () => {
        if (newReply.trim()) {
            setReplies([...replies, { id: replies.length + 1, user: "You", content: newReply }]);
            setNewReply(""); // Clear the input field after submitting
        }
    };

    return (
        <StyledThreadCard>
            {/* Header: Avatar and Username */}
            <Space align="start">
                <Avatar size={48} src="https://scontent.fkul16-4.fna.fbcdn.net/v/t39.30808-6/439620060_2236667220011401_8380757790370946109_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Taj9cz98KUQQ7kNvgHLvkpS&_nc_ht=scontent.fkul16-4.fna&_nc_gid=AkdH-onrGWDOZk8wYHj7y8o&oh=00_AYAOXd8Az1lSrrRcx7WWfOAxUdbWRmVlnHPyL3EYPo2kvg&oe=670DF0E6" />
                <div>
                    <Text strong>Kok Cheng</Text>
                    <Text type="secondary" style={{ marginLeft: "10px" }}>
                        @chaikokcheng · 2h
                    </Text>
                </div>
            </Space>

            {/* Post Content */}
            <Paragraph style={{ marginTop: "10px" }}>
                What recent updates have you noticed in our product line or from competitors that align with these trends? Let’s discuss how we can leverage these insights to enhance our offerings!
                <span style={{ color: "#B100B1" }}> #WellbeingTrends #MentalHealthInnovation</span>
            </Paragraph>

            {/* Divider */}
            <Divider style={{ margin: "10px 0" }} />

            {/* Replies */}
            <List
                dataSource={replies}
                renderItem={(reply) => (
                    <List.Item style={{ padding: "10px 0" }}>
                        <Space align="start">
                            <Avatar
                                size={36}
                                src={
                                    reply.user === "Jane Smith"
                                        ? "https://i.pravatar.cc/150?img=47" // Jane Smith's new profile picture
                                        : "https://media.licdn.com/dms/image/v2/D5603AQFACzOot399pQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698999183642?e=1733961600&v=beta&t=EPNklkqUlmn5DiM7DADdR434Kg1gV24m-uHzlcXVKdc" // Default for other users
                                }
                            />
                            <div>
                                <Text strong>{reply.user}</Text>
                                <Paragraph style={{ marginBottom: 0 }}>{reply.content}</Paragraph>
                            </div>
                        </Space>
                    </List.Item>
                )}
            />

            {/* Divider before input */}
            <Divider style={{ margin: "10px 0" }} />

            {/* Input Bar for New Reply */}
            <InputRow>
                <StyledTextArea
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                    placeholder="Write a reply..."
                    autoSize={{ minRows: 1, maxRows: 4 }}
                />
                <SendButton
                    type="primary"
                    icon={<SendOutlined />}
                    onClick={handleAddReply}
                    disabled={!newReply.trim()}
                />
            </InputRow>
        </StyledThreadCard>
    );
};

export default ThreadCard;

// Styled Components
const StyledThreadCard = styled.div`
    padding: 16px;
    border-radius: 0;
    background-color: transparent;
    border: none;
    box-shadow: none;
`;

const InputRow = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 10px;
`;

const StyledTextArea = styled(TextArea)`
    flex: 1;
    border-radius: 20px;
    padding: 10px;
    margin-right: 8px;
`;

const SendButton = styled(Button)`
    flex-shrink: 0;
    border-radius: 50%;
    width: 52px;  /* Adjusted width */
    height: 52px;  /* Adjusted height */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;  /* Removed padding to prevent shrinking */
`;
