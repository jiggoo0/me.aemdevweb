---
title: "Project Structure Report"
description: "Extended scan of project folders, configuration, and pre-deploy analysis"
author: "Auto Generated Script"
site: "https://me.aemdevweb.com/"
projectType: "Web Application"
environment: "pre-deploy"
buildId: "78a3fc14"
generatedAt: "2026-01-19T13:44:04Z"
contentType: "documentation"
tags:
  - project-structure
  - pre-deploy
  - config-scan
  - automation
---

# 📁 Project Structure Report (Extended Scan)
_Generated: Mon Jan 19 20:44:04 +07 2026_

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
  📄 utils.ts

⚠️ Skipped (not found): hooks

⚠️ Skipped (not found): constants

📂 content
  📂 blog
    📄 first-post.mdx
    📄 technical-seo-tips.mdx

⚠️ Skipped (not found): types

📂 public
  📄 file.svg
  📄 globe.svg
  📂 images
    📄 activity.webp
    📄 aemdevweb-hero.webp
    📂 case
      📄 case100%.webp
      📄 case99%.webp
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

## 📝 Pre-Deploy Analysis
________
⚠️ pre-deploy-report.md not found
Run pre-deploy-check.sh to generate the report

---
Status: Scan completed successfully.
