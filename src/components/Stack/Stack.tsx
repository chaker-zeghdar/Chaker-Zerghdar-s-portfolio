import { motion } from "framer-motion";
import { skills } from "@/src/data/skills";
import { 
  Code2, 
  Database, 
  Cpu, 
  Globe, 
  Layers, 
  Terminal, 
  Figma, 
  GitBranch, 
  Cloud,
  Box,
  Zap
} from "lucide-react";

const iconMap: Record<string, any> = {
  react: Cpu,
  typescript: Code2,
  nextjs: Globe,
  tailwind: Layers,
  threejs: Box,
  framer: Zap,
  nodejs: Terminal,
  postgresql: Database,
  graphql: Code2,
  redis: Database,
  docker: Box,
  git: GitBranch,
  aws: Cloud,
  figma: Figma,
};

export function Stack() {
  const categories = ["Frontend", "Backend", "Tools"];

  return (
    <section id="stack" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/20 font-medium mb-4">
            Technologies
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
            >
              <h3 className="text-[11px] font-semibold mb-8 uppercase tracking-[0.25em] text-white/30">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-5">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => {
                    const Icon = iconMap[skill.icon] || Code2;
                    return (
                      <div key={skill.name} className="flex items-center gap-3 group">
                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/[0.06] group-hover:border-white/15 group-hover:bg-white/[0.08] transition-all duration-300">
                          <Icon className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
                        </div>
                        <span className="text-xs font-medium text-white/35 group-hover:text-white/60 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
