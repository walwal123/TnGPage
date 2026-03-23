"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import HeroSlider from "./hero-slider";
import SectionTwo from "./section-two";
import SectionThree from "./section-three";
import { useLanguage } from "@/lib/language-context";

const SECTIONS = 3;

export default function FullpageScroll() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const sectionLabels = {
    ko: ["메인 슬라이더", "사업분야", "핵심가치"],
    en: ["Main Slider", "Business Areas", "Core Values"],
  };

  const scrollToSection = useCallback(
    (index: number) => {
      if (isScrolling || index < 0 || index >= SECTIONS) return;
      setIsScrolling(true);
      setCurrentSection(index);
      setTimeout(() => setIsScrolling(false), 900);
    },
    [isScrolling]
  );

  // Wheel handler
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;

      if (e.deltaY > 0) {
        scrollToSection(currentSection + 1);
      } else if (e.deltaY < 0) {
        scrollToSection(currentSection - 1);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentSection, isScrolling, scrollToSection]);

  // Touch handler for mobile
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return;
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          scrollToSection(currentSection + 1);
        } else {
          scrollToSection(currentSection - 1);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      container.addEventListener("touchend", handleTouchEnd, {
        passive: true,
      });
    }
    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [currentSection, isScrolling, scrollToSection]);

  // Keyboard handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        scrollToSection(currentSection + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        scrollToSection(currentSection - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, scrollToSection]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Sections wrapper */}
      <div
        className="h-full transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{ transform: `translateY(-${currentSection * 100}vh)` }}
      >
        {/* Section 1 - Hero Slider */}
        <section className="h-screen w-full" aria-label={sectionLabels[language][0]}>
          <HeroSlider />
        </section>

        {/* Section 2 - 사업분야 */}
        <section className="h-screen w-full" aria-label={sectionLabels[language][1]}>
          <SectionThree />
        </section>

        {/* Section 3 - 핵심가치 */}
        <section className="h-screen w-full" aria-label={sectionLabels[language][2]}>
          <SectionTwo />
        </section>
      </div>

      {/* Section indicators (right side) */}
      <div className="fixed right-6 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-4">
        {Array.from({ length: SECTIONS }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(i)}
            className={`h-3 w-3 rounded-full border transition-all duration-300 ${
              i === currentSection
                ? "scale-125 border-[#e87a1e] bg-[#e87a1e]"
                : "border-white/50 bg-transparent hover:border-white"
            }`}
            aria-label={`${language === "ko" ? "섹션" : "Section"} ${i + 1}${language === "ko" ? "로 이동" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
