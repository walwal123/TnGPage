import Navbar from "@/components/navbar";

export default function CompanyInfoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1: Hero - 회사안내 */}
      <section className="relative flex h-[280px] w-full items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/company/sean-buildings.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#1a1a2e]/60" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">
            {"회사안내"}
          </h1>
        </div>
      </section>

      {/* Section 2: Company Slogan */}
      <section className="bg-white py-20 text-center">
        <p className="mb-4 text-lg text-[#5a9bd4] md:text-xl" style={{ fontFamily: "Georgia, serif" }}>
          {"Company Slogan"}
        </p>
        <h2 className="text-3xl font-medium leading-relaxed text-[#1a1a2e] md:text-4xl">
          {"대한민국 손해사정의 기준을 만들어가는"}
          <br />
          {"Number 1 손해사정 파트너"}
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
          <h3 className="mb-6 text-2xl font-medium leading-relaxed text-white md:text-3xl lg:text-4xl">
            <span className="text-[#f0c050]">전문성</span>
            으로 고객에 만족을 드립니다
          </h3>
          <p className="text-lg font-medium text-white md:text-xl lg:text-2xl">
            &quot;고객 신뢰와 함께하는 든든한 동반자 T&amp;G손해사정&quot;
          </p>
        </div>
      </section>

      {/* gap */}
      <div className="h-96 bg-white" />

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
      <div className="h-96 bg-white" />

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
      <div className="h-32 bg-white" />

      {/* Section 6: 그룹 구조 */}
      <section className="bg-white px-8 py-20 md:px-16 lg:px-24">
        <h2 className="mb-4 text-center text-3xl font-medium text-[#1a1a2e] md:text-4xl">
          {"그룹 구조"}
        </h2>
        <p className="mb-2 text-center text-lg font-medium text-[#1a1a2e] md:text-xl">
          {"분야별 전문기업으로 손해사정업무를 리드하는 "}
          <span className="text-[#e87a1e]">{"T&G손해사정 그룹"}</span>
        </p>
        <p className="mb-12 text-center text-sm text-[#666] md:text-base">
          {"T&G손해사정, H&T손해사정, 엔파비는 분야별 전문성으로 고객의 최고 만족을 추구합니다"}
        </p>

        {/* Organization Chart */}
        <div className="mx-auto max-w-4xl">
          {/* CEO */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-md border-2 border-[#5a9bd4] bg-[#5a9bd4] px-12 py-3 text-center">
              <span className="font-medium text-white">{"T&G손해사정 그룹"}</span>
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
            <div className="flex flex-col gap-3">
              <div className="w-full rounded-md border border-[#5a9bd4] bg-white px-6 py-3 text-center">
                <span className="font-medium text-[#1a1a2e]">{"T&G손해사정(주)"}</span>
              </div>
              <div className="min-h-[80px] w-full rounded-md border border-[#5a9bd4] bg-[#e8f4fc] px-4 py-3 text-center">
                <span className="text-sm leading-relaxed text-[#1a1a2e]">{"손해보험,생명보험, 보험계약자 등 열린고객사를 위한 손해사정 업무"}</span>
              </div>
              <div className="min-h-[60px] w-full rounded-md border border-[#5a9bd4] bg-white px-4 py-3 text-center">
                <span className="text-sm text-[#1a1a2e]">{"서울, 수도권, 대전, 광주, 대구, 부산 등"}</span>
                <br />
                <span className="text-sm font-medium text-[#e87a1e]">{"전국 12개 사무실"}</span>
              </div>
            </div>

            {/* H&T */}
            <div className="flex flex-col gap-3">
              <div className="w-full rounded-md border border-[#5a9bd4] bg-white px-6 py-3 text-center">
                <span className="font-medium text-[#1a1a2e]">{"H&T손해사정(주)"}</span>
              </div>
              <div className="min-h-[80px] w-full rounded-md border border-[#5a9bd4] bg-[#e8f4fc] px-4 py-3 text-center">
                <span className="text-sm leading-relaxed text-[#1a1a2e]">{"지정 보험사의 서면심사 손해사정 전문 업무"}</span>
              </div>
              <div className="min-h-[60px] w-full rounded-md border border-[#5a9bd4] bg-white px-4 py-3 text-center">
                <span className="text-sm text-[#1a1a2e]">{"서울, 인천, 대전, 광주, 부산 등"}</span>
                <br />
                <span className="text-sm font-medium text-[#e87a1e]">{"전국 6개 사무실"}</span>
              </div>
            </div>

            {/* 엔파비 */}
            <div className="flex flex-col gap-3">
              <div className="w-full rounded-md border border-[#5a9bd4] bg-white px-6 py-3 text-center">
                <span className="font-medium text-[#1a1a2e]">{"엔파비"}</span>
              </div>
              <div className="min-h-[80px] w-full rounded-md border border-[#5a9bd4] bg-[#e8f4fc] px-4 py-3 text-center">
                <span className="text-sm leading-relaxed text-[#1a1a2e]">{"전문인 리쿠르팅, 도급, 파견, 콜센터 운영"}</span>
              </div>
              <div className="min-h-[60px] w-full rounded-md border border-[#5a9bd4] bg-white px-4 py-3 text-center">
                <span className="text-sm text-[#1a1a2e]">{"서울"}</span>
                <br />
                <span className="text-sm font-medium text-[#e87a1e]">{"50명"}</span>
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
              <div className="flex min-h-[160px] flex-col justify-center bg-[#5a9bd4] px-4 py-5 text-center">
                <p className="text-xs leading-relaxed text-white">
                  {"보험사고정보 입력 · 인보험서면심사 · 물보험서면심사 · 인보험현장조사 · 물보험현장조사 · 농작물보험 · 고객소비자보호센터"}
                </p>
              </div>
            </div>

            {/* H&T Card */}
            <div className="overflow-hidden rounded-lg border border-[#5a9bd4] bg-white shadow-sm">
              <div className="border-b border-[#5a9bd4] bg-white px-6 py-4 text-center">
                <span className="text-xl font-medium text-[#1a1a2e]">{"H&T"}</span>
              </div>
              <div className="flex min-h-[160px] flex-col justify-center bg-[#5a9bd4] px-4 py-5 text-center">
                <p className="text-xs leading-relaxed text-white">
                  {"보험사고정보입력 · 인보험서면심사"}
                </p>
              </div>
            </div>

            {/* 엔파비 Card */}
            <div className="overflow-hidden rounded-lg border border-[#5a9bd4] bg-white shadow-sm">
              <div className="border-b border-[#5a9bd4] bg-white px-6 py-4 text-center">
                <span className="text-xl font-medium text-[#1a1a2e]">{"엔파비"}</span>
              </div>
              <div className="flex min-h-[160px] flex-col justify-center bg-[#5a9bd4] px-4 py-5 text-center">
                <p className="text-xs leading-relaxed text-white">
                  {"보험전문가 리쿠르팅 · 인력파견 및 관리 · 고객의 콜센터 수탁 운영"}
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
