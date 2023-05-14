import { useState } from "react";
import { Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";

const Basic1 = () => {
	const [loading, setLoading] = useState(false);
	const onButtonClick = () => {
		console.log("button clicked");
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	return (
		<div>
			<Button type="ghost">Button1</Button>
			<Button
				loading={loading}
				onClick={onButtonClick}
				icon={<LoginOutlined />}
				type="primary"
				danger
				block>
				Button2
			</Button>

			<Input.Search
				placeholder="password"
				maxLength={10}
				type="password"
				prefix={<UserOutlined />}
				allowClear></Input.Search>
		</div>
	);
};

export default Basic1;
