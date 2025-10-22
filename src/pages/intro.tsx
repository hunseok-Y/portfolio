import { useEffect, useState } from "react";
import Title from "../components/title";
import { useLocation } from "react-router-dom";

export default function Intro() {
	const [isRendered, setIsRendered] = useState(false);
	const location = useLocation().pathname;
	const [title, setTitle] = useState("");

	useEffect(() => {
		setIsRendered(true);
		if (location == "/") {
			setTitle("HOON SEOK <br>PORTFOLIO");
		} else {
			const copy = location.slice(1).toUpperCase();
			setTitle(copy);
		}
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<>
			<div className="h-[100dvh] py-[120px] flex-[1_1_100%]">
				<div className="flex flex-col h-full">
					<h2 className={`${isRendered ? "rendered" : ""} underline-text`}>Front-end Developer</h2>
					<Title title={title} />
				</div>
			</div>
		</>
	);
}
