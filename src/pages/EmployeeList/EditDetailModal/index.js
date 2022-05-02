import { Button, Form, Input, InputNumber, message, Modal } from "antd";
import { useState } from "react";
import { SaveOutlined } from "@ant-design/icons";
import styles from './EditDetailModal.module.css';
import putData from "../../../utils/putData";
import { EMPLOYEES } from "../../../constants/endpoints";

const EditDetailModal = ({ visible, setVisible, form, refreshTheList }) => {
    const [isEditing, setIsEditing] = useState(false);

    const hideModal = () => {
        refreshTheList();
        setVisible(false);
    }

    const handleEdit = async () => {
        const formValues = form.getFieldsValue();
        const payload = {
            name: formValues.name,
            login: formValues.login,
            salary: formValues.salary
        }
        const onSuccess = () => message.success('Saved!');
        const onFailed = () => message.error('Login username already exists!');
        await putData(EMPLOYEES + `/${form.getFieldsValue()._id}`, payload, setIsEditing, onSuccess, onFailed);
    }

    return (
        <Modal
            visible={visible}
            title='Edit employee details'
            onOk={handleEdit}
            confirmLoading={isEditing}
            onCancel={hideModal}
            footer={[
                <Button
                    onClick={hideModal}
                >
                    Close
                </Button>,
                <Button
                    type="primary"
                    icon={<SaveOutlined />}
                    loading={isEditing}
                    onClick={handleEdit}
                >
                    Save
                </Button>
            ]}
        >
            <Form layout='vertical' form={form}>
                <Form.Item
                    name='_id'
                    label='Id'
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    name='name'
                    label='Name'
                >
                    <Input placeholder='name' />
                </Form.Item>
                <Form.Item
                    name='login'
                    label='Login'
                >
                    <Input placeholder='login' />
                </Form.Item>
                <Form.Item
                    name='salary'
                    label='Salary'
                >
                    <InputNumber
                        prefix="S$"
                        min={1}
                        placeholder='salary'
                        className={styles.fullWith}
                    />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default EditDetailModal;