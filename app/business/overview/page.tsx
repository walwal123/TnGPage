import Navbar from "@/components/navbar";

export default function BusinessOverviewPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex h-[280px] w-full items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/business/sasun-gavel.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#2a2a3a]/50" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">
            업무안내
          </h1>
        </div>
      </section>

      {/* White gap */}
      <div className="h-24 bg-white" />

      {/* Intro Section */}
      <section className="bg-white px-8 py-12 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-2xl font-medium text-[#1a1a2e] md:text-3xl lg:text-4xl">
            보험 손해사정의 전 과정을 책임지는 전문 파트너
          </h2>
          <p className="text-base text-[#666] md:text-lg">
            분야별 전문가가 손해사정의 모든 과정을 책임집니다
          </p>
        </div>
      </section>

      {/* White gap */}
      <div className="h-20 bg-white" />

      {/* 주요 업무 안내 Section */}
      <section className="bg-white px-8 pb-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="mb-12 flex items-center gap-3">
            <div className="h-8 w-1 bg-[#5a9bd4]" />
            <h3 className="text-2xl font-medium text-[#1a1a2e]">주요 업무 안내</h3>
          </div>

          {/* Full-width vertical cards */}
          <div className="space-y-8">
            {/* Card 1: 간편 심사 업무 */}
            <div className="group relative min-h-[400px] overflow-hidden rounded-xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url(/images/business/towfiqu-analysis.jpg)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#1a1a2e]/80 to-[#1a1a2e]/60" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-center p-8 lg:p-12">
                <div className="mb-2 text-sm font-medium text-[#5a9bd4]">업무 1 | 간편 심사 업무</div>
                <h4 className="mb-6 text-2xl font-semibold text-white md:text-3xl">
                  간편 심사 업무
                </h4>
                <div className="grid gap-8 lg:grid-cols-2">
                  <p className="text-base leading-relaxed text-white/90" style={{ wordBreak: "keep-all" }}>
                    인보험 및 재물, 배상책임보험의 간편서면심사업무를 신속하고 정확하게 처리하고 있으며 AI디지털손해사정시스템을 도입하여 미래를 준비하고 있습니다.
                  </p>
                  <ul className="space-y-2 text-sm text-white/80 md:text-base">
                    <li>- 사고접수 정보입력</li>
                    <li>- 보험금청구서류 안내 및 접수 심사</li>
                    <li>- 보험금 지급 및 부지급 면책 판단</li>
                    <li>- 지급보험금 산정</li>
                    <li>- 보험금청구 절차 안내 및 사후 상담</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: 재물/배상책임/특종보험 현장조사 */}
            <div className="group relative min-h-[420px] overflow-hidden rounded-xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url(/images/business/fire-accident.jpg)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#1a1a2e]/80 to-[#1a1a2e]/60" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-center p-8 lg:p-12">
                <div className="mb-2 text-sm font-medium text-[#5a9bd4]">업무 2 | 재물/배상책임/특종보험 현장조사</div>
                <h4 className="mb-6 text-2xl font-semibold text-white md:text-3xl">
                  재물/배상책임/특종보험 현장조사
                </h4>
                <div className="grid gap-8 lg:grid-cols-2">
                  <p className="text-base leading-relaxed text-white/90" style={{ wordBreak: "keep-all" }}>
                    건축/기계/토목/전기/자동차 등 전문기술자격보유 전문가와, 의료전문인력, 분야별 전공자가 사고현장을 방문하여 사고원인과 손해액을 전문적이고 공정하게 평가하고 있습니다. 또한 손해보험 법률전문 법무법인과의 협업으로 고객을 보호합니다.
                  </p>
                  <ul className="space-y-2 text-sm text-white/80 md:text-base">
                    <li>- 화재사고, 누수사고, 파손사고의 현장조사</li>
                    <li>- 시설배상, 일상생활의 배상책임사고 현장조사</li>
                    <li>- 공사현장, 사업장의 상해사고 현장조사</li>
                    <li>- 병원, 요양원 등 전문시설 관련 현장조사</li>
                    <li>- 보험계약 조건상 보험금 지급 및 부지급 판단</li>
                    <li>- 손해내역 확인 및 지급보험금 산정</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3: 인보험 조사업무 */}
            <div className="group relative min-h-[450px] overflow-hidden rounded-xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url(/images/business/hospital-patient.jpg)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#1a1a2e]/80 to-[#1a1a2e]/60" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-center p-8 lg:p-12">
                <div className="mb-2 text-sm font-medium text-[#5a9bd4]">업무 3 | 인보험 조사업무</div>
                <h4 className="mb-6 text-2xl font-semibold text-white md:text-3xl">
                  인보험 조사업무
                </h4>
                <div className="grid gap-8 lg:grid-cols-2">
                  <p className="text-base leading-relaxed text-white/90" style={{ wordBreak: "keep-all" }}>
                    질병/상해 등 인보험의 보험금 청구건에 대하여 의료전문인력 및 전문 경력 인력의 현장방문을 통해 의료기록, 사고와의 연관성 등을 확인합니다. 또한 대학병원 등 의료기관의 네트워크를 통해 손해사정의 정확성을 높이고 있습니다.
                  </p>
                  <ul className="space-y-2 text-sm text-white/80 md:text-base">
                    <li>- 상해/질병/사망사고 원인조사</li>
                    <li>- 치료내역 및 사고와의 연관 확인</li>
                    <li>- 의료비 내역의 적정성 확인</li>
                    <li>- 후유장애 진단 확인</li>
                    <li>- 보험계약 조건상 보험금 지급 및 부지급 판단</li>
                    <li>- 손해내역 확인 및 지급보험금 산정</li>
                    <li>- 보험금청구서류 안내 및 접수 심사</li>
                    <li>- 보험금 지급 및 부지급 면책 판단</li>
                    <li>- 지급보험금 산정</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 4: 농작물재해보험 조사업무 */}
            <div className="group relative min-h-[450px] overflow-hidden rounded-xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url(/images/business/agriculture-field.jpg)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#1a1a2e]/80 to-[#1a1a2e]/60" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-center p-8 lg:p-12">
                <div className="mb-2 text-sm font-medium text-[#5a9bd4]">업무 4 | 농작물재해보험 조사업무</div>
                <h4 className="mb-6 text-2xl font-semibold text-white md:text-3xl">
                  농작물재해보험 조사업무
                </h4>
                <div className="grid gap-8 lg:grid-cols-2">
                  <p className="text-base leading-relaxed text-white/90" style={{ wordBreak: "keep-all" }}>
                    재해로 인한 농작물, 가축, 시설 피해의 사고원인 조사와 손해액의 평가
                  </p>
                  <ul className="space-y-2 text-sm text-white/80 md:text-base">
                    <li>- 피해사실확인조사</li>
                    <li>- 적과후착과수 조사, 낙과피해조사, 착과피해 조사, 수확량조사, 고사나무조사, 과실손해조사, 동상해과실손해조사, 경작불능조사</li>
                    <li>- 이앙(직파)불능조사, 재이앙(재직파)조사, 재파종조사, 재정식조사, 경작불능조사, 수확량조사, 수확불능확인조사</li>
                    <li>- 해가림시설조사, 하우스 구조체/피복재조사, 유리온실 부대시설조사</li>
                    <li>- 재해로 인한 가축폐사 등의 조사</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White gap */}
      <div className="h-32 bg-white" />

      {/* 처리 가능 보험 업무 범위 Section */}
      <section className="bg-[#f8f9fa] px-8 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="mb-12 flex items-center gap-3">
            <div className="h-8 w-1 bg-[#5a9bd4]" />
            <h3 className="text-2xl font-medium text-[#1a1a2e]">처리 가능 보험 업무 범위</h3>
          </div>

          {/* Insurance Coverage Cards */}
          <div className="space-y-6">
            {/* Card 1: 간편 심사 업무 */}
            <div className="flex min-h-[200px] overflow-hidden rounded-xl bg-white shadow-md">
              <div
                className="hidden w-[280px] flex-shrink-0 bg-cover bg-center md:block"
                style={{ backgroundImage: "url(/images/business/towfiqu-analysis.jpg)" }}
              />
              <div className="flex flex-1 flex-col md:flex-row">
                <div className="flex w-full flex-col justify-center border-b border-[#eee] bg-white px-6 py-6 md:w-[180px] md:border-b-0 md:border-r">
                  <p className="mb-1 text-sm text-[#5a9bd4]">업무 01</p>
                  <h4 className="text-xl font-semibold text-[#1a1a2e]">간편 심사 업무</h4>
                  <p className="mt-1 text-xs text-[#999]">Simple Review</p>
                </div>
                <div className="flex-1 p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h5 className="mb-3 font-medium text-[#1a1a2e]">1) 인보험</h5>
                      <ul className="space-y-1 text-sm text-[#555]">
                        <li>- 사고접수 정보입력</li>
                        <li>- 실손의료비보험</li>
                        <li>- 상해보험</li>
                        <li>- 질병 특정 담보 보장보험</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="mb-3 font-medium text-[#1a1a2e]">2) 재물/배상책임보험</h5>
                      <ul className="space-y-1 text-sm text-[#555]">
                        <li>- 기업 재물/배상책임보험</li>
                        <li>- 개인 재물/일상생활배상책임보험</li>
                        <li>- 가전수리비보험</li>
                        <li>- 구내치료비보험</li>
                        <li>- 국내/해외여행보험</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: 재물/배상책임/특종보험 조사업무 */}
            <div className="flex min-h-[200px] overflow-hidden rounded-xl bg-white shadow-md">
              <div
                className="hidden w-[280px] flex-shrink-0 bg-cover bg-center md:block"
                style={{ backgroundImage: "url(/images/business/fire-accident.jpg)" }}
              />
              <div className="flex flex-1 flex-col md:flex-row">
                <div className="flex w-full flex-col justify-center border-b border-[#eee] bg-white px-6 py-6 md:w-[180px] md:border-b-0 md:border-r">
                  <p className="mb-1 text-sm text-[#5a9bd4]">업무 02</p>
                  <h4 className="text-lg font-semibold text-[#1a1a2e]">재물/배상책임/특종보험 조사업무</h4>
                  <p className="mt-1 text-xs text-[#999]">Property Insurance</p>
                </div>
                <div className="flex-1 p-6">
                  <ul className="grid gap-x-6 gap-y-1 text-sm text-[#555] md:grid-cols-2">
                    <li>- 화재보험</li>
                    <li>- 주택화재보험</li>
                    <li>- 패키지보험</li>
                    <li>- 동산종합보험</li>
                    <li>- 기계기술보험</li>
                    <li>- 일상생활배상책임보험</li>
                    <li>- 영업배상책임보험</li>
                    <li>- 근재보험</li>
                    <li>- 의료배상책임보험</li>
                    <li>- 전문인보험</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3: 인보험 조사업무 */}
            <div className="flex min-h-[200px] overflow-hidden rounded-xl bg-white shadow-md">
              <div
                className="hidden w-[280px] flex-shrink-0 bg-cover bg-center md:block"
                style={{ backgroundImage: "url(/images/business/hospital-patient.jpg)" }}
              />
              <div className="flex flex-1 flex-col md:flex-row">
                <div className="flex w-full flex-col justify-center border-b border-[#eee] bg-white px-6 py-6 md:w-[180px] md:border-b-0 md:border-r">
                  <p className="mb-1 text-sm text-[#5a9bd4]">업무 03</p>
                  <h4 className="text-xl font-semibold text-[#1a1a2e]">인보험 조사업무</h4>
                  <p className="mt-1 text-xs text-[#999]">Person Insurance</p>
                </div>
                <div className="flex-1 p-6">
                  <ul className="grid gap-x-6 gap-y-1 text-sm text-[#555] md:grid-cols-2">
                    <li>- 사망보험</li>
                    <li>- 실손의료비보험</li>
                    <li>- 상해의료비 보험</li>
                    <li>- 질병의료비 보험</li>
                    <li>- 간병비보험</li>
                    <li>- 암보험</li>
                    <li>- 특정담보/진단비 보험</li>
                    <li>- 후유장애 보험</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 4: 농작물재해보험 조사업무 */}
            <div className="flex min-h-[200px] overflow-hidden rounded-xl bg-white shadow-md">
              <div
                className="hidden w-[280px] flex-shrink-0 bg-cover bg-center md:block"
                style={{ backgroundImage: "url(/images/business/agriculture-field.jpg)" }}
              />
              <div className="flex flex-1 flex-col md:flex-row">
                <div className="flex w-full flex-col justify-center border-b border-[#eee] bg-white px-6 py-6 md:w-[180px] md:border-b-0 md:border-r">
                  <p className="mb-1 text-sm text-[#5a9bd4]">업무 04</p>
                  <h4 className="text-lg font-semibold text-[#1a1a2e]">농작물재해보험 조사업무</h4>
                  <p className="mt-1 text-xs text-[#999]">Agricultural Insurance</p>
                </div>
                <div className="flex-1 p-6">
                  <ul className="grid gap-x-6 gap-y-1 text-sm text-[#555] md:grid-cols-2">
                    <li>- 농작물 수확감소보장</li>
                    <li>- 생산비보장</li>
                    <li>- 시설파손보장</li>
                    <li>- 적과전 종합위험보장</li>
                    <li>- 적화후 특정위험보장</li>
                    <li>- 농기계보험</li>
                    <li>- 농작물 수입안정보장</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom padding */}
      <div className="h-20 bg-white" />
    </main>
  );
}
