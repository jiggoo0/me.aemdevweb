/** @format */

import { Metadata } from "next";
import Container from "@/components/layout/Container";
import SocialLinks from "@/components/shared/SocialLinks";
import { siteConfig } from "@/constants/site-config";
import { Mail, MessageCircle, ShieldCheck, UserCheck } from "lucide-react";

/**
 * Technical SEO & Project Consultation Metadata
 * ยุทธศาสตร์: สร้างความมั่นใจและระบุตัวตนผู้เชี่ยวชาญอย่างชัดเจน
 */
export const metadata: Metadata = {
  title: "ติดต่อพูดคุยและปรึกษาโปรเจกต์ | อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)",
  description:
    "เริ่มต้นโปรเจกต์ Next.js หรือปรึกษาการวางโครงสร้าง Technical SEO เพื่อสร้างสินทรัพย์ดิจิทัลที่เติบโตได้อย่างยั่งยืนสำหรับธุรกิจของคุณ",
  alternates: {
    canonical: "https://me.aemdevweb.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pb-32 selection:bg-blue-600/10">
      {/* 1. Hero Section: ส่วนต้อนรับและแสดงความพร้อมของระบบ */}
      <section className="border-b border-slate-100 bg-slate-50 py-32">
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-1.5 text-[10px] font-black tracking-[0.3em] text-white uppercase shadow-lg shadow-blue-600/20">
              <ShieldCheck className="h-3.5 w-3.5" /> Project Availability
            </div>
            <h1 className="font-heading text-6xl leading-[0.9] font-black tracking-tighter text-slate-950 md:text-8xl">
              Let&apos;s Build <br />
              <span className="text-blue-600 italic">Something Real.</span>
            </h1>
            <p className="font-body max-w-2xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              พร้อมให้คำปรึกษาเรื่องการวางระบบเว็บไซต์และกลยุทธ์ Technical SEO
              เพื่อให้เว็บไซต์ของคุณทำงานได้อย่างเต็มประสิทธิภาพและสร้างผลลัพธ์จริง
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Communication Channels: ช่องทางการสื่อสารโดยตรง */}
      <Container className="pt-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="space-y-16 lg:col-span-7">
            <section className="space-y-10">
              <h2 className="font-heading text-[11px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
                Direct Communication
              </h2>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Email Contact */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex flex-col gap-6 rounded-[3rem] border border-slate-100 bg-white p-10 transition-all hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-900/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                      E-Mail Address
                    </h3>
                    <p className="text-lg leading-tight font-black break-all text-slate-950 transition-colors group-hover:text-blue-600">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>

                {/* LINE Official Contact */}
                <a
                  href={siteConfig.contact.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-6 rounded-[3rem] border border-slate-100 bg-white p-10 transition-all hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-900/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                      Official LINE
                    </h3>
                    <p className="text-lg leading-tight font-black text-slate-950 transition-colors group-hover:text-blue-600">
                      Business Chat
                    </p>
                  </div>
                </a>

                {/* Direct Personal Contact */}
                <a
                  href={siteConfig.contact.linePersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-6 rounded-[3rem] border border-slate-100 bg-slate-50/30 p-10 transition-all hover:border-blue-600 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 sm:col-span-2"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-100 bg-white text-blue-600 transition-all group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                      <UserCheck size={24} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                        Direct Line
                      </h3>
                      <p className="text-lg leading-tight font-black text-slate-950">
                        ติดต่อสอบถามข้อมูลเร่งด่วน
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </section>

            <section className="space-y-10">
              <h2 className="font-heading text-[11px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
                Social Presence
              </h2>
              <SocialLinks className="flex-col gap-8 sm:flex-row" />
            </section>
          </div>

          {/* Sidebar: Work Philosophy & Process */}
          <aside className="lg:col-span-5">
            <div className="sticky top-32 rounded-[4rem] bg-slate-950 p-12 text-white shadow-2xl shadow-blue-900/10">
              <h3 className="font-heading mb-10 text-2xl font-black tracking-tight uppercase italic">
                Our <span className="text-blue-600">Approach.</span>
              </h3>
              <ul className="space-y-12">
                {[
                  {
                    title: "Review & Analysis",
                    desc: "ตรวจสอบโครงสร้างปัจจุบันเพื่อหาจุดที่ต้องปรับเปลี่ยนให้ชัดเจน",
                  },
                  {
                    title: "System Architecture",
                    desc: "วางระบบข้อมูลและโครงสร้างเว็บให้สอดคล้องกับมาตรฐาน Google",
                  },
                  {
                    title: "High-Speed Execution",
                    desc: "พัฒนาด้วย Next.js ที่เน้นความรวดเร็วและความเสถียรสูงสุด",
                  },
                ].map((step, i) => (
                  <li key={i} className="group flex gap-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-800 text-[10px] font-black text-blue-500 transition-all group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                      0{i + 1}
                    </span>
                    <div className="space-y-2">
                      <h4 className="font-heading text-xs font-black tracking-[0.1em] text-slate-100 uppercase italic">
                        {step.title}
                      </h4>
                      <p className="font-body text-sm leading-relaxed font-bold text-slate-500">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-16 border-t border-slate-900 pt-10">
                <div className="flex items-center justify-between text-[10px] font-black tracking-[0.3em] text-slate-600 uppercase">
                  <span>Specialist Support</span>
                  <div className="flex gap-1.5">
                    <div className="h-1 w-4 rounded-full bg-blue-600" />
                    <div className="h-1 w-1 rounded-full bg-slate-800" />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}

/**
 * ออกแบบและวางระบบการติดต่อโดย: นายเอ็มซ่ามากส์
 */
