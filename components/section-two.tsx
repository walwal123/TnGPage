"use client";

import { Handshake, Cpu, ShieldCheck, Plus } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function SectionTwo() {
  const { t } = useLanguage();

  return (
    <div className="relative flex h-full w-full flex-col">
      {/* Background - nasa earth from space */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/section-3-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-[#1a1a2e]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col px-4 pt-20 md:px-16 md:pt-32">
        {/* Top left text - original */}
        <div className="mb-4 text-left md:mb-6">
          <h2 className="mb-2 text-lg font-medium leading-tight text-white md:mb-3 md:text-2xl lg:text-4xl">
            {t("section2.title")}
          </h2>
          <p className="text-sm italic text-white/60 md:text-xl" style={{ fontFamily: "Georgia, serif" }}>
            {t("section2.subtitle")}
          </p>
        </div>

        {/* Center content */}
        <div className="flex flex-1 flex-col items-center justify-center">
          {/* Subtitle and title */}
          <div className="mb-4 text-center md:mb-10">
            <p className="mb-2 text-xs text-white/70 md:mb-3 md:text-lg">
              {t("section2.desc")}
            </p>
            <h2 className="text-base font-bold text-white md:text-2xl lg:text-4xl">
              <span className="text-[#e87a1e]">{t("section2.main.present")}</span>
              {t("section2.main.choice")} 
              <span className="text-[#e87a1e]">{t("section2.main.future")}</span>
              {t("section2.main.choice")} 
              <span className="text-[#e87a1e]">T&G</span>
              {' '}{t("section2.main.company")}
            </h2>
          </div>

          {/* Three circles with arrows - vertical on mobile, horizontal on desktop */}
          <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-2 md:flex-row md:gap-0">
            {/* Trust Circle */}
            <div className="flex flex-col items-center">
              <div className="flex h-[140px] w-[140px] flex-col items-center justify-center rounded-full border-2 border-white/40 md:h-[200px] md:w-[200px] lg:h-[320px] lg:w-[320px]">
                <Handshake className="mb-2 h-8 w-8 text-[#4a9eff] md:mb-4 md:h-12 md:w-12 lg:h-20 lg:w-20" strokeWidth={1.2} />
                <h3 className="text-base font-semibold text-white md:text-xl lg:text-3xl">{t("section2.trust.title")}</h3>
                <p className="mt-1 hidden text-center text-xs leading-relaxed text-white/80 md:mt-3 md:block md:text-sm lg:text-base whitespace-pre-line">
                  {t("section2.trust.desc")}
                </p>
              </div>
            </div>

            {/* Plus 1 */}
            <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#333] md:-mx-4 md:h-10 md:w-10 lg:-mx-5 lg:h-12 lg:w-12">
              <Plus className="h-4 w-4 text-white md:h-5 md:w-5 lg:h-6 lg:w-6" />
            </div>

            {/* Professional Circle - dashed */}
            <div className="flex flex-col items-center">
              <div className="flex h-[140px] w-[140px] flex-col items-center justify-center rounded-full border-2 border-dashed border-white/40 md:h-[200px] md:w-[200px] lg:h-[320px] lg:w-[320px]">
                <ShieldCheck className="mb-2 h-8 w-8 text-[#4a9eff] md:mb-4 md:h-12 md:w-12 lg:h-20 lg:w-20" strokeWidth={1.2} />
                <h3 className="text-sm font-semibold text-white md:text-lg lg:text-2xl">{t("section2.professional.title")}</h3>
                <p className="mt-1 hidden text-center text-xs leading-relaxed text-white/80 md:mt-3 md:block md:text-sm lg:text-base whitespace-pre-line">
                  {t("section2.professional.desc")}
                </p>
              </div>
            </div>

            {/* Plus 2 */}
            <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#333] md:-mx-4 md:h-10 md:w-10 lg:-mx-5 lg:h-12 lg:w-12">
              <Plus className="h-4 w-4 text-white md:h-5 md:w-5 lg:h-6 lg:w-6" />
            </div>

            {/* Digital Circle */}
            <div className="flex flex-col items-center">
              <div className="flex h-[140px] w-[140px] flex-col items-center justify-center rounded-full border-2 border-white/40 md:h-[200px] md:w-[200px] lg:h-[320px] lg:w-[320px]">
                <Cpu className="mb-2 h-8 w-8 text-[#4a9eff] md:mb-4 md:h-12 md:w-12 lg:h-20 lg:w-20" strokeWidth={1.2} />
                <h3 className="text-base font-semibold text-white md:text-xl lg:text-3xl">{t("section2.digital.title")}</h3>
                <p className="mt-1 hidden text-center text-xs leading-relaxed text-white/80 md:mt-3 md:block md:text-sm lg:text-base whitespace-pre-line">
                  {t("section2.digital.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
