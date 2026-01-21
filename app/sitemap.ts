/** @format */
import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

/**
 * 🗺️ Sitemap Generator - DNA นายเอ็มซ่ามากส์
 * ออกแบบมาเพื่อเร่งการทำ Indexing ให้กับบริการรับทำ SEO และผลงาน Unlink-th
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://me.aemdevweb.com";
  const blogDir = path.join(process.cwd(), "content/blog");

  // 1. กำหนดเส้นทางหลัก (Static Routes)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0, // หน้าแรก: จุดรวมศูนย์ Trust และบริการรับทำ SEO
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/aem-dev`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/unlink-th`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9, // Exclusive Service: เน้นเป็นพิเศษ
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
      priority: 0.8, // คลังความรู้: ท่อส่ง Traffic หลัก
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // 2. ดึงบทความจากไฟล์จริง (Dynamic Blog Routes)
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
