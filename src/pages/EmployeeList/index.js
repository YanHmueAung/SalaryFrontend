import { Button, Card, Form, message, Popconfirm, Space, Typography } from "antd";
import styles from './EmployeeList.module.css';
import { DeleteOutlined, EditOutlined, MenuOutlined, UploadOutlined } from "@ant-design/icons"; import DataTable from "../../components/DataTable";
import columns from "./tableColumns";
import { EMPLOYEES } from "../../constants/endpoints";
import useFetchData from "../../utils/useFetchData";
import deleteData from "../../utils/deleteData";
import { useState } from "react";
import tableColumns from "./tableColumns";
import EditDetailModal from "./EditDetailModal";
import UploadEmployeeModal from "./UploadEmployeeModal";

const { Text } = Typography;

const EmployeeList = ({ toggleDrawer }) => {
    const [refresh, setRefresh] = useState(1);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [uploadModalVisible, setUploadModalVisible] = useState(false);
    const [editForm] = Form.useForm();

    const { data, error, isLoading } = useFetchData(EMPLOYEES, refresh);

    const refreshTheList = () => {
        setRefresh(prevState => prevState + 1);
    }

    const columns = [
        ...tableColumns,
        {
            title: 'Actions',
            key: 'actions',
            width: 80,
            fixed: 'right',
            render: (record) => (
                <Space>
                    <Button
                        size='small'
                        icon={<EditOutlined />}
                        onClick={() => {
                            const prev = {
                                id: record.id,
                                login: record.login,
                                name: record.name,
                                salary: record.salary
                            };
                            editForm.setFieldsValue(prev);
                            setEditModalVisible(true);
                        }}
                    />
                    <Popconfirm
                        title='Are you sure to delete this employee?'
                        onConfirm={async () => {
                            const onSuccess = () => {
                                message.success('Successfully deleted!');
                                refreshTheList();
                            }
                            const onFailed = () => {
                                message.error('Error occurred while trying to deleted!')
                            }
                            await deleteData(EMPLOYEES + `/${record._id}`, setIsDeleting, onSuccess, onFailed)
                        }}
                        okText='Yes'
                        cancelText='No'
                    >
                        <Button
                            danger
                            size='small'
                            icon={<DeleteOutlined />}
                        />
                    </Popconfirm>
                </Space>
            ),
        }
    ];
    return (
        <Card
            title={
                <Space size='large'>
                    {toggleDrawer && <MenuOutlined onClick={toggleDrawer} />}
                    <Text strong>Employees</Text>
                </Space>
            }
            extra={
                <Button
                    icon={<UploadOutlined />}
                    onClick={() => setUploadModalVisible(true)}
                >
                    Upload employees
                </Button>
            }
            className={styles.container}
        >
            <DataTable
                data={data}
                error={error}
                isLoading={isLoading || isDeleting}
                columns={columns}
                uniqueRowKey='id'
            />
            <EditDetailModal
                visible={editModalVisible}
                setVisible={setEditModalVisible}
                form={editForm}
                refreshTheList={refreshTheList}
            />
            <UploadEmployeeModal
                visible={uploadModalVisible}
                setVisible={setUploadModalVisible}
            />
        </Card>
    )
}

export default EmployeeList;