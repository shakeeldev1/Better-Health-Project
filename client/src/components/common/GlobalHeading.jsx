import React from 'react';
import { motion } from 'framer-motion';
// import { Star } from 'lucide-react';

const GlobalHeading = ({ 
  badge = "Features", 
  title = "Our Core", 
  highlightText = "Features", 
  description = "Delivering exceptional results with proven track record.",
  center = true,
  className = "",
  light = false
}) => {
  const headerAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className={`mb-6 sm:mb-8 ${center ? 'text-center' : 'text-left'} ${className}`} 
      initial="initial" 
      whileInView="animate" 
      viewport={{ once: true, amount: 0.5 }} 
      variants={headerAnimation} 
    > 
    
      <h2 className={`text-xl sm:text-3xl lg:text-5xl font-bold ${light ? 'text-white' : 'text-gray-800'} mb-2`}> 
        {title} <span className={light ? 'text-primary-light' : 'text-primary'}>{highlightText}</span> 
      </h2> 
      {description && (
        <p className={`text-sm sm:text-base lg:text-lg ${light ? 'text-primary-light opacity-90' : 'text-gray-600'} max-w-2xl mb-4 ${center ? 'mx-auto' : ''} px-4 leading-relaxed`}> 
          {description} 
        </p> 
      )}
    </motion.div>
  );
};

export default GlobalHeading;
