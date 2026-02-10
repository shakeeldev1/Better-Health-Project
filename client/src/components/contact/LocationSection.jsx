import React from 'react';
import { Navigation, Copy } from 'lucide-react';
import { motion } from 'framer-motion';
import GlobalHeading from '../common/GlobalHeading';
import { locationData as data } from '../../data/contactData';

// --- Framer Motion Variants ---

// 1. Container variants for the entire section (fade in from below)
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1, 
    },
  },
};

// 2. Variants for staggered items (Header elements, Map Card)
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.17, 0.55, 0.55, 1], // Smooth custom ease
    },
  },
};

// 3. Variants for the map card container (to trigger its own internal stagger)
const mapCardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.15, // Stagger map elements and footer elements
        },
    },
};

// 4. Variants for the buttons (subtle spring effect)
const buttonVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 150,
            damping: 12,
        },
    },
    hover: {
        scale: 1.05,
        boxShadow: "0 8px 20px -5px rgba(var(--primary-rgb), 0.5)",
        transition: { type: "spring", stiffness: 300 },
    }
};

const LocationSection = () => {
  return (
    <motion.div 
      className="w-full bg-white flex items-center justify-center overflow-hidden"
      style={{ minHeight: 'calc(100vh - 4rem)' }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" // Animate when the component scrolls into view
      viewport={{ once: true, amount: 0.2 }} // Only animate once
    >
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header (Staggered items) */}
        <GlobalHeading 
          badge={data.badge}
          title={data.title}
          highlightText={data.highlightText}
          description={data.description}
          className="mb-12"
        />

        {/* Map Container - Main Animation Entry */}
        <motion.div 
          className="w-full bg-white rounded-xl shadow-xl overflow-hidden border border-slate-100"
          variants={mapCardVariants} // Main entrance animation for the card
        >
          
          {/* Actual Map Iframe (Subtle fade/zoom) */}
          <motion.div 
            className="relative w-full h-[400px] md:h-[450px] bg-slate-100 overflow-hidden"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.6 } 
                }
            }}
          >
            <iframe 
              src={data.mapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Office Location"
              className="grayscale-[0.2] contrast-[1.1] opacity-95"
            ></iframe>
          </motion.div>

          {/* Location Footer Bar (Staggered items) */}
          <div className="px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 bg-white border-t border-slate-50">
            
            {/* Address Details */}
            <motion.div 
              className="text-center md:text-left"
              variants={itemVariants} // Animation for address block
            >
              <h4 className="font-bold text-[#1e1e1e] text-base md:text-lg">Headquarters</h4>
              <p className="text-slate-500 text-sm">{data.address}</p>
            </motion.div>
            
            {/* Buttons */}
            <div className="flex gap-3 flex-wrap justify-center">
              
              {/* Get Directions Button */}
              <motion.button 
                className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg shadow-md flex items-center gap-2"
                variants={buttonVariants}
                whileHover="hover"
                // Adding custom tap animation for interaction feel
                whileTap={{ scale: 0.95 }} 
              >
                <Navigation size={14} />
                Get Directions
              </motion.button>
              
              {/* Copy Address Button */}
              <motion.button 
                className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg shadow-sm flex items-center gap-2"
                variants={buttonVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.05)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Copy size={14} />
                Copy Address
              </motion.button>

            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LocationSection;
