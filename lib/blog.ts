/** @format */
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ✅ แก้ไข: เปลี่ยนจาก any เป็น unknown หรือระบุชนิดข้อมูลที่เจาะจง
export interface PostData {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  author?: string;
  tags?: string[];
  [key: string]: string | string[] | undefined | unknown; 
}

const blogDirectory = path.join(process.cwd(), "content/blog");

/**
 * ดึงข้อมูลบทความทั้งหมดและเรียงลำดับตามวันที่
 */
export function getSortedPostsData(): PostData[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const id = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        id,
        title: data.title || "Untitled",
        date: data.date || "",
        description: data.description || "",
        image: data.image || "/images/service/aemdevweb.webp",
        ...data,
      } as PostData;
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
