# UQENA Website

Premium frontend corporate website for **UQENA** — a global software engineering and digital technology company.

**Tagline:** Engineering What's Next.  
**Intended domain:** [uqena.com](https://uqena.com)

This project is **frontend-only** (Next.js App Router). There is no backend, database, authentication, or CMS.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run build` | Create production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Customize

### Contact destination

Update email and social placeholders in:

```text
src/lib/config.ts
```

The contact form validates on the client and opens a `mailto:` draft. It does **not** send data to a server.

### Content

Structured content lives in:

```text
src/data/services.ts
src/data/industries.ts
src/data/solutions.ts
src/data/projects.ts
src/data/insights.ts
src/data/process.ts
src/data/navigation.ts
```

### Brand assets

Logo variations, favicon, and social image:

```text
public/brand/
```

Imagery:

```text
public/images/hero/
public/images/services/
public/images/industries/
public/images/projects/
public/images/insights/
```

### Site URL / SEO

Set `siteConfig.url` in `src/lib/config.ts`. Sitemap and robots use that value (`src/app/sitemap.ts`, `src/app/robots.ts`).

## Important notes

- Portfolio items are **conceptual demonstration projects**, not verified client work.
- Legal pages are **drafts** and must be reviewed before production use.
- Contact phone and address fields are **placeholders** until verified company details are supplied.
- Do not invent testimonials, awards, certifications, or metrics without real sources.

## License

Private — all rights reserved by UQENA unless otherwise stated.
