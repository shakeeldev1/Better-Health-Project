import React, { useEffect } from 'react';
import FAQSwiper from '../components/faq/FAQSwiper';
import FAQAccordion from '../components/faq/FAQAccordion';
import FAQCTA from '../components/faq/FAQCTA';

const FAQ = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <FAQSwiper />
      <FAQAccordion />
      <FAQCTA />
    </div>
  );
};

export default FAQ;
