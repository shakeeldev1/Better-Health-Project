import React from 'react';
import { motion } from 'framer-motion';
import GlobalButton from './GlobalButton';

const GlobalCTA = ({ 
  title = "Ready to start?", 
  highlightText = "Your Journey", 
  description = "Join us today and experience the difference in your health and well-being.",
  buttonText = "Get Started",
  buttonLink = "/contact",
  className = ""
}) => {
  // Define animation variants for the main content card
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
  };

  // Define animation variants for the child elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className={`w-full max-w-7xl flex flex-col items-center gap-8 z-10 mx-auto mb-8 px-4 ${className}`}> 
      <motion.div
        className="w-full max-w-4xl bg-white rounded-[2rem] px-6 py-6 md:py-8 text-center shadow-xl shadow-primary/5 border border-primary/10 relative overflow-hidden group"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-32 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-2xl mx-auto flex flex-col items-center gap-4 relative z-10"> 
          <motion.h2 
            className="text-xl md:text-2xl lg:text-[1.75rem] font-bold text-gray-900 leading-tight"
            variants={itemVariants}
          >
            {title} <span className="text-primary">
              {highlightText}
            </span>
          </motion.h2>

          <motion.p 
            className="text-gray-600 text-base max-w-lg leading-relaxed"
            variants={itemVariants}
          >
            {description}
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="mt-2"
          >
            <GlobalButton 
              text={buttonText}
              link={buttonLink}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default GlobalCTA;
