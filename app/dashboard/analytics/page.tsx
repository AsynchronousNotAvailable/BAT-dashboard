"use client";

import { useState } from "react";
import { Button, Select, Col, Row, Table, Input, Divider } from "antd";
import styled from "styled-components";
import Title from "antd/es/typography/Title";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

const AnalyticsPage: React.FC = () => {
    // State to keep track of product columns
    const [productColumns, setProductColumns] = useState<number[]>([0]);

    // State to track selected products for each column
    const [selectedProducts, setSelectedProducts] = useState<{
        [key: number]: string | undefined;
    }>({});

    // State to control the display of the analysis table
    const [showAnalysisTable, setShowAnalysisTable] = useState(false);

    const addProductColumn = () => {
        if (productColumns.length < 3) {
            setProductColumns([...productColumns, productColumns.length]);
        }
    };

    const removeProductColumn = (index: number) => {
        const newColumns = productColumns.filter((_, idx) => idx !== index);
        setProductColumns(newColumns);

        // Remove the product from selectedProducts when column is removed
        const updatedProducts = { ...selectedProducts };
        delete updatedProducts[index];
        setSelectedProducts(updatedProducts);
    };

    const handleProductChange = (value: string, index: number) => {
        setSelectedProducts({
            ...selectedProducts,
            [index]: value,
        });
    };

    const productData = [
        {
            productName: "Eco-Friendly Water Bottle",
            price: "$25",
            usability:
                "Durable and reusable for years with temperature insulation.",
            sustainability:
                "Made from 100% recycled materials, carbon-neutral manufacturing.",
        },
        {
            productName: "Biodegradable Phone Case",
            price: "$40",
            usability:
                "Shock-resistant and provides strong protection for all phone models.",
            sustainability:
                "Compostable after use, made with non-toxic, renewable resources.",
        },
        {
            productName: "Solar-Powered Backpack",
            price: "$120",
            usability:
                "Integrated solar panels for charging devices on the go.",
            sustainability:
                "Crafted from recycled plastics and low-energy manufacturing process.",
        },
        {
            productName: "Organic Cotton T-shirt",
            price: "$30",
            usability: "Soft, breathable fabric suitable for all-day comfort.",
            sustainability:
                "Sustainably farmed cotton with eco-friendly dyes and water-saving production.",
        },
    ];


    // Get an array of products that have already been selected
    const selectedValues = Object.values(selectedProducts);

    // Aspects to compare
    const aspects = ["Price", "Usability", "Sustainability"];

    // Function to handle analysis button click
    const handleAnalyzeClick = () => {
        setShowAnalysisTable(true);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Analytics</h2>
            <Row gutter={16}>
                {productColumns.map((column, index) => (
                    <Col key={index} span={8}>
                        <StyledProductColumn>
                            <h3>Product {index + 1}</h3>
                            <Select
                                placeholder="Select a product"
                                style={{ width: "100%", marginBottom: "20px" }}
                                onChange={(value) =>
                                    handleProductChange(value, index)
                                }
                                value={selectedProducts[index]}
                            >
                                {productData.map((product) => (
                                    <Option
                                        key={product?.productName}
                                        value={product?.productName}
                                        // Disable option if it is already selected in another column
                                        disabled={selectedValues.includes(
                                            product?.productName
                                        )}
                                    >
                                        {product?.productName}
                                    </Option>
                                ))}
                            </Select>
                            {productColumns.length > 1 && (
                                <Button
                                    type="primary"
                                    danger
                                    onClick={() => removeProductColumn(index)}
                                >
                                    Remove
                                </Button>
                            )}
                        </StyledProductColumn>
                    </Col>
                ))}

                {productColumns.length < 3 && (
                    <StyledAddProductColumn onClick={addProductColumn}>
                        <PlusOutlined
                            style={{ fontSize: "24px", color: "#999" }}
                        />
                    </StyledAddProductColumn>
                )}
            </Row>

            {/* Analyze Button */}
            <Button
                type="primary"
                onClick={handleAnalyzeClick}
                style={{ marginTop: "20px" }}
            >
                Analyze
            </Button>

            {/* Analysis Table */}
            {showAnalysisTable && (
                <>
                    <Title level={3} style={{ marginTop: "20px" }}>
                        Analysis
                    </Title>
                    <StyledAnalysisTable>
                        {aspects.map((aspect, aspectIndex) => (
                            <>
                                <div
                                    key={aspect}
                                    style={{ padding: "20px", paddingTop: 0 }}
                                >
                                    <Title level={4}>{aspect}</Title>
                                    <Table
                                        dataSource={[{ key: aspectIndex }]} // One row for the current aspect
                                        pagination={false}
                                        columns={[
                                            ...productColumns.map(
                                                (_, columnIndex) => ({
                                                    title: `${productData[columnIndex]?.productName}`, // Dynamically show product titles
                                                    dataIndex: `product-${columnIndex}`,
                                                    render: () => (
                                                        <p
                                                            style={{
                                                                maxWidth: 300,
                                                            }}
                                                        >
                                                            {
                                                                productData[
                                                                    columnIndex
                                                                ]?.[
                                                                    aspect.toLowerCase() as keyof Omit<
                                                                        (typeof productData)[number],
                                                                        "productName"
                                                                    >
                                                                ]
                                                            }
                                                        </p>
                                                    ),
                                                })
                                            ),
                                        ]}
                                    />
                                </div>
                                <Divider />
                            </>
                        ))}
                    </StyledAnalysisTable>
                </>
            )}
        </div>
    );
};

const StyledAddProductColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 200px;
    border: 2px dashed #ccc;
    border-radius: 5px;
    cursor: pointer;
    background-color: #fafafa;

    &:hover {
        background-color: #f0f0f0;
        border-color: #999;
    }
`;

const StyledProductColumn = styled.div`
    border: 1px solid #ccc;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 5px;
    min-height: 200px;
`;

const StyledAnalysisTable = styled.div`
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    background-color: #f9f9f9;
`;

export default AnalyticsPage;
