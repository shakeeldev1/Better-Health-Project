import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';
import GlobalHeading from '../common/GlobalHeading';
import { faqCTAData as data } from '../../data/faqData';

const FAQCTA = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-center text-white relative shadow-2xl overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="faq-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#faq-grid)" />
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
            className="relative z-10 max-w-2xl mx-auto"
          >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to={data.primaryButton.link}
              className="group flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-primary-muted transition-all shadow-xl"
            >
              {data.primaryButton.text}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={data.secondaryButton.link}
              className="flex items-center gap-2 bg-primary-dark text-white border border-white/10 px-8 py-4 rounded-full font-bold hover:bg-primary transition-all shadow-lg"
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

export default FAQCTA;
