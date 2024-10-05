import React, { useEffect, useState } from "react";
import { Avatar, List, Tag, message } from "antd";
import VirtualList from "rc-virtual-list";

interface UserItem {
    email: string;
    gender: string;
    name: {
        first: string;
        last: string;
        title: string;
    };
    nat: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}

const fakeDataUrl =
    "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 220;

const Notice: React.FC = () => {
    const [data, setData] = useState<UserItem[]>([]);

    const appendData = () => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((body) => {
                setData(data.concat(body.results));
                message.success(`${body.results.length} more items loaded!`);
            });
    };

    useEffect(() => {
        appendData();
    }, []);

    const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
        if (
            Math.abs(
                e.currentTarget.scrollHeight -
                    e.currentTarget.scrollTop -
                    ContainerHeight
            ) <= 1
        ) {
            appendData();
        }
    };

    const renderTagByIndex = (index: number) => {
        // Customize your tag based on the index or any other condition
        if (index % 3 === 0) {
            return <Tag color="green">Approved</Tag>;
        } else if (index % 3 === 1) {
            return <Tag color="red">Rejected</Tag>;
        } else {
            return <Tag color="orange">Pending</Tag>;
        }
    };

    return (
        <List
            header={<div>Regulatory Compliance Approval Status</div>}
            style={{ borderRadius: "1em" }}
        >
            <VirtualList
                data={data}
                height={ContainerHeight}
                itemHeight={47}
                itemKey="email"
                onScroll={onScroll}
                style={{ width: 350 }}
            >
                {(item: UserItem, index: number) => (
                    <List.Item key={item.email}>
                        <List.Item.Meta
                            title={
                                <a href="https://ant.design">
                                    {item.name.last}
                                </a>
                            }
                            description={item.email}
                        />
                        {/* Render different tags based on the index */}
                        {renderTagByIndex(index)}
                    </List.Item>
                )}
            </VirtualList>
        </List>
    );
};

export default Notice;
