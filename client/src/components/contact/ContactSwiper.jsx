import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import contactImg from "../../../public/hero.jpeg";

const ContactSwiper = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-teal-50/30">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-[#3E7D72]/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Get in <span className="text-[#3E7D72]">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Have questions about our coaching programs, e-books, or want to start your health journey? We'd love to hear from you.
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["Quick Response", "Expert Advice", "Free Consultation"].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                  <div className="w-2 h-2 bg-[#3E7D72] rounded-full" />
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact-form" 
                className="inline-flex items-center cursor-pointer gap-2 bg-[#3E7D72] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#255c53] transition-all hover:scale-105 active:scale-95 group"
              >
                Contact Us
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={contactImg}
                alt="Contact Better Health Project" 
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                <p className="text-sm font-bold text-gray-900">We're Here to Help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSwiper;
