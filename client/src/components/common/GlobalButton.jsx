import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GlobalButton = ({ 
  text, 
  link, 
  className = "", 
  variant = "primary", // primary, secondary, outline, dark
  showArrow = true,
  showShine = true,
  onClick,
  icon: Icon,
  type = "button",
  isActive = false
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-bold transition-all duration-300 group overflow-hidden";
  
  const variants = {
    primary: "bg-primary hover:bg-primary-dark text-white shadow-sm hover:shadow-md",
    secondary: "bg-white text-primary border-2 border-primary hover:bg-primary/5",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary",
    dark: "bg-gray-900 hover:bg-black text-white shadow-md hover:shadow-lg transform hover:-translate-y-1",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-50 border border-gray-200"
  };

  const activeStyles = {
    primary: "ring-2 ring-primary ring-offset-2",
    secondary: "bg-primary/10",
    outline: "bg-white text-primary",
    dark: "ring-2 ring-gray-900 ring-offset-2",
    ghost: "bg-primary text-white border-primary shadow-lg shadow-primary/20"
  };

  const sizes = {
    sm: "py-2 px-4 text-xs",
    md: "py-3 px-8 text-sm",
    lg: "py-4 px-10 text-base"
  };

  const currentSize = typeof sizes[className] !== 'undefined' ? sizes[className] : sizes.md;

  const content = (
    <>
      {/* Button Shine Effect */}
      {showShine && variant !== 'dark' && (
        <motion.div 
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
          className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
        />
      )}
      
      <span className="relative z-10 flex items-center gap-2">
        {Icon && <Icon size={16} className="flex-shrink-0" />}
        {text}
        {showArrow && (
          <motion.svg 
            className="w-4 h-4" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </motion.svg>
        )}
      </span>
    </>
  );

  if (link) {
    return (
      <Link 
        to={link}
        className={`${baseStyles} ${variants[variant]} ${isActive ? activeStyles[variant] : ''} ${currentSize} rounded-lg ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button 
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${isActive ? activeStyles[variant] : ''} ${currentSize} rounded-lg ${className}`}
    >
      {content}
    </button>
  );
};

export default GlobalButton;
