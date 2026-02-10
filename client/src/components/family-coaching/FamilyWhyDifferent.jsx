import React from 'react';
import { motion } from 'framer-motion';
import GlobalHeading from '../common/GlobalHeading';
import { familyWhyDifferent as reasons, familyWhyDifferentData as data } from '../../data/familyCoachingData';

const FamilyWhyDifferent = () => {
  return (
    <section className="py-20 bg-primary-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <GlobalHeading 
              badge={data.badge}
              title={data.title}
              highlightText={data.highlightText}
              description={data.description}
              center={false}
              light={true}
              className="mb-8"
            />
            <div className="inline-block p-4 bg-primary/20 rounded-2xl border border-white/10">
              <p className="text-sm italic font-medium">"Health that fits real family life."</p>
            </div>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                <p className="text-primary-light/80 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyWhyDifferent;
