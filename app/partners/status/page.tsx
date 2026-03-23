"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import { useLanguage } from "@/lib/language-context";

const domesticPartners = [
  { src: "/images/partners/samsung.png", alt: "삼성화재" },
  { src: "/images/partners/hyundai.png", alt: "현대해상" },
  { src: "/images/partners/kb.png", alt: "KB손해보험" },
  { src: "/images/partners/meritz.png", alt: "메리츠화재" },
  { src: "/images/partners/hanwha.png", alt: "한화손해보험" },
  { src: "/images/partners/nh.png", alt: "NH농협손해보험" },
  { src: "/images/partners/lotte.png", alt: "롯데손해보험" },
  { src: "/images/partners/heungkuk.png", alt: "흥국화재" },
  { src: "/images/partners/shinhan.png", alt: "신한EZ손해보험" },
  { src: "/images/partners/suhyup.png", alt: "수협" },
  { src: "/images/partners/kdgc.png", alt: "방위산업공제조합" },
  { src: "/images/partners/kswcu.png", alt: "한국사회복지공제회" },
  { src: "/images/partners/예별.png", alt: "예별손해보험" },
];

const foreignPartners = [
  { src: "/images/partners/lina.png", alt: "라이나손보" },
  { src: "/images/partners/aig.png", alt: "AIG" },
  { src: "/images/partners/starr.png", alt: "STARR" },
  { src: "/images/partners/samsung-china.png", alt: "삼성화재 중국" },
];

export default function PartnersStatusPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex h-[280px] w-full items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/company/sean-buildings.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#1a1a2e]/60" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">
            {t("partners.status.hero")}
          </h1>
        </div>
      </section>

      {/* Insurance Partners Section */}
      <section className="bg-white px-8 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h3 className="mb-2 text-xl font-medium text-[#1a1a2e] md:text-2xl">
              {t("partners.status.title")}
              {" "}
              <span className="text-[#e87a1e]">{t("partners.status.count")}</span>
              {" "}
              {t("partners.status.partnership")}
            </h3>
            <p className="text-sm text-[#666]">{t("partners.status.desc")}</p>
            <div className="mx-auto mt-4 h-px w-64 bg-[#e87a1e]" />
          </div>

          {/* 국내 */}
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-4 w-1 bg-[#1a1a2e]" />
              <span className="text-base font-medium text-[#1a1a2e]">{t("partners.status.domestic")}</span>
            </div>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-5">
              {domesticPartners.map((partner) => (
                <div
                  key={partner.alt}
                  className="flex h-16 items-center justify-center rounded border border-[#e5e5e5] bg-[#fafafa] px-4 md:h-20"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={140}
                    height={50}
                    className="h-10 w-auto object-contain md:h-12"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 해외 */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-4 w-1 bg-[#1a1a2e]" />
              <span className="text-base font-medium text-[#1a1a2e]">{t("partners.status.foreign")}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {foreignPartners.map((partner) => (
                <div
                  key={partner.alt}
                  className="flex h-16 items-center justify-center rounded border border-[#e5e5e5] bg-[#fafafa] px-4 md:h-20"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={140}
                    height={50}
                    className="h-10 w-auto object-contain md:h-12"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* White gap */}
      <div className="h-24 bg-white" />
    </main>
  );
}
