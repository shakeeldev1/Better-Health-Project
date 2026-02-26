import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheck, FaBook, FaDownload, FaStar } from 'react-icons/fa';

const Booking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get the product info from URL params or use defaults
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get('product') || 'Ebook';
  const productPrice = urlParams.get('price') || '$24.99';

  const features = [
    "Instant Digital Download",
    "Lifetime Access",
    "Mobile-Friendly PDF",
    "Expert-Crafted Content"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/ebooks" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#3E7D72] mb-6 transition-colors"
        >
          <FaArrowLeft /> Back to Shop
        </Link>

        {/* Booking Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#3E7D72] p-8 text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBook className="text-white text-3xl" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Complete Your Order</h1>
            <p className="text-white/80 mt-2">You're one step away from better health!</p>
          </div>

          {/* Product Details */}
          <div className="p-8">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{productName}</h2>
                <p className="text-gray-500 text-sm">Digital Product</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-[#3E7D72]">{productPrice}</p>
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-4">What's Included:</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheck className="text-[#3E7D72]" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center gap-2 mb-8 bg-gray-50 p-4 rounded-xl">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <FaStar key={i} fill="currentColor" />)}
              </div>
              <span className="text-gray-600 font-medium">5-Star Rated by 2,000+ Families</span>
            </div>

            {/* CTA Button */}
            <Link 
              to="/"
              className="block w-full bg-[#3E7D72] hover:bg-[#2f5f56] text-white font-bold py-4 px-8 rounded-xl text-center transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              Proceed to Booking
            </Link>

            {/* Simple Footer */}
            <p className="text-center text-gray-400 text-xs mt-4">
              Secure checkout • Instant download after purchase
            </p>
          </div>
        </motion.div>

        {/* Help Text */}
        <p className="text-center text-gray-500 mt-6 text-sm">
          Questions? <Link to="/contact" className="text-[#3E7D72] font-semibold hover:underline">Contact us</Link>
        </p>
      </div>
    </div>
  );
};

export default Booking;
