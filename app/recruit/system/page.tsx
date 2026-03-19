import Image from "next/image";
import { FileText, Clock, Award, Users, User, UserCheck, Briefcase, Building, Crown } from "lucide-react";
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
          <h1 className="text-3xl font-medium text-white md:text-4xl">인사 시스템</h1>
        </div>
      </section>

      {/* 투명한 기준, 공정한 성장 Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-[#1a1a2e] md:text-3xl">
            투명한 기준, 공정한 성장
          </h2>
          <p className="text-base text-[#666]">
            티앤지는 연차가 아닌 
            <span className="text-[#5a9bd4]"> 성과와 역량</span>
            을 기준으로 평가하는
          </p>
          <p className="text-base text-[#666]">
            <span className="text-[#5a9bd4]">능력 중심 인사 시스템</span>
            을 운영합니다
          </p>
        </div>
      </section>

      {/* KPI System Section - Two Images */}
      <section className="flex w-full flex-col lg:flex-row">
        {/* Left - Description with dark gray background */}
        <div className="flex h-[350px] w-full items-center justify-center bg-[#4a4a4a] lg:w-1/2">
          <div className="px-8 text-center text-white">
            <p className="text-lg leading-relaxed md:text-xl">
              티앤지는 직무별 
              <span className="text-[#5a9bd4]"> 핵심성과지표(KPI)</span>
              를 기반으로
            </p>
            <p className="text-lg leading-relaxed md:text-xl">
              개인의 업무 성과와 전문성을 
              <span className="text-[#5a9bd4]"> 객관적으로 평가</span>
              합니다.
            </p>
            <p className="mt-4 text-lg leading-relaxed md:text-xl">
              평가 기준과 결과는 투명하게 관리되며,
            </p>
            <p className="text-lg leading-relaxed md:text-xl">
              성과는 보상과 승진에 직접적으로 반영됩니다.
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
              <span className="text-[#5a9bd4]">능력 위주</span>
              의 성과 평가(KPI) 시스템
            </h3>
          </div>
        </div>
      </section>

      {/* KPI Evaluation Criteria */}
      <section className="border-t border-b border-[#e0e0e0] bg-white px-4 py-12 md:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f0f0f0]">
              <FileText className="h-8 w-8 text-[#666]" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-[#666]">손해사정 정확도,</p>
            <p className="text-sm text-[#666]">심사 완성도</p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f0f0f0]">
              <Clock className="h-8 w-8 text-[#666]" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-[#666]">처리 속도,</p>
            <p className="text-sm text-[#666]">일정 준수율</p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f0f0f0]">
              <Award className="h-8 w-8 text-[#666]" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-[#666]">자격, 교육 이수,</p>
            <p className="text-sm text-[#666]">실무 숙련도</p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f0f0f0]">
              <Users className="h-8 w-8 text-[#666]" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-[#666]">협업, 책임감,</p>
            <p className="text-sm text-[#666]">내부 기준 준수</p>
          </div>
        </div>
      </section>

      {/* 직무별 명확한 승진 체계 Section */}
      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-2xl font-bold text-[#1a1a2e] md:text-3xl">
            직무별 명확한 승진 체계
          </h2>
          <p className="mb-12 text-base text-[#666]">
            티앤지는 직무와 역할에 따라 
            <span className="text-[#5a9bd4]"> 단계별 성장 경로</span>
            가 명확히 
            <span className="text-[#5a9bd4]"> 설계</span>
            되어 있습니다.
          </p>

          {/* Career Levels */}
          <div className="mb-16 bg-[#f5f5f5] px-8 py-12">
            <div className="flex flex-wrap items-end justify-center gap-6 md:gap-8">
              {/* 사원 */}
              <div className="flex flex-col items-center">
                <div className="mb-2 flex gap-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                </div>
                <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-[#5a9bd4]">
                  <User className="h-10 w-10 text-white" strokeWidth={1.5} />
                </div>
                <p className="mt-3 text-base font-medium text-[#1a1a2e]">사원</p>
              </div>

              {/* 대리 */}
              <div className="flex flex-col items-center">
                <div className="mb-2 flex gap-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                </div>
                <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-[#5a9bd4]">
                  <UserCheck className="h-10 w-10 text-white" strokeWidth={1.5} />
                </div>
                <p className="mt-3 text-base font-medium text-[#1a1a2e]">대리</p>
              </div>

              {/* 과장 */}
              <div className="flex flex-col items-center">
                <div className="mb-2 flex gap-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                </div>
                <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-[#5a9bd4]">
                  <Briefcase className="h-10 w-10 text-white" strokeWidth={1.5} />
                </div>
                <p className="mt-3 text-base font-medium text-[#1a1a2e]">과장</p>
              </div>

              {/* 차장 */}
              <div className="flex flex-col items-center">
                <div className="mb-2 flex gap-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                </div>
                <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-[#5a9bd4]">
                  <Building className="h-10 w-10 text-white" strokeWidth={1.5} />
                </div>
                <p className="mt-3 text-base font-medium text-[#1a1a2e]">차장</p>
              </div>

              {/* 부장 */}
              <div className="flex flex-col items-center">
                <div className="mb-2 flex gap-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#f5a623">
                    <polygon points="8,1 9.5,6 15,6 10.5,9.5 12,15 8,11.5 4,15 5.5,9.5 1,6 6.5,6"/>
                  </svg>
                </div>
                <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-[#5a9bd4]">
                  <Crown className="h-10 w-10 text-white" strokeWidth={1.5} />
                </div>
                <p className="mt-3 text-base font-medium text-[#1a1a2e]">부장</p>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="text-center">
            <p className="text-xl font-medium text-[#1a1a2e] md:text-2xl">
              "공정한 
              <span className="text-[#5a9bd4]"> 평가</span>
              와 투명한 
              <span className="text-[#5a9bd4]"> 보상</span>
              "
            </p>
            <p className="mt-2 text-xl font-medium text-[#1a1a2e] md:text-2xl">
              실력 있는 사람이 성장하는 조직을 만듭니다
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
