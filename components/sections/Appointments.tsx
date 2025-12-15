"use client";

import { Calendar, Clock, MapPin, Phone, User } from "lucide-react";
import { useState } from "react";

const Appointments = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    department: "",
    date: "",
    time: "",
    message: "",
  });

  const departments = [
    "General Medicine",
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Dermatology",
    "Ophthalmology",
    "Dental Care",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Appointment booked:", formData);
    alert("Appointment request submitted successfully!");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#5DBA45]/10 text-[#5DBA45] font-semibold mb-4">
            Book Appointment
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#05427B] mb-4">
            Schedule Your <span className="text-[#5DBA45]">Visit</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Book an appointment with our specialists. We'll get back to you
            within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-[#05427B] to-[#5DBA45] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">24/7 Availability</h4>
                  <p className="text-white/80">
                    Emergency services available round the clock
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Easy Scheduling</h4>
                  <p className="text-white/80">
                    Book appointments online or via phone
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Quick Response</h4>
                  <p className="text-white/80">
                    We confirm appointments within 2 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Multiple Locations</h4>
                  <p className="text-white/80">
                    Access our services at 5+ locations
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <h4 className="font-bold text-lg mb-4">Emergency Contact</h4>
              <div className="text-2xl font-bold">(123) 456-7890</div>
              <p className="text-white/80">Available 24/7 for emergencies</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline h-4 w-4 mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#5DBA45] focus:ring-2 focus:ring-[#5DBA45]/20 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="inline h-4 w-4 mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#5DBA45] focus:ring-2 focus:ring-[#5DBA45]/20 outline-none transition"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#5DBA45] focus:ring-2 focus:ring-[#5DBA45]/20 outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department *
                  </label>
                  <select
                    name="department"
                    required
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#5DBA45] focus:ring-2 focus:ring-[#5DBA45]/20 outline-none transition"
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#5DBA45] focus:ring-2 focus:ring-[#5DBA45]/20 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Preferred Time *
                </label>
                <input
                  type="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#5DBA45] focus:ring-2 focus:ring-[#5DBA45]/20 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#5DBA45] focus:ring-2 focus:ring-[#5DBA45]/20 outline-none transition"
                  placeholder="Any specific requirements or symptoms..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#5DBA45] text-white py-4 rounded-lg font-semibold hover:bg-[#4da83a] transition-colors duration-200"
              >
                Book Appointment Now
              </button>

              <p className="text-center text-gray-600 text-sm">
                By submitting, you agree to our terms and conditions. We'll
                contact you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointments;
