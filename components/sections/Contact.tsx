import { Clock, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#5DBA45]/10 text-[#5DBA45] font-semibold mb-4">
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#05427B] mb-4">
            Get In <span className="text-[#5DBA45]">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help you 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="h-16 w-16 rounded-full bg-[#5DBA45]/10 flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-[#5DBA45]" />
            </div>
            <h3 className="text-xl font-bold text-[#05427B] mb-2">
              Phone Number
            </h3>
            <p className="text-gray-600 mb-4">Call us anytime</p>
            <a
              href="tel:1234567890"
              className="text-2xl font-bold text-[#5DBA45] hover:text-[#4da83a] transition-colors"
            >
              (123) 456-7890
            </a>
            <p className="text-sm text-gray-500 mt-2">
              Emergency: (123) 456-7891
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="h-16 w-16 rounded-full bg-[#5DBA45]/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-[#5DBA45]" />
            </div>
            <h3 className="text-xl font-bold text-[#05427B] mb-2">
              Email Address
            </h3>
            <p className="text-gray-600 mb-4">Send us an email</p>
            <a
              href="mailto:info@medicarehospital.com"
              className="text-lg text-[#5DBA45] hover:text-[#4da83a] transition-colors"
            >
              info@medicarehospital.com
            </a>
            <p className="text-sm text-gray-500 mt-2">
              support@medicarehospital.com
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="h-16 w-16 rounded-full bg-[#5DBA45]/10 flex items-center justify-center mx-auto mb-6">
              <Clock className="h-8 w-8 text-[#5DBA45]" />
            </div>
            <h3 className="text-xl font-bold text-[#05427B] mb-2">
              Working Hours
            </h3>
            <p className="text-gray-600 mb-2">
              Monday - Friday: 8:00 AM - 8:00 PM
            </p>
            <p className="text-gray-600 mb-2">Saturday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
            <p className="text-sm text-[#5DBA45] font-semibold mt-2">
              Emergency: 24/7
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12">
              <h3 className="text-2xl font-bold text-[#05427B] mb-6">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:border-[#5DBA45] focus:ring-2 focus:ring-[#5DBA45]/20 outline-none transition"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:border-[#5DBA45] focus:ring-2 focus:ring-[#5DBA45]/20 outline-none transition"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#5DBA45] focus:ring-2 focus:ring-[#5DBA45]/20 outline-none transition"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#5DBA45] focus:ring-2 focus:ring-[#5DBA45]/20 outline-none transition"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#5DBA45] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#4da83a] transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-[#05427B] p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Visit Our Hospital</h3>
              <div className="flex items-start mb-8">
                <MapPin className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Main Campus</h4>
                  <p className="text-white/80">
                    123 Medical Center Drive, Health City, HC 12345
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-lg mb-4">Other Locations</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-[#5DBA45] mr-3"></div>
                    <span className="text-white/80">North Medical Center</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-[#5DBA45] mr-3"></div>
                    <span className="text-white/80">South Health Plaza</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-[#5DBA45] mr-3"></div>
                    <span className="text-white/80">East Care Facility</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-2">
                  Need Immediate Assistance?
                </h4>
                <p className="mb-4 text-white/80">
                  For emergencies, please call our hotline:
                </p>
                <a
                  href="tel:1234567891"
                  className="text-2xl font-bold text-white hover:text-[#5DBA45] transition-colors"
                >
                  (123) 456-7891
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
