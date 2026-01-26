/** @format */

import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import { MDXRemote } from "next-mdx-remote/rsc";
// ลบ import useMDXComponents ออก เพราะ RSC ไม่ต้องการ Hook นี้
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Share2 } from "lucide-react";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Insights by Alongkorl`,
    description: post.description,
    alternates: {
      canonical: `https://me.aemdevweb.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  // ลบ const components = useMDXComponents({}); ออก

  return (
    <article className="min-h-screen bg-white pb-32">
      <header className="bg-slate-50 border-b border-slate-100 py-24">
        <Container>
          <Link 
            href="/blog" 
            className="group mb-12 inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase transition-colors hover:text-blue-600"
          >
            <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
            Back to Insights
          </Link>
          
          <div className="max-w-4xl space-y-8">
            <h1 className="text-4xl font-black tracking-tighter text-slate-900 md:text-7xl leading-[0.95]">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 text-[11px] font-black tracking-widest text-slate-400 uppercase">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-blue-600" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Tag size={14} className="text-blue-600" />
                {post.tags.join(", ")}
              </div>
            </div>
          </div>
        </Container>
      </header>

      <Container className="pt-20">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
          <main className="lg:col-span-8">
            <div className="relative mb-16 aspect-[16/9] overflow-hidden rounded-[3.5rem] bg-slate-100 shadow-2xl">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover"
                priority 
              />
            </div>
            
            <div className="mdx-content">
              {/* ส่งแค่ source เข้าไป MDX จะจัดการ Components ตามที่เราลงทะเบียนไว้ใน mdx-components.tsx เอง */}
              <MDXRemote source={post.content} />
            </div>
          </main>

          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="rounded-[3rem] bg-slate-950 p-12 text-white shadow-2xl border border-white/5">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600">
                  <Share2 className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-2xl font-black tracking-tight leading-tight">Technical SEO <br /> Consulting</h3>
                <p className="mb-8 text-sm font-medium leading-relaxed text-slate-400">
                  หากคุณต้องการเปลี่ยนเว็บไซต์ให้กลายเป็นสินทรัพย์ดิจิทัลที่สร้างผลลัพธ์จริง ปรึกษาผมเพื่อวางโครงสร้างที่ถูกต้องได้ทันที
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex h-14 w-full items-center justify-center rounded-2xl bg-blue-600 text-[11px] font-black tracking-[0.2em] uppercase transition-all hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98]"
                >
                  เริ่มโปรเจกต์ของคุณ
                </Link>
              </div>

              <div className="rounded-[3rem] border border-slate-100 p-10 text-center bg-slate-50/50">
                <p className="text-[10px] font-black tracking-[0.3em] text-slate-300 uppercase">
                  Specialist Identity Hub
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
}
