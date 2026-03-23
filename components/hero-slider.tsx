"use client";

import { useState, useEffect, useCallback } from "react";
import { ShieldCheck, HeartPulse, HardHat, Award } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const TOTAL_SLIDES = 5;
const AUTO_INTERVAL = 5000;

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { t } = useLanguage();

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % TOTAL_SLIDES);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Slide 1 */}
      <SlideWrapper index={0} current={currentSlide} bgImage="/images/slide-1.jpg" overlayColor="bg-[#1a1a2e]/50">
        <div className="flex h-full flex-col justify-center px-12 md:px-20 lg:px-28">
          <p className="mb-4 text-xl italic text-white/80 md:text-2xl lg:text-3xl" style={{ fontFamily: "Georgia, serif" }}>
            {t("hero.slide1.tagline")}
          </p>
          <h2 className="mb-2 text-xl font-normal leading-tight text-white md:text-2xl lg:text-3xl">
            {t("hero.slide1.title")}, <span className="text-[#e87a1e]">T&amp;G</span> {t("nav.logo").split("T&G")[1] || "손해사정"}
          </h2>
          <h1 className="text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl xl:text-5xl">
            &ldquo;<span className="text-[#e87a1e]">{t("hero.slide1.quote").split(" ")[0]}</span> {t("hero.slide1.quote").split(" ").slice(1).join(" ")}&rdquo;
          </h1>
        </div>
      </SlideWrapper>

      {/* Slide 2 */}
      <SlideWrapper index={1} current={currentSlide} bgImage="/images/slide-2.jpg" overlayColor="bg-[#3a3a3a]/60">
        <div className="flex h-full flex-col px-12 pt-32 pb-16 md:px-20 lg:px-28">
          <div>
            <h1 className="mb-4 text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
              {t("hero.slide2.title")}
            </h1>
            <p className="max-w-4xl text-sm leading-relaxed text-white/80 md:text-base lg:text-lg">
              {t("hero.slide2.desc")} <span className="text-[#e87a1e] font-medium">{t("hero.slide2.insurers")}</span> {t("hero.slide2.associations").split("/")[0] && <span className="text-[#e87a1e] font-medium">{t("hero.slide2.associations")}</span>} {t("hero.slide2.together")}
            </p>
          </div>
          <div className="flex-1" />
          <div className="mb-4">
            <p className="mb-4 text-2xl font-medium text-white md:text-3xl">
              <span className="text-[#e87a1e]">18+</span> {t("hero.slide2.partnership")}
            </p>
            <p className="text-base leading-relaxed text-white/80 md:text-lg lg:text-xl whitespace-pre-line">
              {t("hero.slide2.partners")}
            </p>
            <a href="/partners/status" className="mt-3 inline-block text-sm text-white/60 transition-colors hover:text-[#e87a1e]">
              {t("hero.slide2.more")} &rarr;
            </a>
          </div>
        </div>
      </SlideWrapper>

      {/* Slide 3 */}
      <SlideWrapper index={2} current={currentSlide} bgImage="/images/slide-3.jpg" overlayColor="bg-[#5a5a5a]/50">
        <div className="flex h-full items-center justify-center px-6 md:px-12 lg:px-16">
          <div className="mx-auto w-full max-w-6xl rounded-lg bg-[#5a5a5a]/85 px-10 py-10 backdrop-blur-sm md:px-16 md:py-12 lg:px-20 lg:py-14">
            <div className="mb-8 text-center md:mb-10">
              <h1 className="mb-5 text-2xl font-medium text-white md:text-3xl lg:text-4xl xl:text-5xl">
                {t("hero.slide3.title").split("전문 자격")[0]}<span className="text-[#e87a1e]">{t("hero.slide3.title").includes("Professional") ? "Professional Qualifications" : "전문 자격"}</span>{t("hero.slide3.title").split("전문 자격")[1] || t("hero.slide3.title").split("Professional Qualifications")[1] || ""}
              </h1>
              <p className="text-base leading-relaxed text-white/80 md:text-lg lg:text-xl whitespace-pre-line">
                {t("hero.slide3.desc")}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10 lg:gap-12">
              {[
                { icon: ShieldCheck, title: t("hero.slide3.adjuster.title"), desc: t("hero.slide3.adjuster.desc") },
                { icon: HeartPulse, title: t("hero.slide3.medical.title"), desc: t("hero.slide3.medical.desc") },
                { icon: HardHat, title: t("hero.slide3.tech.title"), desc: t("hero.slide3.tech.desc") },
                { icon: Award, title: t("hero.slide3.intl.title"), desc: t("hero.slide3.intl.desc") },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-24 w-24 items-center justify-center md:h-28 md:w-28 lg:h-32 lg:w-32">
                    <item.icon className="h-20 w-20 text-white/90 md:h-24 md:w-24 lg:h-28 lg:w-28" strokeWidth={0.7} />
                  </div>
                  <h3 className="text-base font-medium text-white md:text-lg lg:text-xl">{item.title}</h3>
                  <p className="whitespace-pre-line text-xs leading-relaxed text-white/70 md:text-sm lg:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SlideWrapper>

      {/* Slide 4 */}
      <SlideWrapper index={3} current={currentSlide} bgImage="/images/slide-4.jpg" overlayColor="bg-[#2a4a6e]/40">
        <div className="flex h-full flex-col px-12 pt-32 pb-16 md:px-20 lg:px-28">
          <div>
            <h1 className="mb-4 text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
              {t("hero.slide4.title")}
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-white/80 md:text-base whitespace-pre-line">
              {t("hero.slide4.desc")}
            </p>
          </div>
          <div className="flex-1" />
          <div className="mb-4">
            <p className="text-2xl font-normal text-white md:text-3xl">
              {t("hero.slide4.network")} <span className="font-medium text-[#e87a1e]">12</span>{t("hero.slide4.branches")} <span className="font-medium text-[#e87a1e]">500</span>{t("hero.slide4.experts")}
            </p>
            <p className="mt-2 text-sm text-white/60 md:text-base">
              {t("hero.slide4.locations")}{" "}
              <a href="/company/expertise#infrastructure" className="text-white/50 transition-colors hover:text-[#e87a1e]">
                {t("hero.slide4.more")} &rarr;
              </a>
            </p>
          </div>
        </div>
      </SlideWrapper>

      {/* Slide 5 */}
      <SlideWrapper index={4} current={currentSlide} bgImage="/images/slide-5.jpg" overlayColor="bg-[#2a2a2a]/65">
        <div className="flex h-full flex-col items-center justify-center px-12 md:px-20 lg:px-28">
          <h1 className="mb-8 text-center text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
            {t("hero.slide5.title")}
          </h1>
          <div className="max-w-4xl text-center">
            <p className="text-xl leading-relaxed text-white/90 md:text-2xl lg:text-3xl">
              <span className="font-medium text-[#e87a1e]">{t("hero.slide5.digital")}</span>{t("hero.slide5.added")} <span className="font-medium text-[#4a9eff]">{t("hero.slide5.legal")}</span>{t("hero.slide5.combined")}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/80 md:text-xl lg:text-2xl">
              {t("hero.slide5.tagline")}
            </p>
            <div className="mt-10">
              <p className="mb-6 text-center text-lg font-medium tracking-wider text-white/70 md:text-xl">
                {t("hero.slide5.partners")}
              </p>
              <div className="flex items-center justify-center gap-6 md:gap-10">
                <div className="flex items-center">
                  <span className="text-4xl font-light text-white/60 md:text-5xl">[</span>
                  <span className="mx-4 text-2xl font-bold tracking-wider text-[#1a1a1a] md:text-3xl lg:text-4xl">AIMS</span>
                  <span className="text-4xl font-light text-white/60 md:text-5xl">]</span>
                </div>
                <div className="flex items-center">
                  <span className="text-4xl font-light text-white/60 md:text-5xl">[</span>
                  <span className="mx-4 text-2xl font-bold tracking-wider text-[#1a6aba] md:text-3xl lg:text-4xl">DOWONLAWFIRM</span>
                  <span className="text-4xl font-light text-white/60 md:text-5xl">]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideWrapper>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "scale-110 bg-white" : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function SlideWrapper({
  index,
  current,
  bgImage,
  overlayColor,
  children,
}: {
  index: number;
  current: number;
  bgImage: string;
  overlayColor: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
        index === current ? "z-10 opacity-100" : "z-0 opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className={`absolute inset-0 ${overlayColor}`} />
      </div>
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
