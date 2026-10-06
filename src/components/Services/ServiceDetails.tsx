import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  X,
  Check,
  ArrowUpRight,
  MessageCircle,
  Megaphone,
  Eye,
  MousePointerClick,
  ShoppingBag,
  Layers,
} from "lucide-react";
import { WHATSAPP_NUMBER, type Service } from "@/src/data/services";

/* ───────────── Social / Meta Ads special block ───────────── */
const FUNNEL = [
  {
    icon: Eye,
    stage: "Awareness",
    goal: "Get seen by the right people",
    items: ["Reels & short video", "Reach / video-view campaigns", "Interest & broad targeting"],
    width: "100%",
  },
  {
    icon: MousePointerClick,
    stage: "Consideration",
    goal: "Turn viewers into followers & leads",
    items: ["Carousels & stories", "Messages / lead campaigns", "Engaged-audience retargeting"],
    width: "82%",
  },
  {
    icon: ShoppingBag,
    stage: "Conversion",
    goal: "Turn leads into customers",
    items: ["Offers & social proof", "Sales campaigns with Pixel", "Lookalike audiences"],
    width: "64%",
  },
];

const WEEK: { day: string; kind: string }[] = [
  { day: "Mon", kind: "Reel" },
  { day: "Tue", kind: "Story" },
  { day: "Wed", kind: "Carousel" },
  { day: "Thu", kind: "Reel" },
  { day: "Fri", kind: "Ad test" },
  { day: "Sat", kind: "Story" },
  { day: "Sun", kind: "Report" },
];

const KIND_STYLE: Record<string, string> = {
  Reel: "bg-pink-400/15 text-pink-200 border-pink-300/20",
  Story: "bg-amber-400/15 text-amber-200 border-amber-300/20",
  Carousel: "bg-sky-400/15 text-sky-200 border-sky-300/20",
  "Ad test": "bg-indigo-400/20 text-indigo-200 border-indigo-300/25",
  Report: "bg-emerald-400/15 text-emerald-200 border-emerald-300/20",
};

function SocialBoard() {
  return (
    <div className="space-y-4">
      {/* Funnel */}
      <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-indigo-500/[0.07] to-transparent p-5 md:p-6">
        <div className="flex items-center gap-2 mb-5">
          <Megaphone size={15} className="text-indigo-300" />
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">How I run Meta Ads: the full funnel</p>
        </div>
        <div className="space-y-3">
          {FUNNEL.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.stage}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.1 }}
                style={{ width: f.width }}
                className="min-w-full md:min-w-0 mx-auto rounded-xl border border-white/[0.08] bg-white/[0.03] p-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="p-1.5 rounded-lg bg-indigo-400/15 border border-indigo-300/20">
                    <Icon size={14} className="text-indigo-200" />
                  </span>
                  <span className="text-sm font-semibold text-white/90">{f.stage}</span>
                  <span className="text-xs text-white/35 hidden sm:inline">· {f.goal}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {f.items.map((it) => (
                    <span key={it} className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.05] text-white/55">
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="grid md:grid-cols-[1.4fr_1fr] gap-4">
        {/* Content week */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-4">A typical content week</p>
          <div className="grid grid-cols-7 gap-1.5">
            {WEEK.map((w, i) => (
              <motion.div
                key={w.day}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-[10px] text-white/30">{w.day}</span>
                <span
                  className={`w-full text-center text-[9px] sm:text-[10px] font-medium py-2 rounded-md border ${KIND_STYLE[w.kind]}`}
                >
                  {w.kind}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ads Manager structure */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
          <div className="flex items-center gap-2 mb-4">
            <Layers size={14} className="text-white/40" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Campaign structure</p>
          </div>
          <div className="font-mono text-[11px] leading-6 text-white/55">
            <div><span className="text-indigo-300">▸</span> Campaign <span className="text-white/30">· objective</span></div>
            <div className="pl-4"><span className="text-sky-300">▸</span> Ad set A <span className="text-white/30">· audience</span></div>
            <div className="pl-4"><span className="text-sky-300">▸</span> Ad set B <span className="text-white/30">· lookalike</span></div>
            <div className="pl-8"><span className="text-pink-300">▸</span> Creative 1 vs 2 <span className="text-white/30">· A/B</span></div>
            <div className="pl-8"><span className="text-emerald-300">✓</span> Winner gets the budget</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────── Details panel (modal) ───────────── */
export function ServiceDetails({
  service,
  index,
  total,
  onClose,
}: {
  service: Service;
  index: number;
  total: number;
  onClose: () => void;
}) {
  const Icon = service.icon;
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.whatsappMessage)}`;

  // Esc to close + lock page scroll
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[120] flex items-end md:items-center justify-center md:p-6" role="dialog" aria-modal="true" aria-label={service.title}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
      />

      <motion.div
        layoutId={`service-${service.id}`}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className="relative w-full md:max-w-3xl max-h-[92vh] md:max-h-[88vh] flex flex-col rounded-t-3xl md:rounded-3xl border border-white/[0.08] bg-[#0b0b0f]/95 backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.6)] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-start gap-4 p-6 md:p-8 pb-5 border-b border-white/[0.06]">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
            <Icon className="w-5 h-5 text-white/80" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/25 mb-1">
              Service {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{service.title}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-full border border-white/10 text-white/50 hover:text-white hover:bg-white/5 transition-colors shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="flex-1 overflow-y-auto overscroll-contain p-6 md:p-8 space-y-9"
        >
          <div>
            <p className="text-lg md:text-xl font-medium text-white/85 leading-snug mb-3">{service.tagline}</p>
            <p className="text-sm md:text-[15px] text-white/45 leading-relaxed">{service.details}</p>
          </div>

          {service.variant === "social" && <SocialBoard />}

          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 mb-4">What you get</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex gap-3 text-sm text-white/65">
                  <Check size={16} className="text-emerald-300/80 mt-0.5 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 mb-4">How we work</p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {service.process.map((p, i) => (
                <li key={p.title} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <span className="text-xs font-mono text-white/25">0{i + 1}</span>
                  <p className="text-sm font-semibold text-white/85 mt-1 mb-1">{p.title}</p>
                  <p className="text-xs text-white/40 leading-relaxed">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 mb-4">Tools</p>
            <div className="flex flex-wrap gap-2">
              {service.tools.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs text-white/60">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer CTAs */}
        <div className="p-4 md:p-6 border-t border-white/[0.06] bg-black/30 flex flex-col sm:flex-row gap-3 sm:items-center">
          <a
            href={service.work.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 flex items-center justify-between gap-3 px-4 py-3 rounded-2xl border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.03] transition-all"
          >
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-white/85">{service.work.label}</span>
              <span className="block text-xs text-white/35 truncate">{service.work.caption}</span>
            </span>
            <ArrowUpRight size={18} className="text-white/50 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-black text-sm font-bold hover:bg-white/90 active:scale-[0.98] transition-all"
          >
            <MessageCircle size={17} />
            Let's talk about it
          </a>
        </div>
      </motion.div>
    </div>
  );
}
