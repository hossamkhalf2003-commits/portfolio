import { useCursor } from "../../context/CursorContext";

export default function Footer() {
  const { setHovering } = useCursor();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/hossamkhalf2003-commits", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/hossam-bahaa", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/201024117621", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    },
    {
      name: "Facebook",
      url: "https://facebook.com/hossam.khalafallah.3", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    },
    {
      name: "Instagram",
      url: "https://instagram.com/hossam.khalafallah", 
      icon: <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    }
  ];

  return (
    <footer className="border-t border-border-ui mt-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Personal Branding & Quote */}
        <div className="flex flex-col items-center md:items-start tracking-wide">
          <div className="text-sm font-semibold text-content-primary mb-1.5">
            © {new Date().getFullYear()} <span className="text-accent-primary drop-shadow-[0_0_5px_rgba(0,240,255,0.4)]">Hossam Khalafallah</span>
          </div>
          <div className="text-xs text-content-secondary italic font-medium">
            "Fueled by passion. Built with precision."
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="text-content-secondary hover:text-accent-primary transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={2} 
                viewBox="0 0 24 24"
              >
                {social.icon}
              </svg>
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}