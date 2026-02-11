import { useState } from 'react';
import { ChevronDown, ClipboardList, Dumbbell, Users, Smartphone, HelpCircle, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs, faqAccordionData as data } from '../../data/faqData';
import GlobalHeading from '../common/GlobalHeading';

const FAQAccordion = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFAQ, setOpenFAQ] = useState(null);

  const categories = [
    { id: 'general', name: 'General', icon: ClipboardList },
    { id: 'coaching', name: 'Coaching', icon: Dumbbell },
    { id: 'family', name: 'Family', icon: Users },
    { id: 'app', name: 'The App', icon: Smartphone },
  ];

  const faqData = {
    general: [
      { id: 1, ...faqs[0] },
      { id: 2, ...faqs[1] },
      { id: 6, ...faqs[5] },
      { id: 7, ...faqs[6] },
      { id: 11, ...faqs[10] },
    ],
    coaching: [
      { id: 3, ...faqs[2] },
      { id: 4, ...faqs[3] },
      { id: 8, ...faqs[7] },
      { id: 9, ...faqs[8] },
    ],
    family: [
      { id: 5, ...faqs[4] },
    ],
    app: [
      { id: 10, ...faqs[9] },
    ],
  };

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-20 pb-8 px-4">
        <GlobalHeading 
          badge={data.badge}
          title={data.title}
          highlightText={data.highlightText}
          description={data.description}
          center={true}
        />
      </div>

      {/* Category Filter Buttons */}
      <div className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { staggerChildren: 0.1, delayChildren: 0.4 } 
              },
            }}
            className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <motion.button
                  key={category.id}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setOpenFAQ(null);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm border border-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm md:text-base whitespace-nowrap">{category.name}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {faqData[activeCategory].map((faq) => (
                  <div
                    key={faq.id}
                    className={`border-b border-gray-100 last:border-b-0 transition-all duration-300 ${
                      openFAQ === faq.id ? 'bg-primary-muted/30' : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 md:px-10 py-6 flex items-center justify-between text-left transition-all duration-300"
                    >
                      <span className={`font-bold text-base md:text-lg pr-4 transition-colors duration-300 ${
                        openFAQ === faq.id ? 'text-primary' : 'text-gray-800'
                      }`}>
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${
                          openFAQ === faq.id ? 'text-primary' : 'text-gray-400'
                        }`} />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {openFAQ === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-6 md:px-10 pb-8 text-gray-600 text-sm md:text-base leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;