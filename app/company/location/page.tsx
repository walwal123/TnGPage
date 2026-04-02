"use client";

import { MapPin, Train } from "lucide-react";
import Navbar from "@/components/navbar";
import { useLanguage } from "@/lib/language-context";

export default function CompanyLocationPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative flex h-[200px] w-full items-center justify-center md:h-[280px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/company/sean-buildings.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#1a1a2e]/60" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-2xl font-medium text-white md:text-3xl lg:text-5xl">
            {t("company.location.hero")}
          </h1>
        </div>
      </section>

      <div className="h-16 bg-white md:h-32" />

      <section className="bg-white px-4">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-lg border border-[#ddd] shadow-sm">
            <img
              src="/images/company/location-map.png"
              alt="T and G Location Map"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <div className="h-8 bg-white md:h-16" />

      <section className="bg-white px-4 pb-12 md:pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex flex-col gap-4 rounded-lg border-b border-[#eee] bg-white p-4 md:mb-8 md:flex-row md:items-start md:gap-6 md:p-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#f0f7fc] md:h-14 md:w-14">
              <MapPin className="h-6 w-6 text-[#5a9bd4] md:h-7 md:w-7" />
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-[#1a1a2e] md:mb-3 md:text-xl">{t("company.location.address.title")}</h2>
              <p className="mb-2 text-sm text-[#333] md:text-base">
                {t("company.location.address.value")}
              </p>
              <p className="text-sm text-[#5a9bd4] md:text-base">
                Tel : 070-7464-1151(곽팀장), 02-741-0056 (대표전화)
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-lg bg-white p-4 md:flex-row md:items-start md:gap-6 md:p-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#f0f7fc] md:h-14 md:w-14">
              <Train className="h-6 w-6 text-[#5a9bd4] md:h-7 md:w-7" />
            </div>
            <div className="flex-1">
              <h2 className="mb-4 text-lg font-semibold text-[#1a1a2e] md:mb-6 md:text-xl">{t("company.location.transport.title")}</h2>

              <div className="mb-6">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-[#1a1a2e] md:text-base">
                  <span className="text-[#5a9bd4]">●</span> {t("company.location.subway")}
                </h3>
                <div className="ml-0 space-y-2 md:ml-4">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    <span className="inline-flex min-w-[60px] items-center justify-center rounded bg-[#263C96] px-2 py-1 text-xs font-medium text-white md:min-w-[80px] md:px-3 md:text-sm">
                      {t("company.location.line1")}
                    </span>
                    <span className="text-xs text-[#333] md:text-sm">{t("company.location.exit12")}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    <span className="inline-flex min-w-[60px] items-center justify-center rounded bg-[#3CB44A] px-2 py-1 text-xs font-medium text-white md:min-w-[80px] md:px-3 md:text-sm">
                      {t("company.location.line2")}
                    </span>
                    <span className="text-xs text-[#333] md:text-sm">{t("company.location.exit4")}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    <span className="inline-flex min-w-[60px] items-center justify-center rounded bg-[#EF7C1C] px-2 py-1 text-xs font-medium text-white md:min-w-[80px] md:px-3 md:text-sm">
                      {t("company.location.line3")}
                    </span>
                    <span className="text-xs text-[#333] md:text-sm">{t("company.location.exit4")}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    <span className="inline-flex min-w-[60px] items-center justify-center rounded bg-[#996CAC] px-2 py-1 text-xs font-medium text-white md:min-w-[80px] md:px-3 md:text-sm">
                      {t("company.location.line5")}
                    </span>
                    <span className="text-xs text-[#333] md:text-sm">{t("company.location.exit4")}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-[#1a1a2e] md:text-base">
                  <span className="text-[#5a9bd4]">●</span> {t("company.location.bus")}
                </h3>
                <p className="mb-3 ml-0 text-xs text-[#666] md:ml-4 md:text-sm">{t("company.location.bus.stop")}</p>
                <div className="ml-0 space-y-2 md:ml-4">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    <span className="inline-flex min-w-[50px] items-center justify-center rounded bg-[#3D5BAB] px-2 py-1 text-xs font-medium text-white md:min-w-[60px] md:px-3 md:text-sm">
                      {t("company.location.trunk")}
                    </span>
                    <span className="text-xs text-[#333] md:text-sm">101, 102, 103, 104, 106, 107, 108, 140, 143, 150, 151</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    <span className="inline-flex min-w-[50px] items-center justify-center rounded bg-[#5BB025] px-2 py-1 text-xs font-medium text-white md:min-w-[60px] md:px-3 md:text-sm">
                      {t("company.location.branch")}
                    </span>
                    <span className="text-xs text-[#333] md:text-sm">7025</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    <span className="inline-flex min-w-[50px] items-center justify-center rounded bg-[#E60012] px-2 py-1 text-xs font-medium text-white md:min-w-[60px] md:px-3 md:text-sm">
                      {t("company.location.express")}
                    </span>
                    <span className="text-xs text-[#333] md:text-sm">1112, 1162</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 bg-white md:h-32" />
    </main>
  );
}
