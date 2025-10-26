export default function Eum() {
	return (
		<>
			<div className="w-full h-[400px] rounded-[20px] overflow-hidden">
				<img src="/images/eum/img_eum.png" alt="" className="w-full h-full object-center object-cover" />
			</div>
			<div className="py-10 border-b-[0.5px] border-white">
				<ul>
					<li className="flex items-center gap-x-10">
						<h4 className="content-title">SKILLS</h4>
						<div className="flex gap-x-2.5">
							<div className="bg-white inline-flex items-center gap-x-1 px-2 py-0.5 rounded-[6px]">
								<div className="w-[14px] h-[14px]">
									<img src="/images/icon_javascript.png" alt="" className="object-center object-contain w-full h-full" />
								</div>
								<span className="font-[700] text-[14px]">JavaScript</span>
							</div>
							<div className="bg-white inline-flex items-center gap-x-1 px-2 py-0.5 rounded-[6px]">
								<div className="w-[14px] h-[14px]">
									<img src="/images/icon_typescript.png" alt="" className="object-center object-contain w-full h-full" />
								</div>
								<span className="font-[700] text-[14px]">TypeScript</span>
							</div>
							<div className="bg-white inline-flex items-center gap-x-1 px-2 py-0.5 rounded-[6px]">
								<div className="w-[14px] h-[14px]">
									<img src="/images/icon_react.png" alt="" className="object-center object-contain w-full h-full" />
								</div>
								<span className="font-[700] text-[14px]">React</span>
							</div>
							<div className="bg-white inline-flex items-center gap-x-1 px-2 py-0.5 rounded-[6px]">
								<div className="w-[14px] h-[14px]">
									<img src="/images/icon_html.png" alt="" className="object-center object-contain w-full h-full" />
								</div>
								<span className="font-[700] text-[14px]">HTML</span>
							</div>
							<div className="bg-white inline-flex items-center gap-x-1 px-2 py-0.5 rounded-[6px]">
								<div className="w-[14px] h-[14px]">
									<img src="/images/icon_tailwind.png" alt="" className="object-center object-contain w-full h-full" />
								</div>
								<span className="font-[700] text-[14px]">Tailwind</span>
							</div>
						</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5">
						<h4 className="content-title">개발기간</h4>
						<div className="text-[16px] text-white font-[400]">2025. 06.28 ~ 2025. 08. 23</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5">
						<h4 className="content-title">참여인원</h4>
						<div className="text-[16px] text-white font-[400]">6명 (기획 1명, 디자이너 1명, 프론트엔드 2명, 백엔드 2명)</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5">
						<h4 className="content-title">역활</h4>
						<div className="text-[16px] text-white font-[400]">기획, 프론트엔드</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5">
						<h4 className="content-title">기여도</h4>
						<div className="text-[16px] text-white font-[400]">3/5</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5">
						<h4 className="content-title">카테고리</h4>
						<div className="text-[16px] text-white font-[400]">WEB</div>
					</li>
				</ul>
			</div>
			<div className="py-10 border-b-[0.5px] border-white">
				<video src="/images/eum/video_sian.mp4" controls className="mx-auto h-[600px]"></video>
			</div>
			<div className="py-10 border-b-[0.5px] border-white">
				<div>
					<h2 className="content-title mb-2.5">프로젝트 설명</h2>
					<p className="text-white leading-[1.4] font-[300]">
						이음 프로젝트는 스위프에서 주관하는 프로그램으로 6주간 각 직군의 사람들과 한팀이 되어 사이드 프로젝트를 만드는 프로그램입니다. 제가 낸 아이디어가 채택되어 프로젝트를
						만들었습니다.
					</p>
					<br />
					<p className="text-white">
						취미나 기술을 배우고싶지만 가격이 너무 부담되고 비싼 레슨비용을 부담하더라도 수업의 퀼리티가 마음에 들지 않는 2030세대 / 은퇴 후 일을 하고싶은 시니어
						<br />
						<br />
						이음은 2030세대의 가격적인 부담과 시니어가 은퇴 전 본업을 살려 경력과 기술을 저렴한 가격의 제공함으로써 2030세대는 저렴한 가격에 배우고싶던 취미를 배울 수 있으며, 시니어분들은
						은퇴 후에도 본업의 경력을 살려 수입을 얻을 수 있도록 매칭해주는 플랫폼입니다.
					</p>
				</div>
				<div className="mt-10">
					<h2 className="content-title mb-2.5">기여도</h2>
					<ul className="dot">
						<li>Mentor 메인페이지</li>
					</ul>
				</div>
			</div>
		</>
	);
}
