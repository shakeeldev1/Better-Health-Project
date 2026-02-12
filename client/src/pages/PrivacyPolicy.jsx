import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, Share2, Cookie, UserCheck, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <Eye className="w-6 h-6 text-primary" />,
      title: "Information We Collect",
      content: (
        <>
          <p className="mb-4 text-gray-600">We may collect the following information:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Personal details (name, email)",
              "Contact form submissions",
              "Coaching enquiry details",
              "App usage & interaction data",
              "Technical device data",
              "Browser & IP information"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-600 bg-primary-muted/30 p-2 rounded-lg border border-primary/5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </>
      )
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "How We Use Your Information",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Your data helps us provide better services, respond to your enquiries, and improve your overall experience with our coaching tools and app.</p>
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 italic text-sm text-gray-500">
            "We do not sell or misuse your personal data. Your trust is our priority."
          </div>
        </div>
      )
    },
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      title: "Data Storage & Security",
      content: (
        <p className="text-gray-600">
          We implement industry-standard technical and organizational measures to ensure your data is stored securely and accessed only by authorized personnel.
        </p>
      )
    },
    {
      icon: <Cookie className="w-6 h-6 text-primary" />,
      title: "Cookies",
      content: (
        <p className="text-gray-600">
          Our website uses essential cookies to improve performance and understand user behavior. You can manage these through your browser settings at any time.
        </p>
      )
    }
  ];

  return (
    <div className="bg-gray-50/50 pt-16 pb-20">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-100 mb-12 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-primary-muted text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Shield className="w-3 h-3" />
              Legal & Privacy
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Better Health Project, we value your trust. This policy outlines how we handle your personal data with transparency and care.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {sections.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-muted rounded-2xl flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <div className="prose prose-sm max-w-none">
                  {section.content}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Sidebar / Contact Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-primary rounded-[2rem] p-8 text-white shadow-xl shadow-primary/20 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Questions?</h3>
                  <p className="text-primary-light mb-6 text-sm">
                    If you have any questions about your data or this policy, our team is here to help.
                  </p>
                  <Link 
                    to="/contact" 
                    className="block w-full bg-white text-primary font-bold py-4 rounded-2xl text-center hover:bg-gray-50 transition-colors shadow-lg"
                  >
                    Contact Us
                  </Link>
                </div>
                {/* Decorative circle */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              </motion.div>

              <div className="p-6 bg-white rounded-2xl border border-gray-100 text-xs text-gray-400 leading-relaxed">
                Last updated: February 11, 2026. Better Health Project reserves the right to update this policy as needed.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
