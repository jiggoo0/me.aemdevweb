/** @format */

import { MetadataRoute } from "next";

/**
 * Robots Configuration - Identity & Authority Edition
 * วัตถุประสงค์: ควบคุมการ Crawl ให้เน้นไปที่เนื้อหาที่สร้าง Trust (E-E-A-T)
 * และป้องกันโครงสร้างระบบภายในเพื่อความปลอดภัยระดับ High-Performance
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://me.aemdevweb.com";

  return {
    rules: [
      {
        userAgent: "*",
        // อนุญาตให้เข้าถึงหน้าหลักที่สร้างตัวตนและผลงาน
        allow: [
          "/",         // Identity Hub
          "/about",    // ข้อมูลยืนยันตัวตน
          "/blog/",    // คลังความรู้ Technical SEO
          "/projects/", // ผลงานและ Case Study
          "/contact",  // ช่องทางติดต่อ
        ],
        // ป้องกันการเข้าถึงไฟล์ระบบและ Path ที่ไม่ได้ใช้งานจริง
        disallow: [
          "/api/",      // ระบบหลังบ้าน
          "/_next/",    // ไฟล์ Internal ของ Next.js
          "/static/",   // ไฟล์ Static ระบบ
          "/*.json$",   // ไฟล์ Config ต่างๆ
          "/services",  // ลบออกตามโครงสร้างใหม่ที่เน้น Branding
        ],
      },
      {
        /**
         * กลยุทธ์จัดการ AI Bots:
         * บล็อก Bot ที่เน้นการดูดข้อมูลไปเทรน (Scraping) 
         * เพื่อรักษาคุณภาพเนื้อหา Organic ที่เราเขียนขึ้นเอง
         */
        userAgent: ["GPTBot", "CCBot", "Claude-Web"],
        disallow: "/",
      },
    ],
    // ระบุตำแหน่ง Sitemap ให้ Bot ไต่ตามโครงสร้างที่เราจัดไว้ใน sitemap.ts
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
