export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business, users, constraints, and the outcomes that would make the engagement successful.",
    clientInvolvement:
      "Stakeholder interviews, access to existing materials, and clarification of priorities.",
    deliverables: [
      "Problem framing",
      "User and stakeholder map",
      "Opportunity brief",
      "Initial risk register",
    ],
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "Define scope, architecture direction, milestones, and the sequence that delivers value with manageable risk.",
    clientInvolvement:
      "Decision workshops, prioritization, and alignment on success metrics.",
    deliverables: [
      "Product and technical roadmap",
      "Architecture outline",
      "Delivery plan",
      "Resourcing recommendation",
    ],
  },
  {
    number: "03",
    title: "Design",
    description:
      "Create intuitive product experiences — flows, interfaces, and systems that clarify complexity.",
    clientInvolvement:
      "Design reviews, feedback cycles, and validation of critical journeys.",
    deliverables: [
      "Information architecture",
      "Key flow prototypes",
      "UI system foundations",
      "Content and interaction notes",
    ],
  },
  {
    number: "04",
    title: "Engineer",
    description:
      "Build reliable, scalable solutions with clean architecture, automated checks, and incremental demos.",
    clientInvolvement:
      "Sprint reviews, acceptance feedback, and environment access as needed.",
    deliverables: [
      "Working software increments",
      "API and data foundations",
      "Test coverage for critical paths",
      "Technical documentation",
    ],
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Test, harden, deploy, and support the go-live moment so release day is controlled rather than chaotic.",
    clientInvolvement:
      "UAT participation, release approvals, and communication planning.",
    deliverables: [
      "QA and release checklist",
      "Deployment runbook",
      "Monitoring baselines",
      "Launch support window",
    ],
  },
  {
    number: "06",
    title: "Evolve",
    description:
      "Improve, maintain, and scale based on real usage — extending what works and refining what does not.",
    clientInvolvement:
      "Roadmap reviews, analytics interpretation, and prioritization of the next wave.",
    deliverables: [
      "Performance and usage insights",
      "Backlog for iteration",
      "Maintenance plan",
      "Capability expansion proposals",
    ],
  },
] as const;

export const capabilities = [
  {
    title: "Product strategy",
    description: "Clarify what to build, for whom, and in what order.",
  },
  {
    title: "Architecture & engineering",
    description: "Design systems that remain understandable as they grow.",
  },
  {
    title: "Frontend development",
    description: "Ship interfaces that feel fast, clear, and intentional.",
  },
  {
    title: "Backend development",
    description: "Build secure services and data models products can trust.",
  },
  {
    title: "Mobile engineering",
    description: "Deliver polished experiences for iOS and Android users.",
  },
  {
    title: "AI integration",
    description: "Embed intelligence where it creates measurable leverage.",
  },
  {
    title: "Cloud infrastructure",
    description: "Establish environments that deploy and scale with confidence.",
  },
  {
    title: "Quality assurance",
    description: "Protect critical journeys with testing and release discipline.",
  },
] as const;

export const differentiators = [
  {
    title: "Engineering-first mindset",
    description:
      "We care about how systems behave under change — not only how they look in a demo.",
  },
  {
    title: "Business-focused solutions",
    description:
      "Technology choices serve commercial and operational goals, not fashion.",
  },
  {
    title: "Modern technology",
    description:
      "We use contemporary stacks thoughtfully, with maintainability as a primary constraint.",
  },
  {
    title: "User-centered design",
    description:
      "Interfaces earn adoption by respecting attention, clarity, and real-world context.",
  },
  {
    title: "Scalable architecture",
    description:
      "Foundations are designed to grow with usage, teams, and product ambition.",
  },
  {
    title: "Transparent collaboration",
    description:
      "Progress, risks, and trade-offs stay visible so decisions remain shared.",
  },
  {
    title: "Long-term technical partnership",
    description:
      "We build for the team that will live with the software — including yours and ours.",
  },
] as const;

export const technologies = {
  Frontend: ["React", "Next.js", "Vue", "TypeScript"],
  Mobile: ["React Native", "Flutter"],
  Backend: ["Node.js", "NestJS", "Laravel", "Python"],
  AI: ["Python", "ML frameworks", "LLM integrations"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  "Cloud & DevOps": ["AWS", "Google Cloud", "Docker", "CI/CD"],
} as const;
