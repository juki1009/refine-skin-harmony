import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import MenuSection from "@/components/MenuSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <MenuSection />
      <BeforeAfterSection />
      <PricingSection />
      <FAQSection />
      <TestimonialsSection />
      <LocationSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
