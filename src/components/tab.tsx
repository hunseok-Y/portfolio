import { useLocation, useNavigate } from "react-router-dom";

export default function Tab() {
	const navigate = useNavigate();
	const location = useLocation().pathname;

	return (
		<>
			<div className=" w-[150px] ">
				<div className="flex flex-col items-start gap-y-2.5 sticky top-24">
					<button onClick={() => navigate("/")} className={`text-[18px]  text-white hover:underline ${location == "/" ? "font-[900]" : "font-[600]"}`}>
						Home
					</button>
					<button onClick={() => navigate("/project")} className={`text-[18px]  text-white hover:underline ${location == "/project" ? "font-[900]" : "font-[600]"}`}>
						Project
					</button>
					<button onClick={() => navigate("/contact")} className={`text-[18px]  text-white hover:underline ${location == "/contact" ? "font-[900]" : "font-[600]"}`}>
						Contact
					</button>
				</div>
			</div>
		</>
	);
}
