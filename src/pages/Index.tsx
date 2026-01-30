import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesQuick from "@/components/home/ServicesQuick";
import AboutSection from "@/components/home/AboutSection";
import FeaturedServicesSection from "@/components/home/FeaturedServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import ClientsSection from "@/components/home/ClientsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesQuick />
      <AboutSection />
      <FeaturedServicesSection />
      <WhyChooseUs />
      <FeaturedProjectsSection />
      <ClientsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;