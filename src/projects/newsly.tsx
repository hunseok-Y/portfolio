export default function Newsly() {
	return (
		<>
			<div className="h-[400px] rounded-[20px] overflow-hidden">
				<img src="/images/newsly/img_newsly.png" alt="" className="w-full h-full object-center object-cover" />
			</div>
			<div className="py-10 border-b-[0.5px] border-white">
				<ul>
					<li className="flex items-center gap-x-10">
						<div className="text-[18px] text-white max-w-[64px] w-full font-[700] ">SKILLS</div>
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
						<div className="text-[18px] text-white max-w-[64px] w-full font-[700] ">DATA</div>
						<div className="bg-white inline-flex items-center gap-x-1 px-2 py-0.5 rounded-[6px]">
							<div className="w-[14px] h-[14px]">
								<img src="/images/icon_mongodb.png" alt="" className="object-center object-contain w-full h-full" />
							</div>
							<span className="font-[700] text-[14px]">MongoDB</span>
						</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5">
						<div className="text-[18px] text-white max-w-[64px] w-full font-[700] ">개발기간</div>
						<div className="text-[16px] text-white font-[400]">2025. 09.28 ~ 2025. 10. 10</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5">
						<div className="text-[18px] text-white max-w-[64px] w-full font-[700] ">참여인원</div>
						<div className="text-[16px] text-white font-[400]">1명</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5">
						<div className="text-[18px] text-white max-w-[64px] w-full font-[700] ">역활</div>
						<div className="text-[16px] text-white font-[400]">기획, 디자인, 프론트엔드, 백엔드</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5">
						<div className="text-[18px] text-white max-w-[64px] w-full font-[700] ">기여도</div>
						<div className="text-[16px] text-white font-[400]">5/5</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5">
						<div className="text-[18px] text-white max-w-[64px] w-full font-[700] ">카테고리</div>
						<div className="text-[16px] text-white font-[400]">WEB</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5 ">
						<div className="text-[18px] text-white max-w-[64px] w-full font-[700] ">사이트</div>
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
					<h2 className="content-title mb-2.5">구현 기능</h2>
					<ul className="dot">
						<li>News API를 활용해 개발 진행</li>
						<li>메인 페이지 무한 스크롤 기능 구현 게시물이 100개면 스크롤 멈춤 기능</li>
						<li>카테고리 탭 기능</li>
						<li>검색 기능</li>
						<li>북마크 기능</li>
					</ul>
				</div>
				<div className="mt-10">
					<h2 className="content-title mb-2.5">문제점 & 해결방법</h2>
					<ul>
						<li>
							<h4 className="content-title">1. 무한스크롤 데이터 중복으로 불러오기</h4>
							<div className="mt-2.5">
								<p className="text-white text-[16px] font-[300]">
									News API에서는 page : number을 내려준다 번호 별로 페이지를 얼마나 가져올지도 정할 수 있는데 스크롤을 내릴 때 아직 이미 나온 데이터들이 중복으로 출력이 되는 문제를
									발견했습니다. 해결방법으로 데이터를 가져왔는지 안 가져왔는지 알려줄 검문소 역활의 코드를 넣어서 데이터를 가져왔다면 그냥 지나가다록 하는 코드를 넣어 개선하였습니다.
								</p>
							</div>
						</li>
						<li className="mt-5">
							<h4 className="content-title">2. 북마크 기능 구현</h4>
							<div className="mt-2.5">
								<p className="text-white text-[16px] font-[300]">
									북마크 기능을 구현하고싶었으나 API에서 제공하는 데이터에는 북마크 기능이 없었습니다. 그래서 북마크에서 필요한 부분만 데이터로 가져와서 MongDB에 저장해서 가져오는
									방법으로 해결하였습니다.
								</p>
							</div>
						</li>
						<li className="mt-5">
							<h4 className="content-title">3. vercel 북마크 DELETE 기능 오류</h4>
							<div className="mt-2.5">
								<p className="text-white text-[16px] font-[300]">
									method DELETE요청을 할 때 body.id를 넘겨서 비교하도록 지정했다. Local에서는 아무 문제가 되지 않았지만 vercel에 build시 기능이 작동하지 않았다. 그래서 알아본 경과
									Local은 Node.js가 오류라 생각하지말고 그냥 넘어가기 때문에 기능상 문제가 없지만 vercel은 엄격하기 때문에 body.id로 받았을 때 의미 없다고 간주하기 때문에 이런 문제가
									발생한다는걸 알았다. DELETE 요청 할 때 body.id로 넘기는게 아니라 query parameter로 data.id로 넘겨서 api 서버에서 text를 url로 변경 후 id를 추출해서 직접 지정하는
									방법으로 수정하였다.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
