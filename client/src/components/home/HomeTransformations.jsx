import React from 'react';
import { motion } from 'framer-motion';
import { homeTransformations as testimonials, homeTransformationsData as data } from '../../data/homeData';
import GlobalHeading from '../common/GlobalHeading';

const HomeTransformations = () => {
  // Triple for seamless looping
  const displayItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="transformations" className="bg-white h-screen min-h-[600px] flex flex-col justify-center overflow-hidden py-8">
      <div className="container mx-auto px-4 mb-8 lg:mb-12">
        <GlobalHeading 
          badge={data.badge}
          title={data.title}
          highlightText={data.highlightText}
          description={data.description}
          className="scale-90 lg:scale-100 origin-center"
        />
      </div>

      {/* Optimized Infinite Scroll Container */}
      <div className="relative flex overflow-hidden group py-4">
        <motion.div 
          className="flex gap-6 px-4 transform-gpu"
          animate={{
            x: [0, -((testimonials.length * 320) + (testimonials.length * 24))],
          }}
          transition={{
            duration: 17.5,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ 
            width: "max-content",
            willChange: "transform"
          }}
        >
          {displayItems.map((item, index) => (
            <div 
              key={index}
              className="w-72 lg:w-80 flex-shrink-0"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg border border-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-sm font-medium italic leading-relaxed line-clamp-2 mb-2">
                    "{item.quote}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold leading-tight">{item.name}</h3>
                      <p className="text-[10px] font-semibold text-primary uppercase tracking-widest">
                        {item.program}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Edge Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
};

export default HomeTransformations;