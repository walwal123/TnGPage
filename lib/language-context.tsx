"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "ko" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<string, Record<Language, string>> = {
  // Navbar menu items
  "nav.company": { ko: "회사소개", en: "Company" },
  "nav.company.info": { ko: "회사안내", en: "Company Info" },
  "nav.company.expertise": { ko: "회사전문성", en: "Expertise" },
  "nav.company.history": { ko: "회사연혁", en: "History" },
  "nav.company.location": { ko: "오시는길", en: "Location" },
  "nav.business": { ko: "사업분야", en: "Business" },
  "nav.business.overview": { ko: "업무안내", en: "Overview" },
  "nav.business.process": { ko: "업무절차", en: "Process" },
  "nav.branch": { ko: "지점현황", en: "Branches" },
  "nav.branch.info": { ko: "거점정보", en: "Branch Info" },
  "nav.partners": { ko: "협력사", en: "Partners" },
  "nav.partners.status": { ko: "협력사 현황", en: "Partner Status" },
  "nav.recruit": { ko: "채용정보", en: "Recruitment" },
  "nav.recruit.system": { ko: "인사시스템", en: "HR System" },
  "nav.recruit.jobs": { ko: "채용공고", en: "Job Openings" },
  "nav.logo": { ko: "T&G(티앤지) 손해사정", en: "T&G Loss Adjusting" },

  // Hero Slider - Slide 1
  "hero.slide1.tagline": { ko: "Tomorrow & Global", en: "Tomorrow & Global" },
  "hero.slide1.title": { ko: "대한민국 손해사정의 기준을 세우고 미래를 준비하는 당신의 든든한 손해사정 파트너", en: "Your reliable loss adjustment partner setting the standard and preparing for the future" },
  "hero.slide1.quote": { ko: "전문성의 깊이가 손해사정 결과의 차이를 만듭니다", en: "The depth of expertise makes the difference in loss adjustment results" },

  // Hero Slider - Slide 2
  "hero.slide2.title": { ko: "고객의 믿음과 전문성으로 고객과 함께한 성장 역사", en: "A History of Growth with Customers through Trust and Expertise" },
  "hero.slide2.desc": { ko: "손해사정분야 최고의 전문성으로 국내외", en: "With the highest expertise in loss adjustment, we work with" },
  "hero.slide2.insurers": { ko: "18개 보험사", en: "18 insurance companies" },
  "hero.slide2.associations": { ko: "협회/공제기관", en: "associations/mutual aid organizations" },
  "hero.slide2.together": { ko: "고객사들과 함께 하였습니다.", en: "domestically and internationally." },
  "hero.slide2.partnership": { ko: "국내 보험사 및 공제기관 협력", en: "Domestic insurance companies and mutual aid partnerships" },
  "hero.slide2.partners": { ko: "삼성화재 · KB손해보험 · 메리츠화재 · 현대해상 · DB손해보험 · NH농협손해보험\n한화손해보험 · 롯데손해보험 · AIG · STARR Insurance\n수협 · 한국사회복지공제회 · 방산공제", en: "Samsung Fire & Marine · KB Insurance · Meritz Fire · Hyundai Marine & Fire · DB Insurance · NH Nonghyup Insurance\nHanwha General Insurance · Lotte Insurance · AIG · STARR Insurance\nSuhyup · Korea Social Welfare Mutual Aid · Defense Industry Mutual Aid" },
  "hero.slide2.more": { ko: "그 외 다수 보험사 자세히보기", en: "View more insurance partners" },

  // Hero Slider - Slide 3
  "hero.slide3.title": { ko: "분야별 전문 자격을 갖춘 손해사정 전문가 그룹", en: "Expert Group with Professional Qualifications by Field" },
  "hero.slide3.desc": { ko: "손해사정, 의료, 건축, 기계, 자동차 분야 전문 자격 보유 인력이\n협업하여 보다 정교한 손해사정 서비스를 수행합니다.", en: "Professionals with qualifications in loss adjustment, medical, architecture, machinery, and automotive fields\ncollaborate to provide more sophisticated loss adjustment services." },
  "hero.slide3.adjuster.title": { ko: "손해사정사", en: "Loss Adjusters" },
  "hero.slide3.adjuster.desc": { ko: "재물손해사정사\n신체손해사정사\n자동차손해사정사\n농작물손해평가사\n손해사정보조인", en: "Property Loss Adjuster\nBodily Injury Adjuster\nAutomobile Loss Adjuster\nCrop Damage Assessor\nLoss Adjustment Assistant" },
  "hero.slide3.medical.title": { ko: "의료/법률 등 전문가", en: "Medical/Legal Experts" },
  "hero.slide3.medical.desc": { ko: "주요병원 의료전문 자문단\n간호사\n보험전문 법무법인 협업\n디지털손해사정 전문회사 협업", en: "Medical Advisory Panel at Major Hospitals\nNurses\nCollaboration with Insurance-specialized Law Firms\nCollaboration with Digital Loss Adjustment Companies" },
  "hero.slide3.tech.title": { ko: "기술/공학전문가", en: "Technical/Engineering Experts" },
  "hero.slide3.tech.desc": { ko: "건축/기계등 공학전공/자격자\n자동차기능전공/자격자\n보험금융공학전공자", en: "Architecture/Mechanical Engineering Majors/Certified\nAutomotive Technical Majors/Certified\nInsurance Financial Engineering Majors" },
  "hero.slide3.intl.title": { ko: "국제인증자격", en: "International Certifications" },
  "hero.slide3.intl.desc": { ko: "미국 화재폭발조사관(CFEI)\n미국 보험심사역(CPCU)\n미국 손해사정심사역(AIC)", en: "US Certified Fire & Explosion Investigator (CFEI)\nUS Chartered Property Casualty Underwriter (CPCU)\nUS Associate in Claims (AIC)" },

  // Hero Slider - Slide 4
  "hero.slide4.title": { ko: "전국 단위 손해사정 수행 체계", en: "Nationwide Loss Adjustment System" },
  "hero.slide4.desc": { ko: "전국 단위 위임 수행이 가능한 조직 인프라를 기반으로\n안정적인 손해사정 서비스를 제공합니다.", en: "Based on organizational infrastructure capable of nationwide operations,\nwe provide stable loss adjustment services." },
  "hero.slide4.network": { ko: "전국", en: "Nationwide" },
  "hero.slide4.branches": { ko: "개 지점과 사무소,", en: "branches and offices," },
  "hero.slide4.experts": { ko: "여명의 전문가에 의한 손해사정업무 제공", en: "experts providing loss adjustment services" },
  "hero.slide4.locations": { ko: "(서울 종로, 서울 영등포, 인천, 안양, 남양주, 원주, 대전, 광주, 전주, 부산, 대구, 창원)", en: "(Seoul Jongno, Seoul Yeongdeungpo, Incheon, Anyang, Namyangju, Wonju, Daejeon, Gwangju, Jeonju, Busan, Daegu, Changwon)" },
  "hero.slide4.more": { ko: "자세히보기", en: "Learn more" },

  // Hero Slider - Slide 5
  "hero.slide5.title": { ko: "전문 파트너와 함께 최고의 손해사정회사로 미래를 준비합니다", en: "Preparing for the Future as the Best Loss Adjustment Company with Professional Partners" },
  "hero.slide5.digital": { ko: "디지털 기술(AIMS)", en: "Digital Technology (AIMS)" },
  "hero.slide5.legal": { ko: "법률적 전문성(법무법인 도원)", en: "Legal Expertise (Dowon Law Firm)" },
  "hero.slide5.added": { ko: "에", en: "with" },
  "hero.slide5.combined": { ko: "을 더했습니다.", en: "combined." },
  "hero.slide5.tagline": { ko: "가장 스마트하고 믿음직한 파트너, 티앤지손해사정이 앞서 나갑니다.", en: "The smartest and most reliable partner, T&G Loss Adjustment leads the way." },
  "hero.slide5.partners": { ko: "Trusted Partners", en: "Trusted Partners" },

  // Section Two - Core Values
  "section2.title": { ko: "미래로, 세계로 향하는 손해사정의 기준", en: "Setting the Standard for Loss Adjustment toward the Future and the World" },
  "section2.subtitle": { ko: "T&G, Tomorrow and Global", en: "T&G, Tomorrow and Global" },
  "section2.desc": { ko: "고객의 신뢰와 최고의 전문성으로 미래를 만들어 갑니다.", en: "Creating the future with customer trust and the highest expertise." },
  "section2.main.present": { ko: "현재", en: "Present" },
  "section2.main.future": { ko: "미래", en: "Future" },
  "section2.main.choice": { ko: "도 선택은", en: "and" },
  "section2.main.company": { ko: "손해사정", en: "Loss Adjustment" },
  "section2.trust.title": { ko: "Trust", en: "Trust" },
  "section2.trust.desc": { ko: "고객의 경험과\n재선택으로 검증된\n신뢰의 파트너", en: "A trusted partner\nverified by customer experience\nand repeat selection" },
  "section2.professional.title": { ko: "Professional", en: "Professional" },
  "section2.professional.desc": { ko: "믿고 맡길 수 있는\n최고의 전문성", en: "The highest expertise\nyou can trust and rely on" },
  "section2.digital.title": { ko: "Digital", en: "Digital" },
  "section2.digital.desc": { ko: "AI 손해사정 영역의\n개척", en: "Pioneering AI\nloss adjustment" },

  // Section Three - Business Areas
  "section3.title.tng": { ko: "T&G손해사정", en: "T&G Loss Adjustment" },
  "section3.title.is": { ko: "은 ", en: " is " },
  "section3.title.property": { ko: "손해보험", en: "property insurance" },
  "section3.title.and": { ko: "과 ", en: " and " },
  "section3.title.life": { ko: "생명보험", en: "life insurance" },
  "section3.title.expert": { ko: " 손해사정업무의 전문회사 입니다", en: " loss adjustment specialist company" },
  "section3.subtitle.each": { ko: "각 ", en: "Each " },
  "section3.subtitle.specialized": { ko: "분야별 전문 법인", en: "specialized corporation by field" },
  "section3.subtitle.systematic": { ko: "이 체계적인 역할 분담을 통해 ", en: " provides " },
  "section3.subtitle.optimal": { ko: "최적의 서비스", en: "optimal service" },
  "section3.subtitle.provides": { ko: "를 제공합니다.", en: " through systematic role division." },
  "section3.simple.title": { ko: "간편 서면심사", en: "Simple Document Review" },
  "section3.simple.desc": { ko: "신속 심사 전문가와 디지털 손해사정사의 협업으로 인보험, 재물보험, 배상책임보험의 간편 서면심사를 빠르고 정확하게 처리합니다.", en: "Quick and accurate processing of simple document reviews for personal insurance, property insurance, and liability insurance through collaboration between rapid review experts and digital loss adjusters." },
  "section3.property.title": { ko: "재물보험손해사정", en: "Property Insurance Loss Adjustment" },
  "section3.property.desc": { ko: "화재, 풍수해, 파손 등 재물보험 사고에 대해 분야별 전문가가 사고 원인과 손해액을 전문적으로 평가합니다.", en: "Field experts professionally evaluate accident causes and damage amounts for property insurance accidents such as fire, flood damage, and breakage." },
  "section3.liability.title": { ko: "배상책임/특종보험손해사정", en: "Liability/Specialty Insurance Loss Adjustment" },
  "section3.liability.desc": { ko: "법률과 의료 지식을 갖춘 전문가가 각종 배상책임보험 사고의 책임 여부와 손해액을 공정하게 평가합니다.", en: "Experts with legal and medical knowledge fairly evaluate liability and damage amounts for various liability insurance accidents." },
  "section3.personal.title": { ko: "인보험손해사정", en: "Personal Insurance Loss Adjustment" },
  "section3.personal.desc": { ko: "전문 인력과 의료 협력 네트워크를 통해 상해, 질병, 후유장해 등 인보험 사고의 원인과 의료 적정성을 종합적으로 평가합니다.", en: "Comprehensively evaluating causes and medical appropriateness of personal insurance accidents such as injuries, diseases, and disabilities through professional staff and medical cooperation networks." },
  "section3.agriculture.title": { ko: "농작물보험", en: "Agricultural Insurance" },
  "section3.agriculture.desc": { ko: "농작물 피해, 농기계 사고, 가축 폐사 등 농업 재해로 발생한 실제 손해액을 전문가가 평가합니다.", en: "Experts evaluate actual damage amounts from agricultural disasters such as crop damage, farm machinery accidents, and livestock death." },

  // Footer
  "footer.copyright": { ko: "T&G 손해사정 Group. All Rights Reserved.", en: "T&G Loss Adjustment Group. All Rights Reserved." },

  // Company Info Page
  "company.info.hero": { ko: "회사안내", en: "Company Info" },
  "company.info.slogan.label": { ko: "Company Slogan", en: "Company Slogan" },
  "company.info.slogan.line1": { ko: "대한민국 손해사정의 기준을 만들어가는", en: "Creating the standard for loss adjustment in Korea" },
  "company.info.slogan.line2": { ko: "Number 1 손해사정 파트너", en: "Number 1 Loss Adjustment Partner" },
  "company.info.expertise": { ko: "전문성", en: "Expertise" },
  "company.info.expertise.desc": { ko: "으로 고객에 만족을 드립니다", en: " brings customer satisfaction" },
  "company.info.trust.quote": { ko: "고객 신뢰와 함께하는 든든한 동반자 T&G손해사정", en: "T&G Loss Adjustment - A reliable partner with customer trust" },
  "company.info.values.title": { ko: "Trust & Growth, 신뢰로 함께 성장하는 가치", en: "Trust & Growth, Values Growing Together with Trust" },
  "company.info.professionalism": { ko: "Professionalism", en: "Professionalism" },
  "company.info.professionalism.label": { ko: " (전문가 그룹):", en: " (Expert Group):" },
  "company.info.professionalism.desc": { ko: "체계적인 교육과 보상 시스템을 통해 전 직원을\n최정예 손해사정 전문가로 육성합니다.", en: "Through systematic training and compensation systems,\nwe cultivate all employees as top loss adjustment experts." },
  "company.info.trust": { ko: "Trust", en: "Trust" },
  "company.info.trust.label": { ko: " (고객 신뢰):", en: " (Customer Trust):" },
  "company.info.trust.desc": { ko: "투명하고 공정한 평가 프로세스를 구축하여 업계 최고의 고객 만족도를 실천합니다.", en: "We practice industry-leading customer satisfaction by establishing transparent and fair evaluation processes." },
  "company.info.innovation": { ko: "Innovation", en: "Innovation" },
  "company.info.innovation.label": { ko: " (디지털 도약):", en: " (Digital Leap):" },
  "company.info.innovation.desc": { ko: "IT 인프라와 데이터 분석 기법을 도입하여 업무 효율성을 극대화하고\n손해사정 서비스의 디지털 전환을 선도합니다.", en: "We maximize operational efficiency by introducing IT infrastructure and data analysis techniques,\nleading the digital transformation of loss adjustment services." },
  "company.info.overview": { ko: "Overview", en: "Overview" },
  "company.info.name": { ko: "상호", en: "Company Name" },
  "company.info.name.value": { ko: "T&G손해사정주식회사", en: "T&G Loss Adjustment Co., Ltd." },
  "company.info.ceo": { ko: "대표이사", en: "CEO" },
  "company.info.ceo.value": { ko: "유정희", en: "Jung-hee Yoo" },
  "company.info.business": { ko: "영위업무", en: "Business Operations" },
  "company.info.business.value": { ko: "1,2,3,4종 손해사정", en: "Type 1,2,3,4 Loss Adjustment" },
  "company.info.established": { ko: "설립일", en: "Established" },
  "company.info.established.value": { ko: "2008년 9월 26일", en: "September 26, 2008" },
  "company.info.address": { ko: "주소", en: "Address" },
  "company.info.address.value": { ko: "서울시 종로구 창경궁로 109 (인의동)\n세운스퀘어 본관 6층", en: "Sewoon Square Main Building 6F,\n109 Changgyeonggung-ro, Jongno-gu, Seoul" },
  "company.info.structure": { ko: "그룹 구조", en: "Group Structure" },
  "company.info.structure.desc": { ko: "분야별 전문기업으로 손해사정업무를 리드하는", en: "Leading loss adjustment services with specialized companies by field" },
  "company.info.structure.group": { ko: "T&G손해사정 그룹", en: "T&G Loss Adjustment Group" },
  "company.info.structure.detail": { ko: "T&G손해사정, H&T손해사정, 엔파비는 분야별 전문성으로 고객의 최고 만족을 추구합니다", en: "T&G Loss Adjustment, H&T Loss Adjustment, and Enpaby pursue the highest customer satisfaction with field-specific expertise" },
  "company.info.tng.desc": { ko: "손해보험,생명보험, 보험계약자 등 열린고객사를 위한 손해사정 업무", en: "Loss adjustment services for open customers including property insurance, life insurance, and policyholders" },
  "company.info.tng.offices": { ko: "전국 12개 사무실", en: "12 offices nationwide" },
  "company.info.hnt.desc": { ko: "지정 보험사의 서면심사 손해사정 전문 업무", en: "Specialized document review loss adjustment for designated insurers" },
  "company.info.hnt.offices": { ko: "전국 6개 사무실", en: "6 offices nationwide" },
  "company.info.enpaby": { ko: "엔파비", en: "Enpaby" },
  "company.info.enpaby.desc": { ko: "전문인 리쿠르팅, 도급, 파견, 콜센터 운영", en: "Professional recruiting, contracting, dispatch, and call center operations" },
  "company.info.enpaby.staff": { ko: "50명", en: "50 staff" },
  "company.info.tng.services": { ko: "보험사고정보 입력 · 인보험서면심사 · 물보험서면심사 · 인보험현장조사 · 물보험현장조사 · 농작물보험 · 고객소비자보호센터", en: "Insurance accident info entry · Personal insurance document review · Property insurance document review · Personal insurance field investigation · Property insurance field investigation · Agricultural insurance · Customer consumer protection center" },
  "company.info.hnt.services": { ko: "보험사고정보입력 · 인보험서면심사", en: "Insurance accident info entry · Personal insurance document review" },
  "company.info.enpaby.services": { ko: "보험전문가 리쿠르팅 · 인력파견 및 관리 · 고객의 콜센터 수탁 운영", en: "Insurance expert recruiting · Staff dispatch and management · Customer call center operation" },

  // Company Expertise Page
  "company.expertise.hero": { ko: "회사 전문성", en: "Company Expertise" },
  "company.expertise.professionalism": { ko: "Company professionalism", en: "Company professionalism" },
  "company.expertise.title": { ko: "전문성이 곧 경쟁력, 업계를 선도하는 손해사정 전문 그룹", en: "Expertise is Competitiveness - The Leading Loss Adjustment Expert Group" },
  "company.expertise.subtitle": { ko: "숫자와 성과로 증명된 전문성", en: "Expertise Proven by Numbers and Performance" },
  "company.expertise.subtitle2": { ko: "손해사정 그룹의 역량입니다", en: "is the capability of the Loss Adjustment Group" },
  "company.expertise.strength": { ko: "강점 및 차별화된 서비스", en: "Strengths and Differentiated Services" },
  "company.expertise.strength.desc": { ko: "손해사정 GROUP 만의 핵심 경쟁력이 만드는 차이", en: "The difference made by the core competitiveness unique to the Loss Adjustment GROUP" },
  "company.expertise.ways": { ko: "특화된 강점", en: "Specialized Strengths" },
  "company.expertise.ways.subtitle": { ko: "T&G's 3 Ways", en: "T&G's 3 Ways" },

  // Company History Page
  "company.history.hero": { ko: "업무경력", en: "Business History" },
  "company.history.title": { ko: "회사 연혁", en: "Company History" },
  "company.history.desc": { ko: "T&G손해사정 고속 성장의 비결은 동반성장에 대한 고객의 굳은 신뢰였습니다.", en: "The secret to T&G Loss Adjustment's rapid growth was the firm trust of customers in mutual growth." },

  // Company Location Page
  "company.location.hero": { ko: "오시는길", en: "Location" },
  "company.location.address.title": { ko: "주소", en: "Address" },
  "company.location.address.value": { ko: "(도로명) 서울특별시 종로구 창경궁로 109", en: "(Road) 109 Changgyeonggung-ro, Jongno-gu, Seoul" },
  "company.location.transport.title": { ko: "대중교통 이용시", en: "Public Transportation" },
  "company.location.subway": { ko: "지하철", en: "Subway" },
  "company.location.bus": { ko: "버스", en: "Bus" },
  "company.location.village.bus": { ko: "마을버스", en: "Village Bus" },
  "company.location.line5": { ko: "5호선", en: "Line 5" },
  "company.location.line3": { ko: "3호선", en: "Line 3" },
  "company.location.line1": { ko: "1호선", en: "Line 1" },
  "company.location.exit4": { ko: "종로3가역 4번 출구 하차 후 도보 5분", en: "Exit 4 at Jongno 3-ga Station, 5 min walk" },
  "company.location.exit12": { ko: "종로3가역 12번 출구 하차 후 도보 7분", en: "Exit 12 at Jongno 3-ga Station, 7 min walk" },
  "company.location.bus.stop": { ko: "종묘, 창경궁 정류장 하차 후", en: "Get off at Jongmyo, Changgyeonggung stop" },
  "company.location.trunk": { ko: "간선", en: "Trunk" },
  "company.location.branch": { ko: "지선", en: "Branch" },
  "company.location.express": { ko: "직행", en: "Express" },
  "company.location.village": { ko: "마을", en: "Village" },
  "company.location.village.stop": { ko: "종묘 정류장 하차 후", en: "Get off at Jongmyo stop" },

  // Business Overview Page
  "business.overview.hero": { ko: "업무안내", en: "Business Overview" },
  "business.overview.title": { ko: "보험 손해사정의 전 과정을 책임지는 전문 파트너", en: "A Professional Partner Responsible for the Entire Insurance Loss Adjustment Process" },
  "business.overview.subtitle": { ko: "분야별 전문가가 손해사정의 모든 과정을 책임집니다", en: "Field experts are responsible for the entire loss adjustment process" },
  "business.overview.main": { ko: "주요 업무 안내", en: "Main Services" },
  "business.overview.simple.label": { ko: "업무 1 | 간편 심사 업무", en: "Service 1 | Simple Review" },
  "business.overview.simple.title": { ko: "간편 심사 업무", en: "Simple Review Service" },
  "business.overview.simple.desc": { ko: "인보험 및 재물, 배상책임보험의 간편서면심사업무를 신속하고 정확하게 처리하고 있으며 AI디지털손해사정시스템을 도입하여 미래를 준비하고 있습니다.", en: "We process simple document reviews for personal insurance, property, and liability insurance quickly and accurately, and are preparing for the future by introducing an AI digital loss adjustment system." },
  "business.overview.property.label": { ko: "업무 2 | 재물/배상책임/특종보험 현장조사", en: "Service 2 | Property/Liability/Specialty Insurance Field Investigation" },
  "business.overview.property.title": { ko: "재물/배상책임/특종보험 현장조사", en: "Property/Liability/Specialty Insurance Field Investigation" },
  "business.overview.property.desc": { ko: "건축/기계/토목/전기/자동차 등 전문기술자격보유 전문가와, 의료전문인력, 분야별 전공자가 사고현장을 방문하여 사고원인과 손해액을 전문적이고 공정하게 평가하고 있습니다. 또한 손해보험 법률전문 법무법인과의 협업으로 고객을 보호합니다.", en: "Experts with professional technical qualifications in architecture/machinery/civil engineering/electrical/automotive, medical professionals, and field specialists visit accident sites to professionally and fairly evaluate accident causes and damage amounts. We also protect customers through collaboration with law firms specializing in property insurance law." },
  "business.overview.personal.label": { ko: "업무 3 | 인보험 조사업무", en: "Service 3 | Personal Insurance Investigation" },
  "business.overview.personal.title": { ko: "인보험 조사업무", en: "Personal Insurance Investigation" },
  "business.overview.personal.desc": { ko: "질병/상해 등 인보험의 보험금 청구건에 대하여 의료전문인력 및 전문 경력 인력의 현장방문을 통해 의료기록, 사고와의 연관성 등을 확인합니다. 또한 대학병원 등 의료기관의 네트워크를 통해 손해사정의 정확성을 높이고 있습니다.", en: "For insurance claims related to illness/injury personal insurance, we verify medical records and accident relevance through field visits by medical professionals and experienced staff. We also improve the accuracy of loss adjustment through a network of medical institutions such as university hospitals." },
  "business.overview.agriculture.label": { ko: "업무 4 | 농작물재해보험 조사업무", en: "Service 4 | Agricultural Disaster Insurance Investigation" },
  "business.overview.agriculture.title": { ko: "농작물재해보험 조사업무", en: "Agricultural Disaster Insurance Investigation" },
  "business.overview.agriculture.desc": { ko: "재해로 인한 농작물, 가축, 시설 피해의 사고원인 조사와 손해액의 평가", en: "Investigation of accident causes and evaluation of damage amounts for crop, livestock, and facility damage due to disasters" },
  "business.overview.coverage": { ko: "처리 가능 보험 업무 범위", en: "Coverage of Insurance Services" },

  // Service Process Page
  "service.process.hero": { ko: "서비스 안내", en: "Service Guide" },
  "service.process.title": { ko: "손해사정 절차 안내", en: "Loss Adjustment Procedure Guide" },
  "service.process.subtitle": { ko: "보험 사고 발생 시, 손해사정은 이렇게 진행됩니다", en: "When an insurance accident occurs, loss adjustment proceeds as follows" },
  "service.process.step1.title": { ko: "사고 접수", en: "Accident Reception" },
  "service.process.step1.desc": { ko: "보험사 또는 고객으로부터 사고 및 보험금 청구 접수", en: "Receiving accident and insurance claim from insurer or customer" },
  "service.process.step2.title": { ko: "자료 검토 및 사실 확인", en: "Document Review & Fact Check" },
  "service.process.step2.desc": { ko: "청구 서류 및 사고 사실관계 검토", en: "Review of claim documents and accident facts" },
  "service.process.step3.title": { ko: "현장·전문 조사", en: "Field & Expert Investigation" },
  "service.process.step3.desc": { ko: "필요 시 현장 조사, 의료·기술 자문 수행", en: "Field investigation and medical/technical consultation as needed" },
  "service.process.step4.title": { ko: "손해 및 책임 분석", en: "Damage & Liability Analysis" },
  "service.process.step4.desc": { ko: "손해 범위, 책임 여부, 지급 사유 분석", en: "Analysis of damage scope, liability, and payment reasons" },
  "service.process.step5.title": { ko: "보험금 산정", en: "Insurance Calculation" },
  "service.process.step5.desc": { ko: "약관과 기준에 따른 합리적 보험금 산정", en: "Reasonable insurance calculation according to terms and standards" },
  "service.process.step6.title": { ko: "결과 보고 및 지급 검토", en: "Report & Payment Review" },
  "service.process.step6.desc": { ko: "손해사정 결과 보고 및 보험금 지급 판단 지원", en: "Loss adjustment result report and insurance payment decision support" },
  "service.process.banner.personal": { ko: "인보험", en: "Personal Insurance" },
  "service.process.banner.property": { ko: "재물보험", en: "Property Insurance" },
  "service.process.banner.liability": { ko: "배상책임보험", en: "Liability Insurance" },
  "service.process.banner.until": { ko: "까지,", en: ", and more" },
  "service.process.banner.all": { ko: "모든 손해사정은", en: "All loss adjustments are" },
  "service.process.banner.same": { ko: "동일한 원칙", en: "same principles" },
  "service.process.banner.and": { ko: "과", en: "and" },
  "service.process.banner.standard": { ko: "기준", en: "standards" },
  "service.process.banner.processed": { ko: "으로 진행됩니다", en: "" },

  // Branch Info Page
  "branch.info.hero": { ko: "거점정보", en: "Branch Info" },
  "branch.info.title": { ko: "전국 단위 손해사정 수행 인프라", en: "Nationwide Loss Adjustment Infrastructure" },
  "branch.info.branches": { ko: "11개 거점 · 500여 명 전문 인력", en: "11 branches · 500+ professionals" },
  "branch.info.desc": { ko: "전국 커버 가능한 조직 체계와 전문인력", en: "Organizational system and professionals capable of nationwide coverage" },
  "branch.info.team": { ko: "팀명", en: "Team Name" },
  "branch.info.work": { ko: "업무", en: "Work" },
  "branch.info.location": { ko: "소재지", en: "Location" },
  "branch.info.hq": { ko: "본사", en: "Headquarters" },
  "branch.info.consumer": { ko: "소비자보호센터", en: "Consumer Protection Center" },
  "branch.info.cities": { ko: "서울, 인천, 남양주, 수원, 강릉, 대전, 전주, 광주, 대구, 부산, 창원 총 11개의 거점", en: "11 branches total: Seoul, Incheon, Namyangju, Suwon, Gangneung, Daejeon, Jeonju, Gwangju, Daegu, Busan, Changwon" },

  // Partners Status Page
  "partners.status.hero": { ko: "협력사 현황", en: "Partner Status" },
  "partners.status.title": { ko: "국내외", en: "Strategic partnership delegation with" },
  "partners.status.count": { ko: "17", en: "17" },
  "partners.status.partnership": { ko: "개 보험사와의 전략적 위임 파트너십", en: "domestic and international insurance companies" },
  "partners.status.desc": { ko: "다수의 보험사가 선택한, 검증된 수행 역량", en: "Proven performance capability chosen by many insurers" },
  "partners.status.domestic": { ko: "국내", en: "Domestic" },
  "partners.status.foreign": { ko: "해외", en: "International" },

  // Recruit System Page
  "recruit.system.hero": { ko: "인사 시스템", en: "HR System" },
  "recruit.system.title": { ko: "투명한 기준, 공정한 성장", en: "Transparent Standards, Fair Growth" },
  "recruit.system.desc1": { ko: "티앤지는 연차가 아닌", en: "T&G evaluates based on" },
  "recruit.system.performance": { ko: "성과와 역량", en: "performance and capability" },
  "recruit.system.desc2": { ko: "을 기준으로 평가하는", en: ", not years of service" },
  "recruit.system.merit": { ko: "능력 중심 인사 시스템", en: "Merit-based HR System" },
  "recruit.system.desc3": { ko: "을 운영합니다", en: "" },
  "recruit.system.kpi.title": { ko: "능력 위주의 성과 평가(KPI) 시스템", en: "Performance-based (KPI) Evaluation System" },
  "recruit.system.kpi.desc1": { ko: "티앤지는 직무별", en: "T&G uses" },
  "recruit.system.kpi.desc2": { ko: "핵심성과지표(KPI)", en: "Key Performance Indicators (KPI)" },
  "recruit.system.kpi.desc3": { ko: "를 기반으로", en: "by job function to" },
  "recruit.system.kpi.desc4": { ko: "개인의 업무 성과와 전문성을", en: "" },
  "recruit.system.kpi.desc5": { ko: "객관적으로 평가", en: "objectively evaluate" },
  "recruit.system.kpi.desc6": { ko: "합니다.", en: "individual work performance and expertise." },
  "recruit.system.kpi.transparent1": { ko: "평가 기준과 결과는 투명하게 관리되며,", en: "Evaluation criteria and results are managed transparently," },
  "recruit.system.kpi.transparent2": { ko: "성과는 보상과 승진에 직접적으로 반영됩니다.", en: "and performance is directly reflected in compensation and promotion." },
  "recruit.system.criteria1": { ko: "손해사정 정확도,\n심사 완성도", en: "Loss adjustment accuracy,\nReview completeness" },
  "recruit.system.criteria2": { ko: "처리 속도,\n일정 준수율", en: "Processing speed,\nSchedule compliance" },
  "recruit.system.criteria3": { ko: "자격, 교육 이수,\n실무 숙련도", en: "Qualifications, training,\nPractical proficiency" },
  "recruit.system.criteria4": { ko: "협업, 책임감,\n내부 기준 준수", en: "Collaboration, responsibility,\nCompliance with internal standards" },
  "recruit.system.promotion.title": { ko: "직무별 명확한 승진 체계", en: "Clear Promotion System by Job" },
  "recruit.system.promotion.desc1": { ko: "티앤지는 직무와 역할에 따라", en: "T&G has clearly" },
  "recruit.system.promotion.desc2": { ko: "단계별 성장 경로", en: "designed step-by-step growth paths" },
  "recruit.system.promotion.desc3": { ko: "가 명확히", en: "according to job and role" },
  "recruit.system.promotion.desc4": { ko: "설계", en: "" },
  "recruit.system.promotion.desc5": { ko: "되어 있습니다.", en: "." },
  "recruit.system.rank.staff": { ko: "사원", en: "Staff" },
  "recruit.system.rank.associate": { ko: "대리", en: "Associate" },
  "recruit.system.rank.manager": { ko: "과장", en: "Manager" },
  "recruit.system.rank.deputy": { ko: "차장", en: "Deputy GM" },
  "recruit.system.rank.director": { ko: "부장", en: "Director" },
  "recruit.system.bottom1": { ko: "공정한", en: "Fair" },
  "recruit.system.bottom.evaluation": { ko: "평가", en: "evaluation" },
  "recruit.system.bottom.and": { ko: "와 투명한", en: "and transparent" },
  "recruit.system.bottom.reward": { ko: "보상", en: "reward" },
  "recruit.system.bottom2": { ko: "실력 있는 사람이 성장하는 조직을 만듭니다", en: "We create an organization where talented people grow" },

  // Recruit Jobs Page
  "recruit.jobs.hero": { ko: "채용 공고", en: "Job Openings" },
  "recruit.jobs.title": { ko: "T&G손해사정과 함께 미래를 만들어 갈 인재를 모십니다", en: "We are looking for talents to build the future with T&G Loss Adjustment" },
  "recruit.jobs.table.title": { ko: "모집부분 및 자격요건", en: "Recruitment Areas and Qualifications" },
  "recruit.jobs.table.field": { ko: "모집분야", en: "Field" },
  "recruit.jobs.table.requirements": { ko: "우대 사항", en: "Preferred Qualifications" },
  "recruit.jobs.property": { ko: "재물 손해사정 조사직", en: "Property Loss Adjustment Investigator" },
  "recruit.jobs.bodily": { ko: "신체 손해사정 조사직", en: "Bodily Injury Loss Adjustment Investigator" },
  "recruit.jobs.review": { ko: "재물/신체/서면심사직", en: "Property/Bodily/Document Review" },
  "recruit.jobs.notice": { ko: "세부 모집분야 및 조건은 아래 채용공고를 참조해 주십시오", en: "Please refer to the job posting below for detailed recruitment areas and conditions" },
  "recruit.jobs.apply.title": { ko: "지원 방법", en: "How to Apply" },
  "recruit.jobs.apply.desc": { ko: "채용공고 확인 후 지원해 주세요", en: "Please apply after checking the job posting" },
  "recruit.jobs.apply.button": { ko: "잡코리아 채용공고 바로가기", en: "Go to JobKorea Job Posting" },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ko");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "ko" || saved === "en")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Missing translation for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  // Prevent hydration mismatch by returning ko during SSR
  const value = {
    language: mounted ? language : "ko",
    setLanguage,
    t: mounted ? t : (key: string) => translations[key]?.ko || key,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
