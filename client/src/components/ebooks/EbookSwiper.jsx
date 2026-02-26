import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBook, FaStar, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const EbookSwiper = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-amber-50/30">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#3E7D72]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-4">
              {/* <FaBook className="text-amber-500 text-xl" /> */}
              {/* <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">Digital Guides</span> */}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Expert-Crafted <span className="text-[#3E7D72]">Ebooks</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Download instantly and start your journey to better health. Our expertly crafted protocols are designed to optimize your family's wellness.
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-[#3E7D72]/10 px-4 py-2 rounded-full border border-[#3E7D72]">
                <FaStar className="text-[#3E7D72] text-sm" />
                <span className="text-sm font-medium text-gray-700">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2 bg-[#3E7D72]/10 px-4 py-2 rounded-full border border-[#3E7D72]">
                <FaDownload className="text-[#3E7D72] text-sm" />
                <span className="text-sm font-medium text-gray-700">Instant Download</span>
              </div>
              <div className="flex items-center gap-2 bg-[#3E7D72]/10 px-4 py-2 rounded-full border border-[#3E7D72]">
                <FaBook className="text-[#3E7D72] text-sm" />
                <span className="text-sm font-medium text-gray-700">Mobile Friendly</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/#shop" 
                className="inline-flex items-center gap-2 bg-[#3E7D72] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#33675e] transition-all hover:scale-105 active:scale-95 group"
              >
                Shop Now
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop"
                alt="Healthy ebooks" 
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                <p className="text-sm font-bold text-gray-900">Up to 40% Off Bundles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookSwiper;
