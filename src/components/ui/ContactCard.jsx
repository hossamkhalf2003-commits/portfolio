import { useRef, useState } from "react";
import { useCursor } from "../../context/CursorContext";

export default function ContactCard({ platform, value, url, desc, icon }) {
  const divRef = useRef(null);
  
  const [interaction, setInteraction] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
  const [isFocused, setIsFocused] = useState(false);
  const { setHovering } = useCursor();

  const handleMouseMove = (e) => {
    if (!divRef.current) return; 
    const rect = divRef.current.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 12-degree max tilt for a heavy, premium feel
    const rotateX = ((y / rect.height) - 0.5) * -12; 
    const rotateY = ((x / rect.width) - 0.5) * 12;

    setInteraction({ x, y, rotateX, rotateY });
  };

  const handleMouseEnter = () => {
    setIsFocused(true);
    setHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsFocused(false);
    setHovering(false);
    setInteraction((prev) => ({ ...prev, rotateX: 0, rotateY: 0 }));
  };

  return (
    <div style={{ perspective: "1000px" }} className="h-full w-full">
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative flex flex-col bg-surface p-6 sm:p-8 rounded-2xl border border-border-ui overflow-hidden pointer-events-auto h-full outline-none"
        style={{
          transform: `rotateX(${interaction.rotateX}deg) rotateY(${interaction.rotateY}deg) scale3d(${isFocused ? 1.02 : 1}, ${isFocused ? 1.02 : 1}, 1)`,
          transition: isFocused ? "transform 0.1s ease-out" : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
          transformStyle: "preserve-3d", 
        }}
      >
        {/* The Dynamic Spotlight */}
        <div 
          className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 z-0"
          style={{
            opacity: isFocused ? 1 : 0,
            background: `radial-gradient(600px circle at ${interaction.x}px ${interaction.y}px, rgba(0,240,255,.08), transparent 40%)`
          }}
        />

        {/* Content Layer (Parallax Pop-out) */}
        <div 
          className="relative z-10 flex flex-col h-full"
          style={{
            transform: isFocused ? "translateZ(30px)" : "translateZ(0px)",
            transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        >
          {/* Icon Header */}
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-main/50 border border-border-ui text-content-secondary group-hover:text-accent-primary group-hover:border-accent-primary/30 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {icon}
              </svg>
            </div>
            <h3 className="text-xl font-bold text-content-primary tracking-tight">
              {platform}
            </h3>
          </div>
          
          {/* Platform Value (Email, Username, etc) */}
          <div className="text-sm font-medium text-accent-primary mb-2 truncate">
            {value}
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-content-secondary mt-auto">
            {desc}
          </p>
        </div>
      </a>
    </div>
  );
}