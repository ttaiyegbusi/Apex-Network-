import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FAQSection } from "./components/FAQSection";
import { BlogSection } from "./components/BlogSection";
import { BannerSection } from "./components/BannerSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <BannerSection />
      <Footer />
    </>
  );
}
