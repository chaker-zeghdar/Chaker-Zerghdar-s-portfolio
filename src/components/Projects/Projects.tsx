import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { featuredProject, projects, type Project } from "@/src/data/projects";

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-2.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.04] text-[10px] md:text-xs font-medium text-white/60"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function LiveLink({ href, label = "Visit site" }: { href: string; label?: string }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-xs md:text-sm font-semibold hover:bg-white/90 transition-colors shrink-0"
    >
      {label}
      <ArrowUpRight size={15} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
    </a>
  );
}

/* ───────────── Featured project: big video + info ───────────── */
function FeaturedProject({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Only play while on screen (saves battery & bandwidth)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-6"
    >
      <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] aspect-video">
        <video
          ref={videoRef}
          src={project.video}
          poster={project.poster}
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-6 md:mt-8 grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-start">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-white/30 font-medium">
              Featured
            </span>
            {project.category && (
              <>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/30">{project.category}</span>
              </>
            )}
          </div>
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3">
            {project.title}
          </h3>
          <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-2xl mb-5">
            {project.description}
          </p>
          <Tags tags={project.tags} />
        </div>
        <LiveLink href={project.liveUrl} />
      </div>
    </motion.article>
  );
}

/* ───────────── Grid card ───────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Wrapper = project.liveUrl ? "a" : "div";
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 2) * 0.1, duration: 0.5 }}
    >
      <Wrapper
        {...(project.liveUrl
          ? { href: project.liveUrl, target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="group block"
      >
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] aspect-[16/10]">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-white/20 border border-dashed border-white/10 rounded-2xl">
              <ImageIcon size={28} strokeWidth={1.5} />
              <span className="text-[11px] uppercase tracking-[0.25em]">Coming soon</span>
            </div>
          )}
          {project.liveUrl && (
            <span className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <ArrowUpRight size={16} />
            </span>
          )}
        </div>

        <div className="mt-5">
          {project.category && (
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 mb-2">{project.category}</p>
          )}
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-2 group-hover:text-white/80 transition-colors">
            {project.title}
          </h3>
          <p className="text-white/50 text-sm md:text-[15px] leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
          <Tags tags={project.tags} />
        </div>
      </Wrapper>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="work" className="py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/20 font-medium mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Selected Works
          </h2>
        </motion.div>

        {/* 1 — featured video */}
        <FeaturedProject project={featuredProject} />

        {/* 2-3 / 4-5 — grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 mt-12 md:mt-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
