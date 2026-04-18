export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  repoUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Website",
    description: "UPRISING PROJECT, A modern e-commerce website.",
    tags: ["React","TypeScript", "Tailwind","Supabase"],
    image: "https://res.cloudinary.com/dfxhtf6xh/image/upload/v1773786173/Screenshot_2026-03-17_231812_kkslkf.png",
    liveUrl: "https://uprisingproject.vercel.app/",
    repoUrl: "#",
    featured: true,
  },
  {
    id: "2",
    title: "HZ Phone",
    description: "A modern web platform showcasing smartphones with a clean UI and smooth user experience.",
    tags: ["Next.js", "three.js", "express"],
    image: "https://res.cloudinary.com/dfxhtf6xh/image/upload/v1766090423/Screenshot_2025-12-18_213043_nmyn00.png",
    liveUrl: "https://hz-phone-store-yvxa.vercel.app/",
    repoUrl: "#",
    featured: true,
  },
  {
    id: "3",
    title: "Thi9ati",
    description: "A digital platform built to enhance trust and transparency between users.",
    tags: ["React", "TypeScript", "Node.js", "AI model"],
    image: "https://res.cloudinary.com/dfxhtf6xh/image/upload/v1766090423/Screenshot_2025-12-18_213009_ecpi0u.png",
    liveUrl: "https://thi9ati.vercel.app/",
    repoUrl: "#",
  },
  {
    id: "4",
    title: "KoraLink",
    description: "Football stadium booking platform.",
    tags: ["Next.js", "TypeScript", "express", "AI agent"],
    image: "https://res.cloudinary.com/dfxhtf6xh/image/upload/v1769462413/Screenshot_2026-01-26_221436_haxemr.png",
    liveUrl: "https://koralink-psi.vercel.app/",
    repoUrl: "#",
  }
];
