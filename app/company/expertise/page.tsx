import Navbar from "@/components/navbar";

export default function CompanyExpertisePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1: Hero - 회사 전문성 */}
      <section className="relative flex h-[280px] w-full items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/company/sean-buildings.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#1a1a2e]/60" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">
            회사 전문성
          </h1>
        </div>
      </section>

      {/* Section 2: Company Professionalism + Slogan */}
      <section className="bg-white px-8 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm text-[#888] md:text-base" style={{ fontFamily: "Georgia, serif" }}>
            Company professionalism
          </p>
          <h2 className="mb-6 text-2xl font-medium text-[#1a1a2e] md:text-3xl lg:text-4xl">
            전문성이 곧 경쟁력, 업계를 선도하는 손해사정 전문 그룹
          </h2>
          <p className="text-base text-[#555] md:text-lg">
            {"숫자와 성과로 증명된 전문성 "}<span className="text-[#e87a1e]">{"T&G"}</span>{" 손해사정 그룹의 역량입니다"}
          </p>
        </div>
      </section>

      {/* gap - 붙여 60px */}
      <div className="h-[10px] bg-white" />

      {/* Section: 강점 및 차별화된 서비스 (moved to top) */}
      <section className="bg-white px-8 py-1 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-medium text-[#1a1a2e] md:text-3xl">강점 및 차별화된 서비스</h2>
            <p className="text-sm text-[#888]">
              <span className="text-[#e87a1e]">T&G</span> 손해사정 GROUP 만의 핵심 경쟁력이 만드는 차이
            </p>
          </div>

          {/* 특화된 강점 */}
          <div className="mb-10 text-center">
            <h3 className="mb-1 text-lg font-medium text-[#1a1a2e]">특화된 강점</h3>
            <div className="mx-auto mb-3 h-px w-40 bg-[#333]" />
            <p className="text-sm text-[#e87a1e]">T&G's 3 Ways</p>
          </div>

          {/* 3 Columns */}
          <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Column 1 */}
            <div className="rounded-lg border border-[#e87a1e] p-6">
              <h4 className="mb-4 text-center text-base md:text-lg font-semibold text-[#1a1a2e]">
                심사 전업무를 취급하는 <span className="text-[#e87a1e]">심사전문업체</span>
              </h4>
              <div className="space-y-3 text-sm text-[#555] text-center">
                <p>소액,중심도,자동심사,정보입력 등 심사전업무를 최고심사 인력으로 운영</p>
                <p><span className="font-medium text-[#1a1a2e]">일일 지표관리</span>를 통해 우수한 심사 실적 시현</p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="rounded-lg border border-[#e87a1e] p-6">
              <h4 className="mb-4 text-center text-base md:text-lg font-semibold text-[#1a1a2e]">
                <span className="text-[#e87a1e]">소비자보호센터</span> 특화 운영
              </h4>
              <div className="space-y-3 text-sm text-[#555] text-center">
                <p>불만고객 응대 발생사유 파악, 민원유형 자료관리 및 해결방법 수집</p>
                <p>팀장 연락처 기재를 통한 간편한 고객 피드백 수용, 해결 접근성 개선</p>
                <p><span className="font-medium text-[#1a1a2e]">매달 "고객보호비용 기금"</span> 적립</p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="rounded-lg border border-[#e87a1e] p-6">
              <h4 className="mb-4 text-center text-base md:text-lg font-semibold text-[#1a1a2e]">
                오류를 <span className="text-[#e87a1e]">"Zero"</span> 운영
              </h4>
              <div className="space-y-3 text-sm text-[#555] text-center">
                <p>업무개시시 품질점검</p>
                <p>사례전파 교육 및<br />
                  <span className="font-medium text-[#1a1a2e]">부진자 선별 IN-OUT 제도</span> 적용
                </p>
                <p>오류유형 발굴</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* gap - 붙여 60px */}
      <div className="h-[10px] bg-white" />

      {/* T&G만의 차별화 전략 */}
      <section className="bg-white px-8 py-1 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-center gap-2">
            <div className="h-5 w-1 bg-[#e87a1e]" />
            <h3 className="text-lg font-medium text-[#1a1a2e]">T&G만의 차별화 전략</h3>
          </div>

          <div className="space-y-6">
            {/* Row 1 */}
            <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
              <div className="flex h-32 w-32 flex-shrink-0 items-center justify-center self-center rounded-full border-2 border-[#e87a1e] text-center text-sm font-medium leading-tight text-[#e87a1e] md:h-36 md:w-36">
                Total Solution<br />제공
              </div>
              <div className="flex items-center text-2xl text-[#ccc]">→</div>
              <div className="flex-1 rounded-lg border border-[#ddd] bg-[#fafafa] px-6 py-5 text-sm leading-relaxed text-[#333]">
                <p className="mb-3 font-medium text-[#e87a1e]">손해사정 관련 Total Solution 제공 가능회사</p>
                <p className="mb-2">① 보험사고접수 정보입력-서면심사-전문조사-보험금산정의 모든 손해사정 업무를 수행할 수 있는 조직을 보유하고 있습니다.</p>
                <p className="mb-2">② 인보험(상해보험, 질병보험 등), 재물보험(화재보험, 배상책임보험, 특종보험), 농작물보험 손해사정 등 손해보험 전부문의 전문 조사자 보유</p>
                <p>③ 보험계약의 심사 안내, 보험사고처리 과정 안내, 손해사정 결과 안내가 가능한 자사 콜센터 보유</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
              <div className="flex h-32 w-32 flex-shrink-0 items-center justify-center self-center rounded-full border-2 border-[#e87a1e] text-center text-sm font-medium leading-tight text-[#e87a1e] md:h-36 md:w-36">
                고품질<br />손해사정 서비스<br />제공회사
              </div>
              <div className="flex items-center text-2xl text-[#ccc]">→</div>
              <div className="flex-1 rounded-lg border border-[#ddd] bg-[#fafafa] px-6 py-5 text-sm leading-relaxed text-[#333]">
                <p className="mb-3 font-medium text-[#e87a1e]">고객의 소리를 경청하고, 고객의 요청에 만족으로 답하는 고품질 손해사정 서비스 제공회사</p>
                <p className="mb-2">① 보험회사 고객사가 평가로 인정하는 손해사정역량과 고객친절도 모범협력사</p>
                <p className="mb-2">② 보험계약자가 직접 선택하여 믿고 맡기는 지정 손해사정회사</p>
                <p>③ 고객의 소리에 귀 기울이는 자사 고객소비자서비스센터 운영 <span className="font-medium text-[#e87a1e]">(전화 070-7464-1151)</span></p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
              <div className="flex h-32 w-32 flex-shrink-0 items-center justify-center self-center rounded-full border-2 border-[#e87a1e] text-center text-sm font-medium leading-tight text-[#e87a1e] md:h-36 md:w-36">
                도전정신의<br />선도 회사
              </div>
              <div className="flex items-center text-2xl text-[#ccc]">→</div>
              <div className="flex-1 rounded-lg border border-[#ddd] bg-[#fafafa] px-6 py-5 text-sm leading-relaxed text-[#333]">
                <p className="mb-3 font-medium text-[#e87a1e]">인재에 투자하고, 미래를 준비하는 도전정신의 선도 회사</p>
                <p className="mb-2">① 인재를 존중하고 아낌없이 투자하는 인재 제일의 기업문화</p>
                <p className="mb-2">② 끊임없는 프로세스 개선과 혁신으로 손해사정업무의 표준을 수립</p>
                <p>③ 전문회사와 함께 AI 디지털손해사정을 선도하고 손해사정 실무에 성공적 적용 완성</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White gap */}
      <div className="h-32 bg-white" />

      {/* Section: 분야별 전문 자격 기반 */}
      <section className="bg-white px-8 py-1 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <h3 className="mb-2 text-xl font-medium text-[#1a1a2e] md:text-2xl">
              분야별 전문 자격 기반의 손해사정 전문가 그룹
            </h3>
            <p className="text-sm text-[#666]">자격으로 증명되는 전문가들과 함께합니다</p>
            <div className="mt-3 h-1 w-24 bg-[#e87a1e]" />
          </div>

          {/* 2x2 Grid of Expert Categories */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* 손해사정 전문인력 */}
            <div className="flex overflow-hidden rounded-lg border border-[#333]">
              <div className="flex w-1/3 flex-col items-center justify-center bg-[#2a2a2a] px-4 py-8 text-center">
                <h4 className="mb-2 text-base font-medium text-white">손해사정 전문인력</h4>
                <p className="text-xs text-white/70">공인 손해사정사 중심<br />특화팀 운영</p>
              </div>
              <div className="flex w-2/3 flex-col justify-center bg-[#3a3a3a] px-6 py-6">
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-sm bg-white/60" />재물·배상 분야 전공자</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-sm bg-white/60" />다년차 현장 경력자</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-sm bg-white/60" />건축기사, 관련 전공자</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-sm bg-white/60" />건설현장 현직자</li>
                </ul>
              </div>
            </div>

            {/* 의료 전문인력 */}
            <div className="flex overflow-hidden rounded-lg border border-[#333]">
              <div className="flex w-1/3 flex-col items-center justify-center bg-[#2a2a2a] px-4 py-8 text-center">
                <h4 className="mb-2 text-base font-medium text-white">의료 전문인력</h4>
                <p className="text-xs text-white/70">간호 자격 보유 인력<br />및 의료 협업 체계</p>
              </div>
              <div className="flex w-2/3 flex-col justify-center bg-[#3a3a3a] px-6 py-6">
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-sm bg-white/60" />간호사출신 의료자문역</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-sm bg-white/60" />7년 이상의 경력 대인전문단</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-sm bg-white/60" />신체손해사정사</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-sm bg-white/60" />금융보험학 전공자</li>
                </ul>
              </div>
            </div>

            {/* 공학 전문인력 */}
            <div className="flex overflow-hidden rounded-lg border border-[#333]">
              <div className="flex w-1/3 flex-col items-center justify-center bg-[#2a2a2a] px-4 py-8 text-center">
                <h4 className="mb-2 text-base font-medium text-white">공학 전문인력</h4>
                <p className="text-xs text-white/70">건축·기계·자동차 전공<br />및 자격 인력 구성</p>
              </div>
              <div className="flex w-2/3 flex-col justify-center bg-[#3a3a3a] px-6 py-6">
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-sm bg-white/60" />기계·자동차 자격자, 전공자</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-sm bg-white/60" />대물손해사정사</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-sm bg-white/60" />대인/대물 복합팀 운영</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-sm bg-white/60" />건설현장 현직자</li>
                </ul>
              </div>
            </div>

            {/* 국제 전문자격 */}
            <div className="flex overflow-hidden rounded-lg border border-[#333]">
              <div className="flex w-1/3 flex-col items-center justify-center bg-[#2a2a2a] px-4 py-8 text-center">
                <h4 className="mb-2 text-base font-medium text-white">국제 전문자격</h4>
                <p className="text-xs text-white/70">CFEI · AIC · CPCU 국<br />제 공인 자격 보유</p>
              </div>
              <div className="flex w-2/3 flex-col justify-center bg-[#3a3a3a] px-6 py-6">
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-sm bg-white/60" />미국화재폭발조사(CFEI)관</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-sm bg-white/60" />미국손해사정사(AIC)</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-sm bg-white/60" />미국손해보험심사자(CPCU)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* gap - 텀 260px */}
      <div className="h-[260px] bg-white" />

      {/* Section: 디지털과 법률이 결합된 차세대 손해사정 체계 */}
      <section className="relative min-h-[300px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/company/hunters-suit.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#1a1a2e]/70" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center px-8 py-16 text-center md:px-16">
          <h2 className="mb-4 text-2xl font-medium text-[#e87a1e] md:text-3xl lg:text-4xl">
            디지털과 법률이 결합된 차세대 손해사정 체계
          </h2>
          <p className="text-base text-white/80 md:text-lg">
            기술과 전문성으로 완성하는 혁신적 수행 구조
          </p>
        </div>
      </section>

      {/* Digital & Legal Sections */}
      <section className="bg-white">
        {/* DX 가속화 */}
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center justify-center bg-[#2a2a2a] px-8 py-10 md:w-1/4">
            <div className="text-center text-white">
              <h4 className="text-xl md:text-2xl font-semibold leading-snug">
                손해사정 디지털 전환
              </h4>
              <p className="mt-2 text-base md:text-lg text-white/70">
                (DX) 가속화
              </p>
            </div>
          </div>
          <div className="flex-1 bg-[#3a3a3a] px-8 py-10 md:px-12">
            <p className="mb-4 text-sm leading-relaxed text-white/90 md:text-base">
              티앤지손해사정은 <span className="text-[#5a9bd4] underline">인슈어테크 전문 기업 Aims와 전략적 업무협약</span>을 통해 고도화된 디지털 솔루션을 도입, 손해사정 업무의 효율성을 극대화하고, 데이터 기반의 정교한 분석 시스템 구축 하여 전통적인 손해사정 역량에 Aims의 최첨단 IT 기술력을 더해, 더 빠르고 투명한 서비스를 실현합니다.
            </p>
            {/* AIMS 3 Services */}
            <div className="mb-4 space-y-3 rounded bg-[#4a4a4a]/60 px-4 py-4">
              <div className="text-sm leading-relaxed text-white/90 md:text-base">
                <span className="font-medium text-[#5a9bd4]">① Autodit</span> - 보험상품 약관 자동분석 기능을 포함하고 있으며, 이를 통해 확실한 데이터로 다양한 클레임 자동화 솔루션 제공 - 약관분석을 통해 보상 기준을 데이터화하고 보험금 산출, 감리, 상품 추천에 활용
              </div>
              <div className="text-sm leading-relaxed text-white/90 md:text-base">
                <span className="font-medium text-[#5a9bd4]">② Autocapture</span> - API 기반 청구서류 데이터화 서비스 - 보험금 자동 산출, 착오지급 탐지, 보험범죄 탐지에 활용
              </div>
              <div className="text-sm leading-relaxed text-white/90 md:text-base">
                <span className="font-medium text-[#5a9bd4]">③ Autoclaim</span> - API 기반 심사 자동화 서비스 - Autodit 기술과 Autocapture의 생성 데이터를 융합하여 보험금 심사 업무를 획기적으로 자동화
              </div>
            </div>
            <div className="border-l-4 border-[#e87a1e] bg-[#4a4a4a] px-4 py-3">
              <p className="text-xs leading-relaxed text-[#e87a1e] md:text-sm">
                업무 프로세스 자동화와 데이터 기반 분석 시스템을 통해 보상의 정확도를 높이고, 디지털 플랫폼 중심의 고객 경험을 혁신합니다.
              </p>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-[#5b5b5b]" />
        {/* 전문성 고도화 */}
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center justify-center bg-[#2a2a2a] px-8 py-10 md:w-1/4">
            <div className="text-center text-white">
              <h4 className="text-xl md:text-2xl font-semibold leading-snug">
                손해사정 전문성
              </h4>
              <p className="mt-2 text-base md:text-lg text-white/70">
                고도화
              </p>
            </div>
          </div>
          <div className="flex-1 bg-[#3a3a3a] px-8 py-10 md:px-12">
            <p className="mb-4 text-sm leading-relaxed text-white/90 md:text-base">
              티앤지손해사정은 <span className="text-[#5a9bd4] underline">법무법인 도원</span>과의 긴밀한 협력을 통해 손해사정의 전문성을 한 차원 더 높였습니다. 이제 까다로운 보상 문제도 법률적 검토를 바탕으로 더욱 정교하고 안전하게 처리합니다.
            </p>
            {/* Dowon Law Firm Service */}
            <div className="mb-4 rounded bg-[#4a4a4a]/60 px-4 py-4">
              <p className="text-sm leading-relaxed text-white/90 md:text-base">
                고객들이 신뢰하고 만족할 수 있는 법률서비스 제공을 위하여 손해보험, 생명보험, 의료, 민간조사 분야의 전문 변호사로 구성하여 <span className="text-[#5a9bd4]">법률자문, 보험분쟁, 의료분쟁, 민간조사 및 형사소송, 구상 및 고액보상</span> 등 종합적인 보험 법률 서비스 제공 협업
              </p>
            </div>
            <div className="border-l-4 border-[#e87a1e] bg-[#4a4a4a] px-4 py-3">
              <p className="text-xs leading-relaxed text-[#e87a1e] md:text-sm">
                법무법인 도원과의 긴밀한 협업을 통해 법적 검토 기반의 객관성과 신뢰성을 확보하고, 보상전문성과 법률 지식을 결합한 복합 솔루션으로 고객의 권익을 최우선으로 보호합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* gap - 텀 260px */}
      <div className="h-[100px] bg-white" />

      {/* Section: 경쟁력 4S 핵심역량 */}
      <section className="bg-[#fafafa] px-8 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex items-center gap-2">
            <div className="h-6 w-1 bg-[#e87a1e]" />
            <h3 className="text-xl font-medium text-[#1a1a2e] md:text-2xl">
              경쟁력 : <span className="text-[#e87a1e]">4S</span> 핵심역량
            </h3>
          </div>

          <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-12">
            {/* 4S Circle Diagram */}
            <div className="relative mx-auto h-64 w-64 flex-shrink-0 md:h-72 md:w-72 lg:mx-0">
              {/* Circle segments */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="absolute left-0 top-0 flex h-1/2 w-1/2 items-end justify-end bg-[#f5a623] pb-6 pr-4">
                  <span className="text-base font-medium text-white md:text-lg">System</span>
                </div>
                <div className="absolute right-0 top-0 flex h-1/2 w-1/2 items-end justify-start bg-[#e89630] pb-6 pl-4">
                  <span className="text-base font-medium text-white md:text-lg">Speciality</span>
                </div>
                <div className="absolute bottom-0 left-0 flex h-1/2 w-1/2 items-start justify-end bg-[#e89630] pr-4 pt-6">
                  <span className="text-base font-medium text-white md:text-lg">Speed</span>
                </div>
                <div className="absolute bottom-0 right-0 flex h-1/2 w-1/2 items-start justify-start bg-[#f5a623] pl-4 pt-6">
                  <span className="text-base font-medium text-white md:text-lg">Support</span>
                </div>
              </div>
              {/* Center dividers */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-white" />
              <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-white" />
            </div>

            {/* Descriptions */}
            <div className="flex-1 space-y-6">
              {/* System */}
              <div className="border-l-4 border-[#e87a1e] pl-4">
                <p className="text-sm text-[#333] md:text-base">
                  모든 업무의 <span className="text-[#e87a1e]">"AI 시스템"</span> 도입, 업무효율 증대 운영
                </p>
                <p className="text-sm text-[#e87a1e]">Know-How에 의한 안정된 관리</p>
              </div>

              {/* Speciality */}
              <div className="border-l-4 border-[#e87a1e] pl-4">
                <p className="text-sm text-[#333] md:text-base">
                  <span className="text-[#e87a1e]">H&T 전속법안</span>으로 자회사 역할 수행
                </p>
                <p className="text-sm text-[#333]">전문성, 서비스 마인드 장착</p>
                <p className="text-sm text-[#e87a1e]">2020,2024년 최우수 업체 시상 2회</p>
              </div>

              {/* Support */}
              <div className="border-l-4 border-[#e87a1e] pl-4">
                <p className="text-sm text-[#333] md:text-base">
                  체계적인 HR지원시스템 <span className="text-[#e87a1e]">엔파비 보유</span>
                </p>
                <p className="text-sm text-[#333]">채용Process와 체계화된 전문기관 연계한 운영 시스템 보유</p>
                <p className="text-sm text-[#e87a1e]">적기에 적정 인력 투입가능</p>
              </div>

              {/* Speed */}
              <div className="border-l-4 border-[#e87a1e] pl-4">
                <p className="text-sm text-[#333] md:text-base">
                  <span className="text-[#e87a1e]">"AI시스템"</span> 도입으로 신속한 업무처리, 대량건수 처리가능
                </p>
                <p className="text-sm text-[#e87a1e]">1일 인당평균 200건에서 300건 이상 처리</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-20 bg-white" />
    </main>
  );
}
