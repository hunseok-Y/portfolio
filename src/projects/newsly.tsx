export default function Newsly() {
	return (
		<>
			<div className="h-[400px] rounded-[20px] overflow-hidden">
				<img src="/images/newsly/img_newsly.png" alt="" className="w-full h-full object-center object-cover" />
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
									<img src="/images/icon_next.svg" alt="" className="object-center object-contain w-full h-full" />
								</div>
								<span className="font-[700] text-[14px]">Next.js</span>
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
						<h4 className="content-title">DATABASE</h4>
						<div className="bg-white inline-flex items-center gap-x-1 px-2 py-0.5 rounded-[6px]">
							<div className="w-[14px] h-[14px]">
								<img src="/images/icon_mongodb.png" alt="" className="object-center object-contain w-full h-full" />
							</div>
							<span className="font-[700] text-[14px]">MongoDB</span>
						</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5">
						<h4 className="content-title">개발기간</h4>
						<div className="text-[16px] text-white font-[400]">2025. 09.28 ~ 2025. 10. 10</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5">
						<h4 className="content-title">참여인원</h4>
						<div className="text-[16px] text-white font-[400]">1명</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5">
						<h4 className="content-title">역활</h4>
						<div className="text-[16px] text-white font-[400]">기획, 디자인, 프론트엔드, 백엔드</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5">
						<h4 className="content-title">기여도</h4>
						<div className="text-[16px] text-white font-[400]">5/5</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5">
						<h4 className="content-title">카테고리</h4>
						<div className="text-[16px] text-white font-[400]">WEB</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5 ">
						<h4 className="content-title">사이트</h4>
						<div className="flex items-center gap-x-2.5">
							<a href="https://github.com/hunseok-Y/newsly" target="_blank" className="bg-white inline-flex items-center gap-x-1 px-2 py-0.5 rounded-[6px]">
								<div className="w-[14px] h-[14px]">
									<img src="/images/icon_github.svg" alt="" className="object-center object-contain w-full h-full" />
								</div>
								<span className="font-[700] text-[14px]">github</span>
							</a>
							<a
								href="https://newsly-alpha.vercel.app/"
								target="_blank"
								className="bg-black text-white border-white border-[0.5px] hover:border-white hover:bg-white hover:text-black inline-flex items-center gap-x-1 px-2 py-0.5 rounded-[6px] transition-all">
								<span className="font-[700] text-[14px]">사이트 바로가기</span>
							</a>
						</div>
					</li>
				</ul>
			</div>
			<div className="py-10">
				<div>
					<h2 className="content-title mb-2.5">프로젝트 설명</h2>
					<p className="text-white leading-[1.4] font-[300]">Newsly는 오늘의 모든 뉴스들을 보여주는 홈페이지 입니다.</p>
					<br />
					<p className="text-white leading-[1.4] font-[300]">
						각 카테고리별로 주제에 맞는 뉴스를 제공하고 검색해서 원하는 뉴스를 찾아볼 수도 있습니다. <br />
						북마크 기능으로 중요한 뉴스를 저장할 수 있습니다.
					</p>
				</div>
				<div className="mt-10">
					<h2 className="content-title mb-2.5">기여 역활</h2>
					<ul className="dot">
						<li>News API를 활용해 개발 진행</li>
						<li>메인 페이지 무한 스크롤 기능 구현 게시물이 100개면 스크롤 멈춤 기능</li>
						<li>카테고리 탭 기능</li>
						<li>검색 기능</li>
						<li>북마크 기능</li>
					</ul>
				</div>
			</div>
		</>
	);
}
