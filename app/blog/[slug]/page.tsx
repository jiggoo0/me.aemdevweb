/** @format */

import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  User,
  Search,
  // ShieldCheck, // ❌ ตัดออกเนื่องจากไม่ได้ใช้ในหน้านี้
  // HeartHandshake, // ❌ ตัดออกเนื่องจากไม่ได้ใช้ในหน้านี้
} from "lucide-react";
import Link from "next/link";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

/**
 * Metadata Generation (SEO)
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return {};
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);
  return {
    title: `${data.title} | นายเอ็มซ่ามากส์`,
    description: data.description,
  };
}

/**
 * BlogPostPage Component
 */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  // 1. ดึงข้อมูล Metadata ผ่าน gray-matter
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  // 2. Dynamic Import ตัวเนื้อหา MDX
  const { default: PostContent } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <article className="bg-white py-12 md:py-20">
      <Container className="max-w-4xl">
        {/* --- Navigation --- */}
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="mb-10 font-bold transition-colors hover:bg-blue-50 hover:text-blue-600"
        >
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> กลับสู่คลังความรู้
          </Link>
        </Button>

        {/* --- Header Section --- */}
        <header className="mb-12 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 shadow-sm">
            <Search className="h-3.5 w-3.5" /> Organic Search Strategy
          </div>
          <h1 className="text-4xl font-black leading-tight text-slate-900 md:text-6xl lg:leading-[1.1]">
            {data.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm font-black uppercase tracking-widest text-slate-400">
            <div className="flex items-center gap-2 border-slate-200 pr-0 md:border-r md:pr-6">
              <Calendar size={18} className="text-blue-500" />
              <span className="text-slate-600">{data.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} className="text-blue-500" />
              <span className="text-slate-600">
                {data.author || "Alongkorl Yomkerd"}
              </span>
            </div>
          </div>
        </header>

        {/* --- Article Content Section --- */}
        <div
          className="prose prose-slate max-w-none lg:prose-xl 
          prose-headings:scroll-m-20 prose-headings:font-black prose-headings:text-slate-900 
          prose-p:font-medium prose-p:leading-8 prose-p:text-slate-600
          prose-a:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800
          prose-blockquote:rounded-r-2xl prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50/50
          prose-img:rounded-[2rem] prose-img:border-2 prose-img:border-slate-100 shadow-none"
        >
          <PostContent />
        </div>

        {/* --- CTA Section --- */}
        <div className="relative mt-24 overflow-hidden rounded-[3.5rem] bg-slate-950 p-10 text-white shadow-2xl md:p-16 border border-white/5">
          <div className="absolute right-0 top-0 -mr-32 -mt-32 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="relative z-10 text-center md:text-left">
            <h3 className="mb-6 text-3xl font-black md:text-5xl">
              อยากเปลี่ยนเว็บไซต์ให้เป็น <br className="hidden md:block" />{" "}
              "สินทรัพย์" ที่ช่วยหาเงินไหมครับ?
            </h3>
            <Button
              className="h-16 rounded-full bg-blue-600 px-12 text-xl font-black shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
              asChild
            >
              <Link href="/contact">ปรึกษาเรื่อง SEO ฟรี</Link>
            </Button>
          </div>
        </div>
      </Container>
    </article>
  );
}

export async function generateStaticParams() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(".mdx", ""),
    }));
}
