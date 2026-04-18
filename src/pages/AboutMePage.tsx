import { motion } from "framer-motion";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/shared/Footer";

export function AboutMePage() {
  return (
    <div className="min-h-screen bg-transparent text-white pt-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24"
        >
          {/* Content (Left) */}
          <div className="space-y-6 order-1 md:order-1">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/20 font-medium">
              A bit about me
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              I'm Chaker Zerghdar.
            </h1>
            <div className="space-y-4 text-white/40 leading-relaxed text-lg font-light">
              <p>
                I am a passionate Web Developer with a focus on creating modern, 
                high-performance digital experiences. My journey in tech started with 
                a curiosity for how things work on the internet, which quickly 
                evolved into a career building complex web applications.
              </p>
              <p>
                I believe that good design is just as important as 
                clean code, and I strive to find the perfect balance between the two 
                in every project I undertake.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing my knowledge with 
                the developer community.
              </p>
            </div>
          </div>

          {/* Picture (Right) */}
          <div className="relative group flex justify-center order-2 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="https://res.cloudinary.com/dfxhtf6xh/image/upload/v1776091308/photo_2026-04-13_15-30-31_apg2hg.jpg"
                alt="Chaker Zerghdar"
                className="relative w-full max-w-sm aspect-[4/5] object-cover rounded-2xl border border-white/10 shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}
