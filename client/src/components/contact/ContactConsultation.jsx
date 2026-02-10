// ContactConsultation.jsx

import React from 'react';
import { motion } from 'framer-motion'; 
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { contactConsultationData as data } from '../../data/contactData';

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const ContactConsultation = () => {
  return (
    // SOLUTION 1: Add overflow-x-hidden to the outermost container
    <div className="overflow-x-hidden bg-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center border-t border-gray-100">
      {/* SOLUTION 2: Add overflow-hidden to the inner container as well */}
      <div className="w-full max-w-7xl mx-auto overflow-hidden">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Left Column - Form */}
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>

          {/* Right Column - Info Cards & Why Choose Us */}
          <div className="order-1 lg:order-2">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 bg-primary-muted text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {data.badge}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {data.title} <span className="text-primary">{data.highlightText}</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {data.description}
              </p>
            </div>
            <ContactInfo />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactConsultation;