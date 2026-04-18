export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools";
  icon: string;
}

export const skills: Skill[] = [
  { name: "React", category: "Frontend", icon: "react" },
  { name: "TypeScript", category: "Frontend", icon: "typescript" },
  { name: "Next.js", category: "Frontend", icon: "nextjs" },
  { name: "Tailwind CSS", category: "Frontend", icon: "tailwind" },
  { name: "Three.js", category: "Frontend", icon: "threejs" },
  { name: "Framer Motion", category: "Frontend", icon: "framer" },
  { name: "Node.js", category: "Backend", icon: "nodejs" },
  { name: "PostgreSQL", category: "Backend", icon: "postgresql" },
  { name: "GraphQL", category: "Backend", icon: "graphql" },
  { name: "Redis", category: "Backend", icon: "redis" },
  { name: "Docker", category: "Tools", icon: "docker" },
  { name: "Git", category: "Tools", icon: "git" },
  { name: "AWS", category: "Tools", icon: "aws" },
  { name: "Figma", category: "Tools", icon: "figma" },
];
