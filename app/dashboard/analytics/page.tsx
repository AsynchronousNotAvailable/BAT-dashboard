"use client";

import { useState } from "react";
import { Button, Select, Col, Row, Table, Typography, Space, Card, Divider } from "antd";
import styled from "styled-components";
import Icon, { PlusOutlined, CloseSquareOutlined, FileSearchOutlined } from "@ant-design/icons";
import type { GetProps } from "antd";

type CustomIconComponentProps = GetProps<typeof Icon>;
const { Option } = Select;
const { Title, Text } = Typography;

const AnalyticsPage: React.FC = () => {
    // State to keep track of product columns
    const [productColumns, setProductColumns] = useState<number[]>([0]);

    // State to track selected products for each column
    const [selectedProducts, setSelectedProducts] = useState<{ [key: number]: string | undefined }>({});

    // State to control the display of the analysis table
    const [showAnalysisTable, setShowAnalysisTable] = useState(false);

    // Aspects to compare
    const aspects = ["Comfort", "Health Monitoring", "Sustainability"];

    // Function to add a new product column for comparison
    const addProductColumn = () => {
        if (productColumns.length < 3) {
            setProductColumns([...productColumns, productColumns.length]);
        }
    };

    // Function to remove a product column
    const removeProductColumn = (index: number) => {
        const newColumns = productColumns.filter((_, idx) => idx !== index);
        setProductColumns(newColumns);

        // Remove the product from selectedProducts when column is removed
        const updatedProducts = { ...selectedProducts };
        delete updatedProducts[index];
        setSelectedProducts(updatedProducts);
    };

    // Function to handle the change in product selection
    const handleProductChange = (value: string, index: number) => {
        setSelectedProducts({
            ...selectedProducts,
            [index]: value,
        });
    };

    // Product data (our product and competitors)
    const ownProductData = [
        {
            productName: "MindSync Headwave Earphone",
            comfort: "Ergonomically designed for long meditation sessions with premium memory foam tips",
            brainwaveAnalysis: "Advanced EEG feedback for personalized, real-time insights",
            healthMonitoring: "Heart rate, stress levels, and relaxation feedback with integrated sensors",
            sustainability: "Made from 100% recycled materials, environmentally conscious packaging",
        },
    ];

    const productData = [
        {
            productName: "NeuroSync Headwave Headset",
            comfort: "Comfortable ear cushions but bulkier compared to in-ear models",
            brainwaveAnalysis: "Standard EEG feedback for meditation tracking",
            healthMonitoring: "Limited to brain activity monitoring only",
            sustainability: "Partially recycled materials",
        },
        {
            productName: "FocusFit Smart Watch",
            comfort: "Lightweight with adjustable strap, but not suited for extended meditation sessions",
            brainwaveAnalysis: "No EEG capabilities, focuses on heart rate and HRV tracking",
            healthMonitoring: "Heart rate, sleep tracking, stress monitoring",
            sustainability: "Contains non-recyclable parts",
        },
        {
            productName: "AlphaBand Brainwave Detection Device",
            comfort: "Adjustable headband but can cause discomfort during prolonged use",
            brainwaveAnalysis: "Basic real-time brainwave monitoring",
            healthMonitoring: "Focus and relaxation levels only",
            sustainability: "Limited sustainability claims",
        },
        {
            productName: "MindWave Earbuds Pro",
            comfort: "Custom-fit ear tips but lacks ergonomic design for longer wear",
            brainwaveAnalysis: "EEG sensors with basic meditation enhancement",
            healthMonitoring: "Heart rate monitoring but no stress feedback",
            sustainability: "Standard materials with minimal eco-friendly focus",
        },
    ];

    const AISummary = [
        "MindSync Headwave Earphones stand out with the most advanced EEG technology, providing real-time personalized insights, significantly outperforming competitors with similar or less advanced features.",
        "FocusFit Smart Watch is limited to general wellness tracking without EEG capabilities, making MindSync the ideal choice for users seeking both mental and physical wellbeing features.",
        "AlphaBand Brainwave Detection Device offers basic EEG capabilities, but MindSync's ergonomic design and superior health monitoring provide a more comfortable and comprehensive solution.",
        "MindSync's sustainability approach is unmatched, with 100% recycled materials, setting a benchmark in the eco-friendly wellness space.",
    ];

    const selectedValues = Object.values(selectedProducts);

    const aspectMapping: { [key: string]: keyof typeof ownProductData[number] } = {
        "Comfort": "comfort",
        "Brainwave Analysis": "brainwaveAnalysis",
        "Health Monitoring": "healthMonitoring",
        "Sustainability": "sustainability",
    };

    const handleAnalyzeClick = () => {
        setShowAnalysisTable(true);
    };

    const AnalyzeSvg = () => (
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.9524 1.5238C13.1922 2.24325 13.7568 2.80779 14.4762 3.04761C14.7508 3.13913 14.7508 3.52751 14.4762 3.61904C13.7568 3.85885 13.1922 4.42341 12.9524 5.14285C12.8609 5.41743 12.4725 5.41743 12.381 5.14285C12.1412 4.42341 11.5766 3.85885 10.8572 3.61904C10.5826 3.52751 10.5826 3.13913 10.8572 3.04761C11.5766 2.80779 12.1412 2.24325 12.381 1.5238C12.4725 1.24923 12.8609 1.24923 12.9524 1.5238Z"
                fill="white"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.0297 7.12107C11.5979 6.31043 9.68964 4.40219 8.87904 1.97038C8.59744 1.12565 7.40264 1.12565 7.12104 1.97038C6.31044 4.40219 4.4022 6.31043 1.97038 7.12107C1.12565 7.4026 1.12565 8.59747 1.97038 8.87907C4.4022 9.68967 6.31044 11.5979 7.12104 14.0297C7.40264 14.8744 8.59744 14.8744 8.87904 14.0297C9.68964 11.5979 11.5979 9.68967 14.0297 8.87907C14.8744 8.59747 14.8744 7.4026 14.0297 7.12107ZM8.00004 3.36665C7.05611 5.41227 5.41227 7.05607 3.36666 8.00007C5.41226 8.944 7.05611 10.5878 8.00004 12.6334C8.94397 10.5878 10.5878 8.944 12.6334 8.00007C10.5878 7.05607 8.94397 5.41227 8.00004 3.36665Z"
                fill="white"
            />
            <path
                d="M2.41638 12.1547L2.27384 12.4398C2.16551 12.6565 1.98983 12.8321 1.77317 12.9405L1.48809 13.083C1.2818 13.1861 1.2818 13.4805 1.48809 13.5837L1.77317 13.7262C1.98983 13.8345 2.16551 14.0102 2.27384 14.2269L2.41638 14.5119C2.51952 14.7183 2.8139 14.7183 2.91704 14.5119L3.05958 14.2269C3.16791 14.0102 3.34359 13.8345 3.56025 13.7262L3.84533 13.5837C4.05162 13.4805 4.05162 13.1861 3.84533 13.083L3.56025 12.9405C3.34359 12.8321 3.16791 12.6565 3.05958 12.4398L2.91704 12.1547C2.8139 11.9484 2.51952 11.9484 2.41638 12.1547Z"
                fill="white"
            />
        </svg>
    );

    const AIIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={AnalyzeSvg} {...props} />;

    return (
        <>
            <StyledPageWrapper>
                <StyledTitle level={4}>Product Analytics Comparison</StyledTitle>
                <Row gutter={16} wrap>
                    {productColumns.map((column, index) => (
                        <Col key={index} span={8}>
                            <StyledCard size="small" bordered={true}>
                                <Text strong>{index === 0 ? "Your Product" : `Competitor Product ${index}`}</Text>
                                <Select
                                    placeholder="Select a product"
                                    style={{ width: "100%", marginTop: "10px" }}
                                    onChange={(value) => handleProductChange(value, index)}
                                    value={selectedProducts[index]}
                                    size="small"
                                >
                                    {index === 0
                                        ? ownProductData.map((product) => (
                                              <Option key={product?.productName} value={product?.productName}>
                                                  {product?.productName}
                                              </Option>
                                          ))
                                        : productData.map((product) => (
                                              <Option
                                                  key={product?.productName}
                                                  value={product?.productName}
                                                  disabled={selectedValues.includes(product?.productName)}
                                              >
                                                  {product?.productName}
                                              </Option>
                                          ))}
                                </Select>
                                {productColumns.length > 1 && (
                                    <Button
                                        type="link"
                                        danger
                                        icon={<CloseSquareOutlined />}
                                        onClick={() => removeProductColumn(index)}
                                        size="small"
                                        style={{ marginTop: "10px" }}
                                    />
                                )}
                            </StyledCard>
                        </Col>
                    ))}
                    {productColumns.length < 3 && (
                        <Col span={8}>
                            <StyledAddProductColumn onClick={addProductColumn}>
                                <PlusOutlined style={{ fontSize: "20px", color: "#999" }} />
                            </StyledAddProductColumn>
                        </Col>
                    )}
                </Row>

                <StyledButtonWrapper>
                    <Button
                        type="primary"
                        onClick={handleAnalyzeClick}
                        icon={<FileSearchOutlined />}
                        size="middle"
                        style={{ backgroundColor: "#4F46E5", borderColor: "#4F46E5", borderRadius: "8px" }}
                    >
                        Analyse
                    </Button>
                </StyledButtonWrapper>
            </StyledPageWrapper>

            {/* Analysis Table */}
            {showAnalysisTable && (
                <StyledAnalysisTable>
                    {aspects.map((aspect, aspectIndex) => (
                        <div key={aspect} style={{ marginBottom: "25px" }}>
                            <StyledTableTitle level={5}>{aspect}</StyledTableTitle>
                            <Table
                                size="small"
                                bordered
                                dataSource={[{ key: aspectIndex }]}
                                pagination={false}
                                columns={[
                                    ...productColumns.map((_, columnIndex) => ({
                                        title: selectedProducts[columnIndex],
                                        dataIndex: `product-${columnIndex}`,
                                        render: () => {
                                            const product =
                                                columnIndex === 0
                                                    ? ownProductData[0]
                                                    : productData.find(
                                                          (product) =>
                                                              product.productName ===
                                                              selectedProducts[columnIndex]
                                                      );

                                            return (
                                                <p style={{ maxWidth: 200 }}>
                                                    {product ? product[aspectMapping[aspect]] : "N/A"}
                                                </p>
                                            );
                                        },
                                    })),
                                ]}
                            />
                            <StyledInsightSpace>
                                <AIIcon style={{ margin: "5px" }} />
                                <Text style={{ color: "white" }}>{AISummary[aspectIndex]}</Text>
                            </StyledInsightSpace>
                            <Divider />
                        </div>
                    ))}
                </StyledAnalysisTable>
            )}
        </>
    );
};

// Styled Components
const StyledPageWrapper = styled.div`
    padding: 25px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    max-width: 1200px;
    margin: 20px auto;
`;

const StyledTitle = styled(Title)`
    text-align: center;
    color: #B100B1;
    margin-bottom: 25px;
`;

const StyledCard = styled(Card)`
    border-radius: 10px;
    background-color: #fafafa;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const StyledAddProductColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    border: 1px dashed #ccc;
    border-radius: 10px;
    cursor: pointer;
    background-color: #fafafa;

    &:hover {
        background-color: #f0f0f0;
        border-color: #999;
    }
`;

const StyledButtonWrapper = styled.div`
    text-align: left;
    margin-top: 30px;
    margin-left: 15px;
`;

const StyledAnalysisTable = styled.div`
    margin-top: 30px;
    padding: 20px;
    max-width: 1200px;
    margin: auto;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const StyledTableTitle = styled(Title)`
    text-align: center;
    color: #B100B1;
`;

const StyledInsightSpace = styled(Space)`
    padding: 10px;
    background: linear-gradient(90deg, #4F46E5, rgba(79, 70, 229, 0.8));
    border-radius: 10px;
    align-items: center;
    margin-top: 10px;
`;

export default AnalyticsPage;
