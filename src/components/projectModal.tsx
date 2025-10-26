import ScrollHold from "../hook/scrollHold";
import Eum from "../projects/eum";
import Newsly from "../projects/newsly";

export default function ProjectModal({ project, modal, setModal }: { project: string; modal: boolean; setModal: React.Dispatch<React.SetStateAction<boolean>> }) {
	ScrollHold(modal);
	function projectTest() {
		switch (project) {
			case "Eum":
				return <Eum />;
			case "Newsly":
				return <Newsly />;
		}
	}

	return (
		<>
			<div
				className="fixed py-10 top-0 left-0 w-full h-full bg-[#000000db] flex items-center justify-center"
				onClick={(e: React.MouseEvent<HTMLDivElement>) => {
					if (e.target === e.currentTarget) {
						setModal(false);
					}
				}}>
				<div className=" px-5 py-8 bg-[#1b1b1e] max-w-[800px] w-full h-full overflow-y-auto">
					<div className="text-[14px] text-white">Project</div>
					<div className="text-[40px] font-[700] text-white">{project}</div>
					<div className="mt-10">{projectTest()}</div>
				</div>
			</div>
		</>
	);
}
