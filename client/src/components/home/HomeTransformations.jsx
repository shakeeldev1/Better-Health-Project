import React from 'react';
import { motion } from 'framer-motion';
import GlobalHeading from '../common/GlobalHeading';
import { homeTransformations as transformations, homeTransformationsData as data } from '../../data/homeData';

const HomeTransformations = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlobalHeading 
          badge={data.badge}
          title={data.title}
          highlightText={data.highlightText}
          description={data.description}
        />

        <div className="flex overflow-x-auto pb-12 gap-8 snap-x no-scrollbar">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[300px] md:min-w-[400px] snap-center"
            >
              <div className="bg-gray-50 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-square relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-bold text-xl">{item.name}</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 italic text-lg">"{item.text}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTransformations;
