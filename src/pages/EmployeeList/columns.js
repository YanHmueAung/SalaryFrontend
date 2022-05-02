import isBetween from "../../utils/isBetween";
import { Button, InputNumber, Space } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import styles from './EmployeeList.module.css';

const columns = [
    {
        title: "Id",
        dataIndex: "id",
        key: "id",
        width: 100,
        sorter: (a, b) => a.id.localeCompare(b.id)
    },
    {
        title: "Name",
        dataIndex: "fullName",
        key: "fullName",
        width: 100,
        sorter: (a, b) => a.fullName.localeCompare(b.fullName)
    },
    {
        title: "Login",
        dataIndex: "username",
        key: "username",
        width: 100,
        sorter: (a, b) => a.username.localeCompare(b.username)
    },
    {
        title: "Salary",
        dataIndex: "salary",
        key: "salary",
        width: 100,
        sorter: (a, b) => parseInt(a.salary) - parseInt(b.salary),
        render: (text) => 'S$' + text,
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <Space direction='vertical' className={styles.filterDropDown}>
                <Space direction='vertical'>
                    <InputNumber
                        placeholder='Minimum salary'
                        className={styles.filterSalaryInput}
                        step="0.01"
                        min={1}
                        value={selectedKeys[0] ? selectedKeys[0][0] : undefined}
                        onChange={value => {
                            const end = selectedKeys[0] ? selectedKeys[0][1] : undefined
                            setSelectedKeys([[value, end]])
                        }}
                    />
                    <InputNumber
                        placeholder='Maximum salary'
                        className={styles.filterSalaryInput}
                        step="0.01"
                        min={1}
                        value={selectedKeys[0] ? selectedKeys[0][1] : undefined}
                        onChange={value => {
                            const start = selectedKeys[0] ? selectedKeys[0][0] : undefined
                            setSelectedKeys([[start, value]]);
                        }}
                    />
                </Space>
                <Space>
                    <Button
                        type="primary"
                        onClick={() => confirm()}
                        icon={<FilterOutlined />}
                        className={styles.filterSalaryButton}
                    >
                        Filter
                    </Button>
                    <Button
                        onClick={() => clearFilters()}
                        className={styles.filterSalaryButton}
                    >
                        Reset
                    </Button>
                </Space>
            </Space>
        ),
        onFilter: (value, record) => {
            return isBetween(record.salary, value[0], value[1])
        }
    },
]

export default columns;