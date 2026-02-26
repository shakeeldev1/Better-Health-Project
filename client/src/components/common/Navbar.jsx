import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import GlobalButton from "./GlobalButton";
import { navItems } from "../../data/commonData";
import logo from "../../../public/logo.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  // Lock scroll when menu is open to prevent background scrolling on mobile
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Add shadow and adjust styling when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Filter nav items without Contact for reuse
  const filteredNavItems = navItems.filter((item) => item.label !== "Contact");

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#3E7D72] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
      >
        Skip to main content
      </a>

      <motion.header
        id="navbar"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#3E7D72] backdrop-blur-md shadow-xl py-2"
            : "bg-[#3E7D72] py-2 lg:py-2"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-14">
          
          {/* Logo Section */}
          <Link
            to="/"
            onClick={scrollToTop}
            className="flex items-center min-w-[120px] sm:min-w-[150px] z-50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Better Health Project - Home"
          >
            <AnimatePresence mode="wait">
              {!isHovered ? (
                <motion.img
                  key="logo-img"
                  src={logo}
                  alt="Better Health Project"
                  className="h-10 sm:h-12 w-auto object-contain"
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
                  className="text-base sm:text-xl lg:text-2xl font-black tracking-tight uppercase italic bg-gradient-to-r from-white via-[#AF8368] via-[#E77834] to-[#E3B02A] bg-clip-text text-transparent whitespace-nowrap"
                >
                  Better Health
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* Desktop Navigation (Hidden on Mobile/Tablet) */}
          <nav 
            className="hidden lg:flex flex-1 justify-center items-center gap-6 xl:gap-8"
            role="navigation"
            aria-label="Main navigation"
          >
            {filteredNavItems.map(({ label, to }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={label}
                  to={to}
                  onClick={() => handleNavClick(to)}
                  className={`relative px-2 py-2 text-base font-semibold transition-all duration-300 ${
                    isActive ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Section (Button & Mobile Toggle) */}
          <div className="flex items-center gap-3 sm:gap-4 z-50">

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 active:scale-95 transition-all"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? (
                <FaTimes size={22} className="text-white" />
              ) : (
                <FaBars size={22} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <div 
            id="mobile-menu"
            className="fixed inset-0 z-50 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Dark Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Sliding Menu */}
            <motion.div
              className="absolute top-0 right-0 w-[85%] sm:w-[60%] max-w-sm h-[100dvh] bg-white shadow-2xl flex flex-col p-6 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 250, damping: 30 }}
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                <span className="text-lg font-bold text-[#3E7D72]">Menu</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                  aria-label="Close menu"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <nav aria-label="Mobile navigation">
                <div className="flex flex-col gap-3 flex-1">
                  {filteredNavItems.map(({ label, to }) => {
                    const isActive = location.pathname === to;
                    return (
                      <Link
                        key={label}
                        to={to}
                        onClick={() => handleNavClick(to)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold transition-all ${
                          isActive
                            ? "bg-[#3E7D72] text-white shadow-md"
                            : "text-gray-700 hover:bg-gray-50 active:bg-gray-100"
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {label}
                        <FaArrowRight
                          className={`text-sm transition-opacity ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                          aria-hidden="true"
                        />
                      </Link>
                    );
                  })}
                  
                  {/* Mobile Contact Button */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link
                      to="/contact"
                      onClick={() => handleNavClick("/contact")}
                      className="flex items-center justify-center w-full px-4 py-3.5 rounded-xl border-2 border-[#3E7D72] text-[#3E7D72] font-bold hover:bg-[#3E7D72] hover:text-white transition-all group"
                      aria-current={location.pathname === '/contact' ? 'page' : undefined}
                    >
                      Contact Now
                      <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;