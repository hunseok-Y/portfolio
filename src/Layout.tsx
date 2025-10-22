import Intro from "./pages/intro";
import Content from "./pages/content";

export default function Layout() {
	return (
		<div className="bg-[#1b1b1e]">
			<div className="md:max-w-[1140px] md:mx-auto">
				<Intro />
				<Content />
			</div>
		</div>
	);
}
