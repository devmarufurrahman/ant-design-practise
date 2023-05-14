import { Select } from "antd";

const BasicSelect = () => {
	const fruits = ["Banana", "Mango", "Orange", "Cherry"];
	return (
		<div>
			<p>Which are your favourite fruit?</p>
			<Select
				mode="multiple"
				maxTagCount={2}
				allowClear
				placeholder="Select fruit"
				style={{ width: "50%" }}>
				{fruits.map((fruit, index) => {
					return <Select.Option key={index} value={fruit}></Select.Option>;
				})}
			</Select>
		</div>
	);
};

export default BasicSelect;
