import { Outlet } from "react-router-dom";
import Tab from "../components/tab";

export default function Content() {
	return (
		<div className="md:py-[120px] py-[60px]">
			<div className="block lg:flex gap-x-[40px] lg:flex-row flex-col">
				<Tab />
				<Outlet />
			</div>
		</div>
	);
}
