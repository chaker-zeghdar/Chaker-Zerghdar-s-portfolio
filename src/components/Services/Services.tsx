import { motion } from "framer-motion";
import { Globe, ShoppingCart, Rocket, Users } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Websites & Dashboards",
    description: "Landing pages, portfolio sites, and admin dashboards built with modern frameworks. Designed to convert and built to perform.",

  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Full-featured online stores with seamless checkout experiences, inventory management, and payment integration.",

  },
  {
    icon: Rocket,
    title: "SaaS & Startup MVP",
    description: "Rapidly prototyped and production-ready MVPs to validate your idea and get to market fast. Built to iterate.",

  },
  {
    icon: Users,
    title: "Community Management",
    description: "Social media strategy, content planning, and community engagement to grow and nurture your audience.",

  },
];

export function Services() {
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
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all duration-300 shrink-0">
                    <Icon className="w-5 h-5 text-white/50 group-hover:text-white/80 transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-2 text-white/90 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/30 leading-relaxed mb-4 group-hover:text-white/40 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
