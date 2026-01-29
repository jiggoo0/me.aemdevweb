---
title: "Project Structure Report (Authority Domain)"
description: "Architecture, MDX mapping, and pre-deploy status for personal branding network"
author: "Alongkorl Yomkerd"
site: "https://me.aemdevweb.com/"
projectType: "Personal Brand & Knowledge Base (Authority)"
environment: "pre-deploy"
buildId: "6f58e89a"
generatedAt: "2026-01-23T20:51:51Z"
contentType: "documentation"
tags:
  - project-structure
  - nextjs-16
  - authority-domain
  - eeat-strategy
---

# Project Structure Report (Extended Scan)

Generated: Sat Jan 24 03:51:51 +07 2026

> Site: https://me.aemdevweb.com/
> Identity: นายเอ็มซ่ามากส์ (Person Entity)
> Purpose: Knowledge Base & Trust Foundation
> Build ID: 6f58e89a

## 1. Directory Architecture

dir: config/
config
|ai-context.core.md
|ai-system-role.md
|ai-context.dna.md

dir: app/
app
|about
|page.mdx
|robots.ts
|contact
|page.mdx
|favicon.ico
|globals.css
|layout.tsx
|page.tsx
|services
|aem-dev
|page.mdx
|unlink-th
|page.mdx
|page.mdx
|sitemap.ts
|projects
|page.mdx
|blog
|page.tsx
|[slug]
|page.tsx

dir: components/
components
|ui
|card.tsx
|button.tsx
|input.tsx
|badge.tsx
|shared
|SocialLinks.tsx
|ProjectCard.tsx
|ServiceCard.tsx
|BlogCard.tsx
|profile
|ContactInfo.tsx
|Hero.tsx
|Schema.tsx
|layout
|Header.tsx
|Footer.tsx
|Container.tsx

dir: lib/
lib
|utils.ts
|blog.ts
|projects.ts

[WARN] Directory not found: hooks

dir: constants/
constants
|site-config.ts

dir: content/
content
|blog
|technical-seo-tips.mdx
|what-is-seo-organic.mdx
|why-need-website-vs-facebook.mdx
|sme-family-business-seo.mdx
|projects

[WARN] Directory not found: types

dir: public/
public
|file.svg
|globe.svg
|images
|activity.webp
|profile-photo.jpg
|aemdevweb-hero.webp
|og-image.png
|service
|aemdevweb.webp
|Unlink-th.webp
|project-01.webp
|case
|case100.webp
|case99.webp
|Unlike-th-destop99.webp
|Unlink-th-mobile94.webp
|grid.svg
|blog
|aemdevweb.webp
|next.svg
|vercel.svg
|window.svg

[WARN] Directory not found: providers

## 2. Dependencies and Scripts (package.json)

```json
{
  "name": "alongkorl-yomkert",
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev --webpack",
    "build": "next build --webpack",
    "start": "next start",
    "lint": "eslint .",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "@mdx-js/loader": "^3.1.0",
    "@mdx-js/react": "^3.1.0",
    "@next/mdx": "15.5.7",
    "@radix-ui/react-slot": "^1.1.0",
    "@tailwindcss/typography": "^0.5.19",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^11.15.0",
    "gray-matter": "^4.0.3",
    "lucide-react": "^0.468.0",
    "next": "16.1.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "remark-frontmatter": "^5.0.0",
    "remark-gfm": "^4.0.1",
    "tailwind-merge": "^2.5.5"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.3.3",
    "@eslint/js": "^9.39.2",
    "@tailwindcss/postcss": "^4.1.18",
    "@types/mdx": "^2.0.13",
    "@types/node": "^20.17.10",
    "@types/react": "^19.0.1",
    "@types/react-dom": "^19.0.1",
    "eslint": "^9.16.0",
    "eslint-config-next": "15.1.0",
    "postcss": "^8.4.49",
    "prettier": "^3.4.2",
    "prettier-plugin-tailwindcss": "^0.6.9",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.2"
  }
}
```

## 3. MDX Rendering Logic

File found: mdx-components.tsx

```typescript
/** @format */
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// --- [Profile & Shared Components] ---
import Hero from "@/components/profile/Hero";
import ContactInfo from "@/components/profile/ContactInfo";
import ProjectCard from "@/components/shared/ProjectCard";

// --- [UI Components] ---
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// --- [Lucide Icons Registry] ---
import {
  Heart,
  Layout,
  Rocket,
  ArrowRight,
  Search,
  ShieldCheck,
  Sparkles,
  MousePointer2,
  Zap,
  CheckCircle2,
  Star,
  EyeOff,
  UserCheck,
  Lock,
  TrendingUp,
  HeartHandshake,
  Layers,
  XCircle,
  Info,
  AlertCircle,
  Lightbulb,
  Target,
  BarChart3,
  Globe,
  LayoutGrid,
  Store,
  MapPin,
  PiggyBank,
  Users,
  PenTool,
  Terminal,
  Mail,
  MessageSquare,
  Send,
  Clock,
  Phone,
  Facebook,
} from "lucide-react";

interface MdxImageProps {
  src?: string;
  alt?: string;
  [key: string]: unknown;
}

/**
 * useMDXComponents - ฉบับการจัดการโครงสร้างระบบและ SEO Organic 2026
 * แก้ไขปัญหา Prerender Error และจัดการการแสดงผลระดับสมรรถนะสูง
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // 1. การจัดการหัวข้อ (Typography Standards)
    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          "mt-4 scroll-m-20 text-4xl font-black tracking-tight text-slate-900 lg:text-5xl",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          "mt-12 scroll-m-20 border-b pb-3 text-3xl font-bold tracking-tight text-slate-800 transition-colors first:mt-0",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn(
          "mt-8 scroll-m-20 text-2xl font-bold tracking-tight text-slate-800",
          className
        )}
        {...props}
      />
    ),

    // ✅ การจัดการ Tag ย่อยเพื่อป้องกัน Hydration Error
    p: ({ className, ...props }) => (
      <span
        className={cn(
          "block text-lg leading-8 font-medium text-slate-600 [&:not(:first-child)]:mt-6",
          className
        )}
        {...props}
      />
    ),

    // 2. การจัดการสื่อ (Media Optimization for LCP)
    img: ({ alt, src, ...props }: MdxImageProps) => (
      <span className="relative my-10 block aspect-video w-full overflow-hidden rounded-[2rem] border-2 border-slate-100 shadow-xl">
        <Image
          fill
          src={src || ""}
          alt={alt || "AEMDEVWEB Content Image"}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 75vw"
          {...props}
        />
      </span>
    ),

    // 3. การนำทาง (Navigation Hub)
    Link,
    a: ({ href, className, ...props }) => (
      <Link
        href={href as string}
        className={cn(
          "font-bold text-blue-600 underline underline-offset-4 hover:text-blue-800",
          className
        )}
        {...props}
      />
    ),

    // 4. การลงทะเบียนคอมโพเนนต์ (Custom Components)
    Hero,
    ContactInfo,
    ProjectCard,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    Button,
    Badge,
    Input,

    // 5. การลงทะเบียน Icon (Icon Registry)
    Heart,
    Layout,
    Rocket,
    ArrowRight,
    Search,
    ShieldCheck,
    Sparkles,
    MousePointer2,
    Zap,
    CheckCircle2,
    Star,
    EyeOff,
    UserCheck,
    Lock,
    TrendingUp,
    HeartHandshake,
    Layers,
    XCircle,
    Info,
    AlertCircle,
    Lightbulb,
    Target,
    BarChart3,
    Globe,
    LayoutGrid,
    Store,
    MapPin,
    PiggyBank,
    Users,
    PenTool,
    Terminal,
    Mail,
    MessageSquare,
    Send,
    Clock,
    Phone,
    Facebook,
  };
}
```

## 4. Next.js Runtime and Edge Configuration

Status: Core configuration detected (next.config.ts)

```typescript
/** @format */
import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    minimumCacheTTL: 3600,
    remotePatterns: [
      { protocol: "https", hostname: "lin.ee" },
      { protocol: "https", hostname: "me.aemdevweb.com" },
    ],
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  experimental: {
    mdxRs: false, // จำเป็นเพื่อให้ remark-frontmatter ทำงาน
    webpackBuildWorker: true,
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "sonner",
      "@radix-ui/react-icons",
      "@/components/ui",
    ],
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
```

## 5. Pre-Deploy Integrity Analysis

---

Verdict: READY FOR DEPLOY

### Production Route Map (From Report)

````text
```text
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├ ○ /blog
├ ● /blog/[slug]
│ ├ /blog/sme-family-business-seo
│ ├ /blog/technical-seo-tips
│ ├ /blog/what-is-seo-organic
│ └ /blog/why-need-website-vs-facebook
├ ○ /contact
├ ○ /projects
├ ○ /robots.txt
├ ○ /services
├ ○ /services/aem-dev
├ ○ /services/unlink-th
└ ○ /sitemap.xml
○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses generateStaticParams)
````

```
### Critical Issues Highlight
Status: No critical impediments detected in the latest audit.

---
Status: Scan completed successfully.
Scope: Personal Authority Domain Architecture Audit
```
