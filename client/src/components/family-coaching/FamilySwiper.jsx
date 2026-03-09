import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import famimg from "../../../public/fame.jpeg";

const FamilySwiper = () => {
  return (
    <section className="relative py-10 md:py-16 overflow-hidden bg-white">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10 skew-x-[-12deg] translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 max-w-xl">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#3E7D72]/5 text-[#3E7D72] rounded-full"
            >
              <div className="w-1.5 h-1.5 bg-[#3E7D72] rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Better Together
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight"
            >
              Healthier Families, <br />
              <span className="text-[#3E7D72]">Made Simple.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-500 mb-8 leading-relaxed font-medium"
            >
              Practical nutrition and movement strategies tailored for your
              entire household. Build sustainable health habits that everyone
              will actually enjoy.
            </motion.p>

            {/* Feature Points */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-x-6 gap-y-2 mb-8"
            >
              {["Family Plans", "Group Support", "All Ages"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#3E7D72] rounded-full" />
                  <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#3E7D72] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-[#3E7D72]/20 hover:bg-[#255c53] transition-all hover:translate-y-[-2px] active:scale-95 group capitalize"
              >
                Join the program
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="relative group">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-[#3E7D72]/5 rounded-[2.5rem] -rotate-2 -z-10 transition-transform group-hover:rotate-0 duration-700" />

              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100">
                <img
                  src={famimg}
                  alt="Family wellness"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FamilySwiper;
