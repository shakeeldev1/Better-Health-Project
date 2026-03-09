import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaCalendarAlt,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";
import { ShoppingCart, Star, Clock, Phone } from "lucide-react";

// Images
import serviceImg from "../../public/si.jpg";
import bookingImg from "../../public/plan2.jpeg";

const Booking = () => {
  const location = useLocation();
  const selectedItem = location.state?.item || null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: selectedItem ? `Purchase: ${selectedItem.title}` : "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white py-20 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-[#3E7D72]/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <FaCheck className="text-[#3E7D72] text-3xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            Order Received
          </h2>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            Thank you for choosing Better Health Project. We've received your
            request for{" "}
            <span className="text-[#3E7D72] font-bold">
              {selectedItem?.title || "Consultation"}
            </span>
            . Our team will contact you within 24 hours.
          </p>
          <Link
            to="/"
            className="inline-block bg-[#3E7D72] text-white font-bold py-4 px-10 rounded-full transition-all hover:bg-[#2f5f56] shadow-lg shadow-[#3E7D72]/20"
          >
            Return to Dashboard
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header / Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={serviceImg}
          alt="Service Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-4">
          <Link
            to={selectedItem ? "/ebooks" : "/"}
            className="absolute top-8 left-8 flex items-center gap-2 text-white bg-black/20 backdrop-blur-md px-4 py-2 rounded-full hover:bg-black/40 transition-all font-bold text-sm"
          >
            <FaArrowLeft className="text-xs" /> Back
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter italic uppercase">
              Secure <span className="text-[#3E7D72]">Booking</span>
            </h1>
            <p className="text-gray-600 font-bold mt-2 uppercase tracking-[0.3em] text-xs">
              Premium Health Solutions
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-20 relative z-20 pb-20">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Details */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-8 md:p-12 border border-slate-50"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Item Preview */}
                <div className="w-full md:w-48 aspect-[3/4] rounded-3xl overflow-hidden shadow-xl bg-slate-100 flex-shrink-0">
                  <img
                    src={selectedItem?.bgImage || bookingImg}
                    alt="Booking Preview"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#3E7D72]/10 text-[#3E7D72] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      {selectedItem?.tag || "Consultation"}
                    </span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter uppercase italic">
                    {selectedItem?.title || "Health Strategy Call"}
                  </h2>

                  <p className="text-gray-500 font-medium leading-relaxed mb-6">
                    {selectedItem
                      ? "Complete your purchase to gain instant access to your digital guide and start your transformation journey today."
                      : "Book your expert consultation to deep dive into your goals, lifestyle, and build a solid foundation for sustainable health."}
                  </p>

                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-sm font-bold text-gray-400">
                      Total Price:
                    </span>
                    <span className="text-4xl font-black text-gray-900 tracking-tighter">
                      ${selectedItem?.price || "FREE"}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-sm font-bold text-gray-700 bg-slate-50 p-4 rounded-2xl">
                      <Clock size={16} className="text-[#3E7D72]" />
                      <span>Instant Access</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold text-gray-700 bg-slate-50 p-4 rounded-2xl">
                      <FaShieldAlt className="text-[#3E7D72]" />
                      <span>Secure Payment</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Why BHP Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#3E7D72] text-white p-8 rounded-[2rem] shadow-xl">
                <FaRocket className="text-3xl mb-4" />
                <h4 className="text-xl font-bold mb-2 tracking-tight">
                  Fast Results
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Our evidence-based strategies are designed for peak efficiency
                  and long-term sustainability.
                </p>
              </div>
              <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl">
                <Phone className="text-3xl mb-4" />
                <h4 className="text-xl font-bold mb-2 tracking-tight">
                  Expert Support
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Personalized guidance from certified professionals who
                  understand your busy lifestyle.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-10 border border-slate-100 sticky top-24"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tighter uppercase italic">
                  Complete Details
                </h3>
                <p className="text-gray-400 text-sm font-medium">
                  Please provide your info to finalize your booking.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 placeholder:font-bold focus:ring-2 focus:ring-[#3E7D72]/20 outline-none transition-all font-bold"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 placeholder:font-bold focus:ring-2 focus:ring-[#3E7D72]/20 outline-none transition-all font-bold"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 placeholder:font-bold focus:ring-2 focus:ring-[#3E7D72]/20 outline-none transition-all font-bold"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Special requests or health goals..."
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 placeholder:font-bold focus:ring-2 focus:ring-[#3E7D72]/20 outline-none transition-all font-bold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3E7D72] text-white font-black py-5 rounded-2xl text-lg uppercase tracking-widest hover:bg-[#2f5f56] transition-all hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-[#3E7D72]/30 active:scale-95 flex items-center justify-center gap-3"
                >
                  Confirm Booking <FaArrowRight size={16} />
                </button>

                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <FaShieldAlt size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Encrypted & Secure 256-bit SSL
                  </span>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
