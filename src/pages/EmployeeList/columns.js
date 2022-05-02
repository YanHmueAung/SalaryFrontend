const columns = [
    {
        title: "Id",
        dataIndex: "id",
        key: "id",
        width: 100,
    },
    {
        title: "Name",
        dataIndex: "fullName",
        key: "fullName",
        width: 100,
    },
    {
        title: "Login",
        dataIndex: "username",
        key: "username",
        width: 100,
    },
    {
        title: "Salary",
        dataIndex: "salary",
        key: "salary",
        width: 100,
        render: (text) => 'S$' + text
    },
]

export default columns;