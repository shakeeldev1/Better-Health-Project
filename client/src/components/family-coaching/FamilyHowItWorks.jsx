import React from 'react';
import { motion } from 'framer-motion';
import GlobalHeading from '../common/GlobalHeading';
import { familyHowItWorksSteps as steps, familyHowItWorksData as data } from '../../data/familyCoachingData';

const FamilyHowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[2.75rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="relative group"
            >
              {/* Step Number Circle */}
              <div className="relative z-10 mb-8 flex justify-center lg:justify-start">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-primary/10 flex items-center justify-center text-primary font-black text-xl group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  {step.number}
                </div>
                {/* Mobile/Tablet connecting line */}
                <div className="lg:hidden absolute top-14 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-primary/10 last:hidden" />
              </div>

              <div className="bg-primary-muted/10 rounded-3xl pt-6 px-6 pb-4 border border-primary/5 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="inline-block px-3 py-1 bg-white rounded-full text-[10px] font-bold text-primary uppercase tracking-wider mb-3 shadow-sm border border-primary/5">
                  Phase {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FamilyHowItWorks;
