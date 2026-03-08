import Image from "next/image";
import Navbar from "@/components/navbar";

export default function JobPostingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[220px] w-full">
        <Image
          src="/images/recruit/mina-handshake.jpg"
          alt="채용 공고 배경"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-medium text-white md:text-4xl">{"채용 공고"}</h1>
        </div>
      </section>

      {/* 모집 안내 */}
      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-2xl font-bold text-[#1a1a2e] md:text-3xl">
            {"각 부분별 신입/경력 사원을 모집합니다."}
          </h2>

          {/* 모집부분 및 자격요건 */}
          <h3 className="mb-6 text-xl font-bold text-[#1a1a2e]">{"모집부분 및 자격요건 (예시)"}</h3>
          
          <div className="mb-4 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-t-2 border-[#1a1a2e] bg-[#f9f9f9]">
                  <th className="border-b border-[#e0e0e0] px-4 py-4 text-center text-sm font-medium text-[#1a1a2e]">{"구분"}</th>
                  <th className="border-b border-[#e0e0e0] px-4 py-4 text-center text-sm font-medium text-[#1a1a2e]">{"근무 부서(지역)"}</th>
                  <th className="border-b border-[#e0e0e0] px-4 py-4 text-center text-sm font-medium text-[#1a1a2e]">{"자격 요건 (예시)"}</th>
                  <th className="border-b border-[#e0e0e0] px-4 py-4 text-center text-sm font-medium text-[#1a1a2e]">{"우대 사항 (예시)"}</th>
                </tr>
              </thead>
              <tbody>
                {/* 재물 손해사정 조사직 */}
                <tr>
                  <td className="border-b border-[#e0e0e0] px-4 py-6 text-center text-sm text-[#666]">{"모집직종 예시 A"}</td>
                  <td className="border-b border-[#e0e0e0] px-4 py-6 text-center text-sm text-[#666]">{"근무지역 예시"}</td>
                  <td className="border-b border-[#e0e0e0] px-4 py-6 text-sm text-[#666]">
                    <ul className="list-inside list-disc">
                      <li>{"학력 요건 예시"}</li>
                      <li>{"경력 요건 예시"}</li>
                    </ul>
                  </td>
                  <td className="border-b border-[#e0e0e0] px-4 py-6 text-sm text-[#666]">
                    <ul className="list-inside list-disc">
                      <li>{"우대사항 예시 1"}</li>
                      <li>{"우대사항 예시 2"}</li>
                      <li>{"우대사항 예시 3"}</li>
                    </ul>
                  </td>
                </tr>
                {/* 신체 손해사정 조사직 */}
                <tr>
                  <td className="border-b border-[#e0e0e0] px-4 py-6 text-center text-sm text-[#666]">{"모집직종 예시 B"}</td>
                  <td className="border-b border-[#e0e0e0] px-4 py-6 text-center text-sm text-[#666]">{"근무지역 예시"}</td>
                  <td className="border-b border-[#e0e0e0] px-4 py-6 text-sm text-[#666]">
                    <ul className="list-inside list-disc">
                      <li>{"학력 요건 예시"}</li>
                      <li>{"경력 요건 예시"}</li>
                    </ul>
                  </td>
                  <td className="border-b border-[#e0e0e0] px-4 py-6 text-sm text-[#666]">
                    <ul className="list-inside list-disc">
                      <li>{"우대사항 예시 1"}</li>
                      <li>{"우대사항 예시 2"}</li>
                      <li>{"우대사항 예시 3"}</li>
                    </ul>
                  </td>
                </tr>
                {/* 재물/신체/서면심사직 */}
                <tr>
                  <td className="border-b border-[#e0e0e0] px-4 py-6 text-center text-sm text-[#666]">{"모집직종 예시 C"}</td>
                  <td className="border-b border-[#e0e0e0] px-4 py-6 text-center text-sm text-[#666]">{"근무지역 예시"}</td>
                  <td className="border-b border-[#e0e0e0] px-4 py-6 text-sm text-[#666]">
                    <ul className="list-inside list-disc">
                      <li>{"학력 요건 예시"}</li>
                      <li>{"경력 요건 예시"}</li>
                    </ul>
                  </td>
                  <td className="border-b border-[#e0e0e0] px-4 py-6 text-sm text-[#666]">
                    <ul className="list-inside list-disc">
                      <li>{"우대사항 예시 1"}</li>
                      <li>{"우대사항 예시 2"}</li>
                      <li>{"우대사항 예시 3"}</li>
                      <li>{"우대사항 예시 4"}</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mb-8 text-sm text-[#999]">
            {"*공통우대사항 예시: 관련 업무 경력자, 관련 학과 전공자, 국가유공자 등"}
          </p>
        </div>
      </section>

      {/* 업무내용 */}
      <section className="bg-[#f9f9f9] px-4 py-12 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-6 text-xl font-bold text-[#1a1a2e]">{"업무내용 (예시)"}</h3>
          
          <div className="grid gap-4 md:grid-cols-3">
            {/* 업무 A */}
            <div className="rounded border border-[#e0e0e0] bg-white p-6">
              <h4 className="mb-4 text-base font-bold text-[#1a1a2e]">{"1) 직종 A 업무내용"}</h4>
              <p className="text-sm text-[#666]">
                {"업무내용 "}
                <span className="text-[#5a9bd4]">{"예시"}</span>
                {" 설명이 들어갑니다"}
              </p>
            </div>
            
            {/* 업무 B */}
            <div className="rounded border border-[#e0e0e0] bg-white p-6">
              <h4 className="mb-4 text-base font-bold text-[#1a1a2e]">{"2) 직종 B 업무내용"}</h4>
              <p className="text-sm text-[#666]">
                {"업무내용 "}
                <span className="text-[#5a9bd4]">{"예시"}</span>
                {" 설명이 들어갑니다"}
              </p>
            </div>
            
            {/* 업무 C */}
            <div className="rounded border border-[#e0e0e0] bg-white p-6">
              <h4 className="mb-4 text-base font-bold text-[#1a1a2e]">{"3) 직종 C 업무내용"}</h4>
              <p className="text-sm text-[#666]">
                {"업무내용 "}
                <span className="text-[#5a9bd4]">{"예시"}</span>
                {" 설명이 들어갑니다"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 근무 조건 */}
      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-6 text-xl font-bold text-[#1a1a2e]">{"근무 조건 (예시)"}</h3>
          
          <div className="grid gap-4 md:grid-cols-4">
            {/* 고용형태 */}
            <div className="rounded border border-[#e0e0e0] bg-white p-6">
              <h4 className="mb-4 text-base font-bold text-[#1a1a2e]">{"고용형태"}</h4>
              <p className="text-sm text-[#666]">{"고용형태 예시"}</p>
              <p className="text-sm text-[#666]">{"(수습기간 예시)"}</p>
            </div>
            
            {/* 근무시간 */}
            <div className="rounded border border-[#e0e0e0] bg-white p-6">
              <h4 className="mb-4 text-base font-bold text-[#1a1a2e]">{"근무시간"}</h4>
              <p className="text-sm text-[#666]">{"근무시간 예시"}</p>
              <p className="text-sm text-[#666]">{"(휴무일 예시)"}</p>
            </div>
            
            {/* 채용 인원 */}
            <div className="rounded border border-[#e0e0e0] bg-white p-6">
              <h4 className="mb-4 text-base font-bold text-[#1a1a2e]">{"채용 인원"}</h4>
              <p className="text-sm text-[#5a9bd4]">{"채용인원 예시 (근무지 예시)"}</p>
            </div>
            
            {/* 급여 조건 */}
            <div className="rounded border border-[#e0e0e0] bg-white p-6">
              <h4 className="mb-4 text-base font-bold text-[#1a1a2e]">{"급여 조건"}</h4>
              <p className="text-sm text-[#666]">{"급여조건 예시"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 채용 절차 */}
      <section className="border-t border-[#e0e0e0] px-4 py-12 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-8 text-xl font-bold text-[#1a1a2e]">{"채용 절차"}</h3>
          
          {/* 전형 절차 */}
          <div className="mb-8 rounded border border-[#e0e0e0] bg-white p-8">
            <h4 className="mb-8 text-base font-bold text-[#1a1a2e]">{"전형 절차"}</h4>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* STEP 01 */}
              <div className="flex flex-col items-center">
                <div className="flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full bg-[#1a1a2e]">
                  <p className="text-xs text-white">{"STEP 01"}</p>
                  <p className="mt-1 text-base font-bold text-white">{"서류전형"}</p>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="hidden text-[#ccc] md:block">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              {/* STEP 02 */}
              <div className="flex flex-col items-center">
                <div className="flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full bg-[#1a1a2e]">
                  <p className="text-xs text-white">{"STEP 02"}</p>
                  <p className="mt-1 text-base font-bold text-white">{"1차면접(팀장)"}</p>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="hidden text-[#ccc] md:block">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              {/* STEP 03 */}
              <div className="flex flex-col items-center">
                <div className="flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full bg-[#1a1a2e]">
                  <p className="text-xs text-white">{"STEP 03"}</p>
                  <p className="mt-1 text-base font-bold text-white">{"2차면접(임원)"}</p>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="hidden text-[#ccc] md:block">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              {/* STEP 04 */}
              <div className="flex flex-col items-center">
                <div className="flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full bg-[#1a1a2e]">
                  <p className="text-xs text-[#f5a623]">{"STEP 04"}</p>
                  <p className="mt-1 text-base font-bold text-white">{"최종 합격"}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 지원 방법 & 접수 기간 */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* 전형 절차 - 지원 방법 */}
            <div className="rounded border border-[#e0e0e0] bg-white p-6">
              <h4 className="mb-4 text-base font-bold text-[#1a1a2e]">{"지원 방법 (예시)"}</h4>
              <a href="#" className="text-sm text-[#5a9bd4] hover:underline">
                {"지원 링크 예시"}
              </a>
            </div>
            
            {/* 접수 기간 */}
            <div className="rounded border border-[#e0e0e0] bg-white p-6">
              <h4 className="mb-4 text-base font-bold text-[#1a1a2e]">{"접수 기간 (예시)"}</h4>
              <p className="text-sm text-[#666]">{"접수기간 예시"}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
