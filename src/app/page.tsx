import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import HeroV2 from "./components/HeroV2";
import ProductShowcase from "./components/ProductShowcase";
import FeaturesSection from "./components/FeaturesSection";
import IndustriesSection from "./components/IndustriesSection";
import ChannelsSection from "./components/ChannelsSection";
import CompositionSection from "./components/CompositionSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";
import FaqContactSection from "./components/FaqContactSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroV2 />
      <FeaturesSection />
      <IndustriesSection />
      <ChannelsSection />
      <ProductShowcase />
      <CompositionSection />
      <TestimonialsSection />
      <FaqContactSection />
      {/* <PricingSection /> */}
      <Footer />
    </main>
  );
}
