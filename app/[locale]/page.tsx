import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Networks from "@/components/Networks";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import RampSection from "@/components/RampSection";
import ApiSection from "@/components/ApiSection";
import Pricing from "@/components/Pricing";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Networks />
        <HowItWorks />
        <Features />
        <RampSection />
        <ApiSection />
        <Pricing />
        <DemoSection />
      </main>
      <Footer />
    </>
  );
}
