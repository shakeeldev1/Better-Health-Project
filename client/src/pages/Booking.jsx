import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaPhone, FaClock, FaCheck, FaCalendarAlt } from 'react-icons/fa';

const Booking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const benefits = [
    "Personalized health assessment",
    "Customized nutrition plan",
    "One-on-one coaching session",
    "Actionable steps to get started"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 py-8 px-4 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full text-center"
        >
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheck className="text-green-500 text-5xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 text-lg mb-2">Your consultation request has been submitted successfully.</p>
          <p className="text-gray-500 mb-8">We'll be in touch within 24 hours to schedule your call.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="bg-[#3E7D72] hover:bg-[#2f5f56] text-white font-bold py-3 px-8 rounded-xl transition-all">
              Back to Home
            </Link>
            <Link to="/contact" className="border-2 border-[#3E7D72] text-[#3E7D72] hover:bg-[#3E7D72] hover:text-white font-bold py-3 px-8 rounded-xl transition-all">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#3E7D72] mb-6 transition-colors">
          <FaArrowLeft /> Back to Home
        </Link>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#3E7D72] rounded-3xl p-8 text-white"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your Free Consultation
            </h1>
            <p className="text-white/80 mb-8 text-lg">
              Book a call with us to discuss your health goals and see how we can help you transform your life.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-white/20">
              <div className="flex items-center gap-3">
                <FaPhone className="text-white/80" />
                <span>We'll call you at your preferred time</span>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-white/80" />
                <span>30-minute free consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-white/80" />
                <span>Book at a time that works for you</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Your Free Call</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3E7D72] focus:ring-2 focus:ring-[#3E7D72]/20 outline-none transition-all"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3E7D72] focus:ring-2 focus:ring-[#3E7D72]/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3E7D72] focus:ring-2 focus:ring-[#3E7D72]/20 outline-none transition-all"
                  placeholder="+1 234 567 8900"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What's your main health goal? *
                </label>
                <select
                  name="goal"
                  required
                  value={formData.goal}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3E7D72] focus:ring-2 focus:ring-[#3E7D72]/20 outline-none transition-all"
                >
                  <option value="">Select your goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="family-health">Family Health</option>
                  <option value="nutrition-plan">Custom Nutrition Plan</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Anything else you'd like to share?
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3E7D72] focus:ring-2 focus:ring-[#3E7D72]/20 outline-none transition-all resize-none"
                  placeholder="Tell us a bit more about your situation..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-[#3E7D72] hover:bg-[#2f5f56] text-white font-bold py-4 px-8 rounded-xl text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
              </button>

              <p className="text-center text-gray-400 text-sm">
                We respect your privacy. Your information is safe with us.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
