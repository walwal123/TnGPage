"use client";

import Image from "next/image";
import { ChevronRight, ChevronDown, ChevronLeft, UserPlus, FileSearch, Building2, ClipboardCheck, Calculator, FileCheck } from "lucide-react";
import Navbar from "@/components/navbar";
import { useLanguage } from "@/lib/language-context";

export default function ServiceProcessPage() {
  const { t, language } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[180px] w-full md:h-[220px]">
        <Image
          src="/images/service/kaja-info.jpg"
          alt={t("service.process.hero")}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl font-medium text-white md:text-3xl lg:text-4xl">{t("service.process.hero")}</h1>
        </div>
      </section>

      {/* 손해사정 절차 안내 */}
      <section className="px-4 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="mb-8 text-center md:mb-12">
            <h2 className="mb-3 text-xl font-semibold text-[#1a1a2e] md:mb-4 md:text-2xl lg:text-3xl">
              {t("service.process.title")}
            </h2>
            <p className="text-sm text-[#666] md:text-base">
              {t("service.process.subtitle")}
            </p>
          </div>

          {/* Process Steps - Mobile: vertical, Desktop: horizontal */}
          <div className="flex flex-col items-center gap-4 md:hidden">
            {/* Step 1 */}
            <div className="flex h-[160px] w-[160px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-4 text-center">
              <UserPlus className="mb-2 h-10 w-10 text-[#333]" strokeWidth={1.5} />
              <h3 className={`mb-1 font-semibold text-[#1a1a2e] ${language === "en" ? "text-xs" : "text-sm"}`}>{t("service.process.step1.title")}</h3>
              <p className={`text-[#666] ${language === "en" ? "text-[10px]" : "text-xs"}`}>{t("service.process.step1.desc")}</p>
            </div>
            <ChevronDown className="h-6 w-6 text-[#999]" />
            
            {/* Step 2 */}
            <div className="flex h-[160px] w-[160px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-4 text-center">
              <FileSearch className="mb-2 h-10 w-10 text-[#333]" strokeWidth={1.5} />
              <h3 className={`mb-1 font-semibold text-[#1a1a2e] ${language === "en" ? "text-xs" : "text-sm"}`}>{t("service.process.step2.title")}</h3>
              <p className={`text-[#666] ${language === "en" ? "text-[10px]" : "text-xs"}`}>{t("service.process.step2.desc")}</p>
            </div>
            <ChevronDown className="h-6 w-6 text-[#999]" />
            
            {/* Step 3 */}
            <div className="flex h-[160px] w-[160px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-4 text-center">
              <Building2 className="mb-2 h-10 w-10 text-[#333]" strokeWidth={1.5} />
              <h3 className={`mb-1 font-semibold text-[#1a1a2e] ${language === "en" ? "text-xs" : "text-sm"}`}>{t("service.process.step3.title")}</h3>
              <p className={`text-[#666] ${language === "en" ? "text-[10px]" : "text-xs"}`}>{t("service.process.step3.desc")}</p>
            </div>
            <ChevronDown className="h-6 w-6 text-[#999]" />
            
            {/* Step 4 */}
            <div className="flex h-[160px] w-[160px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-4 text-center">
              <ClipboardCheck className="mb-2 h-10 w-10 text-[#333]" strokeWidth={1.5} />
              <h3 className={`mb-1 font-semibold text-[#1a1a2e] ${language === "en" ? "text-xs" : "text-sm"}`}>{t("service.process.step4.title")}</h3>
              <p className={`text-[#666] ${language === "en" ? "text-[10px]" : "text-xs"}`}>{t("service.process.step4.desc")}</p>
            </div>
            <ChevronDown className="h-6 w-6 text-[#999]" />
            
            {/* Step 5 */}
            <div className="flex h-[160px] w-[160px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-4 text-center">
              <Calculator className="mb-2 h-10 w-10 text-[#333]" strokeWidth={1.5} />
              <h3 className={`mb-1 font-semibold text-[#1a1a2e] ${language === "en" ? "text-xs" : "text-sm"}`}>{t("service.process.step5.title")}</h3>
              <p className={`text-[#666] ${language === "en" ? "text-[10px]" : "text-xs"}`}>{t("service.process.step5.desc")}</p>
            </div>
            <ChevronDown className="h-6 w-6 text-[#999]" />
            
            {/* Step 6 */}
            <div className="flex h-[160px] w-[160px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-4 text-center">
              <FileCheck className="mb-2 h-10 w-10 text-[#333]" strokeWidth={1.5} />
              <h3 className={`mb-1 font-semibold text-[#1a1a2e] ${language === "en" ? "text-xs" : "text-sm"}`}>{t("service.process.step6.title")}</h3>
              <p className={`text-[#666] ${language === "en" ? "text-[10px]" : "text-xs"}`}>{t("service.process.step6.desc")}</p>
            </div>
          </div>

          {/* Desktop Process Steps - Row 1 */}
          <div className="mb-8 hidden flex-col items-center justify-center gap-4 md:flex md:flex-row md:gap-2">
            {/* Step 1: 사고 접수 */}
            <div className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-6 text-center">
              <div className="mb-4">
                <UserPlus className="h-14 w-14 text-[#333]" strokeWidth={1.5} />
              </div>
              <h3 className={`mb-2 font-semibold text-[#1a1a2e] ${language === "en" ? "text-sm" : "text-lg"}`}>{t("service.process.step1.title")}</h3>
              <p className={`text-[#666] ${language === "en" ? "text-xs" : "text-sm"}`}>{t("service.process.step1.desc")}</p>
            </div>

            <ChevronRight className="h-8 w-8 text-[#999]" />

            {/* Step 2 */}
            <div className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-6 text-center">
              <div className="mb-4">
                <FileSearch className="h-14 w-14 text-[#333]" strokeWidth={1.5} />
              </div>
              <h3 className={`mb-2 font-semibold text-[#1a1a2e] ${language === "en" ? "text-sm" : "text-lg"}`}>{t("service.process.step2.title")}</h3>
              <p className={`text-[#666] ${language === "en" ? "text-xs" : "text-sm"}`}>{t("service.process.step2.desc")}</p>
            </div>

            <ChevronRight className="h-8 w-8 text-[#999]" />

            {/* Step 3 */}
            <div className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-6 text-center">
              <div className="mb-4">
                <Building2 className="h-14 w-14 text-[#333]" strokeWidth={1.5} />
              </div>
              <h3 className={`mb-2 font-semibold text-[#1a1a2e] ${language === "en" ? "text-sm" : "text-lg"}`}>{t("service.process.step3.title")}</h3>
              <p className={`text-[#666] ${language === "en" ? "text-xs" : "text-sm"}`}>{t("service.process.step3.desc")}</p>
            </div>
          </div>

          {/* Down Arrow - desktop only */}
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

          {/* Desktop Process Steps - Row 2 */}
          <div className="hidden flex-col items-center justify-center gap-4 md:flex md:flex-row md:gap-2">
            {/* Step 6 */}
            <div className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-6 text-center">
              <div className="mb-4">
                <FileCheck className="h-14 w-14 text-[#333]" strokeWidth={1.5} />
              </div>
              <h3 className={`mb-2 font-semibold text-[#1a1a2e] ${language === "en" ? "text-sm" : "text-lg"}`}>{t("service.process.step6.title")}</h3>
              <p className={`text-[#666] ${language === "en" ? "text-xs" : "text-sm"}`}>{t("service.process.step6.desc")}</p>
            </div>

            <ChevronLeft className="h-8 w-8 text-[#999]" />

            {/* Step 5 */}
            <div className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-6 text-center">
              <div className="mb-4">
                <Calculator className="h-14 w-14 text-[#333]" strokeWidth={1.5} />
              </div>
              <h3 className={`mb-2 font-semibold text-[#1a1a2e] ${language === "en" ? "text-sm" : "text-lg"}`}>{t("service.process.step5.title")}</h3>
              <p className={`text-[#666] ${language === "en" ? "text-xs" : "text-sm"}`}>{t("service.process.step5.desc")}</p>
            </div>

            <ChevronLeft className="h-8 w-8 text-[#999]" />

            {/* Step 4 */}
            <div className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-6 text-center">
              <div className="mb-4">
                <ClipboardCheck className="h-14 w-14 text-[#333]" strokeWidth={1.5} />
              </div>
              <h3 className={`mb-2 font-semibold text-[#1a1a2e] ${language === "en" ? "text-sm" : "text-lg"}`}>{t("service.process.step4.title")}</h3>
              <p className={`text-[#666] ${language === "en" ? "text-xs" : "text-sm"}`}>{t("service.process.step4.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-[#f5a623] px-4 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className={`font-medium text-white ${language === "en" ? "text-sm md:text-base lg:text-lg" : "text-base md:text-xl lg:text-2xl"}`}>
            <span className="text-[#5a9bd4]">{t("service.process.banner.personal")}</span>
            ·
            <span className="text-[#5a9bd4]">{t("service.process.banner.property")}</span>
            ·
            <span className="text-[#5a9bd4]">{t("service.process.banner.liability")}</span>
            {t("service.process.banner.until")}
          </p>
          <p className={`mt-2 font-medium text-white ${language === "en" ? "text-sm md:text-base lg:text-lg" : "text-base md:text-xl lg:text-2xl"}`}>
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
