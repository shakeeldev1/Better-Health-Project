import React, { useEffect } from "react";
import FAQAccordion from "../components/faq/FAQAccordion";
import HomeCTA from "../components/home/HomeCTA";
const FAQ = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Simple FAQ Header */}
      <div className="pt-6 md:pt-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-4">
            Frequently Asked <span className="text-[#3E7D72]">Questions</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Find answers to common questions about our coaching programs and how
            we can help you achieve your health goals.
          </p>
        </div>
      </div>

      <FAQAccordion />
      <HomeCTA />
    </div>
  );
};

export default FAQ;
