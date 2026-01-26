/** @format */

import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Hero from "@/components/profile/Hero";
import Schema from "@/components/profile/Schema";

export const metadata: Metadata = {
  title: "เกี่ยวกับผม | Alongkorl Yomkerd (AEMDEVWEB)",
  description:
    "รู้จักกับ อลงกรณ์ ยมเกิด นักพัฒนาเว็บไซต์ที่เชี่ยวชาญด้าน Technical SEO และ Web Structure เน้นประสิทธิภาพและการเติบโตอย่างยั่งยืน",
  alternates: {
    canonical: "https://me.aemdevweb.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="flex-grow">
      {/* 1. Identity Verification: ยืนยันตัวตนกับ Search Engine ผ่าน Schema */}
      <Schema />

      {/* 2. Brand Identity: ส่วนแนะนำตัวหลักที่ดึงค่าจากระบบจัดการข้อมูล */}
      <Hero />

      {/* 3. Content Section: ข้อมูลรายละเอียดแนวทางการทำงาน */}
      <Container className="py-16">
        <article className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-20">
          {/* ส่วนเนื้อหาหลัก */}
          <div className="md:col-span-8">
            <div className="space-y-12">
              <section>
                <h2 className="mb-6 text-3xl font-black tracking-tighter text-slate-900">
                  แนวทางการทำงาน
                </h2>
                <div className="space-y-4 text-lg leading-relaxed font-medium text-slate-600">
                  <p>
                    ผมชื่อ{" "}
                    <span className="text-slate-900 font-bold">
                      อลงกรณ์ ยมเกิด
                    </span>{" "}
                    หรือที่รู้จักในชื่อ{" "}
                    <span className="text-blue-600 font-bold">AEMDEVWEB</span>
                  </p>
                  <p>
                    ผมให้ความสำคัญกับการสร้างเว็บไซต์ที่มีประสิทธิภาพสูง
                    ไม่ใช่เพียงแค่ความสวยงามภายนอก
                    แต่ต้องมีโครงสร้างระบบที่แข็งแรงเพื่อให้ Search Engine
                    เข้าถึงและเข้าใจเนื้อหาได้ดีที่สุด
                  </p>
                </div>
              </section>

              <section>
                <h3 className="mb-6 text-xl font-black tracking-tight text-slate-900">
                  ความเชี่ยวชาญหลัก
                </h3>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    "วางโครงสร้างเว็บไซต์ตามหลัก SEO",
                    "พัฒนาด้วย Next.js และ React ประสิทธิภาพสูง",
                    "ปรับแต่ง Core Web Vitals และ Performance",
                    "Technical SEO สำหรับธุรกิจ SME",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 rounded-2xl border border-slate-100 p-4 text-slate-600 font-medium transition-colors hover:bg-slate-50"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* ส่วนข้อมูลเสริมด้านข้าง (Sidebar) */}
          <aside className="md:col-span-4">
            <div className="sticky top-28 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 p-8 lg:p-10">
              <h3 className="mb-6 text-sm font-black tracking-[0.2em] text-slate-900 uppercase">
                Project Highlights
              </h3>
              <p className="mb-8 text-xs font-bold leading-relaxed text-slate-500">
                ผลงานที่สะท้อนทักษะด้านการจัดการ Technical และ Performance
                ระดับสูง
              </p>

              <ul className="space-y-4">
                {["Unlink-th", "AEMDEVWEB"].map((project) => (
                  <li
                    key={project}
                    className="flex items-center gap-3 text-base font-black text-slate-900"
                  >
                    <div className="h-1.5 w-4 rounded-full bg-blue-600" />
                    {project}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </article>
      </Container>
    </main>
  );
}
