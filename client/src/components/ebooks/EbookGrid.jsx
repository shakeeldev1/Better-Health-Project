import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, CheckCircle2 } from 'lucide-react';
import { ebooks, ebookGridData as data } from '../../data/ebookData';
import GlobalHeading from '../common/GlobalHeading';

const EbookGrid = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title using GlobalHeading */}
        <GlobalHeading 
          badge={data.badge}
          title={data.title}
          highlightText={data.highlightText}
          description={data.description}
          center={true}
          className="mb-12"
        />

        {/* Ebooks Grid */}
        <div className="flex justify-center">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {ebooks.map((ebook) => (
              <motion.div 
                key={ebook.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 hover:border-primary/20 flex flex-col group h-[430px]"
                variants={cardVariants}
              >
                {/* Ebook Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={ebook.image}
                    alt={ebook.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    <span className="bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
                      {ebook.price}
                    </span>
                  </div>
                </div>

                {/* Ebook Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-gray-900 mb-1.5 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                    {ebook.title}
                  </h3>

                  <p className="text-[11px] leading-relaxed text-gray-600 mb-2.5 line-clamp-2">
                    {ebook.description}
                  </p>

                  {/* Features/Who it's for */}
                  <div className="space-y-1 mb-3 flex-grow">
                    {ebook.whoItIsFor.slice(0, 3).map((item, index) => (
                      <div key={index} className="flex items-start gap-1.5 text-[11px] text-gray-600">
                        <CheckCircle2 className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-white py-2 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 text-xs"
                  >
                    <ShoppingCart size={14} />
                    Buy Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EbookGrid;