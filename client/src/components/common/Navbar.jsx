import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import GlobalButton from "./GlobalButton";
import { navItems } from "../../data/commonData";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
    <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* Background Gradient Overlay for Transparency */}
      <div 
        className={`absolute inset-0 h-24 bg-gradient-to-b from-black/50 to-transparent transition-opacity duration-500 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`} 
      />

      <motion.nav
        className={`w-full pointer-events-auto transition-all duration-500 py-2 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100" 
            : "bg-transparent border-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={scrollToTop} 
            className="flex-shrink-0 relative h-16 flex items-center min-w-[150px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              {!isHovered ? (
                <motion.img
                  key="logo-img"
                  src="/bettet health project.png"
                  alt="Better Health Project"
                  className={`h-12 sm:h-14 lg:h-16 w-auto object-contain transition-all duration-500 my-[-8px] sm:my-[-12px] lg:my-[-16px] ${
                    !isScrolled && "brightness-0 invert"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <motion.div
                  key="logo-text"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className={`text-xl sm:text-2xl font-black tracking-tighter uppercase italic ${
                    isScrolled ? "text-primary" : "text-white"
                  }`}
                  transition={{ duration: 0.3 }}
                >
                  Better <span className={isScrolled ? "text-gray-900" : "text-white/80"}>Health</span>
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-1">
              {navItems.filter(item => item.label !== 'Contact').map(({ label, to }) => {
                const isActive = location.pathname === to;
                return (
                  <Link
                    key={label}
                    to={to}
                    onClick={() => handleNavClick(to)}
                    className={`relative px-4 py-2 group text-base font-semibold transition-all duration-300 ${
                      isActive 
                        ? (isScrolled ? "text-primary" : "text-white") 
                        : (isScrolled ? "text-gray-700 hover:text-primary" : "text-white/80 hover:text-white")
                    }`}
                  >
                    <span className="relative z-10">{label}</span>
                    
                    {/* Active Underline (Expands from center) */}
                    {isActive && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)] ${
                          isScrolled ? "bg-primary shadow-primary/40" : "bg-white shadow-white/50"
                        }`}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Hover Underline (Before/After effect) */}
                    {!isActive && (
                      <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full ${
                        isScrolled ? "bg-primary/40" : "bg-white/40"
                      }`} />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Side - Contact Now & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop Contact Now Button */}
            <div className="hidden lg:block">
              <GlobalButton 
                text="Contact Now"
                link="/contact"
                variant={isScrolled ? "primary" : "outline"}
                className="py-2 px-5 text-sm rounded-full"
                showShine={!isScrolled}
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2.5 transition-all rounded-xl border ${
                isScrolled 
                  ? "bg-white/50 hover:bg-white border-white/50" 
                  : "bg-white/10 hover:bg-white/20 border-white/20"
              }`}
            >
              {menuOpen 
                ? <FaTimes size={20} className={isScrolled ? "text-primary" : "text-white"} /> 
                : <FaBars size={20} className={isScrolled ? "text-gray-700" : "text-white"} />
              }
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
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[55] pointer-events-auto lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white/90 backdrop-blur-2xl p-8 shadow-2xl border-l border-gray-100 z-[60] lg:hidden pointer-events-auto overflow-hidden flex flex-col"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2.5 bg-gray-100 hover:bg-gray-200 transition-all rounded-xl border border-gray-200"
                >
                  <FaTimes size={20} className="text-gray-700" />
                </button>
              </div>

              <div className="relative z-10 space-y-4">
                <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-6 opacity-60 px-4">Menu</p>
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
