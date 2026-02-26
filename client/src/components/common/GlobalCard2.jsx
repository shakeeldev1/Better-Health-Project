import React from 'react';
import { motion } from 'framer-motion';

const GlobalCard2 = ({ 
  icon, 
  title, 
  description, 
  index,
  compact = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2 cursor-pointer overflow-hidden ${
        compact ? 'p-5 md:p-6' : 'p-6 md:p-8'
      }`}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3E7D72]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Number badge */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400 group-hover:bg-[#3E7D72] group-hover:text-white transition-all duration-300">
        {index + 1}
      </div>

      <div className={`relative z-10 ${
        compact ? 'w-10 h-10 mb-4' : 'w-12 h-12 mb-5'
      } bg-gradient-to-br from-[#3E7D72] to-[#2f5f56] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
        <div className="text-white">
          {icon && React.cloneElement(icon, { 
            size: compact ? 20 : 24,
            className: "transition-transform duration-300"
          })}
        </div>
      </div>
      
      <h3 className={`relative z-10 ${
        compact ? 'text-lg mb-2' : 'text-xl mb-3'
      } font-bold text-gray-900 group-hover:text-[#3E7D72] transition-colors duration-300`}>
        {title}
      </h3>
      <p className={`relative z-10 text-gray-600 leading-relaxed ${compact ? 'text-sm' : 'text-base'}`}>
        {description}
      </p>

      {/* Arrow indicator */}
      <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
        <svg className="w-5 h-5 text-[#3E7D72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </motion.div>
  );
};

export default GlobalCard2;
