import NavbarWrapper from "@/components/NavbarWrapper";
import Hero from "@/components/Hero";
import Networks from "@/components/Networks";
import ProductShowcase from "@/components/ProductShowcase";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ApiSection from "@/components/ApiSection";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavbarWrapper />
      <main>
        <Hero />
        <Networks />
        <ProductShowcase />
        <HowItWorks />
        <Features />
        <ApiSection />
        <DemoSection />
      </main>
      <Footer />
    </>
  );
}
