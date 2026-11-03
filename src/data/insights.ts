export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: number;
  publishedAt: string;
  author: "UQENA Editorial Team";
  cover: string;
  content: string[];
};

export const insightCategories = [
  "All",
  "AI & Emerging Technology",
  "Software Engineering",
  "Web Development",
  "Mobile Development",
  "Product Design",
  "Business Automation",
  "Technology Strategy",
] as const;

export const articles: Article[] = [
  {
    slug: "practical-ai-product-features",
    title: "Where AI Belongs in a Product — and Where It Does Not",
    excerpt:
      "A practical lens for deciding when intelligence creates durable value versus when it adds cost and uncertainty.",
    category: "AI & Emerging Technology",
    readingTime: 8,
    publishedAt: "2026-01-14",
    author: "UQENA Editorial Team",
    cover: "/images/insights/ai-product.jpg",
    content: [
      "AI features succeed when they improve a specific decision, reduce a repetitive task, or unlock an experience that was previously impractical. They fail when they are added to signal modernity without a clear job to be done.",
      "Start with the workflow. Identify where people lose time, make error-prone judgments, or abandon tasks because the interface cannot help them. Those moments are candidates for assistance — not every screen needs a chatbot.",
      "Ground models in your context. Generic responses erode trust quickly. Retrieval, tools, and carefully scoped prompts help the system stay useful within your product’s domain.",
      "Design for uncertainty. Users need to know when the system is confident, when it needs confirmation, and how to correct it. Transparent states and human review paths are product features, not afterthoughts.",
      "Measure quality continuously. Launch is the beginning of evaluation. Track task success, escalation rates, cost per interaction, and the kinds of failures users encounter.",
      "The companies that benefit most from AI treat it as an engineering and design discipline — not a marketing layer. Intelligence earns its place when it makes the product more capable and more trustworthy at once.",
    ],
  },
  {
    slug: "architecture-decisions-that-age-well",
    title: "Architecture Decisions That Age Well",
    excerpt:
      "How growing product teams can make structural choices that remain understandable years after the first release.",
    category: "Software Engineering",
    readingTime: 9,
    publishedAt: "2026-02-03",
    author: "UQENA Editorial Team",
    cover: "/images/insights/architecture.jpg",
    content: [
      "Early architecture is less about predicting the future and more about preserving the ability to change. The best systems make tomorrow’s decisions cheaper, not today’s diagrams prettier.",
      "Prefer clear module boundaries over premature microservices. Many teams split infrastructure before they understand their domain seams. Start with modular monoliths and extract when ownership, scale, or release cadence demand it.",
      "Make data ownership explicit. Ambiguous records become political and technical debt. Decide which service or module is the source of truth for each concept.",
      "Invest in contracts. Stable APIs, typed clients, and consumer-driven tests protect teams from accidental coupling as the organization grows.",
      "Observability is part of architecture. If you cannot see latency, errors, and business events, you do not yet have a production system — you have a deployment.",
      "Document the why. Future engineers can reverse-engineer the what. They cannot reverse-engineer the constraints and trade-offs that shaped a decision unless someone leaves a trail.",
    ],
  },
  {
    slug: "web-performance-as-product-quality",
    title: "Web Performance Is Product Quality",
    excerpt:
      "Why load time, interaction readiness, and layout stability belong in the same conversation as features and visual design.",
    category: "Web Development",
    readingTime: 7,
    publishedAt: "2026-02-20",
    author: "UQENA Editorial Team",
    cover: "/images/insights/web-performance.jpg",
    content: [
      "Users do not separate “the product” from “how fast it felt.” Performance is not a technical footnote; it is part of the experience promise.",
      "Set budgets early. Decide what is acceptable for LCP, INP, and bundle weight before the interface accumulates convenience libraries and unoptimized media.",
      "Serve the critical path first. Prioritize content and interaction that define the page’s purpose. Defer the rest deliberately.",
      "Images and fonts are frequent silent costs. Modern formats, correct sizing, and restrained font loading often outperform weeks of micro-optimization elsewhere.",
      "Measure on real devices and networks. Lab scores help, but product quality is judged on mid-range phones and imperfect connections.",
      "Make performance a pull-request concern. When regressions are visible in review, teams protect speed as naturally as they protect tests.",
    ],
  },
  {
    slug: "mobile-habits-that-retain-users",
    title: "Mobile Habits That Retain Users",
    excerpt:
      "Design and engineering practices that help mobile products earn a lasting place on the home screen.",
    category: "Mobile Development",
    readingTime: 6,
    publishedAt: "2026-03-08",
    author: "UQENA Editorial Team",
    cover: "/images/insights/mobile-habits.jpg",
    content: [
      "Retention begins with the first session. If onboarding asks for too much before value appears, many users never return to discover the rest.",
      "Respect platform conventions. Familiar navigation and system patterns reduce learning cost and make your product feel trustworthy.",
      "Design for interruption. Mobile sessions are fragmented. Save state, make resume obvious, and keep critical actions reachable with one hand when possible.",
      "Offline and poor connectivity are normal conditions, not edge cases. Queue actions, communicate sync status, and avoid silent data loss.",
      "Notifications should earn attention. Relevance beats frequency. Every alert teaches users whether your product respects their focus.",
      "Ship instrumentation with features. Without funnel and retention visibility, teams guess which friction matters most.",
    ],
  },
  {
    slug: "design-systems-that-teams-actually-use",
    title: "Design Systems That Teams Actually Use",
    excerpt:
      "How to build component libraries that accelerate product work instead of becoming museum pieces.",
    category: "Product Design",
    readingTime: 8,
    publishedAt: "2026-03-22",
    author: "UQENA Editorial Team",
    cover: "/images/insights/design-systems.jpg",
    content: [
      "A design system fails when it optimizes for completeness instead of adoption. Teams use what helps them ship tomorrow’s screen.",
      "Start with the highest-frequency patterns: buttons, forms, navigation, cards, and feedback states. Depth beats breadth early on.",
      "Tokens create coherence. Color, type, space, and radius decisions should live in one place that design and engineering both consume.",
      "Document behavior, not only appearance. Hover, focus, loading, empty, and error states are where products feel unfinished when ignored.",
      "Governance should be lightweight. Clear contribution paths and review norms keep the system alive without turning every change into a committee.",
      "The measure of success is reduced decision fatigue and faster delivery — not the number of components in Figma.",
    ],
  },
  {
    slug: "automation-without-brittleness",
    title: "Automation Without Brittleness",
    excerpt:
      "A framework for automating operations while keeping exceptions visible and systems recoverable.",
    category: "Business Automation",
    readingTime: 7,
    publishedAt: "2026-04-05",
    author: "UQENA Editorial Team",
    cover: "/images/insights/automation.jpg",
    content: [
      "Automation creates leverage only when it is observable. Silent failures are worse than manual work because they hide until customers notice.",
      "Map the process before you encode it. Many teams automate a broken workflow and simply accelerate the mess.",
      "Separate the happy path from exceptions. Route ambiguous cases to people with context, and keep an audit trail of what the system did.",
      "Prefer durable workflows over fragile scripts. Queues, retries, and idempotency turn integrations into operations rather than luck.",
      "Measure time saved and error rates together. Speed without accuracy is not operational improvement.",
      "Expand automation where rules are stable and volume is high. Leave judgment-heavy work to humans supported by better tools.",
    ],
  },
  {
    slug: "choosing-what-to-build-next",
    title: "Choosing What to Build Next",
    excerpt:
      "A technology strategy approach for sequencing product bets when everything feels urgent.",
    category: "Technology Strategy",
    readingTime: 9,
    publishedAt: "2026-04-18",
    author: "UQENA Editorial Team",
    cover: "/images/insights/strategy.jpg",
    content: [
      "Roadmaps collapse when urgency is mistaken for importance. Strategy is the discipline of sequencing work so each investment unlocks the next.",
      "Separate customer value, operational necessity, and platform enablement. Mixing them into one undifferentiated backlog hides trade-offs.",
      "Ask what becomes easier after a bet lands. The best initiatives compound — they reduce future cost or open multiple product options.",
      "Timebox discovery. Not every idea deserves a multi-month build. Prototypes and limited launches reveal reality faster than debate.",
      "Protect capacity for reliability. Ignoring platform health eventually taxes every feature team.",
      "Revisit assumptions on a cadence. Strategy is a living agreement between commercial goals and engineering constraints — not a slide deck frozen at kickoff.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
