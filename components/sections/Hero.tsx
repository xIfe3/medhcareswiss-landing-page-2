// components/sections/Hero.tsx
"use client";

import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoUrl = "/videos/medh.mp4";
  const posterImage =
    "https://images.unsplash.com/photo-1586773860418-dc22f8b874bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          poster={posterImage}
          src={videoUrl}
        >
          {/* Fallback for browsers that don't support video */}
          <img
            src={posterImage}
            alt="Modern medical facility"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>

        {/* Performance overlay - reduces video intensity for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 z-10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Minimalist Badge */}
          <div className="inline-flex items-center mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <div className="h-2 w-2 rounded-full bg-[#5DBA45] mr-2"></div>
            <span className="text-white text-sm font-medium tracking-wider uppercase">
              Premium Medical Tourism
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            <span className="block">Caring for</span>
            <span className="block text-[#5DBA45] mt-2">better life</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl leading-relaxed">
            Your premium partner in Value-based medical healthcare tourism
            services.
          </p>

          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl">
            Switzerland and Spain
          </p>

          {/* Description */}
          <div className="mb-12">
            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Plan your medical tourism journey with{" "}
              <span className="font-bold text-white">MedHcareSwiss SNC</span>
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <div className="h-10 w-px bg-gradient-to-b from-white to-transparent">
                <div className="h-4 w-px bg-white ml-[-0.5px] mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 h-40 w-40 border border-white/10 rounded-full hidden md:block"></div>
      <div className="absolute bottom-40 left-10 h-20 w-20 border border-white/5 rounded-full hidden md:block"></div>
    </section>
  );
};

export default Hero;
