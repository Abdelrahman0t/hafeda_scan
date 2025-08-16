import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutDoctor from "@/components/AboutDoctor";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TeamSection from "@/components/TeamSection";
import CertificationsSection from "@/components/CertificationsSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutDoctor />
      <ServicesSection />
      <WhyChooseUs />
      <TeamSection />
      <CertificationsSection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
