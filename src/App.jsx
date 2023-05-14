import "antd/dist/reset.css";
import "./App.css";

import Basic1 from "./components/Basic1";
import BasicSelect from "./components/BasicSelect";
import BasicFrom from "./components/BasicFrom";
import BasicTable from "./components/BasicTable";
import BasicAlertMassage from "./components/BasicAlertMassage";

function App() {
	return (
		<>
			<Basic1 />
			<BasicSelect />
			<br />
			<br />
			<BasicFrom />

			<br />
			<br />
			<br />

			<BasicTable />
			<br />
			<br />
			<br />
			<br />
			<br />
			<BasicAlertMassage />
		</>
	);
}

export default App;
