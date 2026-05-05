import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useCursor } from "../../context/CursorContext";
import ThemeToggle from "../ui/ThemeToggle"; // Assuming you saved it here

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const { setHovering } = useCursor();
  
  const scrollRef = useRef(null);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between gap-3 md:gap-8 px-3 py-2 md:px-6 md:py-3 w-full max-w-fit bg-main/60 backdrop-blur-lg border border-border-ui rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-border-ui/80 hover:bg-main/80">
        
        {/* 1. Logo (Shrink-0 prevents it from squishing on mobile) */}
        <Link 
          to="/" 
          className="font-extrabold text-lg md:text-xl tracking-wider bg-gradient-glow bg-clip-text text-transparent drop-shadow-sm transition-transform hover:scale-105 shrink-0 pl-2 md:pl-0"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          Hossam Khalafallah
        </Link>

        {/* 2. Navigation Links Wrapper (Adjusted max-w to fit the new button) */}
        <div className="relative flex items-center max-w-[40vw] sm:max-w-[55vw] md:max-w-none">
          
          <div 
            ref={scrollRef}
            onScroll={checkScroll} 
            className="flex items-center gap-1 md:gap-2 overflow-x-auto no-scrollbar pr-6 md:pr-0"
          >
            {links.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link 
                  key={link.to} 
                  to={link.to}
                  className="relative px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium tracking-wide transition-colors duration-300 outline-none whitespace-nowrap"
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

          {/* Dynamic Mobile Swipe Indicator */}
          <div 
            className={`absolute right-0 top-0 bottom-0 w-10 pointer-events-none md:hidden flex items-center justify-end pr-1 bg-gradient-to-l from-[var(--bg-main)] to-transparent transition-opacity duration-300 rounded-r-full ${
              canScrollRight ? "opacity-100" : "opacity-0"
            }`}
          >
            <motion.svg
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-4 h-4 text-accent-primary drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </div>

        </div>

        {/* 3. Theme Toggle Button (Shrink-0 to protect its shape) */}
        <div 
          className="shrink-0 pr-1 md:pr-0"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <ThemeToggle />
        </div>
        
      </nav>
    </header>
  );
}