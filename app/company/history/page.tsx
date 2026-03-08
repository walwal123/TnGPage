"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";

const historyData = [
  {
    year: "2025",
    events: [
      { text: "삼성화재 최우수 손해사정법인(평가 1위)", company: "T&G" },
      { text: "9월,10월 최우수 친절법인 선정(메리츠 서면심사)", company: "T&G" },
    ],
    position: "right",
  },
  {
    year: "2024",
    events: [
      { text: "흥국화재 장기보상실 '2024년 인보험 서면심사' 최우수 법인 선정", company: "에이치앤티" },
      { text: "삼성화재 우수손해사정", company: "T&G" },
    ],
    position: "left",
  },
  {
    year: "2023",
    events: [
      { text: "우수손해사정 협력법인 감사패 수상(삼성화재 장기보험보상팀)", company: "T&G" },
    ],
    position: "right",
  },
  {
    year: "2020",
    events: [
      { text: "1분기 품질관리 캠페인 우수 성과 달성", company: "에이치앤티" },
      { text: "2분기 '품질관리 및 고객만족' 우수한 성과달성", company: "에이치앤티" },
    ],
    position: "left",
  },
  {
    year: "2018",
    events: [
      { text: "흥국화재 전속 지급심사 법인 H&T손해사정(주) 분리 설립", company: "" },
    ],
    position: "right",
  },
  {
    year: "2013",
    events: [
      { text: "사내 전산망 및 서버(DB) 구축, 개인정보보호 시스템 도입으로 IT 기반 업무환경 구축", company: "" },
    ],
    position: "left",
  },
  {
    year: "2008",
    events: [
      { text: "T&G손해사정(주) 설립 및 금융감독원 1·2·4종 손해사정업 등록", company: "" },
    ],
    position: "right",
  },
];

function TimelineItem({
  year,
  events,
  position,
  isLast = false,
}: {
  year: string;
  events: { text: string; company: string }[];
  position: "left" | "right";
  isLast?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex items-start">
      {/* Left content */}
      <div className={`w-1/2 pr-8 ${position === "left" ? "" : "invisible"}`}>
        {position === "left" && (
          <div className="text-right">
            <h3 className="mb-2 text-2xl font-bold text-[#1a1a2e] md:text-3xl">{year}</h3>
            {events.map((event, idx) => (
              <p key={idx} className="text-sm leading-relaxed text-[#333] md:text-base">
                {event.text}
                {event.company && (
                  <>
                    {" - "}
                    <span className="font-medium text-[#e87a1e]">{event.company}</span>
                  </>
                )}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Center - Timeline dot */}
      <div
        className="relative z-10 flex-shrink-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Outer glow effect on hover */}
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${isHovered
            ? "h-14 w-14 bg-gradient-to-br from-[#a8d4f5]/60 to-[#5a9bd4]/60"
            : "h-0 w-0"
            }`}
        />
        {/* Main circle */}
        <div
          className={`relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[3px] transition-all duration-300 ${isHovered
            ? "border-[#5a9bd4] bg-gradient-to-br from-[#a8d4f5] to-[#5a9bd4]"
            : "border-[#5a9bd4] bg-white"
            }`}
        />
        {!isLast && (
          <div className="absolute left-1/2 top-8 w-0.5 h-45 -translate-x-1/2 bg-[#5a9bd4]" />
        )}
      </div>

      {/* Right content */}
      <div className={`w-1/2 pl-8 ${position === "right" ? "" : "invisible"}`}>
        {position === "right" && (
          <div className="text-left">
            <h3 className="mb-2 text-2xl font-bold text-[#1a1a2e] md:text-3xl">{year}</h3>
            {events.map((event, idx) => (
              <p key={idx} className="text-sm leading-relaxed text-[#333] md:text-base">
                {event.text}
                {event.company && (
                  <>
                    {" - "}
                    <span className="font-medium text-[#e87a1e]">{event.company}</span>
                  </>
                )}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CompanyHistoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[280px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/company/sean-buildings.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#1a1a2e]/50" />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-3xl font-medium text-white md:text-4xl">{"업무경력"}</h1>
        </div>
      </section>

      {/* White gap */}
      <div className="h-16 bg-white" />

      {/* Timeline Section */}
      <section className="bg-white px-8 py-16 md:px-16 lg:px-24">
        <h2 className="mb-16 text-center text-3xl font-bold text-[#1a1a2e] md:text-4xl">
          {"회사 연혁"}
        </h2>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical line - from first dot to last dot */}

          {/* Timeline items */}
          <div className="space-y-24">
            {historyData.map((item, index) => (
              <TimelineItem
                key={item.year}
                year={item.year}
                events={item.events}
                position={item.position as "left" | "right"}
                isLast={index === historyData.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-20 bg-white" />
    </main>
  );
}
