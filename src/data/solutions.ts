export type Solution = {
  slug: string;
  title: string;
  summary: string;
  helps: string;
  problems: string[];
  approach: string;
  icon: string;
};

export const solutions: Solution[] = [
  {
    slug: "enterprise-platforms",
    title: "Enterprise Platforms",
    summary:
      "Central systems that unify operations, data, and workflows across teams and departments.",
    helps: "Organizations replacing fragmented tools with a coherent operating backbone.",
    problems: [
      "Critical work happens across disconnected apps and spreadsheets",
      "Leaders lack a trustworthy operational picture",
      "Process changes require brittle manual coordination",
    ],
    approach:
      "We map domain boundaries, design modular architecture, and deliver platform capabilities in phases so value appears before the entire vision is complete.",
    icon: "building-2",
  },
  {
    slug: "saas-products",
    title: "SaaS Products",
    summary:
      "Multi-tenant product foundations built for onboarding, retention, and continuous release.",
    helps: "Founders and product teams bringing a software business to market or modernizing an existing one.",
    problems: [
      "MVP architecture that cannot support tenancy or permissions",
      "Activation experiences that confuse early customers",
      "Feature velocity stalled by technical debt",
    ],
    approach:
      "We partner on product definition, UX, and engineering so the first versions are intentional foundations — not disposable prototypes.",
    icon: "layers",
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    summary:
      "Connected workflows that move information and decisions without constant manual effort.",
    helps: "Operations leaders seeking leverage from the tools they already run.",
    problems: [
      "Teams re-enter data across systems daily",
      "Approvals and handoffs stall work",
      "Growth increases headcount needs faster than revenue",
    ],
    approach:
      "We identify high-volume processes, design exception-aware automation, and instrument results so improvements are measurable.",
    icon: "workflow",
  },
  {
    slug: "customer-portals",
    title: "Customer Portals",
    summary:
      "Secure self-service experiences for accounts, documents, support, and ongoing collaboration.",
    helps: "Businesses that want customers to get answers and complete tasks without waiting on email chains.",
    problems: [
      "Customers depend on staff for routine requests",
      "Status visibility is unclear after a purchase or engagement begins",
      "Support teams spend time on repetitive updates",
    ],
    approach:
      "We design role-aware portals connected to your systems of record, with clear states and human escalation when needed.",
    icon: "layout-dashboard",
  },
  {
    slug: "internal-management-systems",
    title: "Internal Management Systems",
    summary:
      "Purpose-built tools for the way your teams actually operate — not how generic software assumes they should.",
    helps: "Companies whose competitive edge lives in proprietary processes.",
    problems: [
      "Off-the-shelf tools force awkward workarounds",
      "Institutional knowledge lives in people, not systems",
      "Reporting requires manual assembly every week",
    ],
    approach:
      "We encode your workflows into maintainable software with the permissions, auditability, and reporting your operators need.",
    icon: "panel-left",
  },
  {
    slug: "ai-powered-applications",
    title: "AI-Powered Applications",
    summary:
      "Products that use machine learning and language models to assist, classify, generate, or decide — responsibly.",
    helps: "Teams ready to embed intelligence into customer or internal experiences.",
    problems: [
      "AI experiments never become reliable product features",
      "Users do not trust opaque outputs",
      "Costs and quality are hard to control in production",
    ],
    approach:
      "We scope high-leverage use cases, ground systems in your data, and ship with evaluation, guardrails, and clear UX for uncertainty.",
    icon: "sparkles",
  },
  {
    slug: "data-driven-dashboards",
    title: "Data-Driven Dashboards",
    summary:
      "Operational and executive views that turn activity into decisions people can act on.",
    helps: "Leaders and operators who need timely signal instead of static reports.",
    problems: [
      "Metrics live in conflicting spreadsheets",
      "Dashboards look polished but lack trustworthy definitions",
      "Teams cannot drill from summary to cause",
    ],
    approach:
      "We align on metric definitions, design progressive disclosure interfaces, and connect views to reliable data pipelines.",
    icon: "chart-column",
  },
  {
    slug: "digital-marketplaces",
    title: "Digital Marketplaces",
    summary:
      "Two-sided platforms that connect supply and demand with discovery, trust, and transaction flows.",
    helps: "Businesses building marketplaces for services, assets, or inventory.",
    problems: [
      "Matching and search fail to surface relevant options",
      "Trust and verification are weak",
      "Operations struggle as liquidity grows",
    ],
    approach:
      "We design the marketplace loop end to end — discovery, conversion, fulfillment signals, and the admin tools that keep quality high.",
    icon: "store",
  },
  {
    slug: "mobile-first-platforms",
    title: "Mobile-First Platforms",
    summary:
      "Experiences designed primarily for phones, with web companions where they add value.",
    helps: "Products whose users live in on-the-go contexts — field work, consumer services, and modern retail.",
    problems: [
      "Desktop-first products feel awkward on mobile",
      "Critical tasks are hard to complete with one hand",
      "Offline and notification strategies are incomplete",
    ],
    approach:
      "We prioritize mobile journeys first, engineer for real-world conditions, and extend to larger screens without compromising the core path.",
    icon: "smartphone",
  },
];
