import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { navItems } from "../../data/commonData";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (to) => {
    setMenuOpen(false);
    if (location.pathname === to) {
      scrollToTop();
    } else {
      navigate(to);
      setTimeout(scrollToTop, 100);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-4 pointer-events-none">
      <motion.nav
        className={`mx-auto max-w-7xl pointer-events-auto transition-all duration-500 rounded-2xl border border-white/20 shadow-2xl py-2 ${
          isScrolled 
            ? "bg-white/70 backdrop-blur-xl" 
            : "bg-white/40 backdrop-blur-md"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex-shrink-0">
            <motion.img
              src="/bettet health project.png"
              alt="Better Health Project"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-all duration-500 my-[-8px] sm:my-[-12px] lg:my-[-16px]"
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          {/* Desktop Navigation & Mobile Toggle - Right Side */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map(({ label, to }) => {
                const isActive = location.pathname === to;
                return (
                  <Link
                    key={label}
                    to={to}
                    onClick={() => handleNavClick(to)}
                    className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isActive 
                        ? "text-primary" 
                        : "text-gray-700 hover:text-primary hover:bg-white/50"
                    }`}
                  >
                    <span className="relative z-10">{label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="navActiveIndicator"
                        className="absolute inset-0 bg-white shadow-sm rounded-xl -z-0"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2.5 bg-white/50 hover:bg-white transition-all rounded-xl border border-white/50"
            >
              {menuOpen ? <FaTimes size={20} className="text-primary" /> : <FaBars size={20} className="text-gray-700" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Professional Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-[-1] pointer-events-auto lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-24 left-4 right-4 bg-white/90 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white z-[60] lg:hidden pointer-events-auto overflow-hidden"
            >
              <div className="relative z-10 space-y-2">
                <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4 opacity-60 px-4">Menu</p>
                {navItems.map(({ label, to }) => (
                  <Link
                    key={label}
                    to={to}
                    onClick={() => handleNavClick(to)}
                    className={`flex items-center justify-between px-6 py-4 rounded-2xl text-lg font-bold transition-all ${
                      location.pathname === to
                        ? "bg-primary text-white shadow-xl shadow-primary/20"
                        : "text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {label}
                    <FaArrowRight className={`text-sm ${location.pathname === to ? "opacity-100" : "opacity-20"}`} />
                  </Link>
                ))}
              </div>
              
              {/* Decorative background element for mobile menu */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
