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
        staggerChildren: 0.1 
      } 
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    },
  };

  return (
    <section className="relative w-full py-12 md:py-16 overflow-hidden bg-slate-50">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50/30"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <GlobalHeading 
          badge={data.badge}
          title={data.title}
          highlightText={data.highlightText}
          description={data.description}
          center={true}
          className="mb-10 md:mb-12"
        />

        {/* Steps Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl p-5 md:p-6 flex flex-col shadow-lg hover:shadow-2xl border border-slate-100 group relative overflow-hidden"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3E7D72]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Number indicator */}
              <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400 group-hover:bg-[#3E7D72] group-hover:text-white transition-all duration-300">
                {index + 1}
              </div>

              {/* Icon Container */}
              <div className="relative z-10 flex justify-center mb-4">
                <div className="rounded-2xl p-3 bg-gradient-to-br from-[#3E7D72] to-[#2f5f56] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(step.icon, { 
                    size: 24, 
                    strokeWidth: 2,
                    className: "w-6 h-6"
                  })}
                </div>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-base md:text-lg font-bold text-gray-900 mb-2 text-center group-hover:text-[#3E7D72] transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-600 text-sm leading-relaxed text-center">
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
