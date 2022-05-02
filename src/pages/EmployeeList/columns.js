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
        render: (text) => 'S$' + text
    },
]

export default columns;