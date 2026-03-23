"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import { useLanguage } from "@/lib/language-context";

export default function BranchInfoPage() {
  const { t, language } = useLanguage();

  const branchDataKo = [
    { team: "본사", work: "", location: "서울 종로구 창경궁로 109" },
    { team: "소비자보호센터", work: "", location: "서울 종로구 창경궁로 109, 전화번호 070-7464-1151" },
    { team: "화재/재물팀", work: "재물", location: "서울 영등포구 경인로 775" },
    { team: "경인팀", work: "인보험", location: "인천 서구 봉오재3로110번길 7" },
    { team: "경기남부팀", work: "인보험", location: "경기 안양시 동안구 엘에스로 76" },
    { team: "경기북부팀", work: "인보험", location: "경기 남양주시 순화궁로 116" },
    { team: "강원팀", work: "인보험", location: "강원도 원주시 치악고교길 40" },
    { team: "대전팀", work: "인보험", location: "대전 서구 도산로 330" },
    { team: "대전팀", work: "재물/배상", location: "대전 유성구 지족로 283" },
    { team: "전북팀", work: "인보험", location: "전북 전주시 완산구 홍산남로 52" },
    { team: "광주팀", work: "인보험", location: "광주 북구 첨단연신로 15" },
    { team: "광주팀", work: "재물/배상", location: "광주 북구 첨단연신로 88" },
    { team: "대구팀", work: "인보험", location: "대구 북구 환성정길 12-24" },
    { team: "부산팀", work: "인보험", location: "부산 부산진구 신암로 66" },
    { team: "부산팀", work: "재물/배상", location: "부산 동구 중앙대로 263" },
    { team: "경남팀", work: "인보험", location: "경남 창원시 마산합포구 북성로 5" },
  ];

  const branchDataEn = [
    { team: "Headquarters", work: "", location: "109 Changgyeonggung-ro, Jongno-gu, Seoul" },
    { team: "Consumer Protection Center", work: "", location: "109 Changgyeonggung-ro, Jongno-gu, Seoul, Tel: 070-7464-1151" },
    { team: "Fire/Property Team", work: "Property", location: "775 Gyeongin-ro, Yeongdeungpo-gu, Seoul" },
    { team: "Gyeongin Team", work: "Personal", location: "7 Bongojae 3-ro 110beon-gil, Seo-gu, Incheon" },
    { team: "South Gyeonggi Team", work: "Personal", location: "76 LS-ro, Dongan-gu, Anyang-si, Gyeonggi" },
    { team: "North Gyeonggi Team", work: "Personal", location: "116 Sunhwagung-ro, Namyangju-si, Gyeonggi" },
    { team: "Gangwon Team", work: "Personal", location: "40 Chiakgogyo-gil, Wonju-si, Gangwon" },
    { team: "Daejeon Team", work: "Personal", location: "330 Dosan-ro, Seo-gu, Daejeon" },
    { team: "Daejeon Team", work: "Property/Liability", location: "283 Jijok-ro, Yuseong-gu, Daejeon" },
    { team: "Jeonbuk Team", work: "Personal", location: "52 Hongsannam-ro, Wansan-gu, Jeonju-si, Jeonbuk" },
    { team: "Gwangju Team", work: "Personal", location: "15 Cheomdanyeonsin-ro, Buk-gu, Gwangju" },
    { team: "Gwangju Team", work: "Property/Liability", location: "88 Cheomdanyeonsin-ro, Buk-gu, Gwangju" },
    { team: "Daegu Team", work: "Personal", location: "12-24 Hwanseongjeong-gil, Buk-gu, Daegu" },
    { team: "Busan Team", work: "Personal", location: "66 Sinam-ro, Busanjin-gu, Busan" },
    { team: "Busan Team", work: "Property/Liability", location: "263 Jungang-daero, Dong-gu, Busan" },
    { team: "Gyeongnam Team", work: "Personal", location: "5 Bukseong-ro, Masanhappo-gu, Changwon-si, Gyeongnam" },
  ];

  const branchData = language === "ko" ? branchDataKo : branchDataEn;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - 서비스안내 배경 사용 */}
      <section className="relative h-[220px] w-full">
        <Image
          src="/images/service/kaja-info.jpg"
          alt={language === "ko" ? "거점정보 배경" : "Branch Info Background"}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-medium text-white md:text-4xl">{t("branch.info.hero")}</h1>
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
              {t("branch.info.title")}
            </h2>
            <p className="mb-2 text-base text-white/80 md:text-lg">
              {t("branch.info.branches")}
            </p>
            <p className="text-sm text-white/60 md:text-base">
              {t("branch.info.desc")}
            </p>
          </div>

          {/* Branch table */}
          <div className="mx-auto w-full max-w-4xl overflow-hidden rounded bg-[#4a4a4a]/90 p-6 backdrop-blur-sm">
            <table className="w-full text-center text-sm text-white">
              <thead>
                <tr className="border-b border-white/20 bg-[#3a6a8a]/80">
                  <th className="px-3 py-3 font-medium text-[#7dd3fc]">{t("branch.info.team")}</th>
                  <th className="px-3 py-3 font-medium text-[#7dd3fc]">{t("branch.info.work")}</th>
                  <th className="px-3 py-3 font-medium text-[#7dd3fc]">{t("branch.info.location")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {branchData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-[#5a5a5a]/50" : "bg-[#5a5a5a]/30"}>
                    <td className="px-3 py-2" colSpan={row.work === "" ? 2 : 1}>{row.team}</td>
                    {row.work !== "" && <td className="px-3 py-2">{row.work}</td>}
                    <td className="px-3 py-2 text-left">{row.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom cities */}
          <div className="mt-10">
            <p className="text-base text-[#e87a1e] md:text-lg">
              {t("branch.info.cities")}
            </p>
          </div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-20 bg-white" />
    </main>
  );
}
