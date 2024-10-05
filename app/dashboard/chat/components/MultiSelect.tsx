import React, { useState } from "react";
import { Flex, Select, Tag } from "antd";

const MultipleSelectComponent: React.FC = () => {
    // Define the available options
    const options = [
        { label: "Option 1", value: "option1", color: "red" },
        { label: "Option 2", value: "option2", color: "green" },
        { label: "Option 3", value: "option3", color: "blue" },
        { label: "Option 4", value: "option4", color: "orange" },
    ];

    // State to track selected items
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    // Handle changes in the dropdown
    const handleSelectChange = (selectedValues: string[]) => {
        setSelectedItems(selectedValues);
    };

    // Function to get color based on the item selected
    const findColor = (item: string) => {
        const option = options.find((opt) => opt.value === item);
        return option ? option.color : undefined;
    };

    return (
        <Flex vertical={true} gap={5} style={{}}>
            <h3>Multi-select Dropdown</h3>

            {/* Multi-select dropdown */}
            <Select
                mode="multiple"
                placeholder="Select Plugins"
                value={selectedItems}
                onChange={handleSelectChange}
                style={{ width: "100%" }}
                options={options}
                maxTagCount={0} // Hides selected items from being displayed as tags in the dropdown
                dropdownRender={(menu) => <div>{menu}</div>}
            />

            {/* Selected items box */}
            <div style={{ marginTop: "10px" }}>
                <h4>Selected Items:</h4>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "50px",
                        border: "1px solid #d9d9d9",
                        padding: "8px",
                        borderRadius: "4px",
                        maxWidth: "100%",
                    }}
                >
                    {/* Show selected items */}
                    {selectedItems.length > 0 ? (
                        selectedItems.map((item) => (
                            <Tag
                                key={item}
                                color={findColor(item)} // Assigns the corresponding color
                                style={{
                                    marginBottom: "8px",
                                    maxWidth: "100%",
                                }}
                            >
                                {options.find((opt) => opt.value === item)
                                    ?.label || item}
                            </Tag>
                        ))
                    ) : (
                        <span style={{ color: "#d9d9d9" }}>
                            No items selected
                        </span>
                    )}
                </div>
            </div>
        </Flex>
    );
};

export default MultipleSelectComponent;
