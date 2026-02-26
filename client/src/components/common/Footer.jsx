import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  // Handle visibility of "Back to Top" button
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 500);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white text-gray-600 border-t border-gray-100 overflow-hidden">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-primary text-white rounded-full shadow-2xl transition-all duration-500 z-50 hover:-translate-y-2 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} />
      </button>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo - Bigger as requested */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="transition-transform hover:scale-105 duration-300">
              <img
                src="/logo.jpeg"
                alt="Better Health Project Logo"
                loading="lazy"
                className="h-24 w-auto rounded object-contain"
              />
            </Link>
            <p className="text-gray-500 leading-relaxed text-center md:text-left max-w-sm">
              Empowering families to lead healthier, happier lives through expert coaching and sustainable wellness practices.
            </p>
          </div>

          {/* Essential Links Only */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link to="/privacy-policy" className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/terms-and-conditions" className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors">
              Terms
            </Link>
            <Link to="/faq" className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/ebooks" className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors">
              E-books
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] text-gray-400 font-medium">
            © {currentYear} Better Health Project. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mr-2">Download App:</span>
            <div className="flex gap-3">
              <a href="#" className="hover:translate-y-[-3px] transition-transform duration-300">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="App Store" 
                  className="h-8 w-auto" 
                />
              </a>
              <a href="#" className="hover:translate-y-[-3px] transition-transform duration-300">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Play Store" 
                  className="h-8 w-auto" 
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
