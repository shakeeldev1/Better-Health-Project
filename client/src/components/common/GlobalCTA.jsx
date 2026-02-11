import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
        className="w-full max-w-4xl bg-primary-muted rounded-[2rem] px-6 py-6 md:py-8 text-center shadow-sm border border-primary/10"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-4"> 
          <motion.h2 
            className="text-xl md:text-2xl lg:text-[1.75rem] font-bold text-gray-900 leading-tight"
            variants={itemVariants}
          >
            {title} <span className="text-primary">{highlightText}</span>
          </motion.h2>

          <motion.p 
            className="text-gray-600 text-base max-w-lg leading-relaxed"
            variants={itemVariants}
          >
            {description}
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link 
              to={buttonLink}
              className="mt-2 inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform text-sm"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block"
              >
                {buttonText}
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default GlobalCTA;
