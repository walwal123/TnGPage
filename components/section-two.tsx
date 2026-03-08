"use client";

import { Atom, CalendarCheck, Handshake, Globe } from "lucide-react";
import { ArrowRight } from "lucide-react";

const coreValues = [
  {
    icon: Atom,
    titleEn: "Professionalism",
    titleKo: "전문가 그룹",
  },
  {
    icon: CalendarCheck,
    titleEn: "Trust",
    titleKo: "고객 신뢰",
  },
  {
    icon: Handshake,
    titleEn: "Innovation",
    titleKo: "디지털 도약",
  },
  {
    icon: Globe,
    titleEn: "Growth",
    titleKo: "신뢰와 함께 성장",
  },
];

export default function SectionTwo() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between">
      {/* Background - nasa earth from space */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/section-3-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-[#0a0a1a]/40" />
      </div>

      {/* Top text area */}
      <div className="relative z-10 px-12 pt-32 md:px-20 lg:px-28">
        <h2 className="mb-3 text-2xl font-medium leading-tight text-white md:text-3xl lg:text-4xl">
          {'미래로, 세계로 향하는 손해사정의 기준'}
        </h2>
        <p className="text-lg italic text-white/60 md:text-xl" style={{ fontFamily: "Georgia, serif" }}>
          {'T&G, Tomorrow and Global'}
        </p>
      </div>

      {/* Bottom - core values */}
      <div className="relative z-10 px-12 pb-20 md:px-20 lg:px-28">
        <h3 className="mb-6 text-xl font-medium text-white md:text-2xl">
          {'미래로 향하는 4개의 핵심가치'}
        </h3>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {coreValues.map((item) => (
            <div
              key={item.titleEn}
              className="group flex flex-col items-center justify-between gap-5 rounded-xl border border-white/20 bg-gradient-to-b from-[#4a7ab3]/70 to-[#3a5a8a]/70 px-6 py-10 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:from-[#5a8ac3]/80 hover:to-[#4a6a9a]/80"
            >
              <item.icon className="h-20 w-20 text-white/90" strokeWidth={1} />
              <div className="text-center">
                <p className="text-lg font-normal text-white md:text-xl">{item.titleEn}</p>
                <p className="mt-2 text-base text-white/70">{item.titleKo}</p>
              </div>
              <ArrowRight className="h-6 w-6 text-white/50 transition-colors duration-200 group-hover:text-white/90" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
