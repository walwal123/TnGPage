import Image from "next/image";
import Navbar from "@/components/navbar";

export default function BranchInfoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - 서비스안내 배경 사용 */}
      <section className="relative h-[220px] w-full">
        <Image
          src="/images/service/kaja-info.jpg"
          alt="거점정보 배경"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-medium text-white md:text-4xl">거점정보</h1>
        </div>
      </section>

      {/* 텀 260px */}
      <div className="h-[260px] bg-white" />

      {/* 전국 단위 손해사정 인프라 */}
      <section id="infrastructure" className="relative w-full scroll-mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/company/yue-wu-aerial.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#1a1a2e]/70" />
        </div>
        <div className="relative z-10 flex flex-col items-center px-8 py-16 text-center md:px-16">
          {/* Top content */}
          <div className="mb-10">
            <h2 className="mb-4 text-2xl font-medium text-white md:text-3xl lg:text-4xl">
              전국 단위 손해사정 수행 인프라
            </h2>
            <p className="mb-2 text-base text-white/80 md:text-lg">
              11개 거점 · 500여 명 전문 인력
            </p>
            <p className="text-sm text-white/60 md:text-base">
              전국 커버 가능한 조직 체계와 전문인력
            </p>
          </div>

          {/* Branch table */}
          <div className="mx-auto w-full max-w-4xl overflow-hidden rounded bg-[#4a4a4a]/90 p-6 backdrop-blur-sm">
            <table className="w-full text-center text-sm text-white">
              <thead>
                <tr className="border-b border-white/20 bg-[#3a6a8a]/80">
                  <th className="px-3 py-3 font-medium text-[#7dd3fc]">팀명</th>
                  <th className="px-3 py-3 font-medium text-[#7dd3fc]">업무</th>
                  <th className="px-3 py-3 font-medium text-[#7dd3fc]">소재지</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="bg-[#5a5a5a]/50">
                  <td className="px-3 py-2" colSpan={2}>본사</td>
                  <td className="px-3 py-2 text-left">서울 종로구 창경궁로 109</td>
                </tr>
                <tr className="bg-[#5a5a5a]/30">
                  <td className="px-3 py-2" colSpan={2}>소비자보호센터</td>
                  <td className="px-3 py-2 text-left">서울 종로구 창경궁로 109, 전화번호 070-7464-1151</td>
                </tr>
                <tr className="bg-[#5a5a5a]/50">
                  <td className="px-3 py-2">화재/재물팀</td>
                  <td className="px-3 py-2">재물</td>
                  <td className="px-3 py-2 text-left">서울 영등포구 경인로 775</td>
                </tr>
                <tr className="bg-[#5a5a5a]/30">
                  <td className="px-3 py-2">경인팀</td>
                  <td className="px-3 py-2">인보험</td>
                  <td className="px-3 py-2 text-left">인천 서구 봉오재3로110번길 7</td>
                </tr>
                <tr className="bg-[#5a5a5a]/50">
                  <td className="px-3 py-2">경기남부팀</td>
                  <td className="px-3 py-2">인보험</td>
                  <td className="px-3 py-2 text-left">경기 안양시 동안구 엘에스로 76</td>
                </tr>
                <tr className="bg-[#5a5a5a]/30">
                  <td className="px-3 py-2">경기북부팀</td>
                  <td className="px-3 py-2">인보험</td>
                  <td className="px-3 py-2 text-left">경기 남양주시 순화궁로 116</td>
                </tr>
                <tr className="bg-[#5a5a5a]/50">
                  <td className="px-3 py-2">강원팀</td>
                  <td className="px-3 py-2">인보험</td>
                  <td className="px-3 py-2 text-left">강원도 원주시 치악고교길 40</td>
                </tr>
                <tr className="bg-[#5a5a5a]/30">
                  <td className="px-3 py-2" rowSpan={2}>대전팀</td>
                  <td className="px-3 py-2">인보험</td>
                  <td className="px-3 py-2 text-left">대전 서구 도산로 330</td>
                </tr>
                <tr className="bg-[#5a5a5a]/30">
                  <td className="px-3 py-2">재물/배상</td>
                  <td className="px-3 py-2 text-left">대전 유성구 지족로 283</td>
                </tr>
                <tr className="bg-[#5a5a5a]/50">
                  <td className="px-3 py-2">전북팀</td>
                  <td className="px-3 py-2">인보험</td>
                  <td className="px-3 py-2 text-left">전북 전주시 완산구 홍산남로 52</td>
                </tr>
                <tr className="bg-[#5a5a5a]/30">
                  <td className="px-3 py-2" rowSpan={2}>광주팀</td>
                  <td className="px-3 py-2">인보험</td>
                  <td className="px-3 py-2 text-left">광주 북구 첨단연신로 15</td>
                </tr>
                <tr className="bg-[#5a5a5a]/30">
                  <td className="px-3 py-2">재물/배상</td>
                  <td className="px-3 py-2 text-left">광주 북구 첨단연신로 88</td>
                </tr>
                <tr className="bg-[#5a5a5a]/50">
                  <td className="px-3 py-2">대구팀</td>
                  <td className="px-3 py-2">인보험</td>
                  <td className="px-3 py-2 text-left">대구 북구 환성정길 12-24</td>
                </tr>
                <tr className="bg-[#5a5a5a]/30">
                  <td className="px-3 py-2" rowSpan={2}>부산팀</td>
                  <td className="px-3 py-2">인보험</td>
                  <td className="px-3 py-2 text-left">부산 부산진구 신암로 66</td>
                </tr>
                <tr className="bg-[#5a5a5a]/30">
                  <td className="px-3 py-2">재물/배상</td>
                  <td className="px-3 py-2 text-left">부산 동구 중앙대로 263</td>
                </tr>
                <tr className="bg-[#5a5a5a]/50">
                  <td className="px-3 py-2">경남팀</td>
                  <td className="px-3 py-2">인보험</td>
                  <td className="px-3 py-2 text-left">경남 창원시 마산합포구 북성로 5</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bottom cities */}
          <div className="mt-10">
            <p className="text-base text-[#e87a1e] md:text-lg">
              서울, 인천, 남양주, 수원, 강릉, 대전, 전주, 광주, 대구, 부산, 창원 총 11개의 거점
            </p>
          </div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-20 bg-white" />
    </main>
  );
}
