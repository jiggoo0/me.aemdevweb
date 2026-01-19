---
title: "Project Context Summary"
description: "Full context, architecture and code analysis for AEM DevWeb Platform"
author: "Internal Automation Bot"
site: "https://me.aemdevweb.com"
domain: "me.aemdevweb.com"
projectName: "AEM DevWeb Platform"
environment: "production"
contentType: "documentation"
buildId: "2edba1eb"
generatedAt: "2026-01-19T17:45:36Z"
tags:
  - aem
  - headless
  - ai-context
  - documentation
  - security
  - audit
  - production
---

# 📑 Project Context Summary (Full Scan)

> **Project:** AEM DevWeb Platform
> **Domain:** me.aemdevweb.com
> **URL:** https://me.aemdevweb.com
> **Environment:** production
> **Build:** 2edba1eb
> **Type:** Full System Context | AI Ready | AEM Ready | Security Focus

_Generated on: **2026-01-20 00:45:36**_

## 🔴 1. Project Health & Deployment Readiness
✅ **READY FOR DEPLOY** — Production standards satisfied.

### 📍 Production Route Map
```text
```text
Route (app)                                  Size  First Load JS
┌ ○ /                                       192 B         110 kB
├ ○ /_not-found                             994 B         103 kB
├ ○ /about                                  192 B         110 kB
├ ○ /blog                                   173 B         110 kB
├ ● /blog/[slug]                            192 B         110 kB
├   ├ /blog/sme-family-business-seo
├   ├ /blog/technical-seo-tips
├   ├ /blog/what-is-seo-organic
├   └ /blog/why-need-website-vs-facebook
├ ○ /contact                                192 B         110 kB
├ ○ /projects                               192 B         110 kB
├ ○ /robots.txt                             125 B         102 kB
├ ○ /services                               192 B         110 kB
├ ○ /services/aem-dev                       192 B         110 kB
├ ○ /services/unlink-th                     192 B         110 kB
└ ○ /sitemap.xml                            125 B         102 kB
+ First Load JS shared by all              102 kB
  ├ chunks/7f97a788-70f696b0503e8e6b.js   54.2 kB
  ├ chunks/919-64083ca842c756c7.js        45.5 kB
  └ other shared chunks (total)           1.92 kB
○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses generateStaticParams)
```
```

## 📊 2. File Statistics by Extension
```text
     18 tsx
     10 mdx
      8 webp
      6 svg
      5 ts
      5 sh
      1 png
      1 jpg
      1 ico
      1 css
```

## 📁 3. Directory Structure (Enterprise Architecture Tree)
```text
📂 app/
  📂 about/
    📄 page.mdx
  📄 robots.ts
  📂 contact/
    📄 page.mdx
  📄 favicon.ico
  📄 globals.css
  📄 layout.tsx
  📄 page.tsx
  📂 services/
    📂 aem-dev/
      📄 page.mdx
    📂 unlink-th/
      📄 page.mdx
    📄 page.mdx
  📄 sitemap.ts
  📂 projects/
    📄 page.mdx
  📂 blog/
    📄 page.tsx
    📂 [slug]/
      📄 page.tsx
📂 components/
  📂 ui/
    📄 card.tsx
    📄 button.tsx
    📄 input.tsx
    📄 badge.tsx
  📂 shared/
    📄 SocialLinks.tsx
    📄 ProjectCard.tsx
    📄 ServiceCard.tsx
    📄 BlogCard.tsx
  📂 profile/
    📄 ContactInfo.tsx
    📄 Hero.tsx
    📄 Schema.tsx
  📂 layout/
    📄 Header.tsx
    📄 Footer.tsx
    📄 Container.tsx
📂 lib/
  📄 utils.ts
  📄 blog.ts
  📄 projects.ts
📂 scripts/
  📄 clean-project.sh
  📂 dev/
    📄 backup-project.sh
    📄 project-summary.sh
    📄 tree-projects.sh
  📄 pre-deploy-check.sh
📂 public/
  📄 file.svg
  📄 globe.svg
  📂 images/
    📄 activity.webp
    📄 profile-photo.jpg
    📄 aemdevweb-hero.webp
    📄 og-image.png
    📂 service/
      📄 aemdevweb.webp
      📄 Unlink-th.webp
    📄 project-01.webp
    📂 case/
      📄 case100.webp
      📄 case99.webp
    📄 grid.svg
    📂 blog/
      📄 aemdevweb.webp
  📄 next.svg
  📄 vercel.svg
  📄 window.svg
📂 content/
  📂 blog/
    📄 technical-seo-tips.mdx
    📄 what-is-seo-organic.mdx
    📄 why-need-website-vs-facebook.mdx
    📄 sme-family-business-seo.mdx
  📂 projects/
```

## 📄 4. Critical Code Analysis & Environment Context
#### 🔍 Path: `pre-deploy-report.md`
```markdown
---
title: "Pre-deploy Inspection Report"
project: "UnlinkTH"
projectType: "Web Application"
environment: "pre-deploy"
site: "https://me.aemdevweb.com"
author: "Auto Pre-deploy Inspector"
branch: "main"
buildId: "b0c172fa"
generatedAt: "2026-01-19T17:41:14Z"
contentType: "pre-deploy-report"
tags:
  - pre-deploy
  - nextjs
  - aem
  - headless
  - automation
---

# 🚀 Pre-deploy Inspection Report

- **Generated:** 2026-01-20 00:41:14
- **Branch:** main
- **Build ID:** b0c172fa
- **Target Site:** https://me.aemdevweb.com

## 🛠️  1. Auto-Fix Procedure
✅ Status: Auto-fix completed or no issues found.
## 🧹 2. Code Linting (ESLint)
✅ Status: Linting passed.
## ⌨️ 3. Type Safety Check
✅ Status: TypeScript verified.
## 🏗️  4. Production Build Test
✅ Status: Build successfully optimized.
### 📊 Route Statistics & Bundle Size
```text
Route (app)                                  Size  First Load JS
┌ ○ /                                       192 B         110 kB
├ ○ /_not-found                             994 B         103 kB
├ ○ /about                                  192 B         110 kB
├ ○ /blog                                   173 B         110 kB
├ ● /blog/[slug]                            192 B         110 kB
├   ├ /blog/sme-family-business-seo
├   ├ /blog/technical-seo-tips
├   ├ /blog/what-is-seo-organic
├   └ /blog/why-need-website-vs-facebook
├ ○ /contact                                192 B         110 kB
├ ○ /projects                               192 B         110 kB
├ ○ /robots.txt                             125 B         102 kB
├ ○ /services                               192 B         110 kB
├ ○ /services/aem-dev                       192 B         110 kB
├ ○ /services/unlink-th                     192 B         110 kB
└ ○ /sitemap.xml                            125 B         102 kB
+ First Load JS shared by all              102 kB
  ├ chunks/7f97a788-70f696b0503e8e6b.js   54.2 kB
  ├ chunks/919-64083ca842c756c7.js        45.5 kB
  └ other shared chunks (total)           1.92 kB


○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses generateStaticParams)

```

---
## 🏆 Summary Result
### ✅ READY FOR DEPLOY
All protocols verified: Lint passed, Types safe, and Build successful.
Deployment is approved for **https://me.aemdevweb.com**.
```
---

#### 🔍 Path: `app/globals.css`
```css
@import "tailwindcss";

@theme {
  /* นิยามตัวแปรสีที่ Shadcn UI เรียกใช้เพื่อให้ Tailwind รู้จัก */
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  
  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));
  
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.75rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    /* ... (ค่าสี Dark mode อื่นๆ) */
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```
---

#### 🔍 Path: `app/layout.tsx`
```typescript
/** @format */
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import Schema from "@/components/profile/Schema";

// 1. Configure Fonts - ใช้มาตรฐาน Geist สำหรับ Modern UI
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// 2. Viewport Settings - ปรับแต่งเพื่อการแสดงผลบน Mobile ที่สมบูรณ์
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // อนุญาตให้ User Zoom ได้เพื่อ Accessibility
};

// 3. Metadata Strategy - เน้นความเป็นผู้เชี่ยวชาญ SEO Organic และพาร์ทเนอร์ธุรกิจ
export const metadata: Metadata = {
  metadataBase: new URL("https://me.aemdevweb.com"),
  title: {
    // 🎨 Target Keywords: สร้างเว็บไซต์ + SEO Organic (สายออร์แกนิค)
    default: "อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์) | ที่ปรึกษาดูแลระบบเว็บไซต์และ SEO Organic",
    template: "%s | นายเอ็มซ่ามากส์",
  },
  description:
    "พาร์ทเนอร์ดูแลระบบเว็บไซต์และปั้นอันดับด้วย SEO Organic (สายออร์แกนิค) เน้นโครงสร้างที่ยั่งยืน ผู้อยู่เบื้องหลังระบบ Unlink-th ที่ช่วยให้ธุรกิจพี่ขยับขึ้นหน้าแรก Google ได้จริงโดยไม่พึ่งพาแค่ค่าโฆษณา",
  keywords: [
    "นายเอ็มซ่ามากส์",
    "Alongkorl Yomkerd",
    "ที่ปรึกษา SEO Organic",
    "รับทำ SEO สายออร์แกนิค",
    "ดูแล SEO รายเดือน",
    "รับสร้างเว็บไซต์ SME",
    "ดูแลระบบเว็บไซต์ระยะยาว",
    "ดันอันดับ Google แบบธรรมชาติ",
    "AemDevWeb",
    "Unlink-th Expert",
  ],
  authors: [{ name: "Alongkorl Yomkerd", url: "https://me.aemdevweb.com" }],
  creator: "Alongkorl Yomkerd",
  publisher: "AemDevWeb",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // แนะนำให้เพิ่มในอนาคตเพื่อความพรีเมียม
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://me.aemdevweb.com",
    siteName: "AemDevWeb",
    title: "อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์) | ที่ปรึกษา SEO Organic",
    description: "สร้างเว็บไซต์และปั้นอันดับ Google แบบยั่งยืนสำหรับ SME",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alongkorl Yomkerd - SEO Organic Expert",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// 4. RootLayout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "min-h-screen bg-background font-sans antialiased selection:bg-blue-100/50"
        )}
      >
        {/* ✅ Schema JSON-LD: สำหรับระบุตัวตนพาร์ทเนอร์ด้านระบบและ SEO (Technical SEO) */}
        <Schema />

        <div className="relative flex min-h-screen flex-col">
          {/* ส่วนหัวของเว็บไซต์ */}
          <Header />

          {/* เนื้อหาหลักของแต่ละหน้า */}
          <main className="flex-1">
            {children}
          </main>

          {/* ส่วนท้ายของเว็บไซต์ */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
```
---

#### 🔍 Path: `app/page.tsx`
```typescript
/** @format */
import Hero from "@/components/profile/Hero";
import ServiceCard from "@/components/shared/ServiceCard";
import Schema from "@/components/profile/Schema";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Search,
  Globe,
} from "lucide-react";

/**
 * HomePage - ฉบับนายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 * เน้นการเป็น "พาร์ทเนอร์ดูแลระบบ" และ "ผู้เชี่ยวชาญ SEO Organic"
 */
export default function HomePage() {
  // ข้อมูลบริการหลักที่ดึงมาจาก Service Strategy
  const services = [
    {
      title: "วางระบบเว็บ & SEO Organic",
      description:
        "ผมสร้างเว็บไซต์ที่ไม่ได้มีดีแค่ความเร็ว แต่ถูกวางโครงสร้างสายออร์แกนิคมาตั้งแต่ต้น เพื่อให้ธุรกิจพี่ติดหน้าแรก Google ได้อย่างยั่งยืนโดยไม่ต้องพึ่งพาแต่ค่าโฆษณา",
      image: "/images/service/aemdevweb.webp",
      link: "/services/aem-dev",
    },
    {
      title: "ดูแลระบบ & ปั้นอันดับธุรกิจ",
      description:
        "ใช้ประสบการณ์จากการดูแลระบบ Unlink-th มาช่วยวิเคราะห์และดันอันดับเว็บไซต์ของพี่ให้สูงขึ้น ด้วยเทคนิค SEO สายขาวที่ปลอดภัยและเน้นผลลัพธ์ในระยะยาว",
      image: "/images/service/Unlink-th.webp",
      link: "/services/unlink-th",
      isDark: true, // เน้นความ Professional ในฐานะผู้อยู่เบื้องหลัง
    },
  ];

  return (
    <>
      {/* 🛠️ Technical SEO: Schema JSON-LD สำหรับระบุตัวตนบน Google */}
      <Schema />

      <div className="flex flex-col gap-24 pb-20">
        {/* 1. Hero Section: First Impression ของผู้เชี่ยวชาญ */}
        <Hero />

        <Container>
          {/* 2. Services Section: ทางออกเพื่อการเติบโตของ SME */}
          <section id="services" className="scroll-m-20">
            <div className="mb-16 flex flex-col items-center space-y-4 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-blue-600 shadow-sm">
                <Search className="h-3.5 w-3.5" /> SEO Organic Partner
              </div>
              <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-5xl">
                ปั้นเว็บไซต์ให้ "ติดหน้าแรก" <br className="hidden sm:block" />{" "}
                ด้วยกลยุทธ์สายออร์แกนิค
              </h2>
              <p className="max-w-[750px] text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl">
                ถ้าพี่กำลังหาคนดูแลระบบเว็บไซต์และอยากดันอันดับ Google ให้ยั่งยืน{" "}
                <br className="hidden md:block" />{" "}
                ผมพร้อมเป็นพาร์ทเนอร์ที่คอยดูแลและให้คำปรึกษาพี่ตั้งแต่วันแรกครับ
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </section>

          {/* 3. Latest Insights: คลังความรู้จากประสบการณ์จริง */}
          <section className="mt-24 border-t border-slate-100 pt-24">
            <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-black uppercase tracking-tighter text-blue-600">
                  <Globe className="h-4 w-4" /> Organic Search Strategy
                </div>
                <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                  เทคนิคปั้นอันดับออร์แกนิค <br /> ที่ SME ไทยต้องรู้
                </h2>
                <p className="max-w-xl text-lg font-medium leading-relaxed text-muted-foreground">
                  ผมหยิบเอาประสบการณ์จากการปั้นระบบและงัดข้อกับอัลกอริทึม Google{" "}
                  <br className="hidden md:block" />{" "}
                  มาย่อยเป็นขั้นตอนที่พี่เอาไปปรับใช้กับธุรกิจได้จริง
                </p>
              </div>
              <Button
                variant="outline"
                className="group border-2 rounded-full px-8 py-6 font-black transition-all hover:bg-slate-50"
                asChild
              >
                <Link href="/blog">
                  เจาะลึกวิชา SEO ทั้งหมด
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Placeholder สำหรับบทความใหม่ */}
            <div className="group border-2 border-dashed border-slate-200 bg-slate-50 p-16 text-center transition-colors hover:border-blue-200 rounded-[2.5rem]">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform group-hover:scale-110">
                <Search className="h-8 w-8 text-blue-500" />
              </div>
              <p className="mb-2 text-sm font-black uppercase tracking-widest text-slate-400">
                Latest Strategies
              </p>
              <h3 className="text-xl font-bold text-slate-600">
                บทความเรื่อง SEO ออร์แกนิค กำลังถูกอัปเดตให้ทันสมัยที่สุดเร็วๆ นี้
              </h3>
            </div>
          </section>
        </Container>

        {/* 4. Call to Action: ส่วนปิดการขายเพื่อเริ่มโปรเจกต์ */}
        <Container>
          <section className="relative overflow-hidden bg-slate-900 px-8 py-24 text-center text-white shadow-3xl shadow-blue-900/40 rounded-[3.5rem]">
            {/* Background Grid Pattern */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[url('/images/grid.svg')] opacity-15" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="mb-8 text-4xl font-black leading-[1.1] md:text-6xl">
                อยากให้ธุรกิจพี่ <br /> ไปอยู่หน้าแรก Google ไหม?
              </h2>
              <p className="mb-12 text-lg font-medium leading-relaxed text-slate-400 sm:text-xl">
                ไม่ว่าพี่จะต้องการคนดูแล SEO รายเดือน
                หรืออยากวางระบบเว็บไซต์ใหม่ที่เน้นยอดขาย{" "}
                <br className="hidden sm:block" />{" "}
                ผมพร้อมใช้เทคนิคสายออร์แกนิคมาช่วยให้ธุรกิจพี่เติบโตอย่างยั่งยืนครับ
              </p>
              <div className="flex flex-wrap justify-center gap-5">
                <Button
                  size="lg"
                  className="h-16 rounded-full bg-blue-600 px-10 text-lg font-black shadow-lg shadow-blue-600/30 transition-all hover:scale-105 hover:bg-blue-700"
                  asChild
                >
                  <Link href="/contact">ปรึกษาเรื่อง SEO ฟรี</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 rounded-full border-white/20 bg-white/5 px-10 text-lg font-black backdrop-blur-md transition-all hover:scale-105 hover:bg-white/10 text-white"
                  asChild
                >
                  <Link href="/services">ดูทางออกทั้งหมด</Link>
                </Button>
              </div>
              <div className="mt-12 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500">
                <ShieldCheck className="h-4 w-4 text-green-500" />{" "}
                มุ่งเน้นความยั่งยืนด้วยเทคนิค SEO สายขาว 100%
              </div>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
}
```
---

#### 🔍 Path: `app/about/page.mdx`
```text
import Hero from "@/components/profile/Hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Globe, ShieldCheck, Sparkles, TrendingUp, HeartHandshake, Star, Layers, Lock } from "lucide-react"
import Link from "next/link"

<Hero />

---

# <Star className="inline-block mr-3 h-8 w-8 text-blue-600" /> ผมอลงกรณ์ ยมเกิด (เอ็มซ่ามากส์)

สวัสดีครับ ผม **เอ็ม (อลงกรณ์ ยมเกิด)** หรือที่พี่น้องในวงการรู้จักกันในชื่อ **"นายเอ็มซ่ามากส์"** ผมคือที่ปรึกษาและนักพัฒนาที่ไม่ได้มองแค่บรรทัดโค้ด แต่ผมมองไปถึงการสร้าง **"โอกาสเติบโต"** ให้กับธุรกิจที่ผมดูแล เป้าหมายของผมคือการเปลี่ยนเทคโนโลยีที่ซับซ้อน ให้กลายเป็นเครื่องมือที่ช่วยให้พี่หาเงินได้ง่ายขึ้นและยั่งยืนครับ

---

### <TrendingUp className="inline-block mr-3 h-7 w-7 text-blue-600" /> มากกว่าการทำเว็บ คือการ "ปั้นผลลัพธ์"

ผมเชื่อว่าในยุคนี้ เว็บไซต์ที่สวยอย่างเดียวมันกินไม่ได้ เว็บไซต์ที่ทรงพลังต้อง **"หาเงินได้จริง"** และต้องถูกค้นหาพบในจุดที่ลูกค้ากำลังมองหา ผมจึงมุ่งเน้นการวางระบบที่รองรับการทำ **SEO Organic (สายออร์แกนิค)** ตั้งแต่รากฐาน เพื่อให้ธุรกิจของพี่ขยับขึ้นหน้าแรก Google ได้อย่างยั่งยืนครับ

1.  **AEM Dev Web:** ผมสร้างเว็บไซต์ด้วยเทคโนโลยีที่แรงที่สุดอย่าง Next.js 15 เพื่อให้เว็บพี่โหลดไวระดับเสี้ยววินาที ลื่นหัวแตก และ Google รักจนอยากดันขึ้นหน้าแรกทันที
2.  **Unlink-th:** ผลงานระดับ Flagship ที่ผมได้รับความไว้วางใจให้เป็นผู้วางโครงสร้างระบบจัดการข้อมูลและชื่อเสียงออนไลน์ ประสบการณ์จากที่นี่ทำให้ผมเข้าใจเบื้องลึกของอัลกอริทึม Google และรู้วิธีปั้นอันดับให้ธุรกิจพี่โดดเด่นอย่างมืออาชีพ

---

### <Layers className="inline-block mr-3 h-7 w-7 text-blue-600" /> สิ่งที่ผมพร้อมดูแลให้พี่ (My Focus)

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div className="flex items-center gap-3 p-4 border rounded-2xl bg-slate-50/50">
    <Search className="h-6 w-6 text-blue-600" />
    <div>
      <div className="font-bold text-slate-900">SEO Organic Specialist</div>
      <div className="text-sm text-muted-foreground">ปั้นอันดับด้วยเนื้อหาและโครงสร้างที่ยั่งยืน</div>
    </div>
  </div>
  <div className="flex items-center gap-3 p-4 border rounded-2xl bg-slate-50/50">
    <TrendingUp className="h-6 w-6 text-green-600" />
    <div>
      <div className="font-bold text-slate-900">Conversion-First Development</div>
      <div className="text-sm text-muted-foreground">สร้างเว็บที่เน้นการปิดยอดขาย ไม่ใช่แค่มีไว้โชว์</div>
    </div>
  </div>
  <div className="flex items-center gap-3 p-4 border rounded-2xl bg-slate-50/50">
    <ShieldCheck className="h-6 w-6 text-purple-600" />
    <div>
      <div className="font-bold text-slate-900">Digital Trust & Reputation</div>
      <div className="text-sm text-muted-foreground">ดูแลภาพลักษณ์ออนไลน์ให้ขาวสะอาดและน่าเชื่อถือ</div>
    </div>
  </div>
  <div className="flex items-center gap-3 p-4 border rounded-2xl bg-slate-50/50">
    <HeartHandshake className="h-6 w-6 text-orange-600" />
    <div>
      <div className="font-bold text-slate-900">Technical Growth Partner</div>
      <div className="text-sm text-muted-foreground">เป็นเพื่อนคู่คิด คอยดูแลและอัปเกรดระบบให้พี่ในระยะยาว</div>
    </div>
  </div>
</div>

---

### <Sparkles className="inline-block mr-3 h-7 w-7 text-blue-600" /> ประสบการณ์ที่ผมนำมาใช้

ผมไม่ได้แค่เรียนมา แต่ผมลงมือทำจริง ผมใช้เวลาในการงัดข้อกับอัลกอริทึมของ Google เพื่อหาวิธีที่ทำให้เว็บโหลดไวที่สุดและติดอันดับดีที่สุด ทุกโปรเจกต์ที่ผมรับดูแล ผมใช้มาตรฐานความละเอียดเดียวกับที่ผมทำระบบใหญ่อย่าง Unlink-th เพื่อให้แน่ใจว่าพี่จะได้รับระบบที่ช่วยให้ธุรกิจไปต่อได้จริงครับ

> <Lock className="inline-block mr-2 h-4 w-4 text-slate-400" /> "เป้าหมายของผมคือการเปลี่ยนเว็บไซต์ของพี่ให้เป็น 'สินทรัพย์' ที่คอยหาลูกค้าและสร้างความน่าเชื่อถือให้พี่ตลอด 24 ชั่วโมง"

---

### <HeartHandshake className="inline-block mr-3 h-7 w-7 text-blue-600" /> ทักมาปรึกษาผมได้เลยครับ

หากพี่กำลังมองหาพาร์ทเนอร์ที่จะมาช่วยดูแลเรื่องเว็บ หรืออยากปรึกษาเทคนิคการทำ SEO Organic เพื่อให้ธุรกิจโตขึ้นอย่างเป็นธรรมชาติ ไม่ต้องเกรงใจครับ ผมยินดีให้คำแนะนำแบบพี่น้องที่สุดครับ

<div className="flex flex-wrap gap-4 mt-8 py-10 border-t border-dashed">
  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-10 h-14 font-black text-lg shadow-xl shadow-blue-600/20 transition-transform hover:scale-105" asChild>
    <Link href="/contact">ปรึกษาเรื่อง SEO / ติดต่องาน</Link>
  </Button>
  <Button size="lg" variant="outline" className="rounded-full px-10 h-14 font-black text-lg border-2 transition-transform hover:scale-105" asChild>
    <Link href="/projects">ดูพอร์ตงานที่ผ่านมา</Link>
  </Button>
</div>
```
---

#### 🔍 Path: `app/contact/page.mdx`
```text
import ContactInfo from "@/components/profile/ContactInfo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Send, Clock, ShieldCheck, Search, Mail, HeartHandshake } from "lucide-react"
import Link from "next/link"

# <Mail className="inline-block mr-3 h-8 w-8 text-blue-600" /> ติดต่อสอบถาม / ปรึกษาโปรเจกต์

ไม่ว่าพี่จะอยากเริ่มปั้นเว็บไซต์ใหม่ให้ติดหน้าแรก Google หรือต้องการพาร์ทเนอร์คอยดูแลระบบและจัดการชื่อเสียงออนไลน์ ผมพร้อมรับฟังและให้คำปรึกษาแบบพี่น้องครับ

---

{/* ส่วนข้อมูลการติดต่อหลัก (LINE, Email, Facebook) */}
<ContactInfo />

---

### <MessageSquare className="inline-block mr-3 h-7 w-7 text-blue-600" /> ฝากรายละเอียดให้ผมติดต่อกลับ

ถ้าพี่ไม่สะดวกโทรหรือแชทในตอนนี้ สามารถฝากรายละเอียดไว้ให้ผมวิเคราะห์เบื้องต้นก่อนได้ครับ ข้อมูลของพี่จะถูกเก็บเป็นความลับสูงสุด

<Card className="my-10 border-2 shadow-lg rounded-[2.5rem] overflow-hidden">
  <CardContent className="pt-8 space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-3">
        <label className="text-sm font-black text-slate-700 uppercase tracking-wider">ชื่อ-นามสกุล / ชื่อธุรกิจ</label>
        <Input className="h-12 rounded-2xl bg-slate-50/50" placeholder="ระบุชื่อเพื่อให้ผมเรียกถูกครับ" />
      </div>
      <div className="space-y-3">
        <label className="text-sm font-black text-slate-700 uppercase tracking-wider">ช่องทางติดต่อกลับ</label>
        <Input className="h-12 rounded-2xl bg-slate-50/50" placeholder="เบอร์โทร, LINE ID หรือ อีเมล" />
      </div>
    </div>
    <div className="space-y-3">
      <label className="text-sm font-black text-slate-700 uppercase tracking-wider">สิ่งที่พี่ต้องการปรึกษา</label>
      <Input className="h-12 rounded-2xl bg-slate-50/50" placeholder="เช่น ปั้นอันดับ SEO, สร้างเว็บ SME หรือ ปรึกษาเรื่อง Unlink-th" />
    </div>
    <div className="space-y-3">
      <label className="text-sm font-black text-slate-700 uppercase tracking-wider">รายละเอียดที่อยากให้ผมช่วย</label>
      <textarea 
        className="flex min-h-[150px] w-full rounded-[2rem] border border-input bg-slate-50/50 px-5 py-4 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all"
        placeholder="พี่สามารถเล่าปัญหาหรือเป้าหมายที่อยากทำให้ฟังได้เลยครับ เพื่อให้ผมเตรียมข้อมูลไปช่วยพี่ได้แม่นยำขึ้น"
      />
    </div>
    <div className="pt-2">
      <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 h-16 px-12 rounded-full font-black text-lg shadow-xl shadow-blue-600/20 transition-transform hover:scale-105">
        <Send className="mr-2 h-5 w-5" /> ส่งข้อมูลให้นายเอ็มวิเคราะห์
      </Button>
    </div>
  </CardContent>
</Card>

---

### <Clock className="inline-block mr-3 h-7 w-7 text-blue-600" /> การตอบกลับและเวลาทำการ

ผมให้ความสำคัญกับทุกเคส และมุ่งมั่นที่จะช่วยหาทางออกให้พี่โดยเร็วที่สุดครับ

* **ช่วงเวลาให้คำปรึกษา:** จันทร์ - ศุกร์ (09:00 - 18:00 น.)
* **การตอบกลับ:** โดยปกติผมจะติดต่อกลับภายใน 24 ชั่วโมง (เว้นวันหยุดเสาร์-อาทิตย์)
* **กรณีเร่งด่วน:** แนะนำให้ทัก LINE Official มาได้เลยครับ ผมจะรีบตอบกลับให้ไวที่สุด

---

<div className="flex flex-col md:flex-row items-center justify-center gap-10 py-12 border-t border-dashed">
  <div className="flex items-center gap-3 text-slate-600 font-bold">
    <Search size={24} className="text-blue-500" />
    <span>วิเคราะห์โครงสร้าง SEO เบื้องต้นฟรี</span>
  </div>
  <div className="flex items-center gap-3 text-slate-600 font-bold">
    <ShieldCheck size={24} className="text-green-500" />
    <span>รักษาความลับของโปรเจกต์ 100%</span>
  </div>
  <div className="flex items-center gap-3 text-slate-600 font-bold">
    <HeartHandshake size={24} className="text-orange-500" />
    <span>พร้อมเป็นพาร์ทเนอร์ดูแลระยะยาว</span>
  </div>
</div>
```
---

#### 🔍 Path: `app/projects/page.mdx`
```text
/** @format */

# พอร์ตโฟลิโอและเคสความสำเร็จ

รวบรวมตัวอย่างการวางระบบและผลงานการปั้นอันดับโดย **อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)** ทุกโปรเจกต์ถูกสร้างขึ้นด้วยเป้าหมายเดียวคือการช่วยให้ธุรกิจของพี่เติบโตได้อย่างยั่งยืนด้วยกลยุทธ์สายออร์แกนิคครับ

---

### <Star className="inline-block mr-2 h-6 w-6 text-blue-600" /> ผลงานระดับ Flagship

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
  <ProjectCard 
    title="ระบบ Unlink-th (Flagship Project)"
    description="ผู้อยู่เบื้องหลังการวางโครงสร้างระบบจัดการข้อมูลและชื่อเสียงออนไลน์ทั้งหมด เน้นความปลอดภัยระดับสูงสุดและการทำอันดับแบบ Organic เพื่อคืนตัวตนใหม่ที่ขาวสะอาดบนโลกดิจิทัล"
    image="/images/service/Unlink-th.webp"
    tags={["ผู้วางระบบทั้งหมด", "SEO Organic", "Security Expert"]}
    isFeatured={true}
  />
  
  <ProjectCard 
    title="AEM Dev Web Portal"
    description="ระบบศูนย์รวมบริการสำหรับ SME ไทยที่ต้องการเว็ปไซต์โหลดไวระดับเสี้ยววินาที พร้อมโครงสร้างที่ Google รักตั้งแต่วันแรกที่เปิดตัวด้วยเทคนิคสายขาว"
    image="/images/service/aemdevweb.webp"
    tags={["Next.js 15", "Conversion Design", "SEO Ready"]}
    isFeatured={true}
  />
</div>

---

### <LayoutGrid className="inline-block mr-2 h-6 w-6 text-blue-600" /> ผลงานและการดูแลระบบ

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
  <ProjectCard 
    title="SME Brand Growth"
    description="เคสการปั้นอันดับ Keyword ธุรกิจเฉพาะทางให้ติดหน้าแรก Google ด้วยเทคนิค Organic 100% ช่วยเพิ่ม Traffic คุณภาพโดยไม่ต้องยิงแอด"
    image="/images/project-01.webp"
    tags={["SEO Strategy", "Organic Search"]}
  />

  <ProjectCard 
    title="SecureDocs Master"
    description="ระบบจัดการเอกสารออนไลน์พร้อม Workflow อัตโนมัติ ช่วยลดเวลาการทำงานและเพิ่มความถูกต้องของข้อมูลได้กว่า 70%"
    image="/images/activity.webp"
    tags={["System Design", "Workflow"]}
  />
  
  <ProjectCard 
    title="Reputation Monitoring"
    description="ระบบเฝ้าสังเกตการณ์ชื่อเสียงออนไลน์ แจ้งเตือนความเสี่ยงแบบ Real-time เพื่อรักษาภาพลักษณ์ของธุรกิจอย่างแม่นยำ"
    image="/images/case/case99.webp" 
    tags={["Brand Protection", "Real-time"]}
  />
</div>

---

### <Zap className="inline-block mr-2 h-6 w-6 text-blue-600" /> มาตรฐานการทำงานที่พี่จะได้รับ

ผมเลือกใช้เครื่องมือที่ทันสมัยที่สุด เพื่อให้มั่นใจว่าธุรกิจของพี่จะมีความได้เปรียบเหนือคู่แข่งในระยะยาว:

* **เน้นความเร็ว (Performance):** เว็บต้องโหลดไวระดับเสี้ยววินาที เพราะความเร็วคือปัจจัยอันดับ 1 ในการเปลี่ยนผู้เข้าชมให้เป็นลูกค้า
* **เน้นยั่งยืน (SEO Organic):** วางโครงสร้างเพื่อให้ Google ดันอันดับให้พี่เองอย่างเป็นธรรมชาติ ประหยัดงบโฆษณาในระยะยาว
* **เน้นความปลอดภัย (Trust):** มาตรฐานความปลอดภัยเดียวกับที่ผมใช้ดูแลระบบ Unlink-th รักษาความลับข้อมูลของพี่เป็นอันดับหนึ่ง
* **เน้นพาร์ทเนอร์ (Partnership):** ผมไม่ได้แค่ส่งงานแล้วจบไป แต่พร้อมดูแลและให้คำปรึกษาเพื่ออัปเกรดระบบให้โตไปพร้อมกับธุรกิจพี่

---

### <HeartHandshake className="inline-block mr-2 h-6 w-6 text-blue-600" /> สนใจให้ผมช่วยดูแลโปรเจกต์ไหมครับ?

หากพี่ต้องการพาร์ทเนอร์ที่เข้าใจทั้ง "งานระบบ" และ "การปั้นอันดับ Google" ทักมาคุยรายละเอียดหรือปรึกษาไอเดียกับผมก่อนได้ครับ

<div className="flex flex-wrap gap-4 mt-8 py-12 border-t border-dashed justify-center md:justify-start">
  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-12 h-16 font-black text-lg shadow-xl shadow-blue-600/20 transition-transform hover:scale-105" asChild>
    <Link href="/contact">ปรึกษาโปรเจกต์ฟรี</Link>
  </Button>
  <Button size="lg" variant="outline" className="rounded-full px-12 h-16 font-black text-lg border-2 transition-transform hover:scale-105" asChild>
    <Link href="/services">ดูบริการทั้งหมด</Link>
  </Button>
</div>

---

<Card className="border-none bg-slate-50 shadow-none">
  <CardContent className="flex items-start gap-4 p-8">
    <Lock className="h-6 w-6 mt-1 shrink-0 text-slate-400" />
    <div className="space-y-2">
      <span className="block font-black text-slate-900 text-lg uppercase tracking-tight">นโยบายความเป็นส่วนตัว (NDA)</span>
      <span className="block text-base font-medium leading-relaxed text-slate-500">
        เนื่องจากงานบางส่วนมีความละเอียดอ่อนสูง โดยเฉพาะการจัดการข้อมูลใน **Unlink-th** ผมขออนุญาตปกปิดรายชื่อแบรนด์หรือรายละเอียดเชิงลึกของลูกค้าบางท่าน เพื่อรักษาความลับและความปลอดภัยตามข้อตกลงครับ
      </span>
    </div>
  </CardContent>
</Card>
```
---

#### 🔍 Path: `app/services/page.mdx`
```text
/** @format */

# บริการและทางออกเพื่อธุรกิจ

ผมตั้งใจสร้างเครื่องมือดิจิทัลที่ไม่ได้มีดีแค่ความสวย แต่ต้องใช้งานได้จริงและช่วยให้ธุรกิจของพี่เติบโตอย่างยั่งยืนบนโลกออนไลน์ครับ

---

### <Sparkles className="inline-block mr-2 h-6 w-6 text-blue-600" /> เลือกทางออกที่พร้อมจะ "โต" ไปกับธุรกิจพี่

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
  
  {/* บริการที่ 1: สร้างเว็บและ SEO Organic */}
  <Card className="flex flex-col border-none bg-slate-50/50 shadow-sm transition-all hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 group rounded-[2.5rem] overflow-hidden border-2 border-transparent hover:border-blue-100">
    <CardHeader className="p-10 pb-6">
      <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center mb-8 text-white shadow-xl shadow-blue-200 transition-transform group-hover:scale-110 group-hover:rotate-3">
        <TrendingUp size={32} />
      </div>
      <CardTitle className="text-3xl font-black text-slate-900 leading-tight">สร้างเว็บ & <br/>SEO Organic</CardTitle>
      <CardDescription className="text-lg font-bold text-slate-500 mt-4">
        ปั้นเว็บไซต์ให้เป็น "เครื่องจักรช่วยหาเงิน" ด้วยเทคนิคสายออร์แกนิค
      </CardDescription>
    </CardHeader>
    <CardContent className="px-10 pb-10 flex-1">
      <div className="space-y-5 text-slate-600 font-medium">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 text-blue-600 shrink-0" size={18} />
          <span className="leading-relaxed block">เว็บโหลดไวระดับเสี้ยววินาที **(ลื่นหัวแตก)** ให้ลูกค้าประทับใจตั้งแต่ครั้งแรก</span>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 text-blue-600 shrink-0" size={18} />
          <span className="leading-relaxed block">วางโครงสร้างให้คนหาเจอเองแบบธรรมชาติ เพื่อการติดอันดับที่ยั่งยืนยาวๆ</span>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 text-blue-600 shrink-0" size={18} />
          <span className="leading-relaxed block">พาร์ทเนอร์ดูแลหลังบ้านให้พี่ใช้งานง่าย อยากปรับข้อมูลตอนไหนก็ทำได้เอง</span>
        </div>
      </div>
      <Button className="w-full mt-10 bg-blue-600 hover:bg-blue-700 h-16 rounded-2xl font-black text-lg shadow-lg shadow-blue-600/20 transition-all group-hover:gap-6" asChild>
        <Link href="/services/aem-dev">
          <span className="flex items-center gap-2">รายละเอียดการปั้นเว็บและ SEO <ArrowRight className="h-5 w-5" /></span>
        </Link>
      </Button>
    </CardContent>
  </Card>

  {/* บริการที่ 2: งานระบบและชื่อเสียงออนไลน์ */}
  <Card className="flex flex-col border-none bg-slate-900 text-white shadow-sm transition-all hover:shadow-2xl hover:shadow-slate-900/50 group rounded-[2.5rem] overflow-hidden">
    <CardHeader className="p-10 pb-6 bg-slate-950/50">
      <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-8 text-white border border-white/20 transition-transform group-hover:scale-110 group-hover:-rotate-3">
        <ShieldCheck size={32} />
      </div>
      <CardTitle className="text-3xl font-black leading-tight text-white">ดูแลระบบ & <br/>ชื่อเสียงออนไลน์</CardTitle>
      <CardDescription className="text-lg font-bold text-slate-400 mt-4">
        ผลงานชิ้นเอกที่ได้รับความไว้วางใจให้วางรากฐานเบื้องหลังความปลอดภัย
      </CardDescription>
    </CardHeader>
    <CardContent className="px-10 pb-10 flex-1">
      <div className="space-y-5 text-slate-300 font-medium">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 text-blue-400 shrink-0" size={18} />
          <span className="leading-relaxed block">จัดการข้อมูลที่เสียหาย เพื่อคืนตัวตนใหม่ที่น่าเชื่อถือบน Google อย่างถาวร</span>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 text-blue-400 shrink-0" size={18} />
          <span className="leading-relaxed block">เทคนิคดันข้อมูลเชิงบวก (ORM) สร้างความมั่นใจให้ลูกค้าที่ค้นหาชื่อธุรกิจพี่</span>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 text-blue-400 shrink-0" size={18} />
          <span className="leading-relaxed block">ดูแลความลับและระบบความปลอดภัยให้โปรเจกต์พี่ประดุจงานของผมเอง</span>
        </div>
      </div>
      <Button className="w-full mt-10 bg-white text-slate-900 hover:bg-blue-500 hover:text-white h-16 rounded-2xl font-black text-lg transition-all group-hover:gap-6" asChild>
        <Link href="/services/unlink-th">
          <span className="flex items-center gap-2">ปรึกษาเรื่องอันดับและชื่อเสียง <ArrowRight className="h-5 w-5" /></span>
        </Link>
      </Button>
    </CardContent>
  </Card>
</div>

---

### <Info className="inline-block mr-2 h-6 w-6 text-blue-600" /> ทำไมพี่ถึงวางใจให้ผมดูแลระบบ?

ผมใช้ประสบการณ์จากการปั้นระบบที่ใช้งานจริงมาช่วยวิเคราะห์และแก้ปัญหาให้ธุรกิจพี่แบบ **"เพื่อนคู่คิด"** ครับ

* **ปั้นอันดับให้ Google รัก:** ไม่ใช่แค่เว็บสวย แต่คือเว็บที่ "ติดหน้าแรก" ได้จริงด้วยเทคนิคออร์แกนิค
* **ความปลอดภัยระดับสูงสุด:** งานจัดการชื่อเสียงถูกออกแบบมาเพื่อรักษาความเป็นส่วนตัวของพี่อย่างดีที่สุด
* **ลงทุนครั้งเดียวโตยาวๆ:** เว็บไซต์ที่ดีคือสินทรัพย์ที่จะช่วยพี่ประหยัดงบการตลาดในระยะยาว

<blockquote>
  ในฐานะพาร์ทเนอร์ ผมเชื่อเสมอว่า "เว็บไซต์ที่ดีไม่ใช่แค่มีไว้โชว์ แต่ต้องมีไว้เพื่อแก้ปัญหาและสร้างการเติบโตให้ธุรกิจพี่ครับ"
</blockquote>

<div className="mt-20 text-center bg-blue-600 p-12 rounded-[3.5rem] shadow-2xl shadow-blue-600/30 relative overflow-hidden">
  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
  <div className="relative z-10">
    <h3 className="text-3xl font-black text-white mb-4">อยากให้ธุรกิจพี่ไปอยู่หน้าแรก Google ไหมครับ?</h3>
    <span className="block text-blue-100 mb-10 text-lg font-bold">ทักมาปรึกษาไอเดียหรือวางแผนอันดับกับผมก่อนได้ (ไม่มีค่าใช้จ่ายและเป็นความลับครับ)</span>
    <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 rounded-full px-16 h-16 font-black text-xl shadow-xl transition-transform hover:scale-105" asChild>
      <Link href="/contact">ปรึกษาเรื่อง SEO Organic ฟรี</Link>
    </Button>
  </div>
</div>
```
---

#### 🔍 Path: `app/services/aem-dev/page.mdx`
```text
/** @format */

# พลิกโฉมธุรกิจด้วย "หน้าร้านดิจิทัล" ที่ช่วยหาเงินให้คุณจริง

ในยุคที่ใครก็ทำเว็บได้... แต่จะมีกี่เว็บที่ **"ช่วยหาเงิน"** ให้คุณได้จริง? ผมไม่ได้แค่ทำเว็บให้เสร็จไป แต่ผมส่งมอบ **"เครื่องจักรผลิตยอดขาย"** ที่ออกแบบมาเพื่อปั้นธุรกิจของพี่โดยเฉพาะครับ

---

### <Star className="inline-block mr-2 h-6 w-6 text-blue-600" /> ทำไมเจ้าของธุรกิจถึงไว้วางใจให้ผมดูแล?

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
  <Card className="border-none bg-slate-50 shadow-sm overflow-hidden rounded-[2rem]">
    <CardContent className="pt-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-200">
          <Zap className="text-white h-5 w-5" />
        </div>
        <h4 className="font-black m-0 text-xl text-slate-900 uppercase">ความเร็วระดับเสี้ยววินาที</h4>
      </div>
      <div className="text-slate-600 leading-relaxed font-medium">
        ลูกค้าไม่รอนานเกิน 2 วินาทีแน่นอนครับ เว็บที่ผมสร้างถูกรีดประสิทธิภาพให้โหลดไว (ลื่นหัวแตก) 
        ซึ่งเป็นปัจจัยสำคัญที่ช่วยให้พี่ปิดการขายได้ง่ายขึ้น และช่วยลดค่าโฆษณาในระยะยาวได้จริงครับ
      </div>
    </CardContent>
  </Card>
  
  <Card className="border-none bg-slate-50 shadow-sm overflow-hidden rounded-[2rem]">
    <CardContent className="pt-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-purple-600 rounded-lg shadow-lg shadow-purple-200">
          <TrendingUp className="text-white h-5 w-5" />
        </div>
        <h4 className="font-black m-0 text-xl text-slate-900 uppercase">ปั้นอันดับด้วย SEO Organic</h4>
      </div>
      <div className="text-slate-600 leading-relaxed font-medium">
        ผมไม่ได้แค่ใส่คีย์เวิร์ด แต่ผมวางโครงสร้างให้ Google รักเว็บไซต์ของพี่ตั้งแต่รากฐาน 
        เพื่อให้ธุรกิจของพี่ถูกค้นหาเจอเองตามธรรมชาติ และเติบโตได้อย่างยั่งยืนโดยไม่ต้องพึ่งพาแต่ค่าแอดครับ
      </div>
    </CardContent>
  </Card>
</div>

---

### <Layers className="inline-block mr-2 h-6 w-6 text-blue-600" /> ประณีตในทุกจุด... เพื่อผลลัพธ์ที่พี่สัมผัสได้

งานของผมคือการออกแบบระบบที่คอยทำงานแทนพี่ตลอด 24 ชั่วโมง:

* **เน้นการปิดยอดขาย:** ทุกปุ่ม ทุกรูปภาพ ถูกวางในตำแหน่งที่กระตุ้นให้ลูกค้าอยาก "ทัก" หรือ "ซื้อ" มากที่สุด
* **ระบบเสถียรไม่มีล่ม:** ต่อให้คนเข้าหลักหมื่นพร้อมกัน เว็บก็ยังนิ่งด้วยเทคโนโลยีระดับ Global Standard
* **พี่จัดการข้อมูลเองได้:** พี่เป็นเจ้าของเนื้อหาทั้งหมด อยากปรับปรุงข้อมูลตอนไหนก็ทำได้ง่ายๆ ไม่ต้องรอผม
* **พาร์ทเนอร์ดูแลระยะยาว:** ผมพร้อมเป็นที่ปรึกษาเพื่ออัปเกรดระบบให้พี่ก้าวทันเทคโนโลยีเสมอ

---

### <Search className="inline-block mr-2 h-6 w-6 text-blue-600" /> เลือกลงทุนให้ตรงจุดประสงค์ธุรกิจ

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
  
  {/* Package 1: Growth */}
  <Card className="border-2 border-slate-100 shadow-sm rounded-[2.5rem] overflow-hidden flex flex-col">
    <CardHeader className="p-8 bg-slate-50/50 border-b border-slate-100">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-white rounded-2xl shadow-sm">
          <Rocket className="text-blue-600 h-6 w-6" />
        </div>
        <Badge variant="outline" className="border-blue-200 text-blue-600 font-black px-3 py-1">SME Starter</Badge>
      </div>
      <CardTitle className="text-3xl font-black text-slate-900">Growth Plan</CardTitle>
      <CardDescription className="text-base font-bold text-slate-500 mt-2">สำหรับธุรกิจที่เริ่มสร้างตัวตนออนไลน์</CardDescription>
    </CardHeader>
    <CardContent className="p-8 flex-1">
      <div className="space-y-5">
        <div className="flex items-center justify-between py-1 border-b border-slate-50">
          <span className="text-slate-600 font-bold">โครงสร้าง SEO พื้นฐาน</span>
          <CheckCircle2 className="text-green-600 h-5 w-5" />
        </div>
        <div className="flex items-center justify-between py-1 border-b border-slate-50">
          <span className="text-slate-600 font-bold">ความเร็ว PageSpeed (90+)</span>
          <Zap className="text-yellow-500 h-5 w-5" />
        </div>
        <div className="flex items-center justify-between py-1 border-b border-slate-50">
          <span className="text-slate-600 font-bold">ดีไซน์ตามอัตลักษณ์แบรนด์</span>
          <CheckCircle2 className="text-green-600 h-5 w-5" />
        </div>
        <div className="flex items-center justify-between py-1 border-b border-slate-50 opacity-40">
          <span className="text-slate-400 font-medium">ระบบวิเคราะห์ลูกค้าขั้นสูง</span>
          <XCircle className="text-slate-300 h-5 w-5" />
        </div>
        <div className="flex items-center justify-between py-1 border-b border-slate-50 opacity-40">
          <span className="text-slate-400 font-medium">กลยุทธ์ SEO เต็มรูปแบบ</span>
          <XCircle className="text-slate-300 h-5 w-5" />
        </div>
      </div>
    </CardContent>
    <CardFooter className="p-8 pt-0">
      <div className="w-full p-4 rounded-2xl bg-blue-50 text-blue-700 text-center font-black text-xs uppercase tracking-[0.2em]">
        เน้นความเร็วและตัวตนที่ชัดเจน
      </div>
    </CardFooter>
  </Card>

  {/* Package 2: Empire */}
  <Card className="border-2 border-slate-900 shadow-xl rounded-[2.5rem] overflow-hidden flex flex-col bg-slate-950 text-white">
    <CardHeader className="p-8 bg-slate-900 border-b border-slate-800">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-900/50">
          <Star className="text-white h-6 w-6" />
        </div>
        <Badge className="bg-blue-600 text-white font-black px-3 py-1 border-none">Market Leader</Badge>
      </div>
      <CardTitle className="text-3xl font-black text-white">Empire Plan</CardTitle>
      <CardDescription className="text-base font-bold text-slate-400 mt-2">ธุรกิจที่ต้องการเป็นเบอร์ 1 ในตลาด</CardDescription>
    </CardHeader>
    <CardContent className="p-8 flex-1">
      <div className="space-y-5">
        <div className="flex items-center justify-between py-1 border-b border-white/5">
          <span className="text-slate-300 font-bold">SEO Organic เต็มรูปแบบ</span>
          <CheckCircle2 className="text-blue-400 h-5 w-5" />
        </div>
        <div className="flex items-center justify-between py-1 border-b border-white/5">
          <span className="text-slate-300 font-bold">ความเร็ว 95-100 (ลื่นหัวแตก)</span>
          <Zap className="text-blue-400 h-5 w-5" />
        </div>
        <div className="flex items-center justify-between py-1 border-b border-white/5">
          <span className="text-slate-300 font-bold">ระบบวิเคราะห์พฤติกรรมลูกค้า</span>
          <CheckCircle2 className="text-blue-400 h-5 w-5" />
        </div>
        <div className="flex items-center justify-between py-1 border-b border-white/5">
          <span className="text-slate-300 font-bold">การออกแบบ Conversion ขั้นสูง</span>
          <CheckCircle2 className="text-blue-400 h-5 w-5" />
        </div>
        <div className="flex items-center justify-between py-1 border-b border-white/5">
          <span className="text-slate-300 font-bold">ดูแลระบบและอัปเดตรายเดือน</span>
          <CheckCircle2 className="text-blue-400 h-5 w-5" />
        </div>
      </div>
    </CardContent>
    <CardFooter className="p-8 pt-0">
      <div className="w-full p-4 rounded-2xl bg-blue-600 text-white text-center font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-blue-600/20">
        ยึดครองอันดับ Google อย่างยั่งยืน
      </div>
    </CardFooter>
  </Card>

</div>

---

### <HeartHandshake className="inline-block mr-2 h-6 w-6 text-blue-600" /> เริ่มต้นสร้าง "ความได้เปรียบ" ตั้งแต่วันนี้

อย่าปล่อยให้เว็บไซต์เก่าๆ หรือระบบที่ช้ามาทำลายโอกาสทางธุรกิจของพี่ครับ ทักมาปรึกษาผมเพื่อวางแผนโครงสร้างที่เหมาะสมที่สุด ข้อมูลของพี่เป็นความลับและไม่มีค่าใช้จ่ายครับ

<div className="flex flex-wrap gap-4 mt-16 bg-slate-900 p-12 rounded-[3.5rem] justify-center items-center text-center shadow-2xl relative overflow-hidden">
  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
  
  <div className="relative z-10 w-full mb-6">
    <h3 className="text-white font-black text-3xl m-0 leading-tight">พร้อมเปลี่ยนเว็บไซต์ให้เป็นสินทรัพย์หรือยังครับ?</h3>
    <p className="text-slate-400 mt-4 font-medium">เริ่มต้นวางรากฐาน SEO Organic เพื่อความยั่งยืนของธุรกิจพี่วันนี้</p>
  </div>
  
  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-16 px-12 rounded-full font-black text-lg transition-transform hover:scale-105 shadow-xl shadow-blue-600/20" asChild>
    <Link href="/contact">ปรึกษาเรื่อง SEO / เริ่มโปรเจกต์</Link>
  </Button>
  
  <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 h-16 px-12 rounded-full font-black text-lg transition-transform hover:scale-105" asChild>
    <Link href="/projects">ดูเคสที่สำเร็จมาแล้ว</Link>
  </Button>
</div>

---

> <Lock className="inline-block mr-2 h-4 w-4 text-slate-500" /> **คำแนะนำจากผม:** "เว็บไซต์ที่ดีไม่ใช่แค่มีไว้โชว์ แต่ต้องมีไว้เพื่อแก้ปัญหาและสร้างการเติบโตให้ธุรกิจพี่ครับ"
```
---

#### 🔍 Path: `app/services/unlink-th/page.mdx`
```text
/** @format */

# Unlink-th: ระบบดูแลและคืนความขาวสะอาดให้ชื่อเสียงออนไลน์

ในยุคที่การค้นหาชื่อบน Google คือการตัดสินใจครั้งสำคัญ... **"ตัวตนออนไลน์"** คือกุญแจสำคัญที่เปิดประตูสู่โอกาสทางธุรกิจใหม่ๆ ครับ

---

### <Star className="inline-block mr-2 h-6 w-6 text-blue-600" /> เบื้องหลังงานดูแลชื่อเสียงด้วยความใส่ใจ

ผมได้รับความไว้วางใจให้เป็นผู้วางโครงสร้างระบบทั้งหมดของ Unlink-th เพื่อให้มั่นใจว่าทุกเคสจะถูกจัดการด้วยมาตรฐานความปลอดภัยและความแม่นยำสูงสุดครับ

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
  <Card className="border-none bg-slate-50 shadow-sm">
    <CardContent className="pt-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-slate-900 rounded-lg shadow-lg">
          <EyeOff className="text-white h-5 w-5" />
        </div>
        <h4 className="font-black m-0 text-xl text-slate-900">จัดการข้อมูลที่เสียหาย</h4>
      </div>
      ดำเนินการประสานงานและจัดการกับข้อมูลที่ส่งผลลบต่อภาพลักษณ์ เพื่อให้เรื่องราวเหล่านั้นลดบทบาทลงจากหน้าค้นหาอย่างเป็นระบบและยั่งยืนครับ
    </CardContent>
  </Card>
  
  <Card className="border-none bg-slate-50 shadow-sm">
    <CardContent className="pt-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-600 rounded-lg shadow-lg">
          <TrendingUp className="text-white h-5 w-5" />
        </div>
        <h4 className="font-black m-0 text-xl text-slate-900">ปั้นตัวตนใหม่ด้วย SEO Organic</h4>
      </div>
      ผมใช้วิธีวางระบบข้อมูลใหม่เพื่อให้ผลงานและความสำเร็จของพี่โดดเด่นขึ้นมาแทนที่ เป็นการสร้างความน่าเชื่อถือที่ยั่งยืนด้วยเทคนิคที่ Google รักครับ
    </CardContent>
  </Card>
</div>

---

### <ShieldCheck className="inline-block mr-2 h-6 w-6 text-blue-600" /> บทพิสูจน์: มาตรฐานความแม่นยำระดับ 100%

โครงสร้างระบบที่ผมวางไว้ให้ Unlink-th ได้รับการยืนยันด้วยคะแนนความถูกต้องและประสิทธิภาพเต็ม 100 เช่นเดียวกับทุกโปรเจกต์ที่ผมดูแลภายใต้ **AEM DEV WEB** ครับ

![มาตรฐานความแม่นยำ 100%](/images/case/case100%.webp)

---

### <HeartHandshake className="inline-block mr-2 h-6 w-6 text-blue-600" /> ถึงเวลาคืนความมั่นใจให้กับตัวธุรกิจของพี่

อย่าปล่อยให้เรื่องราวในอดีตมาเป็นกำแพงขวางกั้นอนาคต ให้ผมเป็นผู้ช่วยดูแลภาพลักษณ์ดิจิทัลของพี่ให้ใสสะอาดและพร้อมรับโอกาสใหม่ๆ ตั้งแต่วันนี้ครับ

<div className="flex flex-wrap gap-4 mt-12 bg-slate-900 p-10 rounded-[3rem] justify-center items-center text-center shadow-2xl">
  <div className="w-full mb-4">
    <h3 className="text-white font-black text-2xl m-0 leading-tight">ปรึกษาเรื่องอันดับและชื่อเสียง <br className="sm:hidden" /> (ข้อมูลของพี่เป็นความลับสูงสุด)</h3>
  </div>
  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200 h-16 px-12 rounded-full font-black text-lg transition-transform hover:scale-105" asChild>
    <Link href="/contact">ทักมาคุยรายละเอียดกับผมโดยตรง</Link>
  </Button>
</div>

---

> <Lock className="inline-block mr-2 h-4 w-4 text-slate-500" /> **ความตั้งใจจากผม:** "ผมเชื่อว่าทุกคนมีสิทธิ์ที่จะมีภาพลักษณ์ที่ดี และผมพร้อมใช้เทคนิคที่มีช่วยให้สิ่งนั้นเกิดขึ้นจริงกับธุรกิจพี่ครับ"
```
---

#### 🔍 Path: `app/blog/[slug]/page.tsx`
```typescript
/** @format */

import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  User,
  Search,
  // ShieldCheck, // ❌ ตัดออกเนื่องจากไม่ได้ใช้ในหน้านี้
  // HeartHandshake, // ❌ ตัดออกเนื่องจากไม่ได้ใช้ในหน้านี้
} from "lucide-react";
import Link from "next/link";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

/**
 * Metadata Generation (SEO)
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return {};
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);
  return {
    title: `${data.title} | นายเอ็มซ่ามากส์`,
    description: data.description,
  };
}

/**
 * BlogPostPage Component
 */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  // 1. ดึงข้อมูล Metadata ผ่าน gray-matter
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  // 2. Dynamic Import ตัวเนื้อหา MDX
  const { default: PostContent } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <article className="bg-white py-12 md:py-20">
      <Container className="max-w-4xl">
        {/* --- Navigation --- */}
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="mb-10 font-bold transition-colors hover:bg-blue-50 hover:text-blue-600"
        >
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> กลับสู่คลังความรู้
          </Link>
        </Button>

        {/* --- Header Section --- */}
        <header className="mb-12 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 shadow-sm">
            <Search className="h-3.5 w-3.5" /> Organic Search Strategy
          </div>
          <h1 className="text-4xl font-black leading-tight text-slate-900 md:text-6xl lg:leading-[1.1]">
            {data.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm font-black uppercase tracking-widest text-slate-400">
            <div className="flex items-center gap-2 border-slate-200 pr-0 md:border-r md:pr-6">
              <Calendar size={18} className="text-blue-500" />
              <span className="text-slate-600">{data.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} className="text-blue-500" />
              <span className="text-slate-600">
                {data.author || "Alongkorl Yomkerd"}
              </span>
            </div>
          </div>
        </header>

        {/* --- Article Content Section --- */}
        <div
          className="prose prose-slate max-w-none lg:prose-xl 
          prose-headings:scroll-m-20 prose-headings:font-black prose-headings:text-slate-900 
          prose-p:font-medium prose-p:leading-8 prose-p:text-slate-600
          prose-a:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800
          prose-blockquote:rounded-r-2xl prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50/50
          prose-img:rounded-[2rem] prose-img:border-2 prose-img:border-slate-100 shadow-none"
        >
          <PostContent />
        </div>

        {/* --- CTA Section --- */}
        <div className="relative mt-24 overflow-hidden rounded-[3.5rem] bg-slate-950 p-10 text-white shadow-2xl md:p-16 border border-white/5">
          <div className="absolute right-0 top-0 -mr-32 -mt-32 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="relative z-10 text-center md:text-left">
            <h3 className="mb-6 text-3xl font-black md:text-5xl">
              อยากเปลี่ยนเว็บไซต์ให้เป็น <br className="hidden md:block" />{" "}
              "สินทรัพย์" ที่ช่วยหาเงินไหมครับ?
            </h3>
            <Button
              className="h-16 rounded-full bg-blue-600 px-12 text-xl font-black shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
              asChild
            >
              <Link href="/contact">ปรึกษาเรื่อง SEO ฟรี</Link>
            </Button>
          </div>
        </div>
      </Container>
    </article>
  );
}

export async function generateStaticParams() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(".mdx", ""),
    }));
}
```
---

#### 🔍 Path: `app/blog/page.tsx`
```typescript
/** @format */

// ✅ ต้องเพิ่มบรรทัด Import นี้เข้ามาครับ
import { getAllPosts } from "@/lib/blog"; 
import Container from "@/components/layout/Container";
import BlogCard from "@/components/shared/BlogCard";
import { Globe, BookOpen, Sparkles } from "lucide-react";

/**
 * Metadata สำหรับหน้ารายการบล็อก (SEO)
 */
export const metadata = {
  title: "คลังความรู้เรื่องระบบ และ SEO Organic | นายเอ็มซ่ามากส์",
  description:
    "แบ่งปันประสบการณ์การปั้นระบบและกลยุทธ์ SEO Organic เพื่อช่วยให้ธุรกิจ SME เติบโตได้อย่างยั่งยืนบนโลกออนไลน์",
};

export default function BlogListPage() {
  /**
   * ดึงข้อมูลบทความทั้งหมด
   * ฟังก์ชันนี้ถูกเรียกมาจาก @/lib/blog.ts
   */
  const posts = getAllPosts();

  return (
    <Container className="py-16 md:py-28">
      {/* --- Header Section --- */}
      <div className="mb-20 flex flex-col items-center space-y-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 shadow-sm">
          <Sparkles className="h-3.5 w-3.5" /> Organic Search Insights
        </div>

        <h1 className="text-4xl font-black leading-[1.1] text-slate-900 md:text-6xl lg:text-7xl">
          คลังความรู้เรื่องระบบ <br className="hidden sm:block" />
          และ <span className="text-blue-600">SEO Organic</span>
        </h1>

        <p className="max-w-3xl text-lg font-medium leading-relaxed text-slate-500 sm:text-xl md:leading-9">
          ผมหยิบเอาประสบการณ์จากการปั้นระบบและการงัดข้อกับอัลกอริทึม Google
          <br className="hidden lg:block" />
          มากลั่นเป็นบทความที่ช่วยให้ธุรกิจของพี่เติบโตได้อย่างยั่งยืนโดยไม่ต้องพึ่งพาแต่ค่าแอด
        </p>
      </div>

      {/* --- Blog Grid Section --- */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              description={post.description}
              image={post.image}
              date={post.date}
              author={post.author}
              slug={post.slug}
            />
          ))}
        </div>
      ) : (
        <div className="group border-2 border-dashed border-slate-200 bg-slate-50/50 py-32 text-center transition-all hover:border-blue-200 rounded-[3.5rem]">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-xl shadow-slate-200/50 transition-transform group-hover:scale-110">
            <BookOpen className="h-10 w-10 text-slate-300" />
          </div>
          <h3 className="text-lg font-black uppercase tracking-[0.3em] text-slate-400">
            คลังวิชากำลังถูกอัปเดตเร็วๆ นี้
          </h3>
          <p className="mt-2 font-medium text-slate-400">
            ผมกำลังเตรียมเนื้อหาพรีเมียมไว้ให้พี่อยู่ครับ
          </p>
        </div>
      )}

      {/* --- Bottom Footer Section --- */}
      <div className="mt-32 border-t border-slate-100 pt-16 text-center">
        <div className="flex flex-col items-center justify-center gap-4 text-sm font-black uppercase tracking-[0.2em] text-slate-400 sm:flex-row">
          <Globe className="h-4 w-4 text-blue-500" />
          <span>มุ่งสร้าง Digital Asset ที่ยั่งยืนให้กับ SME ไทย</span>
        </div>
      </div>
    </Container>
  );
}
```
---

#### 🔍 Path: `components/profile/Schema.tsx`
```typescript
/** @format */

/**
 * Schema Component (JSON-LD) - ฉบับนายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 * วัตถุประสงค์: สร้าง Technical Authority บน Google Search
 * ปรับปรุง: ชูจุดเด่นเรื่อง SEO Organic และการเป็นพาร์ทเนอร์ดูแลระบบระยะยาว
 * นำเสนอในฐานะ "ผู้อยู่เบื้องหลัง" ความสำเร็จของ Unlink-th เพื่อสร้างความเชื่อมั่นสูงสุด
 */
export default function Schema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://me.aemdevweb.com/#person",
        "name": "Alongkorl Yomkerd",
        "alternateName": [
          "นายเอ็มซ่ามากส์",
          "พี่เอ็ม AEM",
          "เอ็มซ่ามากส์",
          "Alongkorl (นายเอ็มซ่ามากส์)"
        ],
        "url": "https://me.aemdevweb.com",
        "image": {
          "@type": "ImageObject",
          "url": "https://me.aemdevweb.com/images/profile-photo.jpg",
          "width": "800",
          "height": "800"
        },
        "jobTitle": "ที่ปรึกษาดูแลระบบเว็บไซต์และผู้เชี่ยวชาญ SEO Organic",
        "description": "ที่ปรึกษาและผู้อยู่เบื้องหลังการวางระบบเว็บไซต์ที่เน้นผลลัพธ์ทางธุรกิจ ผู้สร้างและดูแลระบบทั้งหมดของ Unlink-th ให้ปลอดภัยและทรงพลัง มุ่งเน้นการดูแล SEO Organic (สายออร์แกนิค) เพื่อช่วยให้ธุรกิจ SME ติดหน้าแรก Google ได้อย่างยั่งยืนโดยไม่พึ่งพาแค่ค่าโฆษณา",
        "gender": "Male",
        "email": "me@aemdevweb.com",
        "nationality": {
          "@type": "Country",
          "name": "Thailand"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kamphaeng Phet",
          "addressCountry": "TH"
        },
        "sameAs": [
          "https://www.aemdevweb.com",
          "https://www.unlink-th.com",
          "https://www.facebook.com/aemdevweb",
          "https://lin.ee/dDHISbG",
          "https://github.com/jiggoo0"
        ],
        "worksFor": { "@id": "https://www.aemdevweb.com/#organization" },
        "knowsAbout": [
          "การปั้นอันดับด้วย SEO Organic (สายออร์แกนิค)",
          "การดูแลระบบเว็บไซต์ให้โหลดไวระดับเสี้ยววินาที (ลื่นหัวแตก)",
          "กลยุทธ์การปั้นยอดขายด้วย Organic Search",
          "การจัดการและปกป้องชื่อเสียงออนไลน์ (Digital Reputation Management)",
          "การออกแบบเว็บไซต์ที่เน้นการปิดการขาย (Conversion Rate Optimization)",
          "การวางโครงสร้างระบบด้วย Next.js และ React"
        ],
        "knowsLanguage": ["Thai", "English"]
      },
      {
        "@type": "Organization",
        "@id": "https://www.aemdevweb.com/#organization",
        "name": "AemDevWeb",
        "url": "https://www.aemdevweb.com",
        "logo": "https://me.aemdevweb.com/images/service/aemdevweb.webp",
        "description": "สตูดิโอผู้ออกแบบเว็บไซต์และพาร์ทเนอร์วางกลยุทธ์ SEO Organic เพื่อการเติบโตที่ยั่งยืนสำหรับ SME ไทย",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "url": "https://me.aemdevweb.com/contact"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
```
---

#### 🔍 Path: `mdx-components.tsx`
```typescript
/** @format */
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

// --- [UI & Icons Components] ---
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
import ProjectCard from "@/components/shared/ProjectCard";
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
  MapPin,    // ✅ สำหรับปักหมุดทำเลทอง
  PiggyBank, // ✅ สำหรับการลงทุนและประหยัดงบ
  Users,     // ✅ สำหรับกลุ่มเป้าหมายและ SME
} from "lucide-react";

interface MdxImageProps {
  src?: string;
  alt?: string;
  [key: string]: unknown;
}

/**
 * useMDXComponents - ฉบับพาร์ทเนอร์ดูแลระบบและ SEO Organic
 * ปรับปรุง: ลงทะเบียนคอมโพเนนต์และไอคอนครบวงจร เพื่อป้องกัน ReferenceError
 * และแก้ไข Hydration Error ด้วยการใช้ span block แทน p สำหรับเนื้อหา MDX
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // 1. Typography Standard - เน้นความพรีเมียมสไตล์ Architect
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

    // ✅ ป้องกัน Hydration Error: ใช้ <span> display: block แทน <p> 
    // เพื่อให้สามารถวาง Component บล็อกภายใน MDX ได้โดยไม่ผิดกฎ HTML
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

    // 2. Optimized Image Management - รองรับ Image Optimization
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

    // 3. Navigation & Registry
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

    // 4. Custom Components & UI Registry
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    Button,
    Badge,
    ProjectCard,

    // 5. Icons Mapping - ลงทะเบียนให้ MDX เรียกใช้งานได้โดยตรงตามชื่อคอมโพเนนต์
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
  };
}
```
---

#### 🔍 Path: `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules", ".next"]
}
```
---

#### 🔍 Path: `package.json`
```json
{
  "name": "alongkorl-yomkert",
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
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
    "next": "15.5.7",
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
---

#### 🔍 Path: `next.config.ts`
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
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
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
---

#### 🔍 Path: `components.json`
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}
```
---

#### 🔍 Path: `lib/blog.ts`
```typescript
/** @format */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 1. กำหนด Path ไปที่ content/blog โดยตรง
const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
  content: string;
}

/**
 * getAllPosts - ดึงข้อมูลบทความทั้งหมดใน content/blog
 */
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const fileNames = fs.readdirSync(BLOG_DIR);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const filePath = path.join(BLOG_DIR, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");

      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        title: data.title || "Untitled Post",
        description: data.description || "",
        date: data.date || "",
        author: data.author || "Alongkorl Yomkerd",
        image: data.image || "/images/blog/og-image.png",
        tags: data.tags || [],
      } as BlogPost;
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * getPostBySlug - ดึงข้อมูลบทความรายชิ้นตาม Slug
 * ✅ แก้ไข Lint Warning: 'error' is defined but never used
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
      image: data.image,
      tags: data.tags,
    } as BlogPost;
  } catch { 
    // ✅ ลบ (error) ออก เพราะเราแค่ต้องการส่งค่า null กลับเมื่อเกิดปัญหา
    return null;
  }
}
```
---

#### 🔍 Path: `.env`
```text
```
---

## 📝 Summary
- Full architecture and code context compiled
- AEM ingestion ready
- AI context ready
- Documentation portal ready
- Security & privacy focused
- Production environment compliant

_Report generated by AEM DevWeb Platform Automation System_
_Domain: 
