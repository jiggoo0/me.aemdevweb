/** @format */

// ✅ ต้องเพิ่มบรรทัด Import นี้เข้ามาครับ
import { getAllPosts } from "@/lib/blog"; 
import Container from "@/components/layout/Container";
import BlogCard from "@/components/shared/BlogCard";
import { Globe, BookOpen, Sparkles } from "lucide-react";

/**
 * Metadata สำหรับหน้ารายการบล็อก (SEO)
 */
export const metadata = {
  title: "คลังความรู้เรื่องระบบ และ SEO Organic | นายเอ็มซ่ามากส์",
  description:
    "แบ่งปันประสบการณ์การปั้นระบบและกลยุทธ์ SEO Organic เพื่อช่วยให้ธุรกิจ SME เติบโตได้อย่างยั่งยืนบนโลกออนไลน์",
};

export default function BlogListPage() {
  /**
   * ดึงข้อมูลบทความทั้งหมด
   * ฟังก์ชันนี้ถูกเรียกมาจาก @/lib/blog.ts
   */
  const posts = getAllPosts();

  return (
    <Container className="py-16 md:py-28">
      {/* --- Header Section --- */}
      <div className="mb-20 flex flex-col items-center space-y-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 shadow-sm">
          <Sparkles className="h-3.5 w-3.5" /> Organic Search Insights
        </div>

        <h1 className="text-4xl font-black leading-[1.1] text-slate-900 md:text-6xl lg:text-7xl">
          คลังความรู้เรื่องระบบ <br className="hidden sm:block" />
          และ <span className="text-blue-600">SEO Organic</span>
        </h1>

        <p className="max-w-3xl text-lg font-medium leading-relaxed text-slate-500 sm:text-xl md:leading-9">
          ผมหยิบเอาประสบการณ์จากการปั้นระบบและการงัดข้อกับอัลกอริทึม Google
          <br className="hidden lg:block" />
          มากลั่นเป็นบทความที่ช่วยให้ธุรกิจของพี่เติบโตได้อย่างยั่งยืนโดยไม่ต้องพึ่งพาแต่ค่าแอด
        </p>
      </div>

      {/* --- Blog Grid Section --- */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
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
        <div className="group border-2 border-dashed border-slate-200 bg-slate-50/50 py-32 text-center transition-all hover:border-blue-200 rounded-[3.5rem]">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-xl shadow-slate-200/50 transition-transform group-hover:scale-110">
            <BookOpen className="h-10 w-10 text-slate-300" />
          </div>
          <h3 className="text-lg font-black uppercase tracking-[0.3em] text-slate-400">
            คลังวิชากำลังถูกอัปเดตเร็วๆ นี้
          </h3>
          <p className="mt-2 font-medium text-slate-400">
            ผมกำลังเตรียมเนื้อหาพรีเมียมไว้ให้พี่อยู่ครับ
          </p>
        </div>
      )}

      {/* --- Bottom Footer Section --- */}
      <div className="mt-32 border-t border-slate-100 pt-16 text-center">
        <div className="flex flex-col items-center justify-center gap-4 text-sm font-black uppercase tracking-[0.2em] text-slate-400 sm:flex-row">
          <Globe className="h-4 w-4 text-blue-500" />
          <span>มุ่งสร้าง Digital Asset ที่ยั่งยืนให้กับ SME ไทย</span>
        </div>
      </div>
    </Container>
  );
}
