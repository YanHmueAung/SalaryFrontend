import { Avatar, Drawer, Layout, Space, Typography } from "antd";
import { useState } from "react";
import SideMenu from "./SideMenu";
import styles from "./TheLayout.module.css";
import { AntDesignOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import EmployeeList from "../pages/EmployeeList";

const { Sider } = Layout;
const { Text } = Typography;

const TheLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [drawerVisible, setDrawerVisible] = useState(false);

    const toggleDrawer = () => setDrawerVisible(!drawerVisible);

    return (
        <>
            <Drawer
                placement='left'
                visible={drawerVisible}
                onClose={toggleDrawer}
            >
                <SideMenu />
            </Drawer>

            <Layout className={styles.theLayout}>
                <Sider
                    theme='light'
                    trigger={null}
                    collapsible
                    collapsed={isCollapsed}
                    breakpoint='md'
                    collapsedWidth='0'
                    onCollapse={(isCollapsed) => {
                        setIsCollapsed(isCollapsed);
                        setDrawerVisible(false);
                    }}
                    className={styles.sider}
                >
                    <div className={styles.user}>
                        <Space align='center' direction='vertical'>
                            <Avatar
                                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                                icon={<AntDesignOutlined />}
                                alt='user avatar'
                            />
                            <Text>Username</Text>
                        </Space>
                    </div>
                    <SideMenu />
                </Sider>

                <Layout style={{ marginLeft: isCollapsed ? 0 : 200 }}>
                    <Content className={styles.content}>
                        <EmployeeList toggleDrawer={isCollapsed && toggleDrawer} />
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default TheLayout;