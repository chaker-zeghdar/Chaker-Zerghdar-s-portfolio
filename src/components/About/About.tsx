import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import { skills } from "@/src/data/skills";

interface Phase {
  id: number;
  heading: React.ReactNode;
  subtext: React.ReactNode;
  pills?: string[];
}

const phases: Phase[] = [
  {
    id: 1,
    heading: (
      <>Hello World</>
    ),
    subtext: <>Nice to meet you</>,
  },
  {
    id: 2,
    heading: (
      <>
        I'm <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-violet-300 bg-clip-text text-transparent italic font-light pr-4 drop-shadow-[0_0_15px_rgba(216,180,254,0.5)]">Chaker</span>
      </>
    ),
    subtext: <>A Web Developer</>,
  },
  {
    id: 3,
    heading: <>I build things that</>,
    subtext: null,
    pills: ["work", "ship", "scale", "matter"],
  },
];

const PHASE_DURATION = 2800;

const phaseVariants: Variants = {
  enter: {
    opacity: 0,
    y: 40,
    filter: "blur(12px)",
    scale: 0.95,
  },
  center: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -40,
    filter: "blur(12px)",
    scale: 0.95,
  },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function About() {
  const BLUR_FADE_DELAY = 0.04;
  const [currentPhase, setCurrentPhase] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % phases.length);
    }, PHASE_DURATION);

    return () => clearInterval(timer);
  }, [isInView]);

  const phase = phases[currentPhase];

  return (
    <section id="about" className="py-16 md:py-24 px-6 relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Animated phase content */}
          <div className="relative min-h-[220px] md:min-h-[280px] flex items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={phase.id}
                variants={phaseVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 leading-tight">
                  {phase.heading}
                </h2>

                {phase.subtext && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-xl md:text-3xl text-white/40 tracking-tighter font-light"
                  >
                    {phase.subtext}
                  </motion.span>
                )}

                {phase.pills && (
                  <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-6">
                    {phase.pills.map((word, i) => (
                      <motion.span
                        key={word}
                        custom={i}
                        variants={pillVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-lg md:text-2xl font-medium px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 cursor-default text-white/60"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="relative group">
              <motion.img
                src="https://res.cloudinary.com/dfxhtf6xh/image/upload/v1776091308/photo_2026-04-13_15-30-31_apg2hg.jpg"
                alt="Chaker Zerghdar"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl border border-white/10 shadow-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee — clean, modern */}
      <div className="mt-24 -mx-6 overflow-hidden">
        <p className="text-center text-[11px] uppercase tracking-[0.25em] text-white/20 font-medium mb-8">
          Tech Stack & Tools
        </p>
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="text-3xl md:text-5xl font-semibold text-white/[0.07] uppercase tracking-tight select-none"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
