"use client";

import Image from "next/image";
import { ChevronRight, ChevronDown, ChevronLeft, UserPlus, FileSearch, Building2, ClipboardCheck, Calculator, FileCheck } from "lucide-react";
import Navbar from "@/components/navbar";
import { useLanguage } from "@/lib/language-context";

export default function ServiceProcessPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[220px] w-full">
        <Image
          src="/images/service/kaja-info.jpg"
          alt={t("service.process.hero")}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-medium text-white md:text-4xl">{t("service.process.hero")}</h1>
        </div>
      </section>

      {/* 손해사정 절차 안내 */}
      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-semibold text-[#1a1a2e] md:text-3xl">
              {t("service.process.title")}
            </h2>
            <p className="text-base text-[#666]">
              {t("service.process.subtitle")}
            </p>
          </div>

          {/* Process Steps - Row 1 */}
          <div className="mb-8 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-2">
            {/* Step 1: 사고 접수 */}
            <div className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-6 text-center">
              <div className="mb-4">
                <UserPlus className="h-14 w-14 text-[#333]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#1a1a2e]">{t("service.process.step1.title")}</h3>
              <p className="text-sm text-[#666]">{t("service.process.step1.desc")}</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <ChevronRight className="h-8 w-8 text-[#999]" />
            </div>

            {/* Step 2: 자료 검토 및 사실 확인 */}
            <div className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-6 text-center">
              <div className="mb-4">
                <FileSearch className="h-14 w-14 text-[#333]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#1a1a2e]">{t("service.process.step2.title")}</h3>
              <p className="text-sm text-[#666]">{t("service.process.step2.desc")}</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <ChevronRight className="h-8 w-8 text-[#999]" />
            </div>

            {/* Step 3: 현장·전문 조사 */}
            <div className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-6 text-center">
              <div className="mb-4">
                <Building2 className="h-14 w-14 text-[#333]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#1a1a2e]">{t("service.process.step3.title")}</h3>
              <p className="text-sm text-[#666]">{t("service.process.step3.desc")}</p>
            </div>
          </div>

          {/* Down Arrow - directly under step 3 (현장·전문 조사) */}
          <div className="mb-8 hidden justify-center md:flex">
            <div className="flex items-center justify-center gap-2">
              <div className="w-[220px]" />
              <div className="w-8" />
              <div className="w-[220px]" />
              <div className="w-8" />
              <div className="flex w-[220px] justify-center">
                <ChevronDown className="h-8 w-8 text-[#999]" />
              </div>
            </div>
          </div>
          <div className="mb-8 flex justify-center md:hidden">
            <ChevronDown className="h-8 w-8 text-[#999]" />
          </div>

          {/* Process Steps - Row 2 */}
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-2">
            {/* Step 6: 결과 보고 및 지급 검토 */}
            <div className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-6 text-center">
              <div className="mb-4">
                <FileCheck className="h-14 w-14 text-[#333]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#1a1a2e]">{t("service.process.step6.title")}</h3>
              <p className="text-sm text-[#666]">{t("service.process.step6.desc")}</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <ChevronLeft className="h-8 w-8 text-[#999]" />
            </div>

            {/* Step 5: 보험금 산정 */}
            <div className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-6 text-center">
              <div className="mb-4">
                <Calculator className="h-14 w-14 text-[#333]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#1a1a2e]">{t("service.process.step5.title")}</h3>
              <p className="text-sm text-[#666]">{t("service.process.step5.desc")}</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <ChevronLeft className="h-8 w-8 text-[#999]" />
            </div>

            {/* Step 4: 손해 및 책임 분석 */}
            <div className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-6 text-center">
              <div className="mb-4">
                <ClipboardCheck className="h-14 w-14 text-[#333]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#1a1a2e]">{t("service.process.step4.title")}</h3>
              <p className="text-sm text-[#666]">{t("service.process.step4.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-[#f5a623] px-4 py-12 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xl font-medium text-white md:text-2xl">
            <span className="text-[#5a9bd4]">{t("service.process.banner.personal")}</span>
            ·
            <span className="text-[#5a9bd4]">{t("service.process.banner.property")}</span>
            ·
            <span className="text-[#5a9bd4]">{t("service.process.banner.liability")}</span>
            {t("service.process.banner.until")}
          </p>
          <p className="mt-2 text-xl font-medium text-white md:text-2xl">
            {t("service.process.banner.all")}
            <span className="font-bold"> {t("service.process.banner.same")}</span>
            {t("service.process.banner.and")}
            <span className="font-bold"> {t("service.process.banner.standard")}</span>
            {t("service.process.banner.processed")}
          </p>
        </div>
      </section>
    </main>
  );
}
