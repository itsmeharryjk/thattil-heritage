
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1606402179428-a57976d71fa4?q=80&w=1974&auto=format&fit=crop')", 
          filter: "brightness(0.75)"
        }}
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative h-full flex flex-col items-center justify-center text-white px-6 animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-semibold mb-4 text-center">
          Thattil Heritage
        </h1>
        <p className="text-xl md:text-2xl font-opensans font-light mb-8 text-center max-w-lg">
          Experience Kerala's Timeless Beauty
        </p>
        <Button 
          onClick={scrollToContact} 
          className="bg-thattil-gold hover:bg-thattil-gold/90 text-white border-none font-opensans px-8 py-6 text-lg"
        >
          Book Your Stay
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
