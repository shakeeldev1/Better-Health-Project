import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ShoppingCart } from 'lucide-react';
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
    <div className="min-h-screen w-full bg-white py-16 px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 flex flex-col group h-[450px] relative"
                variants={cardVariants}
                whileHover={{ y: -10 }}
              >
                {/* Ebook Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={ebook.image}
                    alt={ebook.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/90 backdrop-blur-md text-primary text-xs font-black px-4 py-2 rounded-2xl shadow-xl border border-white/50"
                    >
                      {ebook.price}
                    </motion.div>
                  </div>
                </div>

                {/* Ebook Content */}
                <div className="p-6 flex flex-col flex-grow relative bg-white">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1 pr-10">
                    {ebook.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-gray-500 mb-4 line-clamp-2">
                    {ebook.description}
                  </p>

                  {/* Features/Who it's for */}
                  <div className="space-y-2 mb-6 flex-grow">
                    {ebook.whoItIsFor.slice(0, 3).map((item, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs text-gray-600 group/item">
                        <CheckCircle2 className="w-4 h-4 text-primary/40 group-hover/item:text-primary transition-colors duration-300 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1 group-hover/item:text-gray-900 transition-colors duration-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Info Badge & Buy Button */}
                  <div className="mt-auto">
                    <Link 
                      to="/booking"
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#3E7D72] text-white rounded-2xl font-bold hover:bg-[#2f5f56] transition-all duration-500"
                    >
                      <ShoppingCart size={16} />
                      Buy Now
                    </Link>
                  </div>
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