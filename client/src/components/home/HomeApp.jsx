import React from 'react';
import { motion } from 'framer-motion';
import { Check, Smartphone, Zap, ShieldCheck, Target } from 'lucide-react';
import GlobalHeading from '../common/GlobalHeading';
import { homeAppFeatures as features, homeAppData as data } from '../../data/homeData';

const HomeApp = () => {
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

  // Feature icons mapping for more visual interest
  const featureIcons = [
    <Smartphone className="w-5 h-5" />,
    <ShieldCheck className="w-5 h-5" />,
    <Target className="w-5 h-5" />,
    <Zap className="w-5 h-5" />,
    <Check className="w-5 h-5" />
  ];

  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-muted/30 rounded-[2rem] p-5 md:p-8 lg:p-10 relative overflow-hidden border border-primary/5">
          {/* Decorative subtle background pattern */}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center relative z-10">
            {/* Content Left */}
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="flex items-center gap-2.5 bg-white p-2.5 rounded-lg shadow-sm border border-primary/5 hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                      {featureIcons[index] || <Check className="w-4 h-4" />}
                    </div>
                    <span className="text-xs md:text-sm text-gray-700 font-semibold">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5">
                <a href="#" className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-4" />
                </a>
                <a href="#" className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-4" />
                </a>
              </motion.div>
            </motion.div>

            {/* Mockup Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-center"
            >
              {/* Main Phone Mockup */}
              <div className="relative z-10 w-[180px] md:w-[210px] aspect-[9/19] bg-gray-900 rounded-[1.75rem] p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] border-[4px] border-gray-800">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-800 rounded-b-lg z-20" />
                
                <div className="w-full h-full rounded-[1.4rem] overflow-hidden bg-white">
                   <img 
                     src={data.image} 
                     alt="App Interface"
                     className="w-full h-full object-cover"
                   />
                </div>
              </div>

              {/* Decorative Floating Elements */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" 
              />
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeApp;
