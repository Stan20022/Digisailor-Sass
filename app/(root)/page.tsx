import Dashboard from "@/components/LandingPage/Dashboard";
import FeatureSection from "@/components/LandingPage/FeatureSection";
import FeatureSection2 from "@/components/LandingPage/FeatureSection2";
import Footer from "@/components/LandingPage/Footer";
import Hero from "@/components/LandingPage/Hero";
import Swiper from "@/components/LandingPage/Swiper";

export default function Home() {
  return (
    <main>
      <Hero />
      <Dashboard />
      <FeatureSection />
      <FeatureSection2 />
      <Swiper />
      <Footer />
    </main>
  );
}
