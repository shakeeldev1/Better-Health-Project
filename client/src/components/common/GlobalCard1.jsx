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
      className={`relative rounded-xl p-6 flex flex-col items-center justify-center border-2 transition-all duration-300 aspect-square cursor-pointer group overflow-hidden ${
        bgImage 
          ? 'border-white/10 hover:border-primary hover:shadow-2xl' 
          : 'bg-white border-gray-200 hover:border-primary hover:shadow-lg'
      }`}
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
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

      <div className="relative z-10 flex justify-center mb-4">
        <div className={`rounded-full p-3 transition-colors duration-300 ${
          bgImage 
            ? 'bg-white/10 backdrop-blur-md text-white group-hover:bg-primary group-hover:text-white' 
            : 'bg-gray-50 text-gray-600 group-hover:bg-primary-muted group-hover:text-primary'
        }`}>
          {icon && React.cloneElement(icon, { className: "w-6 h-6" })}
        </div>
      </div>
      
      {/* Title */}
      <h3 className={`relative z-10 text-base font-bold text-center mb-2 transition-colors duration-300 ${
        bgImage ? 'text-white' : 'text-gray-800 group-hover:text-primary'
      }`}>
        {title}
      </h3>
      
      {/* Description */}
      <p className={`relative z-10 text-xs text-center leading-relaxed line-clamp-3 transition-colors duration-300 ${
        bgImage ? 'text-gray-200 group-hover:text-white' : 'text-gray-600'
      }`}>
        {description}
      </p>
    </motion.div>
  );
};

export default GlobalCard1;
