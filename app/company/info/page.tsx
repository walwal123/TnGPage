"use client";

import Navbar from "@/components/navbar";
import { useLanguage } from "@/lib/language-context";

export default function CompanyInfoPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1: Hero - 회사안내 */}
      <section className="relative flex h-[280px] w-full items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/company/sean-buildings.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#1a1a2e]/60" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">
            {t("company.info.hero")}
          </h1>
        </div>
      </section>

      {/* Section 2: Company Slogan */}
      <section className="bg-white py-20 text-center">
        <p className="mb-4 text-lg text-[#5a9bd4] md:text-xl" style={{ fontFamily: "Georgia, serif" }}>
          {t("company.info.slogan.label")}
        </p>
        <h2 className="text-3xl font-medium leading-relaxed text-[#1a1a2e] md:text-4xl">
          {t("company.info.slogan.line1")}
          <br />
          {t("company.info.slogan.line2")}
        </h2>
      </section>

      {/* Section 3: Handshake Image with overlay */}
      <section className="relative h-[450px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/company/radission-handshake.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#3a3a5a]/40" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
          <h3 className="mb-6 text-2xl font-medium leading-relaxed text-white md:text-3xl lg:text-4xl">
            <span className="text-[#f0c050]">{t("company.info.expertise")}</span>
            {t("company.info.expertise.desc")}
          </h3>
          <p className="text-lg font-medium text-white md:text-xl lg:text-2xl">
            &quot;{t("company.info.trust.quote")}&quot;
          </p>
        </div>
      </section>

      {/* gap */}
      <div className="h-96 bg-white" />

      {/* Section 4: Trust & Growth Values - Full width background with semi-transparent overlay box */}
      <section className="relative min-h-[500px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/company/mediensturmer-meeting.jpg)" }}
        />
        <div className="relative z-10 flex min-h-[500px] flex-col lg:flex-row">
          {/* Left - Semi-transparent text box */}
          <div className="flex flex-1 items-center bg-[#3a4a3a]/85 px-8 py-16 backdrop-blur-sm md:px-12 lg:px-16">
            <div>
              <h3 className="mb-8 text-xl font-medium text-white md:text-2xl" style={{ fontFamily: "Georgia, serif" }}>
                {'"'}{t("company.info.values.title")}{'"'}
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="mb-2">
                    <span className="font-medium text-[#e87a1e]" style={{ fontFamily: "Georgia, serif" }}>{t("company.info.professionalism")}</span>
                    <span className="text-white/80">{t("company.info.professionalism.label")}</span>
                  </p>
                  <p className="text-sm leading-relaxed text-white/70 md:text-base whitespace-pre-line">
                    {t("company.info.professionalism.desc")}
                  </p>
                </div>

                <div>
                  <p className="mb-2">
                    <span className="font-medium text-[#e87a1e]" style={{ fontFamily: "Georgia, serif" }}>{t("company.info.trust")}</span>
                    <span className="text-white/80">{t("company.info.trust.label")}</span>
                  </p>
                  <p className="text-sm leading-relaxed text-white/70 md:text-base">
                    {t("company.info.trust.desc")}
                  </p>
                </div>

                <div>
                  <p className="mb-2">
                    <span className="font-medium text-[#e87a1e]" style={{ fontFamily: "Georgia, serif" }}>{t("company.info.innovation")}</span>
                    <span className="text-white/80">{t("company.info.innovation.label")}</span>
                  </p>
                  <p className="text-sm leading-relaxed text-white/70 md:text-base whitespace-pre-line">
                    {t("company.info.innovation.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Transparent area showing background image */}
          <div className="hidden flex-1 lg:block" />
        </div>
      </section>

      {/* White gap */}
      <div className="h-96 bg-white" />

      {/* Section 5: Overview */}
      <section className="relative w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/company/imagine-blocks.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#f5f0e8]/80" />
        </div>
        <div className="relative z-10 px-8 py-20 md:px-16 lg:px-24">
          <h2 className="mb-12 text-center text-3xl font-medium text-[#1a1a2e] md:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
            {t("company.info.overview")}
          </h2>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {/* Row 1 */}
            <div className="rounded-lg border border-[#d0d0d0] bg-white/80 p-6 text-center shadow-sm">
              <p className="mb-2 text-sm text-[#666]">{t("company.info.name")}</p>
              <p className="text-lg font-medium text-[#e87a1e]">{t("company.info.name.value")}</p>
            </div>
            <div className="rounded-lg border border-[#d0d0d0] bg-white/80 p-6 text-center shadow-sm">
              <p className="mb-2 text-sm text-[#666]">{t("company.info.ceo")}</p>
              <p className="text-lg font-medium text-[#1a1a2e]">{t("company.info.ceo.value")}</p>
            </div>
            <div className="rounded-lg border border-[#d0d0d0] bg-white/80 p-6 text-center shadow-sm">
              <p className="mb-2 text-sm text-[#666]">{t("company.info.business")}</p>
              <p className="text-lg font-medium text-[#1a1a2e]">{t("company.info.business.value")}</p>
            </div>

            {/* Row 2 */}
            <div className="rounded-lg border border-[#d0d0d0] bg-white/80 p-6 text-center shadow-sm">
              <p className="mb-2 text-sm text-[#666]">{t("company.info.established")}</p>
              <p className="text-lg font-medium text-[#1a1a2e]">{t("company.info.established.value")}</p>
            </div>
            <div className="rounded-lg border border-[#d0d0d0] bg-white/80 p-6 text-center shadow-sm">
              <p className="mb-2 text-sm text-[#666]">{t("company.info.address")}</p>
              <p className="text-base font-medium text-[#1a1a2e] whitespace-pre-line">
                {t("company.info.address.value")}
              </p>
            </div>
            <div className="rounded-lg border border-[#d0d0d0] bg-white/80 p-6 text-center shadow-sm">
              <p className="mb-2 text-sm text-[#666]">TEL</p>
              <p className="text-lg font-medium text-[#1a1a2e]">02-741-0056</p>
            </div>
          </div>
        </div>
      </section>

      {/* White gap */}
      <div className="h-32 bg-white" />

      {/* Section 6: 그룹 구조 */}
      <section className="bg-white px-8 py-20 md:px-16 lg:px-24">
        <h2 className="mb-4 text-center text-3xl font-medium text-[#1a1a2e] md:text-4xl">
          {t("company.info.structure")}
        </h2>
        <p className="mb-2 text-center text-lg font-medium text-[#1a1a2e] md:text-xl">
          {t("company.info.structure.desc")} <span className="text-[#e87a1e]">{t("company.info.structure.group")}</span>
        </p>
        <p className="mb-12 text-center text-sm text-[#666] md:text-base">
          {t("company.info.structure.detail")}
        </p>

        {/* Organization Chart */}
        <div className="mx-auto max-w-4xl">
          {/* CEO */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-md border-2 border-[#5a9bd4] bg-[#5a9bd4] px-12 py-3 text-center">
              <span className="font-medium text-white">{t("company.info.structure.group")}</span>
            </div>
          </div>

          {/* Connecting lines */}
          <div className="relative mb-8">
            <div className="mx-auto h-8 w-px bg-[#999]" />
            <div className="mx-auto h-px w-[70%] bg-[#999]" />
            <div className="flex justify-center">
              <div className="flex w-[70%] justify-between">
                <div className="h-8 w-px bg-[#999]" />
                <div className="h-8 w-px bg-[#999]" />
                <div className="h-8 w-px bg-[#999]" />
              </div>
            </div>
          </div>

          {/* Three companies */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* T&G */}
            <div className="flex flex-col gap-3">
              <div className="w-full rounded-md border border-[#5a9bd4] bg-white px-6 py-3 text-center">
                <span className="font-medium text-[#1a1a2e]">{t("company.info.tng.name")}</span>
              </div>
              <div className="flex min-h-[100px] w-full items-center justify-center rounded-md border border-[#5a9bd4] bg-[#e8f4fc] px-4 py-3 text-center">
                <span className="text-sm leading-relaxed text-[#1a1a2e]">{t("company.info.tng.desc")}</span>
              </div>
              <div className="flex min-h-[80px] w-full flex-col items-center justify-center rounded-md border border-[#5a9bd4] bg-white px-4 py-3 text-center">
                <span className="text-xs text-[#1a1a2e]">{t("company.info.tng.locations")}</span>
                <span className="mt-1 text-sm font-medium text-[#e87a1e]">{t("company.info.tng.offices")}</span>
              </div>
            </div>

            {/* H&T */}
            <div className="flex flex-col gap-3">
              <div className="w-full rounded-md border border-[#5a9bd4] bg-white px-6 py-3 text-center">
                <span className="font-medium text-[#1a1a2e]">{t("company.info.hnt.name")}</span>
              </div>
              <div className="flex min-h-[100px] w-full items-center justify-center rounded-md border border-[#5a9bd4] bg-[#e8f4fc] px-4 py-3 text-center">
                <span className="text-sm leading-relaxed text-[#1a1a2e]">{t("company.info.hnt.desc")}</span>
              </div>
              <div className="flex min-h-[80px] w-full flex-col items-center justify-center rounded-md border border-[#5a9bd4] bg-white px-4 py-3 text-center">
                <span className="text-xs text-[#1a1a2e]">{t("company.info.hnt.locations")}</span>
                <span className="mt-1 text-sm font-medium text-[#e87a1e]">{t("company.info.hnt.offices")}</span>
              </div>
            </div>

            {/* 엔파비 */}
            <div className="flex flex-col gap-3">
              <div className="w-full rounded-md border border-[#5a9bd4] bg-white px-6 py-3 text-center">
                <span className="font-medium text-[#1a1a2e]">{t("company.info.enpaby")}</span>
              </div>
              <div className="flex min-h-[100px] w-full items-center justify-center rounded-md border border-[#5a9bd4] bg-[#e8f4fc] px-4 py-3 text-center">
                <span className="text-sm leading-relaxed text-[#1a1a2e]">{t("company.info.enpaby.desc")}</span>
              </div>
              <div className="flex min-h-[80px] w-full flex-col items-center justify-center rounded-md border border-[#5a9bd4] bg-white px-4 py-3 text-center">
                <span className="text-xs text-[#1a1a2e]">{t("company.info.enpaby.location")}</span>
                <span className="mt-1 text-sm font-medium text-[#e87a1e]">{t("company.info.enpaby.staff")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Description Cards */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* T&G Card */}
            <div className="flex flex-col overflow-hidden rounded-lg border border-[#5a9bd4] bg-white shadow-sm">
              <div className="border-b border-[#5a9bd4] bg-white px-6 py-4 text-center">
                <span className="text-xl font-medium text-[#1a1a2e]">T&G</span>
              </div>
              <div className="flex flex-1 items-center justify-center bg-[#5a9bd4] px-4 py-5 text-center">
                <p className="text-xs leading-relaxed text-white">
                  {t("company.info.tng.services")}
                </p>
              </div>
            </div>

            {/* H&T Card */}
            <div className="flex flex-col overflow-hidden rounded-lg border border-[#5a9bd4] bg-white shadow-sm">
              <div className="border-b border-[#5a9bd4] bg-white px-6 py-4 text-center">
                <span className="text-xl font-medium text-[#1a1a2e]">H&T</span>
              </div>
              <div className="flex flex-1 items-center justify-center bg-[#5a9bd4] px-4 py-5 text-center">
                <p className="text-xs leading-relaxed text-white">
                  {t("company.info.hnt.services")}
                </p>
              </div>
            </div>

            {/* 엔파비 Card */}
            <div className="flex flex-col overflow-hidden rounded-lg border border-[#5a9bd4] bg-white shadow-sm">
              <div className="border-b border-[#5a9bd4] bg-white px-6 py-4 text-center">
                <span className="text-xl font-medium text-[#1a1a2e]">{t("company.info.enpaby")}</span>
              </div>
              <div className="flex flex-1 items-center justify-center bg-[#5a9bd4] px-4 py-5 text-center">
                <p className="text-xs leading-relaxed text-white">
                  {t("company.info.enpaby.services")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] px-8 py-8 text-center">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} {t("footer.copyright")}
        </p>
      </footer>
    </main>
  );
}
