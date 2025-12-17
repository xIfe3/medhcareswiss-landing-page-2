"use client";

import { useState } from "react";
import { CheckCircle, Star, Award, Calendar, Send, Check } from "lucide-react";

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const stats = [
    {
      icon: <CheckCircle className="h-8 w-8" />,
      value: "100+",
      label: "Projects Completed",
      description: "Successful medical tourism cases",
    },
    {
      icon: <Star className="h-8 w-8" />,
      value: "100%",
      label: "Client Satisfaction",
      description: "Consistently positive feedback",
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "10+",
      label: "Years Experience",
      description: "Medical tourism expertise",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        date: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center mb-6">
              <div className="h-px w-8 bg-[#05427B] mr-4"></div>
              <span className="text-[#05427B] text-sm font-medium tracking-widest uppercase">
                Expert Consultation
              </span>
              <div className="h-px w-8 bg-[#05427B] ml-4"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#05427B] mb-8">
              Need Expert Medical Advice?
            </h2>

            <p className="text-gray-700 text-lg mb-12 leading-relaxed max-w-xl">
              Book a consultation with our experienced specialists today.
              Whether it's for a second opinion or ongoing care, our
              consultations are here to help guide your healthcare journey.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full border-2 border-[#5DBA45] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Check className="h-3 w-3 text-[#5DBA45]" />
                </div>
                <p className="text-gray-700">
                  Personalized treatment recommendations
                </p>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full border-2 border-[#5DBA45] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Check className="h-3 w-3 text-[#5DBA45]" />
                </div>
                <p className="text-gray-700">
                  Second opinion from European specialists
                </p>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full border-2 border-[#5DBA45] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Check className="h-3 w-3 text-[#5DBA45]" />
                </div>
                <p className="text-gray-700">
                  No-obligation initial assessment
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <div className="bg-white border border-gray-200 p-8 md:p-10">
              <div className="flex items-center mb-8">
                <div className="h-12 w-12 border-2 border-[#5DBA45] rounded-lg flex items-center justify-center mr-4">
                  <Calendar className="h-6 w-6 text-[#5DBA45]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#05427B]">
                    Schedule a Free Consultation
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form below and our team will contact you within
                    24 hours.
                  </p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="h-20 w-20 border-2 border-[#5DBA45] rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <Check className="h-10 w-10 text-[#5DBA45]" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#05427B] mb-4">
                    Thank You!
                  </h4>
                  <p className="text-gray-700 mb-8">
                    Your consultation request has been submitted. Our specialist
                    will contact you within 24 hours to schedule your
                    appointment.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="border border-[#05427B] text-[#05427B] px-6 py-3 font-medium hover:bg-[#05427B] hover:text-white transition-colors duration-300"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#05427B] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:border-[#5DBA45] focus:ring-1 focus:ring-[#5DBA45] outline-none transition-all duration-300 rounded-lg"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#05427B] mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:border-[#5DBA45] focus:ring-1 focus:ring-[#5DBA45] outline-none transition-all duration-300 rounded-lg"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#05427B] mb-2">
                      Preferred Consultation Date
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:border-[#5DBA45] focus:ring-1 focus:ring-[#5DBA45] outline-none transition-all duration-300 rounded-lg"
                        placeholder="dd ---- yyyy"
                      />
                      <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    <p className="text-gray-500 text-xs mt-2">
                      Example: 15 January 2024
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#05427B] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:border-[#5DBA45] focus:ring-1 focus:ring-[#5DBA45] outline-none transition-all duration-300 rounded-lg resize-none"
                      placeholder="Briefly describe your medical concerns or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#5DBA45] text-white py-4 font-semibold hover:bg-[#4da83a] disabled:bg-gray-400 transition-all duration-300 flex items-center justify-center group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                        PROCESSING...
                      </>
                    ) : (
                      <>
                        <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        SUBMIT CONSULTATION REQUEST
                      </>
                    )}
                  </button>

                  <p className="text-center text-gray-500 text-sm">
                    By submitting, you agree to our privacy policy. No spam,
                    ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
