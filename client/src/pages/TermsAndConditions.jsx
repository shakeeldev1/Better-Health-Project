import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Activity, AlertCircle, User, CreditCard, RefreshCw, Scale, Edit3, HelpCircle } from "lucide-react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <Activity className="w-6 h-6 text-primary" />,
      title: "Services Provided",
      content: "Better Health Project provides health coaching, educational content, and digital tools designed for lifestyle improvement. All services are for informational and educational purposes only."
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-red-500" />,
      title: "Not Medical Advice",
      content: (
        <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
          <p className="text-red-700 font-medium mb-2">Crucial Notice:</p>
          <p className="text-red-600/80 text-sm leading-relaxed">
            Our services do not replace professional medical advice. Always consult a qualified healthcare professional before making changes to your diet, exercise, or lifestyle.
          </p>
        </div>
      )
    },
    {
      icon: <User className="w-6 h-6 text-primary" />,
      title: "User Responsibilities",
      content: (
        <ul className="space-y-3">
          {[
            "Provide accurate and honest information",
            "Use services responsibly and lawfully",
            "Follow guidance at your own discretion",
            "Take full responsibility for health decisions"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                <Scale className="w-3 h-3 text-primary" />
              </div>
              {item}
            </li>
          ))}
        </ul>
      )
    },
    {
      icon: <CreditCard className="w-6 h-6 text-primary" />,
      title: "Payments & Access",
      content: "Pricing is transparently provided before purchase. Access to digital products and coaching programs is non-transferable and limited to active subscriptions."
    }
  ];

  return (
    <div className="bg-white pt-16 pb-20">
      {/* Header with Background Pattern */}
      <div className="relative bg-gray-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid-terms" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-terms)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-primary-light px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <FileText className="w-4 h-4" />
              Agreement
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Terms & <span className="text-primary">Conditions</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Please read these terms carefully before using our platform. They outline our commitment to you and your responsibilities as a user.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                {section.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
              <div className="text-sm text-gray-600 leading-relaxed flex-grow">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Content Sections */}
        <div className="mt-20 max-w-4xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <RefreshCw className="w-5 h-5" />
                <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">Refunds</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Refund policies vary by service and are clearly outlined at checkout. Digital downloads are generally non-refundable due to their nature.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Edit3 className="w-5 h-5" />
                <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">IP Rights</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                All coaching materials and branding are the intellectual property of Better Health Project. Unauthorized reproduction is strictly prohibited.
              </p>
            </div>
          </motion.div>

          <div className="bg-primary-muted/30 rounded-[3rem] p-10 md:p-16 text-center border border-primary/10">
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-black text-gray-900 mb-4">Need Clarification?</h2>
            <p className="text-gray-600 mb-10 max-w-lg mx-auto">
              If any part of these terms is unclear, please reach out to our support team for a detailed explanation.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-black transition-all hover:scale-105 shadow-xl"
            >
              Email Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
