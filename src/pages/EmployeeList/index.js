import { Card, Space, Typography } from "antd";
import styles from './EmployeeList.module.css';
import { MenuOutlined } from "@ant-design/icons";

const { Text } = Typography;

const EmployeeList = ({ toggleDrawer }) => {
    return (
        <Card
            title={
                <Space size='large'>
                    {toggleDrawer && <MenuOutlined onClick={toggleDrawer} />}
                    <Text>Employees</Text>
                </Space>
            }
            className={styles.container}
        >

        </Card>
    )
}

export default EmployeeList;