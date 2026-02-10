import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import GlobalHeading from '../common/GlobalHeading';
import { homeAppFeatures as features, homeAppData as data } from '../../data/homeData';

const HomeApp = () => {

  return (
    <section className="py-24 bg-primary-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlobalHeading 
              badge={data.badge}
              title={data.title}
              highlightText={data.highlightText}
              description={data.description}
              center={false}
              className="mb-10"
              light={true}
            />
            
            <div className="space-y-4 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check size={14} className="text-primary-dark" />
                  </div>
                  <span className="text-lg text-primary-light/90 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#" className="flex items-center gap-3 bg-black hover:bg-gray-900 transition-colors px-6 py-3 rounded-xl border border-gray-800">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Apple Store" className="h-8" />
              </a>
              <a href="#" className="flex items-center gap-3 bg-black hover:bg-gray-900 transition-colors px-6 py-3 rounded-xl border border-gray-800">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Mockup of phone screen */}
            <div className="relative mx-auto w-[280px] md:w-[320px] aspect-[9/19] bg-gray-800 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
               <img 
                 src={data.image} 
                 alt="App Screenshot"
                 className="w-full h-full object-cover"
               />
            </div>
            {/* Decorative glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeApp;
