export type Industry = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  image: string;
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    shortTitle: "Healthcare",
    summary:
      "Digital platforms that support care coordination, operations, and patient experience with clarity and care.",
    description:
      "Healthcare organizations need software that respects clinical workflows, privacy expectations, and the reality of multi-stakeholder environments. UQENA designs systems that reduce friction for staff and improve experiences for patients — without inventing complexity.",
    challenges: [
      "Fragmented systems across clinics, labs, and administrative teams",
      "Manual scheduling, documentation, and follow-up processes",
      "Difficulty giving patients clear self-service experiences",
      "Reporting that lags behind operational decisions",
    ],
    solutions: [
      "Care coordination and clinic operations platforms",
      "Patient portals and appointment experiences",
      "Internal dashboards for capacity and outcomes tracking",
      "Secure integrations between clinical and business systems",
    ],
    outcomes: [
      "Clearer handoffs between teams",
      "Fewer repetitive administrative tasks",
      "Better visibility into operations",
      "Digital experiences patients can navigate confidently",
    ],
    image: "/images/industries/healthcare.svg",
  },
  {
    slug: "fintech",
    title: "Financial Technology",
    shortTitle: "Fintech",
    summary:
      "Secure, trustworthy product experiences for payments, finance operations, and digital banking journeys.",
    description:
      "In fintech, clarity and reliability are non-negotiable. We help teams engineer products that handle sensitive workflows carefully while remaining fast enough for modern expectations.",
    challenges: [
      "Complex compliance and audit requirements",
      "User trust depending on transparent financial interfaces",
      "Integrations with payment and banking ecosystems",
      "Need for real-time visibility without sacrificing accuracy",
    ],
    solutions: [
      "Customer finance dashboards and account experiences",
      "Payment and transaction workflow platforms",
      "Internal risk and operations consoles",
      "API-led integrations with financial service providers",
    ],
    outcomes: [
      "Interfaces that communicate status clearly",
      "Stronger operational control for finance teams",
      "Architecture prepared for growth and auditability",
      "Faster iteration on customer-facing financial features",
    ],
    image: "/images/industries/fintech.svg",
  },
  {
    slug: "education",
    title: "Education & EdTech",
    shortTitle: "Education",
    summary:
      "Learning platforms and education tools that keep learners engaged and institutions organized.",
    description:
      "Education products succeed when they support teaching, learning, and administration together. We build experiences that feel approachable for learners and powerful for educators.",
    challenges: [
      "Content and assessment experiences that feel disconnected",
      "Administrators lacking unified visibility",
      "Mobile learning expectations outpacing platform capability",
      "Personalization that is difficult to deliver at scale",
    ],
    solutions: [
      "Learning management and course delivery platforms",
      "Student and educator portals",
      "Assessment and progress analytics",
      "AI-assisted tutoring and content tools",
    ],
    outcomes: [
      "More coherent learner journeys",
      "Better insight into progress and engagement",
      "Tools educators can actually run day to day",
      "Foundations for adaptive learning features",
    ],
    image: "/images/industries/education.svg",
  },
  {
    slug: "real-estate",
    title: "Real Estate & PropTech",
    shortTitle: "Real Estate",
    summary:
      "Marketplaces, listings, and property operations software built for discovery and transaction clarity.",
    description:
      "Property decisions involve emotion, data, and process. We create digital products that help buyers, renters, agents, and operators move through complex journeys with confidence.",
    challenges: [
      "Search and discovery that fails to surface the right inventory",
      "Disconnected CRM, listing, and transaction tools",
      "Poor mobile experiences during high-intent moments",
      "Limited analytics for portfolio and operations teams",
    ],
    solutions: [
      "Property marketplaces and listing platforms",
      "Agent and broker productivity tools",
      "Tenant and owner portals",
      "Portfolio dashboards and workflow automation",
    ],
    outcomes: [
      "Faster matching between demand and inventory",
      "Cleaner transaction and communication trails",
      "Stronger mobile engagement",
      "Operational visibility across properties and teams",
    ],
    image: "/images/industries/real-estate.svg",
  },
  {
    slug: "ecommerce",
    title: "E-commerce & Retail",
    shortTitle: "E-commerce",
    summary:
      "Commerce experiences engineered for conversion, merchandising flexibility, and operational pace.",
    description:
      "Retail brands need storefronts and commerce systems that can change quickly without becoming fragile. We build shopping experiences and supporting platforms that balance brand expression with performance.",
    challenges: [
      "Slow storefronts that lose customers mid-journey",
      "Catalog and inventory complexity across channels",
      "Checkout friction and weak post-purchase experiences",
      "Difficulty experimenting without engineering bottlenecks",
    ],
    solutions: [
      "Headless and composable storefronts",
      "Merchandising and catalog administration tools",
      "Order, fulfillment, and customer service workflows",
      "Personalization and recommendation features",
    ],
    outcomes: [
      "Faster browsing and checkout experiences",
      "More flexible campaign and catalog updates",
      "Clearer order lifecycle for teams and customers",
      "Room to test and improve conversion continuously",
    ],
    image: "/images/industries/ecommerce.svg",
  },
  {
    slug: "travel",
    title: "Travel & Hospitality",
    shortTitle: "Travel",
    summary:
      "Booking, guest, and operations platforms that keep journeys smooth from discovery to stay.",
    description:
      "Travel products must handle inventory complexity, emotional decision-making, and real-time change. We design systems that feel calm under that pressure.",
    challenges: [
      "Complex availability, pricing, and package logic",
      "Guest communication scattered across channels",
      "Mobile booking expectations with incomplete flows",
      "Operations teams lacking a single source of truth",
    ],
    solutions: [
      "Booking and reservation platforms",
      "Guest portals and itinerary experiences",
      "Property and operations management tools",
      "Partner inventory and channel integrations",
    ],
    outcomes: [
      "Clearer booking and modification journeys",
      "Better guest communication at key moments",
      "Stronger operational coordination",
      "Digital experiences that match hospitality standards",
    ],
    image: "/images/industries/travel.svg",
  },
  {
    slug: "logistics",
    title: "Logistics & Transportation",
    shortTitle: "Logistics",
    summary:
      "Visibility, routing, and operations software for teams that move goods and people under tight constraints.",
    description:
      "Logistics software has to reflect the physical world. We build platforms that improve planning, tracking, and exception handling for operators and customers alike.",
    challenges: [
      "Limited real-time visibility across shipments and fleets",
      "Manual planning that cannot keep up with volume",
      "Customer updates that lag behind actual status",
      "Data trapped in disconnected operational tools",
    ],
    solutions: [
      "Shipment tracking and visibility portals",
      "Dispatch and fleet operations dashboards",
      "Exception management workflows",
      "Partner and carrier integration layers",
    ],
    outcomes: [
      "Faster response to disruptions",
      "Clearer customer communication",
      "Better utilization of operational capacity",
      "A unified view of movement and performance",
    ],
    image: "/images/industries/logistics.svg",
  },
  {
    slug: "saas",
    title: "SaaS & Technology",
    shortTitle: "SaaS",
    summary:
      "Product engineering for software companies building multi-tenant platforms and ambitious roadmaps.",
    description:
      "SaaS companies need partners who understand product velocity, tenancy, billing adjacency, and the craft of shipping continuously. UQENA works as an engineering extension for technology teams.",
    challenges: [
      "Feature velocity outpacing architecture readiness",
      "Onboarding and activation experiences that leak value",
      "Technical debt slowing every subsequent release",
      "Need for specialized skills without permanent headcount spikes",
    ],
    solutions: [
      "Multi-tenant product platforms",
      "Admin consoles and customer success tools",
      "Design systems and frontend modernization",
      "Dedicated product engineering teams",
    ],
    outcomes: [
      "Cleaner product foundations for growth",
      "Faster, safer release cadence",
      "Better activation and retention experiences",
      "Engineering capacity aligned to roadmap priorities",
    ],
    image: "/images/industries/saas.svg",
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    shortTitle: "Professional Services",
    summary:
      "Client portals, delivery systems, and automation for firms that sell expertise at scale.",
    description:
      "Professional services firms win on relationships and delivery quality. We help them digitize client collaboration, project operations, and knowledge workflows.",
    challenges: [
      "Client communication scattered across email and files",
      "Project status visibility limited to account leads",
      "Billing and delivery data disconnected",
      "Knowledge locked in individuals rather than systems",
    ],
    solutions: [
      "Client collaboration portals",
      "Project and resource management platforms",
      "Knowledge bases and proposal systems",
      "Automation across CRM, delivery, and finance tools",
    ],
    outcomes: [
      "More transparent client relationships",
      "Less administrative drag on delivery teams",
      "Reusable knowledge and templates",
      "Clearer commercial and delivery alignment",
    ],
    image: "/images/industries/professional-services.svg",
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
