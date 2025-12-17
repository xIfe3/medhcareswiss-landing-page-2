import { Languages, MessageCircle, Check } from "lucide-react";

const LanguageInterpretation = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content Card */}
          <div>
            <div className="bg-white border border-gray-200 p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="h-16 w-16 border-2 border-[#5DBA45] rounded-lg flex items-center justify-center mr-6">
                  <Languages className="h-8 w-8 text-[#5DBA45]" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#05427B]">
                    Language Interpretation
                  </h2>
                  <div className="h-1 w-12 bg-[#5DBA45] mt-2"></div>
                </div>
              </div>

              <p className="text-gray-700 text-lg mb-10 leading-relaxed">
                If there is a language barrier between the patient and the
                healthcare providers in the destination country, MedHcareSwiss
                SNC provides interpretation services to facilitate effective
                communication throughout the medical journey.
              </p>
            </div>
          </div>

          {/* Right Column - CTA Illustration */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200">
              <img
                src="/language.jpg"
                alt="Medical interpreter facilitating communication between doctor and patient"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 bg-white border border-gray-200 p-6 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-[#05427B] text-white flex items-center justify-center font-bold text-lg mr-4">
                  EN
                </div>
                <div>
                  <div className="font-bold text-[#05427B]">Medical</div>
                  <div className="text-gray-600 text-sm">
                    English Specialists
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white border border-gray-200 p-6 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="font-bold text-[#05427B]">Medical</div>
                  <div className="text-gray-600 text-sm">Terminology</div>
                </div>
                <div className="h-12 w-12 rounded-full bg-[#5DBA45] text-white flex items-center justify-center">
                  <Languages className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageInterpretation;
