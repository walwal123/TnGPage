"use client";

import { FileCheck, Flame, Scale, HeartPulse, Wheat } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function SectionThree() {
  const { t } = useLanguage();

  const businessAreas = [
    {
      icon: FileCheck,
      title: t("section3.simple.title"),
      desc: t("section3.simple.desc"),
    },
    {
      icon: Flame,
      title: t("section3.property.title"),
      desc: t("section3.property.desc"),
    },
    {
      icon: Scale,
      title: t("section3.liability.title"),
      desc: t("section3.liability.desc"),
    },
    {
      icon: HeartPulse,
      title: t("section3.personal.title"),
      desc: t("section3.personal.desc"),
    },
    {
      icon: Wheat,
      title: t("section3.agriculture.title"),
      desc: t("section3.agriculture.desc"),
    },
  ];

  return (
    <div className="relative flex h-full w-full flex-col">
      {/* Background - rodeo meeting room */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/section-2-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-[#4a4a4a]/60 backdrop-blur-[2px]" />
      </div>

      {/* Content container - centered */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-16 md:px-16 md:pt-0">
        {/* Top text area */}
        <div className="mb-6 text-center md:mb-10">
          <h1 className="mb-2 text-lg font-medium leading-tight text-white md:mb-4 md:text-2xl lg:text-4xl">
            <span className="text-[#e87a1e]">{t("section3.title.tng")}</span>
            <span className="text-white">{t("section3.title.is")}</span>
            <span className="text-[#e87a1e]">{t("section3.title.property")}</span>
            <span className="text-white">{t("section3.title.and")}</span>
            <span className="text-[#e87a1e]">{t("section3.title.life")}</span>
            <span className="text-white">{t("section3.title.expert")}</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xs leading-relaxed text-white/80 md:text-base lg:text-lg">
            {t("section3.subtitle.each")}
            <span className="font-medium text-[#e87a1e]">{t("section3.subtitle.specialized")}</span>
            {t("section3.subtitle.systematic")}
            <span className="font-medium text-[#e87a1e]">{t("section3.subtitle.optimal")}</span>
            {t("section3.subtitle.provides")}
          </p>
        </div>

        {/* Bottom icons area - 5 cards, centered below text */}
        <div className="w-full max-w-7xl rounded-xl border border-white/10 bg-white/95 px-4 py-6 shadow-lg md:px-16 md:py-12">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-10">
            {businessAreas.map((item, index) => (
              <div 
                key={item.title} 
                className={`flex flex-col items-center gap-2 text-center md:gap-4 ${
                  index === 4 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="flex h-16 w-16 items-center justify-center md:h-28 md:w-28">
                  <item.icon className="h-12 w-12 text-[#333] md:h-24 md:w-24" strokeWidth={0.7} />
                </div>
                <h3 className="text-xs font-medium text-[#1a1a2e] md:text-base">{item.title}</h3>
                <p className="hidden text-xs leading-relaxed text-[#666] md:block md:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 bg-[#1a1a2e]/80 px-4 py-3 text-center md:px-8 md:py-4">
        <p className="text-xs text-white/60 md:text-sm">
          &copy; {new Date().getFullYear()} {t("footer.copyright")}
        </p>
      </div>
    </div>
  );
}
