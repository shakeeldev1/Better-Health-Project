import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import GlobalHeading from '../common/GlobalHeading';
import { familyWhoForPoints as points, familyWhoForData as data } from '../../data/familyCoachingData';

const FamilyWhoFor = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlobalHeading 
              badge={data.badge}
              title={data.title}
              highlightText={data.highlightText}
              description={data.description}
              center={false}
              className="mb-8"
            />
            <div className="space-y-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{point.title}</h4>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={data.image} 
                alt="Family health" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-[240px]">
              <p className="font-medium text-lg italic leading-tight">
                "A system that works for your real family life."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FamilyWhoFor;
