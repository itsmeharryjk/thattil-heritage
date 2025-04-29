
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-thattil-cream">
      <HeroSection />
      
      <ScrollAnimation>
        <AboutSection />
      </ScrollAnimation>
      
      <ScrollAnimation>
        <AmenitiesSection />
      </ScrollAnimation>
      
      <ScrollAnimation>
        <GallerySection />
      </ScrollAnimation>
      
      <ScrollAnimation>
        <ContactSection />
      </ScrollAnimation>
      
      <Footer />
    </div>
  );
};

export default Index;
