import ScrollHold from "../hook/scrollHold";
import { Swiper, SwiperSlide } from "swiper/react";

export function CareerModal({ careerModal, setCareerModal }: { careerModal: boolean; setCareerModal: React.Dispatch<React.SetStateAction<boolean>> }) {
	ScrollHold(careerModal);

	return (
		<div
			className="fixed py-10 top-0 left-0 w-full h-full bg-[#000000db] flex items-center justify-center"
			onClick={(e: React.MouseEvent<HTMLDivElement>) => {
				if (e.target === e.currentTarget) {
					setCareerModal(false);
				}
			}}>
			<div className=" px-5 py-8 bg-[#1b1b1e] max-w-[600px] w-full h-full overflow-y-auto">
				<h1 className="content-title text-white">경기둘레길</h1>
				<div className="mt-10">
					<Swiper spaceBetween={40} slidesPerView={1}>
						<SwiperSlide>
							<div className="h-[300px] overflow-hidden rounded-[10px]">
								<img className="w-full h-full object-center object-cover" src="/images/ggtour/img_ggtour01.png" alt="" />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="h-[300px] overflow-hidden rounded-[10px]">
								<img className="w-full h-full object-center object-cover" src="/images/ggtour/img_ggtour02.png" alt="" />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="h-[300px] overflow-hidden rounded-[10px]">
								<img className="w-full h-full object-center object-cover" src="/images/ggtour/img_ggtour03.png" alt="" />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="h-[300px] overflow-hidden rounded-[10px]">
								<img className="w-full h-full object-center object-cover" src="/images/ggtour/img_ggtour04.png" alt="" />
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="mt-5">
					<div>
						<h2 className="content-title">사용언어</h2>
						<div className="flex gap-x-2.5 mt-3.5">
							<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px] md:text-[16px] text-[14px]">
								<div className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]">
									<img src="/images/icon_html.png" alt="" className="object-center object-contain w-full h-full" />
								</div>
								<span className="font-[700]">HTML</span>
							</div>
							<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px] md:text-[16px] text-[14px]">
								<div className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]">
									<img src="/images/icon_css.svg" alt="" className="object-center object-contain w-full h-full" />
								</div>
								<span className="font-[700]">CSS</span>
							</div>
							<div className="bg-white inline-flex items-center gap-x-1 px-2.5 py-1 rounded-[6px] md:text-[16px] text-[14px]">
								<div className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]">
									<img src="/images/icon_javascript.png" alt="" className="object-center object-contain w-full h-full" />
								</div>
								<span className="font-[700]">JavaScript</span>
							</div>
						</div>
					</div>

					<div className="mt-5">
						<h2 className="content-title">작업 페이지</h2>
						<ul className="dot">
							<li>메인페이지</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
