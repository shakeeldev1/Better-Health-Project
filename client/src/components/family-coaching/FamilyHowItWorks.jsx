import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import GlobalHeading from '../common/GlobalHeading';
import { familyHowItWorksSteps as steps, familyHowItWorksData as data } from '../../data/familyCoachingData';

const FamilyHowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlobalHeading 
          badge={data.badge}
          title={data.title}
          highlightText={data.highlightText}
          description={data.description}
          className="mb-16"
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="relative group flex flex-col"
            >
              {/* Card Body */}
              <div className="relative flex-grow bg-primary-muted/10 rounded-3xl pt-6 px-6 pb-4 border border-primary/5 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="inline-block px-3 py-1 bg-white rounded-full text-[10px] font-bold text-primary uppercase tracking-wider mb-3 shadow-sm border border-primary/5">
                  Phase {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow: Positioned between cards on Desktop */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-9 top-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
                    <motion.div
                      animate={{ x: [-5, 5] }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                      className="relative"
                    >
                      {/* Animated Glow Background */}
                      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 animate-pulse" />
                      
                      <div className="relative w-10 h-10 bg-white rounded-full shadow-lg border border-primary/10 flex items-center justify-center text-primary overflow-hidden group-hover:border-primary/30 transition-colors duration-500">
                        {/* Moving Gradient Line */}
                        <motion.div 
                          animate={{ x: [-20, 20] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                        />
                        <ChevronRight size={24} strokeWidth={2.5} className="relative z-10" />
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FamilyHowItWorks;