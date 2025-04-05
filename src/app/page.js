import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import ProcessSection from "@/components/home/ProcessSection";
import TeamSection from "@/components/home/TeamSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <StatsSection />
      <ProcessSection />
      <CaseStudiesSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}