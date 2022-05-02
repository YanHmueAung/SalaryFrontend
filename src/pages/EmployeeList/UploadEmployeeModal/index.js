import { message, Modal } from "antd";
import { EMPLOYEES } from "../../../constants/endpoints";
import FileUpload from "../../../components/FileUpload";

const UploadEmployeeModal = ({ visible, setVisible, setRefresh }) => {
    const hideModal = () => {
        setVisible(false);
    }
    const onUploadSuccess = () => {
        message.success('Uploaded!');
        setRefresh(prevState => prevState + 1);
    }

    const onUploadFailed = () => {
        message.error('Rejected: one or more of the rows fails validation!');
    }
    return (
        <Modal
            visible={visible}
            title='Upload employees'
            footer={null}
            onCancel={hideModal}
        >
            <FileUpload
                uploadUrl={`${EMPLOYEES}/upload`}
                multiple={false}
                accept='text/csv'
                onSuccess={onUploadSuccess}
                onFailed={onUploadFailed}
            />
        </Modal>
    )
}

export default UploadEmployeeModal;