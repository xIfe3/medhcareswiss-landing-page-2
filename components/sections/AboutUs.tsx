import { Award, Heart, Shield, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality & Safety",
      description:
        "Highest standards of medical care and patient safety protocols",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Expert Doctors",
      description: "Board-certified specialists with years of experience",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Patient Care",
      description: "Compassionate care focused on patient comfort and recovery",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "24/7 Service",
      description: "Round-the-clock emergency and critical care services",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#5DBA45]/10 text-[#5DBA45] font-semibold mb-4">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#05427B] mb-6">
              We Provide The Best{" "}
              <span className="text-[#5DBA45]">Medical Services</span>
            </h2>
            <p className="text-gray-600 mb-6">
              For over 25 years, MediCare Hospital has been at the forefront of
              medical excellence, combining cutting-edge technology with
              compassionate care to serve our community.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-[#5DBA45] flex items-center justify-center mr-3 mt-1">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <p className="text-gray-700">
                  Advanced diagnostic and treatment facilities
                </p>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-[#5DBA45] flex items-center justify-center mr-3 mt-1">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <p className="text-gray-700">
                  Multidisciplinary team of healthcare professionals
                </p>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-[#5DBA45] flex items-center justify-center mr-3 mt-1">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <p className="text-gray-700">
                  Patient-centered approach to healthcare
                </p>
              </div>
            </div>

            <button className="bg-[#05427B] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#043162] transition-colors duration-200">
              Learn More About Us
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <div className="text-[#5DBA45] mb-4">
                  <Shield className="h-10 w-10" />
                </div>
                <h3 className="font-bold text-[#05427B] mb-2">Quality Care</h3>
                <p className="text-gray-600 text-sm">
                  Certified by International Healthcare Standards
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl">
                <div className="text-[#5DBA45] mb-4">
                  <Users className="h-10 w-10" />
                </div>
                <h3 className="font-bold text-[#05427B] mb-2">Expert Team</h3>
                <p className="text-gray-600 text-sm">
                  500+ Medical Professionals
                </p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="bg-green-50 p-6 rounded-2xl">
                <div className="text-[#5DBA45] mb-4">
                  <Award className="h-10 w-10" />
                </div>
                <h3 className="font-bold text-[#05427B] mb-2">Awards</h3>
                <p className="text-gray-600 text-sm">
                  15+ National Healthcare Awards
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl">
                <div className="text-[#5DBA45] mb-4">
                  <Heart className="h-10 w-10" />
                </div>
                <h3 className="font-bold text-[#05427B] mb-2">Patient Care</h3>
                <p className="text-gray-600 text-sm">
                  98% Patient Satisfaction Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
