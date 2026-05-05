import { useCursor } from "../../context/CursorContext";

export const BentoGrid = ({ children, className = "" }) => {
  return (
<div className={`grid gap-6 ${className}`}>
      {children}
    </div>
  );
};

export const BentoCard = ({ children, className = "", title, description, icon }) => {
  const { setHovering } = useCursor();
  
  return (
    <div 
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      // FIX: Removed 'justify-between' so the content flows naturally from top to bottom
      className={`group relative rounded-3xl bg-surface border border-border-ui p-8 overflow-hidden flex flex-col transition-all duration-500 hover:border-accent-primary/30 ${className}`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
      
      <div className="relative z-10">
        {icon && <div className="mb-4 text-accent-primary">{icon}</div>}
        <h3 className="text-xl font-bold text-content-primary mb-2 tracking-tight">{title}</h3>
        {/* Only render description if it's passed as a prop */}
        {description && (
           <p className="text-content-secondary text-sm leading-relaxed max-w-[20rem]">{description}</p>
        )}
      </div>

      {/* The children (your paragraphs and lists) will now sit neatly right under the title */}
      <div className="relative z-10 mt-2 flex-grow flex flex-col">
        {children}
      </div>
    </div>
  );
};