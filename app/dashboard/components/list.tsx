import React, { useState } from "react";
import { List, Tag, Typography } from "antd";
import VirtualList from "rc-virtual-list";
import { BellOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Title } = Typography;

interface UserItem {
    title: string;
    description: string;
    status: string;
}

const noticeData: UserItem[] = [
    {
        title: "[KKM] Mindsync Brainwave Headset Health Calibration Application",
        description: "Application submitted to KKM for health calibration approval.",
        status: "Pending",
    },
    {
        title: "[FDA] FDA Approval for Neuro-Stimulation Safety Standards",
        description: "Awaiting FDA feedback on the safety and neuro-stimulation compliance tests.",
        status: "Pending",
    },
    {
        title: "[EU] CE Certification for Medical Device Classification",
        description: "CE application under review for classification as a medical device under EU regulations.",
        status: "Approved",
    },
];

const Notice: React.FC = () => {
    const [data] = useState<UserItem[]>(noticeData);

    const renderTagByIndex = (status: string) => {
        switch (status) {
            case "Pending":
                return <StyledTag color="orange">{status}</StyledTag>;
            case "Approved":
                return <StyledTag color="green">{status}</StyledTag>;
            case "Rejected":
                return <StyledTag color="red">{status}</StyledTag>;
            default:
                return <StyledTag color="default">{status}</StyledTag>;
        }
    };

    return (
        <StyledNotice>

            <List>
                <VirtualList
                    data={data}
                    height={220}
                    itemHeight={47}
                    itemKey="email"
                    style={{ width: 300 }}
                >
                    {(item: UserItem) => (
                        <StyledListItem key={item.title}>
                            <List.Item.Meta
                                title={<a href="#">{item.title}</a>}
                                description={item.description}
                            />
                            {renderTagByIndex(item.status)}
                        </StyledListItem>
                    )}
                </VirtualList>
            </List>
        </StyledNotice>
    );
};

export default Notice;

// Styled Components
const StyledNotice = styled.div`
    padding: 16px;
    border-radius: 0;
    background-color: transparent;
    border: none;
    box-shadow: none;
`;

const StyledListItem = styled(List.Item)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    word-wrap: break-word;
    overflow: hidden;
`;

const StyledTag = styled(Tag)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
