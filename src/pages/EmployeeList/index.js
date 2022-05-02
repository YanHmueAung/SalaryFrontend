import { Card, Space, Typography } from "antd";
import styles from './EmployeeList.module.css';
import { MenuOutlined } from "@ant-design/icons";
import DataTable from "../../components/DataTable";
import columns from "./columns";
import { EMPLOYEES } from "../../constants/endpoints";
import useFetchData from "../../utils/useFetchData";


const { Text } = Typography;

const EmployeeList = ({ toggleDrawer }) => {
    const { data, error, isLoading } = useFetchData(EMPLOYEES);
    return (
        <Card
            title={
                <Space size='large'>
                    {toggleDrawer && <MenuOutlined onClick={toggleDrawer} />}
                    <Text strong>Employees</Text>
                </Space>
            }
            className={styles.container}
        >
            <DataTable
                data={data}
                error={error}
                isLoading={isLoading}
                columns={columns}
                uniqueRowKey='id'
            />
        </Card>
    )
}

export default EmployeeList;