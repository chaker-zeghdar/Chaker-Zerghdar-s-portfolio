import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroGeometric } from "../components/ui/shape-landing-hero";
import { Hero3D } from "../components/Hero/Hero3D";
import { About } from "../components/About/About";
import { Services } from "../components/Services/Services";
import { Projects } from "../components/Projects/Projects";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/shared/Footer";
import { Search } from "lucide-react";

export function HomePage() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsCommandPaletteOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <main>
        <HeroGeometric badge="Web Developer">
          <Hero3D />
        </HeroGeometric>

        <About />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* Command Palette — Ctrl+K */}
      <AnimatePresence>
        {isCommandPaletteOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCommandPaletteOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg bg-white/[0.04] border border-white/[0.08] backdrop-blur-2xl rounded-2xl p-6"
            >
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/[0.06]">
                <Search className="text-white/25" size={18} />
                <input 
                  autoFocus
                  type="text" 
                  placeholder="Search commands..."
                  className="bg-transparent border-none outline-none text-sm w-full placeholder:text-white/15 text-white/60"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/15 mb-2">Quick Actions</p>
                {[
                  { label: "Go to Projects", key: "G + P" },
                  { label: "Download Resume", key: "⌘ + D" },
                  { label: "Contact Me", key: "C" },
                ].map((action) => (
                  <button key={action.label} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/[0.04] transition-colors text-left group">
                    <span className="text-sm text-white/35 group-hover:text-white/60">{action.label}</span>
                    <span className="text-[10px] px-2 py-1 bg-white/[0.04] rounded text-white/20 font-mono">{action.key}</span>
                  </button>
                ))}
              </div>
              <div className="mt-5 pt-3 border-t border-white/[0.06] text-center">
                <p className="text-[10px] text-white/15 uppercase tracking-[0.2em]">Press ESC to close</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
