---
domain: me.aemdevweb.com
canonical: https://me.aemdevweb.com
generated: 2026-01-23 01:24:16
type: Technical Core Context
---

# Ai-context.core.md: System Architecture and Engineering Standards

## 1. Core System Identity

- **Framework:** Next.js 16.1.4 (App Router)
- **Runtime:** Node.js (Termux/Linux Environment)
- **Paradigm:** Digital Twin Architecture | Authority & R&D Lab
- **Core Stack:**
  - **Language:** TypeScript (Strict)
  - **UI Engine:** Tailwind CSS v4.0 (PostCSS), Framer Motion, Lucide React
  - **Content Engine:** MDX (Direct Page & Remote), Gray Matter
- **Objective:** Maximize E-E-A-T (Expertise, Experience, Authoritativeness, Trustworthiness) to support the main commercial entity.

## 2. Directory Architecture (The Blueprint)

### A. App Router Strategy (Direct Mapping)

Unlike the commercial domain, this architecture utilizes a flat, direct routing structure optimized for static generation and content readability.

- **app/ (Root):** Contains global layouts and high-level routing.
- **app/[static-pages]:** Direct MDX Page implementation (e.g., `app/about/page.mdx`, `app/contact/page.mdx`). This reduces component overhead for static information.
- **app/blog & app/projects:** Dynamic routes handling structured content ingestion from the `content/` directory.

### B. Content Layer (Knowledge Base)

- **content/blog:** Technical deep-dives and industry analysis. Acts as the primary source for "Expertise" signals.
- **content/projects:** Architectural breakdowns of past work. Acts as the primary source for "Experience" signals.

### C. Component Hierarchy

- **components/profile:** Identity-specific components (Hero, Schema, ContactInfo). These are unique to the `me` domain and define the personal brand.
- **components/shared:** Reusable UI cards (ProjectCard, ServiceCard) used to cross-link resources.
- **components/ui:** Atomic design elements (Cards, Buttons, Inputs).

## 3. Engineering Standards (Dev-to-Dev)

### Technical Constraints

- **Strict No Emojis:** Prohibited in all source code, technical documentation, and system logs.
- **Build Engine:** Explicitly configured to use Webpack (`next build --webpack`) to ensure stability within the Termux ARM64 environment. Turbopack usage is currently suspended.
- **Tailwind v4:** Utilizes the `@tailwindcss/postcss` plugin architecture. CSS variables are defined in `globals.css` and strictly typed in class utilities.

### Performance Targets

- **LCP (Largest Contentful Paint):** < 1.0s (Stricter than commercial domain to demonstrate technical competency).
- **CLS (Cumulative Layout Shift):** 0.0 (Static content must be rock solid).
- **Accessibility:** 100/100 (WAI-ARIA compliance mandatory).

## 4. Entity SEO and Schema Strategy

This system defines the "Source" of the Trust Graph:

- **Person Entity:** Defined at `me.aemdevweb.com` (@id: https://me.aemdevweb.com/#person).
- **Relation:** This entity claims ownership of the Organization defined at `www`.
- **Schema Implementation:** Located in `components/profile/Schema.tsx`. Must inject JSON-LD defining `jobTitle`, `knowsAbout`, and `sameAs`.

## 5. Deployment and Runtime Protocols

### Pre-deployment Inspection

All code must pass the `pre-deploy-check.sh` protocol:

1.  **Linting:** `eslint .` (ESLint 9.x configuration).
2.  **Type Check:** `tsc --noEmit` to ensure strict type safety across MDX and TSX files.
3.  **Build Validation:** Successful generation of static assets via Webpack.

### Runtime Configuration

- **next.config.ts:** Manages strict headers, image optimization domains, and MDX extensions.
- **Proxy/Middleware:** Handles Edge-level security headers (CSP, HSTS) before content delivery.

## 6. Maintenance Logic

- **Content-as-Code:** All knowledge transfer occurs via Markdown/MDX files in the `content/` directory. No database required for this domain to ensure maximum portability and speed.
- **Dependency Management:** Keep `react` and `react-dom` pinned to version 19.x to maintain compatibility with Next.js 16.1.4 features.
