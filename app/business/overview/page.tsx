"use client";

import Navbar from "@/components/navbar";
import { useLanguage } from "@/lib/language-context";

export default function BusinessOverviewPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex h-[280px] w-full items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/business/sasun-gavel.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#2a2a3a]/50" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">
            {t("business.overview.hero")}
          </h1>
        </div>
      </section>

      {/* White gap */}
      <div className="h-24 bg-white" />

      {/* Intro Section */}
      <section className="bg-white px-8 py-12 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-2xl font-medium text-[#1a1a2e] md:text-3xl lg:text-4xl">
            {t("business.overview.title")}
          </h2>
          <p className="text-base text-[#666] md:text-lg">
            {t("business.overview.subtitle")}
          </p>
        </div>
      </section>

      {/* White gap */}
      <div className="h-20 bg-white" />

      {/* 주요 업무 안내 Section */}
      <section className="bg-white px-8 pb-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="mb-12 flex items-center gap-3">
            <div className="h-8 w-1 bg-[#5a9bd4]" />
            <h3 className="text-2xl font-medium text-[#1a1a2e]">{t("business.overview.main")}</h3>
          </div>

          {/* Full-width vertical cards */}
          <div className="space-y-8">
            {/* Card 1: 간편 심사 업무 */}
            <div className="group relative min-h-[400px] overflow-hidden rounded-xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url(/images/business/towfiqu-analysis.jpg)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#1a1a2e]/80 to-[#1a1a2e]/60" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-center p-8 lg:p-12">
                <div className="mb-2 text-sm font-medium text-[#5a9bd4]">{t("business.overview.simple.label")}</div>
                <h4 className="mb-6 text-2xl font-semibold text-white md:text-3xl">
                  {t("business.overview.simple.title")}
                </h4>
                <div className="grid gap-8 lg:grid-cols-2">
                  <p className="text-base leading-relaxed text-white/90" style={{ wordBreak: "keep-all" }}>
                    {t("business.overview.simple.desc")}
                  </p>
                  <ul className="space-y-2 text-sm text-white/80 md:text-base">
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
            <div className="group relative min-h-[420px] overflow-hidden rounded-xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url(/images/business/fire-accident.jpg)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#1a1a2e]/80 to-[#1a1a2e]/60" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-center p-8 lg:p-12">
                <div className="mb-2 text-sm font-medium text-[#5a9bd4]">{t("business.overview.property.label")}</div>
                <h4 className="mb-6 text-2xl font-semibold text-white md:text-3xl">
                  {t("business.overview.property.title")}
                </h4>
                <div className="grid gap-8 lg:grid-cols-2">
                  <p className="text-base leading-relaxed text-white/90" style={{ wordBreak: "keep-all" }}>
                    {t("business.overview.property.desc")}
                  </p>
                  <ul className="space-y-2 text-sm text-white/80 md:text-base">
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
            <div className="group relative min-h-[450px] overflow-hidden rounded-xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url(/images/business/hospital-patient.jpg)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#1a1a2e]/80 to-[#1a1a2e]/60" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-center p-8 lg:p-12">
                <div className="mb-2 text-sm font-medium text-[#5a9bd4]">{t("business.overview.personal.label")}</div>
                <h4 className="mb-6 text-2xl font-semibold text-white md:text-3xl">
                  {t("business.overview.personal.title")}
                </h4>
                <div className="grid gap-8 lg:grid-cols-2">
                  <p className="text-base leading-relaxed text-white/90" style={{ wordBreak: "keep-all" }}>
                    {t("business.overview.personal.desc")}
                  </p>
                  <ul className="space-y-2 text-sm text-white/80 md:text-base">
                    <li>- {t("business.overview.personal.item1")}</li>
                    <li>- {t("business.overview.personal.item2")}</li>
                    <li>- {t("business.overview.personal.item3")}</li>
                    <li>- {t("business.overview.personal.item4")}</li>
                    <li>- {t("business.overview.personal.item5")}</li>
                    <li>- {t("business.overview.personal.item6")}</li>
                    <li>- {t("business.overview.personal.item7")}</li>
                    <li>- {t("business.overview.personal.item8")}</li>
                    <li>- {t("business.overview.personal.item9")}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 4: 농작물재해보험 조사업무 */}
            <div className="group relative min-h-[450px] overflow-hidden rounded-xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url(/images/business/agriculture-field.jpg)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#1a1a2e]/80 to-[#1a1a2e]/60" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-center p-8 lg:p-12">
                <div className="mb-2 text-sm font-medium text-[#5a9bd4]">{t("business.overview.agri.label")}</div>
                <h4 className="mb-6 text-2xl font-semibold text-white md:text-3xl">
                  {t("business.overview.agri.title")}
                </h4>
                <div className="grid gap-8 lg:grid-cols-2">
                  <p className="text-base leading-relaxed text-white/90" style={{ wordBreak: "keep-all" }}>
                    {t("business.overview.agri.desc")}
                  </p>
                  <ul className="space-y-2 text-sm text-white/80 md:text-base">
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
      <div className="h-32 bg-white" />

      {/* 처리 가능 보험 업무 범위 Section */}
      <section className="bg-[#f8f9fa] px-8 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="mb-12 flex items-center gap-3">
            <div className="h-8 w-1 bg-[#5a9bd4]" />
            <h3 className="text-2xl font-medium text-[#1a1a2e]">{t("business.overview.coverage")}</h3>
          </div>

          {/* Insurance Coverage Cards */}
          <div className="space-y-6">
            {/* Card 1: 간편 심사 업무 */}
            <div className="flex min-h-[200px] overflow-hidden rounded-xl bg-white shadow-md">
              <div
                className="hidden w-[280px] flex-shrink-0 bg-cover bg-center md:block"
                style={{ backgroundImage: "url(/images/business/towfiqu-analysis.jpg)" }}
              />
              <div className="flex flex-1 flex-col md:flex-row">
                <div className="flex w-full flex-col justify-center border-b border-[#eee] bg-white px-6 py-6 md:w-[180px] md:border-b-0 md:border-r">
                  <p className="mb-1 text-sm text-[#5a9bd4]">{t("business.overview.service01")}</p>
                  <h4 className="text-xl font-semibold text-[#1a1a2e]">{t("business.overview.simple.title")}</h4>
                  <p className="mt-1 text-xs text-[#999]">Simple Review</p>
                </div>
                <div className="flex-1 p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h5 className="mb-3 font-medium text-[#1a1a2e]">{t("business.overview.coverage.personal")}</h5>
                      <ul className="space-y-1 text-sm text-[#555]">
                        <li>- {t("business.overview.coverage.personal.item1")}</li>
                        <li>- {t("business.overview.coverage.personal.item2")}</li>
                        <li>- {t("business.overview.coverage.personal.item3")}</li>
                        <li>- {t("business.overview.coverage.personal.item4")}</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="mb-3 font-medium text-[#1a1a2e]">{t("business.overview.coverage.property")}</h5>
                      <ul className="space-y-1 text-sm text-[#555]">
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

            {/* Card 2: 재물/배상책임/특종보험 조사업무 */}
            <div className="flex min-h-[200px] overflow-hidden rounded-xl bg-white shadow-md">
              <div
                className="hidden w-[280px] flex-shrink-0 bg-cover bg-center md:block"
                style={{ backgroundImage: "url(/images/business/fire-accident.jpg)" }}
              />
              <div className="flex flex-1 flex-col md:flex-row">
                <div className="flex w-full flex-col justify-center border-b border-[#eee] bg-white px-6 py-6 md:w-[180px] md:border-b-0 md:border-r">
                  <p className="mb-1 text-sm text-[#5a9bd4]">{t("business.overview.service02")}</p>
                  <h4 className="text-lg font-semibold text-[#1a1a2e]">{t("business.overview.coverage.propinv.title")}</h4>
                  <p className="mt-1 text-xs text-[#999]">Property Insurance</p>
                </div>
                <div className="flex-1 p-6">
                  <ul className="grid gap-x-6 gap-y-1 text-sm text-[#555] md:grid-cols-2">
                    <li>- {t("business.overview.coverage.propinv.item1")}</li>
                    <li>- {t("business.overview.coverage.propinv.item2")}</li>
                    <li>- {t("business.overview.coverage.propinv.item3")}</li>
                    <li>- {t("business.overview.coverage.propinv.item4")}</li>
                    <li>- {t("business.overview.coverage.propinv.item5")}</li>
                    <li>- {t("business.overview.coverage.propinv.item6")}</li>
                    <li>- {t("business.overview.coverage.propinv.item7")}</li>
                    <li>- {t("business.overview.coverage.propinv.item8")}</li>
                    <li>- {t("business.overview.coverage.propinv.item9")}</li>
                    <li>- {t("business.overview.coverage.propinv.item10")}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3: 인보험 조사업무 */}
            <div className="flex min-h-[200px] overflow-hidden rounded-xl bg-white shadow-md">
              <div
                className="hidden w-[280px] flex-shrink-0 bg-cover bg-center md:block"
                style={{ backgroundImage: "url(/images/business/hospital-patient.jpg)" }}
              />
              <div className="flex flex-1 flex-col md:flex-row">
                <div className="flex w-full flex-col justify-center border-b border-[#eee] bg-white px-6 py-6 md:w-[180px] md:border-b-0 md:border-r">
                  <p className="mb-1 text-sm text-[#5a9bd4]">{t("business.overview.service03")}</p>
                  <h4 className="text-xl font-semibold text-[#1a1a2e]">{t("business.overview.coverage.perinv.title")}</h4>
                  <p className="mt-1 text-xs text-[#999]">Person Insurance</p>
                </div>
                <div className="flex-1 p-6">
                  <ul className="grid gap-x-6 gap-y-1 text-sm text-[#555] md:grid-cols-2">
                    <li>- {t("business.overview.coverage.perinv.item1")}</li>
                    <li>- {t("business.overview.coverage.perinv.item2")}</li>
                    <li>- {t("business.overview.coverage.perinv.item3")}</li>
                    <li>- {t("business.overview.coverage.perinv.item4")}</li>
                    <li>- {t("business.overview.coverage.perinv.item5")}</li>
                    <li>- {t("business.overview.coverage.perinv.item6")}</li>
                    <li>- {t("business.overview.coverage.perinv.item7")}</li>
                    <li>- {t("business.overview.coverage.perinv.item8")}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 4: 농작물재해보험 조사업무 */}
            <div className="flex min-h-[200px] overflow-hidden rounded-xl bg-white shadow-md">
              <div
                className="hidden w-[280px] flex-shrink-0 bg-cover bg-center md:block"
                style={{ backgroundImage: "url(/images/business/agriculture-field.jpg)" }}
              />
              <div className="flex flex-1 flex-col md:flex-row">
                <div className="flex w-full flex-col justify-center border-b border-[#eee] bg-white px-6 py-6 md:w-[180px] md:border-b-0 md:border-r">
                  <p className="mb-1 text-sm text-[#5a9bd4]">{t("business.overview.service04")}</p>
                  <h4 className="text-lg font-semibold text-[#1a1a2e]">{t("business.overview.coverage.agri.title")}</h4>
                  <p className="mt-1 text-xs text-[#999]">Agricultural Insurance</p>
                </div>
                <div className="flex-1 p-6">
                  <ul className="grid gap-x-6 gap-y-1 text-sm text-[#555] md:grid-cols-2">
                    <li>- {t("business.overview.coverage.agri.item1")}</li>
                    <li>- {t("business.overview.coverage.agri.item2")}</li>
                    <li>- {t("business.overview.coverage.agri.item3")}</li>
                    <li>- {t("business.overview.coverage.agri.item4")}</li>
                    <li>- {t("business.overview.coverage.agri.item5")}</li>
                    <li>- {t("business.overview.coverage.agri.item6")}</li>
                    <li>- {t("business.overview.coverage.agri.item7")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom padding */}
      <div className="h-20 bg-white" />
    </main>
  );
}
