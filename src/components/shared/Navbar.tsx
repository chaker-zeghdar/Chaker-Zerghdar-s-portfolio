import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/src/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Stack", href: "#stack" },
  { name: "Timeline", href: "#timeline" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Simple intersection observer logic
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display font-bold tracking-tighter"
        >
          CHAKER ZEGHDAR<span className="text-accent">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                activeSection === item.href.substring(1) ? "text-accent" : "text-white/60"
              )}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Socials / CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/chaker-zeghdar" className="p-2 text-white/60 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/chaker-zeghdar-89723b344/" className="p-2 text-white/60 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a
            href="#contact"
            className="ml-4 px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-accent hover:text-white transition-all"
          >
            Contact 
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/5 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6 p-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-display font-bold transition-colors",
                    activeSection === item.href.substring(1) ? "text-accent" : "text-white/60"
                  )}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                <a href="#" className="text-white/40 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-white/40 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="ml-auto px-6 py-3 bg-white text-black text-sm font-bold rounded-full"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
