"use client";

import { useRef, useState } from "react";
import Navbar from "@/components/navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";

const historyData = [
  {
    year: "2008",
    events: [
      "T&G손해사정 설립",
      "사업영역 - 1종(재물), 2종(해상), 3종(자동차대물), 4종(신체) 손해사정",
      "고객사 - 흥국화재, 흥국생명",
    ],
  },
  {
    year: "2009",
    events: [
      "한화손보, AXA손보, 수협중앙회, 현대해상, 동부화재, MG손해보험, ACE손보, 더케이손보, 수협 손해사정위임계약 체결",
    ],
  },
  {
    year: "2011",
    events: ["농협손보, 새마을금고 손해사정위임계약 체결"],
  },
  {
    year: "2013",
    events: [
      "농협생명 손해사정위임계약 체결",
      "사내 전산인프라 구축",
      "(자체 DB 및 개인정보보호 시스템 도입, 업무전산시스템 본격운영)",
    ],
  },
  {
    year: "2014",
    events: ["메리츠화재, 롯데손보 손해사정위임계약 체결"],
  },
  {
    year: "2015",
    events: ["AIA손해보험 손해사정위임계약 체결"],
  },
  {
    year: "2016",
    events: ["삼성화재 손해사정위임계약 체결"],
  },
  {
    year: "2018",
    events: [
      "서면심사 전문 자매회사 H&T(에이치앤티)손해사정 설립",
      "자체 소비자보호센터 개소",
    ],
  },
  {
    year: "2019",
    events: ["AIG손해보험 손해사정위임계약 체결"],
  },
  {
    year: "2022",
    events: [
      "서면심사업무 본격진출",
      "(인보험 - 메리츠화재, 재물/배상책임보험 - 메리츠화재, 흥국화재)",
      "한국사회복지공제, 방산공제 손해사정위임계약 체결",
      "자매회사 엔파비와 고객콜센터 운영 업무협약 체결",
    ],
  },
  {
    year: "2023",
    events: [
      "DB손해보험 손해사정위임계약 체결",
      "인보험서면심사 확대 (고객사 메리츠화재, DB손보)",
    ],
  },
  {
    year: "2024",
    events: [
      "디지털손해사정업 본격진출",
      "(AI디지털손해사정 전문회사 AIMS와 업무협약)",
      "STARR Insurance 한국지점과 손해사정위임계약 체결",
    ],
  },
  {
    year: "2025",
    events: [
      "디지털손해사정 인보험서면심사 업무에 적용",
      "(AIMS, T&G, H&T 컨소시움)",
      "법무법인 도원과 업무협약 체결",
      "중국 삼성재산유한공사와 손해사정위임계약 체결",
    ],
  },
  {
    year: "2026",
    events: ["신한 EZ손해보험과 손해사정위임계약 체결"],
  },
];

function TimelineItem({
  year,
  events,
  isFirst,
  isLast,
  isHovered,
  onHover,
  onLeave,
}: {
  year: string;
  events: string[];
  isFirst: boolean;
  isLast: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className="relative flex flex-shrink-0 flex-col items-center"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Connecting lines - positioned outside the circle container */}
      <div className="absolute top-8 flex w-full items-center md:top-10">
        {/* Left line - hidden for first item */}
        {!isFirst && (
          <div className="absolute right-1/2 h-1 w-[calc(50%+48px)] bg-[#5a9bd4] md:w-[calc(50%+56px)]" />
        )}
        {/* Right line - hidden for last item */}
        {!isLast && (
          <div className="absolute left-1/2 h-1 w-[calc(50%+48px)] bg-[#5a9bd4] md:w-[calc(50%+56px)]" />
        )}
      </div>

      {/* Year circle with fill animation on hover */}
      <div className="relative z-10 flex items-center justify-center pt-2">
        {/* Circle with fill effect */}
        <div
          className={`relative flex h-16 w-16 items-center justify-center rounded-full border-4 transition-all duration-300 md:h-20 md:w-20 ${
            isHovered
              ? "border-[#e87a1e] bg-[#e87a1e] shadow-lg shadow-[#e87a1e]/30"
              : "border-[#5a9bd4] bg-white"
          }`}
        >
          <span
            className={`text-lg transition-all duration-300 md:text-xl ${
              isHovered ? "font-extrabold text-white" : "font-bold text-[#1a1a2e]"
            }`}
          >
            {year}
          </span>
        </div>
      </div>

      {/* Events box */}
      <div
        className={`mt-4 w-52 rounded-lg border p-4 transition-all duration-300 md:w-64 ${
          isHovered
            ? "border-[#5a9bd4]/50 bg-[#5a9bd4]/10 shadow-lg"
            : "border-[#5a9bd4]/30 bg-[#5a9bd4]/5"
        }`}
      >
        {events.map((event, idx) => (
          <p
            key={idx}
            className={`mb-2 text-xs leading-relaxed text-[#333] last:mb-0 md:text-sm ${
              isHovered ? "font-semibold" : "font-normal"
            }`}
            style={{ wordBreak: "keep-all" }}
          >
            {event}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function CompanyHistoryPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredYear, setHoveredYear] = useState<string | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex h-[280px] w-full items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/company/sean-buildings.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#1a1a2e]/60" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">업무경력</h1>
        </div>
      </section>

      {/* White gap */}
      <div className="h-32 bg-white" />

      {/* Timeline Section */}
      <section className="bg-white px-8 py-16 md:px-16">
        <h2 className="mb-4 text-center text-3xl font-bold text-[#1a1a2e] md:text-4xl">
          회사 연혁
        </h2>
        <p className="mb-12 text-center text-base text-[#666] md:text-lg" style={{ wordBreak: "keep-all" }}>
          T&G손해사정 고속 성장의 비결은 동반성장에 대한 고객의 굳은 신뢰였습니다.
        </p>

        {/* Horizontal Timeline with scroll */}
        <div className="relative mx-auto max-w-[calc(100%-100px)]">
          {/* Scroll buttons - positioned outside the container */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-14 top-10 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#5a9bd4] text-white shadow-lg transition-colors hover:bg-[#4a8bc4]"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-14 top-10 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#5a9bd4] text-white shadow-lg transition-colors hover:bg-[#4a8bc4]"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto pb-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="relative min-w-max px-4">
              {/* Timeline items */}
              <div className="relative flex gap-6 md:gap-8">
                {historyData.map((item, index) => (
                  <TimelineItem
                    key={item.year}
                    year={item.year}
                    events={item.events}
                    isFirst={index === 0}
                    isLast={index === historyData.length - 1}
                    isHovered={hoveredYear === item.year}
                    onHover={() => setHoveredYear(item.year)}
                    onLeave={() => setHoveredYear(null)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-32 bg-white" />
    </main>
  );
}
