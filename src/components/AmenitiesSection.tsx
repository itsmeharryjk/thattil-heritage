
import { Bed, Utensils, Flower, MapPin } from "lucide-react";

const AmenitiesSection = () => {
  const amenities = [
    {
      icon: <Bed className="w-10 h-10 text-thattil-gold" />,
      title: "Traditional Rooms",
      description: "Experience authentic Kerala architecture with modern comforts."
    },
    {
      icon: <Utensils className="w-10 h-10 text-thattil-gold" />,
      title: "Authentic Kerala Cuisine",
      description: "Savor traditional flavors prepared with local ingredients."
    },
    {
      icon: <Flower className="w-10 h-10 text-thattil-gold" />,
      title: "Peaceful Garden Spaces",
      description: "Relax in our meticulously maintained garden surroundings."
    },
    {
      icon: <MapPin className="w-10 h-10 text-thattil-gold" />,
      title: "Nearby Attractions",
      description: "Explore Kerala's natural and cultural wonders within easy reach."
    }
  ];

  return (
    <section id="amenities" className="section bg-white/50">
      <h2 className="text-3xl md:text-4xl font-playfair font-medium text-thattil-brown text-center mb-16">
        Amenities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-4">
            <div className="mb-2">{amenity.icon}</div>
            <h3 className="text-xl font-playfair font-medium text-thattil-brown">
              {amenity.title}
            </h3>
            <p className="text-sm font-opensans text-gray-600">
              {amenity.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesSection;
