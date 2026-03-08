import Navbar from "@/components/navbar";
import FullpageScroll from "@/components/fullpage-scroll";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#1a1a2e]">
      <Navbar />
      <FullpageScroll />
    </main>
  );
}
