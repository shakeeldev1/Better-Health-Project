import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, HandHeart, ArrowRight, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { homeSwiperSlides as slides } from '../../data/homeData';

// --- FRAMER MOTION VARIANTS ---

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
    },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
    },
  }),
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.4,
      staggerChildren: 0.08,
    } 
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.3 }
  },
};

// --- COMPONENT START ---

const HomeSwiper = () => {
  // Use Framer Motion's recommended state structure: [[current index, direction]]
  const [[page, direction], setPage] = useState([0, 0]); 


  const currentSlide = ((page % slides.length) + slides.length) % slides.length; // Calculate actual array index safely

  // Function to move to the next/prev slide
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // Auto-play slides every 2 seconds
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      paginate(1);
    }, 2000);

    return () => clearInterval(autoPlayInterval);
  }, [page]); // Dependency on 'page' keeps the timer relative to the current slide

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    const newDirection = index > currentSlide ? 1 : -1;
    setPage([page + (index - currentSlide), newDirection]);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0F172A]">
      {/* Dynamic Background Elements for Depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            x: [0, -50, 0] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-primary-dark/20 rounded-full blur-[120px]"
        />
      </div>

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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 min-h-screen items-center pt-32 pb-12 sm:pt-36 sm:pb-20 lg:py-10">
                
                {/* Left Content */}
                <motion.div 
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col justify-center space-y-4 lg:space-y-6 z-10"
                >
                  <motion.div 
                    variants={childVariant} // Animated child
                    className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 w-fit transition-all duration-300 hover:bg-white/20 mt-6"
                  >
                    <CheckCircle className="w-4 h-4 text-primary-light" />
                    <span className="text-white text-xs font-bold uppercase tracking-widest">{slides[currentSlide].badge}</span>
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
                    variants={childVariant}
                    className="flex flex-wrap items-center gap-4 pt-2"
                  >
                    <Link to={slides[currentSlide].to1}>
                      <motion.button 
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-md text-primary rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-primary/20 text-xs sm:text-sm uppercase tracking-wider"
                      >
                        <span>{slides[currentSlide].button1}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </motion.button>
                    </Link>
                    
                    <Link to={slides[currentSlide].to2}>
                      <motion.button 
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex items-center gap-2 px-6 py-3 bg-white/5 text-white border border-white/20 rounded-xl font-bold backdrop-blur-md hover:bg-white/10 transition-all duration-300 text-xs sm:text-sm uppercase tracking-wider"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>{slides[currentSlide].button2}</span>
                      </motion.button>
                    </Link>
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
                <div className="relative flex items-center justify-center h-[40vh] md:h-[50vh] lg:h-[60vh]">
                  <div className="relative w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl h-full">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                        className="relative rounded-[2rem] overflow-hidden shadow-2xl w-[320px] h-[220px] sm:w-[450px] sm:h-[300px] lg:w-[550px] lg:h-[350px] border border-white/10"
                      >
                        <img
                          src={slides[currentSlide].image}
                          alt="Better Health Project"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent"></div>

                        {/* Glass Overlay for Image */}
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2rem]"></div>

                        {/* Simple floating heart */}
                        <motion.div 
                            animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="absolute top-6 right-6"
                        >
                          <div className="p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl">
                            <HandHeart className="w-6 h-6 text-white" />
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