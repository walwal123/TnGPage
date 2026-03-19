"use client";

import { useState, useEffect, useCallback } from "react";
import { ShieldCheck, HeartPulse, HardHat, Award } from "lucide-react";

const TOTAL_SLIDES = 5;
const AUTO_INTERVAL = 5000;

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % TOTAL_SLIDES);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Slide 1 text content - stored as variables for encoding stability
  const slideOneTitle = String.raw`대한민국 손해사정의 기준을 세우고 미래를 준비하는 당신의 든든한 손해사정 파트너`;
  const slideOneQuote = String.raw`전문성의 깊이가 손해사정 결과의 차이를 만듭니다`;

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Slide 1 */}
      <SlideWrapper index={0} current={currentSlide} bgImage="/images/slide-1.jpg" overlayColor="bg-[#1a1a2e]/50">
        <div className="flex h-full flex-col justify-center px-12 md:px-20 lg:px-28">
          <p className="mb-4 text-xl italic text-white/80 md:text-2xl lg:text-3xl" style={{ fontFamily: "Georgia, serif" }}>
            Tomorrow &amp; Global
          </p>
          <h2 className="mb-2 text-xl font-normal leading-tight text-white md:text-2xl lg:text-3xl">
            {slideOneTitle}, <span className="text-[#e87a1e]">T&amp;G</span> 손해사정
          </h2>
          <h1 className="text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl xl:text-5xl">
            &ldquo;<span className="text-[#e87a1e]">{slideOneQuote.split("가")[0]}</span>가{slideOneQuote.split("가").slice(1).join("가")}&rdquo;
          </h1>
        </div>
      </SlideWrapper>

      {/* Slide 2 */}
      <SlideWrapper index={1} current={currentSlide} bgImage="/images/slide-2.jpg" overlayColor="bg-[#3a3a3a]/60">
        <div className="flex h-full flex-col px-12 pt-32 pb-16 md:px-20 lg:px-28">
          <div>
            <h1 className="mb-4 text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
              고객의 믿음과 전문성으로 고객과 함께한 성장 역사
            </h1>
            <p className="max-w-4xl text-sm leading-relaxed text-white/80 md:text-base lg:text-lg">
              손해사정분야 최고의 전문성으로 국내외 <span className="text-[#e87a1e] font-medium">18개 보험사</span> 및 <span className="text-[#e87a1e] font-medium">협회/공제기관</span> 고객사들과 함께 하였습니다.
            </p>
          </div>
          <div className="flex-1" />
          <div className="mb-4">
            <p className="mb-4 text-2xl font-medium text-white md:text-3xl">
              <span className="text-[#e87a1e]">18+</span> 국내 보험사 및 공제기관 협력
            </p>
            <p className="text-base leading-relaxed text-white/80 md:text-lg lg:text-xl">
              삼성화재 · KB손해보험 · 메리츠화재 · 현대해상 · DB손해보험 · NH농협손해보험<br />
              한화손해보험 · 롯데손해보험 · AIG · STARR Insurance<br />
              수협 · 한국사회복지공제회 · 방산공제
            </p>
            <a href="/partners/status" className="mt-3 inline-block text-sm text-white/60 transition-colors hover:text-[#e87a1e]">
              그 외 다수 보험사 자세히보기 &rarr;
            </a>
          </div>
        </div>
      </SlideWrapper>

      {/* Slide 3 */}
      <SlideWrapper index={2} current={currentSlide} bgImage="/images/slide-3.jpg" overlayColor="bg-[#5a5a5a]/50">
        <div className="flex h-full items-center justify-center px-6 md:px-12 lg:px-16">
          <div className="mx-auto w-full max-w-6xl rounded-lg bg-[#5a5a5a]/85 px-10 py-10 backdrop-blur-sm md:px-16 md:py-12 lg:px-20 lg:py-14">
            <div className="mb-8 text-center md:mb-10">
              <h1 className="mb-5 text-2xl font-medium text-white md:text-3xl lg:text-4xl xl:text-5xl">
                분야별 <span className="text-[#e87a1e]">전문 자격</span>을 갖춘 손해사정 전문가 그룹
              </h1>
              <p className="text-base leading-relaxed text-white/80 md:text-lg lg:text-xl">
                손해사정, 의료, 건축, 기계, 자동차 분야 전문 자격 보유 인력이<br />
                협업하여 보다 정교한 손해사정 서비스를 수행합니다.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10 lg:gap-12">
              {[
                { icon: ShieldCheck, title: "손해사정사", desc: "재물손해사정사\n신체손해사정사\n자동차손해사정사\n농작물손해평가사\n손해사정보조인" },
                { icon: HeartPulse, title: "의료/법률 등 전문가", desc: "주요병원 의료전문 자문단\n간호사\n보험전문 법무법인 협업\n디지털손해사정 전문회사 협업" },
                { icon: HardHat, title: "기술/공학전문가", desc: "건축/기계등 공학전공/자격자\n자동차기능전공/자격자\n보험금융공학전공자" },
                { icon: Award, title: "국제인증자격", desc: "미국 화재폭발조사관(CFEI)\n미국 보험심사역(CPCU)\n미국 손해사정심사역(AIC)" },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-24 w-24 items-center justify-center md:h-28 md:w-28 lg:h-32 lg:w-32">
                    <item.icon className="h-20 w-20 text-white/90 md:h-24 md:w-24 lg:h-28 lg:w-28" strokeWidth={0.7} />
                  </div>
                  <h3 className="text-base font-medium text-white md:text-lg lg:text-xl">{item.title}</h3>
                  <p className="whitespace-pre-line text-xs leading-relaxed text-white/70 md:text-sm lg:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SlideWrapper>

      {/* Slide 4 */}
      <SlideWrapper index={3} current={currentSlide} bgImage="/images/slide-4.jpg" overlayColor="bg-[#2a4a6e]/40">
        <div className="flex h-full flex-col px-12 pt-32 pb-16 md:px-20 lg:px-28">
          <div>
            <h1 className="mb-4 text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
              전국 단위 손해사정 수행 체계
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
              전국 단위 위임 수행이 가능한 조직 인프라를 기반으로<br />
              안정적인 손해사정 서비스를 제공합니다.
            </p>
          </div>
          <div className="flex-1" />
          <div className="mb-4">
            <p className="text-2xl font-normal text-white md:text-3xl">
              전국 <span className="font-medium text-[#e87a1e]">12</span>개 지점과 사무소, <span className="font-medium text-[#e87a1e]">500</span>여명의 전문가에 의한 손해사정업무 제공
            </p>
            <p className="mt-2 text-sm text-white/60 md:text-base">
              (서울 종로, 서울 영등포, 인천, 안양, 남양주, 원주, 대전, 광주, 전주, 부산, 대구, 창원){" "}
              <a href="/company/expertise#infrastructure" className="text-white/50 transition-colors hover:text-[#e87a1e]">
                자세히보기 &rarr;
              </a>
            </p>
          </div>
        </div>
      </SlideWrapper>

      {/* Slide 5 */}
      <SlideWrapper index={4} current={currentSlide} bgImage="/images/slide-5.jpg" overlayColor="bg-[#2a2a2a]/65">
        <div className="flex h-full flex-col items-center justify-center px-12 md:px-20 lg:px-28">
          <h1 className="mb-8 text-center text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
            전문 파트너와 함께 최고의 손해사정회사로 미래를 준비합니다
          </h1>
          <div className="max-w-4xl text-center">
            <p className="text-xl leading-relaxed text-white/90 md:text-2xl lg:text-3xl">
              <span className="font-medium text-[#e87a1e]">디지털 기술(AIMS)</span>에 <span className="font-medium text-[#4a9eff]">법률적 전문성(법무법인 도원)</span>을 더했습니다.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/80 md:text-xl lg:text-2xl">
              가장 스마트하고 믿음직한 파트너, 티앤지손해사정이 앞서 나갑니다.
            </p>
            <div className="mt-10">
              <p className="mb-6 text-center text-lg font-medium tracking-wider text-white/70 md:text-xl">
                Trusted Partners
              </p>
              <div className="flex items-center justify-center gap-6 md:gap-10">
                <div className="flex items-center">
                  <span className="text-4xl font-light text-white/60 md:text-5xl">[</span>
                  <span className="mx-4 text-2xl font-bold tracking-wider text-[#1a1a1a] md:text-3xl lg:text-4xl">AIMS</span>
                  <span className="text-4xl font-light text-white/60 md:text-5xl">]</span>
                </div>
                <div className="flex items-center">
                  <span className="text-4xl font-light text-white/60 md:text-5xl">[</span>
                  <span className="mx-4 text-2xl font-bold tracking-wider text-[#1a6aba] md:text-3xl lg:text-4xl">DOWONLAWFIRM</span>
                  <span className="text-4xl font-light text-white/60 md:text-5xl">]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideWrapper>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "scale-110 bg-white" : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function SlideWrapper({
  index,
  current,
  bgImage,
  overlayColor,
  children,
}: {
  index: number;
  current: number;
  bgImage: string;
  overlayColor: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
        index === current ? "z-10 opacity-100" : "z-0 opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className={`absolute inset-0 ${overlayColor}`} />
      </div>
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
