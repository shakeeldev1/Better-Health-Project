import React from 'react';
import { motion } from 'framer-motion';
import { Check, Smartphone, Zap, ShieldCheck, Target, MessageCircle, Layout, BarChart3 } from 'lucide-react';
import GlobalHeading from '../common/GlobalHeading';
import GlobalButton from '../common/GlobalButton';
import { homeAppFeatures as features, homeAppData as data } from '../../data/homeData';
import img8 from "../../../public/pocket.jpg"
import img7 from "../../../public/3.jpg"
import img2 from "../../../public/exp.jpg"

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

  // App features as cards
  const appFeatures = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Expert Consultation",
      description: "Deep dive into your goals and lifestyle to build a solid foundation.",
      image: img8
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Personalised Planning",
      description: "Custom nutrition and training strategy built specifically for you.",
      image: img7
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Engaging Community",
      description: "Daily habit tracking and direct support via our dedicated app.",
      image: img2
    }
  ];

  return (
    <section className="py-10 md:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-50 via-white to-teal-50/30 rounded-[2rem] p-6 md:p-8 lg:p-10 relative overflow-hidden border border-slate-100">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    whileHover={{ 
                      y: -3,
                      scale: 1.02,
                    }}
                    className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:border-[#3E7D72]/30 hover:shadow-md transition-all duration-300 group cursor-default"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#3E7D72]/10 flex items-center justify-center text-[#3E7D72] group-hover:bg-[#3E7D72] group-hover:text-white transition-colors duration-300">
                      {featureIcons[index] || <Check className="w-4 h-4" />}
                    </div>
                    <span className="text-xs md:text-sm text-gray-700 font-semibold group-hover:text-[#3E7D72] transition-colors duration-300">{feature}</span>
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

            {/* App Features as Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-1 gap-4">
                {appFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${feature.image})` }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                    
                    {/* Content */}
                    <div className="relative p-5 md:p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-1">{feature.title}</h3>
                        <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Floating Elements */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-[#3E7D72]/10 rounded-full blur-2xl -z-10" 
              />
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#3E7D72]/10 rounded-full blur-2xl -z-10" 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeApp;
