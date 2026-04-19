import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, MessageCircle, ArrowUpRight, Check } from "lucide-react";

import { SparklesCore } from "@/src/components/ui/sparkles";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("zeghdarchaker@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/20 font-medium mb-6">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white relative z-20">
            Let's work together.
          </h2>
          
          <div className="w-full max-w-2xl mx-auto relative mb-10 min-h-[160px] flex justify-center mt-4">
            {/* Background Sparkles */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Gradients */}
              <div className="absolute inset-x-0 mx-auto top-0 bg-gradient-to-r from-transparent via-white/50 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-0 mx-auto top-0 bg-gradient-to-r from-transparent via-white/50 to-transparent h-px w-3/4" />
              
              {/* Core component */}
              <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,white_20%,transparent_100%)]">
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />
              </div>
            </div>

            <p className="text-base text-white/30 max-w-md mx-auto leading-relaxed relative z-20 pt-8">
              Have a project in mind? I'm always open to new opportunities and collaborations.
            </p>
          </div>

          <a
            href="mailto:zeghdarchaker@gmail.com"
            onClick={handleCopyEmail}
            className="relative z-30 inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-base md:text-lg hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] min-w-[300px] cursor-pointer hide-on-nav"
          >
            {copied ? (
              <>
                Email copied!
                <Check size={20} className="text-green-600" />
              </>
            ) : (
              <>
                zeghdarchaker@gmail.com
                <ArrowUpRight size={20} />
              </>
            )}
          </a>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            {[
              { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/chaker.zdr/?hl=en" },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/chaker-zeghdar-89723b344/" },
              { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/213775919347" },
              { icon: Github, label: "GitHub", href: "https://github.com/chaker-zeghdar" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/[0.08] text-white/40 hover:text-white/80 hover:border-white/20 transition-all text-base font-semibold"
              >
                <Icon size={20} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
