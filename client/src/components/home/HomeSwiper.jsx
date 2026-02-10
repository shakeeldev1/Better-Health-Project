import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, HandHeart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { homeSwiperSlides as slides } from '../../data/homeData';

// --- FRAMER MOTION VARIANTS ---

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 },
    },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 },
    },
  }),
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      delay: 0.3,
      staggerChildren: 0.1,
    } 
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

// --- COMPONENT START ---

const HomeSwiper = () => {
  // Use Framer Motion's recommended state structure: [[current index, direction]]
  const [[page, direction], setPage] = useState([0, 0]); 


  const currentSlide = page % slides.length; // Calculate actual array index

  // Function to move to the next/prev slide
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // Auto-play slides every 5 seconds
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(autoPlayInterval);
  }, [page]); // Dependency on 'page' keeps the timer relative to the current slide

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    const newDirection = index > currentSlide ? 1 : -1;
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary-dark">
      {/* Slides Container - AnimatePresence wraps the changing elements */}
      <div className="relative w-full min-h-screen">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page} // Key must be page to trigger exit/enter animation
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <div className="container mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 min-h-screen items-center py-6 sm:py-8 lg:py-10 pb-20 sm:pb-24">
                
                {/* Left Content */}
                <motion.div 
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col justify-center space-y-1 lg:space-y-2 z-10"
                >
                  <motion.div 
                    variants={childVariant} // Animated child
                    className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 w-fit transition-all duration-300 hover:bg-white/20"
                  >
                    <CheckCircle className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">{slides[currentSlide].badge}</span>
                  </motion.div>

                  {/* Title */}
                  <motion.h1 
                    variants={childVariant} // Animated child
                    className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>

                  {/* Description */}
                  <motion.p 
                    variants={childVariant} // Animated child
                    className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-xl"
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  {/* Buttons */}
                  <motion.div 
                    variants={childVariant} // Animated child container for buttons
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                  >
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    >
                      {slides[currentSlide].button1}
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent text-white border-2 border-white/30 rounded-xl font-semibold hover:border-white/50 transition-all duration-300 text-sm sm:text-base"
                    >
                      {slides[currentSlide].button2}
                    </motion.button>
                  </motion.div>

                  {/* Features */}
                  <motion.div 
                    variants={childVariant} // Animated child container for features
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 pt-2"
                  >
                    {slides[currentSlide].features.map((feature, idx) => {
                      const Icon = feature.icon;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 + idx * 0.2 }}
                          className="flex items-center gap-2"
                        >
                          <Icon className="w-4 h-4 text-white flex-shrink-0" />
                          <span className="text-white text-xs sm:text-sm font-medium">
                            {feature.text}
                          </span>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </motion.div>

                {/* Right Image */}
                <div className="relative flex items-center justify-center h-[50vh] md:h-[60vh] lg:h-[70vh]">
                  <div className="relative w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl h-full">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl w-[400px] h-[280px] sm:w-[500px] sm:h-[320px] lg:w-[600px] lg:h-[360px]"
                      >
                        <img
                          src={slides[currentSlide].image}
                          alt="Better Health Project"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>

                        {/* Simple floating heart */}
                        <motion.div 
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            className="absolute top-4 right-4"
                        >
                          <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full animate-pulse">
                            <HandHeart className="w-5 h-5 text-white" />
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-20">
        {/* Previous Button */}
        <motion.button
          onClick={() => paginate(-1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-1 sm:p-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-white" />
        </motion.button>

        {/* Dots Indicator */}
        <div className="flex gap-0.5 sm:gap-1">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`transition-all duration-300 rounded-full ${index === currentSlide
                  ? 'w-3 sm:w-4 h-1 sm:h-1.5 bg-white'
                  : 'w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white/40 hover:bg-white/60'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <motion.button
          onClick={() => paginate(1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-1 sm:p-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-white" />
        </motion.button>
      </div>
    </div>
  );
};

export default HomeSwiper;