import LanguageData from "../contents/languageContent";

export default function PortFolio() {
	return (
		<>
			<div className="flex-[1_1_100%]">
				<section className="flex gap-x-5 pb-[80px] border-b-[0.5px] border-solid border-white">
					<div className="w-[146px] h-[146px]">
						<img src="/images/profile_img.jpg" className="w-full h-full object-top object-contain rounded-[50%] overflow-hidden bg-white" alt="" />
					</div>
					<div>
						<h1 className="text-[32px] font-[700] text-white">양훈석</h1>
						<h2 className="text-white text-[20px] mt-2.5 font-[600]">1995.04.30</h2>
						<div className="mt-2.5">
							<span className="p-[2px_10px] font-[500] bg-white rounded-[4px]">Frontend-Developer</span>
						</div>
						<div className="flex flex-col gap-y-[2px] mt-2.5">
							<span className="text-white">안녕하세요. 현재에 만족하지 않고 계속해서 전진해 나가는 프론트엔드 개발자 양훈석입니다.</span>
							<span className="text-white">더 나은 사용자 경험을 만들기 위해 끊임없이 학습하고 도전합니다.</span>
						</div>
					</div>
				</section>
				<section className="mt-[80px]">
					<h1 className="content-title">SKILLS</h1>
					<div className="mt-8">
						<h2 className="content-title">Language / FrameWork / Library</h2>
						<div className="flex gap-x-2.5 mt-5">
							{LanguageData.map((data, i) => {
								return (
									<div key={i} className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px]">
										<div className="w-[16px] h-[16px]">
											<img src={data.img} alt="" className="object-center object-contain w-full h-full" />
										</div>
										<span>{data.name}</span>
									</div>
								);
							})}
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
