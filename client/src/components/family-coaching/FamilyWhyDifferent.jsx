import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Sparkles, Zap, ArrowRight } from 'lucide-react';
import GlobalHeading from '../common/GlobalHeading';
import { familyWhyDifferent as reasons, familyWhyDifferentData as data } from '../../data/familyCoachingData';

const FamilyWhyDifferent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <GlobalHeading 
              badge={data.badge}
              title={data.title}
              highlightText={data.highlightText}
              description={data.description}
              center={false}
              className="mb-8"
            />

            {/* Premium Quote Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative p-8 bg-white rounded-[2rem] shadow-xl shadow-primary/5 border border-primary/10 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Heart className="w-5 h-5 fill-current" />
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <Sparkles key={i} size={12} className="text-primary" />)}
                  </div>
                </div>
                
                <h4 className="text-2xl font-black text-gray-900 leading-tight italic">
                  "Health that fits real family life."
                </h4>
                <p className="mt-4 text-sm text-gray-500 font-medium flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-primary/30" />
                  The Better Health Philosophy
                </p>
              </div>
            </motion.div>

            {/* Support Metrics */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary border border-gray-100">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900 leading-none">100%</p>
                  <p className="text-xs text-gray-500 mt-1">Family Centric</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary border border-gray-100">
                  <Zap size={24} />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900 leading-none">Real Life</p>
                  <p className="text-xs text-gray-500 mt-1">No Extreme Rules</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Reasons Grid */}
          <div className="lg:w-1/2">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-primary/10 border border-gray-100 hover:border-primary/20 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-inner">
                    {React.cloneElement(reason.icon, { 
                      size: 28,
                      className: "transition-colors duration-500" 
                    })}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More <ArrowRight size={14} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FamilyWhyDifferent;
