import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom"; // IMPORT PORTAL
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projectsDetails } from "../data/projectsDetails";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FadeIn from "../components/ui/FadeIn";
import Button from "../components/ui/Button";
import { BentoGrid, BentoCard } from "../components/ui/BentoGrid";
import { useCursor } from "../context/CursorContext";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const { setHovering } = useCursor();
  
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollContainerRef = useRef(null); // Ref for the carousel

  const project = projectsDetails.find(p => p.id === parseInt(id));

  // --- Scroll Function for Carousel Buttons ---
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      // Scroll by the width of the container for a full "page" swipe
      const scrollAmount = direction === "left" ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    // Cleanup incase component unmounts while modal is open
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  if (!project) {
    return (
      <div className="bg-aurora flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl font-bold text-content-primary mb-4">Project Not Found</h1>
          <Button to="/projects">Return to Projects</Button>
        </main>
        <Footer />
      </div>
    );
  }

  const icons = {
    overview: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    features: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
    challenge: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
    solution: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  };

  return (
    <div className="bg-aurora flex flex-col min-h-screen selection:bg-accent-primary/30">
      <Navbar />
      
      <main className="flex-grow w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="space-y-12">
          
          <FadeIn direction="down" delay={0.1}>
            <Link to="/projects" className="text-sm font-medium text-accent-primary hover:text-accent-secondary transition-colors inline-flex items-center gap-2 mb-8 group">
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Projects
            </Link>
            <h1 className="text-4xl md:text-6xl font-extrabold text-content-primary tracking-tight">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-1.5 bg-surface border border-border-ui rounded-full text-sm font-medium text-content-secondary">Client: <span className="text-content-primary">{project.client}</span></span>
              <span className="px-4 py-1.5 bg-surface border border-border-ui rounded-full text-sm font-medium text-content-secondary">Role: <span className="text-content-primary">{project.role}</span></span>
              <span className="px-4 py-1.5 bg-surface border border-border-ui rounded-full text-sm font-medium text-content-secondary">Timeline: <span className="text-content-primary">{project.timeline}</span></span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <BentoGrid className="grid-cols-1 md:grid-cols-3 gap-6">
              <BentoCard title="Project Overview" icon={icons.overview} className="md:col-span-2">
                <p className="text-content-secondary text-base leading-relaxed mt-2">{project.overview}</p>
                <div className="flex gap-4 mt-8">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <Button to={project.liveUrl}>View Live Site</Button>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a href={project.githubUrl} className="px-6 py-2.5 rounded-full text-sm font-medium text-content-primary border border-border-ui hover:border-content-secondary transition-colors">Source Code</a>
                  )}
                </div>
              </BentoCard>

              <BentoCard title="Key Features" icon={icons.features} className="md:col-span-1">
                <ul className="space-y-4 mt-4">
                  {project.keyFeatures?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent-primary mt-0.5 shadow-[0_0_10px_rgba(0,240,255,0.8)] rounded-full h-1.5 w-1.5 flex-shrink-0 relative top-2"></span>
                      <span className="text-content-primary text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </BentoCard>

              <BentoCard title="The Challenge" icon={icons.challenge} className="md:col-span-1">
                <ul className="space-y-4 mt-4">
                  {project.challenges?.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01" /></svg>
                      <span className="text-content-secondary text-sm leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </BentoCard>

              <BentoCard title="Engineered Solution" icon={icons.solution} className="md:col-span-2">
                <ul className="space-y-4 mt-4">
                  {project.solutions?.map((solution, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-content-secondary text-sm leading-relaxed">{solution}</span>
                    </li>
                  ))}
                </ul>
              </BentoCard>
            </BentoGrid>
          </FadeIn>

          {/* Screenshot Gallery with Navigation Buttons */}
          {project.screenshots && project.screenshots.length > 0 && (
            <FadeIn direction="up" delay={0.3}>
              <div className="mt-16 pt-8 border-t border-border-ui/50 overflow-hidden">
                <h3 className="text-2xl font-bold text-content-primary mb-8 tracking-tight">System Interface Gallery</h3>
                
                {/* Carousel Wrapper for absolute positioned buttons */}
{/* Carousel Wrapper for absolute positioned buttons */}
<div className="relative group/carousel flex items-center mt-6">
  
  {/* Left Scroll Button */}
  <button 
    onClick={() => scroll("left")}
    onMouseEnter={() => setHovering(true)}
    onMouseLeave={() => setHovering(false)}
    // UPGRADED: Always visible, solid primary background, inverted icon color, premium shadow
    className="absolute -left-4 z-20 p-3 rounded-full bg-accent-primary text-[var(--bg-main)] shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110 hover:brightness-110 hidden md:flex items-center justify-center"
    aria-label="Scroll left"
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  {/* Scroll Container */}
  <div 
    ref={scrollContainerRef}
    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar items-center px-4 w-full scroll-smooth"
  >
    {project.screenshots.map((imgSrc, index) => (
      <div 
        key={index} 
        onClick={() => setSelectedImage(imgSrc)}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="snap-center shrink-0 relative rounded-2xl border border-border-ui bg-surface cursor-zoom-in group overflow-hidden shadow-sm"
      >
        <div className="absolute inset-0 bg-main/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
        <img 
          src={imgSrc} 
          alt={`${project.title} Interface ${index + 1}`} 
          className="h-[40vh] md:h-[50vh] w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
    ))}
  </div>

  {/* Right Scroll Button */}
  <button 
    onClick={() => scroll("right")}
    onMouseEnter={() => setHovering(true)}
    onMouseLeave={() => setHovering(false)}
    // UPGRADED: Always visible, solid primary background, inverted icon color, premium shadow
    className="absolute -right-4 z-20 p-3 rounded-full bg-accent-primary text-[var(--bg-main)] shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110 hover:brightness-110 hidden md:flex items-center justify-center"
    aria-label="Scroll right"
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>

</div>
              </div>
            </FadeIn>
          )}
        </div>
      </main>

      {/* 
        NEW: React Portal 
        This teleport the modal outside the PageTransition component 
        so it isn't affected by CSS transforms, perfectly fixing the scrolling bug!
      */}
      {createPortal(
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(null)}
              // z-[9999] ensures it stays above absolutely everything
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-main/90 backdrop-blur-md p-4 sm:p-10 cursor-zoom-out"
            >
              {/* Close Button */}
              <button 
                className="absolute top-6 right-6 p-3 rounded-full bg-surface/50 hover:bg-surface border border-border-ui text-content-primary hover:text-accent-primary transition-all duration-300 z-50 shadow-lg"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Expanded Image */}
              <motion.img
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                src={selectedImage}
                alt="Expanded Interface"
                onClick={(e) => e.stopPropagation()}
                className="max-w-full max-h-[90vh] rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.3)] object-contain cursor-default"
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      <Footer />
    </div>
  );
}
