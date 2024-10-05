// ChatConfig.tsx
import React from "react";
import { Slider, Select, Tag, InputNumber, Flex, Typography, Divider } from "antd";
import MultipleSelectComponent from "./MultiSelect";


interface ChatConfigProps {
    config: { temperature: number; model: string; maxTokens: number };
    setConfig: (config: {
        temperature: number;
        model: string;
        maxTokens: number;
    }) => void;
}

const ChatConfig: React.FC<ChatConfigProps> = ({ config, setConfig }) => {
    const {Text} = Typography;
    const handleTemperatureChange = (value: number) => {
        setConfig({ ...config, temperature: value });
    };

    const handleModelChange = (value: string) => {
        setConfig({ ...config, model: value });
    };

    const handleMaxTokensChange = (value: number | null) => {
        setConfig({ ...config, maxTokens: value !== null ? value : 50 }); // Default to 50 if value is null
    };

    const models = [
        { model: "gpt-4o", displayName: "GPT-4o" },
        { model: "gpt-4", displayName: "GPT-4" },
        { model: "gpt-3", displayName: "GPT-3" },
        { model: "claude-3", displayName: "Claude 3" },
    ];

    return (
        <Flex
            vertical={true}
            style={{ padding: "16px 24px", backgroundColor: "white" }}
        >
            <Flex vertical={true} gap={5}>
                <Text style={{ fontWeight: "bold", fontSize: "16px" }}>
                    Chat Configuration
                </Text>
                <Divider style={{marginTop: 0}}/>
                <Flex vertical={true} gap={5}>
                    <label>Temperature:</label>
                    <Slider
                        min={0}
                        max={1}
                        step={0.1}
                        value={config.temperature}
                        onChange={handleTemperatureChange}
                    />
                </Flex>
            </Flex>
            <Flex vertical={true} gap={5} style={{marginBottom: "15px"}}>
                <label>Model</label>
                <Select
                    value={config.model}
                    onChange={handleModelChange}
                    style={{ width: "100%" }}
                >
                    {models.map((model) => {

                        return (
                            <Select.Option value={model.model}>
                                {model.displayName}
                            </Select.Option>
                        );
                    })}
                    
                </Select>
            </Flex>

            <MultipleSelectComponent />
        </Flex>
    );
};

export default ChatConfig;
