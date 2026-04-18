import { motion } from "framer-motion";
import { timeline } from "@/src/data/timeline";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import { cn } from "@/src/lib/utils";

export function Timeline() {
  return (
    <section id="timeline" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/20 font-medium mb-4">
            Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Experience
          </h2>
        </motion.div>

        <div className="relative border-l border-white/[0.06] ml-4 md:ml-0 md:border-l-0">
          {/* Central line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.06] -translate-x-1/2" />
          
          {timeline.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={cn(
                "relative mb-12 ml-8 md:ml-0 md:w-1/2",
                i % 2 === 0 ? "md:pr-16 md:text-right md:ml-0" : "md:pl-16 md:ml-auto"
              )}
            >
              {/* Dot */}
              <div 
                className={cn(
                  "absolute top-0 w-9 h-9 rounded-full bg-black border-2 border-white/15 flex items-center justify-center z-10",
                  "left-[-49px] md:left-auto",
                  i % 2 === 0 ? "md:right-[-18px]" : "md:left-[-18px]"
                )}
              >
                {item.type === "work" ? (
                  <Briefcase size={14} className="text-white/40" />
                ) : item.type === "education" ? (
                  <GraduationCap size={14} className="text-white/40" />
                ) : (
                  <Trophy size={14} className="text-white/40" />
                )}
              </div>

              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500">
                <span className="text-white/30 font-medium text-xs mb-2 block tracking-wide">{item.period}</span>
                <h3 className="text-lg font-semibold mb-1 text-white/90">{item.title}</h3>
                <h4 className="text-white/40 font-medium text-sm mb-3">{item.company}</h4>
                <p className="text-white/25 leading-relaxed text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
