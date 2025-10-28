import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Eum() {
	return (
		<>
			<div>
				<Swiper
					spaceBetween={20}
					slidesPerView={1}
					modules={[Navigation, Pagination]}
					pagination={{
						el: ".eum-pagination",
						clickable: true,
					}}>
					<SwiperSlide className="h-[400px] rounded-[20px] overflow-hidden">
						<img src="/images/eum/img_eum.png" alt="" className="w-full h-full object-center object-cover" />
					</SwiperSlide>
					<SwiperSlide className="h-[400px] rounded-[20px] overflow-hidden">
						<img src="/images/eum/img_eum01.png" alt="" className="w-full h-full object-center object-cover" />
					</SwiperSlide>
					<SwiperSlide className="h-[400px] rounded-[20px] overflow-hidden">
						<img src="/images/eum/img_eum02.png" alt="" className="w-full h-full object-center object-cover" />
					</SwiperSlide>
					<SwiperSlide className="h-[400px] rounded-[20px] overflow-hidden">
						<img src="/images/eum/img_eum03.png" alt="" className="w-full h-full object-center object-cover" />
					</SwiperSlide>
					<SwiperSlide className="h-[400px] rounded-[20px] overflow-hidden">
						<img src="/images/eum/img_eum04.png" alt="" className="w-full h-full object-center object-cover" />
					</SwiperSlide>
				</Swiper>
				<div className="eum-pagination "></div>
			</div>
			<div className="py-10 border-b-[0.5px] border-white">
				<ul>
					<li className="flex items-center gap-x-10">
						<div className="text-[18px] text-white max-w-[64px] w-full font-[700]">SKILLS</div>
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
						<div className="text-[18px] text-white max-w-[64px] w-full font-[700]">개발기간</div>
						<div className="text-[16px] text-white font-[400]">2025. 06.28 ~ 2025. 08. 23</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5">
						<div className="text-[18px] text-white max-w-[64px] w-full font-[700]">참여인원</div>
						<div className="text-[16px] text-white font-[400]">6명 (기획 1명, 디자이너 1명, 프론트엔드 2명, 백엔드 2명)</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5">
						<div className="text-[18px] text-white max-w-[64px] w-full font-[700]">역활</div>
						<div className="text-[16px] text-white font-[400]">기획, 프론트엔드</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5">
						<div className="text-[18px] text-white max-w-[64px] w-full font-[700]">기여도</div>
						<div className="text-[16px] text-white font-[400]">3/5</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5">
						<div className="text-[18px] text-white max-w-[64px] w-full font-[700]">카테고리</div>
						<div className="text-[16px] text-white font-[400]">WEB</div>
					</li>
					<li className="flex items-center gap-x-10 mt-1.5">
						<div className="text-[18px] text-white max-w-[64px] w-full font-[700]">사이트</div>
						<div className="flex items-center">
							<a href="https://github.com/hunseok-Y/eum" className="bg-white inline-flex items-center gap-x-1 px-2 py-0.5 rounded-[6px]">
								<div className="w-[14px] h-[14px]">
									<img src="/images/icon_github.svg" alt="" className="object-center object-contain w-full h-full" />
								</div>
								<span className="font-[700] text-[14px]">github</span>
							</a>
							<div className="text-[16px] text-[#ef4444] font-[400] ml-4">*기간이 만료되어 운영중이지 않습니다.</div>
						</div>
					</li>
				</ul>
			</div>
			<div className="py-10 border-b-[0.5px] border-white">
				<video src="/images/eum/video_sian.mp4" controls className="mx-auto h-[600px]"></video>
			</div>
			<div className="py-10">
				<div>
					<h2 className="content-title mb-2.5">프로젝트 설명</h2>
					<p className="text-white leading-[1.4] font-[300]">
						이음 프로젝트는 스위프에서 주관하는 프로그램으로 6주간 각 직군의 사람들과 한팀이 되어 사이드 프로젝트를 만드는 프로그램입니다. 이음의 아이디어는 제가 낸 아이디어가 채택되어
						진행하였습니다.
					</p>
					<br />
					<p className="text-white">
						취미나 기술을 배우고싶지만 가격이 너무 부담되고 비싼 레슨비용을 부담하더라도 수업의 퀄리티가 마음에 들지 않는 2030세대 / 은퇴 후 제2의 직업을 원하는 시니어
						<br />
						<br />
						이음은 2030세대의 가격적인 부담과 시니어가 은퇴 후 부업을 하고싶다는 니즈를 생각하면서 나오게 되었습니다. 은퇴 전 본업을 살려 경력과 기술을 저렴한 가격의 제공함으로써
						2030세대는 저렴한 가격에 배우고싶던 취미와 기술 등을 배울 수 있으며, 시니어분들은 은퇴 후에도 본업의 경력을 살려 수입을 얻을 수 있도록 매칭해주는 플랫폼입니다.
					</p>
				</div>
				<div className="mt-10">
					<h2 className="content-title mb-2.5">기여 역활</h2>
					<ul className="dot">
						<li>React Router Data Mode로 세팅</li>
						<li>TailWind 기본세팅</li>
						<li>Mentee가 사용하는 모든 페이지 개발</li>
						<li>공통으로 쓰이는 탭 버튼 component화 개발</li>
						<li>axios를 사용해 API명세서 대로 API 연동</li>
						<li>Header 영역 개발</li>
						<li>검색 페이지 개발</li>
						<li>Swiper.js Library를 사용해서 Slide 디자인 구현</li>
						<li>공통 Modal 개발</li>
					</ul>
				</div>
			</div>
		</>
	);
}
