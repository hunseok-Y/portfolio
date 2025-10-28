import { useLocation, useNavigate } from "react-router-dom";

export default function Tab() {
	const navigate = useNavigate();
	const location = useLocation().pathname;

	return (
		<>
			<div className="lg:w-[150px] lg:static sticky top-0 z-30">
				<div className="py-5 bg-[#1b1b1e] lg:mx-0 lg:px-0 mx-[-20px] lg:mx-[-40px] gap-x-2.5 lg:sticky top-0 flex justify-center lg:flex-col lg:items-start lg:gap-y-2.5 lg:top-24 z-30">
					<button onClick={() => navigate("/")} className={`text-[18px] text-[#bbbbbb] cursor-pointer hover:underline ${location == "/" ? "font-[900] text-white" : "font-[400]"}`}>
						HOME
					</button>
					<button
						onClick={() => navigate("/project")}
						className={`text-[18px] cursor-pointer text-[#bbbbbb] hover:underline ${location == "/project" ? "font-[900] text-white" : "font-[400]"}`}>
						PROJECT
					</button>
				</div>
			</div>
		</>
	);
}
