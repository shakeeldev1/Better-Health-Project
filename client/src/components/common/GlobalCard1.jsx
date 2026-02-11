import React from 'react';
import { motion } from 'framer-motion';

const GlobalCard1 = ({ 
  icon, 
  title, 
  description, 
  variants, 
  index 
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 flex flex-col items-center justify-center border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 aspect-square cursor-pointer group"
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {/* Icon Container */}
      <div className="flex justify-center mb-4">
        <div className="rounded-full p-3 bg-gray-50 text-gray-600 group-hover:bg-primary-muted group-hover:text-primary transition-colors duration-300">
          {icon && React.cloneElement(icon, { className: "w-6 h-6" })}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-base font-bold text-center text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-xs text-gray-600 text-center leading-relaxed line-clamp-3">
        {description}
      </p>
    </motion.div>
  );
};

export default GlobalCard1;
