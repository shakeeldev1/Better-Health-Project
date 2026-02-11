import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import GlobalHeading from '../common/GlobalHeading';
import { homeAboutData as data } from '../../data/homeData';

const HomeAbout = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
              description=""
              center={false}
              className="mb-0"
            />
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              {data.paragraphs.map((paragraph, index) => (
                <p key={index} className={index === 0 ? "font-semibold text-primary" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.points.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-muted flex items-center justify-center">
                    <CheckCircle2 size={14} className="text-primary" />
                  </div>
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={data.image} 
                alt="Healthier Lifestyle"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-muted rounded-full -z-0" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/5 rounded-3xl rotate-12 -z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
