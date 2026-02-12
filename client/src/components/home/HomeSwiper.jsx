import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, HandHeart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GlobalButton from '../common/GlobalButton';
import { homeSwiperSlides as slides } from '../../data/homeData';

// --- OPTIMIZED VARIANTS ---
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '20%' : '-20%', // Reduced distance for smoother feel
    opacity: 0,
    filter: "blur(4px)" // Slight blur hides "pop-in"
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      x: { type: "spring", stiffness: 200, damping: 25 }, // Slightly softer spring
      opacity: { duration: 0.4 },
    },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction > 0 ? '-20%' : '20%',
    opacity: 0,
    filter: "blur(4px)",
    transition: {
      opacity: { duration: 0.3 },
    },
  }),
};

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      staggerChildren: 0.1, // Staggering helps perceived performance
      delayChildren: 0.2
    } 
  },
};

const HomeSwiper = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const currentSlide = ((page % slides.length) + slides.length) % slides.length;

  const paginate = useCallback((newDirection) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 2000); // 2s autoplay
    return () => clearInterval(timer);
  }, [paginate]);

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setPage([page + (index - currentSlide), index > currentSlide ? 1 : -1]);
  };

  return (
    <div className="relative w-full min-h-[100dvh] overflow-hidden bg-[#0F172A]">
      {/* Background blobs - simplified to reduce GPU load */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative w-full h-full">
        {/* Added mode="popLayout" to prevent the "jump" when elements leave the DOM */}
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
                <motion.div variants={contentVariants} className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">{slides[currentSlide].badge}</span>
                </motion.div>

                <motion.h1 variants={contentVariants} className="text-4xl md:text-6xl font-bold text-white leading-[1.1]">
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p variants={contentVariants} className="text-lg text-white/70 max-w-lg">
                  {slides[currentSlide].subtitle}
                </motion.p>

                <motion.div variants={contentVariants} className="flex flex-wrap gap-4">
                  <GlobalButton text={slides[currentSlide].button1} link={slides[currentSlide].to1} className="px-6" />
                  <GlobalButton text={slides[currentSlide].button2} link={slides[currentSlide].to2} variant="outline" className="px-6" />
                </motion.div>
              </motion.div>

              {/* Right Image Container */}
              <motion.div 
                className="order-1 lg:order-2 relative aspect-[4/3] lg:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                whileHover={{ scale: 1.01 }}
              >
                <motion.img
                  key={slides[currentSlide].bgImage} // Force image re-render if needed
                  src={slides[currentSlide].bgImage}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Optimized Navigation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-4 z-30">
        <NavButton icon={<ChevronLeft size={16} />} onClick={() => paginate(-1)} />
        
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-1 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-6 bg-primary' : 'w-1.5 bg-white/20'}`}
            />
          ))}
        </div>

        <NavButton icon={<ChevronRight size={16} />} onClick={() => paginate(1)} />
      </div>
    </div>
  );
};

// Sub-component for cleaner code
const NavButton = ({ icon, onClick }) => (
  <button 
    onClick={onClick}
    className="p-1 rounded-full bg-white/5 border border-white/10 text-primary hover:bg-white/20 transition-colors"
  >
    {icon}
  </button>
);

export default HomeSwiper;
