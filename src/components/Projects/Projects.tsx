import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/src/data/projects";

export function Projects() {
  const [tappedId, setTappedId] = useState<string | null>(null);

  const handleCardTap = (id: string) => {
    // Only toggle on mobile (md and below)
    setTappedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="work" className="py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/20 font-medium mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Selected Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={project.featured ? "md:col-span-2" : "col-span-1"}
            >
              <div
                className="group relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] aspect-[4/3] sm:aspect-[16/9]"
                onClick={() => handleCardTap(project.id)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay — tap on mobile, hover on desktop */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-500 flex flex-col justify-end p-6 md:p-8 ${
                    tappedId === project.id ? "opacity-100" : "opacity-0"
                  } md:opacity-0 md:group-hover:opacity-100`}
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] md:text-xs font-medium text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2">{project.title}</h3>
                  <p className="text-white/50 mb-4 md:mb-6 max-w-lg text-sm md:text-base line-clamp-2 md:line-clamp-none">{project.description}</p>
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-xs md:text-sm font-semibold hover:bg-white/90 transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
