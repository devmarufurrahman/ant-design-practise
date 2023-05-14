import { Form, Input, Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { useState } from "react";

const BasicFrom = () => {
	const [loading, setLoading] = useState(false);

	const loadClick = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	const onFinish = (e) => {
		console.log(e);
	};
	return (
		<>
			<Form onFinish={onFinish}>
				<Form.Item label="User Name" name="username">
					<Input placeholder="User name" required></Input>
				</Form.Item>
				<Form.Item label="Password" name="password">
					<Input.Password placeholder="Password" required></Input.Password>
				</Form.Item>
				<Form.Item>
					<Button
						loading={loading}
						htmlType="submit"
						danger
						block
						onClick={loadClick}
						icon={<LoginOutlined />}>
						Log In
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default BasicFrom;
