/** @format */

import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://me.aemdevweb.com";

  // ตรวจสอบพิกัด Directory ให้ตรงกับ Tech Stack (MDX Content)
  const blogDir = path.join(process.cwd(), "content/blog");
  const projectDir = path.join(process.cwd(), "content/projects");

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`, // ยืนยัน Root Domain Consistency
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

  const getRoutesFromDir = (
    dir: string,
    routePath: string,
    priority: number
  ): MetadataRoute.Sitemap => {
    if (!fs.existsSync(dir)) return [];

    const items = fs.readdirSync(dir);

    return items
      .map((item) => {
        const isDirectory = fs.statSync(path.join(dir, item)).isDirectory();
        const slug = isDirectory ? item : item.replace(".mdx", "");
        const fullPath = isDirectory
          ? path.join(dir, item, "page.mdx")
          : path.join(dir, item);

        if (!fs.existsSync(fullPath)) return null;

        const stats = fs.statSync(fullPath);
        return {
          // ยืนยันการใช้ baseUrl ของ me. เพื่อป้องกันการหลุดไป www.
          url: `${baseUrl}/${routePath}/${slug}`,
          lastModified: stats.mtime,
          changeFrequency: "weekly" as const,
          priority: priority,
        };
      })
      .filter(Boolean) as MetadataRoute.Sitemap;
  };

  const blogRoutes = getRoutesFromDir(blogDir, "blog", 0.7);
  const projectRoutes = getRoutesFromDir(projectDir, "projects", 0.7);

  return [...staticRoutes, ...blogRoutes, ...projectRoutes];
}
