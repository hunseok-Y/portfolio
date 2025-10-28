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
									News API에서 page 번호를 기준으로 데이터를 요청할 수 있는데, 스크롤을 내릴 때 이미 로드된 데이터가 중복으로 출력되는 문제가 발생했습니다. 이 문제를 해결하기 위해
									데이터 요청 상태를 확인하는 검증 로직(검문소 역할) 을 추가하여, 이미 가져온 데이터일 경우 요청을 건너뛰도록 개선했습니다.
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
									DELETE 메서드 요청 시 body.id를 전달해 비교하도록 설정했지만, 로컬 환경에서는 정상 작동하던 기능이 Vercel 배포 후 동작하지 않는 문제가 발생했습니다. 조사 결과,
									로컬의 Node.js 환경은 이를 오류로 간주하지 않고 넘어가지만, Vercel은 보다 엄격하게 검증하기 때문에 DELETE 요청 시 body 데이터를 유효하지 않은 값으로 처리한다는 점을
									확인했습니다. 이에 따라, body.id 대신 쿼리 파라미터(data.id)로 전달하고, API 서버에서 URL에서 id를 추출해 직접 처리하는 방식으로 수정하여 문제를 해결했습니다.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
