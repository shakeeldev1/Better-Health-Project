import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { 
  ebookHowItWorksData as data, 
  ebookHowItWorksSteps as steps 
} from '../../data/ebookData';
import GlobalHeading from '../common/GlobalHeading';

const EbookHowItWorks = () => {
  // --- Framer Motion Variants ---
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15 
      } 
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.85 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    },
  };

  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')",
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header using GlobalHeading with light mode */}
        <GlobalHeading 
          badge={data.badge}
          title={data.title}
          highlightText={data.highlightText}
          description={data.description}
          center={true}
          light={true}
          className="mb-16"
        />

        {/* Steps Grid - Using the layout style from the "AboutZone" code */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-lg p-6 flex flex-col border-2 border-white/40 shadow-lg min-h-[200px] group relative hover:border-primary transition-colors duration-300"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.03, boxShadow: "0 15px 25px rgba(0, 0, 0, 0.2)" }}
            >
              {/* Icon Container */}
              <div className="flex justify-center mb-4">
                <div className="rounded-full p-3 bg-white/90 text-gray-700 transition-colors duration-300 shadow-sm group-hover:bg-primary group-hover:text-white">
                  {React.cloneElement(step.icon, { 
                    size: 24, 
                    strokeWidth: 2,
                    className: "w-6 h-6 transition-colors duration-300"
                  })}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center transition-colors duration-300 group-hover:text-primary">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EbookHowItWorks;