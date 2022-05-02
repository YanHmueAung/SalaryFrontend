import { useState } from "react";
import { message, Space, Typography, Upload } from "antd";
import { LoadingOutlined, UploadOutlined } from "@ant-design/icons";
import styles from './FileUpload.module.css';
import postData from "../../utils/postData";

const { Text } = Typography;

const beforeUpload = (file) => {
    const isCSV = file.type === 'text/csv';
    if (!isCSV) {
        message.error('You can only upload TEXT/CSV file!');
    }

    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('File size must smaller than 2MB!');
    }

    return isLt2M && isCSV;
}

const FileUpload = ({ uploadUrl, multiple, accept, onSuccess, onFailed }) => {
    const [isUploading, setIsUploading] = useState(false);

    const customRequest = async (options) => {
        const file = options.file;

        const form = new FormData();
        form.append('file', file);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };

        await postData(config, uploadUrl, form, setIsUploading, onSuccess, onFailed);
    }

    return (
        <Upload
            multiple={multiple}
            accept={accept}
            customRequest={customRequest}
            beforeUpload={beforeUpload}
            listType="picture-card"
            disabled={isUploading}
            className={styles.upload}
            showUploadList={false}
        >
            <Space direction='vertical'>
                {isUploading ? <LoadingOutlined /> : <UploadOutlined />}
                <Text type='secondary'>.csv only</Text>
            </Space>
        </Upload>
    )
}

export default FileUpload;