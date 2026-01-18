/** @format */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Container from "@/components/layout/Container";
import BlogCard from "@/components/shared/BlogCard"; 
import { Sparkles } from "lucide-react";

// 1. กำหนด Interface เพื่อกำจัด Warning: @typescript-eslint/no-explicit-any
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export default function BlogListPage() {
  // 2. ระบุ Type ให้กับอาเรย์ของบทความ
  let posts: BlogPost[] = [];
  
  try {
    if (fs.existsSync(BLOG_DIR)) {
      const files = fs.readdirSync(BLOG_DIR);
      
      posts = files
        .filter((file) => file.endsWith(".mdx"))
        .map((fileName) => {
          const slug = fileName.replace(".mdx", "");
          const fullPath = path.join(BLOG_DIR, fileName);
          const fileContents = fs.readFileSync(fullPath, "utf8");
          const { data } = matter(fileContents);

          // 3. จัดข้อมูลให้ตรงตาม Interface
          return {
            slug,
            title: data.title || "Untitled Post",
            description: data.description || "",
            image: data.image || "/images/service/aemdevweb.webp",
            date: data.date || "Unknown Date",
            author: data.author || "Alongkorl",
            tags: data.tags || [],
          };
        })
        .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
    }
  } catch (error) {
    console.error("Error reading blog posts:", error);
  }

  return (
    <Container className="py-16 md:py-24">
      {/* --- Header Section --- */}
      <div className="flex flex-col items-center text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" /> Insights & News
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 uppercase">
          บล็อกและความรู้
        </h1>
        <p className="max-w-[700px] text-muted-foreground text-lg font-medium">
          แบ่งปันประสบการณ์ Web Development และ Technical SEO เพื่อช่วยให้ธุรกิจของคุณเติบโต
        </p>
      </div>

      {/* --- Blog Grid Section --- */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              description={post.description}
              image={post.image}
              date={post.date}
              author={post.author}
              slug={post.slug}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
          <p className="text-slate-400 font-bold uppercase tracking-widest">
            ยังไม่มีบทความในขณะนี้
          </p>
        </div>
      )}
    </Container>
  );
}
