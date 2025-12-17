import { Mail, Phone, MapPin, Award, Briefcase } from "lucide-react";

const Specialists = () => {
  const specialists = [
    {
      name: "DR. THERESE DIANE BIKYE",
      title: "European Coordinator and Vice President",
      subtitle: "Swiss Trained Medical Practitioner",
      description: "A pioneer in personalized public health care well being.",
      imageUrl: "/specialist-1.png",
      accentColor: "#05427B",
    },
    {
      name: "Emmanuel I. Nebeolisa",
      title: "Chief Operations Officer",
      subtitle: "Spanish Trained Medical Professional",
      description:
        "A Spanish trained pioneer in personalised Public Healthcare wellbeing & expert in Concierge services provider.",
      contact: {
        email: "emmanuel@medhcareswiss.com",
        phone: "+34 91 XXX XX XX",
        location: "Madrid, Spain",
      },
      // Updated: Replaced color with an image URL
      imageUrl: "/specialist-2.png",
      accentColor: "#5DBA45",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center mb-6">
            <div className="h-px w-8 bg-[#05427B] mr-4"></div>
            <span className="text-[#05427B] text-sm font-medium tracking-widest uppercase">
              Meet Our Leadership
            </span>
            <div className="h-px w-8 bg-[#05427B] ml-4"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#05427B] mb-6">
            Our Specialist
          </h2>

          <p className="text-gray-700 text-lg">
            Green above he cattle god saw day multiply under fill in the cattle
            fowl a all, living, tree word link available in the service for
            subdue fruit.
          </p>
        </div>

        {/* Specialists Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {specialists.map((specialist, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-2xl overflow-hidden hover:border-[#5DBA45] transition-all duration-300 hover:shadow-lg"
            >
              {/* Top Section: Image & Basic Info */}
              {/* Updated: Changed grid columns for a wider image area */}
              <div className="grid md:grid-cols-4 gap-0">
                {/* Updated: Image Container - Now Wider */}
                <div className="md:col-span-2 h-64 md:h-80 relative overflow-hidden">
                  <img
                    src={specialist.imageUrl}
                    alt={`Portrait of ${specialist.name}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Role Badge */}
                  <div className="absolute bottom-4 right-4">
                    <div className="h-10 w-10 rounded-full border-2 border-white bg-white/90 flex items-center justify-center shadow-md">
                      <Briefcase
                        className="h-5 w-5"
                        style={{ color: specialist.accentColor }}
                      />
                    </div>
                  </div>
                </div>

                {/* Basic Info - Now takes 2 columns instead of 3 */}
                <div className="md:col-span-2 p-8">
                  <div className="mb-2">
                    <div className="h-1 w-12 bg-[#5DBA45] mb-4"></div>
                    <h3 className="text-2xl font-bold text-[#05427B]">
                      {specialist.name}
                    </h3>
                  </div>
                  <div className="mb-4">
                    <div className="text-lg font-semibold text-gray-800 mb-1">
                      {specialist.title}
                    </div>
                    <div className="text-[#5DBA45] font-medium text-sm">
                      {specialist.subtitle}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">{specialist.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialists;
