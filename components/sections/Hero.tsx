"use client";

import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#5DBA45]/10 text-[#5DBA45] font-semibold mb-6">
              <span className="h-2 w-2 rounded-full bg-[#5DBA45] mr-2"></span>
              Trusted Healthcare Since 1995
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#05427B] mb-6">
              Your Health is Our{" "}
              <span className="text-[#5DBA45]">Priority</span>
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              We provide comprehensive medical care with state-of-the-art
              technology and compassionate professionals dedicated to your
              well-being.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#5DBA45] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4da83a] transition-all duration-200 flex items-center justify-center group">
                Book Appointment
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setVideoPlaying(true)}
                className="border-2 border-[#05427B] text-[#05427B] px-8 py-4 rounded-full font-semibold hover:bg-[#05427B] hover:text-white transition-all duration-200 flex items-center justify-center"
              >
                <Play className="mr-2" size={20} />
                Watch Tour
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-[#05427B]">500+</div>
                <div className="text-gray-600">Expert Doctors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#05427B]">50+</div>
                <div className="text-gray-600">Departments</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#05427B]">24/7</div>
                <div className="text-gray-600">Emergency Care</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Hospital facility"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05427B]/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="h-14 w-14 rounded-full bg-[#5DBA45]/10 flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-[#5DBA45] flex items-center justify-center">
                    <span className="text-white font-bold">24</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-[#05427B]">
                    Hours Emergency
                  </div>
                  <div className="text-gray-600">Always available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoPlaying && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setVideoPlaying(false)}
              className="absolute -top-12 right-0 text-white text-2xl"
            >
              Close
            </button>
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
              {/* Replace with actual video */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-4">🏥</div>
                  <p>Hospital Tour Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
