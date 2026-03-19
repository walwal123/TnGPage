"use client";

import { FileCheck, Flame, Scale, HeartPulse, Wheat } from "lucide-react";

const businessAreas = [
  {
    icon: FileCheck,
    title: "간편 서면심사",
    desc: "신속 심사 전문가와 디지털 손해사정사의 협업으로 인보험, 재물보험, 배상책임보험의 간편 서면심사를 빠르고 정확하게 처리합니다.",
  },
  {
    icon: Flame,
    title: "재물보험손해사정",
    desc: "화재, 풍수해, 파손 등 재물보험 사고에 대해 분야별 전문가가 사고 원인과 손해액을 전문적으로 평가합니다.",
  },
  {
    icon: Scale,
    title: "배상책임/특종보험손해사정",
    desc: "법률과 의료 지식을 갖춘 전문가가 각종 배상책임보험 사고의 책임 여부와 손해액을 공정하게 평가합니다.",
  },
  {
    icon: HeartPulse,
    title: "인보험손해사정",
    desc: "전문 인력과 의료 협력 네트워크를 통해 상해, 질병, 후유장해 등 인보험 사고의 원인과 의료 적정성을 종합적으로 평가합니다.",
  },
  {
    icon: Wheat,
    title: "농작물보험",
    desc: "농작물 피해, 농기계 사고, 가축 폐사 등 농업 재해로 발생한 실제 손해액을 전문가가 평가합니다.",
  },
];

export default function SectionThree() {
  return (
    <div className="relative flex h-full w-full flex-col">
      {/* Background - rodeo meeting room */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/section-2-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-[#4a4a4a]/60 backdrop-blur-[2px]" />
      </div>

      {/* Content container - centered */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 md:px-16">
        {/* Top text area */}
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-2xl font-medium leading-tight text-white md:text-3xl lg:text-4xl">
            <span className="text-[#e87a1e]">{'T&G손해사정'}</span>
            <span className="text-white">{'은 '}</span>
            <span className="text-[#e87a1e]">{'손해보험'}</span>
            <span className="text-white">{'과 '}</span>
            <span className="text-[#e87a1e]">{'생명보험'}</span>
            <span className="text-white">{' 손해사정업무의 전문회사 입니다'}</span>
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
            {'각 '}
            <span className="font-medium text-[#e87a1e]">{'분야별 전문 법인'}</span>
            {'이 체계적인 역할 분담을 통해 '}
            <span className="font-medium text-[#e87a1e]">{'최적의 서비스'}</span>
            {'를 제공합니다.'}
          </p>
        </div>

        {/* Bottom icons area - 5 cards, centered below text */}
        <div className="w-full max-w-7xl rounded-xl border border-white/10 bg-white/95 px-10 py-12 shadow-lg md:px-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-10">
            {businessAreas.map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-24 w-24 items-center justify-center md:h-28 md:w-28">
                  <item.icon className="h-20 w-20 text-[#333] md:h-24 md:w-24" strokeWidth={0.7} />
                </div>
                <h3 className="text-sm font-medium text-[#1a1a2e] md:text-base">{item.title}</h3>
                <p className="text-xs leading-relaxed text-[#666] md:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 bg-[#1a1a2e]/80 px-8 py-4 text-center">
        <p className="text-sm text-white/60">
          &copy; {new Date().getFullYear()} T&G 손해사정 Group. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
