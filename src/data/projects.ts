export interface Project {
  id: string;
  title: string;
  /** Short caption shown under the title */
  description: string;
  /** Tech stack, shown as small tags */
  tags: string[];
  /** Screenshot / cover image URL (leave "" to show a "Coming soon" placeholder) */
  image: string;
  /** Live website URL (leave "" to hide the button) */
  liveUrl: string;
  repoUrl?: string;
  /** Optional video (used by the featured project) */
  video?: string;
  /** Optional poster frame shown while the video loads */
  poster?: string;
  /** Optional small label, e.g. "Brand website" */
  category?: string;
  year?: string;
}

/* ───────────────────────── Featured project (big video on top) ───────────────────────── */
export const featuredProject: Project = {
  id: "rifkus",
  title: "Rifkus",
  category: "Brand website · Algerian chips brand",
  year: "2026",
  description:
    "A premium, scroll-driven website for Rifkus, an Algerian chips brand. Product packs float in the hero, the brand story unfolds as you scroll, every flavour gets its own animated showcase, and a B2B form turns shop owners into resellers.",
  tags: ["React", "GSAP ScrollTrigger", "Canvas frame sequences", "Tailwind CSS"],
  image: "",
  video: "https://res.cloudinary.com/dfxhtf6xh/video/upload/v1791312711/rifkus-showcase_piurjf.mp4",
  poster: "https://res.cloudinary.com/dfxhtf6xh/video/upload/so_3.4/v1791312711/rifkus-showcase_piurjf.jpg",
  liveUrl: "https://rifkus-gold.vercel.app/",
};

/* ───────────────────────── Grid projects (2 × 2 under the video) ─────────────────────────
   Fill in each card: image, liveUrl, tags and description.
   Cards with an empty image show a "Coming soon" placeholder. */
export const projects: Project[] = [
  {
    id: "jtech",
    title: "JTECH Media Services",
    category: "E-commerce · Phone store",
    description:
      "Trilingual storefront (Arabic, French, English) for a phone & computer store in Batna: original devices with written warranty, delivery to 69 wilayas, cash on delivery and one-tap WhatsApp ordering.",
    tags: ["Next.js", "Tailwind CSS", "i18n AR · FR · EN", "Meta & TikTok Pixel"],
    image: "/projects/jtech.webp",
    liveUrl: "https://www.jtechmediaservices.com/",
  },
  {
    id: "digex",
    title: "Digex",
    category: "Agency website",
    description:
      "Website for Digex, an Algerian digital agency doing branding, e-commerce and content under one roof. Arabic-first RTL layout with French & English versions and a dark mode.",
    tags: ["Next.js", "Tailwind CSS", "RTL / i18n", "Dark mode"],
    image: "/projects/digex.webp",
    liveUrl: "https://digex-chi.vercel.app/ar",
  },
  {
    id: "aymen-hammami",
    title: "Aymen Hammami",
    category: "Personal portfolio · Video editor",
    description:
      "Portfolio for video editor & social media manager Aymen Hammami (@ah.cutos): a showreel-led site with a horizontal work rail, results in numbers and direct WhatsApp hiring.",
    tags: ["Next.js", "Lenis smooth scroll", "Motion design", "Responsive"],
    image: "/projects/aymen-hammami.webp",
    liveUrl: "https://portfolio-livid-eta-89.vercel.app/",
  },
  {
    id: "thi9ati",
    title: "Thi9ati",
    category: "AI SaaS · 1st place Finovia Expo",
    description:
      "An AI platform that gives Algerian shoppers an instant trust score for any online store, with risk categories, detailed reports and verified badges for merchants.",
    tags: ["Next.js", "TypeScript", "Node.js", "AI model"],
    image: "/projects/thi9ati.webp",
    liveUrl: "https://thi9ati.vercel.app/",
  },
];

/* Previous projects — not shown on the site, kept here so you can reuse them. */
export const archivedProjects: Project[] = [
  {
    id: "uprising",
    title: "E-commerce Website",
    description: "UPRISING PROJECT, A modern e-commerce website.",
    tags: ["React", "TypeScript", "Tailwind", "Supabase"],
    image: "https://res.cloudinary.com/dfxhtf6xh/image/upload/v1773786173/Screenshot_2026-03-17_231812_kkslkf.png",
    liveUrl: "https://uprisingproject.vercel.app/",
  },
  {
    id: "hz-phone",
    title: "HZ Phone",
    description: "A modern web platform showcasing smartphones with a clean UI and smooth user experience.",
    tags: ["Next.js", "three.js", "express"],
    image: "https://res.cloudinary.com/dfxhtf6xh/image/upload/v1766090423/Screenshot_2025-12-18_213043_nmyn00.png",
    liveUrl: "https://hz-phone-store-yvxa.vercel.app/",
  },
  {
    id: "thi9ati",
    title: "Thi9ati",
    description: "A digital platform built to enhance trust and transparency between users.",
    tags: ["React", "TypeScript", "Node.js", "AI model"],
    image: "https://res.cloudinary.com/dfxhtf6xh/image/upload/v1766090423/Screenshot_2025-12-18_213009_ecpi0u.png",
    liveUrl: "https://thi9ati.vercel.app/",
  },
  {
    id: "koralink",
    title: "KoraLink",
    description: "Football stadium booking platform.",
    tags: ["Next.js", "TypeScript", "express", "AI agent"],
    image: "https://res.cloudinary.com/dfxhtf6xh/image/upload/v1769462413/Screenshot_2026-01-26_221436_haxemr.png",
    liveUrl: "https://koralink-psi.vercel.app/",
  },
];
