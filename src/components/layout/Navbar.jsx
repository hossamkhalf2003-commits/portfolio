/* eslint-disable react-hooks/set-state-in-effect */
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom"; // IMPORT PORTAL
import { useCursor } from "../../context/CursorContext";
import ThemeToggle from "../ui/ThemeToggle"; 

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const { setHovering } = useCursor();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu automatically when the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock background scroll when the mobile menu is open to prevent double-scrolling
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* --- Main Desktop / Header Navbar --- */}
      <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav className="pointer-events-auto flex items-center justify-between gap-4 md:gap-8 px-4 py-3 md:px-6 md:py-3 w-full max-w-fit bg-main/60 backdrop-blur-lg border border-border-ui rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-border-ui/80 hover:bg-main/80">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="font-extrabold text-lg md:text-xl tracking-wider bg-gradient-glow bg-clip-text text-transparent drop-shadow-sm transition-transform hover:scale-105 shrink-0"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            Hossam Khalafallah
          </Link>

          {/* Desktop Navigation Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link 
                  key={link.to} 
                  to={link.to}
                  className="relative px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-colors duration-300 outline-none whitespace-nowrap"
                  onMouseEnter={() => setHovering(true)} 
                  onMouseLeave={() => setHovering(false)}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-accent-primary/10 border border-accent-primary/40 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  <span className={`relative z-10 transition-colors duration-300 ${
                    isActive ? "text-accent-primary drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" : "text-content-secondary hover:text-content-primary"
                  }`}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
              <ThemeToggle />
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="md:hidden p-2 rounded-full bg-surface border border-border-ui text-content-primary hover:text-accent-primary transition-colors focus:outline-none"
              aria-label="Open Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
        </nav>
      </header>

      {/* 
        --- Fullscreen Mobile Menu Portal ---
        Teleported to document.body to escape the PageTransition CSS transforms!
      */}
      {createPortal(
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              // z-[100] ensures it sits completely above the main page content
              className="fixed inset-0 z-[100] md:hidden flex flex-col items-center justify-center bg-main/95 backdrop-blur-xl pointer-events-auto"
            >
              
              {/* Dedicated Close Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-3 rounded-full bg-surface/50 border border-border-ui text-content-primary hover:text-accent-primary transition-colors"
                aria-label="Close Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Links */}
              <div className="flex flex-col items-center gap-6 w-full max-w-sm px-6">
                {links.map((link, i) => {
                  const isActive = location.pathname === link.to;
                  return (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className="w-full text-center"
                    >
                      <Link
                        to={link.to}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block w-full py-4 text-xl font-bold tracking-widest rounded-2xl border transition-all duration-300 ${
                          isActive 
                            ? "bg-accent-primary/10 border-accent-primary/50 text-accent-primary shadow-[0_0_20px_rgba(0,240,255,0.15)]" 
                            : "border-transparent text-content-secondary hover:text-content-primary hover:bg-surface active:scale-95"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
