"use client";

import React, { useState } from "react";
import { Bar, BarChart, CartesianGrid, YAxis, Tooltip, XAxis } from "recharts";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { Flex, Space } from "antd";

const chartDataSets = [
    {
        competitor: "MindfulMe",
        data: [
            {
                keyword: "Mental Health Awareness",
                MindSync: 1200,
                Competitor: 800,
            },
            { keyword: "Wellbeing Practices", MindSync: 950, Competitor: 650 },
            {
                keyword: "Stimulation Devices",
                MindSync: 1300,
                Competitor: 1100,
            },
            {
                keyword: "Brainwave Technology",
                MindSync: 1600,
                Competitor: 900,
            },
            {
                keyword: "Cognitive Enhancement",
                MindSync: 1100,
                Competitor: 750,
            },
            {
                keyword: "Mindfulness Training",
                MindSync: 1000,
                Competitor: 700,
            },
        ],
    },
    {
        competitor: "MasterMind",
        data: [
            {
                keyword: "Mental Health Awareness",
                MindSync: 1400,
                Competitor: 900,
            },
            { keyword: "Wellbeing Practices", MindSync: 1100, Competitor: 800 },
            {
                keyword: "Stimulation Devices",
                MindSync: 1500,
                Competitor: 1200,
            },
            {
                keyword: "Brainwave Technology",
                MindSync: 1700,
                Competitor: 950,
            },
            {
                keyword: "Cognitive Enhancement",
                MindSync: 1300,
                Competitor: 850,
            },
            {
                keyword: "Mindfulness Training",
                MindSync: 1150,
                Competitor: 750,
            },
        ],
    },
    // Add more competitors here
];

// Color configuration for different competitors
const competitorColors = [
    { MindSync: "#2563eb", Competitor: "#60a5fa" }, // Competitor A colors
    { MindSync: "#ff5722", Competitor: "#ffc107" }, // Competitor B colors
    // Add more color configurations for additional competitors
];



export function DashboardBarChart() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentSet = chartDataSets[currentIndex];
    const colors = competitorColors[currentIndex];
    const chartConfig = {
        MindSync: {
            label: "MindSync",
            color: "#2563eb",
        },
        Competitor: {
            label: currentSet.competitor,
            color: "#60a5fa",
        },
    };
    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev > 0 ? prev - 1 : chartDataSets.length - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev < chartDataSets.length - 1 ? prev + 1 : 0
        );
    };

    return (
        <ChartContainer config={chartConfig} className="min-h-[350px] w-full">
            <Flex vertical={false} style={{justifyContent: "space-between"}}>
                <h2 style={{ fontSize: "16px", fontWeight: "normal" }}>
                    SEO Analysis
                </h2>
                <h3 style={{ fontSize: "16px", fontWeight: "normal" }}>
                    Comparing with: {currentSet.competitor}
                </h3>
            </Flex>

            <BarChart
                accessibilityLayer
                width={800}
                style={{ margin: "0 auto", padding: "20px 0 " }}
                data={currentSet.data}
                layout="vertical" // Set to horizontal layout
            >
                <CartesianGrid vertical={false} />
                <YAxis
                    dataKey="keyword"
                    type="category"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                />
                <XAxis
                    type="number"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar
                    dataKey="MindSync"
                    fill={colors.MindSync}
                    radius={4}
                    label={{ position: "insideLeft", fill: "#fff" }} // Display MindSync label inside the bar
                />
                <Bar
                    dataKey="Competitor"
                    fill={colors.Competitor}
                    radius={4}
                    label={{ position: "insideLeft", fill: "#fff" }} // Display Competitor label inside the bar
                />
            </BarChart>

            {/* Pagination Buttons */}
            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <button onClick={handlePrev} disabled={currentIndex === 0}>
                    Previous
                </button>
                <span style={{ margin: "0 10px" }}>
                    {currentIndex + 1} / {chartDataSets.length}
                </span>
                <button
                    onClick={handleNext}
                    disabled={currentIndex === chartDataSets.length - 1}
                >
                    Next
                </button>
            </div>
        </ChartContainer>
    );
}
