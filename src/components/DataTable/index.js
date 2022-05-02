import { Result, Table, Typography } from "antd";

const { Text } = Typography;

const CONFIGS = {
    scroll: { x: 200 },
    pagination: {
        showSizeChanger: true,
        defaultPageSize: 10,
        pageSizeOptions: ['5', '10', '15', '20', '25']
    },
};

const DataTable = ({ data, error, isLoading, columns, uniqueRowKey }) => {
    if (error) {
        return (
            <Result
                status='warning'
                title='There are some problems with fetching employee list.'
                extra={<Text type='secondary'>{error}</Text>}
            />
        )
    }

    return (
        <Table
            {...CONFIGS}
            loading={isLoading}
            dataSource={data}
            rowKey={record => record[uniqueRowKey]}
            columns={columns}
        />
    )
}

export default DataTable;