import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck, FaStar } from 'react-icons/fa';

const GlobalCTA = ({ 
  title = "Ready to start?", 
  highlightText = "Your Journey", 
  description = "Join us today and experience the difference in your health and well-being.",
  buttonText = "Get Started",
  buttonLink = "/contact",
  className = ""
}) => {
  return (
    <div className={`w-full max-w-7xl flex flex-col items-center gap-8 z-10 mx-auto mb-8 px-4 ${className}`}> 
      <motion.div
        className="w-full max-w-4xl bg-gradient-to-br from-[#3E7D72] via-[#2f5f56] to-[#1f4a42] rounded-[2rem] p-8 md:p-12 text-center shadow-2xl relative overflow-hidden group"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.3, 0.15]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
            className="absolute -bottom-32 -right-32 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          />
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-4 h-4 bg-white/20 rounded-full" />
          <div className="absolute bottom-8 left-8 w-2 h-2 bg-white/30 rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white/40 rounded-full" />
          <div className="absolute top-10 left-1/3 w-3 h-3 bg-amber-400/30 rounded-full" />
          
          {/* Corner borders */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/20 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-br-lg" />
        </div>

        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 relative z-10"> 
          {/* Stars */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-amber-400 text-sm" fill="currentColor" />
            ))}
          </div>

          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {title} <span className="text-amber-400">
              {highlightText}
            </span>
          </motion.h2>

          <motion.p 
            className="text-white/90 text-base md:text-lg max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {description}
          </motion.p>

          {/* Benefits list */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 py-2"
          >
            {["Expert Coaches", "Personalized Plans", "Proven Results"].map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaCheck className="text-amber-400 text-xs" />
                <span className="text-white text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <Link 
              to={buttonLink}
              className="inline-flex items-center gap-3 bg-white text-[#3E7D72] px-5 py-2 rounded-full font-bold text-lg hover:bg-amber-400 hover:text-gray-900 transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              {buttonText}
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/faq"
              className="inline-flex items-center gap-3 bg-transparent border-2 border-white/30 text-white px-5 py-2 rounded-full font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default GlobalCTA;
