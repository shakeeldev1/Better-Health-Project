import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { navItems } from "../../data/commonData";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Special styling page: highlight Family Coaching similarly to previous vision-mission page
  const isFamilyCoachingPage = location.pathname === '/family-coaching';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (to) => {
    setMenuOpen(false);
    setActiveDropdown(null);
    if (location.pathname === to) {
      scrollToTop();
    } else {
      navigate(to);
      setTimeout(scrollToTop, 100);
    }
  };

  const handleLoginClick = () => {
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* Main Navigation Bar */}
      <div
        className={`relative transition-all duration-500 bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/10 py-3 text-black leading-relaxed`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo - Left */}
          <div className="w-1/4 flex justify-start">
            <Link to="/" onClick={scrollToTop} className="flex items-center">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src="/assets/bhp-logo.png"
                  alt="Better Health Project logo"
                  className={`transition-all duration-500 h-10 w-auto`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex flex-1 justify-center items-center space-x-2">
            {navItems.map(({ label, to }, index) => (
              <motion.div
                key={label}
                className="relative group"
                custom={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                onHoverStart={() => setActiveDropdown(label)}
                onHoverEnd={() => setActiveDropdown(null)}
              >
                <Link
                  to={to}
                  onClick={() => handleNavClick(to)}
                  className={`px-4 py-2 rounded-xl text-[15px] font-semibold transition-all duration-300 flex flex-col items-center justify-center text-center whitespace-nowrap relative group ${
                    location.pathname === to
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "text-gray-600 hover:bg-gray-100 hover:text-primary"
                  }`}
                >
                  {label}
                  {/* Bottom Line Indicator - Inside the background div */}
                  <motion.div
                    className={`absolute bottom-1.5 left-1/2 h-0.5 rounded-full transition-all duration-300 -translate-x-1/2 ${
                      location.pathname === to 
                        ? "w-1/3 bg-white/80" 
                        : "w-0 group-hover:w-1/3 bg-primary/80"
                    }`}
                    layoutId="navUnderline"
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Login & Mobile Menu - Right */}
          <div className="w-1/4 flex justify-end items-center">
            {/* Desktop Login Button */}
            <div className="hidden lg:block">
              <motion.button
                onClick={handleLoginClick}
                className="px-6 py-2 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-xl shadow-black/10 text-sm whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Client Portal
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 text-gray-600 hover:text-primary transition-colors"
              >
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] lg:hidden overflow-y-auto"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-12">
                <img
                  src="/assets/bhp-logo.png"
                  alt="Logo"
                  className="h-8 w-auto"
                />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-gray-600"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              <div className="space-y-4 flex-grow">
                {navItems.map(({ label, to }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={to}
                      onClick={() => handleNavClick(to)}
                      className={`block px-4 py-4 rounded-2xl text-xl font-bold ${
                        location.pathname === to
                          ? "bg-primary text-white shadow-xl shadow-primary/20"
                          : "text-gray-800 hover:bg-gray-50"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <button
                  onClick={handleLoginClick}
                  className="w-full py-4 bg-black text-white rounded-2xl text-lg font-bold shadow-2xl"
                >
                  Client Portal
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
