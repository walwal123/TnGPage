import Navbar from "@/components/navbar";

export default function CompanyInfoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1: Hero - 회사안내 */}
      <section className="relative h-[280px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/company/sean-buildings.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#1a1a2e]/50" />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center pt-24">
          <h1 className="text-4xl font-medium tracking-wide text-white md:text-5xl">
            {"회사안내"}
          </h1>
        </div>
      </section>

      {/* Section 2: Company Slogan */}
      <section className="bg-white py-20 text-center">
        <p className="mb-4 text-lg text-[#5a9bd4]" style={{ fontFamily: "Georgia, serif" }}>
          {"Company Slogan"}
        </p>
        <h2 className="text-2xl font-medium leading-relaxed text-[#1a1a2e] md:text-3xl">
          {"대한민국 손해사정의 기준을 세우는"}
          <br />
          {"No1. 손해사정 파트너"}
        </h2>
      </section>

      {/* Section 3: Handshake Image with overlay */}
      <section className="relative h-[450px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/company/radission-handshake.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#3a3a5a]/40" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
          <h3 className="mb-4 text-xl font-medium leading-relaxed text-white md:text-2xl lg:text-3xl">
            {"객관적 기준과 전문 인력을 기반으로 한 정밀한 "}
            <span className="text-[#f0c050]">{"가치평가"}</span>
            {" 역량"}
          </h3>
          <p className="text-sm text-white/70 md:text-base">
            {'"정직한 평가, 든든한 동행" - T&G 손해사정'}
          </p>
        </div>
      </section>

      {/* White gap */}
      <div className="h-24 bg-white" />

      {/* Section 4: Trust & Growth Values - Full width background with semi-transparent overlay box */}
      <section className="relative min-h-[500px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/company/mediensturmer-meeting.jpg)" }}
        />
        <div className="relative z-10 flex min-h-[500px] flex-col lg:flex-row">
          {/* Left - Semi-transparent text box */}
          <div className="flex flex-1 items-center bg-[#3a4a3a]/85 px-8 py-16 backdrop-blur-sm md:px-12 lg:px-16">
            <div>
              <h3 className="mb-8 text-xl font-medium text-white md:text-2xl" style={{ fontFamily: "Georgia, serif" }}>
                {'"Trust & Growth, '}
                <span className="text-white">{"신뢰로 함께 성장하는 가치"}</span>
                {'"'}
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="mb-2">
                    <span className="font-medium text-[#e87a1e]" style={{ fontFamily: "Georgia, serif" }}>{"Professionalism"}</span>
                    <span className="text-white/80">{" (전문가 그룹):"}</span>
                  </p>
                  <p className="text-sm leading-relaxed text-white/70 md:text-base">
                    {"체계적인 교육과 보상 시스템을 통해 전 직원을"}
                    <br />
                    {"최정예 손해사정 전문가로 육성합니다."}
                  </p>
                </div>

                <div>
                  <p className="mb-2">
                    <span className="font-medium text-[#e87a1e]" style={{ fontFamily: "Georgia, serif" }}>{"Trust"}</span>
                    <span className="text-white/80">{" (고객 신뢰):"}</span>
                  </p>
                  <p className="text-sm leading-relaxed text-white/70 md:text-base">
                    {"투명하고 공정한 평가 프로세스를 구축하여 업계 최고의 고객 만족도를 실천합니다."}
                  </p>
                </div>

                <div>
                  <p className="mb-2">
                    <span className="font-medium text-[#e87a1e]" style={{ fontFamily: "Georgia, serif" }}>{"Innovation"}</span>
                    <span className="text-white/80">{" (디지털 도약):"}</span>
                  </p>
                  <p className="text-sm leading-relaxed text-white/70 md:text-base">
                    {"IT 인프라와 데이터 분석 기법을 도입하여 업무 효율성을 극대화하고"}
                    <br />
                    {"손해사정 서비스의 디지털 전환을 선도합니다."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Transparent area showing background image */}
          <div className="hidden flex-1 lg:block" />
        </div>
      </section>

      {/* White gap */}
      <div className="h-24 bg-white" />

      {/* Section 5: Overview */}
      <section className="relative w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/company/imagine-blocks.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#f5f0e8]/80" />
        </div>
        <div className="relative z-10 px-8 py-20 md:px-16 lg:px-24">
          <h2 className="mb-12 text-center text-3xl font-medium text-[#1a1a2e] md:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
            {"Overview"}
          </h2>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {/* Row 1 */}
            <div className="rounded-lg border border-[#d0d0d0] bg-white/80 p-6 text-center shadow-sm">
              <p className="mb-2 text-sm text-[#666]">{"상호"}</p>
              <p className="text-lg font-medium text-[#e87a1e]">{"T&G손해사정주식회사"}</p>
            </div>
            <div className="rounded-lg border border-[#d0d0d0] bg-white/80 p-6 text-center shadow-sm">
              <p className="mb-2 text-sm text-[#666]">{"대표이사"}</p>
              <p className="text-lg font-medium text-[#1a1a2e]">{"유정희"}</p>
            </div>
            <div className="rounded-lg border border-[#d0d0d0] bg-white/80 p-6 text-center shadow-sm">
              <p className="mb-2 text-sm text-[#666]">{"영위업무"}</p>
              <p className="text-lg font-medium text-[#1a1a2e]">{"1,2,3,4종 손해사정"}</p>
            </div>

            {/* Row 2 */}
            <div className="rounded-lg border border-[#d0d0d0] bg-white/80 p-6 text-center shadow-sm">
              <p className="mb-2 text-sm text-[#666]">{"설립일"}</p>
              <p className="text-lg font-medium text-[#1a1a2e]">{"2008년 9월 26일"}</p>
            </div>
            <div className="rounded-lg border border-[#d0d0d0] bg-white/80 p-6 text-center shadow-sm">
              <p className="mb-2 text-sm text-[#666]">{"주소"}</p>
              <p className="text-base font-medium text-[#1a1a2e]">
                {"서울시 종로구 창경궁로 109 (인의동)"}
                <br />
                {"세운스퀘어 본관 6층"}
              </p>
            </div>
            <div className="rounded-lg border border-[#d0d0d0] bg-white/80 p-6 text-center shadow-sm">
              <p className="mb-2 text-sm text-[#666]">{"TEL"}</p>
              <p className="text-lg font-medium text-[#1a1a2e]">{"02-741-0056"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* White gap */}
      <div className="h-24 bg-white" />

      {/* Section 6: 그룹 구조 */}
      <section className="bg-white px-8 py-20 md:px-16 lg:px-24">
        <h2 className="mb-12 text-center text-3xl font-medium text-[#1a1a2e] md:text-4xl">
          {"그룹 구조"}
        </h2>

        {/* Organization Chart */}
        <div className="mx-auto max-w-4xl">
          {/* CEO */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-md border-2 border-[#5a9bd4] bg-[#5a9bd4] px-12 py-3 text-center">
              <span className="font-medium text-white">{"대표이사"}</span>
            </div>
          </div>

          {/* Connecting lines */}
          <div className="relative mb-8">
            <div className="mx-auto h-8 w-px bg-[#999]" />
            <div className="mx-auto h-px w-[70%] bg-[#999]" />
            <div className="flex justify-center">
              <div className="flex w-[70%] justify-between">
                <div className="h-8 w-px bg-[#999]" />
                <div className="h-8 w-px bg-[#999]" />
                <div className="h-8 w-px bg-[#999]" />
              </div>
            </div>
          </div>

          {/* Three companies */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* T&G */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-full rounded-md border border-[#5a9bd4] bg-white px-6 py-3 text-center">
                <span className="font-medium text-[#1a1a2e]">{"T&G"}</span>
              </div>
              <div className="w-full rounded-md border border-[#5a9bd4] bg-[#e8f4fc] px-4 py-2 text-center">
                <span className="text-sm text-[#1a1a2e]">{"인보험,물보험"}</span>
              </div>
              <div className="w-full rounded-md border border-[#5a9bd4] bg-white px-4 py-3 text-center">
                <span className="text-sm font-medium text-[#1a1a2e]">{"200명"}</span>
                <br />
                <span className="text-xs text-[#666]">{"(9개 지점)"}</span>
              </div>
            </div>

            {/* H&T */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-full rounded-md border border-[#5a9bd4] bg-white px-6 py-3 text-center">
                <span className="font-medium text-[#1a1a2e]">{"H&T"}</span>
              </div>
              <div className="w-full rounded-md border border-[#5a9bd4] bg-[#e8f4fc] px-4 py-2 text-center">
                <span className="text-sm text-[#1a1a2e]">{"소액 보험금 서면심사"}</span>
              </div>
              <div className="w-full rounded-md border border-[#5a9bd4] bg-white px-4 py-3 text-center">
                <span className="text-sm font-medium text-[#1a1a2e]">{"300명"}</span>
                <br />
                <span className="text-xs text-[#666]">{"(5개 거점)"}</span>
              </div>
            </div>

            {/* 엔파비 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-full rounded-md border border-[#5a9bd4] bg-white px-6 py-3 text-center">
                <span className="font-medium text-[#1a1a2e]">{"엔파비"}</span>
              </div>
              <div className="w-full rounded-md border border-[#5a9bd4] bg-[#e8f4fc] px-4 py-2 text-center">
                <span className="text-sm text-[#1a1a2e]">{"헤드헌팅, 도급, 파견"}</span>
              </div>
              <div className="w-full rounded-md border border-[#5a9bd4] bg-white px-4 py-3 text-center">
                <span className="text-sm font-medium text-[#1a1a2e]">{"50명"}</span>
                <br />
                <a href="https://www.nfaby.com" className="text-xs text-[#5a9bd4] hover:underline">
                  {"https://www.nfaby.com"}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Company Description Cards */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* T&G Card */}
            <div className="overflow-hidden rounded-lg border border-[#5a9bd4] bg-white shadow-sm">
              <div className="border-b border-[#5a9bd4] bg-white px-6 py-4 text-center">
                <span className="text-xl font-medium text-[#1a1a2e]">{"T&G"}</span>
              </div>
              <div className="bg-[#5a9bd4] px-6 py-6 text-center">
                <p className="mb-3 text-sm leading-relaxed text-white">
                  {"재물·배상책임·인보험"}
                  <br />
                  {"손해사정 및 서면심사"}
                </p>
                <p className="text-sm leading-relaxed text-white/80">
                  {"현장조사 + 정밀심사"}
                  <br />
                  {"중심 핵심 조직"}
                </p>
              </div>
            </div>

            {/* H&T Card */}
            <div className="overflow-hidden rounded-lg border border-[#5a9bd4] bg-white shadow-sm">
              <div className="border-b border-[#5a9bd4] bg-white px-6 py-4 text-center">
                <span className="text-xl font-medium text-[#1a1a2e]">{"H&T"}</span>
              </div>
              <div className="bg-[#5a9bd4] px-6 py-6 text-center">
                <p className="mb-3 text-sm leading-relaxed text-white">
                  {"소액 보험금"}
                  <br />
                  {"서면심사 전문"}
                </p>
                <p className="text-sm leading-relaxed text-white/80">
                  {"서울·인천·대전·광주·부산"}
                  <br />
                  {"거점 운영"}
                </p>
              </div>
            </div>

            {/* 엔파비 Card */}
            <div className="overflow-hidden rounded-lg border border-[#5a9bd4] bg-white shadow-sm">
              <div className="border-b border-[#5a9bd4] bg-white px-6 py-4 text-center">
                <span className="text-xl font-medium text-[#1a1a2e]">{"엔파비"}</span>
              </div>
              <div className="bg-[#5a9bd4] px-6 py-6 text-center">
                <p className="mb-3 text-sm leading-relaxed text-white">
                  {"콜센터 운영 및 보험 인력"}
                  <br />
                  {"리쿠르팅"}
                </p>
                <p className="text-sm leading-relaxed text-white/80">
                  {"그룹 운영 인프라 및"}
                  <br />
                  {"인재 공급 허브"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] px-8 py-8 text-center">
        <p className="text-sm text-white/60">
          {"© 2024 T&G 손해사정 Group. All Rights Reserved."}
        </p>
      </footer>
    </main>
  );
}
