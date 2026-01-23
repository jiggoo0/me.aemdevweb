/** @format */
import { MetadataRoute } from "next";

/**
 * Robots Configuration - นายเอ็มซ่ามากส์ Infrastructure Edition
 * วัตถุประสงค์: เพิ่มประสิทธิภาพการ Crawl สำหรับเนื้อหาคุณภาพสูง
 * พร้อมทั้งป้องกันการเข้าถึงส่วนข้อมูลภายในและไฟล์โครงสร้างระบบ
 * ขีดจำกัดทางข้อมูล: นายอลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://me.aemdevweb.com";

  return {
    rules: [
      {
        userAgent: "*",
        // อนุญาตให้เข้าถึงเนื้อหาหลักเพื่อการจัดลำดับ (Indexing)
        allow: [
          "/", // หน้าแรก (Identity Hub)
          "/about", // ข้อมูลประวัตินายอลงกรณ์
          "/blog", // ฐานข้อมูลความรู้ Technical SEO
          "/services", // ข้อมูลบริการเฉพาะทาง
          "/projects", // รายการโปรเจคและผลงาน
          "/contact", // ช่องทางการติดต่อ
        ],
        // ป้องกันการเข้าถึงส่วนหลังบ้านและไฟล์โครงสร้างระบบ
        disallow: [
          "/private/", // ข้อมูลส่วนตัวภายใน
          "/admin/", // ส่วนจัดการระบบ
          "/api/", // ระบบ API Endpoints
          "/*.json$", // ไฟล์ Configuration ของระบบ
        ],
      },
      {
        /**
         * จำกัดสิทธิ์ AI Scrapers เพื่อรักษาทรัพยากรของเซิร์ฟเวอร์
         * และป้องกันการนำเนื้อหาไปใช้โดยไม่ได้รับอนุญาต
         */
        userAgent: ["GPTBot", "CCBot", "ClaudeBot"],
        disallow: "/",
      },
    ],
    // ระบุตำแหน่ง Sitemap เพื่อการไต่เก็บข้อมูลที่สมบูรณ์
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
