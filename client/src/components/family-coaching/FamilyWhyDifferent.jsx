import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import GlobalHeading from '../common/GlobalHeading';
import GlobalCard2 from '../common/GlobalCard2';
import { familyWhyDifferent as reasons, familyWhyDifferentData as data } from '../../data/familyCoachingData';

const FamilyWhyDifferent = () => {
  return (
    <section className="py-10 bg-white overflow-hidden lg:h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-primary-muted/30 rounded-[2rem] p-6 md:p-10 relative overflow-hidden border border-primary/5">
          {/* Decorative subtle background pattern */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid-family" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-family)" />
            </svg>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/5"
            >
              <GlobalHeading 
                badge={data.badge}
                title={data.title}
                highlightText={data.highlightText}
                description={data.description}
                center={false}
                className="mb-4"
              />
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2.5 p-3 bg-white rounded-xl shadow-sm border border-primary/10"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Heart className="w-4 h-4 fill-current" />
                </div>
                <p className="text-xs font-semibold text-gray-800 italic">"Health that fits real family life."</p>
              </motion.div>
            </motion.div>

            <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <GlobalCard2
                  key={index}
                  index={index}
                  icon={reason.icon}
                  title={reason.title}
                  description={reason.description}
                  compact={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyWhyDifferent;
