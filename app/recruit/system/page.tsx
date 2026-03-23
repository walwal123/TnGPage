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
      <section className="relative h-[220px] w-full">
        <Image
          src="/images/recruit/mina-handshake.jpg"
          alt={t("recruit.system.hero")}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-medium text-white md:text-4xl">{t("recruit.system.hero")}</h1>
        </div>
      </section>

      {/* 투명한 기준, 공정한 성장 Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-[#1a1a2e] md:text-3xl">
            {t("recruit.system.title")}
          </h2>
          <p className="text-base text-[#666]">
            {t("recruit.system.desc1")}
            <span className="text-[#5a9bd4]"> {t("recruit.system.performance")}</span>
            {t("recruit.system.desc2")}
          </p>
          <p className="text-base text-[#666]">
            <span className="text-[#5a9bd4]">{t("recruit.system.merit")}</span>
            {t("recruit.system.desc3")}
          </p>
        </div>
      </section>

      {/* KPI System Section - Two Images */}
      <section className="flex w-full flex-col lg:flex-row">
        {/* Left - Description with dark gray background */}
        <div className="flex h-[350px] w-full items-center justify-center bg-[#4a4a4a] lg:w-1/2">
          <div className="px-8 text-center text-white">
            <p className="text-lg leading-relaxed md:text-xl">
              {t("recruit.system.kpi.desc1")}
              <span className="text-[#5a9bd4]"> {t("recruit.system.kpi.desc2")}</span>
              {t("recruit.system.kpi.desc3")}
            </p>
            <p className="text-lg leading-relaxed md:text-xl">
              {t("recruit.system.kpi.desc4")}
              <span className="text-[#5a9bd4]"> {t("recruit.system.kpi.desc5")}</span>
              {t("recruit.system.kpi.desc6")}
            </p>
            <p className="mt-4 text-lg leading-relaxed md:text-xl">
              {t("recruit.system.kpi.transparent1")}
            </p>
            <p className="text-lg leading-relaxed md:text-xl">
              {t("recruit.system.kpi.transparent2")}
            </p>
          </div>
        </div>

        {/* Right - KPI System with chart background */}
        <div className="relative flex h-[350px] w-full items-center justify-center lg:w-1/2">
          <Image
            src="/images/recruit/jakub-chart.jpg"
            alt={t("recruit.system.kpi.title")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 px-8 text-right text-white">
            <h3 className="text-2xl font-bold md:text-3xl">
              <span className="text-[#5a9bd4]">{t("recruit.system.kpi.title").split(" ")[0]}</span>
              {" "}{t("recruit.system.kpi.title").split(" ").slice(1).join(" ")}
            </h3>
          </div>
        </div>
      </section>

      {/* KPI Evaluation Criteria */}
      <section className="border-t border-b border-[#e0e0e0] bg-white px-4 py-12 md:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f0f0f0]">
              <FileText className="h-8 w-8 text-[#666]" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-[#666] whitespace-pre-line">{t("recruit.system.criteria1")}</p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f0f0f0]">
              <Clock className="h-8 w-8 text-[#666]" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-[#666] whitespace-pre-line">{t("recruit.system.criteria2")}</p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f0f0f0]">
              <Award className="h-8 w-8 text-[#666]" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-[#666] whitespace-pre-line">{t("recruit.system.criteria3")}</p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f0f0f0]">
              <Users className="h-8 w-8 text-[#666]" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-[#666] whitespace-pre-line">{t("recruit.system.criteria4")}</p>
          </div>
        </div>
      </section>

      {/* 직무별 명확한 승진 체계 Section */}
      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-2xl font-bold text-[#1a1a2e] md:text-3xl">
            {t("recruit.system.promotion.title")}
          </h2>
          <p className="mb-12 text-base text-[#666]">
            {t("recruit.system.promotion.desc1")}
            <span className="text-[#5a9bd4]"> {t("recruit.system.promotion.desc2")}</span>
            {t("recruit.system.promotion.desc3")}
            <span className="text-[#5a9bd4]">{t("recruit.system.promotion.desc4")}</span>
            {t("recruit.system.promotion.desc5")}
          </p>

          {/* Career Levels */}
          <div className="mb-16 bg-[#f5f5f5] px-8 py-12">
            <div className="flex flex-wrap items-end justify-center gap-6 md:gap-8">
              {/* 사원 */}
              <div className="flex flex-col items-center">
                <div className="mb-2 flex gap-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                </div>
                <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-[#5a9bd4]">
                  <User className="h-10 w-10 text-white" strokeWidth={1.5} />
                </div>
                <p className="mt-3 text-base font-medium text-[#1a1a2e]">{t("recruit.system.rank.staff")}</p>
              </div>

              {/* 대리 */}
              <div className="flex flex-col items-center">
                <div className="mb-2 flex gap-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                </div>
                <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-[#5a9bd4]">
                  <UserCheck className="h-10 w-10 text-white" strokeWidth={1.5} />
                </div>
                <p className="mt-3 text-base font-medium text-[#1a1a2e]">{t("recruit.system.rank.associate")}</p>
              </div>

              {/* 과장 */}
              <div className="flex flex-col items-center">
                <div className="mb-2 flex gap-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                </div>
                <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-[#5a9bd4]">
                  <Briefcase className="h-10 w-10 text-white" strokeWidth={1.5} />
                </div>
                <p className="mt-3 text-base font-medium text-[#1a1a2e]">{t("recruit.system.rank.manager")}</p>
              </div>

              {/* 차장 */}
              <div className="flex flex-col items-center">
                <div className="mb-2 flex gap-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                </div>
                <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-[#5a9bd4]">
                  <Building className="h-10 w-10 text-white" strokeWidth={1.5} />
                </div>
                <p className="mt-3 text-base font-medium text-[#1a1a2e]">{t("recruit.system.rank.deputy")}</p>
              </div>

              {/* 부장 */}
              <div className="flex flex-col items-center">
                <div className="mb-2 flex gap-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                </div>
                <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-[#5a9bd4]">
                  <Crown className="h-10 w-10 text-white" strokeWidth={1.5} />
                </div>
                <p className="mt-3 text-base font-medium text-[#1a1a2e]">{t("recruit.system.rank.director")}</p>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="text-center">
            <p className="text-xl font-medium text-[#1a1a2e] md:text-2xl">
              "{t("recruit.system.bottom1")}
              <span className="text-[#5a9bd4]"> {t("recruit.system.bottom.evaluation")}</span>
              {t("recruit.system.bottom.and")}
              <span className="text-[#5a9bd4]"> {t("recruit.system.bottom.reward")}</span>
              "
            </p>
            <p className="mt-2 text-xl font-medium text-[#1a1a2e] md:text-2xl">
              {t("recruit.system.bottom2")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
