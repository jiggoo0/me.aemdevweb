import { MetadataRoute } from 'next'

/**
 * Sitemap สำหรับ me.aemdevweb.com
 * ปรับปรุงเพื่อรองรับการขยายตัวของบริการ AemDevWeb และผลงาน Unlink-th
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // กำหนด URL หลักของเว็บไซต์ (Subdomain)
  const baseUrl = 'https://me.aemdevweb.com'
  
  // กำหนดวันที่อัปเดตล่าสุด
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: 'daily', // หน้าหลักมีการอัปเดตงานบ่อย
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // เส้นทางสำหรับโปรเจกต์/บริการ Unlink-th เพื่อขยายผล SEO
    {
      url: `${baseUrl}/services/unlink-th`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // เส้นทางสำหรับบริการพัฒนาเว็บ AemDevWeb
    {
      url: `${baseUrl}/services/aemdevweb`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}
