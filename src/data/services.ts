import { Globe, ShoppingCart, Rocket, Users, type LucideIcon } from "lucide-react";

export const WHATSAPP_NUMBER = "213775919347";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  /** Short text on the card */
  description: string;
  /** One-line hook at the top of the details panel */
  tagline: string;
  /** Longer paragraph in the details panel */
  details: string;
  /** "What you get" list */
  deliverables: string[];
  /** How the work happens, step by step */
  process: { title: string; text: string }[];
  /** Tools / tech chips */
  tools: string[];
  /** "See my work" button */
  work: { label: string; href: string; caption: string };
  /** Pre-filled WhatsApp message for the contact button */
  whatsappMessage: string;
  /** Special layout for the community / ads service */
  variant?: "default" | "social";
}

export const services: Service[] = [
  {
    id: "websites",
    icon: Globe,
    title: "Websites & Dashboards",
    description:
      "Landing pages, portfolio sites, and admin dashboards built with modern frameworks. Designed to convert and built to perform.",
    tagline: "A website that looks like your brand and works like a salesperson.",
    details:
      "From a one-page landing to a full multilingual company site or an internal dashboard, I design and build fast, responsive websites that are easy to update. Arabic (RTL), French and English versions are built in from day one, not bolted on later.",
    deliverables: [
      "Custom design: no templates, built around your brand",
      "Arabic / French / English with proper RTL layout",
      "Mobile-first, fast and SEO-ready",
      "Admin dashboard or CMS so you can edit content yourself",
      "Contact forms, WhatsApp buttons and analytics set up",
      "Deployment, domain and hosting handled for you",
    ],
    process: [
      { title: "Discovery", text: "We define goals, pages and the message your site must deliver." },
      { title: "Design", text: "Layout and visual direction you approve before any code." },
      { title: "Build", text: "Development with live previews you can check at every step." },
      { title: "Launch", text: "Go live, connect your domain and hand over the keys." },
    ],
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase", "Vercel"],
    work: {
      label: "See Digex",
      href: "https://digex-chi.vercel.app/ar",
      caption: "Agency website · Arabic-first, FR & EN, dark mode",
    },
    whatsappMessage: "Hi Chaker, I'm interested in a website / dashboard. Here's my project:",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Full-featured online stores with seamless checkout experiences, inventory management, and payment integration.",
    tagline: "An online store built for how Algerians actually buy.",
    details:
      "Cash on delivery, delivery to every wilaya, WhatsApp orders, and customers who browse on their phones. I build stores around these realities, with a clean back-office to manage products, stock and orders, and tracking pixels ready for your ad campaigns.",
    deliverables: [
      "Product catalogue with categories, variants and search",
      "Order flow with cash on delivery and wilaya-based shipping",
      "WhatsApp ordering and click-to-chat",
      "Admin panel for products, stock and orders",
      "Meta & TikTok Pixel installed for retargeting",
      "Multilingual storefront (AR / FR / EN)",
    ],
    process: [
      { title: "Catalogue", text: "We structure your products, prices and delivery zones." },
      { title: "Storefront", text: "A design that makes your products the hero." },
      { title: "Checkout", text: "Order flow, notifications and back-office tested end to end." },
      { title: "Growth", text: "Pixels and tracking ready so your ads can sell from day one." },
    ],
    tools: ["Next.js", "React", "Tailwind CSS", "Supabase", "Meta Pixel", "TikTok Pixel"],
    work: {
      label: "See JTECH",
      href: "https://www.jtechmediaservices.com/",
      caption: "Phone & computer store · delivery to 69 wilayas",
    },
    whatsappMessage: "Hi Chaker, I'd like to build an online store. Here's what I sell:",
  },
  {
    id: "saas",
    icon: Rocket,
    title: "SaaS & Startup MVP",
    description:
      "Rapidly prototyped and production-ready MVPs to validate your idea and get to market fast. Built to iterate.",
    tagline: "From idea to a working product your first users can try.",
    details:
      "I help founders and student teams turn an idea into a real product: authentication, database, dashboards and AI features included. The focus is shipping the smallest version that proves the idea, then iterating fast. It's the same approach that won 1st place at Finovia Expo with Thi9ati.",
    deliverables: [
      "Scoping workshop to define the MVP feature set",
      "User accounts, roles and authentication",
      "Database, API and admin dashboard",
      "AI features (LLMs, scoring, assistants) where they add value",
      "Pitch-ready landing page and demo",
      "Clean codebase you can scale with a team",
    ],
    process: [
      { title: "Scope", text: "Cut the idea down to the features that prove it works." },
      { title: "Prototype", text: "Clickable flows to test with real users early." },
      { title: "Ship", text: "Production MVP with auth, data and analytics." },
      { title: "Iterate", text: "Improve from user feedback, week after week." },
    ],
    tools: ["Next.js", "TypeScript", "Node.js", "Supabase", "Firebase", "OpenAI / Groq", "Vercel"],
    work: {
      label: "See Thi9ati",
      href: "https://thi9ati.vercel.app/",
      caption: "AI trust-score platform · 1st place Finovia Expo",
    },
    whatsappMessage: "Hi Chaker, I have a SaaS / startup idea I'd like to build:",
  },
  {
    id: "community",
    icon: Users,
    title: "Community Management",
    description:
      "Social media strategy, content planning, and community engagement to grow and nurture your audience.",
    tagline: "Content that builds a community, and ads that turn it into customers.",
    details:
      "I run the full loop: strategy, content calendar, community engagement and paid campaigns on Meta (Facebook & Instagram). I don't treat organic and paid separately. Content builds trust, ads scale what works, and the numbers decide the next move.",
    deliverables: [
      "Social media strategy & monthly content calendar",
      "Post, reel and story concepts with captions",
      "Community engagement: comments, DMs, events",
      "Meta Ads campaigns: setup, targeting & creatives",
      "Pixel, custom & lookalike audiences, retargeting",
      "Monthly report with results and next actions",
    ],
    process: [
      { title: "Audit", text: "Where your pages stand, who your audience is, what competitors do." },
      { title: "Plan", text: "Content pillars, calendar and campaign structure." },
      { title: "Create & launch", text: "Content goes out, campaigns go live, community gets answered." },
      { title: "Optimise", text: "Weekly A/B tests on creatives and audiences, budget moved to winners." },
    ],
    tools: ["Meta Ads Manager", "Meta Business Suite", "Meta Pixel", "Canva", "CapCut", "Instagram", "Facebook"],
    work: {
      label: "See GDGC Batna",
      href: "https://www.instagram.com/gdgc.batna/?hl=en",
      caption: "Community & content for GDG on Campus Batna",
    },
    whatsappMessage: "Hi Chaker, I need help with social media / Meta Ads for my brand:",
    variant: "social",
  },
];
