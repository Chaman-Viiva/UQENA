export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categories: string[];
  summary: string;
  objective: string;
  features: string[];
  technologies: string[];
  image: string;
  accent: string;
  conceptual: true;
};

export const projectCategories = [
  "All",
  "Healthcare",
  "Fintech",
  "Real Estate",
  "Education",
  "E-commerce",
  "Enterprise",
  "AI",
] as const;

export const projects: Project[] = [
  {
    slug: "careflow-health",
    title: "CareFlow Health",
    subtitle: "Intelligent healthcare management platform",
    category: "Healthcare",
    categories: ["Healthcare", "Enterprise"],
    summary:
      "A conceptual operations platform that helps clinics coordinate appointments, care teams, and patient follow-ups in one calm workspace.",
    objective:
      "Demonstrate how healthcare operators can reduce administrative friction while keeping patient journeys visible across roles.",
    features: [
      "Role-based dashboards for clinicians and administrators",
      "Appointment and capacity planning views",
      "Secure patient profile timelines",
      "Task queues for follow-ups and referrals",
      "Operational reporting without spreadsheet sprawl",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    image: "/images/projects/careflow-bg.jpg",
    accent: "#3B82F6",
    conceptual: true,
  },
  {
    slug: "havenly-market",
    title: "Havenly Market",
    subtitle: "Modern real estate marketplace",
    category: "Real Estate",
    categories: ["Real Estate"],
    summary:
      "A demonstration marketplace experience for discovering properties, comparing options, and connecting with advisors.",
    objective:
      "Show how property discovery can feel editorial and data-rich at once — without overwhelming high-intent users.",
    features: [
      "Map and list discovery with refined filters",
      "Saved searches and comparison boards",
      "Agent inquiry workflows",
      "Property detail storytelling layouts",
      "Mobile-first browsing patterns",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "/images/projects/havenly-bg.jpg",
    accent: "#885CF6",
    conceptual: true,
  },
  {
    slug: "ledgerly",
    title: "Ledgerly",
    subtitle: "Fintech dashboard and payment experience",
    category: "Fintech",
    categories: ["Fintech", "Enterprise"],
    summary:
      "A conceptual finance console designed for clear balances, transaction clarity, and controlled payment actions.",
    objective:
      "Illustrate how financial products can communicate status, risk, and next actions without visual noise.",
    features: [
      "Account overview with progressive disclosure",
      "Transaction search and categorization",
      "Payment initiation with confirmation states",
      "Team permissions and approval trails",
      "Exportable activity summaries",
    ],
    technologies: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Redis"],
    image: "/images/industries/fintech.jpg",
    accent: "#22C55E",
    conceptual: true,
  },
  {
    slug: "lumen-learn",
    title: "Lumen Learn",
    subtitle: "AI-powered learning platform",
    category: "Education",
    categories: ["Education", "AI"],
    summary:
      "A sample learning product that combines structured courses with an AI study companion for guided practice.",
    objective:
      "Explore how AI assistance can support learners while keeping educators in control of curriculum and progress.",
    features: [
      "Course pathways and module progress",
      "AI study prompts grounded in course content",
      "Educator content and cohort tools",
      "Assessment feedback loops",
      "Learner streak and focus analytics",
    ],
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Vector search"],
    image: "/images/projects/lumen-bg.jpg",
    accent: "#F59E0B",
    conceptual: true,
  },
  {
    slug: "orbit-ops",
    title: "Orbit Ops",
    subtitle: "Enterprise workflow automation system",
    category: "Enterprise",
    categories: ["Enterprise", "AI"],
    summary:
      "A conceptual operations hub that routes work, automates handoffs, and surfaces exceptions for human review.",
    objective:
      "Show how growing companies can replace ad-hoc process chains with visible, governable automation.",
    features: [
      "Visual workflow builder concepts",
      "Queue-based exception handling",
      "Cross-system webhook orchestration",
      "Audit logs for automated actions",
      "Team workload visibility",
    ],
    technologies: ["TypeScript", "Node.js", "Redis", "PostgreSQL", "Docker"],
    image: "/images/projects/orbit-bg.jpg",
    accent: "#06B6D4",
    conceptual: true,
  },
  {
    slug: "northline-commerce",
    title: "Northline Commerce",
    subtitle: "E-commerce platform demonstration",
    category: "E-commerce",
    categories: ["E-commerce"],
    summary:
      "A premium retail concept spanning storefront merchandising, checkout clarity, and post-purchase care.",
    objective:
      "Demonstrate a commerce experience where brand presentation and operational readiness reinforce each other.",
    features: [
      "Editorial product storytelling layouts",
      "Fast catalog browsing and filtering",
      "Streamlined checkout states",
      "Order tracking portal",
      "Merchandising admin concepts",
    ],
    technologies: ["Next.js", "React", "Node.js", "Stripe patterns", "Cloudinary-style media"],
    image: "/images/services/web.jpg",
    accent: "#EC4899",
    conceptual: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
