/** @format */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 1. กำหนด Path ไปที่ content/blog โดยตรง
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
 * getAllPosts - ดึงข้อมูลบทความทั้งหมดใน content/blog
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
        author: data.author || "Alongkorl Yomkerd",
        image: data.image || "/images/blog/og-image.png",
        tags: data.tags || [],
      } as BlogPost;
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * getPostBySlug - ดึงข้อมูลบทความรายชิ้นตาม Slug
 * ✅ แก้ไข Lint Warning: 'error' is defined but never used
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
      author: data.author,
      image: data.image,
      tags: data.tags,
    } as BlogPost;
  } catch { 
    // ✅ ลบ (error) ออก เพราะเราแค่ต้องการส่งค่า null กลับเมื่อเกิดปัญหา
    return null;
  }
}
