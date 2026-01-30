import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesQuick from "@/components/home/ServicesQuick";
import AboutSection from "@/components/home/AboutSection"; // Nova seção
import FeaturedServicesSection from "@/components/home/FeaturedServicesSection"; // Nova seção
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection"; // Nova seção
import ClientsSection from "@/components/home/ClientsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesQuick />
      <AboutSection /> {/* Nova seção */}
      <FeaturedServicesSection /> {/* Nova seção */}
      <WhyChooseUs />
      <FeaturedProjectsSection /> {/* Nova seção */}
      <ClientsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;