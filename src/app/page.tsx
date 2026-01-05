import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import FeaturesSection from "./components/FeaturesSection";
import CompositionSection from "./components/CompositionSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductShowcase />
      <FeaturesSection />
      <CompositionSection />
      <TestimonialsSection />
      {/* <PricingSection /> */}
      <Footer />
    </main>
  );
}
