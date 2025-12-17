import {
  Award,
  Heart,
  Shield,
  Users,
  Check,
  Globe,
  Plane,
  Building,
  Sparkles,
} from "lucide-react";

const About = () => {
  const services = [
    {
      title: "Swiss Quality Standards",
      description:
        "Adhering to Switzerland's renowned medical excellence protocols",
    },
    {
      title: "Renowned Specialists",
      description:
        "Network of Europe's top board-certified medical professionals",
    },
    {
      title: "Comprehensive Care",
      description: "Full medical tourism package from consultation to recovery",
    },
    {
      title: "End-to-End Support",
      description: "Visa, logistics, accommodation, and aftercare services",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516549655669-df6914e0e4c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Modern hospital interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/95"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center mb-6">
            <div className="h-px w-8 bg-[#05427B] mr-4"></div>
            <span className="text-[#05427B] text-sm font-medium tracking-widest uppercase">
              MedHcareSwiss SNC
            </span>
            <div className="h-px w-8 bg-[#05427B] ml-4"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#05427B]">
            <span className="block">MEDICAL TOURISM</span>
            <span className="block text-[#5DBA45] mt-2">REDEFINED</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A registered medical healthcare company based in Switzerland,
            providing exceptional value-based medical tourism services across
            Europe.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Mission & Values */}
          <div>
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <div className="h-12 w-12 rounded-full border-2 border-[#5DBA45] flex items-center justify-center mr-4">
                  <Building className="h-6 w-6 text-[#5DBA45]" />
                </div>
                <h3 className="text-3xl font-bold text-[#05427B]">
                  Welcome to MedHcareSwiss
                </h3>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Our team is dedicated to providing value-based medical
                healthcare tourism services, offering exceptional care and
                seamless experiences for our clients. With our extensive network
                of renowned medical professionals and state-of-the-art medical
                facilities, we offer unparalleled medical tourism experiences in
                the most sought-after destinations across Europe.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center border border-gray-200 p-6 rounded-lg bg-white/50 backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#05427B] mb-2">
                  10+
                </div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center border border-gray-200 p-6 rounded-lg bg-white/50 backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#05427B] mb-2">
                  200+
                </div>
                <div className="text-gray-600 text-sm">Medical Partners</div>
              </div>
              <div className="text-center border border-gray-200 p-6 rounded-lg bg-white/50 backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#05427B] mb-2">
                  24/7
                </div>
                <div className="text-gray-600 text-sm">Client Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Services & Destinations */}
          <div>
            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="border border-gray-200 bg-white p-8 group hover:border-[#5DBA45] transition-all duration-300 hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold text-[#05427B] mb-3 group-hover:text-[#5DBA45] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
