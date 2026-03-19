"use client";

import { Handshake, Cpu, ShieldCheck, Plus } from "lucide-react";

export default function SectionTwo() {
  return (
    <div className="relative flex h-full w-full flex-col">
      {/* Background - nasa earth from space */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/section-3-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-[#1a1a2e]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col px-8 pt-28 md:px-16 md:pt-32">
        {/* Top left text - original */}
        <div className="mb-6 text-left">
          <h2 className="mb-3 text-2xl font-medium leading-tight text-white md:text-3xl lg:text-4xl">
            {'미래로, 세계로 향하는 손해사정의 기준'}
          </h2>
          <p className="text-lg italic text-white/60 md:text-xl" style={{ fontFamily: "Georgia, serif" }}>
            {'T&G, Tomorrow and Global'}
          </p>
        </div>

        {/* Center content */}
        <div className="flex flex-1 flex-col items-center justify-center">
          {/* Subtitle and title */}
          <div className="mb-8 text-center md:mb-10">
            <p className="mb-3 text-base text-white/70 md:text-lg">
              {'고객의 신뢰와 최고의 전문성으로 미래를 만들어 갑니다.'}
            </p>
            <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              <span className="text-[#e87a1e]">{'현재'}</span>
              {'도 '}
              <span className="text-[#e87a1e]">{'미래'}</span>
              {'도 선택은 '}
              <span className="text-[#e87a1e]">{'T&G'}</span>
              {' 손해사정'}
            </h2>
          </div>

        {/* Three circles with arrows */}
        <div className="flex w-full max-w-6xl items-center justify-center gap-0">
          {/* Trust Circle */}
          <div className="flex flex-col items-center">
            <div className="flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full border-2 border-white/40 md:h-[280px] md:w-[280px] lg:h-[320px] lg:w-[320px]">
              <Handshake className="mb-4 h-12 w-12 text-[#4a9eff] md:h-16 md:w-16 lg:h-20 lg:w-20" strokeWidth={1.2} />
              <h3 className="text-xl font-semibold text-white md:text-2xl lg:text-3xl">{'Trust'}</h3>
              <p className="mt-3 text-center text-xs leading-relaxed text-white/80 md:text-sm lg:text-base">
                {'고객의 경험과'}
                <br />
                {'재선택으로 검증된'}
                <br />
                {'신뢰의 파트너'}
              </p>
            </div>
          </div>

          {/* Plus 1 */}
          <div className="z-10 -mx-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#333] md:-mx-5 md:h-12 md:w-12">
            <Plus className="h-5 w-5 text-white md:h-6 md:w-6" />
          </div>

          {/* Professional Circle - dashed */}
          <div className="flex flex-col items-center">
            <div className="flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full border-2 border-dashed border-white/40 md:h-[280px] md:w-[280px] lg:h-[320px] lg:w-[320px]">
              <ShieldCheck className="mb-4 h-12 w-12 text-[#4a9eff] md:h-16 md:w-16 lg:h-20 lg:w-20" strokeWidth={1.2} />
              <h3 className="text-lg font-semibold text-white md:text-xl lg:text-2xl">{'Professional'}</h3>
              <p className="mt-3 text-center text-xs leading-relaxed text-white/80 md:text-sm lg:text-base">
                {'믿고 맡길 수 있는'}
                <br />
                {'최고의 전문성'}
              </p>
            </div>
          </div>

          {/* Plus 2 */}
          <div className="z-10 -mx-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#333] md:-mx-5 md:h-12 md:w-12">
            <Plus className="h-5 w-5 text-white md:h-6 md:w-6" />
          </div>

          {/* Digital Circle */}
          <div className="flex flex-col items-center">
            <div className="flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full border-2 border-white/40 md:h-[280px] md:w-[280px] lg:h-[320px] lg:w-[320px]">
              <Cpu className="mb-4 h-12 w-12 text-[#4a9eff] md:h-16 md:w-16 lg:h-20 lg:w-20" strokeWidth={1.2} />
              <h3 className="text-xl font-semibold text-white md:text-2xl lg:text-3xl">{'Digital'}</h3>
              <p className="mt-3 text-center text-xs leading-relaxed text-white/80 md:text-sm lg:text-base">
                {'AI 손해사정 영역의'}
                <br />
                {'개척'}
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
