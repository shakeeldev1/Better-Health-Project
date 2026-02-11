import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Check } from 'lucide-react';
import { homeTransformations as testimonials, homeTransformationsData as data } from '../../data/homeData';
import GlobalHeading from '../common/GlobalHeading';

const HomeTransformations = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 

  // Auto-play functionality: moves every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(timer);
  }, [currentIndex]); // Reset timer whenever currentIndex changes (manual or auto)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-gray-50 py-4 px-2 sm:px-4 lg:px-6"> 
      <div className="max-w-6xl mx-auto">
        
        <GlobalHeading 
          badge={data.badge}
          title={data.title}
          highlightText={data.highlightText}
          description={data.description}
          className="mb-6 sm:mb-8"
        />

        {/* Main Testimonial Card Container */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl mb-0 relative overflow-hidden">
          
          {/* Testimonial Track - This is the sliding element */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              // Reduced padding for each slide: py-4 (vertical) px-3 (horizontal)
              <div key={testimonial.id} className="w-full flex-shrink-0 py-4 px-3 sm:py-6 sm:px-5">
                
                {/* Inner Content Structure: Changed lg:col-span-12 to lg:col-span-10 and centered it */}
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start mx-auto">
                  
                  {/* Left Section - Profile: Changed to flex-row on large screens, aligned items to start */}
                  <div className="lg:col-span-3 flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-row lg:gap-3">
                    
                    {/* Profile Image with Badge */}
                    <div className="relative mb-3 lg:mb-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-3 border-primary/40 shadow-md" 
                      />
                      <div className="absolute bottom-0 right-0 w-7 h-7 bg-primary rounded-full flex items-center justify-center border-2 border-white">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                    </div>

                    {/* Name/Program/Location block (Wrapped in a div to manage vertical alignment) */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h3 className="text-lg font-bold text-gray-900 mb-0.5">
                            {testimonial.name}
                        </h3>
                        <p className="text-primary text-sm font-semibold mb-0.5">
                            {testimonial.program}
                        </p>
                        <p className="text-gray-500 text-xs mb-3">
                            {testimonial.location}
                        </p>

                        {/* Rating Stars - Kept in the same block */}
                        <div className="flex gap-0.5">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <span key={i} className="text-amber-400 text-base">★</span>
                            ))}
                        </div>
                    </div>
                  </div>

                  {/* Right Section - Testimonial: Takes more space (col-span-7) and is vertically centered (items-center) */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    {/* Quote Icon - Smallest size (w-8) */}
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mb-3">
                      <Quote className="w-4 h-4 text-white" fill="white" />
                    </div>

                    {/* Quote Text - Most compact text size for quote (text-sm) */}
                    <blockquote className="text-gray-700 text-sm leading-snug mb-4 font-light">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Program Badge - Added w-fit to prevent it from stretching to full width */}
                    <div className="w-fit inline-flex items-center gap-1 bg-primary/10 text-primary uppercase tracking-wider text-xs font-medium px-3 py-1 rounded-full">
                      <Check className="w-3 h-3" />
                      {testimonial.programs}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Removed mt-4 for less vertical space */}
          <div className="flex justify-center gap-3 pb-4">
            <button
              onClick={handlePrevious}
               className="w-9 h-9 text-primary rounded-full flex items-center justify-center transition-all duration-300 hover:text-black hover:shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 text-primary rounded-full flex items-center justify-center transition-all duration-300 hover:text-black hover:shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Thumbnail Carousel - Added mt-6 to separate it slightly from the main card */}
        <div className="flex justify-center items-center gap-2 mb-4 flex-wrap mt-6">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => handleThumbnailClick(index)}
              className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                index === currentIndex
                  ? 'bg-white border-2 border-primary shadow-lg'
                  : 'bg-white border border-gray-200 hover:border-primary/50 shadow-sm'
              }`}
            >
              {/* Reduced thumbnail image size (w-14) */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover mb-1"
              />
              <p className="text-xs font-bold text-gray-900 text-center leading-none">
                {testimonial.name}
              </p>
              <p className="text-[10px] text-primary text-center mt-0.5 leading-none">
                {testimonial.program}
              </p>
            </button>
          ))}
        </div>

        {/* Pagination Dots - Reduced size (w-2) and margin (gap-1) */}
        <div className="flex justify-center gap-1">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary w-6' 
                  : 'bg-gray-300 hover:bg-primary/50 w-2'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTransformations;