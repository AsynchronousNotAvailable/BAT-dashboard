import { Button, Flex } from "antd";
                    
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";

interface ConfirmProps {
    onDeleteChat: (index: number) => void;
    index: number;
}

const Confirm: React.FC<ConfirmProps> = ({
    onDeleteChat,
    index,
}) => {
    const [confirmation, setConfirmation] = useState(false);
    return (
        <>
            {!confirmation && (
                <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    style={{}}
                    onClick={() => setConfirmation(true)}
                />
            )}
            {confirmation && (
                <Flex vertical={false}>
                    <Button type="text" onClick={() => onDeleteChat(index)}>
                        Yes
                    </Button>
                    <Button type="text" onClick={() => setConfirmation(false)}>
                        No
                    </Button>
                </Flex>
            )}
        </>
    );
}



export default Confirm;