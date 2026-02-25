// ContactForm.jsx

import React, { useState, useRef } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailConfig';
import { contactFormOptions as options } from '../../data/contactData';
import GlobalButton from '../common/GlobalButton';

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
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;

    setIsSubmitting(true);
    const loadingToast = toast.loading('Sending your message...', {
      icon: <Loader2 className="animate-spin" />
    });

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      toast.success('Thank you! Your message has been sent successfully.', {
        id: loadingToast,
        icon: <CheckCircle2 className="text-green-500" />,
        duration: 5000,
      });

      setIsSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        program: '',
        message: ''
      });

      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again or email us directly.', {
        id: loadingToast,
        icon: <AlertCircle className="text-red-500" />,
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
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

      {/* Success Message */}
      {isSuccess && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
        >
          <CheckCircle2 className="text-green-600 flex-shrink-0" />
          <p className="text-green-800 text-sm">Thank you! We'll be in touch soon.</p>
        </motion.div>
      )}

      {/* Form */}
      <form 
        ref={form} 
        onSubmit={handleSubmit} 
        className="space-y-4 sm:space-y-5"
        aria-label="Contact form"
      >
        {/* Inputs */}
        <div>
          <label htmlFor="fullName" className="sr-only">Full Name</label>
          <input 
            type="text" 
            id="fullName"
            name="fullName" 
            placeholder="Your Full Name" 
            value={formData.fullName} 
            onChange={handleChange}
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-gray-700 placeholder-gray-500 hover:border-gray-400" 
            required 
            aria-required="true"
            disabled={isSubmitting}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="sr-only">Email Address</label>
          <input 
            type="email" 
            id="email"
            name="email" 
            placeholder="Your Email Address" 
            value={formData.email} 
            onChange={handleChange}
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-gray-700 placeholder-gray-500 hover:border-gray-400" 
            required 
            aria-required="true"
            disabled={isSubmitting}
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="sr-only">Phone Number</label>
          <input 
            type="tel" 
            id="phone"
            name="phone" 
            placeholder="Your Phone Number" 
            value={formData.phone} 
            onChange={handleChange}
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-gray-700 placeholder-gray-500 hover:border-gray-400" 
            required 
            aria-required="true"
            disabled={isSubmitting}
          />
        </div>

        {/* Select Dropdown */}
        <div>
          <label htmlFor="program" className="sr-only">Program Interest</label>
          <select 
            id="program"
            name="program" 
            value={formData.program} 
            onChange={handleChange}
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-gray-700 bg-white hover:border-gray-400 appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234B5563'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '1.25rem'
            }}
            required
            aria-required="true"
            disabled={isSubmitting}
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
          <label htmlFor="message" className="sr-only">Your Message</label>
          <textarea 
            id="message"
            name="message" 
            placeholder="Tell us about your goals or any questions you have..." 
            value={formData.message} 
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-gray-700 placeholder-gray-500 resize-none hover:border-gray-400"
            required
            aria-required="true"
            disabled={isSubmitting}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-4 sm:pt-5">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-[#3E7D72] hover:bg-[#2f5f56] disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Get Free Consultation
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};
