export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavLink[];
};

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Custom Software Development",
        href: "/services/custom-software-development",
        description: "Tailored platforms built around your business.",
      },
      {
        label: "Web Application Development",
        href: "/services/web-development",
        description: "Modern, high-performance web products.",
      },
      {
        label: "Mobile App Development",
        href: "/services/mobile-app-development",
        description: "Native-quality iOS and Android experiences.",
      },
      {
        label: "AI & Machine Learning",
        href: "/services/ai-solutions",
        description: "Intelligent systems that create advantage.",
      },
      {
        label: "UI/UX Design",
        href: "/services/ui-ux-design",
        description: "Interfaces people understand and trust.",
      },
      {
        label: "Cloud & DevOps",
        href: "/services/cloud-devops",
        description: "Reliable infrastructure and delivery pipelines.",
      },
      {
        label: "Backend & API Development",
        href: "/services/backend-api-development",
        description: "Secure, scalable service foundations.",
      },
      {
        label: "Automation & Intelligent Systems",
        href: "/services/automation",
        description: "Remove friction from critical workflows.",
      },
      {
        label: "Digital Transformation",
        href: "/services/digital-transformation",
        description: "Strategy and delivery for lasting change.",
      },
    ],
  },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  company: [
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Work", href: "/work" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Custom Software", href: "/services/custom-software-development" },
    { label: "Web Development", href: "/services/web-development" },
    { label: "Mobile Apps", href: "/services/mobile-app-development" },
    { label: "AI Solutions", href: "/services/ai-solutions" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "Cloud & DevOps", href: "/services/cloud-devops" },
  ],
  industries: [
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Fintech", href: "/industries/fintech" },
    { label: "Education", href: "/industries/education" },
    { label: "Real Estate", href: "/industries/real-estate" },
    { label: "E-commerce", href: "/industries/ecommerce" },
    { label: "SaaS & Technology", href: "/industries/saas" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};
