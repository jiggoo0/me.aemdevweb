---
title: "Project Structure Report"
description: "Extended scan of project folders, configuration, content, MDX, Next.js config, and pre-deploy analysis"
author: "Auto Generated Script"
site: "https://me.aemdevweb.com/"
projectType: "Web Application"
environment: "pre-deploy"
buildId: "1cfd7c8b"
contentType: "documentation"
generatedAt: "2026-01-21T04:19:22Z"
tags:
  - project-structure
  - nextjs
  - mdx
  - pre-deploy
  - aem
  - automation
---

# 📁 Project Structure Report (Extended Scan)

_Generated: Wed Jan 21 11:19:22 +07 2026_

## 🌳 Folder Structure

⚠️ Skipped (not found): config

📂 app
📂 about
📄 page.mdx
📂 blog
📂 [slug]
📄 page.tsx
📄 page.tsx
📂 contact
📄 page.mdx
📄 favicon.ico
📄 globals.css
📄 layout.tsx
📄 page.tsx
📂 projects
📄 page.mdx
📄 robots.ts
📂 services
📂 aem-dev
📄 page.mdx
📄 page.mdx
📂 unlink-th
📄 page.mdx
📄 sitemap.ts

📂 components
📂 layout
📄 Container.tsx
📄 Footer.tsx
📄 Header.tsx
📂 profile
📄 ContactInfo.tsx
📄 Hero.tsx
📄 Schema.tsx
📂 shared
📄 BlogCard.tsx
📄 ProjectCard.tsx
📄 ServiceCard.tsx
📄 SocialLinks.tsx
📂 ui
📄 badge.tsx
📄 button.tsx
📄 card.tsx
📄 input.tsx

📂 lib
📄 blog.ts
📄 projects.ts
📄 utils.ts

⚠️ Skipped (not found): hooks

⚠️ Skipped (not found): constants

📂 content
📂 blog
📄 sme-family-business-seo.mdx
📄 technical-seo-tips.mdx
📄 what-is-seo-organic.mdx
📄 why-need-website-vs-facebook.mdx
📂 projects

⚠️ Skipped (not found): types

📂 public
📄 file.svg
📄 globe.svg
📂 images
📄 activity.webp
📄 aemdevweb-hero.webp
📂 blog
📄 aemdevweb.webp
📂 case
📄 case100.webp
📄 case99.webp
📄 grid.svg
📄 og-image.png
📄 profile-photo.jpg
📄 project-01.webp
📂 service
📄 Unlink-th.webp
📄 aemdevweb.webp
📄 next.svg
📄 vercel.svg
📄 window.svg

⚠️ Skipped (not found): providers

## 📦 package.json Overview

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

## 🧩 MDX Components Analysis

### 📄 File: `mdx-components.tsx`

#### 🔍 Purpose

- Central MDX component mapping for content rendering
- Controls headings, links, images, code blocks, and custom UI
- Critical for SEO, Accessibility, and Headless CMS (AEM) compatibility

#### 🧠 Structural Overview

- React components exposed to MDX provider
- Overrides default HTML tags (h1–h6, p, a, img, code, pre)
- Used by Next.js App Router MDX pipeline

#### 🧩 Source Code

```typescript
/** @format */
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

// --- [Profile & Shared Components] ---
import Hero from "@/components/profile/Hero"; // ✅ ลงทะเบียนให้ MDX ทุกหน้าเข้าถึงได้
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

// --- [Lucide Icons] ---
import {
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
  PenTool, // ✅ เพิ่มไว้สำหรับหน้า About ที่พี่เพิ่งแก้
} from "lucide-react";

interface MdxImageProps {
  src?: string;
  alt?: string;
  [key: string]: unknown;
}

/**
 * useMDXComponents - ฉบับพาร์ทเนอร์ดูแลระบบและ SEO Organic
 * จัดการเรื่อง Registry คอมโพเนนต์เพื่อให้ไฟล์ .mdx เรียกใช้ Tag ได้โดยไม่ต้อง Import ซ้ำ
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // 1. Typography & Layout Standard
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

    // ✅ ป้องกัน Hydration Error ใน Next.js 15
    p: ({ className, ...props }) => (
      <span
        className={cn(
          "block text-lg font-medium leading-8 text-slate-600 [&:not(:first-child)]:mt-6",
          className
        )}
        {...props}
      />
    ),

    ul: ({ className, ...props }) => (
      <ul
        className={cn(
          "my-6 ml-6 list-disc font-medium space-y-3 text-slate-600",
          className
        )}
        {...props}
      />
    ),
    blockquote: ({ className, ...props }) => (
      <div
        className={cn(
          "my-10 flex items-center gap-6 rounded-3xl bg-blue-50/50 p-8 border-l-8 border-blue-600 md:rounded-r-[2.5rem]",
          className
        )}
      >
        <Lightbulb className="hidden h-10 w-10 text-blue-600 shrink-0 md:block" />
        <blockquote
          className="text-lg font-bold italic text-blue-900"
          {...props}
        />
      </div>
    ),

    // 2. Media Optimization
    img: ({ alt, src, ...props }: MdxImageProps) => (
      <span className="relative my-10 block aspect-video w-full overflow-hidden rounded-[2rem] border-2 border-slate-100 shadow-xl transition-transform hover:scale-[1.01]">
        <Image
          fill
          src={src || ""}
          alt={alt || "AEM DEV WEB Content Image"}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
          {...props}
        />
      </span>
    ),

    // 3. Navigation
    Link,
    a: ({ href, className, ...props }) => (
      <Link
        href={href as string}
        className={cn(
          "font-bold text-blue-600 underline underline-offset-4 transition-colors hover:text-blue-800",
          className
        )}
        {...props}
      />
    ),

    // 4. Custom Registry (พาร์ทสำคัญที่แก้ Error)
    Hero, // ✅ ลงทะเบียนเรียบร้อย เรียกใช้ <Hero /> ใน MDX ได้เลย
    ProjectCard,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    Button,
    Badge,

    // 5. Lucide Icons Registry
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
  };
}
```

#### ⚠️ Review Checklist

- [ ] Heading hierarchy (h1–h6) is semantic
- [ ] External links use rel="noopener noreferrer"
- [ ] Images optimized (next/image preferred)
- [ ] Code blocks support syntax highlighting
- [ ] No inline scripts or unsafe HTML
- [ ] Compatible with AEM / Headless rendering

## ⚙️ Next.js Configuration Analysis

### 📄 File: `next.config.ts`

#### 🔍 Purpose

- Core Next.js runtime and build configuration
- Controls routing behavior, images, security headers, and optimizations
- Critical for performance, SEO, and production deployment

#### 🧠 Configuration Review Focus

- App Router / experimental flags
- Image domains and optimization
- Headers (security, CSP, caching)
- Output mode (standalone / export)
- AEM / Headless compatibility

#### ⚙️ Source Code

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
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  experimental: {
    // ✅ ต้องปรับเป็น false เพื่อให้ remark-frontmatter ทำงานได้ครับ
    mdxRs: false,

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
    // ✅ ใส่ Plugins ที่นี่เพื่อให้ระบบตัด Frontmatter ออกจากการเรนเดอร์
    remarkPlugins: [remarkFrontmatter, remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
```

#### ⚠️ Review Checklist

- [ ] output mode correctly set (standalone/export)
- [ ] images.domains explicitly defined
- [ ] security headers configured (CSP, X-Frame, etc.)
- [ ] experimental flags reviewed
- [ ] basePath / assetPrefix correct (if used)
- [ ] Compatible with CDN / AEM Dispatcher

## 📝 Pre-Deploy Analysis

---

⚠️ pre-deploy-report.md not found
Run pre-deploy-check.sh to generate the report

---

Status: Scan completed successfully.
Scope: Architecture • Content • MDX • Next.js Config • Pre-deploy
Target: AEM / Headless / AI Context Ready
