import Navbar from "@/components/navbar";

export default function BusinessOverviewPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[280px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/business/sasun-gavel.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#2a2a3a]/50" />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-4xl font-medium text-white md:text-5xl">
            {"업무안내"}
          </h1>
        </div>
      </section>

      {/* White gap */}
      <div className="h-16 bg-white" />

      {/* Intro Section */}
      <section className="bg-white px-8 py-12 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-2xl font-medium text-[#1a1a2e] md:text-3xl lg:text-4xl">
            {"보험 손해사정의 전 과정을 책임지는 전문 파트너"}
          </h2>
          <p className="text-base text-[#666] md:text-lg">
            {"재물·배상책임·서면심사까지,"}
            <br />
            {"공정하고 체계적인 손해사정 서비스를 제공합니다"}
          </p>
        </div>
      </section>

      {/* White gap */}
      <div className="h-12 bg-white" />

      {/* 주요업무 Section */}
      <section className="bg-white px-8 pb-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="mb-8 flex items-center gap-3">
            <div className="h-4 w-4 rounded-full bg-[#5a9bd4]" />
            <h3 className="text-2xl font-medium text-[#1a1a2e]">{"주요업무"}</h3>
          </div>

          {/* 2x2 Grid of service cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Card 1: 재물·배상책임 손해사정 */}
            <div className="group relative h-[320px] overflow-hidden rounded-lg">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url(/images/business/car-accident.jpg)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/70 via-transparent to-[#1a1a2e]/90" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-between p-6">
                <div>
                  <h4 className="text-lg font-medium text-white md:text-xl">
                    <span className="text-[#5a9bd4]">{"재물·배상책임"}</span>
                    <br />
                    {"손해사정(현장조사)"}
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-white/90 md:text-base">
                  {"화재, 누수, 대물·대인·배상사고 등 다양한 재물·배상책임 사고에 대해 전문 조사 인력이 현장조사를 수행하고 객관적인 손해 산정을 진행합니다."}
                </p>
              </div>
            </div>

            {/* Card 2: 인보험 손해사정 */}
            <div className="group relative h-[320px] overflow-hidden rounded-lg">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url(/images/business/daniela-medical.jpg)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/70 via-transparent to-[#1a1a2e]/90" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-between p-6">
                <div>
                  <h4 className="text-lg font-medium text-white md:text-xl">
                    <span className="text-[#5a9bd4]">{"인보험 손해사정"}</span>
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-white/90 md:text-base">
                  {"병력 및 사고경위 확인을 기반으로 의료적 적정성을 검토하고, 비급여 의료비·입원·수술의 타당성 판단과 함께 암·뇌·심장질환, 후유장해 및 각종 사망사고에 대한 정밀한 인보험 심사를 수행합니다."}
                </p>
              </div>
            </div>

            {/* Card 3: 보험사기·모랄 리스크 대응 */}
            <div className="group relative h-[320px] overflow-hidden rounded-lg">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url(/images/business/romain-fraud.jpg)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/70 via-transparent to-[#1a1a2e]/90" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-between p-6">
                <div>
                  <h4 className="text-lg font-medium text-white md:text-xl">
                    <span className="text-[#5a9bd4]">{"보험사기·모랄 리스크 대응"}</span>
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-white/90 md:text-base">
                  {"보험사기 및 모랄 리스크를 체계적으로 분석·적발하여 부당 보험금 지급을 방지하고 보험사의 손실을 최소화합니다."}
                </p>
              </div>
            </div>

            {/* Card 4: 보험금 지급심사 · 서면심사 */}
            <div className="group relative h-[320px] overflow-hidden rounded-lg">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url(/images/business/towfiqu-analysis.jpg)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/70 via-transparent to-[#1a1a2e]/90" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-between p-6">
                <div>
                  <h4 className="text-lg font-medium text-white md:text-xl">
                    <span className="text-[#5a9bd4]">{"보험금 지급심사 · 서면심사"}</span>
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-white/90 md:text-base">
                  {"약관 검토, 손해산정, 지급 적정성 판단까지 전문 심사 인력을 통한 체계적인 서면심사로 보험금 지급의 정확성을 확보합니다."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White gap */}
      <div className="h-16 bg-white" />

      {/* 업무 01: 인보험 */}
      <section className="flex h-[360px] w-full flex-col lg:flex-row">
        {/* Left - Image */}
        <div
          className="h-[200px] bg-cover bg-center lg:h-full lg:w-[35%]"
          style={{ backgroundImage: "url(/images/business/fire-accident.jpg)" }}
        />
        {/* Right - Content */}
        <div className="flex flex-1 bg-[#f5f5f5]">
          {/* Title area */}
          <div className="flex flex-col justify-center border-r-4 border-[#5a9bd4] bg-white px-8 py-8 lg:w-[200px]">
            <p className="mb-2 text-base font-medium text-[#5a9bd4]">{"업무 01"}</p>
            <h3 className="text-3xl font-semibold text-[#1a1a2e] md:text-4xl">{"인보험"}</h3>
            <p className="mt-2 text-sm text-[#888]">{"Person Insurance"}</p>
          </div>
          {/* Description area */}
          <div className="flex flex-1 flex-col justify-center px-8 py-6">
            <h4 className="mb-4 text-xl font-semibold text-[#1a1a2e]">
              {"사람의 신체·건강·사망과 관련된 보험"}
            </h4>
            <ul className="space-y-2 text-base text-[#555]">
              <li>{"• 병력확인, 사고경위 확인 등 의료적정성"}</li>
              <li>{"• 장기보험, 질병보험, 상해보험"}</li>
              <li>{"• 실손의료비 보험, 간병인 보험"}</li>
              <li>{"• 비급여 의료비, 입원, 수술 적정성"}</li>
              <li>{"• 인보험 현장조사 (사고·질병 사실관계 조사)"}</li>
              <li>{"• 암,뇌질환,심장질환,후유장해 진단비 적정성"}</li>
              <li>{"• 타살,자살,질병,사고 사망사고"}</li>
              <li>{"• 허위·과다 청구 및 보험사기(SIU) 조사"}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* White gap */}
      <div className="h-16 bg-white" />

      {/* 업무 02: 물보험 */}
      <section className="flex h-[360px] w-full flex-col lg:flex-row">
        {/* Left - Content */}
        <div className="order-2 flex flex-1 bg-[#f5f5f5] lg:order-1">
          {/* Title area */}
          <div className="flex flex-col justify-center border-r-4 border-[#5a9bd4] bg-white px-8 py-8 lg:w-[200px]">
            <p className="mb-2 text-base font-medium text-[#5a9bd4]">{"업무 02"}</p>
            <h3 className="text-3xl font-semibold text-[#1a1a2e] md:text-4xl">{"물보험"}</h3>
            <p className="mt-2 text-sm text-[#888]">{"Property / Material Insurance"}</p>
          </div>
          {/* Description area */}
          <div className="flex flex-1 flex-col justify-center px-8 py-6">
            <h4 className="mb-4 text-xl font-semibold text-[#1a1a2e]">
              {"유형 자산(건물·시설·설비 등)에 대한 보험"}
            </h4>
            <ul className="space-y-2 text-base text-[#555]">
              <li>{"• 화재보험, 공장·시설물 보험"}</li>
              <li>{"• 기계·설비 손해보험, 일반 재산보험"}</li>
              <li>{"• 재물 손해 현장조사"}</li>
              <li>{"• 손해액 산정 및 복구비 평가"}</li>
              <li>{"• 건축·기계·전문 기술 인력 투입 조사"}</li>
              <li>{"• 재물 손해 관련 서면심사"}</li>
            </ul>
          </div>
        </div>
        {/* Right - Image */}
        <div
          className="order-1 h-[200px] bg-cover bg-center lg:order-2 lg:h-full lg:w-[35%]"
          style={{ backgroundImage: "url(/images/business/building-collapse.jpg)" }}
        />
      </section>

      {/* White gap */}
      <div className="h-16 bg-white" />

      {/* 업무 03: 배상책임보험 */}
      <section className="flex h-[360px] w-full flex-col lg:flex-row">
        {/* Left - Image */}
        <div
          className="h-[200px] bg-cover bg-center lg:h-full lg:w-[35%]"
          style={{ backgroundImage: "url(/images/business/towfiqu-coins.jpg)" }}
        />
        {/* Right - Content */}
        <div className="flex flex-1 bg-[#f5f5f5]">
          {/* Title area */}
          <div className="flex flex-col justify-center border-r-4 border-[#5a9bd4] bg-white px-8 py-8 lg:w-[200px]">
            <p className="mb-2 text-base font-medium text-[#5a9bd4]">{"업무 03"}</p>
            <h3 className="text-2xl font-semibold text-[#1a1a2e] md:text-3xl">{"배상책임보험"}</h3>
            <p className="mt-2 text-sm text-[#888]">{"Liability Insurance"}</p>
          </div>
          {/* Description area */}
          <div className="flex flex-1 flex-col justify-center px-8 py-6">
            <h4 className="mb-4 text-xl font-semibold text-[#1a1a2e]">
              {"타인에게 끼친 손해에 대한 법적 배상 책임"}
            </h4>
            <ul className="space-y-2 text-base text-[#555]">
              <li>{"• 대인배상 책임보험, 대물배상 책임보험"}</li>
              <li>{"• 일상생활 배상책임보험"}</li>
              <li>{"• 시설소유·관리자 배상책임보험"}</li>
              <li>{"• 사고 경위 조사 및 책임 여부 판단"}</li>
              <li>{"• 피해 범위 및 손해액 산정"}</li>
              <li>{"• 법적 책임 구조 분석"}</li>
              <li>{"• 허위 사고 및 가공 사고 적발"}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* White gap */}
      <div className="h-16 bg-white" />

      {/* 업무 04: 소액 보험금 서면심사 */}
      <section className="flex h-[360px] w-full flex-col lg:flex-row">
        {/* Left - Content */}
        <div className="order-2 flex flex-1 bg-[#f5f5f5] lg:order-1">
          {/* Title area */}
          <div className="flex flex-col justify-center border-r-4 border-[#5a9bd4] bg-white px-8 py-8 lg:w-[220px]">
            <p className="mb-2 text-base font-medium text-[#5a9bd4]">{"업무 04"}</p>
            <h3 className="text-2xl font-semibold leading-tight text-[#1a1a2e] md:text-3xl">{"소액 보험금 서면심사"}</h3>
            <p className="mt-2 text-sm text-[#888]">{"Written review"}</p>
          </div>
          {/* Description area */}
          <div className="flex flex-1 flex-col justify-center px-8 py-6">
            <h4 className="mb-4 text-xl font-semibold text-[#1a1a2e]">
              {"고심도 보험금 심사 전문 분야"}
            </h4>
            <ul className="space-y-2 text-base text-[#555]">
              <li>{"• 물서면 심사: 재물보험, 배상책임보험, 누수 사고 지급심사 인보험심사"}</li>
              <li>{"• 인보험 심사: 상해(재해), 질병, 후유장해 의료비(비급여 등) 사고 보험금 지급 심사"}</li>
              <li>{"• 보험금 청구 접수 및 정보입력"}</li>
              <li>{"• 보험금 청구건 접수입력, 의료정보입력 및 서류보완"}</li>
            </ul>
          </div>
        </div>
        {/* Right - Image */}
        <div
          className="order-1 h-[200px] bg-cover bg-center lg:order-2 lg:h-full lg:w-[35%]"
          style={{ backgroundImage: "url(/images/business/scott-document.jpg)" }}
        />
      </section>

      {/* Bottom padding */}
      <div className="h-20 bg-white" />
    </main>
  );
}
