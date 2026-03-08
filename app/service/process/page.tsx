import Image from "next/image";
import { ChevronRight, ChevronDown, ChevronLeft } from "lucide-react";
import Navbar from "@/components/navbar";

export default function ServiceProcessPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[220px] w-full">
        <Image
          src="/images/service/kaja-info.jpg"
          alt="서비스 안내 배경"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-medium text-white md:text-4xl">{"서비스 안내"}</h1>
        </div>
      </section>

      {/* 손해사정 절차 안내 */}
      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-semibold text-[#1a1a2e] md:text-3xl">
              {"손해사정 절차 안내"}
            </h2>
            <p className="text-base text-[#666]">
              {"보험 사고 발생 시, 손해사정은 이렇게 진행됩니다"}
            </p>
          </div>

          {/* Process Steps - Row 1 */}
          <div className="mb-8 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-2">
            {/* Step 1: 사고 접수 */}
            <div className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-6 text-center">
              <div className="mb-4">
                <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="20" r="10" stroke="#333" strokeWidth="2" fill="none"/>
                  <path d="M16 52c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#333" strokeWidth="2" fill="none"/>
                  <circle cx="52" cy="16" r="8" stroke="#333" strokeWidth="2" fill="none"/>
                  <path d="M52 12v8M48 16h8" stroke="#333" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#1a1a2e]">{"사고 접수"}</h3>
              <p className="text-sm text-[#666]">{"보험사 또는 고객으로부터 사고 및 보험금 청구 접수"}</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <ChevronRight className="h-8 w-8 text-[#999]" />
            </div>

            {/* Step 2: 자료 검토 및 사실 확인 */}
            <div className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-6 text-center">
              <div className="mb-4">
                <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 8L8 20v24l24 12 24-12V20L32 8z" stroke="#333" strokeWidth="2" fill="none"/>
                  <path d="M32 32V56M8 20l24 12 24-12" stroke="#333" strokeWidth="2"/>
                  <circle cx="32" cy="24" r="4" fill="#333"/>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#1a1a2e]">{"자료 검토 및 사실 확인"}</h3>
              <p className="text-sm text-[#666]">{"청구 서류 및 사고 사실관계 검토"}</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <ChevronRight className="h-8 w-8 text-[#999]" />
            </div>

            {/* Step 3: 현장·전문 조사 */}
            <div className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-6 text-center">
              <div className="mb-4">
                <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="24" width="20" height="32" stroke="#333" strokeWidth="2" fill="none"/>
                  <rect x="36" y="16" width="20" height="40" stroke="#333" strokeWidth="2" fill="none"/>
                  <path d="M28 40h8M12 32h12M12 40h12M40 24h12M40 32h12M40 40h12" stroke="#333" strokeWidth="2"/>
                  <path d="M18 8l-6 16M46 8l6 8" stroke="#333" strokeWidth="2"/>
                  <polygon points="14,8 22,8 18,0" fill="#333"/>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#1a1a2e]">{"현장·전문 조사"}</h3>
              <p className="text-sm text-[#666]">{"필요 시 현장 조사, 의료·기술 자문 수행"}</p>
            </div>
          </div>

          {/* Down Arrow - directly under step 3 (현장·전문 조사) */}
          <div className="mb-8 hidden justify-center md:flex">
            <div className="flex items-center justify-center gap-2">
              <div className="w-[220px]" />
              <div className="w-8" />
              <div className="w-[220px]" />
              <div className="w-8" />
              <div className="flex w-[220px] justify-center">
                <ChevronDown className="h-8 w-8 text-[#999]" />
              </div>
            </div>
          </div>
          <div className="mb-8 flex justify-center md:hidden">
            <ChevronDown className="h-8 w-8 text-[#999]" />
          </div>

          {/* Process Steps - Row 2 */}
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-2">
            {/* Step 6: 결과 보고 및 지급 검토 */}
            <div className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-6 text-center">
              <div className="mb-4">
                <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="20" r="10" stroke="#333" strokeWidth="2" fill="none"/>
                  <circle cx="40" cy="20" r="10" stroke="#333" strokeWidth="2" fill="none"/>
                  <path d="M8 52c0-8.837 7.163-16 16-16M40 36c8.837 0 16 7.163 16 16" stroke="#333" strokeWidth="2" fill="none"/>
                  <rect x="24" y="40" width="16" height="16" rx="2" stroke="#333" strokeWidth="2" fill="none"/>
                  <path d="M28 48l4 4 8-8" stroke="#333" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#1a1a2e]">{"결과 보고 및 지급 검토"}</h3>
              <p className="text-sm text-[#666]">{"손해사정 결과 보고 및 보험금 지급 판단 지원"}</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <ChevronLeft className="h-8 w-8 text-[#999]" />
            </div>

            {/* Step 5: 보험금 산정 */}
            <div className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-6 text-center">
              <div className="mb-4">
                <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="40" r="16" stroke="#333" strokeWidth="2" fill="none"/>
                  <path d="M32 32v16M26 40h12" stroke="#333" strokeWidth="2"/>
                  <text x="32" y="44" textAnchor="middle" fontSize="12" fill="#333">$</text>
                  <path d="M24 8h16v16H24z" stroke="#333" strokeWidth="2" fill="none"/>
                  <circle cx="32" cy="16" r="4" fill="#333"/>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#1a1a2e]">{"보험금 산정"}</h3>
              <p className="text-sm text-[#666]">{"약관과 기준에 따른 합리적 보험금 산정"}</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <ChevronLeft className="h-8 w-8 text-[#999]" />
            </div>

            {/* Step 4: 손해 및 책임 분석 */}
            <div className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full bg-[#e8e8e8] p-6 text-center">
              <div className="mb-4">
                <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="8" width="40" height="48" rx="2" stroke="#333" strokeWidth="2" fill="none"/>
                  <path d="M20 20h24M20 28h24M20 36h16" stroke="#333" strokeWidth="2"/>
                  <path d="M40 40l8 8M44 40l-8 8" stroke="#333" strokeWidth="2"/>
                  <circle cx="44" cy="44" r="8" stroke="#333" strokeWidth="2" fill="none"/>
                  <path d="M44 40v8M40 44h8" stroke="#333" strokeWidth="1"/>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#1a1a2e]">{"손해 및 책임 분석"}</h3>
              <p className="text-sm text-[#666]">{"손해 범위, 책임 여부, 지급 사유 분석"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-[#f5a623] px-4 py-12 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xl font-medium text-white md:text-2xl">
            <span className="text-[#5a9bd4]">{"인보험"}</span>
            {"·"}
            <span className="text-[#5a9bd4]">{"재물보험"}</span>
            {"·"}
            <span className="text-[#5a9bd4]">{"배상책임보험"}</span>
            {"까지,"}
          </p>
          <p className="mt-2 text-xl font-medium text-white md:text-2xl">
            {"모든 손해사정은 "}
            <span className="font-bold">{"동일한 원칙"}</span>
            {"과 "}
            <span className="font-bold">{"기준"}</span>
            {"으로 진행됩니다"}
          </p>
        </div>
      </section>
    </main>
  );
}
