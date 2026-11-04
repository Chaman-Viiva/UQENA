export const siteConfig = {
  name: "UQENA",
  legalName: "UQENA",
  tagline: "Engineering What's Next.",
  description:
    "UQENA is a software engineering and digital technology company that helps ambitious businesses design, build, and scale intelligent digital products.",
  url: "https://uqena.com",
  locale: "en_US",
  contact: {
    email: "hello@uqena.com",
    mailto: "mailto:hello@uqena.com",
    phone: "+92 346 0047562",
    phoneHref: "tel:+923460047562",
    whatsapp: "https://wa.me/923460047562",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/uqena",
    facebook: "https://www.facebook.com/UQENAOfficial",
    instagram: "https://www.instagram.com/UQENAOfficial",
    twitter: "https://x.com/UQENAOfficial",
  },
  ogImage: "/brand/og-image.jpg",
} as const;

export const socialProfiles = [
  { key: "linkedin", label: "LinkedIn", href: siteConfig.social.linkedin },
  { key: "facebook", label: "Facebook", href: siteConfig.social.facebook },
  { key: "instagram", label: "Instagram", href: siteConfig.social.instagram },
  { key: "twitter", label: "X", href: siteConfig.social.twitter },
] as const;
