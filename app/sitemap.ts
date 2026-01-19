/** @format */
import { MetadataRoute } from "next";

/**
 * Sitemap Generator - ฉบับ DNA นายเอ็มซ่ามากส์
 * เป้าหมาย: เพื่อให้ Google เข้ามาเก็บข้อมูล "เครื่องจักรผลิตเงิน" 
 * และหน้าผลงาน Unlink-th ของพี่ไปจัดอันดับได้ไวที่สุด
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://me.aemdevweb.com";

  // กำหนดเส้นทางหลักของเว็ปไซต์
  const routes = [
    {
      url: "",
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as const, // หน้าแรกสำคัญที่สุด ให้ Google มาดูบ่อยๆ
      priority: 1.0,
    },
    {
      url: "/services",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "/services/aem-dev",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "/services/unlink-th",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.9, // ผลงานชิ้นเอก ต้องเน้นเป็นพิเศษ
    },
    {
      url: "/projects",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "/blog",
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as const, // บล็อกมีการอัปเดตความรู้บ่อย ให้ Google มาเช็กทุกวัน
      priority: 0.7,
    },
    {
      url: "/about",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: "/contact",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ].map((route) => ({
    ...route,
    url: `${baseUrl}${route.url}`,
  }));

  return routes;
}
