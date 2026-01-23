/** @format */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 1. กำหนดตำแหน่งที่ตั้งของเนื้อหาบทความโดยอ้างอิงจาก Root Directory
const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
  content: string;
}

/**
 * getAllPosts - ดำเนินการดึงข้อมูลบทความทั้งหมดจากระบบไฟล์
 * จัดเรียงข้อมูลตามวันที่เพื่อรองรับการแสดงผลในหน้ารายการบทความ
 */
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const fileNames = fs.readdirSync(BLOG_DIR);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const filePath = path.join(BLOG_DIR, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");

      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        title: data.title || "Untitled Post",
        description: data.description || "",
        date: data.date || "",
        author: data.author || "นายอลงกรณ์ ยมเกิด",
        image: data.image || "/images/blog/og-image.png",
        tags: data.tags || [],
      } as BlogPost;
    });

  // จัดเรียงบทความใหม่ล่าสุดขึ้นก่อน (Descending Order)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * getPostBySlug - ดึงข้อมูลบทความรายชิ้นโดยใช้ Slug เป็นตัวระบุ
 * ดำเนินการจัดการข้อผิดพลาดโดยส่งค่า null เมื่อไม่พบไฟล์ที่กำหนด
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author || "นายอลงกรณ์ ยมเกิด",
      image: data.image,
      tags: data.tags,
    } as BlogPost;
  } catch {
    // ส่งค่า null เมื่อเกิดปัญหาในกระบวนการดึงข้อมูลเพื่อความปลอดภัยของระบบ
    return null;
  }
}
