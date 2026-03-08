import Image from "next/image";
import Navbar from "@/components/navbar";

export default function HRSystemPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[220px] w-full">
        <Image
          src="/images/recruit/mina-handshake.jpg"
          alt="인사 시스템 배경"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-medium text-white md:text-4xl">{"인사 시스템"}</h1>
        </div>
      </section>

      {/* 투명한 기준, 공정한 성장 Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-[#1a1a2e] md:text-3xl">
            {"투명한 기준, 공정한 성장"}
          </h2>
          <p className="text-base text-[#666]">
            {"티앤지는 연차가 아닌 "}
            <span className="text-[#5a9bd4]">{"성과와 역량"}</span>
            {"을 기준으로 평가하는"}
          </p>
          <p className="text-base text-[#666]">
            <span className="text-[#5a9bd4]">{"능력 중심 인사 시스템"}</span>
            {"을 운영합니다"}
          </p>
        </div>
      </section>

      {/* KPI System Section - Two Images */}
      <section className="flex w-full flex-col lg:flex-row">
        {/* Left - Description with dark gray background */}
        <div className="flex h-[350px] w-full items-center justify-center bg-[#4a4a4a] lg:w-1/2">
          <div className="px-8 text-center text-white">
            <p className="text-lg leading-relaxed md:text-xl">
              {"티앤지는 직무별 "}
              <span className="text-[#5a9bd4]">{"핵심성과지표(KPI)"}</span>
              {"를 기반으로"}
            </p>
            <p className="text-lg leading-relaxed md:text-xl">
              {"개인의 업무 성과와 전문성을 "}
              <span className="text-[#5a9bd4]">{"객관적으로 평가"}</span>
              {"합니다."}
            </p>
            <p className="mt-4 text-lg leading-relaxed md:text-xl">
              {"평가 기준과 결과는 투명하게 관리되며,"}
            </p>
            <p className="text-lg leading-relaxed md:text-xl">
              {"성과는 보상과 승진에 직접적으로 반영됩니다."}
            </p>
          </div>
        </div>

        {/* Right - KPI System with chart background */}
        <div className="relative flex h-[350px] w-full items-center justify-center lg:w-1/2">
          <Image
            src="/images/recruit/jakub-chart.jpg"
            alt="성과 평가 시스템"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 px-8 text-right text-white">
            <h3 className="text-2xl font-bold md:text-3xl">
              <span className="text-[#5a9bd4]">{"능력 위주"}</span>
              {"의 성과 평가(KPI) 시스템"}
            </h3>
          </div>
        </div>
      </section>

      {/* KPI Evaluation Criteria */}
      <section className="border-t border-b border-[#e0e0e0] bg-white px-4 py-12 md:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="8" width="40" height="48" rx="2" stroke="#666" strokeWidth="2" fill="none"/>
                <path d="M20 20h24M20 28h24M20 36h24M20 44h16" stroke="#666" strokeWidth="2"/>
                <path d="M8 16l8-8 8 8" stroke="#666" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <p className="text-sm text-[#666]">{"손해사정 정확도,"}</p>
            <p className="text-sm text-[#666]">{"심사 완성도"}</p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="20" stroke="#666" strokeWidth="2" fill="none"/>
                <path d="M32 16v16l12 8" stroke="#666" strokeWidth="2"/>
                <path d="M20 8c-4 4-4 12 0 16M44 8c4 4 4 12 0 16" stroke="#666" strokeWidth="2"/>
              </svg>
            </div>
            <p className="text-sm text-[#666]">{"처리 속도,"}</p>
            <p className="text-sm text-[#666]">{"일정 준수율"}</p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="16" y="24" width="32" height="32" rx="2" stroke="#666" strokeWidth="2" fill="none"/>
                <circle cx="32" cy="16" r="8" stroke="#666" strokeWidth="2" fill="none"/>
                <path d="M24 40h16M24 48h12" stroke="#666" strokeWidth="2"/>
                <rect x="40" y="8" width="12" height="16" rx="1" stroke="#666" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <p className="text-sm text-[#666]">{"자격, 교육 이수,"}</p>
            <p className="text-sm text-[#666]">{"실무 숙련도"}</p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 40c0-8 8-12 16-12s16 4 16 12" stroke="#666" strokeWidth="2" fill="none"/>
                <path d="M32 28c-4 0-8-4-8-8s4-8 8-8 8 4 8 8-4 8-8 8z" stroke="#666" strokeWidth="2" fill="none"/>
                <path d="M8 56l12-16M56 56l-12-16" stroke="#666" strokeWidth="2"/>
                <path d="M20 40l12 16 12-16" stroke="#666" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <p className="text-sm text-[#666]">{"협업, 책임감,"}</p>
            <p className="text-sm text-[#666]">{"내부 기준 준수"}</p>
          </div>
        </div>
      </section>

      {/* 직무별 명확한 승진 체계 Section */}
      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-2xl font-bold text-[#1a1a2e] md:text-3xl">
            {"직무별 명확한 승진 체계"}
          </h2>
          <p className="mb-12 text-base text-[#666]">
            {"티앤지는 직무와 역할에 따라 "}
            <span className="text-[#5a9bd4]">{"단계별 성장 경로"}</span>
            {"가 명확히 "}
            <span className="text-[#5a9bd4]">{"설계"}</span>
            {"되어 있습니다."}
          </p>

          {/* Career Levels */}
          <div className="mb-16 bg-[#f5f5f5] px-8 py-12">
            <div className="flex flex-wrap items-end justify-center gap-6 md:gap-8">
              {/* 사원 */}
              <div className="flex flex-col items-center">
                <div className="mb-2 flex gap-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="#f5a623">
                    <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8"/>
                  </svg>
                </div>
                <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-[#5a9bd4]">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="12" r="6" stroke="white" strokeWidth="1.5" fill="none"/>
                    <path d="M10 32c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="white" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
                <p className="mt-3 text-base font-medium text-[#1a1a2e]">{"사원"}</p>
              </div>

              {/* 대리 */}
              <div className="flex flex-col items-center">
                <div className="mb-2 flex gap-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="#f5a623">
                    <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="#f5a623">
                    <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8"/>
                  </svg>
                </div>
                <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-[#5a9bd4]">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="12" r="6" stroke="white" strokeWidth="1.5" fill="none"/>
                    <path d="M10 32c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="white" strokeWidth="1.5" fill="none"/>
                    <path d="M16 22v8M24 22v8" stroke="white" strokeWidth="1.5"/>
                  </svg>
                </div>
                <p className="mt-3 text-base font-medium text-[#1a1a2e]">{"대리"}</p>
              </div>

              {/* 과장 */}
              <div className="flex flex-col items-center">
                <div className="mb-2 flex gap-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="#f5a623">
                    <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8"/>
                  </svg>
                </div>
                <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-[#5a9bd4]">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="12" r="6" stroke="white" strokeWidth="1.5" fill="none"/>
                    <path d="M10 32c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="white" strokeWidth="1.5" fill="none"/>
                    <rect x="14" y="20" width="12" height="8" rx="1" stroke="white" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
                <p className="mt-3 text-base font-medium text-[#1a1a2e]">{"과장"}</p>
              </div>

              {/* 차장 */}
              <div className="flex flex-col items-center">
                <div className="mb-2 flex gap-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="#f5a623">
                    <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="#f5a623">
                    <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8"/>
                  </svg>
                </div>
                <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-[#5a9bd4]">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="12" r="6" stroke="white" strokeWidth="1.5" fill="none"/>
                    <path d="M10 32c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="white" strokeWidth="1.5" fill="none"/>
                    <rect x="14" y="20" width="12" height="8" rx="1" stroke="white" strokeWidth="1.5" fill="none"/>
                    <path d="M17 24h6" stroke="white" strokeWidth="1.5"/>
                  </svg>
                </div>
                <p className="mt-3 text-base font-medium text-[#1a1a2e]">{"차장"}</p>
              </div>

              {/* 부장 */}
              <div className="flex flex-col items-center">
                <div className="mb-2 flex gap-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="#f5a623">
                    <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="#f5a623">
                    <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="#f5a623">
                    <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8"/>
                  </svg>
                </div>
                <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-[#5a9bd4]">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="12" r="6" stroke="white" strokeWidth="1.5" fill="none"/>
                    <path d="M10 32c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="white" strokeWidth="1.5" fill="none"/>
                    <path d="M14 20l6 4 6-4v8l-6 4-6-4v-8z" stroke="white" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
                <p className="mt-3 text-base font-medium text-[#1a1a2e]">{"부장"}</p>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="text-center">
            <p className="text-xl font-medium text-[#1a1a2e] md:text-2xl">
              {'"공정한 '}
              <span className="text-[#5a9bd4]">{"평가"}</span>
              {"와 투명한 "}
              <span className="text-[#5a9bd4]">{"보상"}</span>
              {'"'}
            </p>
            <p className="mt-2 text-xl font-medium text-[#1a1a2e] md:text-2xl">
              {"실력 있는 사람이 성장하는 조직을 만듭니다"}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
