interface CareerType {
	projectName: string;
	img?: string[];
	Language: string[];
	contribution: string;
	day: string;
	description: string;
	site?: string;
}

const CareerData: CareerType[] = [
	{
		projectName: "경기둘레길",
		img: ["/images/ggtour/img_ggtour01.png", "/images/ggtour/img_ggtour02.png", "/images/ggtour/img_ggtour03.png", "/images/ggtour/img_ggtour04.png"],
		Language: ["html", "css", "javascript"],
		contribution: "메인페이지 및 콘텐츠 페이지",
		day: "2022.03",
		description: "경기둘레길을 추천 및 설명해주는 반응형 웹사이트입니다.",
		site: "https://ggtour.or.kr/dulegil/main.do",
	},
	{
		projectName: "AIMS",
		img: ["/images/aims/img_aims01.png", "/images/aims/img_aims02.png", "/images/aims/img_aims03.png", "/images/aims/img_aims04.png"],
		Language: ["html", "css", "javascript"],
		contribution: "메인페이지/게시판/컨텐츠 페이지 퍼블리싱 작업 진행했습니다.",
		day: "2022.04",
		description: "aims 영문 반응형 웹사이트입니다.",
		site: "https://aims.campusasiaprogram.kr/eng/",
	},
	{
		projectName: "익스트레블",
		img: ["/images/extravel/img_extravel01.png", "/images/extravel/img_extravel02.png"],
		Language: ["html", "css", "javascript"],
		contribution: "전체 퍼블리싱 작업을 혼자 진행했습니다.",
		day: "2022.10",
		description: "여행 플랫폼 홈페이지이며, 반응형 웹사이트 입니다.",
	},
	{
		projectName: "오르머",
		Language: ["html", "css", "javascript"],
		contribution: "전체 퍼블리싱 작업을 혼자 진행했습니다.",
		day: "2022.11",
		description: "제주 오름 여행 플랫폼 홈페이지며, 반응형 웹사이트 입니다.",
	},
	{
		projectName: "한국민족문화대백과사전",
		img: ["/images/encykorea/img_encykorea01.png", "/images/encykorea/img_encykorea02.png", "/images/encykorea/img_encykorea03.png"],
		Language: ["html", "css", "javascript"],
		contribution: "메인페이지 작업을 진행했습니다.",
		day: "2022.11",
		description: "제주 오름 여행 플랫폼 홈페이지며, 반응형 웹사이트 입니다.",
		site: "https://encykorea.aks.ac.kr/",
	},

	{
		projectName: "소곳소곳 김포문화 재단",
		img: ["/images/gcf/img_gcf01.png", "/images/gcf/img_gcf02.png", "/images/gcf/img_gcf03.png", "/images/gcf/img_gcf04.png"],
		Language: ["html", "css", "javascript"],
		contribution: "메인페이지 지도영역 외 모든 페이지 작업 진행했습니다.",
		day: "2022.11",
		description: "김포지역내의 공간을 소개하는 웹사이트 입니다.",
		site: "https://sgsg.gcf.or.kr/gcf/index.do",
	},
	{
		projectName: "국가평생진흥원",
		img: ["/images/nile/img_nile01.png", "/images/nile/img_nile02.png", "/images/nile/img_nile03.png"],
		Language: ["html", "css", "javascript"],
		contribution: "메인페이지 및 컨텐츠 페이지 작업 하였습니다.",
		day: "2023.05",
		description: "국가평생진흥원 정보 공유 홈페이지 이며, 반응형 홈페이지입니다.",
		site: "https://www.nile.or.kr/index.do?lang=ko",
	},
	{
		projectName: "서울대 언어교육원",
		Language: ["vue", "css"],
		contribution: "문제풀이, 문제목록, 등급을 나타내는 페이지 등 다수의 애니메이션 등을 작업했습니다. ",
		day: "2023.05",
		description: "서울대에 다니는 외국인 학생들 대상으로 한국어를 스터디 할 수 있는 모바일 앱입니다.",
		site: "https://play.google.com/store/apps/details?id=com.snu.snu_basic_app",
	},
	{
		projectName: "도로위 히어로즈",
		img: ["/images/heroes/img_heroes01.png", "/images/heroes/img_heroes02.png", "/images/heroes/img_heroes03.png", "/images/heroes/img_heroes04.png"],
		Language: ["html", "css", "javascript"],
		contribution: "모든 페이지를 혼자 담당해서 작업했습니다.",
		day: "2023.05",
		description: "우리 일상을 움직이는 모빌리티 종사자분들의 선항 영향력을 널리 확산시키기 위해 만들어진 반응형 웹사이트 입니다.",
		site: "https://www.road-heroes.com/index.do",
	},
	{
		projectName: "경기도 DMZ",
		img: ["/images/dmz/img_dmz01.png", "/images/dmz/img_dmz02.png", "/images/dmz/img_dmz03.png", "/images/dmz/img_dmz04.png"],
		Language: ["html", "css", "javascript"],
		contribution: "여행, 추천, 예약등 서브페이지 및 상세페이지 작업 했습니다.",
		day: "2023.10",
		description: "DMZ자연과 각종 행사를 홍보하는 반응형 웹사이트 입니다.",
		site: "https://www.ggtour.or.kr/dmz/index.do",
	},
	{
		projectName: "문화캐미칼",
		img: ["/images/sealingm/img_sealingm01.png", "/images/sealingm/img_sealingm02.png"],
		Language: ["html", "scss", "javascript"],
		contribution: "모든 페이지를 혼자 담당해서 작업했습니다.",
		day: "2024.04",
		description: "MHC 기업 반응형 홈페이지 입니다.",
		site: "https://www.sealingm.com/main.do",
	},
	{
		projectName: "한국교원단체총연합회",
		img: ["/images/kfta/img_kfta01.png", "/images/kfta/img_kfta02.png"],
		Language: ["html", "scss", "javascript"],
		contribution: "메이페이지 및 서브페이지 작업했습니다.",
		day: "2024.08",
		description: "한국교원단체총연합회 반응형 홈페이지입니다.",
		site: "https://www.kfta.or.kr/index.do",
	},
	{
		projectName: "서울대 언어교육원 읽기앱",
		Language: ["vue", "scss"],
		contribution: "문제풀이, 문제목록, 등급을 나타내는 페이지 등 다수의 애니메이션 등을 작업했습니다. ",
		day: "2024.12",
		description: "서울대에 다니는 외국인 학생들 대상으로 읽기 전용 앱입니다.",
		site: "https://play.google.com/store/apps/details?id=com.snu.snu_read_app",
	},
	{
		projectName: "학부모온누리 리뉴얼",
		img: ["/images/parents/img_parents01.png", "/images/parents/img_parents02.png", "/images/parents/img_parents03.png", "/images/parents/img_parents04.png"],
		Language: ["html", "scss", "javascript"],
		contribution: "메인페이지, 연혁, 카드뉴스, 행사일정, 컨텐츠페이지 등을 작업했습니다.",
		day: "2025.03",
		description: "학부모 교육 자료 및 자녀 교육 정보를 제공하는 교육 사이트 입니다.",
		site: "https://www.parents.go.kr/index.do",
	},
];

export default CareerData;
