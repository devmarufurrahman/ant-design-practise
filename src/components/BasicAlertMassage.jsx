import { Form, Input, Button, message, Alert } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { useState } from "react";

const BasicAlertMassage = () => {
	const [loading, setLoading] = useState(false);
	const [showAlert, setShowAlert] = useState(false);

	const loadClick = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	const onFinish = (e) => {
		console.log(e);
		setTimeout(() => {
			setShowAlert(true);
		}, 2000);
	};

	return (
		<div>
			{showAlert && (
				<Alert
					type="error"
					message="Error"
					description="There was an error in login"
					closable
				/>
			)}
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
						type="primary"
						danger
						block
						onClick={loadClick}
						icon={<LoginOutlined />}>
						Log In
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default BasicAlertMassage;
