import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import GrainOverlay from "./components/GrainOverlay";

export default function Home() {
  return (
    <main className="relative bg-[#EADACE]">
      <GrainOverlay />
      <Navbar />
      <HeroSection />
    </main>
  );
}
