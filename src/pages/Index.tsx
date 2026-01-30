import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesQuick from "@/components/home/ServicesQuick";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ClientsSection from "@/components/home/ClientsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesQuick />
      <WhyChooseUs />
      <ClientsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
