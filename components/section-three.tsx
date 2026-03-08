"use client";

import { Flame, CarFront, PersonStanding, Users } from "lucide-react";

const businessAreas = [
  {
    icon: Flame,
    title: "재물 손해사정",
    desc: "화재·침수·시설 피해 등\n재산 손실 평가",
  },
  {
    icon: CarFront,
    title: "배상책임 손해사정",
    desc: "대인·대물 사고에 대한\n책임 범위 분석",
  },
  {
    icon: PersonStanding,
    title: "인보험 손해사정",
    desc: "의료,진단비,간병비 적\n정성 분석,조사",
  },
  {
    icon: Users,
    title: "보험금 산정 및 분쟁 대응",
    desc: "손해 검토후 합리적 보상 산출,\n보험 분쟁 관련 전문 의견 제공",
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
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-2xl font-medium leading-tight text-white md:text-3xl lg:text-4xl">
            <span className="text-[#e87a1e]">{'T&G'}</span>
            <span className="text-white">{' Group은 재물·배상·인보험 분야 전반을 아우르는'}</span>
            <br />
            <span className="text-white">{'전문 손해사정 그룹입니다.'}</span>
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
            {'각 '}
            <span className="font-medium text-[#e87a1e]">{'분야별 전문 법인'}</span>
            {'이 체계적인 역할 분담을 통해 '}
            <span className="font-medium text-[#e87a1e]">{'최적의 서비스'}</span>
            {'를 제공합니다.'}
          </p>
        </div>

        {/* Bottom icons area - 4 cards in a row, centered below text */}
        <div className="w-full max-w-5xl rounded-xl border border-white/10 bg-white/95 px-8 py-10 shadow-lg md:px-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
            {businessAreas.map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-28 w-28 items-center justify-center md:h-32 md:w-32">
                  <item.icon className="h-24 w-24 text-[#333] md:h-28 md:w-28" strokeWidth={0.7} />
                </div>
                <h3 className="text-lg font-medium text-[#1a1a2e] md:text-xl">{item.title}</h3>
                <p className="whitespace-pre-line text-sm leading-relaxed text-[#666] md:text-base">{item.desc}</p>
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
