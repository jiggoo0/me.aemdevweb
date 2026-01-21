/** @format */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 1. กำหนด Path ไปที่ content/projects
const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

export interface ProjectPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  isFeatured: boolean;
  content: string;
}

/**
 * getAllProjects - ดึงข้อมูลผลงานทั้งหมด
 */
export function getAllProjects(): ProjectPost[] {
  if (!fs.existsSync(PROJECTS_DIR)) {
    return [];
  }

  const fileNames = fs.readdirSync(PROJECTS_DIR);

  const allProjectsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const filePath = path.join(PROJECTS_DIR, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");

      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        title: data.title || "Untitled Project",
        description: data.description || "",
        image: data.image || "/images/service/aemdevweb.webp",
        tags: data.tags || [],
        link: data.link || "",
        github: data.github || "",
        isFeatured: data.isFeatured || false,
      } as ProjectPost;
    });

  return allProjectsData.sort((a, b) =>
    a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1
  );
}

/**
 * getProjectBySlug - ดึงข้อมูลผลงานรายชิ้นตาม Slug
 * ✅ แก้ไข Lint Warning: 'error' is defined but never used
 */
export function getProjectBySlug(slug: string): ProjectPost | null {
  try {
    const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title,
      description: data.description,
      image: data.image,
      tags: data.tags,
      link: data.link,
      github: data.github,
      isFeatured: data.isFeatured,
    } as ProjectPost;
  } catch {
    // ✅ ตัด (error) ออกเพื่อให้ ESLint ผ่านฉลุยสไตล์ Next.js 15
    return null;
  }
}
