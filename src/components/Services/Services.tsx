import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/src/data/services";
import { ServiceDetails } from "./ServiceDetails";

export function Services() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openIndex = services.findIndex((s) => s.id === openId);

  return (
    <section id="services" className="py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/20 font-medium mb-4">
            What I do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.button
                  type="button"
                  layoutId={`service-${service.id}`}
                  onClick={() => setOpenId(service.id)}
                  className="group w-full h-full text-left p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-colors duration-500 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                >
                  <div className="flex items-start gap-5">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all duration-300 shrink-0">
                      <Icon className="w-5 h-5 text-white/50 group-hover:text-white/80 transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold mb-2 text-white/90 group-hover:text-white transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/30 leading-relaxed mb-5 group-hover:text-white/40 transition-colors">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/40 group-hover:text-white transition-colors">
                        Learn more
                        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {openId && openIndex >= 0 && (
          <ServiceDetails
            key={openId}
            service={services[openIndex]}
            index={openIndex}
            total={services.length}
            onClose={() => setOpenId(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
