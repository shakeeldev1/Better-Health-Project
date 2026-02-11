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
      className={`bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2 cursor-pointer ${
        compact ? 'p-5 md:p-6' : 'p-8'
      }`}
    >
      <div className={`${
        compact ? 'w-10 h-10 mb-4' : 'w-14 h-14 mb-6'
      } bg-primary-muted rounded-xl flex items-center justify-center group-hover:bg-primary transition-all duration-300`}>
        <div className="text-primary group-hover:text-white transition-colors duration-300">
          {icon && React.cloneElement(icon, { 
            size: compact ? 20 : 28,
            className: "transition-colors duration-300"
          })}
        </div>
      </div>
      <h3 className={`${
        compact ? 'text-lg mb-2' : 'text-xl mb-4'
      } font-bold text-gray-900 group-hover:text-primary transition-colors duration-300`}>
        {title}
      </h3>
      <p className={`text-gray-600 leading-relaxed ${compact ? 'text-sm' : ''}`}>
        {description}
      </p>
    </motion.div>
  );
};

export default GlobalCard2;
