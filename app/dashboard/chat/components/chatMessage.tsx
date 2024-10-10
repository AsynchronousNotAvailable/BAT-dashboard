// Message.tsx
import React from "react";
import { Avatar, Button, Flex, Popconfirm } from "antd";
import Icon, {
    UserOutlined,
    LikeOutlined,
    DislikeOutlined,
    SyncOutlined
} from "@ant-design/icons";
import type { GetProps } from "antd";

type CustomIconComponentProps = GetProps<typeof Icon>;

interface MessageProps {
    msg: { sender: "user" | "bot"; text: string };
    onDelete: () => void;
}

const AISvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
        <rect width={32} height={32} fill="url(#a)" rx={16} />
        <path
            fill="#fff"
            d="M20.952 9.524a2.41 2.41 0 0 0 1.524 1.524.301.301 0 0 1 0 .571 2.41 2.41 0 0 0-1.524 1.524.301.301 0 0 1-.571 0 2.41 2.41 0 0 0-1.524-1.524.301.301 0 0 1 0-.571 2.41 2.41 0 0 0 1.524-1.524.301.301 0 0 1 .571 0Z"
        />
        <path
            fill="#fff"
            fillRule="evenodd"
            d="M22.03 15.121a8.144 8.144 0 0 1-5.151-5.15c-.282-.845-1.476-.845-1.758 0a8.144 8.144 0 0 1-5.15 5.15c-.845.282-.845 1.476 0 1.758a8.144 8.144 0 0 1 5.15 5.15c.282.845 1.476.845 1.758 0a8.144 8.144 0 0 1 5.15-5.15c.845-.282.845-1.476 0-1.758ZM16 11.367A9.478 9.478 0 0 1 11.367 16 9.478 9.478 0 0 1 16 20.633 9.478 9.478 0 0 1 20.633 16 9.479 9.479 0 0 1 16 11.367Z"
            clipRule="evenodd"
        />
        <path
            fill="#fff"
            d="m10.416 20.155-.142.285a1.12 1.12 0 0 1-.5.5l-.286.143a.28.28 0 0 0 0 .5l.285.143c.217.108.393.284.5.5l.143.286a.28.28 0 0 0 .501 0l.143-.285a1.12 1.12 0 0 1 .5-.5l.285-.143a.28.28 0 0 0 0-.501l-.285-.142a1.12 1.12 0 0 1-.5-.501l-.143-.285a.28.28 0 0 0-.5 0Z"
        />
        <defs>
            <linearGradient
                id="a"
                x1={-4.332}
                x2={21.868}
                y1={0}
                y2={24.886}
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.5} stopColor="#42004B" />
                <stop offset={1} stopColor="#4F46E5" />
            </linearGradient>
        </defs>
    </svg>
);


const AIIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={AISvg} {...props} />
);

const Message: React.FC<MessageProps> = ({ msg, onDelete }) => {
    const isUser = msg.sender === "user";

    return (
        <Flex vertical={true} style={{ width: "100%" }}>
            <Flex
                style={{
                    justifyContent: isUser ? "flex-end" : "flex-start",
                    alignItems: "center",
                    
                    width: "100%",
                }}
                gap={5}
            >
                {!isUser && (
                    // <Avatar
                    //     style={{ backgroundColor: "#87d068", marginRight: "10px" }}
                    //     icon={<RobotOutlined />}
                    // />
                    <AIIcon style={{ marginRight: "10px" }} />
                )}

                {isUser && (
                    <div
                        style={{
                            maxWidth: "60%",
                            padding: "10px 15px",
                            borderRadius: "20px 20px 0 20px",
                            backgroundColor: "#F3F6FB",
                            textAlign: "right",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                        }}
                    >
                        {msg.text}
                    </div>
                )}

                {!isUser && (
                    <>
                        <Flex
                            vertical={true}
                            style={{
                                backgroundColor: "#E5E9F0",
                                borderRadius: "20px 20px 20px 0",
                                alignItems: "flex-start",
                            }}
                        >
                            <div
                                style={{
                                    maxWidth: "100%",
                                    padding: "10px 15px",
                                    borderRadius: "10px 10px 10px 0",
                                    backgroundColor: "#E5E9F0",
                                    textAlign: "left",
                                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                                }}
                            >
                                {msg.text}
                            </div>
                            {!isUser && (
                                <Flex
                                    vertical={false}
                                    style={{
                                        // border: "1px solid #E5E9F0",
                                        maxWidth: "100%",
                                        justifyContent: "flex-end",
                                        margin: "0 10px",
                                    }}
                                >
                                    <Button
                                        type="text"
                                        icon={<LikeOutlined />}
                                        style={{
                                            color: "green",
                                        }}
                                        size="small"
                                    />
                                    <Button
                                        type="text"
                                        icon={<DislikeOutlined />}
                                        style={{
                                            color: "red",
                                        }}
                                        size="small"
                                    />
                                </Flex>
                            )}
                        </Flex>
                    </>
                )}

                {isUser && (
                    <Avatar
                        style={{
                            backgroundColor: "#1890ff",
                            marginLeft: "10px",
                        }}
                        icon={<UserOutlined />}
                    />
                )}

                {/* Delete Button */}
                {!isUser && (
                    <Popconfirm
                        title="Are you sure you want to regenerate this message?"
                        onConfirm={onDelete}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button
                            type="text"
                            icon={<SyncOutlined />}
                            style={{
                                marginLeft: isUser ? "10px" : "0",
                                marginRight: isUser ? "0" : "10px",
                            }}
                        />
                    </Popconfirm>
                )}
            </Flex>
        </Flex>
    );
};

export default Message;
