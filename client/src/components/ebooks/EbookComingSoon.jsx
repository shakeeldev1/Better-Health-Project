import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import GlobalHeading from '../common/GlobalHeading';
import { ebookComingSoonTopics as topics, ebookComingSoonData as data } from '../../data/ebookData';

const EbookComingSoon = () => {
  return (
    <section className="py-24 bg-primary-dark text-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <GlobalHeading 
          badge={data.badge}
          title={data.title}
          highlightText={data.highlightText}
          description={data.description}
          light={true}
          className="mb-12"
        />
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="px-6 py-3 bg-white/10 rounded-2xl border border-white/10 text-white font-medium backdrop-blur-sm"
            >
              {topic}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-primary-light font-bold mb-6">{data.waitlistText}</p>
          <button className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-primary-muted transition-all shadow-xl">
            Join the Waitlist
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EbookComingSoon;
