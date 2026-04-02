"use client";

import Image from "next/image";
import { FileText, Clock, Award, Users, User, UserCheck, Briefcase, Building, Crown } from "lucide-react";
import Navbar from "@/components/navbar";
import { useLanguage } from "@/lib/language-context";

export default function HRSystemPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[180px] w-full md:h-[220px]">
        <Image
          src="/images/recruit/mina-handshake.jpg"
          alt={t("recruit.system.hero")}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl font-medium text-white md:text-3xl lg:text-4xl">{t("recruit.system.hero")}</h1>
        </div>
      </section>

      {/* 투명한 기준, 공정한 성장 Section */}
      <section className="px-4 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-3 text-xl font-bold text-[#1a1a2e] md:mb-4 md:text-2xl lg:text-3xl">
            {t("recruit.system.title")}
          </h2>
          <p className="text-sm text-[#666] md:text-base">
            {t("recruit.system.desc1")}
            <span className="text-[#5a9bd4]"> {t("recruit.system.performance")}</span>
            {t("recruit.system.desc2")}
          </p>
          <p className="text-sm text-[#666] md:text-base">
            <span className="text-[#5a9bd4]">{t("recruit.system.merit")}</span>
            {t("recruit.system.desc3")}
          </p>
        </div>
      </section>

      {/* KPI System Section - Two Images */}
      <section className="flex w-full flex-col lg:flex-row">
        {/* Left - Description with dark gray background */}
        <div className="flex h-[280px] w-full items-center justify-center bg-[#4a4a4a] md:h-[350px] lg:w-1/2">
          <div className="px-4 text-center text-white md:px-8">
            <p className="text-base leading-relaxed md:text-lg lg:text-xl">
              {t("recruit.system.kpi.desc1")}
              <span className="text-[#5a9bd4]"> {t("recruit.system.kpi.desc2")}</span>
              {t("recruit.system.kpi.desc3")}
            </p>
            <p className="text-base leading-relaxed md:text-lg lg:text-xl">
              {t("recruit.system.kpi.desc4")}
              <span className="text-[#5a9bd4]"> {t("recruit.system.kpi.desc5")}</span>
              {t("recruit.system.kpi.desc6")}
            </p>
            <p className="mt-3 text-base leading-relaxed md:mt-4 md:text-lg lg:text-xl">
              {t("recruit.system.kpi.transparent1")}
            </p>
            <p className="text-base leading-relaxed md:text-lg lg:text-xl">
              {t("recruit.system.kpi.transparent2")}
            </p>
          </div>
        </div>

        {/* Right - KPI System with chart background */}
        <div className="relative flex h-[200px] w-full items-center justify-center md:h-[350px] lg:w-1/2">
          <Image
            src="/images/recruit/jakub-chart.jpg"
            alt={t("recruit.system.kpi.title")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 px-4 text-right text-white md:px-8">
            <h3 className="text-xl font-bold md:text-2xl lg:text-3xl">
              <span className="text-[#5a9bd4]">{t("recruit.system.kpi.title").split(" ")[0]}</span>
              {" "}{t("recruit.system.kpi.title").split(" ").slice(1).join(" ")}
            </h3>
          </div>
        </div>
      </section>

      {/* KPI Evaluation Criteria */}
      <section className="border-t border-b border-[#e0e0e0] bg-white px-4 py-8 md:px-8 md:py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f0f0] md:mb-4 md:h-16 md:w-16">
              <FileText className="h-6 w-6 text-[#666] md:h-8 md:w-8" strokeWidth={1.5} />
            </div>
            <p className="text-xs text-[#666] whitespace-pre-line md:text-sm">{t("recruit.system.criteria1")}</p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f0f0] md:mb-4 md:h-16 md:w-16">
              <Clock className="h-6 w-6 text-[#666] md:h-8 md:w-8" strokeWidth={1.5} />
            </div>
            <p className="text-xs text-[#666] whitespace-pre-line md:text-sm">{t("recruit.system.criteria2")}</p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f0f0] md:mb-4 md:h-16 md:w-16">
              <Award className="h-6 w-6 text-[#666] md:h-8 md:w-8" strokeWidth={1.5} />
            </div>
            <p className="text-xs text-[#666] whitespace-pre-line md:text-sm">{t("recruit.system.criteria3")}</p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f0f0] md:mb-4 md:h-16 md:w-16">
              <Users className="h-6 w-6 text-[#666] md:h-8 md:w-8" strokeWidth={1.5} />
            </div>
            <p className="text-xs text-[#666] whitespace-pre-line md:text-sm">{t("recruit.system.criteria4")}</p>
          </div>
        </div>
      </section>

      {/* 직무별 명확한 승진 체계 Section */}
      <section className="bg-white px-4 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-xl font-bold text-[#1a1a2e] md:text-2xl lg:text-3xl">
            {t("recruit.system.promotion.title")}
          </h2>
          <p className="mb-8 text-xs text-[#666] md:mb-12 md:text-base">
            {t("recruit.system.promotion.desc1")}
            <span className="text-[#5a9bd4]"> {t("recruit.system.promotion.desc2")}</span>
            {t("recruit.system.promotion.desc3")}
            <span className="text-[#5a9bd4]">{t("recruit.system.promotion.desc4")}</span>
            {t("recruit.system.promotion.desc5")}
          </p>

          {/* Career Levels */}
          <div className="mb-10 bg-[#f5f5f5] px-4 py-8 md:mb-16 md:px-8 md:py-12">
            <div className="flex flex-wrap items-end justify-center gap-4 md:gap-8">
              {/* 사원 */}
              <div className="flex flex-col items-center">
                <div className="mb-2 flex gap-0.5">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="#f5a623" className="md:h-4 md:w-4">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                </div>
                <div className="flex h-[70px] w-[70px] flex-col items-center justify-center rounded-full bg-[#5a9bd4] md:h-[100px] md:w-[100px]">
                  <User className="h-7 w-7 text-white md:h-10 md:w-10" strokeWidth={1.5} />
                </div>
                <p className="mt-2 text-xs font-medium text-[#1a1a2e] md:mt-3 md:text-base">{t("recruit.system.rank.staff")}</p>
              </div>

              {/* 대리 */}
              <div className="flex flex-col items-center">
                <div className="mb-2 flex gap-0.5">
                  {[1,2].map(i => (
                    <svg key={i} width="12" height="12" viewBox="0 0 16 16" fill="#f5a623" className="md:h-4 md:w-4">
                      <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                    </svg>
                  ))}
                </div>
                <div className="flex h-[70px] w-[70px] flex-col items-center justify-center rounded-full bg-[#5a9bd4] md:h-[100px] md:w-[100px]">
                  <UserCheck className="h-7 w-7 text-white md:h-10 md:w-10" strokeWidth={1.5} />
                </div>
                <p className="mt-2 text-xs font-medium text-[#1a1a2e] md:mt-3 md:text-base">{t("recruit.system.rank.associate")}</p>
              </div>

              {/* 과장 */}
              <div className="flex flex-col items-center">
                <div className="mb-2 flex gap-0.5">
                  {[1,2,3].map(i => (
                    <svg key={i} width="12" height="12" viewBox="0 0 16 16" fill="#f5a623" className="md:h-4 md:w-4">
                      <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                    </svg>
                  ))}
                </div>
                <div className="flex h-[70px] w-[70px] flex-col items-center justify-center rounded-full bg-[#5a9bd4] md:h-[100px] md:w-[100px]">
                  <Briefcase className="h-7 w-7 text-white md:h-10 md:w-10" strokeWidth={1.5} />
                </div>
                <p className="mt-2 text-xs font-medium text-[#1a1a2e] md:mt-3 md:text-base">{t("recruit.system.rank.manager")}</p>
              </div>

              {/* 차장 */}
              <div className="flex flex-col items-center">
                <div className="mb-2 flex gap-0.5">
                  {[1,2,3,4].map(i => (
                    <svg key={i} width="12" height="12" viewBox="0 0 16 16" fill="#f5a623" className="md:h-4 md:w-4">
                      <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                    </svg>
                  ))}
                </div>
                <div className="flex h-[70px] w-[70px] flex-col items-center justify-center rounded-full bg-[#5a9bd4] md:h-[100px] md:w-[100px]">
                  <Building className="h-7 w-7 text-white md:h-10 md:w-10" strokeWidth={1.5} />
                </div>
                <p className="mt-2 text-xs font-medium text-[#1a1a2e] md:mt-3 md:text-base">{t("recruit.system.rank.deputy")}</p>
              </div>

              {/* 부장 */}
              <div className="flex flex-col items-center">
                <div className="mb-2 flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="12" height="12" viewBox="0 0 16 16" fill="#f5a623" className="md:h-4 md:w-4">
                      <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                    </svg>
                  ))}
                </div>
                <div className="flex h-[70px] w-[70px] flex-col items-center justify-center rounded-full bg-[#5a9bd4] md:h-[100px] md:w-[100px]">
                  <Crown className="h-7 w-7 text-white md:h-10 md:w-10" strokeWidth={1.5} />
                </div>
                <p className="mt-2 text-xs font-medium text-[#1a1a2e] md:mt-3 md:text-base">{t("recruit.system.rank.director")}</p>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="text-center">
            <p className="text-base font-medium text-[#1a1a2e] md:text-xl lg:text-2xl">
              &quot;{t("recruit.system.bottom1")}
              <span className="text-[#5a9bd4]"> {t("recruit.system.bottom.evaluation")}</span>
              {t("recruit.system.bottom.and")}
              <span className="text-[#5a9bd4]"> {t("recruit.system.bottom.reward")}</span>
              &quot;
            </p>
            <p className="mt-2 text-base font-medium text-[#1a1a2e] md:text-xl lg:text-2xl">
              {t("recruit.system.bottom2")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
