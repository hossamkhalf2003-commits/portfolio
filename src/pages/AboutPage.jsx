import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FadeIn from "../components/ui/FadeIn";

export default function AboutPage() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Dart", "JavaScript", "PHP", "HTML/CSS"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Flutter", "React.js", "Next.js", "Laravel", "Tailwind CSS"],
    },
    {
      title: "Architecture & Tools",
      skills: ["Riverpod", "Bloc", "GoRouter", "Firebase", "REST APIs", "Git/GitHub", "Linux (Fedora)"],
    },
    {
      title: "Design & Core Skills",
      skills: ["UI/UX Design", "Problem Solving", "Agile Fundamentals"],
    },
  ];

  return (
    <div className="bg-aurora flex flex-col min-h-screen selection:bg-accent-primary/30">
      <Navbar />

      <main className="flex-grow w-full max-w-4xl mx-auto px-6 py-24 flex flex-col justify-center">
        <div className="space-y-16">
          
          {/* Futuristic Header with Glowing Underline */}
          <FadeIn direction="right" delay={0.1}>
            <div className="inline-block">
              <h1 className="text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight">
                About{" "}
                <span className="bg-gradient-glow bg-clip-text text-transparent">
                  Me
                </span>
              </h1>
              <div className="h-1 w-1/2 bg-accent-primary mt-2 rounded-full shadow-[0_0_10px_rgba(0,240,255,0.6)]"></div>
            </div>
          </FadeIn>

          {/* Bio Content Card with Ambient Glow */}
          <FadeIn direction="up" delay={0.2}>
            <div className="relative group p-8 sm:p-10 rounded-3xl bg-surface border border-border-ui transition-colors duration-500 hover:border-accent-primary/30">
              {/* Invisible background that blooms on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-glow opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 pointer-events-none"></div>

              <p className="relative text-lg text-content-secondary leading-relaxed md:leading-loose">
                I am <span className="text-content-primary font-bold drop-shadow-sm">Hossam Khalafallah</span>, a Software Engineer with hands-on experience developing{" "}
                <span className="text-content-primary font-medium drop-shadow-sm">cross-platform mobile applications</span> and{" "}
                <span className="text-content-primary font-medium drop-shadow-sm">scalable web systems</span>. 
                Passionate about maximizing performance, managing resource usage, and crafting clean, modern user interfaces. 
                Proven track record of delivering end-to-end solutions that streamline business operations and enhance user experience.
              </p>
            </div>
          </FadeIn>

          {/* Structured Skills Matrix (Home Page Style) */}
          <FadeIn direction="up" delay={0.3}>
            <h2 className="text-2xl font-bold text-content-primary tracking-tight mb-10">
              Technical Expertise
            </h2>
            
            <div className="space-y-12">
              {skillCategories.map((category, index) => (
                <div key={index} className="space-y-6">
                  {/* Category Header with Neon Dot */}
                  <h3 className="text-xl font-bold text-content-primary tracking-tight flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-accent-primary shadow-[0_0_8px_rgba(0,240,255,0.8)]"></span>
                    {category.title}
                  </h3>
                  
                  {/* Premium Grid matching Home.jsx */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {category.skills.map((skill, i) => (
                      <div 
                        key={i} 
                        className="group relative px-4 py-4 rounded-2xl bg-surface border border-border-ui overflow-hidden flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.05)] cursor-default"
                      >
                        {/* Ambient Background Bloom */}
                        <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none" />
                        
                        {/* Subtle Top Border Neon Glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-accent-primary/0 group-hover:via-accent-primary/60 to-transparent transition-all duration-500" />
                        
                        <span className="relative z-10 text-sm md:text-base text-center font-semibold text-content-secondary transition-colors duration-300 group-hover:text-accent-primary tracking-wide">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </main>

      <Footer />
    </div>
  );
}