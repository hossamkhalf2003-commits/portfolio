import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProjectCard from "../components/ui/ProjectCard";
import FadeIn from "../components/ui/FadeIn"; // Import the FadeIn component
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <div className="bg-aurora flex flex-col min-h-screen selection:bg-accent-primary/30">
      <Navbar />
      
      <main className="flex-grow w-full max-w-6xl mx-auto px-6 py-20 md:py-28">
        {/* Removed static 'animate-fade-in' class */}
        <div className="space-y-16">
          
          {/* Header Section */}
          <div className="space-y-6">
            <FadeIn direction="right" delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight">
                Featured <span className="bg-gradient-glow bg-clip-text text-transparent">Projects</span>
              </h1>
            </FadeIn>
            
            <FadeIn direction="right" delay={0.2}>
              <p className="text-content-secondary text-lg max-w-2xl leading-relaxed">
                A showcase of modern, scalable frontend applications, intuitive user interfaces, and seamless user experiences.
              </p>
            </FadeIn>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              /* Staggering the cards: base delay of 0.1s + 0.15s per card */
              <FadeIn key={project.id} direction="up" delay={0.1 + index * 0.15}>
                <ProjectCard {...project} />
              </FadeIn>
            ))}
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}