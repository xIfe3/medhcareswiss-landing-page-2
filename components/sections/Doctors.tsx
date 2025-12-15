import { Facebook, Linkedin, Twitter } from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    experience: "15+ years",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Dr. Michael Chen",
    specialization: "Neurosurgeon",
    experience: "12+ years",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Dr. Emily Rodriguez",
    specialization: "Pediatrician",
    experience: "10+ years",
    image:
      "https://images.unsplash.com/photo-1594824434340-7e7dfc37cabb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Dr. James Wilson",
    specialization: "Orthopedic Surgeon",
    experience: "18+ years",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

const Doctors = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#5DBA45]/10 text-[#5DBA45] font-semibold mb-4">
            Our Team
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#05427B] mb-4">
            Meet Our Expert <span className="text-[#5DBA45]">Doctors</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of highly qualified medical professionals is dedicated to
            providing you with the best possible care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#05427B] mb-1">
                  {doctor.name}
                </h3>
                <p className="text-[#5DBA45] font-semibold mb-2">
                  {doctor.specialization}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {doctor.experience} experience
                </p>

                <div className="flex items-center justify-center space-x-4 pt-4 border-t">
                  <button className="text-gray-400 hover:text-[#05427B] transition-colors">
                    <Facebook size={18} />
                  </button>
                  <button className="text-gray-400 hover:text-[#05427B] transition-colors">
                    <Twitter size={18} />
                  </button>
                  <button className="text-gray-400 hover:text-[#05427B] transition-colors">
                    <Linkedin size={18} />
                  </button>
                </div>

                <button className="w-full mt-4 bg-[#05427B] text-white py-2 rounded-lg font-semibold hover:bg-[#043162] transition-colors duration-200">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#5DBA45] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4da83a] transition-colors duration-200">
            View All Doctors
          </button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
