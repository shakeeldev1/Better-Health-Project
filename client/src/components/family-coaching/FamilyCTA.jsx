import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';
import GlobalHeading from '../common/GlobalHeading';
import { familyCTAData as data } from '../../data/familyCoachingData';

const FamilyCTA = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-muted -skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-center text-white shadow-2xl shadow-primary-dark/20 overflow-hidden relative">
          {/* Subtle patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <GlobalHeading 
            badge={data.badge}
            title={data.title}
            highlightText={data.highlightText}
            description={data.description}
            light={true}
            className="mb-10"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to={data.primaryButton.link}
              className="group flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-muted transition-all shadow-lg hover:shadow-xl"
            >
              {data.primaryButton.text}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={data.secondaryButton.link}
              className="flex items-center gap-2 bg-primary-dark/50 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all backdrop-blur-sm"
            >
              <MessageSquare size={20} />
              {data.secondaryButton.text}
            </Link>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FamilyCTA;
