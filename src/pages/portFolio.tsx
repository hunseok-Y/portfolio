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
									<div className="w-[16px] h-[16px]">
										<img src="/images/icon_github.svg" alt="" className="object-center object-contain w-full h-full bg-white rounded-[50%]" />
									</div>
									<span className="font-[700]">GitHub</span>
								</a>
								<a
									href="https://meowing-wood-e89.notion.site/SW-274ef2fed5bb807a83c5f6135acaa12b?source=copy_link"
									target="_blank"
									className="border text-white border-white hover:text-black hover:border-black hover:bg-white inline-flex transition-all items-center gap-x-1 px-2.5 py-1 rounded-[6px]">
									<div className="w-[16px] h-[16px]">
										<img src="/images/icon_notion.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">Notion</span>
								</a>
							</div>
						</div>
					</div>
				</section>
				<section className="mt-[80px] pb-[80px] border-b-[0.5px] border-solid border-white">
					<h1 className="content-title">SKILLS</h1>
					<div className="mt-8">
						<div>
							<h2 className="content-title">Language</h2>
							<div className="flex gap-x-2.5 mt-2.5">
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px]">
									<div className="w-[16px] h-[16px]">
										<img src="/images/icon_javascript.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">JavaScript</span>
								</div>
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px]">
									<div className="w-[16px] h-[16px]">
										<img src="/images/icon_typescript.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">TypeScript</span>
								</div>
							</div>
						</div>
						<div className="mt-5">
							<h2 className="content-title">Framework / Library</h2>
							<div className="flex gap-x-2.5 mt-2.5">
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px]">
									<div className="w-[16px] h-[16px]">
										<img src="/images/icon_react.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">React</span>
								</div>
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px]">
									<div className="w-[16px] h-[16px]">
										<img src="/images/icon_next.svg" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">Next.js</span>
								</div>
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px]">
									<div className="w-[16px] h-[16px]">
										<img src="/images/icon_vue.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">Vue</span>
								</div>
							</div>
						</div>
						<div className="mt-5">
							<h2 className="content-title">MarkUp / Styling</h2>
							<div className="flex gap-x-2.5 mt-2.5">
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px]">
									<div className="w-[16px] h-[16px]">
										<img src="/images/icon_html.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">HTML</span>
								</div>
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px]">
									<div className="w-[16px] h-[16px]">
										<img src="/images/icon_css.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">CSS</span>
								</div>
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px]">
									<div className="w-[16px] h-[16px]">
										<img src="/images/icon_scss.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">SCSS</span>
								</div>
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px]">
									<div className="w-[16px] h-[16px]">
										<img src="/images/icon_tailwind.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">Tailwind</span>
								</div>
							</div>
						</div>
						<div className="mt-5">
							<h2 className="content-title">Database</h2>
							<div className="flex gap-x-2.5 mt-2.5">
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px]">
									<div className="w-[16px] h-[16px]">
										<img src="/images/icon_mongodb.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">MongoDB</span>
								</div>
							</div>
						</div>
						<div className="mt-5">
							<h2 className="content-title">Tool</h2>
							<div className="flex gap-x-2.5 mt-2.5">
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px]">
									<div className="w-[16px] h-[16px]">
										<img src="/images/icon_github.svg" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">GitHub</span>
								</div>
								<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px]">
									<div className="w-[16px] h-[16px]">
										<img src="/images/icon_notion.png" alt="" className="object-center object-contain w-full h-full" />
									</div>
									<span className="font-[700]">Notion</span>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="mt-[80px] pb-[80px] border-b-[0.5px] border-solid border-white">
					<h1 className="content-title">CAREER(총 3년 3개월)</h1>
					<div className="mt-8 flex gap-x-10 ">
						<div className="w-[150px] flex-[0_0_auto]">
							<h2 className="content-title">
								어니언 <br />
								커뮤니케이션즈
							</h2>
							<span className="text-white font-[200]">(웹퍼블리셔 / 대리)</span>
							<h3 className="content-title mt-5">2022년 1월 10일 ~ 2025년 4월 1일</h3>
						</div>
						<div className="ml-[18px] flex-[1_1_100%] min-w-0">
							<ol className="list-decimal">
								<li className="text-[20px] font-[700]">
									<h3 className="content-title ">커뮤니케이션 및 유지보수</h3>
									<ul className="dot">
										<li>디자인&개발팀과 커뮤니케이션을 통해 계약 업체의 요구사항의 맞게 유지보수를 진행했습니다.</li>
										<li>프로젝트 초기 단계부터 명확한 기능 구현 방향성을 제시하고 적합한 라이브러리를 선별·제안하여, 효율적인 협업과 소통을 실현합니다.</li>
									</ul>
								</li>
								<li className="text-[20px] font-[700] mt-5">
									<h3 className="content-title ">새로운 CSS 기술 도입 및 코드개선</h3>
									<ul className="dot">
										<li>기존에 CSS만 사용해서 구현했다면 SCSS를 도입해서 더 편리한 작업을 할 수 있도록 개선하였습니다.</li>
										<li>
											SCSS에 있는 mixin을 사용해 기존에 사용하는 2가지 디바이스 스타일을 사용할 수 있게하고 더불어 custom을 가능하게 하여 다양한 디바이스에서 스타일을 적용 할 수
											있도로 하였습니다.
										</li>
										<li>flex, grid, aspect-ratio 같은 새로운 스타일 코드들도 적극 활용해서 자유자제 사용할 수 있도록 했습니다. </li>
									</ul>
									<button
										className="ml-4 mt-2.5 py-1.5 px-2 text-[16px] leading-[1] rounded-[6px] border border-white text-white transition-all hover:bg-white hover:border-white hover:text-[#1b1b1e]"
										onClick={() => setStyleModal(!styleModal)}>
										더 알아보기
									</button>
								</li>
								<li className="text-[20px] font-[500] mt-5">
									<h3 className="content-title ">웹접근성</h3>
									<ul className="dot">
										<li>웹접근성에 대해 항상 고민하고 생각list-decimal pl-5하며 코드를 작성하는 방법을 배웠습니다.</li>
										<li>WebWatch에 심사를 받아보는 경험을 했습니다.</li>
										<li>WebWatch에서 제안하는 수정사항을 수정 후 재심사를 받고 통과한 경험이 있습니다.</li>
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
														<span className="text-white text-[18px]">{data.projectName}</span>
														<button className="text-white absolute translate-y-[-50%] top-[50%] right-0">
															<ArrowDown className={`w-[20px] h-[20px] transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
														</button>
													</div>
													<div
														className={`${
															openIndex === i ? "max-h-[1000px] delay-0 duration-700" : "max-h-0 duration-0"
														}  overflow-hidden transition-[max-height_opacity] ease h-full`}>
														<ul className="w-full">
															<li className="text-white text-[18px] font-[400]">설명 : {data.description}</li>
															<li className="text-white text-[18px] font-[400]">작업일 : {data.day}</li>
															<li className="text-white text-[18px] font-[400]">작업페이지 : {data.contribution}</li>
															{data.site ? (
																<li>
																	<a className="text-[#fff] hover:text-[#3d72f9] underline text-[16px] font-[400]" href={data.site}>
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
																				<span className="font-[700] text-[14px]">{item.toUpperCase()}</span>
																			</div>
																		);
																	})}
																</div>
															</li>
															<li>
																<div className="mt-5">
																	<Swiper spaceBetween={20} slidesPerView={2}>
																		{data.img
																			? data.img.map((img) => {
																					return (
																						<SwiperSlide>
																							<div className="h-[260px] overflow-hidden rounded-[10px]">
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
				<section className="mt-[80px] pb-[80px]">
					<h1 className="content-title">CERTIFICATE</h1>
					<div className="mt-8 flex gap-x-10 ">
						<div className="w-[300px] flex-[0_0_auto]">
							<h2 className="content-title">정보처리 산업기사 (필기)</h2>
						</div>
						<div className="ml-[18px] flex-[1_1_100%] min-w-0">
							<div className="text-[18px] font-[300] text-white">
								과학기술정보통신부 <br />
								2025.06
							</div>
							<div className="text-[18px] font-[300] text-white">2026 실기 자격증 취득 예정</div>
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
		<div className="fixed py-10 top-0 left-0 w-full h-full bg-[#000000db] flex items-center justify-center" onClick={() => setStyleModal(false)}>
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
