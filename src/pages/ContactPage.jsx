import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FadeIn from "../components/ui/FadeIn";
import ContactCard from "../components/ui/ContactCard";
import { contacts } from "../data/contacts";

export default function ContactPage() {
  return (
    <div className="bg-aurora flex flex-col min-h-screen selection:bg-accent-primary/30">
      <Navbar />

      {/* Widened the container to max-w-5xl to accommodate the grid nicely */}
      <main className="flex-grow w-full max-w-5xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center">
        <div className="w-full space-y-16">
          {/* Header Section */}
          <FadeIn direction="down" delay={0.1}>
            <div className="text-center space-y-6 max-w-2xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-extrabold text-content-primary tracking-tight">
                Get in{" "}
                <span className="bg-gradient-glow bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-content-secondary text-lg md:text-xl leading-relaxed">
                Whether you’re looking to build a modern, responsive web app,
                craft intuitive user interfaces, or just want to talk frontend
                architecture and user experience, I’d love to hear from you.
              </p>
            </div>
          </FadeIn>

          {/* Dynamic 3D Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((contact, index) => (
              <FadeIn
                key={contact.id}
                direction="up"
                // Stagger the animation so they pop in one after the other
                delay={0.2 + index * 0.1}
              >
                <ContactCard {...contact} />
              </FadeIn>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
