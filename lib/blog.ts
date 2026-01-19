/** @format */
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostData {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  author?: string;
  tags?: string[];
  content?: string; // ✅ เพิ่มเผื่อไว้สำหรับหน้า Single Post
  [key: string]: string | string[] | undefined | unknown; 
}

const blogDirectory = path.join(process.cwd(), "content/blog");

/**
 * ดึงข้อมูลบทความทั้งหมดและเรียงลำดับตามวันที่ (ล่าสุดขึ้นก่อน)
 */
export function getSortedPostsData(): PostData[] {
  // ตรวจสอบความมีอยู่ของโฟลเดอร์เพื่อป้องกัน Runtime Error
  if (!fs.existsSync(blogDirectory)) {
    console.warn("⚠️ Blog directory not found at:", blogDirectory);
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const id = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      
      // ดึงข้อมูล Metadata ออกจากเนื้อหา
      const { data } = matter(fileContents);

      return {
        id,
        title: data.title || "Untitled",
        date: data.date || new Date().toISOString(), // ✅ ใส่ Default Date ป้องกัน Error การ Sort
        description: data.description || "",
        image: data.image || "/images/service/aemdevweb.webp",
        ...data,
      } as PostData;
    });

  // เรียงลำดับจากวันที่ใหม่ที่สุดไปเก่าที่สุด
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * ดึงข้อมูลบทความเดี่ยวตาม ID (Slug)
 */
export async function getPostData(id: string): Promise<PostData | null> {
  const fullPath = path.join(blogDirectory, `${id}.mdx`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    id,
    content, // เนื้อหาบทความสำหรับนำไป Render
    title: data.title || "Untitled",
    date: data.date || "",
    description: data.description || "",
    image: data.image || "/images/service/aemdevweb.webp",
    ...data,
  } as PostData;
}
