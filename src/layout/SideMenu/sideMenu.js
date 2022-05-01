import {Menu} from "antd";
import {UserOutlined} from "@ant-design/icons";

const SideMenu = () => {
    return (
        <Menu
            mode='inline'
            defaultSelectedKeys={["employee-list"]}
            items={[
                {
                    key: 'employee-list',
                    icon: <UserOutlined/>,
                    label: 'Employee List',
                },
                {
                    key: '2',
                    icon: <UserOutlined/>,
                    label: 'Function 2',
                },
                {
                    key: '3',
                    icon: <UserOutlined/>,
                    label: 'Function 3',
                },
            ]}
        />
    )
}

export default SideMenu;