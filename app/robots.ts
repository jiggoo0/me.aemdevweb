/** @format */

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // ตรวจสอบให้มั่นใจว่าใช้ Domain me. เท่านั้น (Consistent)
  const baseUrl = "https://me.aemdevweb.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/blog", // ปรับจาก /blog/ เป็น /blog เพื่อให้ครอบคลุม Index Page
          "/projects",
          "/contact",
        ],
        disallow: [
          "/api/",
          "/_next/",
          "/static/",
          "/*.json$",
          // ลบ /services ออกเพื่อให้ไฟล์ Robots คลีนที่สุดตามโครงสร้างจริง
        ],
      },
      {
        // จัดการบอท AI เพื่อรักษา Authority ของเนื้อหา Organic
        userAgent: ["GPTBot", "CCBot", "Claude-Web", "PerplexityBot"],
        disallow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
