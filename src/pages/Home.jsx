import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionTitle from "../components/ui/SectionTitle";
import ProjectCard from "../components/ui/ProjectCard";
import FadeIn from "../components/ui/FadeIn";
import Button from "../components/ui/Button"; // Import your premium Button
import { projects } from "../data/projects";

export default function Home() {
  return (
    <div className="bg-aurora flex flex-col min-h-screen selection:bg-accent-primary/30">
      <Navbar />
      
      <main className="flex-grow w-full max-w-6xl mx-auto px-6">
        
        {/* Hero Section */}
        <section className="py-24 md:py-32">
          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-content-primary leading-tight">
               <br className="hidden md:block" />
              <span className="bg-gradient-glow bg-clip-text text-transparent">Software Engineer</span>
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-content-secondary leading-relaxed">
              Design and build<span className="font-medium drop-shadow-sm bg-gradient-glow bg-clip-text text-transparent"> web & mobile </span>robust business systems that solve <span className="font-medium drop-shadow-sm bg-gradient-glow bg-clip-text text-transparent">payroll, finance, reporting,</span> and <span className="font-medium drop-shadow-sm bg-gradient-glow bg-clip-text text-transparent">workflow operations</span>.
            </p>
          </FadeIn>
        </section>

        {/* Projects Section */}
        <section className="py-16">
          <FadeIn direction="left" delay={0.1}>
            <SectionTitle>Featured Work</SectionTitle>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Limit to only the first two projects */}
            {projects.slice(0, 2).map((project, index) => (
              <FadeIn key={project.id} direction="up" delay={0.2 + index * 0.2}>
                <ProjectCard {...project} />
              </FadeIn>
            ))}
          </div>

          {/* View All Projects Button */}
          <FadeIn direction="up" delay={0.6}>
            <div className="mt-12 flex justify-center">
              <Button to="/projects">
                View All Projects
              </Button>
            </div>
          </FadeIn>
        </section>


        {/* Final Call to Action */}
        <section className="py-24 mb-12 relative">
          <FadeIn direction="up" delay={0.2}>
            <div className="relative rounded-3xl bg-surface border border-border-ui p-10 md:p-16 text-center overflow-hidden flex flex-col items-center">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 to-transparent opacity-50" />
              
              <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-content-primary tracking-tight mb-6">
                Ready to scale your systems?
              </h2>
              <p className="relative z-10 text-content-secondary text-lg max-w-xl mb-10">
                Whether you need a robust Laravel backend, a high-performance database architecture, or a full-stack enterprise tool, let's talk.
              </p>
              
              <div className="relative z-10 flex flex-wrap justify-center gap-4">
                <Button to="/contact" className="!px-8 !py-3 !text-base">
                  Start a Conversation
                </Button>
                <Button to="mailto:your.email@example.com" className="!px-8 !py-3 !text-base !bg-transparent !border-content-secondary !text-content-secondary hover:!text-content-primary hover:!border-content-primary">
                  Email Me directly
                </Button>
              </div>
            </div>
          </FadeIn>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}