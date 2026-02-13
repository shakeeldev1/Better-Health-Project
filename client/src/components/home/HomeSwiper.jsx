import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GlobalButton from '../common/GlobalButton';
import { homeSwiperSlides as slides } from '../../data/homeData';

// --- Optimized Variants ---
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '20%' : '-20%',
    opacity: 0,
    filter: 'blur(4px)',
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      x: { type: 'spring', stiffness: 200, damping: 25 },
      opacity: { duration: 0.4 },
    },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction > 0 ? '-20%' : '20%',
    opacity: 0,
    filter: 'blur(4px)',
    transition: { opacity: { duration: 0.3 } },
  }),
};

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const HomeSwiper = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const currentSlide = ((page % slides.length) + slides.length) % slides.length;

  const paginate = useCallback((newDirection) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 3000); // 3s autoplay
    return () => clearInterval(timer);
  }, [paginate]);

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setPage([page + (index - currentSlide), index > currentSlide ? 1 : -1]);
  };

  return (
    <div className="relative w-full min-h-[100dvh] overflow-hidden bg-white">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[120px] animate-slow-spin" />
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-300/20 rounded-full blur-[120px] animate-slow-spin" />
      </div>

      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full min-h-[100dvh] flex items-center justify-center"
          >
            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="order-2 lg:order-1 flex flex-col gap-6"
              >
                <motion.div variants={contentVariants} className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 w-fit">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-gray-800 text-[10px] font-bold uppercase tracking-widest">
                    {slides[currentSlide].badge}
                  </span>
                </motion.div>

                <motion.h1 variants={contentVariants} className="text-4xl md:text-5xl font-bold text-[#42927E]
] leading-[1.1]">
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p variants={contentVariants} className="text-lg text-gray-700 max-w-lg">
                  {slides[currentSlide].subtitle}
                </motion.p>

                {/* Features */}
                <div className="flex flex-wrap gap-4 mt-2">
                  {slides[currentSlide].features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                      <feature.icon className="w-4 h-4 text-primary" />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <motion.div variants={contentVariants} className="flex flex-wrap gap-4 mt-4">
                  <GlobalButton
                    text={slides[currentSlide].button1}
                    link={slides[currentSlide].to1}
                    className="px-6 py-3 bg-gradient-to-r from-[#42927E] to-[#2c5e52] text-white font-semibold hover:from-[#2c5e52] hover:to-[#42927E] transition-all rounded-lg"
                  />
                  <GlobalButton
                    text={slides[currentSlide].button2}
                    link={slides[currentSlide].to2}
                    variant="outline"
                    className="px-6 py-3 border border-gray-300 text-gray-800 hover:bg-gray-100 rounded-lg transition-all"
                  />
                </motion.div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                className="order-1 lg:order-2 relative aspect-[4/3] lg:aspect-video rounded-3xl overflow-hidden shadow-xl border border-gray-200"
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  key={slides[currentSlide].bgImage}
                  src={slides[currentSlide].bgImage}
                  alt={`Slide image: ${slides[currentSlide].title}`}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-4 z-30">
        <NavButton icon={<ChevronLeft size={16} />} onClick={() => paginate(-1)} ariaLabel="Previous Slide" />
        
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2 transition-all cursor-pointer duration-300 rounded-full ${
                i === currentSlide ? 'w-6 bg-primary scale-110' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <NavButton icon={<ChevronRight size={16} />} onClick={() => paginate(1)} ariaLabel="Next Slide" />
      </div>
    </div>
  );
};

// Nav Button
const NavButton = ({ icon, onClick, ariaLabel }) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    className="p-2 rounded-full bg-gray-100 border border-gray-200 text-primary hover:bg-gray-200 transition-colors"
  >
    {icon}
  </button>
);

export default HomeSwiper;