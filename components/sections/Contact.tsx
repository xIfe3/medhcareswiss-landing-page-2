"use client";

import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Building,
  Check,
  Clock,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: [
        "Route de Chatel-St Denis 107.",
        "Town: 1808",
        "Les Monts-de-Corsier, Vaud Canton, Switzerland.",
      ],
      accentColor: "bg-[#05427B]",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["Info@medhcareswiss.com", "medhcareswiss@gmail.com"],
      accentColor: "bg-[#5DBA45]",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call",
      details: ["+41 77 503 90 88", "+34 65 236 14 49"],
      accentColor: "bg-[#05427B]",
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
        subject: "",
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center mb-6">
            <div className="h-px w-8 bg-[#05427B] mr-4"></div>
            <span className="text-[#05427B] text-sm font-medium tracking-widest uppercase">
              Get In Touch
            </span>
            <div className="h-px w-8 bg-[#05427B] ml-4"></div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#05427B] mb-6">
            Contact Us
          </h1>

          <p className="text-gray-700 text-lg">
            Feel free to reach out to us through any means
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Information */}
          <div>
            {/* Contact Information Cards */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-6 hover:border-[#5DBA45] transition-colors duration-300"
                >
                  <div className="flex items-start">
                    <div
                      className={`h-12 w-12 ${info.accentColor} text-white rounded-lg flex items-center justify-center mr-4`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#05427B] mb-3">
                        {info.title}
                      </h3>
                      <div className="space-y-2">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="border border-gray-200 rounded-2xl p-8">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-[#05427B] mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-700">
                  Try to contact us any time. Our team typically responds within
                  24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="h-20 w-20 border-2 border-[#5DBA45] rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <Check className="h-10 w-10 text-[#5DBA45]" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#05427B] mb-4">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-700 mb-8">
                    Thank you for contacting MedHcareSwiss. Our team will get
                    back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="border border-[#05427B] text-[#05427B] px-6 py-3 font-medium hover:bg-[#05427B] hover:text-white transition-colors duration-300"
                  >
                    SEND ANOTHER MESSAGE
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
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:border-[#5DBA45] focus:ring-1 focus:ring-[#5DBA45] outline-none transition-all duration-300 rounded-lg"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#05427B] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:border-[#5DBA45] focus:ring-1 focus:ring-[#5DBA45] outline-none transition-all duration-300 rounded-lg resize-none"
                      placeholder="Tell us how we can help you..."
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
                        SENDING MESSAGE...
                      </>
                    ) : (
                      <>
                        <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        SEND MESSAGE
                      </>
                    )}
                  </button>

                  <p className="text-center text-gray-500 text-sm">
                    By submitting this form, you agree to our privacy policy.
                    We'll never share your information.
                  </p>
                </form>
              )}
            </div>

            {/* Map Location */}
            <div className="mt-12 border border-gray-200 rounded-xl overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <div className="text-gray-500">
                    Switzerland Office Location
                  </div>
                  <div className="text-gray-400 text-sm mt-2">
                    Route de Chatel-St Denis 107, 1808
                  </div>
                </div>
                {/* In a real implementation, you would embed Google Maps here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
