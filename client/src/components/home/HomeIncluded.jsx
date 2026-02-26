import React from 'react';
import { motion } from 'framer-motion';
import GlobalHeading from '../common/GlobalHeading';
import GlobalCard1 from '../common/GlobalCard1';
import { homeIncludedItems as items, homeIncludedData as data } from '../../data/homeData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const HomeIncluded = () => {
  return (
    <motion.section 
      className="w-full bg-gradient-to-b from-[#F3F4F5] via-white to-[#F3F4F5] py-10 md:py-12 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <GlobalHeading 
          badge={data.badge}
          title={data.title}
          highlightText={data.highlightText}
          description={data.description}
          className="mb-8"
        />

        {/* Grid - Perfectly Square Uniform Cards */}
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4"
            variants={containerVariants}
          >
            {items.map((item, index) => (
              <GlobalCard1 
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                variants={cardItemVariants}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeIncluded;
