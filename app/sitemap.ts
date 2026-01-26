/** @format */

import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

/**
 * Sitemap Generator - Identity Edition (me.aemdevweb.com)
 * ปรับปรุงใหม่: ลบ Service Routes และเพิ่ม Auto-Project Generation
 * เพื่อรองรับโครงสร้างเน้น Authority & Proof of Work
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://me.aemdevweb.com";
  
  // Path สำหรับดึงข้อมูล Content
  const blogDir = path.join(process.cwd(), "content/blog");
  const projectDir = path.join(process.cwd(), "content/projects");

  // 1. Static Routes Configuration
  // เน้นหน้าหลักที่สร้าง Trust และ E-E-A-T
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  /**
   * 2. Helper Function สำหรับสร้าง Routes จาก MDX
   * รองรับทั้งโครงสร้างไฟล์เดี่ยว และโฟลเดอร์ที่มี page.mdx
   */
  const getRoutesFromDir = (dir: string, routePath: string, priority: number): MetadataRoute.Sitemap => {
    if (!fs.existsSync(dir)) return [];
    
    const items = fs.readdirSync(dir);
    
    return items.map((item) => {
      const isDirectory = fs.statSync(path.join(dir, item)).isDirectory();
      const slug = isDirectory ? item : item.replace(".mdx", "");
      const fullPath = isDirectory 
        ? path.join(dir, item, "page.mdx") 
        : path.join(dir, item);

      if (!fs.existsSync(fullPath)) return null;

      const stats = fs.statSync(fullPath);
      return {
        url: `${baseUrl}/${routePath}/${slug}`,
        lastModified: stats.mtime,
        changeFrequency: "weekly" as const,
        priority: priority,
      };
    }).filter(Boolean) as MetadataRoute.Sitemap;
  };

  // ดึงข้อมูล Routes ทั้งหมด
  const blogRoutes = getRoutesFromDir(blogDir, "blog", 0.7);
  const projectRoutes = getRoutesFromDir(projectDir, "projects", 0.7);

  return [...staticRoutes, ...blogRoutes, ...projectRoutes];
}
