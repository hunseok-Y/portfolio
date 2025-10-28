import { useLocation, useNavigate } from "react-router-dom";

export default function Tab() {
	const navigate = useNavigate();
	const location = useLocation().pathname;

	return (
		<>
			<div className=" w-[150px] ">
				<div className="flex flex-col items-start gap-y-2.5 sticky top-24">
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
