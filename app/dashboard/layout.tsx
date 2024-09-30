"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Layout, Menu, theme } from "antd";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    HomeOutlined,
    MessageOutlined,
    OrderedListOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem("Logo", "/dashboard", <HomeOutlined />),
    getItem("Home", "/dashboard", <HomeOutlined />),
    getItem("Analytics", "/dashboard/analytics", <PieChartOutlined />),
    getItem("Leaderboard", "/dashboard/leaderboard", <OrderedListOutlined />),
    getItem("Chat", "/dashboard/chat", <MessageOutlined />),
    getItem("Profile", "/dashboard/profile", <UserOutlined />),
];

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [collapsed, setCollapsed] = useState(true);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const pathname = usePathname(); // Get the current route
    const router = useRouter(); // For navigating between routes

    // Find the active menu item based on the current route
    const defaultSelectedKey =
        items.find((item) => item?.key === pathname)?.key || "1";

    // Handle menu click to navigate
    const handleMenuClick = (e: { key: string }) => {
        router.push(e.key);
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                theme="light"
                style={{borderRight: "1px solid #f0f0f0"}}
            >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="light"
                    defaultSelectedKeys={[defaultSelectedKey.toString()]}
                    selectedKeys={[pathname]} // Set the selected key dynamically
                    mode="inline"
                    style={{ borderRight: 0 }}
                    items={items}
                    onClick={handleMenuClick} // Handle navigation
                />
            </Sider>

            <Content style={{ background: colorBgContainer }}>
                {children}
            </Content>
            {/* <Footer style={{ textAlign: "center" }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer> */}
        </Layout>
    );
};

export default DashboardLayout;
