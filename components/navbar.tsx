"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export default function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    {
      label: t("nav.company"),
      key: "company",
      subItems: [
        { name: t("nav.company.info"), href: "/company/info" },
        { name: t("nav.company.expertise"), href: "/company/expertise" },
        { name: t("nav.company.history"), href: "/company/history" },
        { name: t("nav.company.location"), href: "/company/location" },
      ],
    },
    {
      label: t("nav.business"),
      key: "business",
      subItems: [
        { name: t("nav.business.overview"), href: "/business/overview" },
        { name: t("nav.business.process"), href: "/service/process" },
      ],
    },
    {
      label: t("nav.branch"),
      key: "branch",
      subItems: [
        { name: t("nav.branch.info"), href: "/branch/info" },
      ],
    },
    {
      label: t("nav.partners"),
      key: "partners",
      subItems: [
        { name: t("nav.partners.status"), href: "/partners/status" },
      ],
    },
    {
      label: t("nav.recruit"),
      key: "recruit",
      subItems: [
        { name: t("nav.recruit.system"), href: "/recruit/system" },
        { name: t("nav.recruit.jobs"), href: "/recruit/jobs" },
      ],
    },
  ];

  const showSubmenu = hoveredMenu !== null;

  const toggleLanguage = () => {
    setLanguage(language === "ko" ? "en" : "ko");
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      onMouseEnter={() => setIsNavHovered(true)}
      onMouseLeave={() => {
        setIsNavHovered(false);
        setHoveredMenu(null);
      }}
    >
      {/* Main navbar */}
      <div
        className={`transition-all duration-300 ${
          isNavHovered
            ? "bg-white/95 backdrop-blur-sm shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex h-24 items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/images/tng-logo.png"
              alt="T&G 손해사정 Group 로고"
              width={100}
              height={70}
              className="h-16 w-auto object-contain"
              priority
            />
            <span
              className={`text-2xl font-medium tracking-tight transition-colors duration-300 ${
                isNavHovered ? "text-[#1a1a2e]" : "text-white"
              }`}
            >
              {t("nav.logo")}
            </span>
          </a>

          {/* Menu items + Language Toggle */}
          <div className="flex items-center gap-4">
            {/* Menu items */}
            <div className="flex items-center">
              {menuItems.map((item) => (
                <div
                  key={item.key}
                  className="w-[120px] text-center"
                  onMouseEnter={() => setHoveredMenu(item.key)}
                >
                  <button
                    className={`w-full py-3 text-lg font-normal tracking-wide transition-colors duration-200 border-b-2 ${
                      hoveredMenu === item.key
                        ? isNavHovered
                          ? "text-[#e87a1e] border-[#e87a1e]"
                          : "text-[#f0a050] border-[#f0a050]"
                        : isNavHovered
                        ? "text-[#1a1a2e] border-transparent hover:text-[#e87a1e]"
                        : "text-[#6eaaef] border-transparent hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                </div>
              ))}
            </div>

            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className={`ml-4 flex items-center rounded px-2 py-1 text-xs font-medium transition-all duration-200 ${
                isNavHovered
                  ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  : "bg-white/20 text-white/90 hover:bg-white/30"
              }`}
            >
              <span className={language === "ko" ? "font-bold" : "opacity-60"}>한글</span>
              <span className="mx-1 opacity-40">/</span>
              <span className={language === "en" ? "font-bold" : "opacity-60"}>EN</span>
            </button>
          </div>
        </div>
      </div>

      {/* Submenu dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          showSubmenu ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-sm border-t border-[#e5e5e5]">
          <div className="flex items-start justify-end px-6 py-5 lg:px-10">
            {/* Menu items container - matches parent menu layout */}
            <div className="flex items-start">
              {menuItems.map((item) => (
                <div
                  key={item.key}
                  className="w-[120px] text-center"
                  onMouseEnter={() => setHoveredMenu(item.key)}
                >
                  <div
                    className={`flex flex-col gap-2 transition-opacity duration-200 ${
                      hoveredMenu === item.key ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    {item.subItems.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="whitespace-nowrap text-sm text-[#444] transition-colors duration-150 hover:text-[#e87a1e]"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* Spacer for language button - matches button width + ml-4 + gap */}
            <div className="ml-4 w-[68px] flex-shrink-0" />
          </div>
        </div>
      </div>

      {/* Bottom line accent - removed */}
      <div className="h-[2px] bg-transparent" />
    </nav>
  );
}
