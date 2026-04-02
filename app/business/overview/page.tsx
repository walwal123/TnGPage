"use client";

import Navbar from "@/components/navbar";
import { useLanguage } from "@/lib/language-context";

export default function BusinessOverviewPage() {
  const { t, language } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex h-[200px] w-full items-center justify-center md:h-[280px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/business/sasun-gavel.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#2a2a3a]/50" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-2xl font-medium text-white md:text-3xl lg:text-5xl">
            {t("business.overview.hero")}
          </h1>
        </div>
      </section>

      {/* White gap */}
      <div className="h-12 bg-white md:h-24" />

      {/* Intro Section */}
      <section className="bg-white px-4 py-8 md:px-16 md:py-12 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-xl font-medium text-[#1a1a2e] md:mb-6 md:text-2xl lg:text-4xl">
            {t("business.overview.title")}
          </h2>
          <p className="text-sm text-[#666] md:text-base lg:text-lg">
            {t("business.overview.subtitle")}
          </p>
        </div>
      </section>

      {/* White gap */}
      <div className="h-10 bg-white md:h-20" />

      {/* 주요 업무 안내 Section */}
      <section className="bg-white px-4 pb-12 md:px-16 md:pb-20 lg:px-24">
        <div className="mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="mb-8 flex items-center gap-2 md:mb-12 md:gap-3">
            <div className="h-6 w-1 bg-[#5a9bd4] md:h-8" />
            <h3 className="text-xl font-medium text-[#1a1a2e] md:text-2xl">{t("business.overview.main")}</h3>
          </div>

          {/* Full-width vertical cards */}
          <div className="space-y-6 md:space-y-8">
            {/* Card 1: 소액 심사 업무 */}
            <div className="group relative min-h-[300px] overflow-hidden rounded-xl md:min-h-[400px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url(/images/business/towfiqu-analysis.jpg)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#1a1a2e]/80 to-[#1a1a2e]/60" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-center p-4 md:p-8 lg:p-12">
                <div className="mb-2 text-xs font-medium text-[#5a9bd4] md:text-sm">{t("business.overview.simple.label")}</div>
                <h4 className="mb-4 text-lg font-semibold text-white md:mb-6 md:text-2xl lg:text-3xl">
                  {t("business.overview.simple.title")}
                </h4>
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
                  <p className="text-xs leading-relaxed text-white/90 md:text-base" style={{ wordBreak: "keep-all" }}>
                    {t("business.overview.simple.desc")}
                  </p>
                  <ul className="space-y-1 text-xs text-white/80 md:space-y-2 md:text-base">
                    <li>- {t("business.overview.simple.item1")}</li>
                    <li>- {t("business.overview.simple.item2")}</li>
                    <li>- {t("business.overview.simple.item3")}</li>
                    <li>- {t("business.overview.simple.item4")}</li>
                    <li>- {t("business.overview.simple.item5")}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: 재물/배상책임/특종보험 현장조사 */}
            <div className="group relative min-h-[320px] overflow-hidden rounded-xl md:min-h-[420px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url(/images/business/fire-accident.jpg)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#1a1a2e]/80 to-[#1a1a2e]/60" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-center p-4 md:p-8 lg:p-12">
                <div className="mb-2 text-xs font-medium text-[#5a9bd4] md:text-sm">{t("business.overview.property.label")}</div>
                <h4 className="mb-4 text-lg font-semibold text-white md:mb-6 md:text-2xl lg:text-3xl">
                  {t("business.overview.property.title")}
                </h4>
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
                  <p className="text-xs leading-relaxed text-white/90 md:text-base" style={{ wordBreak: "keep-all" }}>
                    {t("business.overview.property.desc")}
                  </p>
                  <ul className="space-y-1 text-xs text-white/80 md:space-y-2 md:text-base">
                    <li>- {t("business.overview.property.item1")}</li>
                    <li>- {t("business.overview.property.item2")}</li>
                    <li>- {t("business.overview.property.item3")}</li>
                    <li>- {t("business.overview.property.item4")}</li>
                    <li>- {t("business.overview.property.item5")}</li>
                    <li>- {t("business.overview.property.item6")}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3: 인보험 조사업무 */}
            <div className="group relative min-h-[350px] overflow-hidden rounded-xl md:min-h-[450px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url(/images/business/hospital-patient.jpg)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#1a1a2e]/80 to-[#1a1a2e]/60" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-center p-4 md:p-8 lg:p-12">
                <div className="mb-2 text-xs font-medium text-[#5a9bd4] md:text-sm">{t("business.overview.personal.label")}</div>
                <h4 className="mb-4 text-lg font-semibold text-white md:mb-6 md:text-2xl lg:text-3xl">
                  {t("business.overview.personal.title")}
                </h4>
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
                  <p className="text-xs leading-relaxed text-white/90 md:text-base" style={{ wordBreak: "keep-all" }}>
                    {t("business.overview.personal.desc")}
                  </p>
                  <ul className="space-y-1 text-xs text-white/80 md:space-y-2 md:text-base">
                    <li>- {t("business.overview.personal.item1")}</li>
                    <li>- {t("business.overview.personal.item2")}</li>
                    <li>- {t("business.overview.personal.item3")}</li>
                    <li>- {t("business.overview.personal.item4")}</li>
                    <li>- {t("business.overview.personal.item5")}</li>
                    <li>- {t("business.overview.personal.item6")}</li>
                    <li className="hidden md:list-item">- {t("business.overview.personal.item7")}</li>
                    <li className="hidden md:list-item">- {t("business.overview.personal.item8")}</li>
                    <li className="hidden md:list-item">- {t("business.overview.personal.item9")}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 4: 농작물재해보험 조사업무 */}
            <div className="group relative min-h-[350px] overflow-hidden rounded-xl md:min-h-[450px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url(/images/business/agriculture-field.jpg)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#1a1a2e]/80 to-[#1a1a2e]/60" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-center p-4 md:p-8 lg:p-12">
                <div className="mb-2 text-xs font-medium text-[#5a9bd4] md:text-sm">{t("business.overview.agri.label")}</div>
                <h4 className="mb-4 text-lg font-semibold text-white md:mb-6 md:text-2xl lg:text-3xl">
                  {t("business.overview.agri.title")}
                </h4>
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
                  <p className="text-xs leading-relaxed text-white/90 md:text-base" style={{ wordBreak: "keep-all" }}>
                    {t("business.overview.agri.desc")}
                  </p>
                  <ul className="space-y-1 text-xs text-white/80 md:space-y-2 md:text-base">
                    <li>- {t("business.overview.agri.item1")}</li>
                    <li>- {t("business.overview.agri.item2")}</li>
                    <li>- {t("business.overview.agri.item3")}</li>
                    <li>- {t("business.overview.agri.item4")}</li>
                    <li>- {t("business.overview.agri.item5")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White gap */}
      <div className="h-16 bg-white md:h-32" />

      {/* 처리 가능 보험 업무 범위 Section */}
      <section className="bg-[#f8f9fa] px-4 py-12 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="mb-8 flex items-center gap-2 md:mb-12 md:gap-3">
            <div className="h-6 w-1 bg-[#5a9bd4] md:h-8" />
            <h3 className="text-xl font-medium text-[#1a1a2e] md:text-2xl">{t("business.overview.coverage")}</h3>
          </div>

          {/* Insurance Coverage Cards */}
          <div className="space-y-4 md:space-y-6">
            {/* Card 1 */}
            <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md md:min-h-[200px] md:flex-row">
              <div
                className="h-[120px] w-full flex-shrink-0 bg-cover bg-center md:h-auto md:w-[280px]"
                style={{ backgroundImage: "url(/images/business/towfiqu-analysis.jpg)" }}
              />
              <div className="flex flex-1 flex-col">
                <div className="flex w-full flex-col justify-center border-b border-[#eee] bg-white px-4 py-4 md:w-[180px] md:border-b-0 md:border-r md:px-6 md:py-6">
                  <p className="mb-1 text-xs text-[#5a9bd4]">{t("business.overview.service01")}</p>
                  <h4 className="text-base font-semibold text-[#1a1a2e] md:text-xl">{t("business.overview.simple.title")}</h4>
                  <p className="mt-1 text-xs text-[#999]">Small Claims Review</p>
                </div>
                <div className="flex-1 p-4 md:p-6">
                  <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                    <div>
                      <h5 className="mb-2 text-sm font-medium text-[#1a1a2e] md:mb-3 md:text-base">{t("business.overview.coverage.personal")}</h5>
                      <ul className="space-y-1 text-xs text-[#555] md:space-y-2 md:text-sm">
                        <li>- {t("business.overview.coverage.personal.item1")}</li>
                        <li>- {t("business.overview.coverage.personal.item2")}</li>
                        <li>- {t("business.overview.coverage.personal.item3")}</li>
                        <li>- {t("business.overview.coverage.personal.item4")}</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="mb-2 text-sm font-medium text-[#1a1a2e] md:mb-3 md:text-base">{t("business.overview.coverage.property")}</h5>
                      <ul className="space-y-1 text-xs text-[#555] md:space-y-2 md:text-sm">
                        <li>- {t("business.overview.coverage.property.item1")}</li>
                        <li>- {t("business.overview.coverage.property.item2")}</li>
                        <li>- {t("business.overview.coverage.property.item3")}</li>
                        <li>- {t("business.overview.coverage.property.item4")}</li>
                        <li>- {t("business.overview.coverage.property.item5")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md md:min-h-[200px] md:flex-row">
              <div
                className="h-[120px] w-full flex-shrink-0 bg-cover bg-center md:h-auto md:w-[280px]"
                style={{ backgroundImage: "url(/images/business/fire-accident.jpg)" }}
              />
              <div className="flex flex-1 flex-col">
                <div className="flex w-full flex-col justify-center border-b border-[#eee] bg-white px-4 py-4 md:w-[180px] md:border-b-0 md:border-r md:px-6 md:py-6">
                  <p className="mb-1 text-xs text-[#5a9bd4]">{t("business.overview.service02")}</p>
                  <h4 className={`font-semibold text-[#1a1a2e] ${language === "en" ? "text-xs md:text-sm" : "text-sm md:text-lg"}`}>{t("business.overview.coverage.propinv.title")}</h4>
                  <p className="mt-1 text-xs text-[#999]">Property Insurance</p>
                </div>
                <div className="flex-1 p-4 md:p-6">
                  <ul className="grid gap-x-4 gap-y-1 text-xs text-[#555] md:grid-cols-2 md:gap-x-6 md:gap-y-2 md:text-sm">
                    <li>- {t("business.overview.coverage.propinv.item1")}</li>
                    <li>- {t("business.overview.coverage.propinv.item2")}</li>
                    <li>- {t("business.overview.coverage.propinv.item3")}</li>
                    <li>- {t("business.overview.coverage.propinv.item4")}</li>
                    <li>- {t("business.overview.coverage.propinv.item5")}</li>
                    <li>- {t("business.overview.coverage.propinv.item6")}</li>
                    <li className="hidden md:list-item">- {t("business.overview.coverage.propinv.item7")}</li>
                    <li className="hidden md:list-item">- {t("business.overview.coverage.propinv.item8")}</li>
                    <li className="hidden md:list-item">- {t("business.overview.coverage.propinv.item9")}</li>
                    <li className="hidden md:list-item">- {t("business.overview.coverage.propinv.item10")}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md md:min-h-[200px] md:flex-row">
              <div
                className="h-[120px] w-full flex-shrink-0 bg-cover bg-center md:h-auto md:w-[280px]"
                style={{ backgroundImage: "url(/images/business/hospital-patient.jpg)" }}
              />
              <div className="flex flex-1 flex-col">
                <div className="flex w-full flex-col justify-center border-b border-[#eee] bg-white px-4 py-4 md:w-[180px] md:border-b-0 md:border-r md:px-6 md:py-6">
                  <p className="mb-1 text-xs text-[#5a9bd4]">{t("business.overview.service03")}</p>
                  <h4 className="text-base font-semibold text-[#1a1a2e] md:text-xl">{t("business.overview.coverage.perinv.title")}</h4>
                  <p className="mt-1 text-xs text-[#999]">Person Insurance</p>
                </div>
                <div className="flex-1 p-4 md:p-6">
                  <ul className="grid gap-x-4 gap-y-1 text-xs text-[#555] md:grid-cols-2 md:gap-x-6 md:gap-y-2 md:text-sm">
                    <li>- {t("business.overview.coverage.perinv.item1")}</li>
                    <li>- {t("business.overview.coverage.perinv.item2")}</li>
                    <li>- {t("business.overview.coverage.perinv.item3")}</li>
                    <li>- {t("business.overview.coverage.perinv.item4")}</li>
                    <li className="hidden md:list-item">- {t("business.overview.coverage.perinv.item5")}</li>
                    <li className="hidden md:list-item">- {t("business.overview.coverage.perinv.item6")}</li>
                    <li className="hidden md:list-item">- {t("business.overview.coverage.perinv.item7")}</li>
                    <li className="hidden md:list-item">- {t("business.overview.coverage.perinv.item8")}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md md:min-h-[200px] md:flex-row">
              <div
                className="h-[120px] w-full flex-shrink-0 bg-cover bg-center md:h-auto md:w-[280px]"
                style={{ backgroundImage: "url(/images/business/agriculture-field.jpg)" }}
              />
              <div className="flex flex-1 flex-col">
                <div className="flex w-full flex-col justify-center border-b border-[#eee] bg-white px-4 py-4 md:w-[180px] md:border-b-0 md:border-r md:px-6 md:py-6">
                  <p className="mb-1 text-xs text-[#5a9bd4]">{t("business.overview.service04")}</p>
                  <h4 className="text-sm font-semibold text-[#1a1a2e] md:text-lg">{t("business.overview.coverage.agri.title")}</h4>
                  <p className="mt-1 text-xs text-[#999]">Agricultural Insurance</p>
                </div>
                <div className="flex-1 p-4 md:p-6">
                  <ul className="grid gap-x-4 gap-y-1 text-xs text-[#555] md:grid-cols-2 md:gap-x-6 md:gap-y-2 md:text-sm">
                    <li>- {t("business.overview.coverage.agri.item1")}</li>
                    <li>- {t("business.overview.coverage.agri.item2")}</li>
                    <li>- {t("business.overview.coverage.agri.item3")}</li>
                    <li>- {t("business.overview.coverage.agri.item4")}</li>
                    <li className="hidden md:list-item">- {t("business.overview.coverage.agri.item5")}</li>
                    <li className="hidden md:list-item">- {t("business.overview.coverage.agri.item6")}</li>
                    <li className="hidden md:list-item">- {t("business.overview.coverage.agri.item7")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom padding */}
      <div className="h-12 bg-white md:h-20" />
    </main>
  );
}
