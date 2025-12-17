import { Building2, Heart, MapPin, Sparkles, ArrowRight } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "State-of-the-Art Facilities",
      description:
        "Access cutting-edge medical facilities equipped to deliver exceptional care and innovative treatments.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Personalized Care",
      description:
        "We provide comprehensive and personalized assistance to ensure a smooth and stress-free experience.",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Premier European Destinations",
      description:
        "Choose from a diverse range of leading medical destinations and enjoy a comfortable, memorable stay.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <div className="inline-flex items-center mb-6">
              <div className="h-px w-8 bg-[#05427B] mr-4"></div>
              <span className="text-[#05427B] text-sm font-medium tracking-widest uppercase">
                Why Choose MedHcareSwiss?
              </span>
              <div className="h-px w-8 bg-[#05427B] ml-4"></div>
            </div>

            <p className="text-gray-700 text-lg mb-10 leading-relaxed">
              With our extensive network of renowned medical professionals and
              state-of-the-art medical facilities, we offer unparalleled medical
              tourism experiences in the most sought-after destinations across
              Europe. Our dedicated team ensures a hassle-free and comfortable
              medical journey, tailored to your specific needs.
            </p>

            {/* Features Grid */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start group">
                  <div className="mr-6 flex-shrink-0">
                    <div className="h-14 w-14 border-2 border-[#05427B] rounded-lg flex items-center justify-center group-hover:border-[#5DBA45] group-hover:bg-[#5DBA45]/5 transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#05427B] mb-2 group-hover:text-[#5DBA45] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Modern medical facility interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Second Section: What happens after treatment
const AfterTreatment = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Relaxation and recovery space"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 p-6 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-[#5DBA45]/10 flex items-center justify-center mr-4">
                  <Sparkles className="h-6 w-6 text-[#5DBA45]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#05427B]">100%</div>
                  <div className="text-gray-600 text-sm">Recovery Focus</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div>
            <div className="inline-flex items-center mb-6">
              <div className="h-px w-8 bg-[#05427B] mr-4"></div>
              <span className="text-[#05427B] text-sm font-medium tracking-widest uppercase">
                Post-Treatment Experience
              </span>
              <div className="h-px w-8 bg-[#05427B] ml-4"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#05427B] mb-8">
              What will happen{" "}
              <span className="text-[#5DBA45]">after treatment</span>
            </h2>

            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                At our center, your experience goes beyond just treatment. We
                believe true care includes moments of comfort, calm and
                restoration.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                That's why, once your session is complete, we invite you to
                enjoy a dedicated leisure space designed exclusively for your
                relaxation. Because your well-being deserves more than just
                results, it deserves a moment to breathe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export both components
export { WhyChooseUs, AfterTreatment };
