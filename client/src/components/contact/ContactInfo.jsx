// ContactInfo.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { contactLinks, whyChooseUs } from '../../data/contactData';

// Variant for individual items (info cards, list items)
const itemVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.5 
    } 
  },
};

export const ContactInfo = () => {
  return (
    <motion.div 
      className="space-y-4 sm:space-y-6"
      // Container variants for the right column to stagger the cards and the list section
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
            duration: 0.7,
            type: "spring",
            stiffness: 80,
          },
        },
      }}
    >
      
      {/* Info Cards Grid - Individual Stagger */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {contactLinks.map(({ icon, title, detail, description, link }, index) => (
          <motion.a 
            key={index} 
            href={link || "#"}
            target={link ? "_blank" : undefined}
            rel={link ? "noopener noreferrer" : undefined}
            className={`bg-white rounded-xl shadow-md p-4 transition-all duration-300 ${link ? 'border border-transparent' : ''}`}
            variants={itemVariants} // Slide in from the right
            whileHover={{ scale: link ? 1.03 : 1, boxShadow: "0 8px 15px rgba(var(--primary-rgb), 0.08)" }}
            whileTap={{ scale: link ? 0.98 : 1 }}
          >
            <div className="flex items-start gap-3">
              <div className="bg-primary-muted p-2 rounded-lg text-primary">
                {icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-medium text-gray-800 mb-0.5">{title}</h3>
                <p className={`text-gray-600 text-sm ${link ? 'font-semibold' : ''}`}>{detail}</p>
                {description && <p className="text-gray-400 text-xs mt-1">{description}</p>}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Why Choose Us Section - Animated as a block */}
      <motion.div 
        className="bg-primary-muted rounded-xl shadow-lg p-5 sm:p-6 border border-primary/10"
        variants={itemVariants} // Slide in from the right after the cards
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4 sm:mb-5">Why Choose Us?</h2>
        <ul className="space-y-3">
          {whyChooseUs.map((point, index) => (
            <motion.li 
              key={index} 
              className="flex items-start gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }} // Delayed individual reveal within the list
            >
              <div className="mt-1 flex-shrink-0">
                {point.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">{point.title}</h4>
                <p className="text-gray-700 text-sm leading-snug">
                  {point.text}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};