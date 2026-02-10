import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Download } from 'lucide-react';
import GlobalHeading from '../common/GlobalHeading';
import { homeCTAData as data } from '../../data/homeData';

const HomeCTA = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3.5rem] p-12 md:p-24 text-center text-white relative shadow-2xl overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <GlobalHeading 
              badge={data.badge}
              title={data.title}
              highlightText={data.highlightText}
              description={data.description}
              light={true}
              className="mb-12"
            />
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to={data.primaryButton.link}
                className="group flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-primary-muted transition-all shadow-xl"
              >
                {data.primaryButton.text}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={data.secondaryButton.link}
                className="flex items-center gap-2 bg-primary-dark text-white border border-white/10 px-10 py-5 rounded-full font-bold text-lg hover:bg-primary transition-all shadow-lg"
              >
                <MessageSquare size={20} />
                {data.secondaryButton.text}
              </Link>
            </div>
            
            <div className="mt-12">
              <button className="flex items-center gap-2 mx-auto text-primary-light/90 hover:text-white transition-colors font-medium">
                <Download size={18} />
                <span>{data.downloadText}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
