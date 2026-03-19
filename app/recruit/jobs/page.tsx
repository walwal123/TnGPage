import Image from "next/image";
import Navbar from "@/components/navbar";

export default function JobPostingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative flex h-[280px] w-full items-center justify-center">
        <Image
          src="/images/recruit/mina-handshake.jpg"
          alt="Recruitment background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1a1a2e]/60" />
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">채용 공고</h1>
        </div>
      </section>

      {/* White gap */}
      <div className="h-24 bg-white" />

      {/* Main Content */}
      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Title */}
          <h2 className="text-center text-2xl font-bold text-[#1a1a2e] md:text-3xl">
            T&amp;G손해사정과 함께 미래를 만들어 갈 인재를 모십니다
          </h2>

          {/* Space between title and table */}
          <div className="h-24" />

          {/* Table Section */}
          <div className="mb-12">
            <h3 className="mb-6 text-xl font-bold text-[#1a1a2e]">모집부분 및 자격요건</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1a1a2e]">
                    <th className="border-r border-white/30 px-4 py-4 text-center font-medium text-white">모집분야</th>
                    <th className="px-4 py-4 text-center font-medium text-white">우대 사항</th>
                  </tr>
                </thead>
                <tbody className="text-[#555]">
                  <tr className="border-b border-[#e0e0e0]">
                    <td className="border-r border-[#e0e0e0] px-4 py-6 text-center align-top">재물 손해사정 조사직</td>
                    <td className="px-4 py-6 align-top">
                      <ul className="space-y-1">
                        <li>- 손해사정사 자격증 보유자</li>
                        <li>- 건축, 기계, 전기 관련 학과 출신</li>
                        <li>- 국가자격증보유자(건축기사/산업기사/전기기사 등등)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e0e0e0]">
                    <td className="border-r border-[#e0e0e0] px-4 py-6 text-center align-top">신체 손해사정 조사직</td>
                    <td className="px-4 py-6 align-top">
                      <ul className="space-y-1">
                        <li>- 손해사정사 자격증 보유자</li>
                        <li>- 법학, 보건, 간호 관련 학과 출신</li>
                        <li>- 국가자격증보유자(간호사/방사선사/임상병리사 등)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e0e0e0]">
                    <td className="border-r border-[#e0e0e0] px-4 py-6 text-center align-top">재물/신체/서면심사직</td>
                    <td className="px-4 py-6 align-top">
                      <ul className="space-y-1">
                        <li>- 손해사정사 자격증 보유자</li>
                        <li>- 건축, 기계, 법학, 보건 관련학과 출신</li>
                        <li>- 국가자격증 보유자(건축기사/간호사 등)</li>
                        <li>- 보험사, 손해사정회사심사직무 경험자</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Notice */}
          <p className="mb-6 text-center text-base text-[#555]">
            세부 모집분야 및 조건은 아래 채용공고를 참조해 주십시오
          </p>
          
          {/* How to Apply */}
          <div className="rounded border border-[#e0e0e0] bg-white p-6">
            <h4 className="mb-4 text-base font-bold text-[#1a1a2e]">지원 방법</h4>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-[#666]">
                채용공고 확인 후 지원해 주세요
              </p>
              <a 
                href="https://www.jobkorea.co.kr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded bg-[#5a9bd4] px-6 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-[#4a8bc4]"
              >
                잡코리아 채용공고 바로가기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-20 bg-white" />
    </main>
  );
}
