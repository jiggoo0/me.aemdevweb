/** @format */

import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ShieldCheck, 
  Cpu, 
  Search, 
  Share2,
  Code2
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AEM-DEV Identity Hub | Case Study: Web Architecture",
  description: "เจาะลึกการวางรากฐาน Digital Identity ด้วย Next.js 16 และ Advanced Schema เพื่อสร้างความน่าเชื่อถือให้กับ Entity บน Search Engine",
};

export default function AemDevPage() {
  const techStack = [
    { label: "Architecture", value: "Next.js 16 (App Router)", icon: <Cpu className="h-4 w-4" /> },
    { label: "Logic", value: "TypeScript (Strict Mode)", icon: <Code2 className="h-4 w-4" /> },
    { label: "Data Model", value: "JSON-LD / Schema.org", icon: <Search className="h-4 w-4" /> },
  ];

  return (
    <main className="min-h-screen bg-white pb-32">
      <Container className="pt-24">
        {/* Navigation Section */}
        <Link 
          href="/projects" 
          className="group mb-12 inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase transition-colors hover:text-blue-600"
        >
          <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>

        {/* Hero Section: แกนกลางของระบบตัวตนดิจิทัล */}
        <header className="mb-24 space-y-8">
          <div className="flex items-center gap-3">
             <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
             <span className="text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase">
                Identity Infrastructure
             </span>
          </div>
          <h1 className="text-6xl font-black tracking-tighter text-slate-900 md:text-8xl leading-[0.9]">
            AEM-DEV <br />
            <span className="text-blue-600 italic">Identity Hub.</span>
          </h1>
          <p className="max-w-3xl text-xl font-medium leading-relaxed text-slate-500 md:text-2xl">
            การสร้างศูนย์กลางตัวตนที่มีประสิทธิภาพสูง เน้นการออกแบบโครงสร้าง Code 
            เพื่อให้ Google เข้าใจความเชื่อมโยงของข้อมูลในระดับ Entity บุคคลและองค์กรอย่างแม่นยำ
          </p>
        </header>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
          <div className="space-y-20 lg:col-span-8">
            {/* Visual Showcase: แสดงโครงสร้างเว็บ */}
            <div className="relative aspect-video overflow-hidden rounded-[4rem] bg-slate-100 shadow-2xl">
              <Image 
                src="/images/service/aemdevweb.webp" 
                alt="AEM-DEV Web Architecture Layout" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority 
              />
            </div>

            {/* Deep Detail Section */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-black tracking-tight text-slate-900 uppercase italic">
                   System Philosophy
                </h2>
                <p className="text-lg leading-relaxed font-medium text-slate-600">
                  โจทย์หลักของโปรเจกต์นี้คือการทำ 
                  <span className="text-slate-900 font-bold underline decoration-blue-600 decoration-4 underline-offset-4"> Knowledge Base </span> 
                  ที่ให้ความสำคัญกับความเร็ว (LCP) และความถูกต้องของข้อมูล (Data Integrity) 
                  โดยใช้เทคนิคการกระจาย Components แบบอะตอมเพื่อให้ง่ายต่อการขยายระบบในระยะยาว
                </p>
              </div>

              {/* Feature Cards: จุดแข็งเชิงเทคนิค */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-[2.5rem] border border-slate-100 p-10 transition-all hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-900/5">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Search size={24} />
                  </div>
                  <h4 className="mb-3 font-black text-slate-900 uppercase tracking-widest text-xs">Entity Recognition</h4>
                  <p className="text-sm leading-relaxed text-slate-500 font-medium">
                    ฝังโครงสร้าง JSON-LD ขั้นสูงเพื่อยืนยันตัวตนเจ้าของเว็บไซต์ 
                    และเชื่อมโยงเครือข่ายข้อมูลเข้ากับ Search Engine โดยตรงผ่าน Schema.org
                  </p>
                </div>

                <div className="rounded-[2.5rem] border border-slate-100 p-10 transition-all hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-900/5">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Share2 size={24} />
                  </div>
                  <h4 className="mb-3 font-black text-slate-900 uppercase tracking-widest text-xs">RSC & Performance</h4>
                  <p className="text-sm leading-relaxed text-slate-500 font-medium">
                    ใช้ขีดความสามารถของ Server Components ใน Next.js 16 เพื่อลดภาระการรัน JS ฝั่ง Client 
                    ส่งผลให้คะแนน Core Web Vitals อยู่ในเกณฑ์ดีเยี่ยม
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar: Technical Specifications */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="rounded-[3rem] bg-slate-50 p-12 border border-slate-100">
                <h3 className="mb-10 text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">
                   Technical Stack
                </h3>
                <div className="space-y-8">
                  {techStack.map((tech) => (
                    <div key={tech.label} className="space-y-3">
                      <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-blue-600 uppercase">
                        {tech.icon} {tech.label}
                      </div>
                      <p className="text-lg font-black text-slate-900 leading-none">{tech.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[3rem] bg-slate-950 p-12 text-center text-white shadow-2xl">
                <ShieldCheck className="mx-auto mb-6 h-12 w-12 text-blue-500" />
                <h3 className="mb-4 text-xl font-black uppercase tracking-tight">Verified</h3>
                <p className="text-[11px] font-bold leading-relaxed text-slate-400 uppercase tracking-[0.2em]">
                   Google Rich Results <br /> Passed 100%
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
