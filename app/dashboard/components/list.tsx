import React, { useEffect, useState } from "react";
import { Avatar, List, Tag, message } from "antd";
import VirtualList from "rc-virtual-list";
import { User } from "lucide-react";

// interface UserItem {
//     email: string;
//     gender: string;
//     name: {
//         first: string;
//         last: string;
//         title: string;
//     };
//     nat: string;
//     picture: {
//         large: string;
//         medium: string;
//         thumbnail: string;
//     };
// }

interface UserItem {
    title: string;
    description: string;
    status: string;
}

const fakeDataUrl =
    "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 220;

const noticeData: UserItem[] = [
    {
        title: "[KKM] Mindsync Brainwave Headset Health Calibration Application",
        description:
            "Application submitted to KKM for health calibration approval. Under review by the Health Ministry.",
        status: "Pending",
    },
    {
        title: "[FDA] FDA Approval for Neuro-Stimulation Safety Standards",
        description:
            "Awaiting FDA feedback on the safety and neuro-stimulation compliance tests. Expected response in 2 weeks.",
        status: "Pending",
    },
    {
        title: "[EU] CE Certification for Medical Device Classification",
        description:
            "CE application under review for classification as a medical device under EU regulations. Initial feedback received.",
        status: "Approved",
    },
    {
        title: "[TGA] Australian TGA Compliance for Therapeutic Use",
        description:
            "Submitted for therapeutic use approval in Australia. Additional data requested on efficacy studies.",
        status: "Rejected",
    },
    {
        title: "[ISO] ISO 13485 Certification for Quality Management",
        description:
            "Preliminary audit completed for ISO 13485. Full certification expected in Q4.",
        status: "Pending",
    },
];


const Notice: React.FC = () => {
    

    const [data, setData] = useState<UserItem[]>(noticeData);

    

    const appendData = () => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((body) => {
                setData(data.concat(body.results));
                message.success(`${body.results.length} more items loaded!`);
            });
    };

    useEffect(() => {
        // appendData();
    }, []);

    // const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    //     if (
    //         Math.abs(
    //             e.currentTarget.scrollHeight -
    //                 e.currentTarget.scrollTop -
    //                 ContainerHeight
    //         ) <= 1
    //     ) {
    //         appendData();
    //     }
    // };

    const renderTagByIndex = (status: string) => {
        // Customize your tag based on the index or any other condition
        switch (status) {
            case "Pending":
                return <Tag color="orange">{status}</Tag>;
            case "Approved":
                return <Tag color="green">{status}</Tag>;
            case "Rejected":
                return <Tag color="red">{status}</Tag>;
            default:
                return <Tag color="default">{status}</Tag>;
        }
    };

    return (
        <List
            // header={<div>Regulatory Compliance Approval Status</div>}
            // style={{
            //     borderRadius: "1em",
                
            // }}
        >
            <VirtualList
                data={data}
                height={ContainerHeight}
                itemHeight={47}
                itemKey="email"
                // onScroll={onScroll}
                style={{ width: 350 }}
            >
                {(item: UserItem, index: number) => (
                    <List.Item key={item.title}>
                        <List.Item.Meta
                            title={
                                <a href="https://ant.design">{item.title}</a>
                            }
                            description={item.description}
                        />
                        {/* Render different tags based on the index */}
                        {renderTagByIndex(item.status)}
                    </List.Item>
                )}
            </VirtualList>
        </List>
    );
};

export default Notice;
