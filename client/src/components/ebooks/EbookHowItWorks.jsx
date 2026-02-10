import React from 'react';
import { motion } from 'framer-motion';
import GlobalHeading from '../common/GlobalHeading';
import { ebookHowItWorksSteps as steps, ebookHowItWorksData as data } from '../../data/ebookData';

const EbookHowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlobalHeading 
          badge={data.badge}
          title={data.title}
          highlightText={data.highlightText}
          description={data.description}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary-muted rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EbookHowItWorks;
