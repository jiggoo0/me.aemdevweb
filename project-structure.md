/** @format */
import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

/**
 * Sitemap Generator สำหรับ me.aemdevweb.com
 * รองรับการดึงข้อมูลจาก Dynamic Blog อัตโนมัติเพื่อให้ Google Index บทความได้รวดเร็ว
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://me.aemdevweb.com'
  const lastModified = new Date()

  // 1. หน้าหลัก (Static Routes)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/aem-dev`, // ปรับให้ตรงกับโครงสร้างโฟลเดอร์จริง
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/unlink-th`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // 2. หน้าบทความบล็อก (Dynamic Blog Routes)
  // ดึงข้อมูลจากโฟลเดอร์ content/blog เพื่อสร้าง URL อัตโนมัติ
  const blogDirectory = path.join(process.cwd(), 'content/blog')
  let blogRoutes: MetadataRoute.Sitemap = []

  try {
    if (fs.existsSync(blogDirectory)) {
      const blogFiles = fs.readdirSync(blogDirectory)
      blogRoutes = blogFiles
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => ({
          url: `${baseUrl}/blog/${file.replace('.mdx', '')}`,
          lastModified,
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        }))
    }
  } catch (error) {
    console.error('Sitemap Error: Could not read blog content directory', error)
  }

  // รวม Routes ทั้งหมด
  return [...staticRoutes, ...blogRoutes]
}
