import { Link } from "react-router-dom";
import { useCursor } from "../../context/CursorContext";

export default function Button({ children, to, onClick, className = "" }) {
  const { setHovering } = useCursor();

  // Premium, clean styling: Subtle background tint increase, brightened border, and a soft ambient glow on hover.
  const baseClasses = `group relative inline-flex items-center justify-center gap-3 px-6 py-2.5 text-sm font-semibold tracking-wider rounded-full transition-all duration-300 overflow-hidden border border-accent-primary/40 text-accent-primary bg-accent-primary/5 hover:bg-accent-primary/15 hover:border-accent-primary hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] ${className}`;

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => setHovering(false);

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {/* Animated Arrow - Slides right on hover */}
      <svg 
        className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </>
  );

  if (to) {
    return (
      <Link 
        to={to} 
        className={baseClasses}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </Link>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={baseClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </button>
  );
}