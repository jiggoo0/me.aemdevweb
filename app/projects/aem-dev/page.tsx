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
  Code2,
} from "lucide-react";
import { Metadata } from "next";

/**
 * AEM-DEV Case Study Strategy
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การแสดงศักยภาพของระบบ Identity Hub และโครงสร้างข้อมูลเชิงลึก
 * เป้าหมาย: สร้างความน่าเชื่อถือผ่านความเร็วและการจัดการพิกัด Entity ที่ถูกต้อง
 * ควบคุมมาตรฐานโดย: นายเอ็มซ่ามากส์
 */

export const metadata: Metadata = {
  title: "เจาะลึกระบบ AEM-DEV Identity Hub | อลงกรณ์ ยมเกิด",
  description:
    "รายละเอียดการวางระบบตัวตนดิจิทัลด้วย Next.js 16 และ Schema ขั้นสูง เพื่อสร้างพิกัดความน่าเชื่อถือให้กับตัวตนบนระบบการค้นหาอย่างยั่งยืน",
};

export default function AemDevPage() {
  const techStack = [
    {
      label: "Architecture",
      value: "Next.js 16 (App Router)",
      icon: <Cpu className="h-4 w-4" />,
    },
    {
      label: "Logic",
      value: "TypeScript (Strict Mode)",
      icon: <Code2 className="h-4 w-4" />,
    },
    {
      label: "Data Model",
      value: "JSON-LD / Schema.org",
      icon: <Search className="h-4 w-4" />,
    },
  ];

  return (
    <main className="min-h-screen bg-white pb-32 selection:bg-blue-600/10">
      <Container className="pt-24">
        {/* Navigation: จุดเชื่อมต่อกลับสู่พอร์ตโฟลิโอ */}
        <Link
          href="/projects"
          className="group mb-12 inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase transition-colors hover:text-blue-600"
        >
          <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
          กลับไปดูผลงานทั้งหมด
        </Link>

        {/* Hero Section: หัวใจสำคัญของระบบตัวตนดิจิทัล */}
        <header className="mb-24 space-y-8">
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
            <span className="font-heading text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase italic">
              Identity Infrastructure
            </span>
          </div>
          <h1 className="font-heading text-6xl leading-[0.9] font-black tracking-tighter text-slate-950 md:text-8xl">
            AEM-DEV <br />
            <span className="text-blue-600 italic">Identity Hub.</span>
          </h1>
          <p className="font-body max-w-3xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
            การวางระบบตัวตนดิจิทัลที่เน้นประสิทธิภาพและความแม่นยำ
            ออกแบบสถาปัตยกรรมโค้ด
            เพื่อให้ระบบการค้นหาเข้าใจความเชื่อมโยงของข้อมูลในระดับบุคคลและองค์กรอย่างสมบูรณ์แบบ
          </p>
        </header>

        {/* Main Content Layout: พิกัดรายละเอียดเชิงลึก */}
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
          <div className="space-y-20 lg:col-span-8">
            {/* Visual Showcase: แสดงเลเยอร์การออกแบบระบบ */}
            <div className="relative aspect-video overflow-hidden rounded-[4rem] bg-slate-100 shadow-2xl shadow-blue-900/5">
              <Image
                src="/images/service/aemdevweb.webp"
                alt="AEM-DEV Web Architecture Layout"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                priority
              />
            </div>

            {/* Content Detail: ปรัชญาการออกแบบและจัดการข้อมูล */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h2 className="font-heading text-3xl font-black tracking-tight text-slate-950 uppercase italic">
                  System Strategy
                </h2>
                <p className="font-body text-lg leading-relaxed font-bold text-slate-600">
                  โจทย์สำคัญของโปรเจกต์นี้คือการทำ
                  <span className="mx-1 font-black text-slate-950 underline decoration-blue-600 decoration-4 underline-offset-8">
                    {" "}
                    Knowledge Base{" "}
                  </span>
                  ที่ให้ความสำคัญกับความเร็วในการแสดงผลและการรักษาคุณภาพของข้อมูล
                  โดยใช้การออกแบบส่วนประกอบแบบแยกส่วน
                  เพื่อความยืดหยุ่นในการจัดการระบบในอนาคต
                </p>
              </div>

              {/* Feature Cards: พิกัดความโดดเด่นเชิงระบบ */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="group rounded-[3rem] border border-slate-100 bg-white p-10 transition-all hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-900/5">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Search size={28} />
                  </div>
                  <h4 className="font-heading mb-4 text-xs font-black tracking-widest text-slate-950 uppercase italic">
                    Entity Recognition
                  </h4>
                  <p className="font-body text-sm leading-relaxed font-bold text-slate-500">
                    ฝังโครงสร้างข้อมูลระดับลึกเพื่อยืนยันตัวตนเจ้าของเว็บไซต์
                    และเชื่อมโยงเครือข่ายข้อมูลเข้ากับระบบการค้นหาโดยตรงเพื่อให้เกิดความน่าเชื่อถือสูงสุด
                  </p>
                </div>

                <div className="group rounded-[3rem] border border-slate-100 bg-white p-10 transition-all hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-900/5">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Share2 size={28} />
                  </div>
                  <h4 className="font-heading mb-4 text-xs font-black tracking-widest text-slate-950 uppercase italic">
                    Performance Logic
                  </h4>
                  <p className="font-body text-sm leading-relaxed font-bold text-slate-500">
                    ใช้ขีดความสามารถของ Server Components
                    เพื่อลดภาระการทำงานของเบราว์เซอร์
                    ส่งผลให้ความเร็วและเสถียรภาพของเว็บไซต์อยู่ในระดับที่ยอดเยี่ยม
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar: รายละเอียดสเปกของระบบ */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="rounded-[3.5rem] border border-slate-100 bg-slate-50 p-12">
                <h3 className="font-heading mb-10 text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
                  Technical Stack
                </h3>
                <div className="space-y-10">
                  {techStack.map((tech) => (
                    <div key={tech.label} className="space-y-3">
                      <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-blue-600 uppercase">
                        {tech.icon} {tech.label}
                      </div>
                      <p className="font-heading text-lg leading-none font-black text-slate-950">
                        {tech.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Status: ป้ายกำกับมาตรฐานความเรียบร้อย */}
              <div className="rounded-[3.5rem] bg-slate-950 p-12 text-center text-white shadow-2xl shadow-blue-900/10">
                <ShieldCheck className="mx-auto mb-6 h-12 w-12 text-blue-500" />
                <h3 className="font-heading mb-4 text-xl font-black tracking-tight uppercase italic">
                  Verified
                </h3>
                <p className="font-heading text-[11px] leading-relaxed font-black tracking-[0.2em] text-slate-400 uppercase italic">
                  Search results & schema <br /> Passed 100%
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}

/**
 * ออกแบบระบบและจัดระเบียบโครงสร้างข้อมูลโดย: นายเอ็มซ่ามากส์
 */
