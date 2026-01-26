/** @format */

import { Metadata } from "next";
import Container from "@/components/layout/Container";
import SocialLinks from "@/components/shared/SocialLinks";
import { siteConfig } from "@/constants/site-config";
import { Mail, MessageCircle, ShieldCheck, UserCheck } from "lucide-react"; // ลบ ChevronRight ออก

export const metadata: Metadata = {
  title: "ติดต่อจ้างงานและปรึกษา | Alongkorl Yomkerd (AEMDEVWEB)",
  description:
    "พูดคุยเรื่องโปรเจกต์ Next.js หรือปรึกษาการวางรากฐาน Technical SEO เพื่อสร้าง Digital Asset ที่ยั่งยืนสำหรับธุรกิจของคุณ",
  alternates: {
    canonical: "https://me.aemdevweb.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pb-32">
      {/* 1. Hero Section: ประกาศความพร้อมและตัวตน */}
      <section className="bg-slate-50 py-32 border-b border-slate-100">
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-1.5 text-[10px] font-black tracking-[0.3em] text-white uppercase">
              <ShieldCheck className="h-3.5 w-3.5" /> Project Availability
            </div>
            <h1 className="text-6xl font-black tracking-tighter text-slate-900 md:text-8xl leading-[0.9]">
              Let&apos;s Build <br />
              <span className="text-blue-600 italic">Something Real.</span>
            </h1>
            <p className="max-w-2xl text-xl font-medium leading-relaxed text-slate-500 md:text-2xl">
              พร้อมให้คำปรึกษาด้านการออกแบบระบบและกลยุทธ์ Technical SEO 
              เปลี่ยนเว็บไซต์ให้เป็นเครื่องมือที่สร้างผลลัพธ์ทางธุรกิจอย่างยั่งยืน
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Communication Channels & Work Process */}
      <Container className="pt-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          
          {/* Direct Communication */}
          <div className="space-y-16 lg:col-span-7">
            <section className="space-y-10">
              <h2 className="text-[11px] font-black tracking-[0.4em] text-slate-400 uppercase">
                Direct Channels
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
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">E-Mail Address</h3>
                    <p className="text-lg font-black text-slate-900 break-all leading-tight">{siteConfig.email}</p>
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
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Official LINE</h3>
                    <p className="text-lg font-black text-slate-900 leading-tight">Business Chat</p>
                  </div>
                </a>

                {/* LINE Personal Contact (Optional/Added for complete access) */}
                <a 
                  href={siteConfig.contact.linePersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-6 rounded-[3rem] border border-slate-100 bg-slate-50/30 p-10 transition-all hover:border-blue-600 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 sm:col-span-2"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                      <UserCheck size={24} />
                    </div>
                    <div>
                      <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Direct Line</h3>
                      <p className="text-lg font-black text-slate-900 leading-tight">ติดต่อด่วนส่วนตัว</p>
                    </div>
                  </div>
                </a>
              </div>
            </section>

            <section className="space-y-10">
              <h2 className="text-[11px] font-black tracking-[0.4em] text-slate-400 uppercase">
                Digital Identity
              </h2>
              <SocialLinks className="flex-col sm:flex-row gap-8" />
            </section>
          </div>

          {/* Sidebar: Work Methodology */}
          <aside className="lg:col-span-5">
            <div className="sticky top-32 rounded-[4rem] bg-slate-950 p-12 text-white shadow-2xl">
              <h3 className="text-2xl font-black tracking-tight mb-10 uppercase italic">Our Process</h3>
              <ul className="space-y-12">
                {[
                  { title: "Audit & Insight", desc: "วิเคราะห์โครงสร้างเดิมและมองหาจุดที่ควรปรับปรุงให้ชัดเจน" },
                  { title: "Strategic Architecture", desc: "วางโครงสร้างระบบและข้อมูลให้สอดคล้องกับมาตรฐาน Google" },
                  { title: "Precision Execution", desc: "พัฒนาด้วย Next.js เน้นความเนี้ยบและเร็วระดับสูงสุด" }
                ].map((step, i) => (
                  <li key={i} className="group flex gap-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-800 text-[10px] font-black text-blue-500 transition-colors group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                      0{i + 1}
                    </span>
                    <div className="space-y-2">
                      <h4 className="font-black text-slate-100 uppercase text-xs tracking-[0.1em]">{step.title}</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-16 pt-10 border-t border-slate-900">
                <div className="flex items-center justify-between text-[10px] font-black tracking-[0.3em] text-slate-600 uppercase">
                  <span>Specialist Hub v2</span>
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
