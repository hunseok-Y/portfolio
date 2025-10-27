import { Outlet } from "react-router-dom";
import Tab from "../components/tab";

export default function Content() {
	return (
		<div className="py-[120px]">
			<div className="flex relative gap-x-[40px] relative">
				<Tab />
				<Outlet />
			</div>
		</div>
	);
}
