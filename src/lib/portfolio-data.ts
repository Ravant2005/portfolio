import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Code2,
  Layers,
  Boxes,
  Trophy,
  GraduationCap,
  Rocket,
  Link2,
  Bot,
  Radar,
  Cpu,
  Sparkles,
  ShieldCheck,
  Database,
  GitBranch,
  Globe,
} from "lucide-react";

export const profile = {
  name: "S. Ravant Vignesh",
  shortName: "Ravant",
  role: "AI/ML Engineer",
  tagline: "Generative AI & Multi-Agent Systems",
  location: "Chennai, Tamil Nadu, India",
  email: "team.yovaanai@gmail.com",
  phone: "+91 8124672741",
  linkedin: "https://linkedin.com/in/s-ravant-vignesh",
  github: "https://github.com/Ravant2005",
  bio: "AI/ML Engineer building production-grade multi-agent systems, LLM pipelines, and full-stack AI applications. Proficient in LangChain, RAG architectures, Hugging Face Transformers, FastAPI, and Generative AI. National Hackathon Winner (₹1,00,000) for India's first AI + Blockchain certificate authentication system.",
  seeking: "AI/ML Engineer · Generative AI · AI Product Development roles",
};

export const stats = [
  { value: "₹1,00,000", label: "National Hackathon Prize", sub: "AGAM 9.0 · 1st Place" },
  { value: "50+", label: "Students mentored", sub: "AI & aerospace" },
  { value: "2,000+", label: "Leaders supported", sub: "Global consultancy build" },
  { value: "90+", label: "Teams defeated", sub: "CertiChain win" },
];

export const ventures = [
  {
    name: "Yovaan AI",
    role: "Founder & AI Engineer",
    period: "Jan 2026 — Present",
    logo: "/images/yovaanai-logo.jpg",
    accent: "ink",
    description:
      "A privacy-first, memory-preservation AI platform leveraging edge AI and LLM integration for long-term contextual conversational intelligence. Currently in active pre-MVP development.",
    bullets: [
      "Architecting privacy-first memory preservation with edge AI + LLM integration",
      "Building the full product stack: LLM integration, FastAPI backend, Supabase vector & relational database",
      "Responsible data handling for sensitive personal memory data, MVP-bound",
    ],
    tags: ["LLM Integration", "Edge AI", "FastAPI", "Supabase", "Privacy-First"],
    icon: Brain,
  },
  {
    name: "Baarak",
    role: "Founder",
    period: "AI Skill Training Platform",
    logo: "/images/baarak-logo.jpg",
    accent: "cinnabar",
    website: "baarak.in",
    description:
      "An AI intelligence skill-training platform for college students. Baarak analyses the live market and teaches the skills the market actually demands — so students meet industry requirements. It understands each student and delivers personalised training, so anyone can learn anything by leveraging AI.",
    bullets: [
      "Market-aware curriculum: AI analyses the current job market to surface in-demand skills",
      "Personalised training paths adapted to each learner's pace and gaps",
      "\"We build it with you\" — content literally unfolds with the student, not at them",
    ],
    tags: ["AI Education", "Personalised Learning", "Market Intelligence", "College Students"],
    icon: GraduationCap,
  },
];

export const experience = [
  {
    role: "Founder & AI Engineer",
    company: "Yovaan AI",
    place: "Chennai",
    period: "Jan 2026 — Present",
    summary:
      "Designing a privacy-first memory-preservation AI platform leveraging edge AI and LLM integration, focused on long-term contextual conversational intelligence.",
    points: [
      "Architecting the full product stack including LLM model integration, FastAPI backend, and Supabase vector/relational database",
      "Building toward an MVP with responsible data handling for sensitive personal memory data",
    ],
    icon: Rocket,
  },
  {
    role: "Technical Instructor & Web Dev Intern",
    company: "Vaayusastra Aerospace",
    place: "Chennai · IIT Madras incubated",
    period: "May 2026 — Jun 2026",
    summary:
      "Trained and mentored 50+ students in AI and aerospace fundamentals at an IIT Madras-incubated startup, while contributing AI-driven features for a CubeSat satellite system.",
    points: [
      "Built drone flight & aerodynamic calculation simulation tools deployed to the company web platform",
      "Tools are used to teach hundreds of students across programs",
    ],
    icon: Cpu,
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Leaders in Lipstick",
    place: "Chennai",
    period: "Apr 2026 — Jun 2026",
    summary:
      "Built and deployed the complete corporate website and digital service infrastructure for a global behavioural-change & ROI consultancy supporting 2,000+ leaders across 50+ organisations.",
    points: [
      "End-to-end full-stack solution: client onboarding, service discovery, coaching pipelines, ROI portals",
      "Scalable React/Next.js front end + Node.js/Express back end under live production timelines",
    ],
    icon: Globe,
  },
];

export const projects = [
  {
    name: "CertiChain",
    tagline: "India's first AI + Blockchain certificate authentication",
    award: "1st Prize · AGAM 9.0 National Hackathon · ₹1,00,000",
    description:
      "A tamper-proof certificate issuance system storing PDFs on IPFS and anchoring SHA-256 hashes on a Polygon smart contract — eliminating forgery and centralized trust across the certificate lifecycle.",
    points: [
      "Byte-level tamper detection against IPFS originals with on-chain hash verification",
      "MetaMask wallet authentication + QR-code validation for zero-trust public verification",
      "Defeated 90+ teams nationally — recognised as India's first AI + Blockchain authenticity system",
    ],
    tags: ["Polygon", "IPFS", "Smart Contracts", "SHA-256", "MetaMask", "QR Verify"],
    icon: Link2,
    featured: true,
  },
  {
    name: "Orchestrix",
    tagline: "Distributed multi-agent research platform",
    description:
      "A distributed system of four specialised AI agents (Discovery, Analysis, Summary, Citation) orchestrated via FastAPI with switchable local/distributed execution for scalable research workflows.",
    points: [
      "Integrated arXiv & Semantic Scholar APIs for paper discovery",
      "LangChain-based trend analysis, LLM summarisation, multi-format citation generation (APA/MLA/IEEE)",
      "Live React dashboard visualising agent activity",
    ],
    tags: ["Multi-Agent", "FastAPI", "LangChain", "arXiv", "React"],
    icon: Bot,
    featured: false,
  },
  {
    name: "AI Tool Discovery Platform",
    tagline: "Autonomous SaaS tracker",
    description:
      "An autonomous pipeline scraping 50+ AI tools daily from GitHub Trending, Product Hunt, and Hugging Face, applying NLP summarisation, smart categorisation, and a custom hype-score algorithm.",
    points: [
      "Production Next.js dashboard with real-time stats, advanced filtering, and CI/CD scheduling",
      "APScheduler-driven daily runs with 99%+ uptime",
      "Systematic AI-tools tracking across NLP / CV / Audio categories",
    ],
    tags: ["Next.js", "Web Scraping", "NLP", "APScheduler", "CI/CD"],
    icon: Radar,
    featured: false,
  },
];

export interface SkillGroup {
  category: string;
  icon: LucideIcon;
  accent: "ink" | "cinnabar" | "moss" | "gold" | "clay";
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "AI/ML & Generative AI",
    icon: Brain,
    accent: "cinnabar",
    skills: [
      "LangChain",
      "RAG",
      "Hugging Face Transformers",
      "OpenAI API",
      "Prompt Engineering",
      "NLP",
      "Feature Engineering",
      "Multi-Agent Systems",
      "Generative AI",
      "ML Pipelines",
      "Reinforcement Learning",
    ],
  },
  {
    category: "Programming Languages",
    icon: Code2,
    accent: "ink",
    skills: ["Python", "Java", "C", "Solidity", "SQL"],
  },
  {
    category: "Full-Stack & DevOps",
    icon: Layers,
    accent: "moss",
    skills: [
      "FastAPI",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Supabase",
      "MongoDB",
      "GitHub Actions",
      "CI/CD",
      "Vercel",
      "Render",
      "APScheduler",
    ],
  },
  {
    category: "Data & APIs",
    icon: Database,
    accent: "gold",
    skills: [
      "Pandas",
      "NumPy",
      "Web Scraping",
      "ETL Processes",
      "arXiv API",
      "Semantic Scholar API",
      "Statistical Analysis",
    ],
  },
  {
    category: "Blockchain & Web3",
    icon: Boxes,
    accent: "clay",
    skills: [
      "Polygon",
      "IPFS",
      "Smart Contracts",
      "ethers.js",
      "MetaMask",
      "SHA-256 Hashing",
      "QR-Code Verification",
    ],
  },
  {
    category: "Foundation",
    icon: ShieldCheck,
    accent: "ink",
    skills: ["Systems Thinking", "Mentorship", "Technical Instruction", "Product Architecture"],
  },
];

export const achievements = [
  {
    title: "1st Prize — AGAM 9.0 International Entrepreneur Summit",
    detail: "₹1,00,000 — CertiChain selected as India's first AI + Blockchain authenticity system, beating 90+ teams nationally.",
    icon: Trophy,
    accent: "cinnabar" as const,
    image: "/images/agam-award.jpg",
    imageAlt: "Ravant Vignesh holding the AGAM 9.0 Best Agile Mind winner plaque with the ₹1,00,000 prize cheque",
  },
  {
    title: "St. Chavara Exemplar Award — 1st Prize (2023)",
    detail:
      "Represented school at the Preshitha Province-level competition against thousands of students from 20+ schools — first place for excellence across sports, communication, leadership, service, and academics.",
    icon: Sparkles,
    accent: "gold" as const,
  },
  {
    title: "State Level English Rank — 10th in Tamil Nadu",
    detail:
      "9th in Chennai District — Bharath Institute of English competitive examination.",
    icon: GraduationCap,
    accent: "moss" as const,
  },
];

export const education = {
  degree: "B.Tech in Artificial Intelligence & Data Science",
  cgpa: "8.2 / 10",
  period: "Sep 2025 — Jul 2029",
  school: "Rajalakshmi Institute of Technology, Chennai",
  icon: GraduationCap,
};

export const volunteer = {
  role: "Tech Lead & Organizer",
  org: "Futurepreneur",
  place: "Andaman & Nicobar Islands",
  period: "Nov 2025",
  detail:
    "Led and organized the Futurepreneur entrepreneur summit — teaching emerging technologies (AI, web development, AI tools, machine learning) to 10+ schools, 4 NGOs, and 1000+ students.",
  image: "/images/futurepreneur-event.jpg",
  imageAlt: "Ravant Vignesh speaking at the Futurepreneur 2025 zonal prize event",
};

export const gallery = [
  {
    src: "/images/futurepreneur-event.jpg",
    alt: "Speaking at the Futurepreneur 2025 zonal prize event",
    caption: "Futurepreneur 2025 — Zonal Prize",
    tag: "Speaking",
  },
  {
    src: "/images/teaching-workshop.jpg",
    alt: "Teaching AI to a classroom of students in uniform",
    caption: "Workshop — teaching AI to students",
    tag: "Teaching",
  },
  {
    src: "/images/agam-award.jpg",
    alt: "Receiving the AGAM 9.0 Best Agile Mind award with ₹1,00,000 prize",
    caption: "AGAM 9.0 — Best Agile Mind · ₹1,00,000",
    tag: "Award",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#ventures", label: "Ventures" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Awards" },
  { href: "#recommendations", label: "Recs" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];
