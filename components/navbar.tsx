"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export default function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  
  // Check if we're on a detail page (not the main page)
  const isDetailPage = pathname !== "/";

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
          isNavHovered || isDetailPage
            ? "bg-white/95 backdrop-blur-sm shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="relative flex h-24 items-center px-6 lg:px-10">
          {/* Logo - absolute left */}
          <a href="/" className="absolute left-6 flex items-center gap-2 lg:left-10">
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
                isNavHovered || isDetailPage ? "text-[#1a1a2e]" : "text-white"
              }`}
            >
              {t("nav.logo")}
            </span>
          </a>

          {/* Menu items - centered */}
          <div className="mx-auto flex items-center">
            {menuItems.map((item) => (
              <div
                key={item.key}
                className="w-[120px] text-center"
                onMouseEnter={() => setHoveredMenu(item.key)}
              >
                <button
                  className={`w-full py-3 text-lg font-normal tracking-wide transition-colors duration-200 border-b-2 ${
                    hoveredMenu === item.key
                      ? isNavHovered || isDetailPage
                        ? "text-[#e87a1e] border-[#e87a1e]"
                        : "text-[#f0a050] border-[#f0a050]"
                      : isNavHovered || isDetailPage
                      ? "text-[#1a1a2e] border-transparent hover:text-[#e87a1e]"
                      : "text-[#6eaaef] border-transparent hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </div>

          {/* Language Toggle Button - absolute right */}
          <button
            onClick={toggleLanguage}
            className={`absolute right-6 flex items-center rounded px-2 py-1 text-xs font-medium transition-all duration-200 lg:right-10 ${
              isNavHovered || isDetailPage
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

      {/* Submenu dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          showSubmenu ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-sm border-t border-[#e5e5e5]">
          <div className="flex justify-center py-5">
            {/* Menu items container - centered, same as main menu */}
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
          </div>
        </div>
      </div>

      {/* Bottom line accent - removed */}
      <div className="h-[2px] bg-transparent" />
    </nav>
  );
}
