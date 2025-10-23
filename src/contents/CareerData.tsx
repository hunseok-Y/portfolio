interface CareerType {
	projectName: string;
	img: string[];
	Language: string[];
	contribution: string;
	day: string;
	description: string;
}

const CareerData: CareerType[] = [
	{
		projectName: "경기둘레길",
		img: ["/images/ggtour/img_ggtour01.png", "/images/ggtour/img_ggtour02.png", "/images/ggtour/img_ggtour03.png", "/images/ggtour/img_ggtour04.png"],
		Language: ["html", "css", "javascript"],
		contribution: "메인페이지 및 콘텐츠 페이지",
		day: "2022.03",
		description: "경기둘레길을 추천 및 설명해주는 반응형 웹사이트입니다.",
	},
	{
		projectName: "AIMS",
		img: ["/images/aims/img_aims01.png", "/images/aims/img_aims02.png", "/images/aims/img_aims03.png", "/images/aims/img_aims04.png"],
		Language: ["html", "css", "javascript"],
		contribution: "메인페이지/게시판/컨텐츠 페이지 퍼블리싱 작업 진행했습니다.",
		day: "2022.04",
		description: "aims 영문 반응형 웹사이트입니다.",
	},
	{
		projectName: "익스트레블",
		img: ["/images/no_image.svg", "/images/no_image.svg", "/images/no_image.svg", "/images/no_image.svg"],
		Language: ["html", "css", "javascript"],
		contribution: "전체 페이지 퍼브리싱 작업 혼자 진행했습니다.",
		day: "2022.10",
		description: "여행 플랫폼 반응형 웹사이트 입니다.",
	},
];

export default CareerData;
