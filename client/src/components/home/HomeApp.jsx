import React from 'react';
import { motion } from 'framer-motion';
import { Check, Smartphone, Zap, ShieldCheck, Target } from 'lucide-react';
import GlobalHeading from '../common/GlobalHeading';
import GlobalButton from '../common/GlobalButton';
import { homeAppFeatures as features, homeAppData as data } from '../../data/homeData';
// import img7 from "/1.jpg"

const HomeApp = () => {
  // Your original animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const featureIcons = [
    <Smartphone className="w-5 h-5" />,
    <ShieldCheck className="w-5 h-5" />,
    <Target className="w-5 h-5" />,
    <Zap className="w-5 h-5" />,
    <Check className="w-5 h-5" />
  ];

  return (
    <section className="py-10 md:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-50 via-white to-teal-50/30 rounded-[2rem] p-6 md:p-8 lg:p-10 relative overflow-hidden border border-slate-100">
          
          {/* Decorative background pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid-app" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
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

              <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                <GlobalButton 
                  text={<img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-5" />}
                  link="#"
                  variant="dark"
                  showArrow={false}
                  showShine={false}
                  className="sm"
                />
                <GlobalButton 
                  text={<img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-5" />}
                  link="#"
                  variant="dark"
                  showArrow={false}
                  showShine={false}
                  className="sm"
                />
              </motion.div>
            </motion.div>

            {/* Right Side: Improved clean image card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative flex justify-center items-center"
            >
              {/* Image Card Container */}
              <div className="relative group rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img 
                  src="https://ebooks.ebtonline.au/wp-content/uploads/2025/11/The-Cunnies-Collection-.webp" 
                  alt="Application View" 
                  className="w-full h-full object-cover max-h-[500px] transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Subtle overlay effect on hover */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Floating glow effects behind the image */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -z-10 w-64 h-64 bg-teal-200 rounded-full blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
              />
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeApp;