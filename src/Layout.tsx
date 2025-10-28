import Intro from "./pages/intro";
import Content from "./pages/content";

export default function Layout() {
	return (
		<div className="bg-[#1b1b1e]">
			<div className="lg:max-w-[1140px] max-w-auto lg:px-0 lg:mx-auto m-0 px-[20px] lg:px-[40px]">
				<Intro />
				<Content />
			</div>
		</div>
	);
}
