import { Sparkles, Shield } from "lucide-react";

const Services = () => {
  const firstServices = [
    {
      title: "Consultation and Assessment",
      description:
        "MedHcareSwiss SNC helps the patient understand their medical condition and treatment options. They may connect the patient with medical professionals or specialists to discuss their case and provide expert opinions.",
    },
    {
      title: "Appointment Scheduling",
      description:
        "MedHcareSwiss SNC helps in arranging appointments with healthcare providers, including doctors, surgeons, and specialists. They coordinate schedules and ensure that the patient's medical needs are met efficiently.",
    },
    {
      title: "Concierge Services",
      description:
        "MedHcareSwiss SNC often offer additional support services such as local sightseeing, arranging leisure activities, and providing assistance with visa applications, if required.",
    },
  ];

  // Updated animatedServices array - replace with your actual image URLs
  const animatedServices = [
    {
      imageUrl: "/service-1.jpg",
      title: "Post-Treatment Care",
      description:
        "After the medical procedure or treatment, MedHcareSwiss SNC helps coordinate follow-up appointments and ensures that the patient receives appropriate post-treatment care. This may involve arranging rehabilitation or physical therapy sessions, if necessary.",
    },
    {
      imageUrl: "/service-2.jpg",
      title: "Travel and Accommodation",
      description:
        "MedHcareSwiss SNC often handle the logistics of travel and accommodation for the patient and their accompanying companions. They may arrange flights, local transportation, and accommodation near the healthcare facility.",
    },
    {
      imageUrl: "/service-3.jpg",
      title: "Medical Records and Reports",
      description:
        "MedHcareSwiss SNC facilitates the collection and transfer of medical records, test results, and other relevant documents between the patient's home country and the destination healthcare facility.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center mb-6">
            <div className="h-px w-8 bg-[#05427B] mr-4"></div>
            <span className="text-[#05427B] text-sm font-medium tracking-widest uppercase">
              Our Services
            </span>
            <div className="h-px w-8 bg-[#05427B] ml-4"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#05427B]">
            Comprehensive Care
            <span className="block text-[#5DBA45] mt-2">
              Tailored to Your Needs
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We deliver cutting-edge strategies and personalized support to help
            you achieve your health goals.
          </p>
        </div>

        {/* Expert Guidance & Services Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Left Column - Expert Guidance */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="flex items-center mb-8">
                <div className="h-12 w-12 rounded-full border-2 border-[#5DBA45] flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-[#5DBA45]" />
                </div>
                <h3 className="text-3xl font-bold text-[#05427B]">
                  Expert Guidance
                </h3>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-lg mb-8">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-[#5DBA45]/10 flex items-center justify-center mr-4">
                    <Sparkles className="h-5 w-5 text-[#5DBA45]" />
                  </div>
                  <h4 className="text-xl font-bold text-[#05427B]">
                    Innovative Solutions
                  </h4>
                </div>
                <p className="text-gray-700">
                  Our team delivers cutting-edge strategies to help you achieve
                  your goals. Discover how our tailored services can benefit
                  your healthcare journey.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full border-2 border-[#5DBA45] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-[#5DBA45]"></div>
                  </div>
                  <p className="text-gray-700">Personalized treatment plans</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full border-2 border-[#5DBA45] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-[#5DBA45]"></div>
                  </div>
                  <p className="text-gray-700">
                    International medical network access
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full border-2 border-[#5DBA45] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-[#5DBA45]"></div>
                  </div>
                  <p className="text-gray-700">End-to-end patient support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - First 3 Services */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              {firstServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-8 hover:border-[#05427B] transition-all duration-300 hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold text-[#05427B] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Services Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {animatedServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 hover:border-[#5DBA45] transition-all duration-500 hover:shadow-xl overflow-hidden"
              >
                {/* Image Container at the top */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Optional overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#05427B] mb-4 group-hover:text-[#5DBA45] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Animated Border Effect (kept inside) */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#5DBA45] rounded-lg transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div>
                <div className="inline-flex items-center mb-6">
                  <div className="h-px w-8 bg-[#05427B] mr-4"></div>
                  <span className="text-[#05427B] text-sm font-medium tracking-widest uppercase">
                    Our Growth in Numbers
                  </span>
                  <div className="h-px w-8 bg-[#05427B] ml-4"></div>
                </div>

                <h3 className="text-4xl font-bold text-[#05427B] mb-6">
                  Plan your medical tourism journey with{" "}
                  <span className="text-[#5DBA45]">MedHcareSwiss SNC</span>
                </h3>

                <p className="text-gray-700 text-lg mb-8">
                  We are expanding access, advancing solutions and growing a
                  global medical community. Join us as we scale new heights in
                  healthcare.
                </p>
              </div>

              {/* Right Column - Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {/* Stat 1: Satisfied Patients */}
                <div className="border border-gray-200 bg-white p-8 text-center hover:border-[#5DBA45] transition-colors duration-300">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-5xl font-bold text-[#05427B]">
                      232
                    </span>
                    <span className="text-2xl font-bold text-[#5DBA45] ml-1">
                      +
                    </span>
                  </div>
                  <div className="text-lg font-medium text-[#05427B]">
                    Satisfied Patients
                  </div>
                  <div className="h-1 w-12 bg-[#5DBA45] mx-auto mt-4"></div>
                </div>

                {/* Stat 2: Satisfaction Rates */}
                <div className="border border-gray-200 bg-white p-8 text-center hover:border-[#5DBA45] transition-colors duration-300">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-5xl font-bold text-[#05427B]">
                      100
                    </span>
                    <span className="text-2xl font-bold text-[#5DBA45] ml-1">
                      %
                    </span>
                  </div>
                  <div className="text-lg font-medium text-[#05427B]">
                    Satisfaction Rates
                  </div>
                  <div className="h-1 w-12 bg-[#5DBA45] mx-auto mt-4"></div>
                </div>

                {/* Stat 3: Years of Experience */}
                <div className="border border-gray-200 bg-white p-8 text-center hover:border-[#5DBA45] transition-colors duration-300">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-5xl font-bold text-[#05427B]">
                      10
                    </span>
                    <span className="text-2xl font-bold text-[#5DBA45] ml-1">
                      +
                    </span>
                  </div>
                  <div className="text-lg font-medium text-[#05427B]">
                    Years of Experience
                  </div>
                  <div className="h-1 w-12 bg-[#5DBA45] mx-auto mt-4"></div>
                </div>

                {/* Stat 4: Expert Team Members */}
                <div className="border border-gray-200 bg-white p-8 text-center hover:border-[#5DBA45] transition-colors duration-300">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-5xl font-bold text-[#05427B]">
                      32
                    </span>
                    <span className="text-2xl font-bold text-[#5DBA45] ml-1">
                      +
                    </span>
                  </div>
                  <div className="text-lg font-medium text-[#05427B]">
                    Expert Team Members
                  </div>
                  <div className="h-1 w-12 bg-[#5DBA45] mx-auto mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
