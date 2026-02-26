import React from 'react';
import { motion } from 'framer-motion';

const GlobalCard1 = ({ 
  icon, 
  title, 
  description, 
  variants, 
  index,
  bgImage
}) => {
  return (
    <motion.div 
      className={`relative rounded-xl p-5 md:p-6 flex flex-col items-center justify-center border-2 transition-all duration-300 aspect-square cursor-pointer group overflow-hidden ${
        bgImage 
          ? 'border-white/10 hover:border-[#3E7D72] hover:shadow-2xl' 
          : 'bg-gradient-to-br from-white to-gray-50 border-gray-100 hover:border-[#3E7D72] hover:shadow-xl'
      }`}
      variants={variants}
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background Image with Overlay */}
      {bgImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 group-hover:via-black/70 transition-colors duration-300" />
        </>
      )}

      {/* Gradient Background for non-bgImage */}
      {!bgImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#3E7D72]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}

      <div className="relative z-10 flex justify-center mb-3 md:mb-4">
        <div className={`rounded-2xl p-3 md:p-4 transition-all duration-300 shadow-lg ${
          bgImage 
            ? 'bg-white/10 backdrop-blur-md text-white group-hover:bg-[#3E7D72] group-hover:text-white' 
            : 'bg-gradient-to-br from-[#3E7D72] to-[#2f5f56] text-white group-hover:scale-110'
        }`}>
          {icon && React.cloneElement(icon, { className: "w-5 h-5 md:w-6 md:h-6" })}
        </div>
      </div>
      
      {/* Title */}
      <h3 className={`relative z-10 text-sm md:text-base font-bold text-center mb-1 md:mb-2 transition-colors duration-300 ${
        bgImage ? 'text-white' : 'text-gray-800 group-hover:text-[#3E7D72]'
      }`}>
        {title}
      </h3>
      
      {/* Description */}
      <p className={`relative z-10 text-xs text-center leading-relaxed line-clamp-2 transition-colors duration-300 ${
        bgImage ? 'text-gray-200 group-hover:text-white' : 'text-gray-500'
      }`}>
        {description}
      </p>

      {/* Hover Arrow */}
      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <svg className="w-4 h-4 text-[#3E7D72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </motion.div>
  );
};

export default GlobalCard1;
