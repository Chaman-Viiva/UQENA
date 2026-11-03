export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  icon: string;
  problems: string[];
  capabilities: string[];
  stack: string[];
  process: { title: string; description: string }[];
  useCases: string[];
  faqs: { question: string; answer: string }[];
  heroEyebrow: string;
  valueProposition: string;
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    summary:
      "Purpose-built platforms engineered around your workflows, customers, and growth plans.",
    description:
      "Off-the-shelf tools rarely match the way ambitious companies operate. UQENA designs and builds custom software that fits your processes, integrates with your ecosystem, and scales as your business evolves.",
    icon: "code-2",
    heroEyebrow: "Engineering partnership",
    valueProposition:
      "Turn complex operational needs into reliable, maintainable software that becomes a lasting competitive asset.",
    problems: [
      "Generic SaaS tools force awkward workarounds and limit differentiation.",
      "Legacy systems slow teams down and resist modern integrations.",
      "Scattered tools create data silos and inconsistent customer experiences.",
      "Rapid growth exposes architecture that was never designed to scale.",
    ],
    capabilities: [
      "Discovery workshops and product definition",
      "Domain-driven architecture and system design",
      "Full-stack application engineering",
      "Third-party and legacy system integration",
      "Role-based access, auditability, and security controls",
      "Documentation, handover, and long-term evolution",
    ],
    stack: ["TypeScript", "React", "Next.js", "Node.js", "NestJS", "PostgreSQL", "AWS", "Docker"],
    process: [
      {
        title: "Map the domain",
        description: "We clarify business goals, constraints, users, and the systems that must coexist.",
      },
      {
        title: "Shape the architecture",
        description: "We define boundaries, data models, integrations, and a delivery roadmap.",
      },
      {
        title: "Build in increments",
        description: "We ship working slices early so stakeholders can validate real product behavior.",
      },
      {
        title: "Harden and evolve",
        description: "We refine reliability, observability, and the next wave of capabilities.",
      },
    ],
    useCases: [
      "Industry-specific operating platforms",
      "Customer and partner portals",
      "Workflow and case management systems",
      "Multi-tenant SaaS foundations",
    ],
    faqs: [
      {
        question: "When is custom software the right choice?",
        answer:
          "When your processes, data model, or customer experience are central to how you compete — and packaged tools cannot support them without costly compromise.",
      },
      {
        question: "Do you rebuild everything from scratch?",
        answer:
          "Not by default. We evaluate what can be reused, integrated, or phased out, then design a path that reduces risk while delivering value early.",
      },
      {
        question: "How do you keep custom systems maintainable?",
        answer:
          "Through clear architecture, automated testing, documentation, and modular design so future teams can extend the product confidently.",
      },
    ],
  },
  {
    slug: "web-development",
    title: "Web Application Development",
    shortTitle: "Web Development",
    summary:
      "Fast, accessible, conversion-ready web applications built for real users and real scale.",
    description:
      "From marketing sites to complex product interfaces, we engineer web experiences that feel effortless, load quickly, and hold up under growth.",
    icon: "globe",
    heroEyebrow: "Product-grade web",
    valueProposition:
      "Ship web products that look refined, perform under pressure, and support the journeys that grow your business.",
    problems: [
      "Slow or fragile interfaces undermine trust and conversion.",
      "Inconsistent design systems make products feel unfinished.",
      "SEO and accessibility are treated as afterthoughts.",
      "Teams struggle to ship features without breaking existing flows.",
    ],
    capabilities: [
      "Marketing websites and product landing systems",
      "Complex SPA and SSR application interfaces",
      "Design system implementation",
      "Performance, SEO, and accessibility engineering",
      "CMS-ready content architectures (frontend-first)",
      "Analytics instrumentation and event design",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vue", "Vercel", "Cloudflare"],
    process: [
      {
        title: "Define the experience",
        description: "We align on audiences, journeys, content structure, and success metrics.",
      },
      {
        title: "Design the system",
        description: "We establish layout patterns, components, and interaction standards.",
      },
      {
        title: "Engineer for quality",
        description: "We build with performance budgets, semantic HTML, and resilient state management.",
      },
      {
        title: "Launch and refine",
        description: "We validate across devices, measure outcomes, and iterate with evidence.",
      },
    ],
    useCases: [
      "SaaS dashboards and admin consoles",
      "Content-driven marketing platforms",
      "Customer onboarding portals",
      "Internal web tools for operations teams",
    ],
    faqs: [
      {
        question: "Do you build marketing sites and product apps?",
        answer:
          "Yes. We apply the same engineering discipline to both, with the right stack and performance priorities for each.",
      },
      {
        question: "How do you approach SEO?",
        answer:
          "With semantic structure, metadata, performance, internal linking, and content architecture designed for discoverability from day one.",
      },
      {
        question: "Can you work from an existing design file?",
        answer:
          "Absolutely. We can implement established designs precisely or collaborate with your team to refine interaction details during build.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    summary:
      "Polished iOS and Android applications that feel native, reliable, and ready for growth.",
    description:
      "We design and engineer mobile products that respect platform conventions while expressing your brand — from first launch to long-term iteration.",
    icon: "smartphone",
    heroEyebrow: "Mobile product engineering",
    valueProposition:
      "Create mobile experiences people return to — with thoughtful UX, solid architecture, and release confidence.",
    problems: [
      "Apps feel generic or inconsistent across platforms.",
      "Poor offline handling and performance frustrate users.",
      "Release cycles are slow and risky.",
      "Backend and mobile teams are out of sync on contracts and edge cases.",
    ],
    capabilities: [
      "Cross-platform React Native and Flutter apps",
      "Mobile UX flows and interaction design",
      "Push notifications, auth, and secure storage",
      "Offline-first patterns and sync strategies",
      "App Store and Play Store release support",
      "Analytics, crash reporting, and iteration loops",
    ],
    stack: ["React Native", "Flutter", "TypeScript", "Swift interop", "Firebase", "Expo"],
    process: [
      {
        title: "Clarify the mobile job",
        description: "We identify the moments mobile must own — and what belongs on web or elsewhere.",
      },
      {
        title: "Prototype critical flows",
        description: "We validate navigation, onboarding, and core tasks before deep engineering.",
      },
      {
        title: "Build platform-aware UI",
        description: "We ship polished interfaces with shared logic and platform-native nuance.",
      },
      {
        title: "Release with confidence",
        description: "We establish testing, beta distribution, store readiness, and monitoring.",
      },
    ],
    useCases: [
      "Customer-facing service apps",
      "Field operations and workforce tools",
      "Marketplace and booking experiences",
      "Companion apps for SaaS platforms",
    ],
    faqs: [
      {
        question: "Native or cross-platform?",
        answer:
          "We recommend based on product goals, timeline, team skills, and the depth of platform-specific requirements. Cross-platform is often excellent for product velocity without sacrificing quality.",
      },
      {
        question: "Do you handle store submissions?",
        answer:
          "We support preparation, review guidelines, assets, and release checklists. Final publisher accounts remain under your control.",
      },
      {
        question: "How do you keep apps maintainable?",
        answer:
          "Shared component libraries, clear navigation architecture, typed API contracts, and automated checks on every release candidate.",
      },
    ],
  },
  {
    slug: "ai-solutions",
    title: "AI & Machine Learning Solutions",
    shortTitle: "AI Solutions",
    summary:
      "Practical AI systems that enhance products, automate decisions, and unlock new experiences.",
    description:
      "UQENA integrates machine learning and modern LLM capabilities where they create measurable value — not as decoration, but as durable product features.",
    icon: "sparkles",
    heroEyebrow: "Applied intelligence",
    valueProposition:
      "Embed intelligence into your products with clear use cases, responsible design, and production-ready engineering.",
    problems: [
      "AI experiments never reach production reliability.",
      "Teams struggle to ground models in proprietary data safely.",
      "User experiences around AI feel unpredictable or untrustworthy.",
      "Cost, latency, and evaluation are left unmanaged.",
    ],
    capabilities: [
      "Use-case discovery and feasibility assessment",
      "LLM feature design and orchestration",
      "Retrieval-augmented generation (RAG) systems",
      "Computer vision and predictive modeling integrations",
      "Evaluation harnesses and human-in-the-loop workflows",
      "Guardrails, logging, and cost controls",
    ],
    stack: ["Python", "PyTorch", "scikit-learn", "OpenAI APIs", "LangChain patterns", "Vector databases", "FastAPI"],
    process: [
      {
        title: "Find the leverage point",
        description: "We identify workflows where intelligence improves outcomes more than complexity.",
      },
      {
        title: "Prototype with real data",
        description: "We test quality, latency, and failure modes against representative scenarios.",
      },
      {
        title: "Productize the capability",
        description: "We wrap models in UX, APIs, monitoring, and operational controls.",
      },
      {
        title: "Measure and improve",
        description: "We establish evaluation loops so quality compounds after launch.",
      },
    ],
    useCases: [
      "Intelligent document and knowledge assistants",
      "Recommendation and personalization engines",
      "Automated classification and triage",
      "AI copilots inside existing business tools",
    ],
    faqs: [
      {
        question: "Do you build AI for the sake of AI?",
        answer:
          "No. We only pursue capabilities that improve a clear business or user outcome and can be operated responsibly.",
      },
      {
        question: "Can you work with our private data?",
        answer:
          "Yes, within agreed security boundaries. We design data access, retention, and isolation carefully before any production path.",
      },
      {
        question: "How do you handle AI reliability?",
        answer:
          "Through evaluation datasets, fallbacks, human review where needed, transparent UX, and continuous monitoring.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI/UX Design",
    summary:
      "Product design that clarifies complexity and turns ambition into interfaces people trust.",
    description:
      "We design digital experiences with engineering in mind — elegant enough to inspire confidence, structured enough to ship without friction.",
    icon: "palette",
    heroEyebrow: "Design for products that ship",
    valueProposition:
      "Create clear, distinctive interfaces that reduce cognitive load and accelerate delivery.",
    problems: [
      "Products feel cluttered or inconsistent across screens.",
      "Designers and engineers speak different languages.",
      "User journeys break at critical decision points.",
      "Visual polish exists without underlying interaction logic.",
    ],
    capabilities: [
      "Product discovery and journey mapping",
      "Information architecture and wireflows",
      "High-fidelity UI systems and prototypes",
      "Design tokens and component libraries",
      "Usability reviews and accessibility guidance",
      "Handoff packages engineers can implement cleanly",
    ],
    stack: ["Figma", "Design tokens", "Prototyping", "Accessibility audits", "Design systems"],
    process: [
      {
        title: "Understand users and constraints",
        description: "We study goals, context, and the operational realities that shape the product.",
      },
      {
        title: "Structure the experience",
        description: "We define flows, hierarchy, and interaction patterns before visual polish.",
      },
      {
        title: "Craft the interface",
        description: "We refine typography, layout, motion, and states into a coherent system.",
      },
      {
        title: "Validate with implementation",
        description: "We partner with engineering so designs survive real data and edge cases.",
      },
    ],
    useCases: [
      "SaaS product redesigns",
      "New product MVP interfaces",
      "Design system foundations",
      "Complex dashboard experiences",
    ],
    faqs: [
      {
        question: "Do you only design, or also build?",
        answer:
          "We can deliver design independently or as part of an end-to-end product engagement with our engineering teams.",
      },
      {
        question: "How do you keep designs implementable?",
        answer:
          "By defining tokens, states, responsive behavior, and component rules early — and collaborating closely with developers.",
      },
      {
        question: "Can you improve an existing product without a full redesign?",
        answer:
          "Yes. Targeted UX improvements on critical flows often deliver more value than a wholesale visual overhaul.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps Engineering",
    shortTitle: "Cloud & DevOps",
    summary:
      "Infrastructure and delivery systems that keep products stable, observable, and ready to scale.",
    description:
      "We help teams move from fragile deployments to confident delivery — with cloud architecture, automation, and operational clarity.",
    icon: "cloud",
    heroEyebrow: "Reliable delivery at scale",
    valueProposition:
      "Build the platform underneath your product so shipping is safer, faster, and easier to reason about.",
    problems: [
      "Deployments are manual, stressful, and inconsistently successful.",
      "Environments drift and debugging becomes tribal knowledge.",
      "Costs grow without visibility into what drives them.",
      "Incidents take too long because observability is incomplete.",
    ],
    capabilities: [
      "Cloud architecture on AWS and Google Cloud",
      "Containerization and orchestration patterns",
      "CI/CD pipelines and release automation",
      "Infrastructure as code",
      "Monitoring, logging, and alerting foundations",
      "Security baselines and secrets management",
    ],
    stack: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Nginx"],
    process: [
      {
        title: "Assess the current path to production",
        description: "We review architecture, pipelines, environments, and operational pain points.",
      },
      {
        title: "Design the target platform",
        description: "We define environments, networking, scaling, and delivery controls.",
      },
      {
        title: "Automate the critical path",
        description: "We implement IaC, pipelines, and guardrails that make releases repeatable.",
      },
      {
        title: "Operate with visibility",
        description: "We establish metrics, alerts, and runbooks so teams can respond with confidence.",
      },
    ],
    useCases: [
      "Greenfield cloud foundations for new products",
      "Migration from ad-hoc servers to managed cloud",
      "Hardening release pipelines for growing teams",
      "Cost and reliability optimization",
    ],
    faqs: [
      {
        question: "Do you manage infrastructure after launch?",
        answer:
          "We can support ongoing platform evolution or hand over a well-documented system to your internal team.",
      },
      {
        question: "Which cloud providers do you work with?",
        answer:
          "Primarily AWS and Google Cloud. We select services based on product needs rather than preference alone.",
      },
      {
        question: "How do you approach security?",
        answer:
          "Least-privilege access, secrets hygiene, network boundaries, backup strategy, and continuous review of the deployment surface.",
      },
    ],
  },
  {
    slug: "backend-api-development",
    title: "API & Backend Development",
    shortTitle: "Backend & APIs",
    summary:
      "Secure, well-modeled backends that power products across web, mobile, and partner ecosystems.",
    description:
      "Great products depend on dependable services. We engineer APIs and domain backends that are clear to consume, resilient under load, and ready to evolve.",
    icon: "server",
    heroEyebrow: "Service foundations",
    valueProposition:
      "Give every client — web, mobile, or partner — a stable, documented, and scalable backend to build on.",
    problems: [
      "APIs are inconsistent, poorly documented, or tightly coupled to UI needs.",
      "Business rules live in the wrong places and are hard to change safely.",
      "Performance degrades as data and traffic grow.",
      "Integrations become brittle one-off scripts.",
    ],
    capabilities: [
      "Domain modeling and service boundaries",
      "REST and GraphQL API design",
      "Authentication, authorization, and tenancy",
      "Event-driven and asynchronous processing",
      "Database design and query optimization",
      "API documentation and contract testing",
    ],
    stack: ["Node.js", "NestJS", "Laravel", "Python", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
    process: [
      {
        title: "Model the domain",
        description: "We capture entities, rules, and ownership so the backend mirrors the business.",
      },
      {
        title: "Design contracts",
        description: "We define API surfaces, error models, and versioning strategies early.",
      },
      {
        title: "Implement with rigor",
        description: "We build services with tests, observability hooks, and clear module boundaries.",
      },
      {
        title: "Prove readiness",
        description: "We load-test critical paths and document how consumers should integrate.",
      },
    ],
    useCases: [
      "Multi-client product backends",
      "Partner and public API platforms",
      "Migration from monolith to modular services",
      "High-throughput transactional systems",
    ],
    faqs: [
      {
        question: "REST or GraphQL?",
        answer:
          "We choose based on client needs, caching strategy, and team familiarity. Many products benefit from well-designed REST with selective GraphQL where flexibility matters.",
      },
      {
        question: "How do you handle breaking changes?",
        answer:
          "Through explicit versioning, deprecation windows, and contract tests that protect consumers.",
      },
      {
        question: "Can you integrate with existing services?",
        answer:
          "Yes. We frequently design adapters and anti-corruption layers so new backends can coexist with legacy systems.",
      },
    ],
  },
  {
    slug: "automation",
    title: "Automation & Intelligent Systems",
    shortTitle: "Automation",
    summary:
      "Workflow automation that removes repetitive work and connects the tools your teams already use.",
    description:
      "We design automation that respects real operations — reducing manual effort, improving consistency, and freeing people for higher-value work.",
    icon: "workflow",
    heroEyebrow: "Operational leverage",
    valueProposition:
      "Replace fragile manual processes with dependable systems that move work forward automatically.",
    problems: [
      "Teams copy data between tools and introduce errors.",
      "Approvals and handoffs stall without clear ownership.",
      "Scripts exist as undocumented tribal knowledge.",
      "Growth multiplies operational overhead instead of value.",
    ],
    capabilities: [
      "Process mapping and opportunity sizing",
      "Workflow orchestration and rules engines",
      "System-to-system integrations",
      "Intelligent document and data processing",
      "Exception handling and human review queues",
      "Audit trails and operational dashboards",
    ],
    stack: ["Node.js", "Python", "PostgreSQL", "Redis", "Queue workers", "Webhook architectures", "Zapier/Make where appropriate"],
    process: [
      {
        title: "Observe the current process",
        description: "We document steps, failure points, and the systems of record involved.",
      },
      {
        title: "Design the automated path",
        description: "We define triggers, rules, exceptions, and ownership for edge cases.",
      },
      {
        title: "Implement safely",
        description: "We introduce automation with logging, rollbacks, and staged rollout.",
      },
      {
        title: "Expand what works",
        description: "We measure time saved and reliability, then extend to adjacent workflows.",
      },
    ],
    useCases: [
      "Lead routing and CRM enrichment",
      "Invoice and document processing",
      "Onboarding and provisioning workflows",
      "Operations alerting and remediation loops",
    ],
    faqs: [
      {
        question: "Should everything be automated?",
        answer:
          "No. We automate high-volume, rule-clear work and keep humans in the loop where judgment or risk demands it.",
      },
      {
        question: "Do you replace existing tools?",
        answer:
          "Often we connect them. Replacement only makes sense when current tools are a structural bottleneck.",
      },
      {
        question: "How do you prevent silent failures?",
        answer:
          "With monitoring, dead-letter handling, alerts, and visible queues for items that need attention.",
      },
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation & Consulting",
    shortTitle: "Digital Transformation",
    summary:
      "Practical guidance and delivery support for organizations modernizing products, platforms, and ways of working.",
    description:
      "Transformation fails when strategy and delivery stay separate. UQENA helps leaders define the path and build the systems that make change real.",
    icon: "compass",
    heroEyebrow: "Strategy with delivery DNA",
    valueProposition:
      "Move from fragmented tools and legacy constraints to a coherent digital operating model — with tangible progress along the way.",
    problems: [
      "Technology roadmaps exist without sequencing or ownership.",
      "Legacy platforms block new customer experiences.",
      "Teams lack shared standards for product and engineering quality.",
      "Investments scatter across initiatives without compounding value.",
    ],
    capabilities: [
      "Digital maturity and architecture assessments",
      "Product and platform roadmapping",
      "Operating model and delivery coaching",
      "Legacy modernization strategies",
      "Vendor and build-vs-buy recommendations",
      "Pilot delivery that proves the approach",
    ],
    stack: ["Architecture reviews", "Roadmapping", "Workshops", "Proof-of-concept builds", "Change enablement"],
    process: [
      {
        title: "Diagnose honestly",
        description: "We assess technology, process, and product gaps without theater.",
      },
      {
        title: "Prioritize for leverage",
        description: "We sequence initiatives that unlock the most value with manageable risk.",
      },
      {
        title: "Prove with delivery",
        description: "We pilot the approach on a meaningful slice so learning is concrete.",
      },
      {
        title: "Scale the pattern",
        description: "We expand standards, platforms, and team practices that demonstrated results.",
      },
    ],
    useCases: [
      "Modernizing customer-facing digital channels",
      "Consolidating fragmented internal systems",
      "Establishing a product engineering capability",
      "Preparing platforms for AI-enabled features",
    ],
    faqs: [
      {
        question: "Is this only advisory?",
        answer:
          "No. We can advise, co-build, or lead delivery depending on what your organization needs at each stage.",
      },
      {
        question: "How long does a transformation engagement take?",
        answer:
          "Meaningful change is continuous, but we structure work into focused phases with clear outcomes rather than open-ended programs.",
      },
      {
        question: "How do you involve internal teams?",
        answer:
          "Closely. Sustainable transformation requires your people to own the systems and practices we help establish.",
      },
    ],
  },
];

export const dedicatedTeamsService = {
  title: "Dedicated Development Teams",
  summary:
    "Embedded engineering capacity that works as an extension of your product organization.",
  description:
    "When you need sustained velocity without the overhead of building every specialty in-house, UQENA provides dedicated teams aligned to your roadmap, tools, and quality bar.",
};

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
