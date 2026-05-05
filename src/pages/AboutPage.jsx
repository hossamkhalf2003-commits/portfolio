import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FadeIn from "../components/ui/FadeIn"; // Import the newly created component

export default function AboutPage() {
  return (
    <div className="bg-aurora flex flex-col min-h-screen selection:bg-accent-primary/30">
      <Navbar />

      <main className="flex-grow w-full max-w-4xl mx-auto px-6 py-20 flex flex-col justify-center">
        {/* Removed the old static 'animate-fade-in' class and increased spacing */}
        <div className="space-y-12">
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

          {/* Content Card with Ambient Glow */}
          <FadeIn direction="up" delay={0.3}>
            <div className="relative group p-8 sm:p-10 rounded-2xl bg-surface border border-border-ui transition-colors duration-500 hover:border-accent-primary/30">
              {/* Invisible background that blooms on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-glow opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 pointer-events-none"></div>

              <p className="relative text-lg text-content-secondary leading-relaxed md:leading-loose">
                Motivated Software Engineer with hands-on experience developing
                cross-platform<span className="text-content-primary font-medium drop-shadow-sm"> mobile applications </span>and scalable<span className="text-content-primary font-medium drop-shadow-sm"> web systems</span>.
                Passionate about maximizing performance, managing resource
                usage, and crafting clean, modern user interfaces. Proven track
                record of delivering end-to-end solutions that streamline
                business operations and enhance user experience Using.{" "}
                <span className="text-content-primary font-medium drop-shadow-sm">  </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}
