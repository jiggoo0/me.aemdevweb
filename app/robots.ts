/** @format */
import { MetadataRoute } from 'next'

/**
 * Robots Configuration สำหรับ me.aemdevweb.com
 * กำหนดขอบเขตให้ Search Engine Crawlers ทำงานได้อย่างมีประสิทธิภาพ
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://me.aemdevweb.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',             // อนุญาตหน้าหลัก
          '/blog',         // อนุญาตหน้าบล็อก
          '/services',     // อนุญาตหน้าบริการ
          '/projects',     // อนุญาตหน้าผลงาน
          '/about',        // อนุญาตหน้าเกี่ยวกับเรา
        ],
        disallow: [
          '/private/',     // ห้ามเข้าโฟลเดอร์ส่วนตัว
          '/admin/',       // ห้ามเข้าหน้าจัดการ (ถ้ามีในอนาคต)
          '/api/',         // ห้าม Index ส่วนของ API Routes
          '/*.json$',      // ห้าม Index ไฟล์ JSON ตรงๆ
        ],
      },
      {
        // บล็อก Bot บางตัวที่อาจกินทรัพยากรเครื่อง (Termux) โดยไม่จำเป็น
        userAgent: ['GPTBot', 'CCBot'], 
        disallow: '/',
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
