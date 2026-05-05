import { useRef, useState } from "react";
import { useCursor } from "../../context/CursorContext";
import Button from "./Button"; 

// Don't forget to destructure the 'banner' prop here!
export default function ProjectCard({ id, title, desc, stack, banner }) {
  const divRef = useRef(null);
  
  const [interaction, setInteraction] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
  const [isFocused, setIsFocused] = useState(false);
  const { setHovering } = useCursor();

  const handleMouseMove = (e) => {
    if (!divRef.current) return; 
    const rect = divRef.current.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

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
    <div style={{ perspective: "1000px" }} className="h-full">
      <div 
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        // Removed the internal padding here so the image can sit flush against the top edges
        className="group relative flex flex-col bg-surface rounded-2xl border border-border-ui overflow-hidden pointer-events-auto h-full"
        style={{
          transform: `rotateX(${interaction.rotateX}deg) rotateY(${interaction.rotateY}deg) scale3d(${isFocused ? 1.02 : 1}, ${isFocused ? 1.02 : 1}, 1)`,
          transition: isFocused ? "transform 0.1s ease-out" : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
          transformStyle: "preserve-3d", 
        }}
      >
        {/* The Dynamic Spotlight (Moved z-index so it affects the image too) */}
        <div 
          className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 z-20"
          style={{
            opacity: isFocused ? 1 : 0,
            background: `radial-gradient(600px circle at ${interaction.x}px ${interaction.y}px, rgba(0,240,255,.08), transparent 40%)`
          }}
        />

        {/* --- NEW: Premium Parallax Banner --- */}
        {banner && (
          <div 
            className="relative h-48 sm:h-56 w-full overflow-hidden shrink-0"
            style={{
              // Image pops out slightly (Tier 1 Depth)
              transform: isFocused ? "translateZ(15px)" : "translateZ(0px)",
              transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            {/* The Image: Slightly dimmed until hovered, slowly scales up */}
            <img 
              src={banner} 
              alt={title} 
              className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            
            {/* The Blend: A gradient from the active theme's surface color up into the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
          </div>
        )}

        {/* Existing Card Content (Now wrapped in padding) */}
        <div 
          className={`relative z-10 flex-grow flex flex-col p-6 sm:p-8 ${banner ? 'pt-2 sm:pt-4' : ''}`}
          style={{
            // Text pops out further than the image (Tier 2 Depth)
            transform: isFocused ? "translateZ(35px)" : "translateZ(0px)",
            transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        >
          <h3 className="text-2xl font-bold text-content-primary transition-colors duration-300 group-hover:text-accent-primary tracking-tight">
            {title}
          </h3>
          
          <p className="text-base leading-relaxed text-content-secondary mt-3 flex-grow">
            {desc}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-6">
            {stack.map((item) => (
              <span 
                key={item} 
                className="px-3 py-1 bg-main/50 border border-border-ui rounded-full text-xs font-medium text-content-secondary transition-colors duration-300 group-hover:border-accent-primary/30 group-hover:text-content-primary"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <Button to={`/projects/${id}`}>
              View Case Study
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}