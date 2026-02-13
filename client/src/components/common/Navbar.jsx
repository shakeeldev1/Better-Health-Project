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

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Add shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
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
    <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* Navbar */}
      <motion.nav
        id="navbar"
        className={`w-full pointer-events-auto relative z-[50] bg-[#3E7D72] bg-opacity-95 backdrop-blur-sm border-b border-gray-100 transition-shadow ${
          scrolled ? "shadow-xl" : ""
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            onClick={scrollToTop}
            className="flex items-center min-w-[120px] sm:min-w-[150px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              {!isHovered ? (
                <motion.img
                  key="logo-img"
                  src={logo}
                  alt="Better Health Project"
                  className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
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
                  className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight uppercase italic bg-gradient-to-r from-white via-[#AF8368] via-[#E77834] to-[#E3B02A] bg-clip-text text-transparent"
                >
                  Better Health
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-2 sm:gap-6">
            {filteredNavItems.map(({ label, to }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={label}
                  to={to}
                  onClick={() => handleNavClick(to)}
                  className={`relative px-3 sm:px-5 py-2 text-base sm:text-lg font-semibold transition-all duration-300 ${
                    isActive ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  <span>{label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden lg:block">
              <GlobalButton
                text="Contact Now"
                link="/contact"
                variant="outline"
                className="rounded-full sm:px-6 sm:py-2"
                showShine={true}
                showArrow={false}
              />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-xl border border-white/30 bg-[#3E7D72] hover:bg-[#35655E]"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FaTimes size={20} className="text-white" /> : <FaBars size={20} className="text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[55]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
              />
              {/* Menu */}
              <motion.div
                className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white/90 backdrop-blur-xl z-[60] flex flex-col p-6 rounded-l-3xl overflow-y-auto"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                <div className="flex justify-end mb-6">
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-200 transition"
                  >
                    <FaTimes className="text-gray-700" size={20} />
                  </button>
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  {filteredNavItems.map(({ label, to }) => (
                    <Link
                      key={label}
                      to={to}
                      onClick={() => handleNavClick(to)}
                      className={`px-4 py-3 rounded-xl font-bold transition-all ${
                        location.pathname === to
                          ? "bg-primary text-white shadow-lg"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {label}
                      <FaArrowRight
                        className={`inline ml-2 text-sm ${
                          location.pathname === to ? "opacity-100" : "opacity-20"
                        }`}
                      />
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    onClick={() => handleNavClick("/contact")}
                    className="px-4 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary/10 mt-4"
                  >
                    Contact Now
                    <FaArrowRight className="inline ml-2 text-sm opacity-100" />
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;