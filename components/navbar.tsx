"use client";

import { useState } from "react";
import Image from "next/image";

const menuItems = [
  {
    label: "회사소개",
    subItems: [
      { name: "회사안내", href: "/company/info" },
      { name: "회사전문성", href: "/company/expertise" },
      { name: "회사연혁", href: "/company/history" },
    ],
  },
  {
    label: "사업분야",
    subItems: [
      { name: "업무안내", href: "/business/overview" },
    ],
  },
  {
    label: "서비스 안내",
    subItems: [
      { name: "손해사정 절차", href: "/service/process" },
    ],
  },
  {
    label: "인재채용",
    subItems: [
      { name: "인사시스템", href: "/recruit/system" },
      { name: "채용공고", href: "/recruit/jobs" },
    ],
  },
];

export default function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isNavHovered, setIsNavHovered] = useState(false);

  const showSubmenu = hoveredMenu !== null;

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
              {'T&G 손해사정 Group'}
            </span>
          </a>

          {/* Menu items */}
          <div className="flex items-center gap-4">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setHoveredMenu(item.label)}
              >
                <button
                  className={`px-8 py-3 text-lg font-normal tracking-wide transition-colors duration-200 border-b-2 ${
                    hoveredMenu === item.label
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
        </div>
      </div>

      {/* Submenu dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          showSubmenu ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-sm border-t border-[#e5e5e5]">
          <div className="px-6 py-5 lg:px-10">
            <div className="flex items-start justify-end gap-4">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="w-[calc(theme(spacing.8)*2+theme(fontSize.lg))] px-8 text-center"
                  style={{ minWidth: "140px" }}
                  onMouseEnter={() => setHoveredMenu(item.label)}
                >
                  <div
                    className={`flex flex-col gap-2 transition-opacity duration-200 ${
                      hoveredMenu === item.label ? "opacity-100" : "opacity-40"
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

      {/* Bottom line accent */}
      <div
        className={`h-[2px] transition-colors duration-300 ${
          isNavHovered ? "bg-transparent" : "bg-[#e87a1e]/60"
        }`}
      />
    </nav>
  );
}
