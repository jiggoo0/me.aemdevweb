/** @format */

import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

/**
 * Sitemap Generator - นายเอ็มซ่ามากส์ Infrastructure Edition
 * ออกแบบมาเพื่อเร่งการจัดดัชนี (Indexing) สำหรับตัวตนผู้เชี่ยวชาญ
 * ขีดจำกัดทางข้อมูล: นายอลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://me.aemdevweb.com";
  const blogDir = path.join(process.cwd(), "content/blog");

  // 1. Static Routes Configuration
  // จัดลำดับความสำคัญตามกลยุทธ์การสร้าง Authority
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0, // หน้าหลักสำหรับยืนยันตัวตน
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9, // สำคัญมากสำหรับคะแนน E-E-A-T
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/aem-dev`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/unlink-th`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // 2. Dynamic Blog Routes Generation
  // ดึงข้อมูลจาก Folder content/blog ตามโครงสร้างไฟล์จริง
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    if (fs.existsSync(blogDir)) {
      const files = fs.readdirSync(blogDir);
      blogRoutes = files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => {
          const slug = file.replace(".mdx", "");
          const stats = fs.statSync(path.join(blogDir, file));
          return {
            url: `${baseUrl}/blog/${slug}`,
            lastModified: stats.mtime,
            changeFrequency: "weekly",
            priority: 0.6,
          };
        });
    }
  } catch (error) {
    console.error("Sitemap Blog Generation Error:", error);
  }

  return [...staticRoutes, ...blogRoutes];
}
