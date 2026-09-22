import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tentang from "@/components/Tentang";
import Keunggulan from "@/components/Keunggulan";
import ProgramUnggulan from "@/components/ProgramUnggulan";
import Galeri from "@/components/Galeri";
import InfoTerbaru from "@/components/InfoTerbaru";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />
      <Hero />
      <Tentang />
      <Keunggulan />
      <ProgramUnggulan />
      <Galeri />
      <InfoTerbaru />
      <Footer />
    </main>
  );
}