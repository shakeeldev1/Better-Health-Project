import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { footerQuickLinks, footerContactInfo, footerSocialLinks } from "../../data/commonData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div className="space-y-4">
          <Link to="/" className="inline-block">
            <img
              src="/assets/bhp-logo.png"
              alt="Better Health Project Logo"
              loading="lazy"
              className="h-10 w-auto brightness-0 invert"
            />
          </Link>
          <p className="text-gray-400 leading-relaxed text-sm">
            Empowering families to lead healthier, happier lives through expert coaching and sustainable wellness practices.
          </p>
          <div className="flex gap-3">
            {footerSocialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5 border-l-4 border-primary pl-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {footerQuickLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group text-sm"
                >
                  <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-3"></span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5 border-l-4 border-primary pl-3">
            Contact Us
          </h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
              <span>{footerContactInfo.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-primary flex-shrink-0" />
              <a href={footerContactInfo.phoneHref} className="hover:text-primary transition-colors">
                {footerContactInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-primary flex-shrink-0" />
              <a href={footerContactInfo.emailHref} className="hover:text-primary transition-colors">
                {footerContactInfo.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter & App Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5 border-l-4 border-primary pl-3">
            Newsletter
          </h3>
          <p className="text-gray-400 mb-3 text-sm">
            Subscribe for health tips and updates.
          </p>
          <form className="flex flex-col gap-2 mb-6">
            <input 
              placeholder="Email address" 
              className="bg-gray-800 border-none rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
            />
            <button className="bg-primary hover:bg-primary/90 text-primary-dark font-bold py-2 rounded-lg text-sm transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Better Health Project. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
