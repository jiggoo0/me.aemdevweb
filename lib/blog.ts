/** @format */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// กำหนดตำแหน่งโฟลเดอร์สำหรับเก็บไฟล์เนื้อหาบล็อก (.mdx)
const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  tags: string[];
  content: string;
}

/**
 * ดึงรายชื่อบทความทั้งหมด (ใช้สำหรับหน้า Blog Listing และหน้า Home)
 * จัดการแยก Metadata (Frontmatter) และเรียงลำดับวันที่ให้อัตโนมัติ
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    // เช็คความชัวร์ว่าโฟลเดอร์มีอยู่จริงไหม ถ้าไม่มีให้คืนค่า Array ว่างทันที
    if (!fs.existsSync(BLOG_DIR)) {
      console.warn("Blog directory not found:", BLOG_DIR);
      return [];
    }

    const files = fs.readdirSync(BLOG_DIR);

    const posts = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const filePath = path.join(BLOG_DIR, file);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        
        // ใช้ gray-matter แยกส่วนที่เป็น Config (data) และเนื้อหา (content)
        const { data, content } = matter(fileContent);

        return {
          slug: file.replace(".mdx", ""),
          title: data.title || "Untitled Post",
          description: data.description || "",
          date: data.date ? String(data.date) : "",
          image: data.image || "/images/blog/aemdevweb.webp",
          tags: Array.isArray(data.tags) ? data.tags : [],
          content,
        };
      });

    // เรียงลำดับจากวันที่ล่าสุดขึ้นก่อน (Descending Order)
    return posts.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
}

/**
 * ดึงข้อมูลบทความรายชิ้น (ใช้สำหรับหน้า app/blog/[slug]/page.tsx)
 * ค้นหาไฟล์ตามชื่อ slug ที่ส่งเข้ามา
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    
    // ทักตรงๆ: ถ้าหาไฟล์ไม่เจอให้ส่งค่า null เพื่อไปแสดงหน้า 404
    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || "Untitled Post",
      description: data.description || "",
      date: data.date ? String(data.date) : "",
      image: data.image || "/images/blog/aemdevweb.webp",
      tags: Array.isArray(data.tags) ? data.tags : [],
      content,
    };
  } catch (error) {
    console.error(`Error fetching post by slug (${slug}):`, error);
    return null;
  }
}
