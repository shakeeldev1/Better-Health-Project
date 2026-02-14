import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import GlobalHeading from '../common/GlobalHeading';
import { homeAboutData as data } from '../../data/homeData';

const HomeAbout = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <GlobalHeading 
                badge={data.badge}
                title={data.title}
                highlightText={data.highlightText}
                description=""
                center={false}
                className="mb-6"
              />
            </motion.div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
              {data.paragraphs.map((paragraph, index) => (
                <motion.p 
                  key={index} 
                  variants={itemVariants}
                  className={index === 0 ? "font-semibold text-primary text-xl" : ""}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {data.points.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-primary-muted flex items-center justify-center group-hover:bg-primary transition-colors duration-300 shadow-sm">
                    <CheckCircle2 size={16} className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-primary transition-colors duration-300">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white"
            >
              <img 
                src={data.image} 
                alt="Healthier Lifestyle"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Decorative elements */}
            <motion.div 
              variants={floatingVariants}
              animate="animate"
              className="absolute -top-12 -right-12 w-48 h-48 bg-primary-muted rounded-full -z-0 opacity-60 blur-2xl" 
            />
            <motion.div 
              animate={{ 
                rotate: [12, -12, 12],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/5 rounded-[3rem] -z-0" 
            />
            
            {/* Additional floating accent */}
            <motion.div
              animate={{
                y: [0, 20, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 -left-8 w-12 h-12 bg-primary/20 rounded-xl rotate-45 -z-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
