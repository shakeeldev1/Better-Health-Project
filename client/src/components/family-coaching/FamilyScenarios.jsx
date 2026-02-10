import React from 'react';
import { motion } from 'framer-motion';
import GlobalHeading from '../common/GlobalHeading';
import { familyScenarios as scenarios, familyScenariosData as data } from '../../data/familyCoachingData';

const FamilyScenarios = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlobalHeading 
          badge={data.badge}
          title={data.title}
          highlightText={data.highlightText}
          description={data.description}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0">
                {scenario.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{scenario.title}</h3>
                <p className="text-gray-600 leading-relaxed">{scenario.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyScenarios;
