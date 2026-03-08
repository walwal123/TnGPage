"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
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

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Slide 1 - T&G 손해사정 파트너 */}
      <SlideWrapper index={0} current={currentSlide} bgImage="/images/slide-1.jpg" overlayColor="bg-[#1a1a2e]/50">
        <div className="flex h-full flex-col justify-center px-12 md:px-20 lg:px-28">
          <p className="mb-4 text-lg italic text-white/80 md:text-xl" style={{ fontFamily: "Georgia, serif" }}>
            Tomorrow & Global
          </p>
          <h2 className="mb-2 text-2xl font-normal leading-tight text-white md:text-3xl lg:text-4xl">
            {'대한민국 손해사정의 기준을 세우는 '}
            <span className="italic text-[#e87a1e]">No1.</span>
            {' 손해사정 파트너'}
          </h2>
          <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl xl:text-6xl">
            {'최고의 전문성으로 답하는 손해사정, '}
            <span className="text-[#e87a1e]">{'T&G'}</span>
            {' 손해사정 그룹'}
          </h1>
        </div>
      </SlideWrapper>

      {/* Slide 2 - 18년간 손해사정 한 길 + 보험사 로고 */}
      <SlideWrapper index={1} current={currentSlide} bgImage="/images/slide-2.jpg" overlayColor="bg-[#3a3a3a]/60">
        <div className="flex h-full flex-col px-12 pt-32 pb-16 md:px-20 lg:px-28">
          {/* Top content */}
          <div>
            <h1 className="mb-4 text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
              {'2008년 설립 이후 18년간 손해사정 한 길'}
            </h1>
            <p className="mb-2 text-lg font-normal text-white/90 md:text-xl">
              <span className="text-[#e87a1e]">{'인보험·재물·배상책임'}</span>
              {' 분야의 축적된 실무 노하우 보유'}
            </p>
            <p className="max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
              {'국내외 17개 보험사 및 공제기관과의 장기 위임계약을 통해 재물·배상책임·인보험'}
              <br />
              {'손해사정 전 영역에서 축적된 전문성을 입증해왔습니다.'}
            </p>
          </div>

          {/* Spacer to push content to bottom */}
          <div className="flex-1" />

          {/* Bottom - partner company logos - pushed near dot UI */}
          <div className="mb-4">
            <p className="mb-4 text-lg font-normal text-[#e87a1e] md:text-xl">
              {'국내 13개사 · 외국계 3개사 · 해외 1개사와 장기 위임 계약'}
            </p>
            {/* Logo image grid - actual insurance company logos with transparent background */}
            <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
              {[
                { src: "/images/partners/nh-insurance.png", alt: "NH농협손해보험" },
                { src: "/images/partners/db-insurance.png", alt: "DB손해보험" },
                { src: "/images/partners/lina-insurance.png", alt: "라이나손보" },
                { src: "/images/partners/kb-insurance.png", alt: "KB손해보험" },
                { src: "/images/partners/lotte-insurance.png", alt: "롯데손해보험" },
                { src: "/images/partners/shinhan-insurance.png", alt: "신한EZ손해보험" },
              ].map((logo) => (
                <div
                  key={logo.alt}
                  className="flex h-12 items-center justify-center md:h-14"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={140}
                    height={50}
                    className="h-10 w-auto object-contain md:h-12"
                  />
                </div>
              ))}
            </div>
            <p className="mt-2 text-right text-sm text-white/50">
              {'그 외 다수 보험사 자세히보기'}
            </p>
          </div>
        </div>
      </SlideWrapper>

      {/* Slide 3 - 전문 자격 전문가 그룹 + 4개 카드 */}
      <SlideWrapper index={2} current={currentSlide} bgImage="/images/slide-3.jpg" overlayColor="bg-[#5a5a5a]/50">
        <div className="flex h-full items-center justify-center px-8 md:px-16 lg:px-24">
          {/* Combined box - text + cards in one semi-transparent container */}
          <div className="mx-auto w-full max-w-5xl rounded-lg bg-[#6a6a6a]/80 px-8 py-10 backdrop-blur-sm md:px-12 md:py-12">
            {/* Top text */}
            <div className="mb-10 text-center">
              <h1 className="mb-4 text-2xl font-medium text-white md:text-3xl lg:text-4xl">
                {'분야별 '}
                <span className="text-[#e87a1e]">{'전문 자격'}</span>
                {'을 갖춘 손해사정 전문가 그룹'}
              </h1>
              <p className="text-sm leading-relaxed text-white/80 md:text-base lg:text-lg">
                {'손해사정, 의료, 건축, 기계, 자동차 분야 전문 자격 보유 인력이'}
                <br />
                {'협업하여 보다 정교한 손해사정 서비스를 수행합니다.'}
              </p>
            </div>

            {/* 4 expertise cards */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "손해사정 전문인력",
                  desc: "공인 손해사정사 및 분야별\n실무 전문가 구성",
                },
                {
                  icon: HeartPulse,
                  title: "의료 전문인력",
                  desc: "전문의·의학박사\n자문단 운영",
                },
                {
                  icon: HardHat,
                  title: "공학 전문인력",
                  desc: "건축·기계·자동차 분야 기술사\n및 기사 자격 보유",
                },
                {
                  icon: Award,
                  title: "국제 전문자격",
                  desc: "CFE · AIC · CPCU 등 국제\n손해사정 자격 보유",
                },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center gap-3 text-center">
                  <div className="flex h-20 w-20 items-center justify-center md:h-24 md:w-24">
                    <item.icon className="h-16 w-16 text-white/90 md:h-20 md:w-20" strokeWidth={0.8} />
                  </div>
                  <h3 className="text-base font-medium text-white md:text-lg">{item.title}</h3>
                  <p className="whitespace-pre-line text-xs leading-relaxed text-white/70 md:text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SlideWrapper>

      {/* Slide 4 - 전국 단위 네트워크 (background image only, no SVG map) */}
      <SlideWrapper index={3} current={currentSlide} bgImage="/images/slide-4.jpg" overlayColor="bg-[#2a4a6e]/40">
        <div className="flex h-full flex-col px-12 pt-32 pb-16 md:px-20 lg:px-28">
          {/* Top text */}
          <div>
            <h1 className="mb-4 text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
              {'전국 단위 손해사정 수행 체계'}
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
              {'전국 단위 위임 수행이 가능한 조직 인프라를 기반으로'}
              <br />
              {'안정적인 손해사정 서비스를 제공합니다.'}
            </p>
          </div>

          {/* Spacer to push content to bottom */}
          <div className="flex-1" />

          {/* Bottom text - pushed near dot UI */}
          <div className="mb-4">
            <p className="text-2xl font-normal text-white md:text-3xl">
              <span className="font-medium text-[#e87a1e]">11개</span>
              {'의 거점'}
            </p>
            <p className="text-2xl font-normal text-white md:text-3xl">
              <span className="font-medium text-[#e87a1e]">500명</span>
              {'의 인력, 법률 네트워크'}
            </p>
          </div>
        </div>
      </SlideWrapper>

      {/* Slide 5 - 미래 선도 */}
      <SlideWrapper index={4} current={currentSlide} bgImage="/images/slide-5.jpg" overlayColor="bg-[#2a2a2a]/65">
        <div className="flex h-full flex-col items-center justify-center px-12 md:px-20 lg:px-28">
          <h1 className="mb-8 text-center text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
            {'손해사정 업무의 미래를 선도합니다'}
          </h1>
          <div className="max-w-4xl text-center">
            <p className="text-xl leading-relaxed text-white/90 md:text-2xl lg:text-3xl">
              <span className="font-medium text-[#e87a1e]">{'디지털 기술(AIMS)'}</span>
              {'에 '}
              <span className="font-medium text-[#4a9eff]">{'법률적 전문성(법무법인 도원)'}</span>
              {'을 더했습니다.'}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/80 md:text-xl lg:text-2xl">
              {'가장 스마트하고 믿음직한 파트너, 티앤지손해사정이 앞서 나갑니다.'}
            </p>
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
              index === currentSlide
                ? "scale-110 bg-white"
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`슬라이드 ${index + 1}`}
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
