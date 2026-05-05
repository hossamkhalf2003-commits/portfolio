import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      // 1. Enters from the right, slightly pushed back
      initial={{ opacity: 0, x: 40, scale: 0.98, filter: "blur(4px)" }}
      
      // 2. Snaps to center, perfectly clear and flat
      animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
      
      // 3. The Magic: Barely moves left, but shrinks and blurs, acting like a background layer
      exit={{ opacity: 0, x: -15, scale: 0.96, filter: "blur(4px)" }}
      
      // 4. A custom "Ease Out" curve. Fast initial movement that smoothly glides into place
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col min-h-screen w-full origin-center"
    >
      {children}
    </motion.div>
  );
}