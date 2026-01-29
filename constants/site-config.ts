/** @format */

/**
 * AEMDEVWEB Core Identity System (2026)
 * -------------------------------------------------------------------------
 * แหล่งข้อมูลหลักสำหรับตัวตนและโครงสร้างพื้นฐานของเว็บไซต์
 * ยุทธศาสตร์: การสร้างความน่าเชื่อถือและการเชื่อมโยงข้อมูลเชิงกลยุทธ์
 * ควบคุมคุณภาพโดย: นายเอ็มซ่ามากส์
 */
export const siteConfig = {
  // 1. ข้อมูลยืนยันตัวตน (Identity Verification)
  fullName: "อลงกรณ์ ยมเกิด",
  expertName: "Alongkorl (M-Zaa)", // ยืนยันพิกัดชื่อเพื่อสร้างตัวตนเฉพาะตัว
  handle: "AEMDEVWEB",
  role: "Technical SEO Consultant & Web Infrastructure Lead",
  expert: "ผู้เชี่ยวชาญด้านการจัดวางโครงสร้างเว็บไซต์และกลยุทธ์ SEO เชิงลึก",

  // 2. กลยุทธ์เนื้อหา SEO (SEO Content Strategy)
  siteName: "AEMDEVWEB | Identity Hub",
  title: "อลงกรณ์ ยมเกิด | Technical SEO Consultant & Infrastructure Lead",
  description:
    "แหล่งรวมความรู้ด้านเทคนิค SEO และการพัฒนา Next.js โครงสร้างสมรรถนะสูง โดย อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)",
  slogan: "High-Performance Infrastructure & Technical SEO Strategy",
  keywords: [
    "อลงกรณ์ ยมเกิด",
    "Alongkorl Yomkerd",
    "นายเอ็มซ่ามากส์",
    "AEMDEVWEB",
    "Technical SEO",
    "Web Infrastructure Lead",
    "Next.js Developer",
    "Web Performance Specialist",
  ],

  // 3. โดเมนและทรัพยากรหลัก (Domain & Assets)
  url: "https://me.aemdevweb.com",
  commercialUrl: "https://www.aemdevweb.com",
  ogImage: "/images/og-image.png",
  profilePhoto: "/images/profile-photo.jpg",

  // 4. โปรเจกต์ที่เชื่อมโยง (Integrated Projects)
  projects: [
    {
      name: "Unlink-th",
      description: "Reputation Management & Technical De-indexing",
      url: "https://www.unlink-th.com",
      image: "/images/service/Unlink-th.webp",
    },
    {
      name: "AEMDEVWEB",
      description: "Premium Web Development Infrastructure",
      url: "https://www.aemdevweb.com",
      image: "/images/service/aemdevweb.webp",
    },
  ],

  // 5. ข้อมูลติดต่อและเครือข่ายสังคม (Contact & Social Presence)
  companyName: "AEMDEVWEB",
  email: "me@aemdevweb.com",
  contact: {
    facebook: "https://facebook.com/aemdevweb",
    linkedin: "https://www.linkedin.com/in/alongkorl-aemdevweb",
    x: "https://x.com/xemwep91696",
    line: "https://lin.ee/pHpO7wF", // ช่องทางหลักสำหรับติดต่อประสานงาน
    linePersonal: "https://line.me/ti/p/PCE92r2xrB", // ช่องทางส่วนตัวสำหรับการเชื่อมโยงที่ปลอดภัย
    github: "https://github.com/aemdevweb",
  },
} as const;

export type SiteConfig = typeof siteConfig;
