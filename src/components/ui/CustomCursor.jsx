import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "../../context/CursorContext";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const { isHovering } = useCursor();

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsTouchDevice(true);
      return; 
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* ===================================================
          Layer 1: The Complex HUD Ring
          (Removed mix-blend-screen so it's visible in Light Mode)
          ==================================================== */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[100] flex items-center justify-center"
        animate={{ 
          x: mousePosition.x - 24, 
          y: mousePosition.y - 24,
          scale: isClicked ? 0.7 : (isHovering ? 1.2 : 1), 
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28, mass: 0.5 }}
      >
        <motion.div
          className="w-full h-full border border-dashed border-accent-secondary rounded-full opacity-60"
          animate={{ rotate: 360, opacity: isHovering ? 0.9 : 0.6 }} 
          transition={{ 
            rotate: { repeat: Infinity, duration: isHovering ? 8 : 12, ease: "linear" },
            opacity: { duration: 0.3 }
          }}
        />
        
        <motion.div 
          className="absolute inset-0 border border-accent-primary rounded-full"
          animate={{
            borderColor: isHovering ? "var(--accent-secondary)" : "var(--accent-primary)",
            opacity: isHovering ? 0.3 : 0.2, 
            scale: isHovering ? 1.05 : 1 
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute inset-px bg-accent-primary/10 rounded-full blur-[2px]"
          animate={{ opacity: isHovering ? 0.15 : 0.05 }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
        />
      </motion.div>

      {/* ===================================================
          Layer 2: The Sharp Quantum Core Dot
          ==================================================== */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[100] flex items-center justify-center"
        animate={{ 
          x: mousePosition.x - 3, 
          y: mousePosition.y - 3,
        }}
        transition={{ type: "tween", duration: 0 }} 
      >
        {/* Swapped hardcoded rgba for CSS variables so shadows respect the active theme */}
        <motion.div
          className="w-full h-full rounded-full pointer-events-none"
          animate={{ 
            backgroundColor: isHovering ? "var(--accent-secondary)" : "var(--accent-primary)",
            boxShadow: isHovering 
              ? "0 0 20px var(--accent-secondary), 0 0 10px var(--accent-secondary)" 
              : "0 0 15px var(--accent-primary), 0 0 8px var(--accent-primary)",
            scale: isHovering ? [1, 1.1, 1] : [1, 1.05, 1] 
          }}
          transition={{ 
            backgroundColor: { duration: 0.3 },
            boxShadow: { duration: 0.3 },
            scale: { repeat: Infinity, duration: 2, ease: "easeInOut" } 
          }}
        />
      </motion.div>
    </>
  );
}