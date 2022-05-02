import { Modal } from "antd";

const UploadEmployeeModal = ({ visible, setVisible }) => {
    const hideModal = () => {
        setVisible(false);
    }

    return (
        <Modal
            visible={visible}
            title='Upload employees'
            footer={null}
            onCancel={hideModal}
        >
            test
        </Modal>
    )
}

export default UploadEmployeeModal;