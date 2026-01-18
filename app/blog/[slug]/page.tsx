/** @format */
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  // ตรวจสอบว่าไฟล์มีอยู่จริงไหม
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  // อ่านเนื้อหาและ Metadata (Frontmatter)
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  // Import ไฟล์ MDX แบบ Dynamic เพื่อเรนเดอร์เนื้อหา
  const { default: PostContent } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <Container className="py-12 md:py-20 max-w-4xl">
      <Button variant="ghost" size="sm" asChild className="mb-10 hover:bg-blue-50 hover:text-blue-600">
        <Link href="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> กลับหน้าบล็อก</Link>
      </Button>

      <header className="mb-12 space-y-6">
        <h1 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 uppercase">
          {data.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-slate-400 uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-blue-500" />
            {data.date}
          </div>
          <div className="flex items-center gap-2">
            <User size={16} className="text-blue-500" />
            {data.author || "Alongkorl Yomkerd"}
          </div>
        </div>
      </header>

      {/* เนื้อหาหลักจากไฟล์ MDX */}
      <article className="prose prose-slate lg:prose-xl max-w-none prose-headings:font-black prose-headings:uppercase prose-a:text-blue-600">
        <PostContent />
      </article>

      <div className="mt-20 p-8 rounded-[2rem] bg-slate-900 text-white">
        <h3 className="text-xl font-bold mb-2">สนใจโซลูชันนี้?</h3>
        <p className="text-slate-400 mb-6 text-sm md:text-base">
          ปรึกษาการทำ Technical SEO หรือพัฒนาเว็บไซต์ด้วย Next.js 15 กับเราได้ฟรี
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-8" asChild>
          <Link href="/contact">ติดต่องาน / ปรึกษาฟรี</Link>
        </Button>
      </div>
    </Container>
  );
}

// สร้าง Static Paths เพื่อประสิทธิภาพสูงสุด (SEO)
export async function generateStaticParams() {
  const files = fs.readdirSync(BLOG_DIR);
  return files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}
