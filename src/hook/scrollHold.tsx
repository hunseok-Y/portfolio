import { useEffect } from "react";

export default function ScrollHold(state: boolean) {
	const preventScroll = () => {
		const currentScrollY = window.scrollY;
		document.body.style.position = "fixed";
		document.body.style.width = "100%";
		document.body.style.top = `-${currentScrollY}px`;
		return currentScrollY;
	};

	const allowScroll = (prevScrollY: number) => {
		document.body.style.position = "";
		document.body.style.width = "";
		document.body.style.top = "";
		window.scrollTo(0, prevScrollY);
	};

	useEffect(() => {
		if (state) {
			const prevScrollY = preventScroll();
			return () => {
				allowScroll(prevScrollY);
			};
		}
	}, [state]);
}
