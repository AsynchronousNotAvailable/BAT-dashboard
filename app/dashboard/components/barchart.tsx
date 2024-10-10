"use client";

import React, { useState } from "react";
import { Bar, BarChart, CartesianGrid, YAxis, Tooltip, XAxis, Legend } from "recharts";
import { ChartContainer, ChartConfig } from "@/components/ui/chart";
import { Flex, Button } from "antd";

type CompetitorKey = "MindSync" | "Competitor";

const chartDataSets = [
    {
        competitor: "MindfulMe",
        data: [
            { keyword: "Mental Health Awareness", MindSync: 1200, Competitor: 800 },
            { keyword: "Wellbeing Practices", MindSync: 950, Competitor: 650 },
            { keyword: "Stimulation Devices", MindSync: 1300, Competitor: 1100 },
            { keyword: "Brainwave Technology", MindSync: 1600, Competitor: 900 },
            { keyword: "Cognitive Enhancement", MindSync: 1100, Competitor: 750 },
            { keyword: "Mindfulness Training", MindSync: 1000, Competitor: 700 },
        ],
    },
    {
        competitor: "MasterMind",
        data: [
            { keyword: "Mental Health Awareness", MindSync: 1400, Competitor: 900 },
            { keyword: "Wellbeing Practices", MindSync: 1100, Competitor: 800 },
            { keyword: "Stimulation Devices", MindSync: 1500, Competitor: 1200 },
            { keyword: "Brainwave Technology", MindSync: 1700, Competitor: 950 },
            { keyword: "Cognitive Enhancement", MindSync: 1300, Competitor: 850 },
            { keyword: "Mindfulness Training", MindSync: 1150, Competitor: 750 },
        ],
    },
];

const competitorColors = [
    { MindSync: "#2563eb", Competitor: "#60a5fa" },
    { MindSync: "#ff5722", Competitor: "#ffc107" },
];

export function DashboardBarChart() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedCompetitors, setSelectedCompetitors] = useState<Record<CompetitorKey, boolean>>({
        MindSync: true,
        Competitor: true,
    });

    const currentSet = chartDataSets[currentIndex];
    const colors = competitorColors[currentIndex];

    const chartConfig: ChartConfig = {
        MindSync: {
            label: "MindSync",
            color: colors.MindSync,
        },
        Competitor: {
            label: currentSet.competitor,
            color: colors.Competitor,
        },
    };

    const toggleCompetitor = (key: CompetitorKey) => {
        setSelectedCompetitors((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : chartDataSets.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < chartDataSets.length - 1 ? prev + 1 : 0));
    };

    return (
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full" style={{ padding: "10px", maxWidth: "700px", margin: "0 auto" }}>
            <Flex vertical={false} style={{ justifyContent: "space-between", alignItems: "center" }}>
                <h2 style={{ fontSize: "14px", fontWeight: "normal", marginBottom: 0 }}>SEO Analysis</h2>
                <h3 style={{ fontSize: "14px", fontWeight: "normal", marginBottom: 0 }}>
                    Comparing with: {currentSet.competitor}
                </h3>
            </Flex>

            <BarChart
                width={500}
                height={300}
                data={currentSet.data}
                layout="vertical"
                style={{ margin: "20px auto", padding: "0 10px" }}
                barGap={4}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis
                    dataKey="keyword"
                    type="category"
                    tickLine={false}
                    tickMargin={5}
                    axisLine={false}
                    style={{ fontSize: "12px" }}
                />
                <XAxis type="number" tickLine={false} tickMargin={5} axisLine={false} style={{ fontSize: "12px" }} />
                <Tooltip
                    content={({ payload }) => {
                        if (payload && payload.length > 0) {
                            return (
                                <div
                                    style={{
                                        backgroundColor: "#ffffff",
                                        border: "1px solid #ccc",
                                        padding: "5px",
                                        borderRadius: "5px",
                                        fontSize: "12px",
                                    }}
                                >
                                    {payload.map((entry, index) => {
                                        const color = entry.dataKey === "MindSync" ? colors.MindSync : colors.Competitor;
                                        return (
                                            <div key={`item-${index}`}>
                                                <span style={{ color }}>{entry.name}:</span> {entry.value}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        }
                        return null;
                    }}
                />
                <Legend
                    align="right"
                    verticalAlign="top"
                    wrapperStyle={{ paddingBottom: "10px" }}
                    onClick={(e) => toggleCompetitor(e.dataKey as CompetitorKey)}
                />
                {selectedCompetitors.MindSync && (
                    <Bar
                        dataKey="MindSync"
                        fill={colors.MindSync}
                        radius={[4, 4, 0, 0]}
                        label={{ position: "insideLeft", fill: "#fff", fontSize: "10px" }}
                    />
                )}
                {selectedCompetitors.Competitor && (
                    <Bar
                        dataKey="Competitor"
                        fill={colors.Competitor}
                        radius={[4, 4, 0, 0]}
                        label={{ position: "insideLeft", fill: "#fff", fontSize: "10px" }}
                    />
                )}
            </BarChart>

            {/* Pagination and Competitor Toggle Buttons */}
            <div style={{ marginTop: "10px", textAlign: "center" }}>
                <Button
                    type="default"
                    size="small"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    style={{ marginRight: "5px" }}
                >
                    Previous
                </Button>
                <span style={{ fontSize: "12px" }}>{currentIndex + 1} / {chartDataSets.length}</span>
                <Button
                    type="default"
                    size="small"
                    onClick={handleNext}
                    disabled={currentIndex === chartDataSets.length - 1}
                    style={{ marginLeft: "5px" }}
                >
                    Next
                </Button>
            </div>
        </ChartContainer>
    );
}
