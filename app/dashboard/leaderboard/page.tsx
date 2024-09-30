"use client";

import { Table, Tag } from "antd";
import { ColumnType } from "antd/es/table";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import styled from "styled-components";

const LeaderBoard: React.FC = () => {
    interface LeaderboardData {
        key: string;
        top_selling_product: string;
        clickthrough_percentage: number;
        rank: number;
        category: string[];
        company: string;
    }

    const initialData: LeaderboardData[] = [
        {
            key: "1",
            top_selling_product: "Alice",
            clickthrough_percentage: 95,
            rank: 1,
            category: ["A", "B", "C"],
            company: "USA",
        },
        {
            key: "2",
            top_selling_product: "Bob",
            clickthrough_percentage: 85,
            rank: 2,
            category: ["A", "B", "C"],
            company: "Canada",
        },
        {
            key: "3",
            top_selling_product: "Charlie",
            clickthrough_percentage: 92,
            rank: 3,
            category: ["A", "B", "C"],
            company: "UK",
        },
        {
            key: "4",
            top_selling_product: "David",
            clickthrough_percentage: 75,
            rank: 4,
            category: ["A", "B", "C"],
            company: "Australia",
        },
        {
            key: "5",
            top_selling_product: "Charlie",
            clickthrough_percentage: 92,
            rank: 5,
            category: ["A", "B", "C"],
            company: "UK",
        },
        {
            key: "6",
            top_selling_product: "David",
            clickthrough_percentage: 75,
            rank: 6,
            category: ["A", "B", "C"],
            company: "Australia",
        },
        {
            key: "7",
            top_selling_product: "Charlie",
            clickthrough_percentage: 92,
            rank: 7,
            category: ["A", "B", "C"],
            company: "UK",
        },
        {
            key: "8",
            top_selling_product: "David",
            clickthrough_percentage: 75,
            rank: 8,
            category: ["A", "B", "C"],
            company: "Australia",
        },
    ];

    const [dataSource, setDataSource] =
        useState<LeaderboardData[]>(initialData);

    const columns: ColumnType<LeaderboardData>[] = [
        {
            title: "Ranking",
            dataIndex: "rank",
            key: "rank",
            sorter: (a: any, b: any) => a.rank - b.rank,
            
            sortDirections: ["ascend", "descend"],
        },
        {
            title: "Company",
            dataIndex: "company",
            key: "company",
            sorter: (a: any, b: any) =>
                a.company.localeCompare(b.company),
            render: (text: any) => (
                <Tag color="blue" key={text}>
                    {text.toUpperCase()}
                </Tag>
            ),
        },
        {
            title: "Top Selling Product",
            dataIndex: "top_selling_product",
            key: "top_selling_product",
            sorter: (a: any, b: any) =>
                a.top_selling_product.localeCompare(b.top_selling_product),
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            render: (categories: string[]) => (
                <>
                    {/* Sort the categories within the row */}
                    {categories.sort().map((category: string) => (
                        <Tag color="blue" key={category}>
                            {category}
                        </Tag>
                    ))}
                </>
            ),
        },
        {
            title: "Clickthrough Percentage",
            dataIndex: "clickthrough_percentage",
            key: "clickthrough_percentage",
            sorter: (a: any, b: any) =>
                a.clickthrough_percentage - b.clickthrough_percentage,
        },
    ];

     const rowClassName = (record: LeaderboardData) => {
    return record.company === "Canada" ? "self-row" : "normal-row";
  };

    return (
        <div style={{ padding: "20px" }}>
            <Title level={2}>Leaderboard</Title>
            <StyledTableWrapper>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    pagination={false}
                    rowClassName={rowClassName}
                    
                />
            </StyledTableWrapper>
        </div>
    );
};

const StyledTableWrapper = styled.div`
    .self-row {
        background-color: #a5b4fc !important;
        color: white !important;
    }

    .ant-table-tbody > tr.self-row > td {
        background-color: #a5b4fc !important;
    }

    .ant-table-tbody > tr.self-row:hover > td {
        background-color: #a5b4fc !important;
    }

    .normal-row {
        background-color: white !important;
        color: black !important;
    }
`;

export default LeaderBoard
