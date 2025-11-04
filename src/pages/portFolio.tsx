import { useState } from "react";
import { CareerModal } from "../components/careerModal";
import ScrollHold from "../hook/scrollHold";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowDown } from "lucide-react";
import CareerData from "../contents/CareerData";

export default function PortFolio() {
	const [styleModal, setStyleModal] = useState(false);
	const [careerModal, setCareerModal] = useState(false);
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleCopy = (text: string) => {
		navigator.clipboard
			.writeText(text)
			.then(() => alert("이메일이 복사 되었습니다."))
			.catch(() => alert("복사 실패!"));
	};

	return (
		<>
			<div className="flex-[1_1_100%] min-w-0">
				<section className="md:flex block gap-x-5 md:pb-[80px] pb-[40px] border-b-[0.5px] border-solid border-white">
					<div className="md:w-[146px] md:h-[146px] w-[110px] h-[110px] flex-[0_0_auto]">
						<img src="/images/profile_img.jpg" className="w-full h-full object-top object-contain rounded-[50%] overflow-hidden bg-white" alt="" />
					</div>
					<div className="mt-5 lg:mt-0">
						<h1 className="content-title">양훈석</h1>
						<h2 className="text-white text-[20px] mt-1.5 lg:mt-2.5 font-[600]">1995.04.30</h2>
						<div className="mt-2.5">
							<span className="p-[2px_10px] font-[500] lg:text-[16px] text-[14px] bg-white rounded-[4px]">Frontend-Developer</span>
						</div>
						<div className="flex flex-col gap-y-[2px] mt-2.5">
							<span className="text-white">안녕하세요. 현재에 만족하지 않고 계속해서 전진해 나가는 프론트엔드 개발자 양훈석입니다.</span>
							<span className="text-white">더 나은 사용자 경험을 만들기 위해 끊임없이 학습하고 도전합니다.</span>
						</div>

						<div className="mt-5">
							<h2 className="content-title">CONTACT</h2>
							<div className="inline-flex flex-col mt-1.5 gap-y-2">
								<button className="text-white text-[18px] cursor-pointer" onClick={() => handleCopy("gnstjr5911@gmail.com")}>
									Email. gnstjr5911@gmail.com
								</button>
								<a href="tel: 010-3260-8776" className="text-white text-[18px] flex-[0_1_auto]">
									Phone. 010-3260-8776
								</a>
							</div>
							<div className="flex gap-x-2.5 mt-10">
								<a
									href="https://github.com/hunseok-Y"
									target="_blank"
									className=" border text-white border-white hover:text-black hover:border-black hover:bg-white inline-flex transition-all items-center gap-x-1 px-2.5 py-1 rounded-[6px]">
									<div className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]">
										<img src="/images/icon_github.svg" alt="" className="object-center object-contain w-full h-full bg-white rounded-[50%]" />
									</div>
									<span className="font-[700]">GitHub</span>
								</a>
								<a
									href="https://meowing-wood-e89.notion.site/SW-274ef2fed5bb807a83c5f6135acaa12b?source=copy_link"
									target="_blank"
									className="border text-white border-white hover:text-black hover:border-black hover:bg-white inline-flex transition-all items-center gap-x-1 px-2.5 py-1 rounded-[6px]">
									<div className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]">
										<img src="/images/icon_notion.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">Notion</span>
								</a>
							</div>
						</div>
					</div>
				</section>
				<section className="md:mt-[80px] mt-[40px] pb-[40px] md:pb-[80px] border-b-[0.5px] border-solid border-white">
					<h1 className="content-title">SKILLS</h1>
					<div className="lg:mt-8 mt-4">
						<div>
							<h2 className="content-title">Language</h2>
							<div className="flex gap-x-2.5 mt-2.5">
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px] md:text-[16px] text-[14px]">
									<div className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]">
										<img src="/images/icon_javascript.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">JavaScript</span>
								</div>
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px] md:text-[16px] text-[14px]">
									<div className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]">
										<img src="/images/icon_typescript.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">TypeScript</span>
								</div>
							</div>
						</div>
						<div className="mt-5">
							<h2 className="content-title">Framework / Library</h2>
							<div className="flex gap-x-2.5 mt-2.5">
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px] md:text-[16px] text-[14px]">
									<div className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]">
										<img src="/images/icon_react.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">React</span>
								</div>
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px] md:text-[16px] text-[14px]">
									<div className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]">
										<img src="/images/icon_next.svg" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">Next.js</span>
								</div>
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px] md:text-[16px] text-[14px]">
									<div className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]">
										<img src="/images/icon_vue.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">Vue</span>
								</div>
							</div>
						</div>
						<div className="mt-5">
							<h2 className="content-title">MarkUp / Styling</h2>
							<div className="flex gap-x-2.5 gap-y-2.5 mt-2.5 flex-wrap">
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px] md:text-[16px] text-[14px]">
									<div className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]">
										<img src="/images/icon_html.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">HTML</span>
								</div>
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px] md:text-[16px] text-[14px]">
									<div className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]">
										<img src="/images/icon_css.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">CSS</span>
								</div>
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px] md:text-[16px] text-[14px]">
									<div className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]">
										<img src="/images/icon_scss.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">SCSS</span>
								</div>
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px] md:text-[16px] text-[14px]">
									<div className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]">
										<img src="/images/icon_tailwind.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">Tailwind</span>
								</div>
							</div>
						</div>
						<div className="mt-5">
							<h2 className="content-title">Database</h2>
							<div className="flex gap-x-2.5 mt-2.5">
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px] md:text-[16px] text-[14px]">
									<div className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]">
										<img src="/images/icon_mongodb.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">MongoDB</span>
								</div>
							</div>
						</div>
						<div className="mt-5">
							<h2 className="content-title">Tool</h2>
							<div className="flex gap-x-2.5 mt-2.5">
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px] md:text-[16px] text-[14px]">
									<div className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]">
										<img src="/images/icon_github.svg" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">GitHub</span>
								</div>
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px] md:text-[16px] text-[14px]">
									<div className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]">
										<img src="/images/icon_notion.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">Notion</span>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="md:mt-[80px] mt-[40px] pb-[40px] md:pb-[80px] border-b-[0.5px] border-solid border-white">
					<h1 className="content-title">CAREER(총 3년 3개월)</h1>
					<div className="lg:mt-8 mt-4 lg:flex lg:gap-x-10 block">
						<div className="lg:w-[150px] flex-[0_0_auto]">
							<h2 className="content-title">
								어니언 <br />
								커뮤니케이션즈
							</h2>
							<span className="text-white font-[200]">(웹퍼블리셔 / 대리)</span>
							<h3 className="content-title mt-5">2022년 1월 10일 ~ 2025년 4월 1일</h3>
						</div>
						<div className="lg:ml-[18px] md:ml-[20px] ml-[16px] lg:mt-0 mt-10 flex-[1_1_100%] min-w-0">
							<ol className="list-decimal">
								<li className="text-[20px] font-[700]">
									<h3 className="content-title ">커뮤니케이션 및 유지보수</h3>
									<ul className="dot">
										<li>기획, 디자인, 개발팀과 긴밀히 소통하며 클라이언트 요구사항을 반영한 유지보수를 수행했습니다.</li>
										<li>프로젝트 초기부터 구현 방향을 명확히 하고 적합한 라이브러리를 선별·제안하여 효율적인 협업 환경을 만들었습니다.</li>
									</ul>
								</li>
								<li className="text-[20px] font-[700] mt-5">
									<h3 className="content-title ">새로운 CSS 기술 도입 및 코드개선</h3>
									<ul className="dot">
										<li>SCSS를 도입하여 기존 CSS 작업 방식을 개선하고 생산성을 높였습니다.</li>
										<li>mixin을 사용해 기존 2가지 디바이스 스타일을 간편하게 적용하고, 커스텀 옵션을 추가하여 다양한 화면 크기에 유연하게 대응했습니다.</li>
										<li>최신 CSS 속성(flex, grid, aspect-ratio 등)을 적극 도입하여 다양한 레이아웃을 유연하게 구현했습니다.</li>
									</ul>
									<button
										className="ml-4 mt-2.5 py-1.5 px-2 md:text-[16px] text-[12px] leading-[1] rounded-[6px] border border-white text-white transition-all hover:bg-white hover:border-white hover:text-[#1b1b1e]"
										onClick={() => setStyleModal(!styleModal)}>
										더 알아보기
									</button>
								</li>
								<li className="text-[20px] font-[500] mt-5">
									<h3 className="content-title ">웹접근성</h3>
									<ul className="dot">
										<li>웹접근성 기준을 준수하며 모든 사용자를 고려한 코드를 작성하는 방법을 익혔습니다.</li>
										<li>WebWatch를 통해 웹접근성 품질 검수를 받아본 경험이 있습니다.</li>
										<li>심사 결과 나온 개선사항을 반영하고 재심사를 통과하며 웹접근성 인증을 받았습니다.</li>
									</ul>
								</li>
								<li className="text-[20px] font-[500] mt-5">
									<h3 className="content-title ">작업한 프로젝트</h3>
									<ol className="list-decimal pl-8">
										{CareerData.map((data, i) => {
											return (
												<li key={i}>
													<div
														className="relative py-2.5 cursor-pointer"
														onClick={() => {
															setOpenIndex(openIndex === i ? null : i);
														}}>
														<span className="text-white md:text-[18px] text-[16px]">{data.projectName}</span>
														<button className="text-white absolute translate-y-[-50%] top-[50%] right-0">
															<ArrowDown className={`w-[20px] h-[20px] transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
														</button>
													</div>
													<div
														className={`${
															openIndex === i ? "max-h-[1000px] delay-0 duration-700" : "max-h-0 duration-0"
														}  overflow-hidden transition-[max-height_opacity] ease h-full`}>
														<ul className="w-full">
															<li className="text-white md:text-[18px] text-[14px] font-[400]">설명 : {data.description}</li>
															<li className="text-white md:text-[18px] md:mt-0 mt-1 text-[14px] font-[400]">작업일 : {data.day}</li>
															<li className="text-white md:text-[18px] md:mt-0 mt-1 text-[14px] font-[400]">작업페이지 : {data.contribution}</li>
															{data.site ? (
																<li>
																	<a className="text-[#fff] hover:text-[#3d72f9] underline md:text-[16px] text-[12px] font-[400]" href={data.site}>
																		홈페이지 방문하기
																	</a>
																</li>
															) : null}

															<li>
																<div className="flex gap-x-2.5 mt-2.5">
																	{data.Language.map((item) => {
																		return (
																			<div className="bg-white inline-flex items-center gap-x-1 px-1.5 py-0.5 rounded-[6px]">
																				<div className="w-[12px] h-[12px]">
																					<img src={`/images/icon_${item}.png`} alt="" className="object-center object-contain w-full h-full" />
																				</div>
																				<span className="font-[700] md:text-[14px] text-[12px]">{item.toUpperCase()}</span>
																			</div>
																		);
																	})}
																</div>
															</li>
															<li>
																<div className="mt-5">
																	<Swiper
																		spaceBetween={20}
																		slidesPerView={1}
																		breakpoints={{
																			530: {
																				slidesPerView: 2,
																			},
																		}}>
																		{data.img
																			? data.img.map((img) => {
																					return (
																						<SwiperSlide>
																							<div className="md:h-[260px] h-[200px] overflow-hidden rounded-[10px]">
																								<img className="w-full h-full object-top object-cover" src={img} alt="" />
																							</div>
																						</SwiperSlide>
																					);
																			  })
																			: null}
																	</Swiper>
																</div>
															</li>
														</ul>
													</div>
												</li>
											);
										})}
									</ol>
								</li>
							</ol>
						</div>
					</div>
				</section>
				<section className="md:mt-[80px] md:pb-[80px] mt-[40px]">
					<h1 className="content-title">CERTIFICATE</h1>
					<div className="lg:mt-8 mt-4 lg:flex block gap-x-10 ">
						<div className="md:w-[300px] w-auto flex-[0_0_auto]">
							<h2 className="content-title">정보처리 산업기사 (필기)</h2>
						</div>
						<div className="lg:ml-[18px] lg:mt-0 mt-1.5 flex-[1_1_100%] min-w-0">
							<div className="md:text-[18px] text-[14px] font-[300] text-white">
								과학기술정보통신부 <br />
								2025.06
							</div>
							<div className="md:text-[18px] text-[14px] font-[300] text-white">2026 실기 자격증 취득 예정</div>
						</div>
					</div>
				</section>
			</div>
			{styleModal == true ? <StylingModal setStyleModal={setStyleModal} styleModal={styleModal} /> : null}
			{careerModal == true ? <CareerModal careerModal={careerModal} setCareerModal={setCareerModal} /> : null}
		</>
	);
}

function StylingModal({ setStyleModal, styleModal }: { setStyleModal: React.Dispatch<React.SetStateAction<boolean>>; styleModal: boolean }) {
	ScrollHold(styleModal);

	return (
		<div className="fixed py-10  z-50 top-0 left-0 w-full h-full bg-[#000000db] flex items-center justify-center" onClick={() => setStyleModal(false)}>
			<div className="text-white px-5 py-8 bg-[#1b1b1e] max-w-[1140px] w-full h-full overflow-y-auto">
				<h2 className="content-title">코드개선 및 스타일링</h2>
				<div className="sm:mt-14 mt-7">
					<div className="w-full">
						<img src="/images/img_code1.png" className="w-full object-center object-contain" alt="" />
						<img src="/images/img_code2.png" className="w-full object-center object-contain" alt="" />
						<img src="/images/img_code4.png" className="w-full object-center object-contain" alt="" />
					</div>
					<ul className="dot">
						<li>자주쓰이는 코드를 함수로 묶어서 필요한 스타일에 바로 적용할 수 있도록 작업했습니다.</li>
						<li>반응형을 변수로 지정해 정해진 디바이스 크기와 custom할 수 있도록 해서 반응형 작업의 효율성을 높였습니다.</li>
						<li>자주 쓰이는 코드를 필요한 정보만 넣어서 구현되도록 사용했습니다.</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
