"use client";

import { useState } from "react";
import { Button, Select, Col, Row, Table, Input, Divider, Flex, Typography } from "antd";
import styled from "styled-components";
import Title from "antd/es/typography/Title";
import Icon, {
    PlusOutlined,
    CloseSquareOutlined,
    FileSearchOutlined,
    CheckOutlined,
    CloseOutlined,
} from "@ant-design/icons";
import type { GetProps } from "antd";

type CustomIconComponentProps = GetProps<typeof Icon>;
const { Option } = Select;

const AnalyticsPage: React.FC = () => {
    const { Text } = Typography;
    // State to keep track of product columns
    const [productColumns, setProductColumns] = useState<number[]>([0]);
     const [ownProductColumns, setOwnProductColumns] = useState<number[]>([0]);
    // State to track selected products for each column
    const [selectedProducts, setSelectedProducts] = useState<{
        [key: number]: string | undefined;
    }>({});

    const [selectedOwnProducts, setSelectedOwnProducts] = useState<{
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

    const handleOwnProductChange = (value: string, index: number) => {
        setSelectedOwnProducts({
            ...selectedOwnProducts,
            [index]: value,
        });
    };

    const ownProductData = [
        {
            productName: "MindSync Brainwave Headset",
            price: "$80",
            usability:
                "Durable and reusable for years with temperature insulation.",
            sustainability:
                "Made from 100% recycled materials, carbon-neutral manufacturing.",
        },
        {
            productName: "MindSync Smart Glasses",
            price: "$120",
            usability:
                "Shock-resistant and provides strong protection for all phone models.",
            sustainability:
                "Compostable after use, made with non-toxic, renewable resources.",
        },
    ];

    const productData = [
        {
            productName: "Mindfulness Journal",
            price: "$20",
            usability:
                "Guided prompts to encourage daily reflection and gratitude.",
            sustainability: "Made from recycled paper with eco-friendly ink.",
        },
        {
            productName: "Aromatherapy Diffuser",
            price: "$45",
            usability:
                "Creates a calming atmosphere with essential oils to reduce stress.",
            sustainability:
                "Constructed from sustainably sourced wood and non-toxic materials.",
        },
        {
            productName: "Brainwave Meditation Headset",
            price: "$150",
            usability:
                "Uses EEG technology to enhance meditation experiences through biofeedback.",
            sustainability:
                "Designed with recyclable materials and energy-efficient components.",
        },
        {
            productName: "Guided Meditation App Subscription",
            price: "$10/month",
            usability:
                "Access to a library of guided meditations for stress relief and focus.",
            sustainability:
                "Digital product with no physical materials, reducing waste.",
        },
        {
            productName: "Stress Relief Coloring Book",
            price: "$15",
            usability:
                "Intricate designs to promote relaxation and creativity.",
            sustainability: "Printed on recycled paper with soy-based inks.",
        },
    ];


    const AISummary = [
       "Recent studies show a 40% increase in the use of mindfulness apps among users looking to manage anxiety and stress, indicating a growing market for mental health tools.",
       "Research highlights that sustainable products, such as eco-friendly wellness items, are gaining popularity, with consumers increasingly prioritizing both mental health benefits and environmental impact.",
       "New findings suggest that brainwave entrainment technologies, like EEG devices, are becoming more mainstream, as they offer innovative ways to enhance meditation practices and improve focus.",
   ];


    // Get an array of products that have already been selected
    const selectedValues = Object.values(selectedProducts);

    // Aspects to compare
    const aspects = ["Price", "Usability", "Sustainability"];

    // Function to handle analysis button click
    const handleAnalyzeClick = () => {
        setShowAnalysisTable(true);
    };


    const AnalyzeSvg = () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.9524 1.5238C13.1922 2.24325 13.7568 2.80779 14.4762 3.04761C14.7508 3.13913 14.7508 3.52751 14.4762 3.61904C13.7568 3.85885 13.1922 4.42341 12.9524 5.14285C12.8609 5.41743 12.4725 5.41743 12.381 5.14285C12.1412 4.42341 11.5766 3.85885 10.8572 3.61904C10.5826 3.52751 10.5826 3.13913 10.8572 3.04761C11.5766 2.80779 12.1412 2.24325 12.381 1.5238C12.4725 1.24923 12.8609 1.24923 12.9524 1.5238Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.0297 7.12107C11.5979 6.31043 9.68964 4.40219 8.87904 1.97038C8.59744 1.12565 7.40264 1.12565 7.12104 1.97038C6.31044 4.40219 4.4022 6.31043 1.97038 7.12107C1.12565 7.4026 1.12565 8.59747 1.97038 8.87907C4.4022 9.68967 6.31044 11.5979 7.12104 14.0297C7.40264 14.8744 8.59744 14.8744 8.87904 14.0297C9.68964 11.5979 11.5979 9.68967 14.0297 8.87907C14.8744 8.59747 14.8744 7.4026 14.0297 7.12107ZM8.00004 3.36665C7.05611 5.41227 5.41227 7.05607 3.36666 8.00007C5.41226 8.944 7.05611 10.5878 8.00004 12.6334C8.94397 10.5878 10.5878 8.944 12.6334 8.00007C10.5878 7.05607 8.94397 5.41227 8.00004 3.36665Z"
                fill="white"
            />
            <path
                d="M2.41638 12.1547L2.27384 12.4398C2.16551 12.6565 1.98983 12.8321 1.77317 12.9405L1.48809 13.083C1.2818 13.1861 1.2818 13.4805 1.48809 13.5837L1.77317 13.7262C1.98983 13.8345 2.16551 14.0102 2.27384 14.2269L2.41638 14.5119C2.51952 14.7183 2.8139 14.7183 2.91704 14.5119L3.05958 14.2269C3.16791 14.0102 3.34359 13.8345 3.56025 13.7262L3.84533 13.5837C4.05162 13.4805 4.05162 13.1861 3.84533 13.083L3.56025 12.9405C3.34359 12.8321 3.16791 12.6565 3.05958 12.4398L2.91704 12.1547C2.8139 11.9484 2.51952 11.9484 2.41638 12.1547Z"
                fill="white"
            />
        </svg>
    );

    const AIIcon = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={AnalyzeSvg} {...props} />
    );

    return (
        <>
            <div
                style={{
                    padding: "20px",
                    backgroundColor: "white",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "20px",
                }}
            >
                <Title level={3} style={{ margin: "20px" }}>
                    Analytics
                </Title>
                <Row gutter={16}>
                    {productColumns.map((column, index) => (
                        <Col key={index} span={8}>
                            <StyledProductColumn>
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: "12px",
                                    }}
                                >
                                    {index === 0
                                        ? "Your Product"
                                        : `Competitor Product ${index}`}
                                </Text>
                                <Select
                                    placeholder="Select a product"
                                    style={{
                                        width: "100%",
                                        marginBottom: "20px",
                                    }}
                                    onChange={(value) => {
                                        if (index === 0) {
                                            handleOwnProductChange(
                                                value,
                                                index
                                            );
                                        } else {
                                            handleProductChange(value, index);
                                        }
                                    }}
                                    value={
                                        index === 0
                                            ? selectedOwnProducts[index]
                                            : selectedProducts[index]
                                    } // Use the correct state
                                >
                                    {index !== 0
                                        ? productData.map((product) => (
                                              <Option
                                                  key={product?.productName}
                                                  value={product?.productName}
                                                  disabled={selectedValues.includes(
                                                      product?.productName
                                                  )} // Disable already selected products
                                              >
                                                  {product?.productName}
                                              </Option>
                                          ))
                                        : ownProductData.map((product) => (
                                              <Option
                                                  key={product?.productName}
                                                  value={product?.productName}
                                              >
                                                  {product?.productName}
                                              </Option>
                                          ))}
                                </Select>

                                {productColumns.length > 1 && (
                                    <Flex
                                        style={{
                                            justifyContent: "flex-end",
                                            // border: "2px dashed #ccc",
                                        }}
                                    >
                                        <Button
                                            danger
                                            icon={<CloseSquareOutlined />}
                                            onClick={() =>
                                                removeProductColumn(index)
                                            }
                                        />
                                    </Flex>
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
                    icon={<FileSearchOutlined />}
                    style={{ marginTop: "20px" }}
                />
            </div>
            {/* Analysis Table */}
            {showAnalysisTable && (
                <>
                    <Title level={3} style={{ margin: "20px" }}>
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
                                                    title:
                                                        columnIndex !== 0
                                                            ? `${productData[columnIndex]?.productName}`
                                                            : `${ownProductData[columnIndex]?.productName}`, // Dynamically show product titles
                                                    dataIndex: `product-${columnIndex}`,
                                                    render: () => (
                                                        <p
                                                            style={{
                                                                maxWidth: 300,
                                                            }}
                                                        >
                                                            {columnIndex !== 0
                                                                ? productData[
                                                                      columnIndex
                                                                  ]?.[
                                                                      aspect.toLowerCase() as keyof Omit<
                                                                          (typeof productData)[number],
                                                                          "productName"
                                                                      >
                                                                  ]
                                                                : ownProductData[
                                                                      columnIndex
                                                                  ]?.[
                                                                      aspect.toLowerCase() as keyof Omit<
                                                                          (typeof ownProductData)[number],
                                                                          "productName"
                                                                      >
                                                                  ]}
                                                        </p>
                                                    ),
                                                })
                                            ),
                                        ]}
                                    />
                                </div>

                                <Flex
                                    vertical={false}
                                    style={{
                                        padding: "10px",
                                        background:
                                            "linear-gradient(90deg, #4F46E5, rgba(79, 70, 229, 0.4))",
                                        borderColor: "#4338CA",
                                        borderWidth: "2px",
                                        borderRadius: "20px",
                                        alignItems: "center",
                                    }}
                                >
                                    <AIIcon style={{ margin: "10px" }} />
                                    <Text
                                        style={{
                                            color: "white",
                                        }}
                                    >
                                        {AISummary[aspectIndex]}
                                    </Text>
                                </Flex>
                                <Divider />
                            </>
                        ))}
                    </StyledAnalysisTable>
                </>
            )}
        </>
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
    
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    min-height: 200px;
`;

const StyledAnalysisTable = styled.div`
    margin-top: 20px;   
    padding: 30px;
    border-radius: 5px;

`;

export default AnalyticsPage;
