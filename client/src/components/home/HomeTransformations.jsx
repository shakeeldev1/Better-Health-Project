import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { homeTransformations as testimonials, homeTransformationsData as data } from '../../data/homeData';

// Replaced div with motion.div
const TestimonialCard = ({ testimonial }) => (
  <motion.div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6 border border-gray-100 relative min-h-[280px] sm:min-h-[250px] flex flex-col justify-center items-center text-center flex-shrink-0 w-full">
    
    {/* Background Quote Icon - Smaller on mobile */}
    <div className="absolute top-2 right-4 sm:top-4 sm:right-6 text-gray-100">
      <Quote fill="currentColor" className="opacity-40 w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]" />
    </div>

    {/* Profile Image - Smaller on mobile */}
    <div className="mb-3 sm:mb-4 relative">
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-primary-muted shadow-sm">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>

    {/* Stars - Smaller on mobile */}
    <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 sm:w-5 sm:h-5 ${
            i < (testimonial.rating || 5) ? 'text-amber-400 fill-amber-400' : 'text-gray-300 fill-gray-300'
          }`}
        />
      ))}
    </div>

    {/* Quote Text - Smaller on mobile */}
    <blockquote className="text-sm sm:text-base text-gray-600 italic mb-4 sm:mb-6 max-w-xl leading-relaxed z-10 line-clamp-3 sm:line-clamp-4">
      "{testimonial.text}"
    </blockquote>

    {/* Author Info - Smaller on mobile */}
    <div className="space-y-1">
      <h4 className="text-sm sm:text-base font-bold text-gray-900">
        {testimonial.name}
      </h4>
      
      <div className="flex flex-col items-center gap-1 sm:gap-2">
        <span className="text-primary font-medium text-xs sm:text-sm">
          {testimonial.service || "Health Transformation"}
        </span>
        
        {/* Approved Badge - Smaller on mobile */}
        <span className="inline-flex items-center gap-0.5 bg-primary-muted text-primary text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-medium border border-primary/10">
          {testimonial.status || "Verified Result"} <Check strokeWidth={3} className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px]" />
        </span>
      </div>
    </div>
  </motion.div>
);

const HomeTransformations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === testimonials.length - 1; // Corrected logic from provided snippet or keeping same
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  }

  return (
    <motion.div className="relative min-h-[60vh] flex flex-col justify-center py-12 sm:py-16 bg-white overflow-hidden font-sans">
      {/* Decorative Background Circle (Top Right) - Smaller on mobile */}
      <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-primary-muted rounded-full -z-10" />

      <div className="max-w-2xl sm:max-w-3xl mx-auto px-4 relative z-10 w-full">
        {/* Header Section - Compact */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-gray-900">
            {data.title} <span className="text-primary">{data.highlightText}</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
            {data.description}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden mb-4">
          {/* Testimonial Track */}
          <motion.div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </motion.div>

        </div>

        {/* Pagination Dots - Compact */}
        <div className="flex justify-center items-center gap-1.5 sm:gap-2">
          {/* Left Chevron for Pagination */}
          <button 
            onClick={prevSlide}
            className="p-0.5 sm:p-1 text-gray-400 hover:text-primary transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" />
          </button>

          {/* Pagination Dots */}
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-4 sm:w-6 bg-primary' : 'w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
          
          {/* Right Chevron for Pagination */}
          <button 
            onClick={nextSlide}
            className="p-0.5 sm:p-1 text-gray-400 hover:text-primary transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeTransformations;