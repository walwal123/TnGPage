import { MapPin, Train } from "lucide-react";
import Navbar from "@/components/navbar";

export default function CompanyLocationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative flex h-[280px] w-full items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/company/sean-buildings.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#1a1a2e]/60" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">
            오시는길
          </h1>
        </div>
      </section>

      <div className="h-32 bg-white" />

      <section className="bg-white px-4">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-lg border border-[#ddd] shadow-sm">
            <img
              src="/images/company/location-map.png"
              alt="T and G Location Map"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <div className="h-16 bg-white" />

      <section className="bg-white px-4 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-start gap-6 rounded-lg border-b border-[#eee] bg-white p-6">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-[#f0f7fc]">
              <MapPin className="h-7 w-7 text-[#5a9bd4]" />
            </div>
            <div>
              <h2 className="mb-3 text-xl font-semibold text-[#1a1a2e]">주소</h2>
              <p className="mb-2 text-[#333]">
                (도로명) 서울특별시 종로구 창경궁로 109
              </p>
              <p className="text-[#5a9bd4]">
                Tel : 070-7464-1151
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 rounded-lg bg-white p-6">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-[#f0f7fc]">
              <Train className="h-7 w-7 text-[#5a9bd4]" />
            </div>
            <div className="flex-1">
              <h2 className="mb-6 text-xl font-semibold text-[#1a1a2e]">대중교통 이용시</h2>

              <div className="mb-6">
                <h3 className="mb-3 flex items-center gap-2 font-medium text-[#1a1a2e]">
                  <span className="text-[#5a9bd4]">●</span> 지하철
                </h3>
                <div className="ml-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex min-w-[80px] items-center justify-center rounded bg-[#996CAC] px-3 py-1 text-sm font-medium text-white">
                      5호선
                    </span>
                    <span className="text-sm text-[#333]">종로3가역 4번 출구 하차 후 도보 5분</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex min-w-[80px] items-center justify-center rounded bg-[#EF7C1C] px-3 py-1 text-sm font-medium text-white">
                      3호선
                    </span>
                    <span className="text-sm text-[#333]">종로3가역 4번 출구 하차 후 도보 5분</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex min-w-[80px] items-center justify-center rounded bg-[#00A84D] px-3 py-1 text-sm font-medium text-white">
                      1호선
                    </span>
                    <span className="text-sm text-[#333]">종로3가역 12번 출구 하차 후 도보 7분</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="mb-3 flex items-center gap-2 font-medium text-[#1a1a2e]">
                  <span className="text-[#5a9bd4]">●</span> 버스
                </h3>
                <p className="mb-3 ml-4 text-sm text-[#666]">종묘, 창경궁 정류장 하차 후</p>
                <div className="ml-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex min-w-[60px] items-center justify-center rounded bg-[#3D5BAB] px-3 py-1 text-sm font-medium text-white">
                      간선
                    </span>
                    <span className="text-sm text-[#333]">101, 102, 103, 104, 106, 107, 108, 140, 143, 150, 151</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex min-w-[60px] items-center justify-center rounded bg-[#5BB025] px-3 py-1 text-sm font-medium text-white">
                      지선
                    </span>
                    <span className="text-sm text-[#333]">7025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex min-w-[60px] items-center justify-center rounded bg-[#E60012] px-3 py-1 text-sm font-medium text-white">
                      직행
                    </span>
                    <span className="text-sm text-[#333]">1112, 1162</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 flex items-center gap-2 font-medium text-[#1a1a2e]">
                  <span className="text-[#5a9bd4]">●</span> 마을버스
                </h3>
                <p className="mb-3 ml-4 text-sm text-[#666]">종묘 정류장 하차 후</p>
                <div className="ml-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex min-w-[60px] items-center justify-center rounded bg-[#5BB025] px-3 py-1 text-sm font-medium text-white">
                      마을
                    </span>
                    <span className="text-sm text-[#333]">종로09</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-32 bg-white" />
    </main>
  );
}
