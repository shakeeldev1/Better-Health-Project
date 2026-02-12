import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Autoplay, Keyboard } from 'swiper/modules';
import { carouselSlides as slides } from '../../data/homeData';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const CarouselSection = ({ showHeader = true }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  // --- Framer Motion Variants ---
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const cubeVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 50 },
    visible: { scale: 1, opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
  };
  // ------------------------------

  return (
    <motion.section 
      className={`py-8 px-4 ${showHeader ? 'bg-gradient-to-b from-gray-50 to-white' : ''}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        {showHeader && (
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              variants={textVariants}
            >
              Our Process <span className="text-primary">The Journey to Better Health</span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
              variants={textVariants}
            >
              A seamless, guided experience designed to ensure your long-term success.
            </motion.p>
          </div>
        )}

        {/* 3D Cube Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Cube Section */}
          <motion.div // Framer Motion applied here
            className="relative w-full max-w-md h-[320px] md:h-[380px] lg:h-[420px] flex items-center justify-center"
            variants={cubeVariants}
            onMouseEnter={() => {
              setIsHovering(true);
              if (swiperRef.current?.autoplay?.running) {
                swiperRef.current.autoplay.pause();
              }
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              if (isPlaying && swiperRef.current?.autoplay?.paused) {
                swiperRef.current.autoplay.resume();
              }
            }}
          >
            {/* Cube Shadow */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4/5 h-4 bg-black/20 blur-xl rounded-full"></div>

            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={handleSlideChange}
              effect="cube"
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              keyboard={{ enabled: true }}
              modules={[EffectCube, Autoplay, Keyboard]}
              className="w-full h-full rounded-2xl"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id} className="rounded-2xl overflow-hidden">
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                      style={{ backgroundImage: `url('${slide.image}')` }}
                    />

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-black/30 transition-opacity duration-500`} />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/20 via-black/20 to-black/20`} />

                    {/* Content */}
                    <div className="relative h-full flex flex-col items-center justify-end px-6 py-12 text-center">
                      {/* Title & Description */}
                      <div className="space-y-3 relative z-10 w-full">
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                          {slide.title}
                        </h3>
                        <p className="text-sm md:text-base text-white font-medium leading-relaxed max-w-[280px] mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                          {slide.description}
                        </p>
                      </div>

                      {/* Corner Decorations */}
                      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-white/20 rounded-tl-lg"></div>
                      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-white/20 rounded-tr-lg"></div>
                      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-white/20 rounded-bl-lg"></div>
                      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-white/20 rounded-br-lg"></div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CarouselSection;