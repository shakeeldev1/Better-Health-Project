import React from 'react';
import { motion } from 'framer-motion';
import { Check, Smartphone, Zap, ShieldCheck, Target } from 'lucide-react';
import GlobalHeading from '../common/GlobalHeading';
import GlobalButton from '../common/GlobalButton';
import CarouselSection from './CarouselSection';
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
                    whileHover={{ 
                      y: -5,
                      scale: 1.02,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)"
                    }}
                    className="flex items-center gap-2.5 bg-white p-3 rounded-xl shadow-sm border border-primary/5 hover:border-primary/20 transition-all duration-300 group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.2 }}
                        className="flex items-center justify-center"
                      >
                        {featureIcons[index] || <Check className="w-5 h-5" />}
                      </motion.div>
                    </div>
                    <span className="text-xs md:text-sm text-gray-700 font-bold group-hover:text-primary transition-colors duration-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5">
                <GlobalButton 
                  text={<img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-4" />}
                  link="#"
                  variant="dark"
                  showArrow={false}
                  showShine={false}
                  className="sm"
                />
                <GlobalButton 
                  text={<img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-4" />}
                  link="#"
                  variant="dark"
                  showArrow={false}
                  showShine={false}
                  className="sm"
                />
              </motion.div>
            </motion.div>

            {/* Carousel Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-center w-full"
            >
              <div className="w-full max-w-md scale-90 md:scale-100">
                <CarouselSection showHeader={false} />
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
