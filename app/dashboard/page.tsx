"use client";
import React, { useEffect, useRef, useState } from "react";
import { Column } from "@ant-design/plots";
import {
  
} from "@ant-design/icons";

import {
    Breadcrumb,
    Flex,
    Layout,
    theme,
    Typography,
    Carousel,
    Card,
} from "antd";

import UserCard from "./components/card";
import Notice from "./components/list";
import ThreadCard from "./components/forum";

const { Title, Text } = Typography;

const Dashboard: React.FC = () => {
    
    const chartRef: any = useRef();
    
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const config = {
        data: [
            { year: "1991", value: 15468 },
            { year: "1992", value: 16100 },
            { year: "1993", value: 15900 },
            { year: "1994", value: 17409 },
            { year: "1995", value: 17000 },
            { year: "1996", value: 31056 },
            { year: "1997", value: 31982 },
            { year: "1998", value: 32040 },
            { year: "1999", value: 33233 },
        ],
        xField: "year",
        yField: "value",
        shapeField: "smooth",
        height: 300,
        label: {
            text: "value",
            style: {
                fontSize: 10,
                textAlign: (_: any, idx: any, arr: any) => {
                    if (idx === 0) return "left";
                    if (idx === arr.length - 1) return "right";
                    return "center";
                },
            },
        },
        style: {
            opacity: 0.4,
            
        },
        axis: {
            y: { labelFormatter: "~s" },
        },
        line: {},
    };

    const config2 = {
        data: [
            { year: "1", mental_health_score: 20 },
            { year: "2", mental_health_score: 40 },
            { year: "3", mental_health_score: 60 },
            { year: "4", mental_health_score: 80 },
            { year: "5", mental_health_score: 90 },
            { year: "6", mental_health_score: 105 },
            { year: "7", mental_health_score: 110 },
            { year: "8", mental_health_score: 200 },
            { year: "9", mental_health_score: 300 },
        ],
        xField: "year",
        yField: "mental_health_score",
        slider: {
            x: {
                values: [0.6, 1],
            },
        },
    };

    const config3 = {
        data: {
            type: "fetch",
            value: "https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/column-column.json",
        },
        xField: "letter",
        yField: "frequency",
        label: {
            text: (d: any) => `${(d.frequency * 100).toFixed(1)}%`,
            textBaseline: "bottom",
        },
        axis: {
            y: {
                labelFormatter: ".0%",
            },
        },
        style: {
            // 圆角样式
            radiusTopLeft: 10,
            radiusTopRight: 10,
        },
    };

    const data4 = [
        {
            product_type: "Treatment",
            company: "Skibidi",
            order_amt: 8,
            product_sub_type: "Supplement",
        },
        {
            product_type: "Treatment",
            company: "MentalGo",
            order_amt: 10,
            product_sub_type: "Health",
        },
        {
            product_type: "Supplementary Device",
            company: "Skibidi",
            order_amt: 20,
            product_sub_type: "Supplement",
        },
        {
            product_type: "Supplementary Device",
            company: "MentalGo",
            order_amt: 13,
            product_sub_type: "Health",
        },
        {
            product_type: "Treatment",
            company: "MentalGo",
            order_amt: 21,
            product_sub_type: "Health",
        },
        {
            product_type: "Treatment",
            company: "MentalGo",
            order_amt: 21,
            product_sub_type: "Health",
        },
    ];

    const config4 = {
        data: {
            value: data4,
        },
        xField: "product_type",
        yField: "order_amt",
        radius: 10,
        seriesField: "company",
        stack: {
            groupBy: ["x", "series"],
            series: false,
        },
        colorField: "product_sub_type",
        tooltip: (item: any) => {
            return { origin: item };
        },
        interaction: {
            tooltip: {
                render: (e: any, { title, items }: any) => {
                    return (
                        <div>
                            <h4>{title}</h4>
                            {items.map((item: any) => {
                                const { name, color, origin } = item;
                                return (
                                    <div>
                                        <div
                                            style={{
                                                margin: 0,
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <div>
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: "50%",
                                                        backgroundColor: color,
                                                        marginRight: 6,
                                                    }}
                                                ></span>
                                                <span>
                                                    {origin["product_sub_type"]}
                                                    -{name}
                                                </span>
                                            </div>
                                            <b>{origin["order_amt"]}</b>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                },
            },
        },
    };

    const contentStyle: React.CSSProperties = {
        height: "160px",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
    };

    
    useEffect(() => {
        console.log({ chartRef });
        if (chartRef.current) {
        }
    }, [])

    return (
        <>
            <div
                style={{
                    padding: "36px",
                }}
            >
                <Title>Welcome Back, Admin!</Title>
                <Flex
                    vertical={false}
                    justify="space-between"
                    align="center"
                    gap={10}
                >
                    <Notice />

                    <Carousel
                        autoplay
                        style={{
                            maxWidth: "500px",
                            height: "300px",

                            boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
                        }}
                    >
                        <Card title="Latest Trends" bordered={false}>
                            Card content
                        </Card>
                        <Card title="Latest Trends" bordered={false}>
                            Card content
                        </Card>
                        <Card title="Latest Trends" bordered={false}>
                            Card content
                        </Card>
                        <Card title="Latest Trends" bordered={false}>
                            Card content
                        </Card>
                    </Carousel>

                    <UserCard />
                </Flex>
            </div>
            <div style={{ backgroundColor: "#EEF7FE", padding: "12px 36px" }}>
                <Flex
                    vertical={false}
                    justify="space-between"
                    // style={{ maxWidth: "fit-content" }}
                    gap={10}
                >
                    <Card
                        style={{
                            // width: 400,

                            margin: "20px",
                            borderRadius: "10px",
                            // padding: "40px",
                            boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
                        }}
                    >
                        <Column {...config4} height={300} width={500} />
                    </Card>
                    <ThreadCard />
                </Flex>
            </div>
        </>
    );
};

export default Dashboard;

