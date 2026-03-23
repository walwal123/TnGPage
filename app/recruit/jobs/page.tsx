"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import { useLanguage } from "@/lib/language-context";

export default function JobPostingPage() {
  const { t, language } = useLanguage();

  const tableDataKo = [
    {
      field: "재물 손해사정 조사직",
      requirements: [
        "손해사정사 자격증 보유자",
        "건축, 기계, 전기 관련 학과 출신",
        "국가자격증보유자(건축기사/산업기사/전기기사 등등)",
      ],
    },
    {
      field: "신체 손해사정 조사직",
      requirements: [
        "손해사정사 자격증 보유자",
        "법학, 보건, 간호 관련 학과 출신",
        "국가자격증보유자(간호사/방사선사/임상병리사 등)",
      ],
    },
    {
      field: "재물/신체/서면심사직",
      requirements: [
        "손해사정사 자격증 보유자",
        "건축, 기계, 법학, 보건 관련학과 출신",
        "국가자격증 보유자(건축기사/간호사 등)",
        "보험사, 손해사정회사심사직무 경험자",
      ],
    },
  ];

  const tableDataEn = [
    {
      field: "Property Loss Adjustment Investigator",
      requirements: [
        "Loss Adjuster Certificate Holder",
        "Architecture, Mechanical, Electrical Engineering majors",
        "National certificate holders (Architecture Engineer/Industrial Engineer/Electrical Engineer, etc.)",
      ],
    },
    {
      field: "Bodily Injury Loss Adjustment Investigator",
      requirements: [
        "Loss Adjuster Certificate Holder",
        "Law, Health, Nursing related majors",
        "National certificate holders (Nurse/Radiologist/Clinical Pathologist, etc.)",
      ],
    },
    {
      field: "Property/Bodily/Document Review",
      requirements: [
        "Loss Adjuster Certificate Holder",
        "Architecture, Mechanical, Law, Health related majors",
        "National certificate holders (Architecture Engineer/Nurse, etc.)",
        "Insurance company or loss adjustment company review experience",
      ],
    },
  ];

  const tableData = language === "ko" ? tableDataKo : tableDataEn;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative flex h-[280px] w-full items-center justify-center">
        <Image
          src="/images/recruit/mina-handshake.jpg"
          alt="Recruitment background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1a1a2e]/60" />
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">{t("recruit.jobs.hero")}</h1>
        </div>
      </section>

      {/* White gap */}
      <div className="h-24 bg-white" />

      {/* Main Content */}
      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Title */}
          <h2 className="text-center text-2xl font-bold text-[#1a1a2e] md:text-3xl">
            {t("recruit.jobs.title")}
          </h2>

          {/* Space between title and table */}
          <div className="h-24" />

          {/* Table Section */}
          <div className="mb-12">
            <h3 className="mb-6 text-xl font-bold text-[#1a1a2e]">{t("recruit.jobs.table.title")}</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1a1a2e]">
                    <th className="border-r border-white/30 px-4 py-4 text-center font-medium text-white">{t("recruit.jobs.table.field")}</th>
                    <th className="px-4 py-4 text-center font-medium text-white">{t("recruit.jobs.table.requirements")}</th>
                  </tr>
                </thead>
                <tbody className="text-[#555]">
                  {tableData.map((row, index) => (
                    <tr key={index} className="border-b border-[#e0e0e0]">
                      <td className="border-r border-[#e0e0e0] px-4 py-6 text-center align-top">{row.field}</td>
                      <td className="px-4 py-6 align-top">
                        <ul className="space-y-1">
                          {row.requirements.map((req, idx) => (
                            <li key={idx}>- {req}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Notice */}
          <p className="mb-6 text-center text-base text-[#555]">
            {t("recruit.jobs.notice")}
          </p>
          
          {/* How to Apply */}
          <div className="rounded border border-[#e0e0e0] bg-white p-6">
            <h4 className="mb-4 text-base font-bold text-[#1a1a2e]">{t("recruit.jobs.apply.title")}</h4>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-[#666]">
                {t("recruit.jobs.apply.desc")}
              </p>
              <a 
                href="https://www.jobkorea.co.kr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded bg-[#5a9bd4] px-6 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-[#4a8bc4]"
              >
                {t("recruit.jobs.apply.button")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-20 bg-white" />
    </main>
  );
}
