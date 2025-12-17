"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "MedHcareSwiss gave our family peace of mind during a very stressful time. The doctors were incredibly thorough, and the nurses treated us with such kindness. We felt cared for every step of the way.",
      name: "Patient",
      rating: 5,
      country: "United Kingdom",
      treatment: "Family Medical Care",
    },
    {
      quote:
        "Traveling from abroad for surgery was a big decision, but MedHcareSwiss made everything seamless. From airport pickup to world class care, I couldn't have asked for better treatment.",
      name: "Patient",
      rating: 5,
      country: "Canada",
      treatment: "Surgical Procedure",
    },
    {
      quote:
        "I was admitted to MedHcareSwiss after a heart episode, and the emergency team saved my life. Their quick response and advanced equipment made all the difference. Forever thankful.",
      name: "Patient",
      rating: 5,
      country: "Germany",
      treatment: "Emergency Cardiology",
    },
    {
      quote:
        "The entire process from consultation to post-treatment care was exceptional. The medical tourism coordination made what could have been stressful completely worry-free.",
      name: "Patient",
      rating: 5,
      country: "Australia",
      treatment: "Medical Tourism Package",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center mb-6">
            <div className="h-px w-8 bg-[#05427B] mr-4"></div>
            <span className="text-[#05427B] text-sm font-medium tracking-widest uppercase">
              Patient Testimonials
            </span>
            <div className="h-px w-8 bg-[#05427B] ml-4"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#05427B] mb-6">
            Patients Are Saying
          </h2>

          <p className="text-gray-700 text-lg">
            Experience the care you can count on, straight from our patients
            about the compassion, expertise and results that set us apart.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 h-12 w-12 border border-gray-300 bg-white rounded-full flex items-center justify-center hover:border-[#5DBA45] hover:text-[#5DBA45] transition-all duration-300 z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 h-12 w-12 border border-gray-300 bg-white rounded-full flex items-center justify-center hover:border-[#5DBA45] hover:text-[#5DBA45] transition-all duration-300 z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Testimonials Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-50 border border-gray-200 p-8 md:p-12 rounded-2xl group hover:border-[#5DBA45] transition-all duration-300">
                      {/* Quote Icon */}
                      <div className="mb-8">
                        <div className="inline-flex items-center justify-center h-16 w-16 border-2 border-[#05427B] rounded-full group-hover:border-[#5DBA45] group-hover:scale-105 transition-all duration-300">
                          <Quote className="h-8 w-8 text-[#05427B] group-hover:text-[#5DBA45] transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating
                                ? "text-[#5DBA45] fill-[#5DBA45]"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-gray-800 text-lg md:text-xl italic mb-8 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Patient Info */}
                      <div className="flex items-center justify-between border-t border-gray-100 pt-8">
                        <div>
                          <div className="flex items-center">
                            {/* Avatar Placeholder */}
                            <div className="h-12 w-12 rounded-full bg-[#05427B] text-white flex items-center justify-center font-bold text-lg mr-4">
                              {testimonial.name.charAt(0)}
                            </div>
                            <div>
                              <div className="font-bold text-[#05427B]">
                                {testimonial.name}
                              </div>
                              <div className="text-gray-600 text-sm">
                                {testimonial.country}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-[#5DBA45] font-medium">
                            {testimonial.treatment}
                          </div>
                          <div className="text-gray-500 text-sm">
                            Treatment Received
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  goToSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#5DBA45] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
