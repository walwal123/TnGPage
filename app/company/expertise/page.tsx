"use client";

import { useLanguage } from "@/lib/language-context";
import Navbar from "@/components/navbar";

export default function CompanyExpertisePage() {
  const { t, language } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1: Hero - 회사 전문성 */}
      <section className="relative flex h-[200px] w-full items-center justify-center md:h-[280px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/company/sean-buildings.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#1a1a2e]/60" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-2xl font-medium text-white md:text-3xl lg:text-5xl">
            {t("company.expertise.hero")}
          </h1>
        </div>
      </section>

      {/* Section 2: Company Professionalism + Slogan */}
      <section className="bg-white px-4 py-12 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-xs text-[#888] md:mb-4 md:text-base" style={{ fontFamily: "Georgia, serif" }}>
            {t("company.expertise.professionalism")}
          </p>
          <h2 className="mb-4 text-xl font-medium text-[#1a1a2e] md:mb-6 md:text-2xl lg:text-4xl">
            {t("company.expertise.title")}
          </h2>
          <p className="text-sm text-[#555] md:text-base lg:text-lg">
            {t("company.expertise.subtitle")} <span className="text-[#e87a1e]">{"T&G"}</span> {t("company.expertise.subtitle2")}
          </p>
        </div>
      </section>

      {/* Section: 강점 및 차별화된 서비스 */}
      <section className="bg-white px-4 py-1 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center md:mb-6">
            <h2 className="mb-2 text-xl font-medium text-[#1a1a2e] md:text-2xl lg:text-3xl">{t("company.expertise.strength")}</h2>
            <p className="text-xs text-[#888] md:text-sm">
              <span className="text-[#e87a1e]">T&G</span> {t("company.expertise.strength.desc")}
            </p>
          </div>

          {/* 특화된 강점 */}
          <div className="mb-6 text-center md:mb-10">
            <h3 className="mb-1 text-base font-medium text-[#1a1a2e] md:text-lg">{t("company.expertise.ways")}</h3>
            <div className="mx-auto mb-2 h-px w-32 bg-[#333] md:mb-3 md:w-40" />
            <p className="text-xs text-[#e87a1e] md:text-sm">{t("company.expertise.ways.subtitle")}</p>
          </div>

          {/* 3 Columns */}
          <div className="mb-8 grid grid-cols-1 gap-3 md:mb-12 md:grid-cols-3 md:gap-4">
            {/* Column 1 */}
            <div className="rounded-lg border border-[#e87a1e] p-4 md:p-6">
              <h4 className={`mb-3 text-center font-semibold text-[#1a1a2e] md:mb-4 ${language === "en" ? "text-xs md:text-base" : "text-sm md:text-lg"}`}>
                {t("expertise.col1.title")} <span className="text-[#e87a1e]">{t("expertise.col1.highlight")}</span>
              </h4>
              <div className={`space-y-2 text-[#555] text-center md:space-y-3 ${language === "en" ? "text-[10px] md:text-xs" : "text-xs md:text-sm"}`}>
                <p>{t("expertise.col1.desc1")}</p>
                <p><span className="font-medium text-[#1a1a2e]">{t("expertise.col1.desc2.bold")}</span>{t("expertise.col1.desc2.text")}</p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="rounded-lg border border-[#e87a1e] p-4 md:p-6">
              <h4 className={`mb-3 text-center font-semibold text-[#1a1a2e] md:mb-4 ${language === "en" ? "text-xs md:text-base" : "text-sm md:text-lg"}`}>
                <span className="text-[#e87a1e]">{t("expertise.col2.highlight")}</span> {t("expertise.col2.title")}
              </h4>
              <div className={`space-y-2 text-[#555] text-center md:space-y-3 ${language === "en" ? "text-[10px] md:text-xs" : "text-xs md:text-sm"}`}>
                <p>{t("expertise.col2.desc1")}</p>
                <p>{t("expertise.col2.desc2")}</p>
                <p><span className="font-medium text-[#1a1a2e]">{t("expertise.col2.desc3.bold")}</span> {t("expertise.col2.desc3.text")}</p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="rounded-lg border border-[#e87a1e] p-4 md:p-6">
              <h4 className={`mb-3 text-center font-semibold text-[#1a1a2e] md:mb-4 ${language === "en" ? "text-xs md:text-base" : "text-sm md:text-lg"}`}>
                {t("expertise.col3.title")} <span className="text-[#e87a1e]">{'"Zero"'}</span> {t("expertise.col3.title2")}
              </h4>
              <div className={`space-y-2 text-[#555] text-center md:space-y-3 ${language === "en" ? "text-[10px] md:text-xs" : "text-xs md:text-sm"}`}>
                <p>{t("expertise.col3.desc1")}</p>
                <p>
                  {t("expertise.col3.desc2")}<br />
                  <span className="font-medium text-[#1a1a2e]">{t("expertise.col3.desc2.bold")}</span> {t("expertise.col3.desc2.text")}
                </p>
                <p>{t("expertise.col3.desc3")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* T&G만의 차별화 전략 */}
      <section className="bg-white px-4 py-1 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center gap-2 md:mb-8">
            <div className="h-4 w-1 bg-[#e87a1e] md:h-5" />
            <h3 className="text-base font-medium text-[#1a1a2e] md:text-lg">{t("expertise.diff.title")}</h3>
          </div>

          <div className="space-y-4 md:space-y-6">
            {/* Row 1 */}
            <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-4">
              <div className={`flex h-24 w-24 flex-shrink-0 items-center justify-center self-center rounded-full border-2 border-[#e87a1e] text-center font-medium leading-tight text-[#e87a1e] md:h-36 md:w-36 ${language === "en" ? "text-[10px] md:text-xs" : "text-xs md:text-sm"}`}>
                {t("expertise.diff.row1.circle")}
              </div>
              <div className="hidden items-center text-xl text-[#ccc] md:flex md:text-2xl">→</div>
              <div className={`flex-1 rounded-lg border border-[#ddd] bg-[#fafafa] px-4 py-4 leading-relaxed text-[#333] md:px-6 md:py-5 ${language === "en" ? "text-[10px] md:text-xs" : "text-xs md:text-sm"}`}>
                <p className="mb-2 font-medium text-[#e87a1e] md:mb-3">{t("expertise.diff.row1.title")}</p>
                <p className="mb-1 md:mb-2">{t("expertise.diff.row1.item1")}</p>
                <p className="mb-1 md:mb-2">{t("expertise.diff.row1.item2")}</p>
                <p>{t("expertise.diff.row1.item3")}</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-4">
              <div className={`flex h-24 w-24 flex-shrink-0 items-center justify-center self-center rounded-full border-2 border-[#e87a1e] text-center font-medium leading-tight text-[#e87a1e] md:h-36 md:w-36 ${language === "en" ? "text-[10px] md:text-xs" : "text-xs md:text-sm"}`}>
                {t("expertise.diff.row2.circle")}
              </div>
              <div className="hidden items-center text-xl text-[#ccc] md:flex md:text-2xl">→</div>
              <div className={`flex-1 rounded-lg border border-[#ddd] bg-[#fafafa] px-4 py-4 leading-relaxed text-[#333] md:px-6 md:py-5 ${language === "en" ? "text-[10px] md:text-xs" : "text-xs md:text-sm"}`}>
                <p className="mb-2 font-medium text-[#e87a1e] md:mb-3">{t("expertise.diff.row2.title")}</p>
                <p className="mb-1 md:mb-2">{t("expertise.diff.row2.item1")}</p>
                <p className="mb-1 md:mb-2">{t("expertise.diff.row2.item2")}</p>
                <p>{t("expertise.diff.row2.item3")} <span className="font-medium text-[#e87a1e]">(070-7464-1151)</span></p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-4">
              <div className={`flex h-24 w-24 flex-shrink-0 items-center justify-center self-center rounded-full border-2 border-[#e87a1e] text-center font-medium leading-tight text-[#e87a1e] md:h-36 md:w-36 ${language === "en" ? "text-[10px] md:text-xs" : "text-xs md:text-sm"}`}>
                {t("expertise.diff.row3.circle")}
              </div>
              <div className="hidden items-center text-xl text-[#ccc] md:flex md:text-2xl">→</div>
              <div className={`flex-1 rounded-lg border border-[#ddd] bg-[#fafafa] px-4 py-4 leading-relaxed text-[#333] md:px-6 md:py-5 ${language === "en" ? "text-[10px] md:text-xs" : "text-xs md:text-sm"}`}>
                <p className="mb-2 font-medium text-[#e87a1e] md:mb-3">{t("expertise.diff.row3.title")}</p>
                <p className="mb-1 md:mb-2">{t("expertise.diff.row3.item1")}</p>
                <p className="mb-1 md:mb-2">{t("expertise.diff.row3.item2")}</p>
                <p>{t("expertise.diff.row3.item3")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White gap */}
      <div className="h-16 bg-white md:h-32" />

      {/* Section: 분야별 전문 자격 기반 */}
      <section className="bg-white px-4 py-1 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 md:mb-8">
            <h3 className="mb-2 text-lg font-medium text-[#1a1a2e] md:text-xl lg:text-2xl">
              {t("expertise.qualifications.title")}
            </h3>
            <p className="text-xs text-[#666] md:text-sm">{t("expertise.qualifications.subtitle")}</p>
            <div className="mt-2 h-1 w-20 bg-[#e87a1e] md:mt-3 md:w-24" />
          </div>

          {/* 2x2 Grid of Expert Categories */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
            {/* 손해사정 전문인력 */}
            <div className="flex flex-col overflow-hidden rounded-lg border border-[#333] md:flex-row">
              <div className="flex w-full flex-col items-center justify-center bg-[#2a2a2a] px-4 py-4 text-center md:w-1/3 md:py-8">
                <h4 className={`mb-1 font-medium text-white md:mb-2 ${language === "en" ? "text-xs md:text-sm" : "text-sm md:text-base"}`}>{t("expertise.qual.adjuster.title")}</h4>
                <p className="text-[10px] text-white/70 md:text-xs">{t("expertise.qual.adjuster.subtitle")}</p>
              </div>
              <div className="flex w-full flex-col justify-center bg-[#3a3a3a] px-4 py-4 md:w-2/3 md:px-6 md:py-6">
                <ul className={`space-y-1 text-white/90 md:space-y-2 ${language === "en" ? "text-[10px] md:text-xs" : "text-xs md:text-sm"}`}>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-white/60 md:h-2 md:w-2" />{t("expertise.qual.adjuster.item1")}</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-white/60 md:h-2 md:w-2" />{t("expertise.qual.adjuster.item2")}</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-white/60 md:h-2 md:w-2" />{t("expertise.qual.adjuster.item3")}</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-white/60 md:h-2 md:w-2" />{t("expertise.qual.adjuster.item4")}</li>
                </ul>
              </div>
            </div>

            {/* 의료 전문인력 */}
            <div className="flex flex-col overflow-hidden rounded-lg border border-[#333] md:flex-row">
              <div className="flex w-full flex-col items-center justify-center bg-[#2a2a2a] px-4 py-4 text-center md:w-1/3 md:py-8">
                <h4 className={`mb-1 font-medium text-white md:mb-2 ${language === "en" ? "text-xs md:text-sm" : "text-sm md:text-base"}`}>{t("expertise.qual.medical.title")}</h4>
                <p className="text-[10px] text-white/70 md:text-xs">{t("expertise.qual.medical.subtitle")}</p>
              </div>
              <div className="flex w-full flex-col justify-center bg-[#3a3a3a] px-4 py-4 md:w-2/3 md:px-6 md:py-6">
                <ul className={`space-y-1 text-white/90 md:space-y-2 ${language === "en" ? "text-[10px] md:text-xs" : "text-xs md:text-sm"}`}>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-white/60 md:h-2 md:w-2" />{t("expertise.qual.medical.item1")}</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-white/60 md:h-2 md:w-2" />{t("expertise.qual.medical.item2")}</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-white/60 md:h-2 md:w-2" />{t("expertise.qual.medical.item3")}</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-white/60 md:h-2 md:w-2" />{t("expertise.qual.medical.item4")}</li>
                </ul>
              </div>
            </div>

            {/* 공학 전문인력 */}
            <div className="flex flex-col overflow-hidden rounded-lg border border-[#333] md:flex-row">
              <div className="flex w-full flex-col items-center justify-center bg-[#2a2a2a] px-4 py-4 text-center md:w-1/3 md:py-8">
                <h4 className={`mb-1 font-medium text-white md:mb-2 ${language === "en" ? "text-xs md:text-sm" : "text-sm md:text-base"}`}>{t("expertise.qual.engineering.title")}</h4>
                <p className="text-[10px] text-white/70 md:text-xs">{t("expertise.qual.engineering.subtitle")}</p>
              </div>
              <div className="flex w-full flex-col justify-center bg-[#3a3a3a] px-4 py-4 md:w-2/3 md:px-6 md:py-6">
                <ul className={`space-y-1 text-white/90 md:space-y-2 ${language === "en" ? "text-[10px] md:text-xs" : "text-xs md:text-sm"}`}>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-white/60 md:h-2 md:w-2" />{t("expertise.qual.engineering.item1")}</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-white/60 md:h-2 md:w-2" />{t("expertise.qual.engineering.item2")}</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-white/60 md:h-2 md:w-2" />{t("expertise.qual.engineering.item3")}</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-white/60 md:h-2 md:w-2" />{t("expertise.qual.engineering.item4")}</li>
                </ul>
              </div>
            </div>

            {/* 국제 전문자격 */}
            <div className="flex flex-col overflow-hidden rounded-lg border border-[#333] md:flex-row">
              <div className="flex w-full flex-col items-center justify-center bg-[#2a2a2a] px-4 py-4 text-center md:w-1/3 md:py-8">
                <h4 className={`mb-1 font-medium text-white md:mb-2 ${language === "en" ? "text-xs md:text-sm" : "text-sm md:text-base"}`}>{t("expertise.qual.intl.title")}</h4>
                <p className="text-[10px] text-white/70 md:text-xs">{t("expertise.qual.intl.subtitle")}</p>
              </div>
              <div className="flex w-full flex-col justify-center bg-[#3a3a3a] px-4 py-4 md:w-2/3 md:px-6 md:py-6">
                <ul className={`space-y-1 text-white/90 md:space-y-2 ${language === "en" ? "text-[10px] md:text-xs" : "text-xs md:text-sm"}`}>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-white/60 md:h-2 md:w-2" />{t("expertise.qual.intl.item1")}</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-white/60 md:h-2 md:w-2" />{t("expertise.qual.intl.item2")}</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-white/60 md:h-2 md:w-2" />{t("expertise.qual.intl.item3")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* gap */}
      <div className="h-20 bg-white md:h-[260px]" />

      {/* Section: 디지털과 법률이 결합된 차세대 손해사정 체계 */}
      <section className="relative min-h-[200px] w-full md:min-h-[300px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/company/hunters-suit.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#1a1a2e]/70" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-10 text-center md:px-16 md:py-16">
          <h2 className={`mb-3 font-medium text-[#e87a1e] md:mb-4 ${language === "en" ? "text-base md:text-xl lg:text-3xl" : "text-lg md:text-2xl lg:text-4xl"}`}>
            {t("expertise.digital.title")}
          </h2>
          <p className="text-sm text-white/80 md:text-base lg:text-lg">
            {t("expertise.digital.subtitle")}
          </p>
        </div>
      </section>

      {/* Digital & Legal Sections */}
      <section className="bg-white">
        {/* DX 가속화 */}
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center justify-center bg-[#2a2a2a] px-4 py-6 md:w-1/4 md:px-8 md:py-10">
            <div className="text-center text-white">
              <h4 className={`font-semibold leading-snug ${language === "en" ? "text-base md:text-xl" : "text-lg md:text-2xl"}`}>
                {t("expertise.dx.title")}
              </h4>
              <p className="mt-1 text-sm text-white/70 md:mt-2 md:text-lg">
                {t("expertise.dx.subtitle")}
              </p>
            </div>
          </div>
          <div className="flex-1 bg-[#3a3a3a] px-4 py-6 md:px-12 md:py-10">
            <p className={`mb-3 leading-relaxed text-white/90 md:mb-4 ${language === "en" ? "text-[10px] md:text-sm" : "text-xs md:text-base"}`}>
              {t("expertise.dx.desc")}
            </p>
            {/* AIMS 3 Services */}
            <div className="mb-3 space-y-2 rounded bg-[#4a4a4a]/60 px-3 py-3 md:mb-4 md:space-y-3 md:px-4 md:py-4">
              <div className={`leading-relaxed text-white/90 ${language === "en" ? "text-[10px] md:text-sm" : "text-xs md:text-base"}`}>
                <span className="font-medium text-[#5a9bd4]">① Autodit</span> - {t("expertise.dx.autodit")}
              </div>
              <div className={`leading-relaxed text-white/90 ${language === "en" ? "text-[10px] md:text-sm" : "text-xs md:text-base"}`}>
                <span className="font-medium text-[#5a9bd4]">② Autocapture</span> - {t("expertise.dx.autocapture")}
              </div>
              <div className={`leading-relaxed text-white/90 ${language === "en" ? "text-[10px] md:text-sm" : "text-xs md:text-base"}`}>
                <span className="font-medium text-[#5a9bd4]">③ Autoclaim</span> - {t("expertise.dx.autoclaim")}
              </div>
            </div>
            <div className="border-l-4 border-[#e87a1e] bg-[#4a4a4a] px-3 py-2 md:px-4 md:py-3">
              <p className={`leading-relaxed text-[#e87a1e] ${language === "en" ? "text-[10px]" : "text-[10px] md:text-sm"}`}>
                {t("expertise.dx.footer")}
              </p>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-[#5b5b5b]" />
        {/* 전문성 고도화 */}
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center justify-center bg-[#2a2a2a] px-4 py-6 md:w-1/4 md:px-8 md:py-10">
            <div className="text-center text-white">
              <h4 className={`font-semibold leading-snug ${language === "en" ? "text-base md:text-xl" : "text-lg md:text-2xl"}`}>
                {t("expertise.legal.title")}
              </h4>
              <p className="mt-1 text-sm text-white/70 md:mt-2 md:text-lg">
                {t("expertise.legal.subtitle")}
              </p>
            </div>
          </div>
          <div className="flex-1 bg-[#3a3a3a] px-4 py-6 md:px-12 md:py-10">
            <p className={`mb-3 leading-relaxed text-white/90 md:mb-4 ${language === "en" ? "text-[10px] md:text-sm" : "text-xs md:text-base"}`}>
              {t("expertise.legal.desc")}
            </p>
            {/* Dowon Law Firm Service */}
            <div className="mb-3 rounded bg-[#4a4a4a]/60 px-3 py-3 md:mb-4 md:px-4 md:py-4">
              <p className={`leading-relaxed text-white/90 ${language === "en" ? "text-[10px] md:text-sm" : "text-xs md:text-base"}`}>
                {t("expertise.legal.service")}
              </p>
            </div>
            <div className="border-l-4 border-[#e87a1e] bg-[#4a4a4a] px-3 py-2 md:px-4 md:py-3">
              <p className={`leading-relaxed text-[#e87a1e] ${language === "en" ? "text-[10px]" : "text-[10px] md:text-sm"}`}>
                {t("expertise.legal.footer")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* gap */}
      <div className="h-12 bg-white md:h-[100px]" />

      {/* Section: 경쟁력 4S 핵심역량 */}
      <section className="bg-[#fafafa] px-4 py-10 md:px-16 md:py-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center gap-2 md:mb-10">
            <div className="h-5 w-1 bg-[#e87a1e] md:h-6" />
            <h3 className="text-lg font-medium text-[#1a1a2e] md:text-xl lg:text-2xl">
              {t("expertise.4s.title")} <span className="text-[#e87a1e]">4S</span> {t("expertise.4s.core")}
            </h3>
          </div>

          <div className="flex flex-col items-start gap-6 lg:flex-row lg:gap-12">
            {/* 4S Circle Diagram */}
            <div className="relative mx-auto h-48 w-48 flex-shrink-0 md:h-72 md:w-72 lg:mx-0">
              {/* Circle segments */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="absolute left-0 top-0 flex h-1/2 w-1/2 items-end justify-end bg-[#f5a623] pb-4 pr-3 md:pb-6 md:pr-4">
                  <span className="text-sm font-medium text-white md:text-lg">System</span>
                </div>
                <div className="absolute right-0 top-0 flex h-1/2 w-1/2 items-end justify-start bg-[#e89630] pb-4 pl-3 md:pb-6 md:pl-4">
                  <span className="text-sm font-medium text-white md:text-lg">Speciality</span>
                </div>
                <div className="absolute bottom-0 left-0 flex h-1/2 w-1/2 items-start justify-end bg-[#e89630] pr-3 pt-4 md:pr-4 md:pt-6">
                  <span className="text-sm font-medium text-white md:text-lg">Speed</span>
                </div>
                <div className="absolute bottom-0 right-0 flex h-1/2 w-1/2 items-start justify-start bg-[#f5a623] pl-3 pt-4 md:pl-4 md:pt-6">
                  <span className="text-sm font-medium text-white md:text-lg">Support</span>
                </div>
              </div>
              {/* Center dividers */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-white" />
              <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-white" />
            </div>

            {/* Descriptions */}
            <div className="flex-1 space-y-4 md:space-y-6">
              {/* System */}
              <div className="border-l-4 border-[#e87a1e] pl-3 md:pl-4">
                <p className={`text-[#333] ${language === "en" ? "text-[10px] md:text-sm" : "text-xs md:text-base"}`}>
                  {t("expertise.4s.system")}
                </p>
                <p className={`text-[#e87a1e] ${language === "en" ? "text-[10px]" : "text-[10px] md:text-sm"}`}>{t("expertise.4s.system.sub")}</p>
              </div>

              {/* Speciality */}
              <div className="border-l-4 border-[#e87a1e] pl-3 md:pl-4">
                <p className={`text-[#333] ${language === "en" ? "text-[10px] md:text-sm" : "text-xs md:text-base"}`}>
                  {t("expertise.4s.speciality")}
                </p>
                <p className={`text-[#333] ${language === "en" ? "text-[10px]" : "text-[10px] md:text-sm"}`}>{t("expertise.4s.speciality.sub1")}</p>
                <p className={`text-[#e87a1e] ${language === "en" ? "text-[10px]" : "text-[10px] md:text-sm"}`}>{t("expertise.4s.speciality.sub2")}</p>
              </div>

              {/* Support */}
              <div className="border-l-4 border-[#e87a1e] pl-3 md:pl-4">
                <p className={`text-[#333] ${language === "en" ? "text-[10px] md:text-sm" : "text-xs md:text-base"}`}>
                  {t("expertise.4s.support")}
                </p>
                <p className={`text-[#333] ${language === "en" ? "text-[10px]" : "text-[10px] md:text-sm"}`}>{t("expertise.4s.support.sub1")}</p>
                <p className={`text-[#e87a1e] ${language === "en" ? "text-[10px]" : "text-[10px] md:text-sm"}`}>{t("expertise.4s.support.sub2")}</p>
              </div>

              {/* Speed */}
              <div className="border-l-4 border-[#e87a1e] pl-3 md:pl-4">
                <p className={`text-[#333] ${language === "en" ? "text-[10px] md:text-sm" : "text-xs md:text-base"}`}>
                  {t("expertise.4s.speed")}
                </p>
                <p className={`text-[#e87a1e] ${language === "en" ? "text-[10px]" : "text-[10px] md:text-sm"}`}>{t("expertise.4s.speed.sub")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-12 bg-white md:h-20" />
    </main>
  );
}
