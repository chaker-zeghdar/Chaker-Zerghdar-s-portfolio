export interface TimelineItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  type: "work" | "education" | "achievement";
}

export const timeline: TimelineItem[] = [
  {
    id: "1",
    title: "Professional Web Development Certificate",
    company: "Tutoriland | E-learning Platform",
    period: "2024",
    description: "Completed comprehensive web development certification, solidifying foundational knowledge in modern web technologies, best practices, and industry standards.",
    type: "education",
  },
  {
    id: "2",
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2025",
    description: "Building and deploying full-stack e-commerce solutions for clients. Tech stack: React + TypeScript, Express.js, Firebase, Supabase, and MongoDB Atlas. Specializing in responsive UIs, scalable backends, and seamless BaaS integrations.",
    type: "work",
  },
  {
    id: "3",
    title: "Finovia Expo - National Hackathon Winner",
    company: "Ecole Nationale Supérieure de Management",
    period: "2025",
    description: "Won 1st place in the national hackathon competition. Demonstrated full-stack development expertise by building a complete solution that enhance trust and transparency between users.",
    type: "achievement",
  },
  {
    id: "4",
    title: "Trainer & Mentor",
    company: "GDG Batna Ideathon",
    period: "2025",
    description: "Guided and trained development teams in idea validation, technical feasibility, and pitching strategies. Helped teams refine their concepts and present compelling pitches to investors and judges.",
    type: "achievement",
  },
  {
    id: "5",
    title: "Featured Speaker",
    company: "Ennahar TV",
    period: "2026",
    description: "Interviewed on national television discussing the future of software development and AI's role in Algeria's tech ecosystem. Shared insights on emerging technologies and opportunities in the North African tech landscape.",
    type: "achievement",
  },
  {
    id: "6",
    title: "Self-Taught Developer",
    company: "Independent Learning",
    period: "2025 - 2026",
    description: "Built expertise in React + TypeScript, Express.js, and modern backend-as-a-service platforms through dedicated self-study, open-source contributions, and personal projects.",
    type: "education",
  },
];
