/** @format */

import { getAllPosts } from "@/lib/blog";
import Container from "@/components/layout/Container";
import BlogCard from "@/components/shared/BlogCard";
import { Globe, BookOpen, Sparkles, TrendingUp, Search } from "lucide-react";

/**
 * Metadata สำหรับหน้ารายการบล็อก (SEO Strategic)
 * ปรับปรุงเพื่อดึงดูดกลุ่ม SME ที่ต้องการจัดการโครงสร้างระบบเพื่อการทำอันดับ Google
 */
export const metadata = {
  title:
    "คลังความรู้โครงสร้างระบบเว็บ และ SEO Organic สำหรับ SME | นายเอ็มซ่ามากส์",
  description:
    "แบ่งปันกลยุทธ์การจัดการเว็บไซต์ให้เป็นสินทรัพย์ และเทคนิค SEO Organic จากประสบการณ์จริง โดย นายอลงกรณ์ ยมเกิด (AEMDEVWEB)",
};

export default function BlogListPage() {
  /**
   * ดึงข้อมูลบทความทั้งหมดจาก content/blog/*.mdx ผ่าน lib/blog.ts
   */
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white">
      <Container className="py-20 md:py-32">
        {/* Header Section - การนำเสนอแนวคิดและการจัดการเชิงเทคนิค */}
        <header className="mb-24 flex flex-col items-center space-y-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-6 py-2 text-xs font-black tracking-[0.2em] text-blue-600 uppercase shadow-sm">
            <Sparkles className="h-4 w-4" /> Organic Search Insights
          </div>

          <h1 className="text-5xl leading-[1.1] font-black tracking-tight text-slate-900 md:text-7xl lg:text-8xl">
            คลังความรู้ระบบ <br className="hidden sm:block" />
            และ <span className="text-blue-600">SEO Organic</span>
          </h1>

          <p className="max-w-3xl text-xl leading-relaxed font-medium text-slate-500 md:text-2xl md:leading-10">
            รวบรวมประสบการณ์จากการจัดการโครงสร้างระบบและการวิเคราะห์อัลกอริทึม
            Google
            เพื่อเป็นแนวทางให้ธุรกิจเติบโตอย่างยั่งยืนโดยมุ่งเน้นที่คุณภาพของเนื้อหา
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm font-black tracking-widest text-slate-400 uppercase">
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-blue-500" />
              <span>Conversion Focus</span>
            </div>
            <div className="flex items-center gap-2">
              <Search size={16} className="text-blue-500" />
              <span>Technical SEO</span>
            </div>
          </div>
        </header>

        {/* Blog Grid Section - แสดงรายการบทความเชิงลึก */}
        <section>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  description={post.description}
                  image={post.image}
                  date={post.date}
                  author={post.author || "นายอลงกรณ์ ยมเกิด"}
                  slug={post.slug}
                  tags={post.tags}
                />
              ))}
            </div>
          ) : (
            /* Empty State - กรณีอยู่ระหว่างการจัดการเนื้อหาใหม่ */
            <div className="group rounded-[4rem] border-4 border-dashed border-slate-100 bg-slate-50/50 py-32 text-center transition-all hover:border-blue-100">
              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white shadow-2xl shadow-slate-200/50 transition-transform group-hover:scale-110 group-hover:rotate-3">
                <BookOpen className="h-12 w-12 text-slate-300" />
              </div>
              <h3 className="text-xl font-black tracking-[0.3em] text-slate-400 uppercase">
                คลังข้อมูลกำลังได้รับการอัปเดต
              </h3>
              <p className="mt-4 text-lg font-medium text-slate-400">
                เนื้อหาเชิงเทคนิคชุดใหม่กำลังได้รับการเรียบเรียง
                สามารถติดต่อสอบถามข้อมูลเบื้องต้นได้โดยตรง
              </p>
            </div>
          )}
        </section>

        {/* Bottom Footer Section - การยืนยันเป้าหมายและมาตรฐานการทำงาน */}
        <footer className="mt-40 border-t border-slate-100 pt-20">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-4 text-sm font-black tracking-[0.2em] text-slate-400 uppercase">
              <Globe className="h-5 w-5 text-blue-500" />
              <span>การสร้างสินทรัพย์ดิจิทัลที่ยั่งยืนสำหรับ SME</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden h-px w-20 bg-slate-100 lg:block" />
              <span className="text-xs font-bold tracking-widest text-slate-300 uppercase italic">
                AEMDEVWEB Specialist Services
              </span>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
}
