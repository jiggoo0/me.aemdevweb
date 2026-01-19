---
title: "Project Context Summary"
description: "Full context, architecture and code analysis for AEM DevWeb Platform"
author: "Internal Automation Bot"
site: "https://me.aemdevweb.com"
domain: "me.aemdevweb.com"
projectName: "AEM DevWeb Platform"
environment: "production"
contentType: "documentation"
buildId: "b0c172fa"
generatedAt: "2026-01-19T14:36:58Z"
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
> **Build:** b0c172fa
> **Type:** Full System Context | AI Ready | AEM Ready | Security Focus

_Generated on: **2026-01-19 21:36:58**_

## 🔴 1. Project Health & Deployment Readiness
✅ **READY FOR DEPLOY** — Production standards satisfied.

### 📍 Production Route Map
```text
```text
Route (app)                                 Size  First Load JS
┌ ○ /                                      192 B         110 kB
├ ○ /_not-found                            994 B         103 kB
├ ○ /about                                 192 B         110 kB
├ ○ /blog                                  173 B         110 kB
├ ● /blog/[slug]                           192 B         110 kB
├   ├ /blog/first-post
├   └ /blog/technical-seo-tips
├ ○ /contact                               192 B         110 kB
├ ○ /projects                              192 B         110 kB
├ ○ /robots.txt                            125 B         102 kB
├ ○ /services                              192 B         110 kB
├ ○ /services/aem-dev                      192 B         110 kB
├ ○ /services/unlink-th                    192 B         110 kB
└ ○ /sitemap.xml                           125 B         102 kB
+ First Load JS shared by all             102 kB
  ├ chunks/7f97a788-70f696b0503e8e6b.js  54.2 kB
  ├ chunks/919-64083ca842c756c7.js       45.5 kB
  └ other shared chunks (total)          1.92 kB
○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses generateStaticParams)
```
```

## 📊 2. File Statistics by Extension
```text
     18 tsx
      8 mdx
      7 webp
      6 svg
      5 sh
      4 ts
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
      📄 case100%.webp
      📄 case99%.webp
    📄 grid.svg
  📄 next.svg
  📄 vercel.svg
  📄 window.svg
📂 content/
  📂 blog/
    📄 technical-seo-tips.mdx
    📄 first-post.mdx
```

## 📄 4. Critical Code Analysis & Environment Context
#### 🔍 Path: `pre-deploy-report.md`
```markdown
# 🚀 Pre-deploy Inspection Report
Generated at: 2026-01-19 21:32:59
Branch: main

## 🔐 1. Environment Check
✅ Status: .env file exists and verified.
## 🛠️  2. Auto-Fix Procedure
✅ Status: Auto-fix completed or no issues found.
## 🧹 3. Code Linting (ESLint)
✅ Status: Linting passed.
## ⌨️ 4. Type Safety Check
✅ Status: TypeScript verified.
## 🏗️  5. Production Build Test
✅ Status: Build successfully optimized.
### 📊 Route Statistics & Bundle Size
```text
Route (app)                                 Size  First Load JS
┌ ○ /                                      192 B         110 kB
├ ○ /_not-found                            994 B         103 kB
├ ○ /about                                 192 B         110 kB
├ ○ /blog                                  173 B         110 kB
├ ● /blog/[slug]                           192 B         110 kB
├   ├ /blog/first-post
├   └ /blog/technical-seo-tips
├ ○ /contact                               192 B         110 kB
├ ○ /projects                              192 B         110 kB
├ ○ /robots.txt                            125 B         102 kB
├ ○ /services                              192 B         110 kB
├ ○ /services/aem-dev                      192 B         110 kB
├ ○ /services/unlink-th                    192 B         110 kB
└ ○ /sitemap.xml                           125 B         102 kB
+ First Load JS shared by all             102 kB
  ├ chunks/7f97a788-70f696b0503e8e6b.js  54.2 kB
  ├ chunks/919-64083ca842c756c7.js       45.5 kB
  └ other shared chunks (total)          1.92 kB


○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses generateStaticParams)

```

---
## 🏆 Summary Result
### ✅ READY FOR DEPLOY
All protocols verified: Lint passed, Types safe, and Build successful. Deployment is highly recommended.
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

// ✅ นำ Container ออกจาก Import เพื่อแก้ปัญหา 'Container' is defined but never used

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Alongkorl Yomkerd (เอ็มซ่ามากส์) | Web Artisan & Solutions",
    template: "%s | Alongkorl Yomkerd",
  },
  description:
    "พื้นที่รวบรวมงานฝีมือดิจิทัลและบันทึกการเดินทางของ อลงกรณ์ ยมเกิด นักพัฒนาที่หลงรักในการสร้างเว็บไซต์ที่รวดเร็วและตอบโจทย์ธุรกิจจริง",
  keywords: [
    "AEM Dev Web",
    "Unlink-th",
    "รับทำเว็บไซต์",
    "Digital Reputation",
    "Alongkorl Yomkerd",
  ],
  authors: [{ name: "Alongkorl Yomkerd", url: "https://me.aemdevweb.com" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "min-h-screen bg-background font-sans antialiased selection:bg-blue-100/50"
        )}
      >
        {/* ✅ Schema JSON-LD สำหรับ Technical SEO */}
        <Schema />

        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {/* ✅ คืนอิสระให้แต่ละ Page จัด Layout เองได้เต็มที่ 
              ทำให้หน้า Services หรือ Project สามารถใช้ Grid Full-width ได้
            */}
            {children}
          </main>
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
import Hero from "@/components/profile/Hero"
import ServiceCard from "@/components/shared/ServiceCard"
import Schema from "@/components/profile/Schema"
import Container from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      title: "AEM Dev Web",
      description: "บริการรับทำเว็บไซต์สมัยใหม่สำหรับ SMEs ด้วยเทคโนโลยี Next.js 15 ที่รวดเร็ว ปลอดภัย และรองรับ SEO 100%",
      image: "/images/service/aemdevweb.webp",
      link: "/services/aem-dev", // เปลี่ยนจาก href เป็น link เพื่อให้ตรงกับ ServiceCard
    },
    {
      title: "Unlink-th",
      description: "บริการจัดการลบประวัติและข้อมูลออนไลน์ที่เสียหาย เพื่อปกป้องชื่อเสียงและภาพลักษณ์ดิจิทัลของคุณอย่างเป็นความลับ",
      image: "/images/service/Unlink-th.webp",
      link: "/services/unlink-th",
      isDark: true, // เพิ่มมิติให้การ์ด Unlink ดูพรีเมียมและน่าเกรงขาม
    },
  ]

  return (
    <>
      {/* 🛠️ SEO Schema: ช่วยให้ Google เข้าใจตัวตนของคุณอลงกรณ์และแบรนด์ */}
      <Schema />

      <div className="flex flex-col gap-24 pb-20">
        {/* 1. Hero Section: First Impression */}
        <Hero />

        <Container>
          {/* 2. Services Section: ธุรกิจหลัก */}
          <section id="services" className="scroll-m-20">
            <div className="flex flex-col items-center text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" /> Our Services
              </div>
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl text-slate-900">
                โซลูชันเพื่อธุรกิจยุคดิจิทัล
              </h2>
              <p className="max-w-[700px] text-muted-foreground text-lg font-medium">
                เรามุ่งมั่นที่จะส่งมอบคุณค่าผ่านเครื่องมือดิจิทัลที่ทันสมัยที่สุด เพื่อความสำเร็จของธุรกิจคุณ
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </section>

          {/* 3. Dynamic Blog Preview (Placeholder) */}
          <section className="mt-24 border-t pt-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl text-slate-900 uppercase">
                  Latest Insights
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl font-medium">
                  บทความแบ่งปันความรู้ด้าน Web Dev และเทคนิคการจัดการชื่อเสียงออนไลน์
                </p>
              </div>
              <Button variant="outline" className="rounded-full font-bold group" asChild>
                <Link href="/blog">
                  เข้าสู่บล็อกทั้งหมด
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            {/* จุดนี้สามารถดึง getSortedPostsData มา Map แสดงผลได้ในภายหลัง */}
            <div className="bg-slate-50 rounded-[2rem] p-12 text-center border-2 border-dashed border-slate-200">
               <p className="text-slate-400 font-bold uppercase tracking-widest">
                 Coming Soon: New Blog Posts in Next.js 15
               </p>
            </div>
          </section>
        </Container>

        {/* 4. Call to Action: ปิดการขาย */}
        <Container>
          <section className="rounded-[3rem] bg-slate-900 px-6 py-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-10 pointer-events-none" />
            
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              พร้อมที่จะสร้าง <br />
              โปรเจกต์ที่ยอดเยี่ยมหรือยัง?
            </h2>
            <p className="mb-10 text-slate-400 max-w-xl mx-auto text-lg font-medium">
              ไม่ว่าคุณจะต้องการเว็บไซต์ใหม่ หรือปรึกษาเรื่องการจัดการข้อมูลออนไลน์ 
              เราพร้อมให้คำแนะนำเชิงลึกที่เป็นความลับและเห็นผลจริง
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 h-14 font-bold text-lg" asChild>
                <Link href="/contact">ติดต่องาน / ปรึกษาฟรี</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full px-8 h-14 font-bold text-lg" asChild>
                <Link href="/projects">ดูพอร์ตโฟลิโอ</Link>
              </Button>
            </div>
          </section>
        </Container>
      </div>
    </>
  )
}
```
---

#### 🔍 Path: `app/about/page.mdx`
```text
import Hero from "@/components/profile/Hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code2, Globe, ShieldCheck, Cpu, Laptop, Coffee } from "lucide-react"
import Link from "next/link"

<Hero />

---

# 👋 ทำความรู้จักกับผม

สวัสดีครับผม **อลงกรณ์ ยมเกิด (Alongkorl Yomkerd)** หรือที่หลายคนรู้จักในนาม **"นายเอ็มซ่ามากส์"** ผมเป็น Full-stack Developer จากจังหวัดกำแพงเพชร ประเทศไทย ที่มีความหลงใหลในการใช้เทคโนโลยีเพื่อขับเคลื่อนธุรกิจ

---

### 🚀 วิสัยทัศน์และการทำงาน

ผมเชื่อว่าเทคโนโลยีที่ดีต้อง "เข้าถึงได้" และ "แก้ปัญหาได้จริง" นั่นคือเหตุผลที่ผมก่อตั้งโปรเจกต์หลัก 2 ส่วน:

1.  **AEM Dev Web:** มุ่งเน้นการสร้างเว็บไซต์ที่เร็ว แรง และเป็นมิตรต่อ SEO เพื่อให้ SME ไทยแข่งขันได้ในระดับสากล
2.  **Unlink-th:** บริการด้านความปลอดภัยและชื่อเสียงออนไลน์ เพื่อปกป้องความเป็นส่วนตัวของบุคคลในยุคดิจิทัล

---

### 🛠 ทักษะและความเชี่ยวชาญ (Technical Skills)

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
  <div className="flex items-center gap-2 p-3 border rounded-lg bg-slate-50/50">
    <Code2 className="h-5 w-5 text-blue-600" />
    <span className="text-sm font-medium">Next.js 15 / React 19</span>
  </div>
  <div className="flex items-center gap-2 p-3 border rounded-lg bg-slate-50/50">
    <Globe className="h-5 w-5 text-sky-600" />
    <span className="text-sm font-medium">TypeScript / Node.js</span>
  </div>
  <div className="flex items-center gap-2 p-3 border rounded-lg bg-slate-50/50">
    <Cpu className="h-5 w-5 text-purple-600" />
    <span className="text-sm font-medium">PostgreSQL / Supabase</span>
  </div>
  <div className="flex items-center gap-2 p-3 border rounded-lg bg-slate-50/50">
    <Laptop className="h-5 w-5 text-orange-600" />
    <span className="text-sm font-medium">Tailwind CSS / Shadcn UI</span>
  </div>
  <div className="flex items-center gap-2 p-3 border rounded-lg bg-slate-50/50">
    <ShieldCheck className="h-5 w-5 text-green-600" />
    <span className="text-sm font-medium">Online Reputation Mgmt.</span>
  </div>
  <div className="flex items-center gap-2 p-3 border rounded-lg bg-slate-50/50">
    <Coffee className="h-5 w-5 text-brown-600" />
    <span className="text-sm font-medium">Problem Solving</span>
  </div>
</div>

---

### 🎓 ประวัติและประสบการณ์

จากการทำงานในสายงานพัฒนาเว็บไซต์มาอย่างต่อเนื่อง ผมได้เห็นความสำคัญของการทำ **Clean Code** และ **Performance Tuning** ซึ่งผมนำมาปรับใช้ในทุกโปรเจกต์ เพื่อให้แน่ใจว่าลูกค้าจะได้รับสิ่งที่ดีที่สุด

> "เป้าหมายของผมไม่ใช่แค่การเขียนโค้ด แต่คือการสร้างโซลูชันที่ช่วยให้ชีวิตและธุรกิจของผู้คนดีขึ้น"

---

### 📫 ร่วมงานกับผม

หากคุณกำลังมองหาพาร์ทเนอร์ที่จะช่วยดูแลโปรเจกต์ดิจิทัลของคุณ หรือต้องการคำปรึกษาด้านเทคนิค ผมพร้อมยินดีให้คำปรึกษาครับ

<div className="flex flex-wrap gap-4 mt-8">
  <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
    <Link href="/contact">ติดต่องาน</Link>
  </Button>
  <Button size="lg" variant="outline" asChild>
    <Link href="/projects">ดูผลงานที่ผ่านมา</Link>
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
import { MessageSquare, Send, Clock } from "lucide-react"
import Link from "next/link"

# ✉️ ติดต่อเรา (Contact Us)

ไม่ว่าคุณจะมีไอเดียสำหรับโปรเจกต์ใหม่ หรือต้องการคำปรึกษาเรื่องการจัดการข้อมูลออนไลน์ เราพร้อมรับฟังและให้คำแนะนำอย่างเป็นมืออาชีพ

---

<ContactInfo />

---

### 📝 ส่งข้อความถึงเรา

หากคุณต้องการให้เราติดต่อกลับ หรือต้องการส่งรายละเอียดโปรเจกต์เบื้องต้น สามารถกรอกข้อมูลด้านล่างนี้ได้เลยครับ

<Card className="my-8 border-2 shadow-sm">
  <CardContent className="pt-6 space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">ชื่อ-นามสกุล</label>
        <Input placeholder="ระบุชื่อของคุณ" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">อีเมล / ช่องทางติดต่อ</label>
        <Input placeholder="example@email.com หรือ LINE ID" />
      </div>
    </div>
    <div className="space-y-2">
      <label className="text-sm font-medium">หัวข้อที่ต้องการปรึกษา</label>
      <Input placeholder="เช่น สนใจทำเว็บ SME หรือ ปรึกษาลบประวัติออนไลน์" />
    </div>
    <div className="space-y-2">
      <label className="text-sm font-medium">รายละเอียดเพิ่มเติม</label>
      <textarea 
        className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="อธิบายรายละเอียดเบื้องต้น เพื่อให้เราเตรียมข้อมูลได้แม่นยำขึ้น"
      />
    </div>
    <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">
      <Send className="mr-2 h-4 w-4" /> ส่งข้อมูลติดต่อ
    </Button>
  </CardContent>
</Card>

---

### 🕒 เวลาทำการและการตอบกลับ

เราให้ความสำคัญกับทุกการติดต่อ และมุ่งมั่นที่จะตอบกลับภายในเวลาที่รวดเร็วที่สุด

* **เวลาทำการ:** จันทร์ - ศุกร์ (09:00 - 18:00 น.)
* **การตอบกลับ:** โดยปกติเราจะติดต่อกลับภายใน **24 ชั่วโมง** ในวันทำการ
* **กรณีเร่งด่วน:** แนะนำให้ติดต่อผ่านช่องทาง **LINE Official** เพื่อความรวดเร็วสูงสุด

---

<div className="flex flex-col md:flex-row items-center justify-center gap-6 py-10">
  <div className="flex items-center gap-2 text-muted-foreground">
    <Clock size={20} className="text-blue-500" />
    <span>พร้อมให้คำปรึกษาฟรี ไม่มีค่าใช้จ่ายเบื้องต้น</span>
  </div>
</div>
```
---

#### 🔍 Path: `app/projects/page.mdx`
```text
# 📂 พอร์ตโฟลิโอและผลงาน (Projects)

รวบรวมตัวอย่างผลงานการพัฒนาเว็บไซต์และโซลูชันดิจิทัลภายใต้การดูแลของ **Alongkorl (นายเอ็มซ่ามากส์)** โดยมุ่งเน้นที่ความเร็ว ความสวยงาม และประสิทธิภาพสูงสุดเพื่อธุรกิจของคุณ

---

### ผลงานโดดเด่น (Featured Projects)

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
  <ProjectCard 
    title="AEM Dev Web Portal"
    description="ระบบศูนย์รวมบริการสำหรับ SMEs ที่รองรับการจัดการ Template และ Marketplace แบบครบวงจร"
    image="/images/service/aemdevweb.webp"
    tags={["Next.js 15", "Shadcn UI", "PostgreSQL"]}
    isFeatured={true}
  />
  
  <ProjectCard 
    title="Unlink-th Dashboard"
    description="แพลตฟอร์มติดตามสถานะการจัดการข้อมูลและลบประวัติออนไลน์สำหรับลูกค้าแบบ Real-time"
    image="/images/service/Unlink-th.webp"
    tags={["React 19", "Tailwind v4", "Supabase"]}
  />

  <ProjectCard 
    title="SecureDocs Master"
    description="ระบบจัดการและตรวจสอบความถูกต้องของเอกสารออนไลน์ พร้อมระบบ Workflow อัตโนมัติ"
    image="/images/activity.webp"
    tags={["TypeScript", "Framer Motion", "Next.js"]}
  />
</div>

---

### 🛠 เทคโนโลยีที่เลือกใช้ (Tech Stack)

เราเลือกใช้เทคโนโลยีระดับ Modern Stack เพื่อให้มั่นใจว่าโปรเจกต์จะมีความเสถียรและรองรับการขยายตัวในอนาคต:

* **Frontend:** Next.js 15 (App Router), React 19, Tailwind CSS v4
* **UI Components:** shadcn/ui, Radix UI, Lucide Icons
* **Performance:** MDX Rust Compiler, AVIF Image Optimization, Edge Runtime
* **Backend & Database:** Supabase, Prisma ORM, PostgreSQL

---

### 💡 สนใจจ้างงานหรือสอบถามเพิ่มเติม?

หากคุณประทับใจในผลงานและต้องการพาร์ทเนอร์ที่เข้าใจทั้งด้านเทคนิคและการทำ SEO เชิงลึก

<div className="flex flex-wrap gap-4 mt-8">
  <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
    <a href="/contact">คุยรายละเอียดโปรเจกต์</a>
  </Button>
  <Button size="lg" variant="outline" asChild>
    <a href="/services">ดูบริการทั้งหมด</a>
  </Button>
</div>

---

> **หมายเหตุ:** ข้อมูลผลงานบางส่วนอาจมีการปกปิดชื่อแบรนด์หรือรายละเอียดเชิงลึกตามข้อตกลงความเป็นส่วนตัว (NDA) กับลูกค้า โดยเฉพาะในส่วนของระบบจัดการข้อมูล **Unlink-th**
```
---

#### 🔍 Path: `app/services/page.mdx`
```text
/** @format */

# 🛠 บริการของเรา (Solutions)

เรามุ่งมั่นสร้างเครื่องมือดิจิทัลที่ประณีตและทรงพลัง เพื่อช่วยให้ธุรกิจของคุณเติบโตอย่างมั่นคงและสง่างามบนโลกออนไลน์

---

### เลือกโซลูชันที่ตอบโจทย์ความสำเร็จของคุณ

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
  
  {/* บริการที่ 1: AEM Dev Web */}
  <Card className="flex flex-col border-2 transition-all hover:border-blue-500 hover:shadow-xl group rounded-[2rem] overflow-hidden">
    <CardHeader className="bg-slate-50/50 pb-8">
      <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-200">
        <Layout size={30} />
      </div>
      <CardTitle className="text-3xl font-black text-slate-900">AEM Dev Web</CardTitle>
      <CardDescription className="text-lg font-medium text-slate-500">
        สร้างสรรค์เว็บไซต์ประสิทธิภาพสูงเพื่อยอดขายและภาพลักษณ์
      </CardDescription>
    </CardHeader>
    <CardContent className="flex-1 pt-8">
      <ul className="list-none p-0 m-0 space-y-4 text-slate-600 font-medium">
        <li className="flex items-center gap-3">
          <div className="p-1 bg-blue-100 rounded-full text-blue-600">
            <Sparkles size={14} />
          </div> 
          พัฒนาเว็บไซต์ที่โหลดไวที่สุดเพื่อประสบการณ์ลูกค้าที่ดีกว่า
        </li>
        <li className="flex items-center gap-3">
          <div className="p-1 bg-blue-100 rounded-full text-blue-600">
            <Sparkles size={14} />
          </div> 
          โครงสร้างที่ช่วยให้ธุรกิจของคุณถูกค้นหาพบบน Google ได้ง่ายขึ้น
        </li>
        <li className="flex items-center gap-3">
          <div className="p-1 bg-blue-100 rounded-full text-blue-600">
            <Sparkles size={14} />
          </div> 
          ระบบจัดการเนื้อหาที่ใช้งานง่าย ให้คุณปรับปรุงข้อมูลได้เองตลอดเวลา
        </li>
      </ul>
      <Button className="w-full mt-10 bg-blue-600 hover:bg-blue-700 h-12 rounded-xl font-bold transition-all group-hover:gap-4" asChild>
        <Link href="/services/aem-dev">
          เจาะลึกรายละเอียดงานคราฟต์ <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </CardContent>
  </Card>

  {/* บริการที่ 2: Unlink-th */}
  <Card className="flex flex-col border-2 transition-all hover:border-slate-900 hover:shadow-xl group rounded-[2rem] overflow-hidden">
    <CardHeader className="bg-slate-900 text-white pb-8">
      <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-white border border-white/20">
        <ShieldCheck size={30} />
      </div>
      <CardTitle className="text-3xl font-black">Unlink-th</CardTitle>
      <CardDescription className="text-lg font-medium text-slate-400">
        จัดการข้อมูลและปกป้องชื่อเสียงดิจิทัลอย่างมืออาชีพ
      </CardDescription>
    </CardHeader>
    <CardContent className="flex-1 pt-8">
      <ul className="list-none p-0 m-0 space-y-4 text-slate-600 font-medium">
        <li className="flex items-center gap-3">
          <div className="p-1 bg-slate-100 rounded-full text-slate-900">
            <MousePointer2 size={14} />
          </div> 
          ดำเนินการจัดการข้อมูลที่ส่งผลเสียต่อภาพลักษณ์ออนไลน์ของคุณ
        </li>
        <li className="flex items-center gap-3">
          <div className="p-1 bg-slate-100 rounded-full text-slate-900">
            <MousePointer2 size={14} />
          </div> 
          วางแผนสร้างพื้นที่ข้อมูลเชิงบวกเพื่อเริ่มต้นตัวตนใหม่ที่น่าเชื่อถือ
        </li>
        <li className="flex items-center gap-3">
          <div className="p-1 bg-slate-100 rounded-full text-slate-900">
            <MousePointer2 size={14} />
          </div> 
          ดูแลรักษาความลับและความปลอดภัยของข้อมูลในระดับสูงสุด
        </li>
      </ul>
      <Button className="w-full mt-10 bg-slate-900 hover:bg-slate-800 h-12 rounded-xl font-bold transition-all group-hover:gap-4" asChild>
        <Link href="/services/unlink-th">
          ปรึกษาการจัดการข้อมูล <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </CardContent>
  </Card>

</div>

---

### 💡 ทำไมต้องวางใจให้เราดูแล?

เราไม่ได้เพียงแค่รับจ้างทำตามคำสั่ง แต่เราใช้ประสบการณ์และความเชี่ยวชาญระดับงานฝีมือมาช่วยวิเคราะห์และแก้ปัญหาให้ธุรกิจของคุณอย่างตรงจุด

* **ความเร็วที่เป็นเลิศ:** มาตรฐานเว็บไซต์ที่เราส่งมอบคือความเร็วระดับสูงสุดในตลาด
* **ความลับคือหัวใจ:** บริการจัดการชื่อเสียงถูกออกแบบมาเพื่อรักษาความเป็นส่วนตัว
* **การลงทุนที่คุ้มค่า:** เว็บไซต์ที่ดีช่วยลดค่าใช้จ่ายด้านการตลาดในระยะยาว

<div className="mt-16 text-center bg-blue-50 p-10 rounded-[2.5rem] border-2 border-blue-100">
  <h3 className="text-2xl font-black text-blue-900 mb-4">ไม่แน่ใจว่าธุรกิจของคุณควรเริ่มจากจุดไหน?</h3>
  <p className="text-blue-700 mb-8 font-medium">ผมยินดีให้คำปรึกษาเบื้องต้นเพื่อวางแผนโครงสร้างที่เหมาะสมที่สุดสำหรับคุณ (ไม่มีค่าใช้จ่าย)</p>
  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-10 h-14 font-bold text-lg" asChild>
    <Link href="/contact">ติดต่อนายเอ็มซ่ามากส์</Link>
  </Button>
</div>
```
---

#### 🔍 Path: `app/services/aem-dev/page.mdx`
```text
/** @format */

# 💻 พลิกโฉมธุรกิจด้วย "งานคราฟต์ดิจิทัล" โดย AEM Dev Web

ในยุคที่ใครก็ทำเว็บได้... แต่จะมีกี่เว็บที่ **"หาเงิน"** ให้คุณได้จริง? เราไม่ได้แค่ส่งมอบโค้ด แต่เราส่งมอบ **"เครื่องจักรผลิตยอดขาย"** ที่ออกแบบมาเพื่อธุรกิจของคุณโดยเฉพาะ

---

### 💎 ทำไมธุรกิจระดับพรีเมียมถึงเลือกเรา?

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
  <Card className="border-none bg-slate-50 shadow-sm">
    <CardContent className="pt-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-600 rounded-lg">
          <Zap className="text-white h-5 w-5" />
        </div>
        <h4 className="font-black m-0 text-xl text-slate-900">ความเร็วที่เหนือกว่า</h4>
      </div>
      <p className="text-slate-600 leading-relaxed m-0">
        ลูกค้าไม่รอนานเกิน 2 วินาที เว็บของเราถูกรีดประสิทธิภาพให้โหลดไวในเสี้ยววินาที 
        ซึ่งเป็นปัจจัยอันดับ 1 ที่ช่วยให้ปิดการขายได้ง่ายขึ้นและลดค่าโฆษณา (Ad Cost)
      </p>
    </CardContent>
  </Card>
  
  <Card className="border-none bg-slate-50 shadow-sm">
    <CardContent className="pt-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-purple-600 rounded-lg">
          <Search className="text-white h-5 w-5" />
        </div>
        <h4 className="font-black m-0 text-xl text-slate-900">โครงสร้าง SEO เชิงลึก</h4>
      </div>
      <p className="text-slate-600 leading-relaxed m-0">
        ไม่ใช่แค่ใส่คีย์เวิร์ด แต่เราวางรากฐาน Technical SEO ไปถึงระดับโครงสร้าง 
        เพื่อให้ Google รักเว็บไซต์ของคุณ และช่วยให้คุณประหยัดงบการตลาดในระยะยาว
      </p>
    </CardContent>
  </Card>
</div>

---

### 🛠 ประณีตในทุกจุด... เพื่อผลลัพธ์ที่จับต้องได้

งานของเราไม่ใช่การลากวาง แต่คือการคำนวณมาอย่างดี:

* **Conversion-First Design:** ทุกปุ่ม ทุกรูปภาพ ถูกวางในตำแหน่งที่กระตุ้นให้ลูกค้าอยาก "ทัก" หรือ "ซื้อ"
* **Zero-Downtime Reliability:** ใช้ระบบ Serverless ทันสมัยที่สุด เว็บไม่มีล่มแม้คนเข้าหลักหมื่นพร้อมกัน
* **Content Freedom:** คุณเป็นเจ้าของเนื้อหา 100% แก้ไขข้อมูลเองได้ง่าย ไม่ต้องรอช่าง
* **Unlink-Ready:** รองรับการเชื่อมต่อกับระบบจัดการชื่อเสียง หากคุณต้องการการปกป้องแบรนด์ในอนาคต

---

### 📦 เลือกลงทุนให้ตรงจุดประสงค์

| ผลลัพธ์ที่จะได้รับ | **Growth (เริ่มต้นชีวิตใหม่)** | **Empire (สร้างอาณาจักร)** |
| :--- | :---: | :---: |
| การออกแบบตามแบรนด์ | <CheckCircle2 className="text-green-600 mx-auto" /> | <CheckCircle2 className="text-green-600 mx-auto" /> |
| รองรับมือถือ 100% | <CheckCircle2 className="text-green-600 mx-auto" /> | <CheckCircle2 className="text-green-600 mx-auto" /> |
| ความเร็ว PageSpeed (Mobile) | 90+ | 95-100 |
| ระบบวิเคราะห์พฤติกรรมลูกค้า | ❌ | <CheckCircle2 className="text-green-600 mx-auto" /> |
| กลยุทธ์ดันอันดับ Google | พื้นฐาน | ขั้นสูง (Custom Strategy) |
| **ความเหมาะสม** | **SME เริ่มต้น** | **ธุรกิจที่ต้องการเป็นเบอร์ 1** |

---

### 🤝 เริ่มต้นสร้าง "ความได้เปรียบ" ตั้งแต่วันนี้

อย่าปล่อยให้เว็บไซต์เก่าๆ หรือระบบที่ล่าช้าทำลายโอกาสทางธุรกิจของคุณ ปรึกษาผมเพื่อวางแผนโครงสร้างที่เหมาะสมที่สุด (เป็นความลับและไม่มีค่าใช้จ่าย)

<div className="flex flex-wrap gap-4 mt-12 bg-slate-900 p-8 rounded-[2rem] justify-center items-center text-center">
  <div className="w-full mb-4">
    <h3 className="text-white font-black text-2xl m-0">พร้อมเปลี่ยนเว็บไซต์ให้เป็นสินทรัพย์หรือยัง?</h3>
  </div>
  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-14 px-8 rounded-full font-bold text-lg" asChild>
    <Link href="/contact">เริ่มโปรเจกต์ของคุณ</Link>
  </Button>
  <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 h-14 px-8 rounded-full font-bold text-lg" asChild>
    <Link href="/projects">ดูเคสความสำเร็จ</Link>
  </Button>
</div>

> **คำแนะนำจากช่างฝีมือ:** "เว็บไซต์ที่ดีไม่ใช่แค่มีไว้โชว์ แต่ต้องมีไว้เพื่อแก้ปัญหาและสร้างการเติบโต"
```
---

#### 🔍 Path: `app/services/unlink-th/page.mdx`
```text
/** @format */

# 🛡️ Unlink-th: บริการดูแลและคืนความขาวสะอาดให้ชื่อเสียงออนไลน์

ในยุคที่การค้นหาชื่อบนอินเทอร์เน็ตคือการตัดสินใจครั้งสำคัญ... **"ตัวตนของคุณ"** คือกุญแจสู่โอกาสทางธุรกิจ

---

### 💎 เราดูแลชื่อเสียงของคุณด้วย "งานละเอียด"

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
  <Card className="border-none bg-slate-50 shadow-sm">
    <CardContent className="pt-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-slate-900 rounded-lg">
          <EyeOff className="text-white h-5 w-5" />
        </div>
        <h4 className="font-black m-0 text-xl text-slate-900">จัดการข้อมูลที่เสียหาย</h4>
      </div>
      ดำเนินการประสานงานและจัดการกับลิงก์หรือข้อความที่ส่งผลลบต่อภาพลักษณ์ เพื่อให้เรื่องราวเหล่านั้นลดบทบาทลงจากหน้าค้นหา
    </CardContent>
  </Card>
  
  <Card className="border-none bg-slate-50 shadow-sm">
    <CardContent className="pt-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-600 rounded-lg">
          <UserCheck className="text-white h-5 w-5" />
        </div>
        <h4 className="font-black m-0 text-xl text-slate-900">สร้างตัวตนใหม่ให้น่าจดจำ</h4>
      </div>
      วางระบบข้อมูลใหม่เพื่อให้ผลงานและความสำเร็จของคุณโดดเด่นขึ้นมาแทนที่ ช่วยเสริมสร้างความน่าเชื่อถือที่คุณตั้งใจสร้างขึ้น
    </CardContent>
  </Card>
</div>

---

### 🏆 บทพิสูจน์: มาตรฐานความแม่นยำระดับ 100%

สถาปัตยกรรมระบบของเราได้รับการยืนยันด้วยคะแนนความถูกต้องแม่นยำเต็ม 100 เช่นเดียวกับงานคราฟต์ดิจิทัลในเครือ **AEM DEV WEB**

![ความน่าเชื่อถือระดับ 100%](/images/case/case100%.webp)

---

### 🎯 ถึงเวลาคืนความเป็นมืออาชีพให้กับตัวคุณ

อย่าปล่อยให้เรื่องราวเก่าๆ มาเป็นกำแพงขวางกั้นอนาคต ให้เราเป็นผู้ช่วยดูแลภาพลักษณ์ดิจิทัลของคุณให้ใสสะอาดตั้งแต่วันนี้

<div className="flex flex-wrap gap-4 mt-12 bg-slate-900 p-10 rounded-[3rem] justify-center items-center text-center">
  <div className="w-full mb-4">
    <h3 className="text-white font-black text-2xl m-0">ปรึกษาเป็นการส่วนตัว (ไม่เปิดเผยตัวตน)</h3>
  </div>
  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200 h-14 px-10 rounded-full font-bold text-lg" asChild>
    <Link href="/contact">ติดต่อเจ้าหน้าที่โดยตรง</Link>
  </Button>
</div>

> **ความมุ่งมั่นจากเรา:** "เราเชื่อว่าทุกคนมีสิทธิ์ที่จะมีภาพลักษณ์ที่ดี และเราคือผู้ช่วยที่จะทำให้สิ่งนั้นเกิดขึ้นจริง"
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
import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  // ตรวจสอบว่าไฟล์มีอยู่จริงไหม
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  // อ่านเนื้อหาและ Metadata (Frontmatter)
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  // Import ไฟล์ MDX แบบ Dynamic เพื่อเรนเดอร์เนื้อหา
  const { default: PostContent } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <Container className="py-12 md:py-20 max-w-4xl">
      <Button variant="ghost" size="sm" asChild className="mb-10 hover:bg-blue-50 hover:text-blue-600">
        <Link href="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> กลับหน้าบล็อก</Link>
      </Button>

      <header className="mb-12 space-y-6">
        <h1 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 uppercase">
          {data.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-slate-400 uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-blue-500" />
            {data.date}
          </div>
          <div className="flex items-center gap-2">
            <User size={16} className="text-blue-500" />
            {data.author || "Alongkorl Yomkerd"}
          </div>
        </div>
      </header>

      {/* เนื้อหาหลักจากไฟล์ MDX */}
      <article className="prose prose-slate lg:prose-xl max-w-none prose-headings:font-black prose-headings:uppercase prose-a:text-blue-600">
        <PostContent />
      </article>

      <div className="mt-20 p-8 rounded-[2rem] bg-slate-900 text-white">
        <h3 className="text-xl font-bold mb-2">สนใจโซลูชันนี้?</h3>
        <p className="text-slate-400 mb-6 text-sm md:text-base">
          ปรึกษาการทำ Technical SEO หรือพัฒนาเว็บไซต์ด้วย Next.js 15 กับเราได้ฟรี
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-8" asChild>
          <Link href="/contact">ติดต่องาน / ปรึกษาฟรี</Link>
        </Button>
      </div>
    </Container>
  );
}

// สร้าง Static Paths เพื่อประสิทธิภาพสูงสุด (SEO)
export async function generateStaticParams() {
  const files = fs.readdirSync(BLOG_DIR);
  return files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}
```
---

#### 🔍 Path: `app/blog/page.tsx`
```typescript
/** @format */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Container from "@/components/layout/Container";
import BlogCard from "@/components/shared/BlogCard"; 
import { Sparkles } from "lucide-react";

// 1. กำหนด Interface เพื่อกำจัด Warning: @typescript-eslint/no-explicit-any
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export default function BlogListPage() {
  // 2. ระบุ Type ให้กับอาเรย์ของบทความ
  let posts: BlogPost[] = [];
  
  try {
    if (fs.existsSync(BLOG_DIR)) {
      const files = fs.readdirSync(BLOG_DIR);
      
      posts = files
        .filter((file) => file.endsWith(".mdx"))
        .map((fileName) => {
          const slug = fileName.replace(".mdx", "");
          const fullPath = path.join(BLOG_DIR, fileName);
          const fileContents = fs.readFileSync(fullPath, "utf8");
          const { data } = matter(fileContents);

          // 3. จัดข้อมูลให้ตรงตาม Interface
          return {
            slug,
            title: data.title || "Untitled Post",
            description: data.description || "",
            image: data.image || "/images/service/aemdevweb.webp",
            date: data.date || "Unknown Date",
            author: data.author || "Alongkorl",
            tags: data.tags || [],
          };
        })
        .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
    }
  } catch (error) {
    console.error("Error reading blog posts:", error);
  }

  return (
    <Container className="py-16 md:py-24">
      {/* --- Header Section --- */}
      <div className="flex flex-col items-center text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" /> Insights & News
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 uppercase">
          บล็อกและความรู้
        </h1>
        <p className="max-w-[700px] text-muted-foreground text-lg font-medium">
          แบ่งปันประสบการณ์ Web Development และ Technical SEO เพื่อช่วยให้ธุรกิจของคุณเติบโต
        </p>
      </div>

      {/* --- Blog Grid Section --- */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <div className="text-center py-20 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
          <p className="text-slate-400 font-bold uppercase tracking-widest">
            ยังไม่มีบทความในขณะนี้
          </p>
        </div>
      )}
    </Container>
  );
}
```
---

#### 🔍 Path: `components/profile/Schema.tsx`
```typescript
/** @format */

/**
 * Schema Component (JSON-LD)
 * ปรับปรุงใหม่: ตัดชื่อเทคโนโลยีเฉพาะทางออกทั้งหมด
 * เน้นการสื่อสารผ่าน "ความเชี่ยวชาญ" และ "ความตั้งใจในงานสร้างสรรค์"
 */
export default function Schema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alongkorl Yomkerd",
    "alternateName": [
      "นายเอ็มซ่ามากส์", 
      "เอ็มซ่ามากส์", 
      "Alongkorl (นายเอ็มซ่ามากส์)"
    ],
    "url": "https://me.aemdevweb.com",
    "image": "https://me.aemdevweb.com/images/profile-photo.jpg",
    "jobTitle": "Web Artisan & Digital Solution Architect",
    "description": "คนทำเว็บที่หลงรักในงานละเอียดและผลลัพธ์ที่จับต้องได้ ผมเชื่อว่าเว็บไซต์ที่ดีคือหัวใจสำคัญที่ช่วยให้ธุรกิจเติบโตอย่างมั่นคง ผู้อยู่เบื้องหลังการออกแบบและพัฒนาระบบจัดการข้อมูลดิจิทัล Unlink-th",
    "gender": "Male",
    "email": "me@aemdevweb.com",
    "nationality": {
      "@type": "Country",
      "name": "Thailand"
    },
    "sameAs": [
      "https://www.aemdevweb.com",
      "https://www.unlink-th.com",
      "https://www.facebook.com/aemdevweb",
      "https://lin.ee/dDHISbG"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "AemDevWeb",
        "url": "https://www.aemdevweb.com",
        "description": "สตูดิโอสร้างสรรค์เว็บไซต์เพื่อยกระดับธุรกิจยุคใหม่"
      },
      {
        "@type": "Organization",
        "name": "Unlink-th",
        "url": "https://www.unlink-th.com",
        "description": "ศูนย์รับปรึกษาและจัดการข้อมูลบนโลกออนไลน์"
      }
    ],
    "knowsAbout": [
      "Modern Web Craftsmanship",
      "Digital Business Optimization",
      "Search Engine Strategy",
      "Online Trust & Identity Management",
      "User-Centric Design",
      "SME Growth Solutions"
    ],
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": "Thai"
      },
      {
        "@type": "Language",
        "name": "English"
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
import Image from "next/image"; // ✅ ลบ ImageProps ออก
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
  Lock
} from "lucide-react";

// กำหนด Interface สำหรับ Props ของ Image ใน MDX
interface MdxImageProps {
  src?: string;
  alt?: string;
  [key: string]: unknown;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // 1. Typography Standard
    h1: ({ className, ...props }) => (
      <h1 className={cn("mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)} {...props} />
    ),
    h2: ({ className, ...props }) => (
      <h2 className={cn("mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0", className)} {...props} />
    ),
    p: ({ className, ...props }) => (
      <span className={cn("leading-7 [&:not(:first-child)]:mt-6 text-neutral-700 block", className)} {...props} />
    ),

    // 2. Optimized Image Management
    img: ({ alt, src, ...props }: MdxImageProps) => ( // ✅ ระบุ Type แทน any
      <span className="relative block w-full aspect-video my-8 overflow-hidden rounded-xl border shadow-md">
        <Image
          fill
          src={src || ""}
          alt={alt || "AEM DEV WEB Content Image"}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          {...props}
        />
      </span>
    ),

    // 3. Navigation & Registry
    a: ({ href, className, ...props }) => (
      <Link href={href as string} className={cn("font-medium underline underline-offset-4 text-blue-600 hover:text-blue-800 transition-colors", className)} {...props} />
    ),
    Link,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    Button,
    ProjectCard,

    // 4. Icons Mapping
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
    Lock
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

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, 
  compress: true, 

  // 📄 1. Extensions
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // 🖼️ 2. Images: เน้นความเร็วและลดการใช้ Bandwidth
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    minimumCacheTTL: 3600, // ✅ ปรับเป็น 1 ชม. เพื่อลดภาระ Server ในการประมวลผลรูปภาพซ้ำ
    remotePatterns: [
      { protocol: "https", hostname: "lin.ee" },
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  // 🛠️ 3. Compiler: เคลียร์ Main Thread ให้ว่างที่สุด
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },

  // ⚡ 4. Experimental: ความแรงระดับ Next.js 15
  experimental: {
    mdxRs: true, 
    // ✅ เพิ่มการจัดการเรื่อง Caching ในระดับ Webpack สำหรับ Next.js 15
    webpackBuildWorker: true, // ช่วยเรื่องการจัดการ Memory ในการ Build โปรเจกต์ขนาดใหญ่
    
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
  // ✅ ระบุเวอร์ชันและการตั้งค่า MDX ให้ชัดเจนขึ้น
  extension: /\.mdx?$/, 
  options: {
    remarkPlugins: [],
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

export interface PostData {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  author?: string;
  tags?: string[];
  content?: string; // ✅ เพิ่มเผื่อไว้สำหรับหน้า Single Post
  [key: string]: string | string[] | undefined | unknown; 
}

const blogDirectory = path.join(process.cwd(), "content/blog");

/**
 * ดึงข้อมูลบทความทั้งหมดและเรียงลำดับตามวันที่ (ล่าสุดขึ้นก่อน)
 */
export function getSortedPostsData(): PostData[] {
  // ตรวจสอบความมีอยู่ของโฟลเดอร์เพื่อป้องกัน Runtime Error
  if (!fs.existsSync(blogDirectory)) {
    console.warn("⚠️ Blog directory not found at:", blogDirectory);
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const id = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      
      // ดึงข้อมูล Metadata ออกจากเนื้อหา
      const { data } = matter(fileContents);

      return {
        id,
        title: data.title || "Untitled",
        date: data.date || new Date().toISOString(), // ✅ ใส่ Default Date ป้องกัน Error การ Sort
        description: data.description || "",
        image: data.image || "/images/service/aemdevweb.webp",
        ...data,
      } as PostData;
    });

  // เรียงลำดับจากวันที่ใหม่ที่สุดไปเก่าที่สุด
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * ดึงข้อมูลบทความเดี่ยวตาม ID (Slug)
 */
export async function getPostData(id: string): Promise<PostData | null> {
  const fullPath = path.join(blogDirectory, `${id}.mdx`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    id,
    content, // เนื้อหาบทความสำหรับนำไป Render
    title: data.title || "Untitled",
    date: data.date || "",
    description: data.description || "",
    image: data.image || "/images/service/aemdevweb.webp",
    ...data,
  } as PostData;
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
