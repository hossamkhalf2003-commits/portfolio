import { useParams, Link } from "react-router-dom";
import { projectsDetails } from "../data/projectsDetails";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FadeIn from "../components/ui/FadeIn";
import Button from "../components/ui/Button";
import { BentoGrid, BentoCard } from "../components/ui/BentoGrid";
import { useCursor } from "../context/CursorContext";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const { setHovering } = useCursor(); // Bring in the cursor for the image gallery
  
  const project = projectsDetails.find(p => p.id === parseInt(id));

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
          
          {/* Header Section */}
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

          {/* Bento Grid Section */}
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

          {/* NEW: Screenshot Gallery Section */}
          {project.screenshots && project.screenshots.length > 0 && (
            <FadeIn direction="up" delay={0.3}>
              <div className="mt-16 pt-8 border-t border-border-ui/50">
                <h3 className="text-2xl font-bold text-content-primary mb-8 tracking-tight">System Interface Gallery</h3>
                
                {/* 
                  Grid scales perfectly: 
                  - 1 column on mobile
                  - 2 columns on tablets/small laptops
                  - If there are exactly 3 images, you might want md:grid-cols-3, but 2 usually looks better for large app screenshots.
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.screenshots.map((imgSrc, index) => (
                    <div 
                      key={index} 
                      onMouseEnter={() => setHovering(true)}
                      onMouseLeave={() => setHovering(false)}
                      className="group relative overflow-hidden rounded-2xl border border-border-ui bg-surface aspect-video"
                    >
                      {/* Subtle dark overlay that fades out on hover to draw focus */}
                      <div className="absolute inset-0 bg-main/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                      
                      <img 
                        src={imgSrc} 
                        alt={`${project.title} Interface ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

        </div>
      </main>
      
      <Footer />
    </div>
  );
}