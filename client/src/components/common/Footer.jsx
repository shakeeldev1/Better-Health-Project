import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp, FaChevronRight } from "react-icons/fa";
import GlobalButton from "./GlobalButton";
import { footerQuickLinks, footerContactInfo, footerSocialLinks } from "../../data/commonData";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

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

  const handleNewsletter = (e) => {
    e.preventDefault();
    // Logic for newsletter signup
    console.log("Signed up with:", email);
    setEmail("");
    alert("Thank you for joining!");
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

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block transition-transform hover:scale-105 duration-300">
              <img
                src="/logo.jpeg"
                alt="Better Health Project Logo"
                loading="lazy"
                className="h-20 w-25 rounded object-cover"
              />
            </Link>
            <p className="text-gray-500 leading-relaxed text-[15px] max-w-sm">
              Empowering families to lead healthier, happier lives through expert coaching and sustainable wellness practices. Join our community of over 5,000+ members.
            </p>
            <div className="flex gap-4">
              {footerSocialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:text-white hover:bg-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-900 mb-6">
              Platform
            </h3>
            <ul className="space-y-4">
              {footerQuickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="group text-[14px] text-gray-500 hover:text-primary transition-colors duration-300 flex items-center gap-2 font-medium"
                  >
                    <FaChevronRight size={10} className="text-primary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-900 mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-5 text-[14px]">
              <li className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-primary/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FaMapMarkerAlt size={14} />
                </div>
                <span className="text-gray-500 leading-snug">{footerContactInfo.address}</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 bg-primary/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FaPhone size={14} />
                </div>
                <a href={footerContactInfo.phoneHref} className="hover:text-primary transition-colors font-semibold text-gray-700">
                  {footerContactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 bg-primary/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FaEnvelope size={14} />
                </div>
                <a href={footerContactInfo.emailHref} className="hover:text-primary transition-colors font-semibold text-gray-700">
                  {footerContactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-900 mb-6">
              Weekly Health Tips
            </h3>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 ring-1 ring-black/5">
              <p className="text-sm text-gray-500 mb-4">
                No spam, just science-backed wellness advice.
              </p>
              <form onSubmit={handleNewsletter} className="space-y-3">
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email" 
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm"
                />
                <GlobalButton 
                  text="Join Now"
                  showArrow={false}
                  className="w-full rounded-xl py-3 shadow-md shadow-primary/20" 
                />
              </form>
            </div>
          </div>
        </div>

        {/* Apps & Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <p className="text-[13px] text-gray-400 font-medium">
              © {currentYear} Better Health Project. All rights reserved.
            </p>
            <div className="flex gap-6 text-[13px] font-semibold text-gray-500">
              <Link to="/privacy-policy" className="hover:text-primary underline-offset-4 hover:underline transition-all">Privacy</Link>
              <Link to="/terms-and-conditions" className="hover:text-primary underline-offset-4 hover:underline transition-all">Terms</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mr-2 hidden sm:inline">Download App:</span>
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