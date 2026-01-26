/** @format */

/**
 * AEMDEVWEB Core Identity System (2026)
 * Single Source of Truth สำหรับข้อมูลอัตลักษณ์และโครงสร้างพื้นฐานของเว็บไซต์
 */
export const siteConfig = {
  // 1. Identity Verification (ข้อมูลยืนยันตัวตน)
  fullName: "นายอลงกรณ์ ยมเกิด",
  expertName: "นายเอ็มซ่ามากส์",
  handle: "AEMDEVWEB",
  role: "Technical SEO Consultant & Infrastructure Lead",
  expert: "ผู้เชี่ยวชาญด้านการวางโครงสร้างระบบเว็บและกลยุทธ์ SEO เชิงเทคนิค",
  
  // 2. SEO Content Strategy (ข้อมูลสำหรับการทำดัชนี)
  siteName: "AEMDEVWEB | Identity Hub",
  description: "ศูนย์รวมความรู้ด้านเทคนิค SEO และการพัฒนา Next.js โครงสร้างสมรรถนะสูง โดย นายอลงกรณ์ ยมเกิด",
  slogan: "High-Performance Infrastructure & Technical SEO Strategy",
  
  // 3. Domain & Assets (โครงสร้างที่อยู่และไฟล์หลัก)
  url: "https://me.aemdevweb.com",
  commercialUrl: "https://www.aemdevweb.com",
  ogImage: "/images/og-image.png",
  profilePhoto: "/images/profile-photo.jpg",
  
  // 4. Business Context (ข้อมูลสำหรับการติดต่อเชิงธุรกิจ)
  companyName: "AEMDEVWEB Co., Ltd.",
  email: "me@aemdevweb.com",
  
  // 5. Social Presence (เครือข่ายความเชื่อมโยงอัตลักษณ์)
  contact: {
    facebook: "https://facebook.com/aemdevweb",
    linkedin: "https://www.linkedin.com/in/alongkorl-aemdevweb",
    x: "https://x.com/xemwep91696",
    line: "https://lin.ee/pHpO7wF", // Line Official Account (หลัก)
    linePersonal: "https://line.me/ti/p/PCE92r2xrB", // Line ส่วนตัว
    github: "https://github.com/aemdevweb",
  },
} as const;

export type SiteConfig = typeof siteConfig;
