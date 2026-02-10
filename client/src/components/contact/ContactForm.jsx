// ContactForm.jsx

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { contactFormOptions as options } from '../../data/contactData';

// Variant for the entire left (Form) column
const formColumnVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.7, 
      type: "spring", 
      stiffness: 80 
    } 
  },
};

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real app, you would send data to an API here
    alert('Thank you! We will contact you soon.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      program: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 transition-shadow duration-300"
      variants={formColumnVariants}
    >
      
      {/* Title with Icon */}
      <div className="flex items-start gap-3 mb-5 sm:mb-6">
        <Send className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 leading-snug">
          Free Health Consultation
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        
        {/* Inputs */}
        <div>
          <input type="text" name="fullName" placeholder="Your Full Name" value={formData.fullName} onChange={handleChange}
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-gray-700 placeholder-gray-500 hover:border-gray-400" required />
        </div>
        
        <div>
          <input type="email" name="email" placeholder="Your Email Address" value={formData.email} onChange={handleChange}
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-gray-700 placeholder-gray-500 hover:border-gray-400" required />
        </div>
        
        <div>
          <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange}
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-gray-700 placeholder-gray-500 hover:border-gray-400" required />
        </div>

        {/* Select Dropdown */}
        <div>
          <select name="program" value={formData.program} onChange={handleChange}
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-gray-700 bg-white hover:border-gray-400 appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234B5563'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '1.25rem'
            }}
            required
          >
            <option value="" disabled className="text-gray-500">Select Program You're Interested In</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Textarea */}
        <div className="mb-0 sm:mb-0">
          <textarea name="message" placeholder="Tell us about your goals or any questions you have..." value={formData.message} onChange={handleChange}
            rows="3"
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-gray-700 placeholder-gray-500 resize-none hover:border-gray-400"
            required
          ></textarea>
        </div>

        {/* Submit Button - Added motion for interaction */}
        <div className="pt-4 sm:pt-5">
          <motion.button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-base"
            whileHover={{ scale: 1.02, boxShadow: "0 10px 15px rgba(var(--primary-rgb), 0.2)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Send className="w-5 h-5" />
            Get Free Consultation
          </motion.button>
        </div>

      </form>
    </motion.div>
  );
};