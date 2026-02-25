import { useState } from 'react';
import { ChevronDown, ClipboardList, Dumbbell, Users, Smartphone, HelpCircle, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs, faqAccordionData as data } from '../../data/faqData';
import GlobalHeading from '../common/GlobalHeading';
import GlobalButton from '../common/GlobalButton';

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
      { id: 2, ...faqs[5] },
      { id: 3, ...faqs[10] },
    ],
    coaching: [
      { id: 4, ...faqs[2] },
      { id: 5, ...faqs[3] },
      { id: 6, ...faqs[6] },
      { id: 7, ...faqs[7] },
    ],
    family: [
      { id: 8, ...faqs[1] },
      { id: 9, ...faqs[4] },
      { id: 10, ...faqs[8] },
    ],
    app: [
      { id: 11, ...faqs[9] },
      { id: 12, ...faqs[7] },
      { id: 13, ...faqs[8] },
    ],
  };

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  // Keyboard navigation support
  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFAQ(id);
    }
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
            role="tablist"
            aria-label="FAQ categories"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <motion.div
                  key={category.id}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                >
                  <button 
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${category.id}`}
                    id={`tab-${category.id}`}
                    className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#3E7D72] text-white shadow-lg' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setOpenFAQ(null);
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <Icon size={16} />
                      {category.name}
                    </span>
                  </button>
                </motion.div>
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
                id={`panel-${activeCategory}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeCategory}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {faqData[activeCategory].map((faq, index) => (
                  <div
                    key={faq.id}
                    className={`border-b border-gray-100 last:border-b-0 transition-all duration-300 ${
                      openFAQ === faq.id ? 'bg-primary/5' : 'bg-white hover:bg-gray-50'
                    }`}
                    role="region"
                    aria-label={faq.question}
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      onKeyDown={(e) => handleKeyDown(e, faq.id)}
                      className="w-full px-6 md:px-10 py-6 flex items-center justify-between text-left transition-all duration-300 focus:outline-none focus:bg-primary/5"
                      aria-expanded={openFAQ === faq.id}
                      aria-controls={`faq-answer-${faq.id}`}
                      id={`faq-question-${faq.id}`}
                    >
                      <span className={`font-bold text-base md:text-lg pr-4 transition-colors duration-300 ${
                        openFAQ === faq.id ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                        aria-hidden="true"
                      >
                        <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${
                          openFAQ === faq.id ? 'text-primary' : 'text-gray-400'
                        }`} />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {openFAQ === faq.id && (
                        <motion.div
                          id={`faq-answer-${faq.id}`}
                          role="region"
                          aria-labelledby={`faq-question-${faq.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-6 md:px-10 pb-8 text-gray-700 text-sm md:text-base leading-relaxed">
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