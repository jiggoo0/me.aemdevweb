/** @format */

import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Search, ChevronRight } from "lucide-react";
import Link from "next/link";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

/**
 * Metadata Generation (Technical SEO Strategy)
 * ดึงข้อมูลจาก Frontmatter เพื่อสร้าง Meta Tags สำหรับ Search Engine และ AI Crawlers
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return { title: "Post Not Found" };

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: `${data.title} | นายอลงกรณ์ ยมเกิด (AEMDEVWEB)`,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      type: "article",
      publishedTime: data.date,
      authors: [data.author || "นายอลงกรณ์ ยมเกิด"],
      images: [
        {
          url: data.image || "/images/blog/og-image.png",
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [data.image || "/images/blog/og-image.png"],
    },
  };
}

/**
 * BlogPostPage Component - Infrastructure Lead Perspective
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

  // 1. ดึงข้อมูล Frontmatter สำหรับจัดการความสอดคล้องของ Entity
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  // 2. Dynamic Import เนื้อหา MDX ตามโครงสร้างระบบไฟล์
  const { default: PostContent } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <article className="bg-white py-12 md:py-24">
      <Container className="max-w-4xl px-6">
        {/* Breadcrumb Navigation - เพิ่มการเข้าถึงข้อมูลแบบลำดับขั้น */}
        <nav className="mb-12 flex items-center gap-2 text-sm font-bold text-slate-400">
          <Link href="/blog" className="transition-colors hover:text-blue-600">
            คลังความรู้
          </Link>
          <ChevronRight size={14} />
          <span className="truncate text-slate-300">{data.title}</span>
        </nav>

        {/* Header Section - การแสดงผลอัตลักษณ์ผู้เขียนและวันที่เผยแพร่ */}
        <header className="mb-16 space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-xs font-black tracking-[0.2em] text-blue-600 uppercase shadow-sm">
            <Search className="h-3.5 w-3.5" /> Organic Strategy 2026
          </div>

          <h1 className="text-4xl leading-[1.15] font-black text-slate-900 md:text-6xl">
            {data.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-8 border-t border-slate-50 pt-8 text-sm font-black tracking-widest text-slate-400 uppercase md:justify-start">
            <div className="flex items-center gap-3">
              <Calendar size={18} className="text-blue-500" />
              <span className="text-slate-600">
                {new Date(data.date).toLocaleDateString("th-TH", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <User size={18} className="text-blue-500" />
              <span className="text-slate-600">
                {data.author || "นายอลงกรณ์ ยมเกิด"}
              </span>
            </div>
          </div>
        </header>

        {/* Article Content - Render เนื้อหาเชิงเทคนิคผ่าน MDX */}
        <section className="prose prose-slate lg:prose-xl prose-headings:scroll-m-20 prose-headings:font-black prose-headings:text-slate-900 prose-p:font-medium prose-p:leading-8 prose-p:text-slate-600 prose-a:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-blockquote:rounded-3xl prose-blockquote:border-l-8 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50/50 prose-blockquote:p-8 prose-img:rounded-[2.5rem] prose-img:border-4 prose-img:border-slate-50 max-w-none shadow-none">
          <PostContent />
        </section>

        {/* Dynamic CTA Section - การนำเสนอความเชื่อมั่นเชิงเทคนิค */}
        <footer className="mt-28">
          <div className="relative overflow-hidden rounded-[4rem] border border-white/5 bg-slate-950 p-12 text-center shadow-2xl md:p-20">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-indigo-600/10 blur-[100px]" />

            <div className="relative z-10">
              <h3 className="mb-8 text-3xl leading-tight font-black text-white italic md:text-5xl">
                อยากเปลี่ยนเว็บไซต์ให้เป็น <br />
                <span className="text-blue-400">
                  "สินทรัพย์ดิจิทัลที่ยั่งยืน"
                </span>{" "}
                ไหมครับ?
              </h3>
              <p className="mx-auto mb-12 max-w-2xl text-lg font-medium text-slate-400">
                ผมยินดีให้คำปรึกษาเรื่องการวางโครงสร้างระบบ SEO และเทคโนโลยี
                Next.js เพื่อให้ธุรกิจท่านเติบโตอย่างมั่นคงบนหน้าแรก Google
              </p>
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                <Button
                  className="h-16 w-full rounded-full bg-blue-600 px-12 text-xl font-black shadow-xl shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 md:w-auto"
                  asChild
                >
                  <Link href="/contact">ปรึกษาการวางโครงสร้างระบบฟรี</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="h-16 w-full rounded-full text-xl font-black text-white hover:bg-white/10 md:w-auto"
                  asChild
                >
                  <Link href="/blog">
                    <ArrowLeft className="mr-2 h-5 w-5" /> อ่านเนื้อหาอื่น
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </Container>
    </article>
  );
}

/**
 * Static Generation
 * บังคับการสร้างหน้า Static เพื่อความเร็วสูงสุดและประสิทธิภาพด้าน SEO
 */
export async function generateStaticParams() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(".mdx", ""),
    }));
}
