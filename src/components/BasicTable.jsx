import { Table } from "antd";

const BasicTable = () => {
	const data = [
		{
			name: "Name 1",
			age: 10,
			address: "address 1",
			key: 1,
		},
		{
			name: "Name 2",
			age: 20,
			address: "address 2",
			key: 2,
		},
		{
			name: "Name 3",
			age: 30,
			address: "address 3",
			key: 3,
		},
		{
			name: "Name 4",
			age: 40,
			address: "address 4",
			key: 4,
		},
	];

	const column = [
		{
			title: "Name",
			dataIndex: "name",
			key: "key",
			render: (name) => {
				return <a>{name}</a>;
			},
		},
		{
			title: "Age",
			dataIndex: "age",
			key: "key",
			sorter: (a, b) => a.age - b.age,
		},
		{
			title: "Address",
			dataIndex: "address",
			key: "key",
		},
		{
			title: "Graduated?",
			key: "key",
			render: (payload) => {
				return <p>{payload.age > 20 ? "True" : "False"}</p>;
			},
		},
	];
	return (
		<div>
			<Table dataSource={data} columns={column}></Table>
		</div>
	);
};

export default BasicTable;
