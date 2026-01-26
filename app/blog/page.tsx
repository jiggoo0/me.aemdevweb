/** @format */

import Container from "@/components/layout/Container";
import BlogCard from "@/components/shared/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "คลังความรู้เชิงเทคนิคและการวางระบบ SEO | AEMDEVWEB",
  description:
    "ถอดบทเรียนจากประสบการณ์จริงในการทำ Technical SEO และการออกแบบโครงสร้างเว็บไซต์เพื่อสร้างความได้เปรียบทางธุรกิจอย่างยั่งยืน",
  alternates: {
    canonical: "https://me.aemdevweb.com/blog",
  },
};

/**
 * Blog Listing Page
 * รวบรวมองค์ความรู้เชิงลึกในรูปแบบ Static Content เพื่อประสิทธิภาพสูงสุด
 */
export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-white pb-32">
      <Container className="pt-24">
        {/* Section Header: เน้นความหนักแน่นและ Specialist Identity */}
        <header className="mb-24 space-y-8">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-12 bg-blue-600" />
            <span className="text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase">
              Technical Knowledge Base
            </span>
          </div>
          
          <div className="max-w-4xl space-y-6">
            <h1 className="text-6xl font-black tracking-tighter text-slate-900 md:text-8xl leading-[0.9]">
              Identity <br />
              <span className="text-blue-600 italic">Insights.</span>
            </h1>
            <p className="max-w-2xl text-xl font-medium leading-relaxed text-slate-500 md:text-2xl">
              การตกผลึกทางความคิดเกี่ยวกับการวางโครงสร้างระบบ (Web Structure) 
              และกลยุทธ์การทำ SEO ที่เปลี่ยนเว็บไซต์ให้เป็นสินทรัพย์ดิจิทัลที่มีมูลค่าจริง
            </p>
          </div>
        </header>

        {/* Blog Grid Content */}
        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                image={post.image}
                tags={post.tags}
              />
            ))}
          </div>
        ) : (
          /* Professional Empty State */
          <div className="flex flex-col items-center justify-center rounded-[4rem] bg-slate-50 py-32 text-center border border-slate-100">
            <div className="relative mb-8 h-1 w-24 overflow-hidden rounded-full bg-slate-200">
              <div className="absolute inset-0 h-full w-1/2 animate-[shimmer_2s_infinite] bg-blue-600" />
            </div>
            <p className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase mb-3">
              Content Pipeline
            </p>
            <h3 className="text-2xl font-black text-slate-900">
              กำลังจัดลำดับเนื้อหาใหม่...
            </h3>
          </div>
        )}
      </Container>
    </main>
  );
}
