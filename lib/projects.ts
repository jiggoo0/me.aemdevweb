/** @format */

/**
 * โครงสร้างข้อมูลโปรเจกต์ (Project Interface)
 * ออกแบบมาให้รองรับทั้งการทำ Card UI และการเชื่อมโยงไปหน้า TSX
 */
export interface Project {
  slug: string;        // ต้องตรงกับชื่อ Folder ใน app/projects/
  title: string;       // หัวข้อที่จะโชว์บน Card
  description: string; // คำอธิบายสั้นๆ (Meta Description)
  image: string;       // Path รูปภาพหน้าปก
  tags: string[];      // หมวดหมู่เทคนิค
  link?: string;       // ลิงก์ไปหน้าเว็บไซต์จริง (ถ้ามี)
}

/**
 * ฐานข้อมูลโปรเจกต์แบบ Static
 * ทำหน้าที่เป็น Single Source of Truth สำหรับการแสดงผล Card ทั้งเว็บ
 */
export const projects: Project[] = [
  {
    slug: "unlink-th",
    title: "Unlink-th Platform",
    description: "การวางรากฐาน Technical SEO และโครงสร้างพื้นฐานระดับประเทศ เพื่อความเร็วและความแม่นยำของข้อมูล",
    image: "/images/case/case100.webp",
    tags: ["Infrastructure", "Technical SEO", "Next.js"],
    link: "https://www.unlink-th.com",
  },
  {
    slug: "aem-dev",
    title: "AEM-DEV Identity Hub",
    description: "ระบบยืนยันตัวตนผู้เชี่ยวชาญที่ออกแบบมาเพื่อ Google Entity โดยเฉพาะ ด้วยโครงสร้าง Web Architecture ระดับสูง",
    image: "/images/service/aemdevweb.webp",
    tags: ["SEO Architecture", "Next.js 16", "Web Performance"],
  },
];

/**
 * ดึงข้อมูลโปรเจกต์ทั้งหมด
 * ใช้ในหน้า app/page.tsx (Home) และ app/projects/page.tsx (Listing)
 */
export async function getAllProjects(): Promise<Project[]> {
  // ในอนาคตถ้ามีเยอะ สามารถใส่ Logic การจัดลำดับ (Sort) ตรงนี้ได้เลย
  return projects;
}

/**
 * ดึงข้อมูลโปรเจกต์รายชิ้นตาม Slug (เผื่อใช้ในส่วนของ Navigation)
 */
export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return projects.find((p) => p.slug === slug);
}
