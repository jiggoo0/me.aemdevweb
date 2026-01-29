/** @format */

import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Hero from "@/components/profile/Hero";
import Schema from "@/components/profile/Schema";

/**
 * AEMDEVWEB | About Page Protocol
 * -------------------------------------------------------------------------
 * จัดการและดูแลระบบโดย: นายเอ็มซ่ามากส์
 * เป้าหมาย: นำเสนอตัวตนและแนวคิดการทำระบบเว็บไซต์ที่เน้นผลลัพธ์จริง
 */

export const metadata: Metadata = {
  title: "ข้อมูลส่วนตัว | อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)",
  description:
    "ทำความรู้จัก อลงกรณ์ ยมเกิด ผู้เชี่ยวชาญด้านการวางโครงสร้างเว็บไซต์และ Technical SEO ที่เน้นความเร็วและเสถียรภาพเพื่อให้ธุรกิจเติบโตอย่างมั่นคง",
  alternates: {
    canonical: "https://me.aemdevweb.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="flex-grow selection:bg-blue-500/10">
      {/* 1. Identity Verification: ยืนยันข้อมูลตัวตนกับระบบค้นหาอย่างแม่นยำ */}
      <Schema />

      {/* 2. Brand Hero: ส่วนแนะนำตัวที่สะท้อนตัวตน นายเอ็มซ่ามากส์ */}
      <Hero />

      {/* 3. Content Section: เจาะลึกแนวคิดและการทำงาน */}
      <Container className="py-20">
        <article className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* ส่วนเนื้อหาหลัก: แนวคิดและปรัชญาการทำงาน */}
          <div className="md:col-span-8">
            <div className="space-y-16">
              <section>
                <h2 className="font-heading mb-8 text-4xl font-black tracking-tighter text-slate-950 uppercase italic">
                  แนวคิดการทำงาน
                </h2>
                <div className="space-y-6 text-xl leading-relaxed font-bold text-slate-600">
                  <p>
                    ผมชื่อ{" "}
                    <span className="text-slate-950 underline decoration-blue-500/30 underline-offset-8">
                      อลงกรณ์ ยมเกิด
                    </span>
                    หรือที่รู้จักในชื่อ{" "}
                    <span className="text-blue-600">นายเอ็มซ่ามากส์</span>{" "}
                    ผู้ดูแลโปรเจกต์ AEMDEVWEB
                  </p>
                  <p>
                    เป้าหมายของผมคือการสร้างเว็บไซต์ที่ตอบโจทย์ธุรกิจด้วยความเร็วและโครงสร้างที่ถูกต้อง
                    ผมไม่ได้มองแค่ความสวยงาม แต่เน้นการสร้างระบบที่ Search
                    Engine เข้าใจได้ง่ายที่สุด
                    เพื่อให้เว็บไซต์เป็นเครื่องมือที่ช่วยสร้างรายได้และขยายฐานลูกค้าได้อย่างแท้จริง
                  </p>
                </div>
              </section>

              <section className="rounded-[3rem] bg-slate-50 p-10">
                <h3 className="font-heading mb-8 text-2xl font-black tracking-tight text-slate-950 uppercase italic">
                  ทักษะและความเชี่ยวชาญ
                </h3>
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {[
                    "วางระบบโครงสร้างเว็บไซต์ตามหลัก SEO",
                    "พัฒนา Next.js และ React ประสิทธิภาพสูง",
                    "เพิ่มความเร็วและเสถียรภาพ (Web Vitals)",
                    "กลยุทธ์ Technical SEO สำหรับธุรกิจ SME",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:border-blue-500/20"
                    >
                      <div className="h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                      <span className="text-base font-black text-slate-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* ส่วนข้อมูลเสริมด้านข้าง: โปรเจกต์ที่ภาคภูมิใจ */}
          <aside className="md:col-span-4">
            <div className="sticky top-32 rounded-[3rem] border border-slate-100 bg-white p-10 text-center shadow-2xl shadow-slate-200/50">
              <h3 className="font-heading mb-8 text-xs font-black tracking-[0.3em] text-slate-400 uppercase italic">
                โปรเจกต์สำคัญ
              </h3>

              <div className="space-y-6">
                {["Unlink-th", "AEMDEVWEB"].map((project) => (
                  <div key={project} className="group">
                    <p className="font-heading text-2xl font-black text-slate-950 uppercase italic transition-colors group-hover:text-blue-600">
                      {project}
                    </p>
                    <div className="mx-auto mt-2 h-0.5 w-8 bg-slate-100 transition-all group-hover:w-16 group-hover:bg-blue-600" />
                  </div>
                ))}
              </div>

              <div className="mt-12 border-t border-slate-50 pt-8">
                <p className="font-heading text-[10px] font-black tracking-[0.4em] text-slate-300 uppercase italic">
                  Developed by นายเอ็มซ่ามากส์
                </p>
              </div>
            </div>
          </aside>
        </article>
      </Container>
    </main>
  );
}
