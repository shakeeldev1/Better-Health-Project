import React from 'react';
import { motion } from 'framer-motion';
import GlobalHeading from '../common/GlobalHeading';

import { 
  Send, 
  User, 
  Mail, 
  MessageSquare, 
  FileText, 
  MapPin, 
  Phone, 
  HelpCircle, 
  Download, 
  History,
  ChevronDown
} from 'lucide-react'; // Exporting all necessary icons for children
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

// --- Framer Motion Variants ---

// 1. Container variants for the entire section (fade in from below)
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2, // Stagger the two main columns
    },
  },
};

// 2. Variants for the main columns (Form and Info)
const columnVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// 3. Variants for staggered items (used for the header/text)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};


const GetInTouch = () => {
  return (
    <motion.div 
      id="contact-form"
      className="w-full bg-gray-50 flex items-center justify-center overflow-hidden"
      style={{ minHeight: 'calc(100vh - 4rem)' }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <GlobalHeading 
          badge="Contact"
          title="Get in"
          highlightText="Touch"
          description="Have a question about coaching, family programs, or where to start? We’re here to help."
          className="mb-10"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* LEFT COLUMN: Contact Form */}
          <motion.div 
            className="w-full"
            variants={columnVariants} // Column entrance animation
          >
            <ContactForm 
              // Passing down necessary icons/props, though the form itself defines most logic
              Icon={Send} 
              UserIcon={User} 
              MailIcon={Mail} 
              FileTextIcon={FileText}
              ChevronDownIcon={ChevronDown}
              HelpCircleIcon={HelpCircle}
              MessageSquareIcon={MessageSquare}
            />
          </motion.div>

          {/* RIGHT COLUMN: Contact Info */}
          <motion.div 
            className="w-full flex flex-col gap-4"
            variants={columnVariants} // Column entrance animation
          >
            <ContactInfo 
              MapPinIcon={MapPin} 
              PhoneIcon={Phone} 
              MailIcon={Mail} 
              DownloadIcon={Download} 
              HistoryIcon={History} 
              HelpCircleIcon={HelpCircle} 
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default GetInTouch;