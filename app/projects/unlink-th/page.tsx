/** @format */

import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ShieldCheck, 
  Zap, 
  Globe, 
  BarChart3, 
  Layers,
  ExternalLink
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unlink-th Platform Case Study | Core Infrastructure",
  description: "เจาะลึกการสร้างระบบตรวจสอบข้อมูลระดับประเทศที่เน้นความเร็วระดับ 100/100 และการวาง SEO Architecture ขั้นสูงเพื่อผลลัพธ์บน Search Engine",
};

export default function UnlinkThPage() {
  const metrics = [
    { label: "Performance", value: "100/100", icon: <Zap size={18} className="text-yellow-500" /> },
    { label: "Indexing", value: "Real-time", icon: <Globe size={18} className="text-blue-500" /> },
    { label: "Reliability", value: "Enterprise", icon: <ShieldCheck size={18} className="text-green-500" /> },
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
          Back to Projects
        </Link>

        {/* Hero Section: หัวใจของความสำเร็จ */}
        <header className="mb-24 space-y-8">
          <div className="flex items-center gap-3">
             <div className="h-1.5 w-6 rounded-full bg-blue-600" />
             <span className="text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase">
                Case Study: Flagship Project
             </span>
          </div>
          <h1 className="text-6xl font-black tracking-tighter text-slate-900 md:text-8xl leading-[0.9]">
            Unlink-th <br />
            <span className="text-blue-600 italic">Core Foundation.</span>
          </h1>
          <p className="max-w-3xl text-xl font-medium leading-relaxed text-slate-500 md:text-2xl">
            การวางรากฐานระบบตรวจสอบระดับประเทศที่ต้องรองรับ Traffic ปริมาณมหาศาล 
            พร้อมรักษาความเร็วระดับสูงสุดและโครงสร้างข้อมูลที่ถูกต้องแม่นยำ 100%
          </p>
        </header>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
          <div className="space-y-20 lg:col-span-8">
            {/* Visual Proof: Lighthouse Score 100 */}
            <div className="relative aspect-video overflow-hidden rounded-[4rem] bg-slate-100 shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
              <Image 
                src="/images/case/case100.webp" 
                alt="Unlink-th Performance Lighthouse Score 100" 
                fill 
                className="object-cover"
                priority 
              />
            </div>

            {/* Deep Technical Insight */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-black tracking-tight text-slate-900 uppercase italic">
                   Technical Approach
                </h2>
                <p className="text-lg leading-relaxed font-medium text-slate-600">
                  Unlink-th ไม่ได้เป็นเพียงแค่เว็บไซต์ แต่เป็นฐานข้อมูลที่ต้องทำให้ Google 
                  เข้าถึงและจัดอันดับ (Indexing) เนื้อหาได้อย่างรวดเร็ว ผมจึงออกแบบโดยใช้ 
                  <span className="text-slate-900 font-bold underline decoration-blue-600 decoration-4 underline-offset-4"> Static Site Generation (SSG) </span> 
                  ร่วมกับการทำ SEO Architecture แบบเข้มข้นเพื่อให้ระบบมีประสิทธิภาพสูงสุด
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-[2.5rem] border border-slate-100 p-10 transition-all hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-900/5">
                  <BarChart3 className="mb-6 h-10 w-10 text-blue-600" />
                  <h4 className="mb-3 font-black text-slate-900 uppercase tracking-widest text-xs">Optimization</h4>
                  <p className="text-sm leading-relaxed text-slate-500 font-medium">
                    บีบอัด Asset และจัดการ Logic ทุกส่วนให้มีขนาดเล็กที่สุด เพื่อรองรับการเข้าถึงจากเครือข่ายมือถือทุกระดับ
                  </p>
                </div>
                <div className="rounded-[2.5rem] border border-slate-100 p-10 transition-all hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-900/5">
                  <Layers className="mb-6 h-10 w-10 text-blue-600" />
                  <h4 className="mb-3 font-black text-slate-900 uppercase tracking-widest text-xs">Architecture</h4>
                  <p className="text-sm leading-relaxed text-slate-500 font-medium">
                    จัดลำดับ Header Tags และ JSON-LD ให้สัมพันธ์กับข้อมูล เพื่อสร้าง Authority ในหน้าผลการค้นหา
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar: Performance Summary */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="rounded-[3rem] border border-slate-100 bg-white p-12">
                <h3 className="mb-10 text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">
                   Performance Metrics
                </h3>
                <div className="space-y-10">
                  {metrics.map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                         <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50">
                            {item.icon}
                         </div>
                         <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                      </div>
                      <span className="text-xl font-black text-slate-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar Action Card */}
              <div className="rounded-[3rem] bg-slate-950 p-12 text-white shadow-2xl">
                <h3 className="mb-4 text-2xl font-black tracking-tight">Project Live</h3>
                <p className="mb-10 text-sm font-medium leading-relaxed text-slate-500">
                  ตรวจสอบประสิทธิภาพการทำงานจริงบนสภาพแวดล้อม Production
                </p>
                <Link 
                  href="https://www.unlink-th.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 text-[11px] font-black tracking-[0.2em] uppercase transition-all hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Visit Website <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
