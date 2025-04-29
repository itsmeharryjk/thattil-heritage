
const AboutSection = () => {
  return (
    <section id="about" className="section grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-playfair font-medium text-thattil-brown text-center md:text-left">
          About
        </h2>
        <p className="text-lg font-opensans leading-relaxed">
          Nestled amidst the serene beauty of Kerala, Thattil Heritage offers a rare blend of tradition, 
          comfort, and tranquility. Each stay is a journey back in time — a place where heritage breathes 
          in every stone and every story.
        </p>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img 
          src="https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?q=80&w=2070&auto=format&fit=crop" 
          alt="Thattil Heritage exterior" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default AboutSection;
