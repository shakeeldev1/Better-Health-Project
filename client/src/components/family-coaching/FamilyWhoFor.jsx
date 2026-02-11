import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Users, ArrowRight } from 'lucide-react';
import GlobalHeading from '../common/GlobalHeading';
import { familyWhoForPoints as points, familyWhoForData as data } from '../../data/familyCoachingData';

const FamilyWhoFor = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="pt-24 pb-0 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <GlobalHeading 
          badge={data.badge}
          title={data.title}
          highlightText={data.highlightText}
          description={data.description}
          center={true}
          className="mb-16"
        />

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left: Visual Card */}
          <div className="lg:w-5/12 sticky top-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Featured Visual Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative group"
              >
                <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                  <img 
                    src={data.image} 
                    alt="Professional Family Coaching" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900 leading-none">Unified Households</p>
                      <p className="text-[10px] text-gray-500 mt-1">100% Personalised</p>
                    </div>
                  </div>
                </div>

                {/* Additional Content Under Picture */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-8 p-6 bg-primary/5 rounded-[2rem] border border-primary/10 relative overflow-hidden group/box"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/box:rotate-12 transition-transform duration-500">
                    <Users size={40} className="text-primary" />
                  </div>
                  
                  <div className="relative z-10">
                    <h5 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      The BHP Family Approach
                    </h5>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      We don't just give you a plan; we provide a <span className="text-primary font-bold">sustainable framework</span> that evolves with your family's changing needs and schedules.
                    </p>
                    
                    <div className="mt-4 flex items-center gap-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Support</span>
                        <span className="text-xs font-bold text-gray-900">24/7 Access</span>
                      </div>
                      <div className="w-[1px] h-8 bg-primary/20" />
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Plan</span>
                        <span className="text-xs font-bold text-gray-900">Household Sync</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Suitability Cards */}
          <div className="lg:w-7/12 mt-12 lg:mt-0">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50/50 hover:bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-500 group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${point.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                    {point.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    {point.title}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary" />
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {point.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Join 100+ Families</span>
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

export default FamilyWhoFor;
