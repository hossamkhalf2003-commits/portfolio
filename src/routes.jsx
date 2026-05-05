import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import NotFound from "./pages/NotFound";

// UI Components
import PageTransition from "./components/ui/PageTransition"; // Adjust this path if needed

export default function Router() {
  // We need the location to tell Framer Motion when the route changes
  const location = useLocation();

  return (
    // mode="wait" ensures the exit animation finishes completely before the next page enters
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        
        <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
        
        {/* Placed the dynamic route right under the main projects list for clean organization */}
        <Route path="/projects/:id" element={<PageTransition><ProjectDetailsPage /></PageTransition>} />
        
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        
        {/* The 404 Catch-All should always be at the very bottom */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        
      </Routes>
    </AnimatePresence>
  );
}