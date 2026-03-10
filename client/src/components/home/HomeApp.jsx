import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Smartphone,
  Zap,
  ShieldCheck,
  Target,
  Smartphone as MobileIcon,
} from "lucide-react";
import GlobalHeading from "../common/GlobalHeading";
import GlobalButton from "../common/GlobalButton";
import {
  homeAppFeatures as features,
  homeAppData as data,
} from "../../data/homeData";
// import img7 from "/1.jpg"

const HomeApp = () => {
  const screenshots = ["/ss-1.jpeg", "/ss-2.jpeg", "/ss-3.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Your original animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const featureIcons = [
    <Smartphone className="w-5 h-5" />,
    <ShieldCheck className="w-5 h-5" />,
    <Target className="w-5 h-5" />,
    <Zap className="w-5 h-5" />,
    <Check className="w-5 h-5" />,
  ];

  return (
    <section className="py-10 md:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-50 via-white to-teal-50/30 rounded-[2rem] p-6 md:p-8 lg:p-10 relative overflow-hidden border border-slate-100">
          {/* Decorative background pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="grid-app"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-app)" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Side: Remained exactly as your original logic */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <GlobalHeading
                badge={data.badge}
                title={data.title}
                highlightText={data.highlightText}
                description={data.description}
                center={false}
                className="mb-4"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:border-[#3E7D72]/30 hover:shadow-md transition-all duration-300 group cursor-default"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#3E7D72]/10 flex items-center justify-center text-[#3E7D72] group-hover:bg-[#3E7D72] group-hover:text-white transition-colors duration-300">
                      {featureIcons[index] || <Check className="w-4 h-4" />}
                    </div>
                    <span className="text-xs md:text-sm text-gray-700 font-semibold group-hover:text-[#3E7D72] transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3"
              >
                <GlobalButton
                  text={
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                      alt="App Store"
                      className="h-5"
                    />
                  }
                  link="#"
                  variant="dark"
                  showArrow={false}
                  showShine={false}
                  className="sm"
                />
                <GlobalButton
                  text={
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Play Store"
                      className="h-5"
                    />
                  }
                  link="#"
                  variant="dark"
                  showArrow={false}
                  showShine={false}
                  className="sm"
                />
              </motion.div>
            </motion.div>

            {/* Right Side: Refined Premium Mobile Interface */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex justify-center items-center py-6"
            >
              {/* Decorative Glow */}
              <div className="absolute -z-10 w-[110%] h-[110%] bg-gradient-to-tr from-[#3E7D72]/15 via-transparent to-teal-50/20 rounded-full blur-3xl opacity-50 animate-pulse" />

              {/* Refined IPhone Frame (v2: Smaller & More Curved) */}
              <div className="relative w-[250px] h-[520px] md:w-[270px] md:h-[560px] bg-zinc-950 rounded-[3.5rem] p-[10px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] border-[6px] border-zinc-900 ring-1 ring-white/5 flex flex-col items-center">
                {/* Modern Dynamic Island Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 flex justify-center items-center shadow-inner">
                  <div className="w-1.5 h-1.5 bg-[#0a0a0a] rounded-full absolute right-4 ring-1 ring-white/5" />
                  <div className="w-1 h-1 bg-zinc-900 rounded-full mr-2" />
                </div>

                {/* Internal Screen Container */}
                <div className="relative w-full h-full bg-zinc-50 rounded-[2.8rem] overflow-hidden group shadow-inner">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentIndex}
                      src={screenshots[currentIndex]}
                      initial={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
                      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                      alt={`Screenshot ${currentIndex + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Sleeker Status Bar Overlay */}
                  <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-black/20 to-transparent flex items-end justify-between px-8 text-[9px] font-bold text-white z-10 pb-2">
                    <span className="opacity-90">9:41</span>
                    <div className="flex gap-1.5 items-center opacity-90">
                      <div className="w-4 h-2 rounded-[2px] border border-white/40 relative">
                        <div className="absolute inset-[1px] bg-white rounded-[1px] w-[80%]" />
                      </div>
                      <div className="w-2 h-2 rounded-full bg-white/40" />
                    </div>
                  </div>

                  {/* Minimal Carousel Indicators */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                    {screenshots.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`transition-all duration-500 rounded-full h-1.5 ${
                          i === currentIndex
                            ? "bg-[#3E7D72] w-6"
                            : "bg-white/40 hover:bg-white/60 w-1.5"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Subtle Side Buttons */}
                <div className="absolute -left-[6px] top-28 w-[2px] h-10 bg-zinc-800 rounded-l-full shadow-sm" />
                <div className="absolute -left-[6px] top-42 w-[2px] h-14 bg-zinc-800 rounded-l-full shadow-sm" />
                <div className="absolute -right-[6px] top-36 w-[2px] h-14 bg-zinc-800 rounded-r-full shadow-sm" />
              </div>

              {/* Refined Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 },
                }}
                className="absolute -top-2 -right-4 md:right-0 bg-white/95 backdrop-blur-md p-3 px-4 rounded-2xl shadow-2xl border border-white/20 z-30 flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-[#3E7D72] to-[#2d5c53] rounded-full flex items-center justify-center text-white shadow-lg">
                  <MobileIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold text-[#3E7D72] uppercase tracking-[0.1em] leading-tight">
                    Live
                  </p>
                  <p className="text-xs font-bold text-slate-900">Modern App</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeApp;
