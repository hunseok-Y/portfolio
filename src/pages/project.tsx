import { useState } from "react";
import ProjectModal from "../components/projectModal";

export default function Project() {
	const [modal, setModal] = useState(false);
	const [projectName, setProjectName] = useState("");

	return (
		<>
			<div className="w-full mt-5 md:mt-0">
				<h2 className="content-title">
					팀 프로젝트와 개인 프로젝트 모음입니다. <br />
					앞으로 더 많은 프로젝트로 채워나갈 공간입니다.
				</h2>
				<div className="mt-10 flex flex-col md:grid lg:grid-cols-3 md:grid-cols-2 gap-y-5 md:gap-x-5">
					<div
						className="bg-white rounded-[20px] px-5 hover:translate-y-[-4px] transition-all duration-300 cursor-pointer"
						onClick={() => {
							setProjectName("Newsly");
							setModal(!modal);
						}}>
						<div className="h-[250px] border-b-[1px] p-5">
							<img src="/images/newsly/logo.png" alt="" className="w-full h-full object-center object-contain" />
						</div>
						<div className="py-5">
							<div className="text-[20px] font-[700]">Newsly</div>
							<div className="text-[14px] mt-1.5 text-[#fff] font-[700] rounded-[4px] inline-block py-0.5 px-1 bg-[#3b9418]">WEB</div>
							<p className="mt-1.5">오늘의 뉴스를 한곳에 모아주는 웹사이트</p>
						</div>
					</div>
					<div
						className="bg-white rounded-[20px] px-5 hover:translate-y-[-4px] transition-all duration-300 cursor-pointer"
						onClick={() => {
							setProjectName("Eum");
							setModal(!modal);
						}}>
						<div className="h-[250px] border-b-[1px] p-5">
							<img src="/images/pull_logo.svg" alt="" className="w-full h-full object-center object-contain" />
						</div>
						<div className="py-5">
							<div className="text-[20px] font-[700]">이음</div>
							<div className="text-[14px] mt-1.5 text-[#fff] font-[700] rounded-[4px] inline-block py-0.5 px-1 bg-[#3b9418]">WEB</div>
							<p className="mt-1.5">시니어와 MZ세대를 잇는 맞춤형 레슨 매칭 플랫폼</p>
						</div>
					</div>
				</div>
			</div>
			{modal ? <ProjectModal project={projectName} modal={modal} setModal={setModal} /> : null}
		</>
	);
}
