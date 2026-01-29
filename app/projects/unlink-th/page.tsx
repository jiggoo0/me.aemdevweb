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
  ExternalLink,
} from "lucide-react";
import { Metadata } from "next";

/**
 * Unlink-th Case Study Strategy
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: แสดงศักยภาพการจัดการระบบขนาดใหญ่ที่เน้นความเร็วและอันดับบน Google
 * เป้าหมาย: ยืนยันความสำเร็จผ่านตัวเลข Performance 100/100
 * ควบคุมคุณภาพโดย: นายเอ็มซ่ามากส์
 */

export const metadata: Metadata = {
  title: "เจาะลึกโปรเจกต์ Unlink-th | อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)",
  description:
    "รายละเอียดการจัดวางโครงสร้างระบบตรวจสอบข้อมูลที่เน้นความเร็วระดับสูงสุดและการทำ SEO Architecture เพื่อให้ได้ผลลัพธ์ที่ดีที่สุดบน Google",
};

export default function UnlinkThPage() {
  const metrics = [
    {
      label: "Performance",
      value: "100/100",
      icon: <Zap size={18} className="text-yellow-500" />,
    },
    {
      label: "Indexing",
      value: "Real-time",
      icon: <Globe size={18} className="text-blue-500" />,
    },
    {
      label: "Reliability",
      value: "Enterprise",
      icon: <ShieldCheck size={18} className="text-green-500" />,
    },
  ];

  return (
    <main className="min-h-screen bg-white pb-32 selection:bg-blue-600/10">
      <Container className="pt-24">
        {/* Navigation: พิกัดย้อนกลับ */}
        <Link
          href="/projects"
          className="group mb-12 inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase transition-colors hover:text-blue-600"
        >
          <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
          กลับไปที่หน้าผลงาน
        </Link>

        {/* Hero Section: ความสำเร็จของงานระบบหลัก */}
        <header className="mb-24 space-y-8">
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-6 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
            <span className="font-heading text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase italic">
              Flagship Project Insight
            </span>
          </div>
          <h1 className="font-heading text-6xl leading-[0.9] font-black tracking-tighter text-slate-950 md:text-8xl">
            Unlink-th <br />
            <span className="text-blue-600 italic">Core Foundation.</span>
          </h1>
          <p className="font-body max-w-3xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
            การจัดวางโครงสร้างระบบตรวจสอบข้อมูลที่ต้องรองรับผู้ใช้งานจำนวนมาก
            โดยยังคงรักษาความเร็วในการทำงานที่สมบูรณ์แบบและโครงสร้างข้อมูลที่แม่นยำที่สุด
          </p>
        </header>

        {/* Main Content Layout: รายละเอียดพิกัดเทคนิค */}
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
          <div className="space-y-20 lg:col-span-8">
            {/* Visual Proof: ผลลัพธ์เชิงประจักษ์ Performance 100 */}
            <div className="relative aspect-video overflow-hidden rounded-[4rem] bg-slate-100 shadow-2xl shadow-blue-900/5 transition-transform duration-700 hover:scale-[1.01]">
              <Image
                src="/images/case/case100.webp"
                alt="Unlink-th Performance Lighthouse Score 100"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Deep Technical Insight: เจาะลึกแนวคิดการจัดการ */}
            <section className="space-y-12">
              <div className="space-y-6">
                <h2 className="font-heading text-3xl font-black tracking-tight text-slate-950 uppercase italic">
                  Technical Approach
                </h2>
                <p className="font-body text-lg leading-relaxed font-bold text-slate-600">
                  Unlink-th ถูกออกแบบมาให้เป็นมากกว่าเว็บไซต์ทั่วไป
                  แต่เป็นระบบฐานข้อมูลที่ Google
                  ต้องสามารถเข้าถึงและจัดลำดับความสำคัญได้ทันที
                  ผมจึงเลือกใช้เทคนิค
                  <span className="mx-1 font-black text-slate-950 underline decoration-blue-600 decoration-4 underline-offset-8">
                    {" "}
                    Static Site Generation (SSG){" "}
                  </span>
                  ควบคู่ไปกับการทำโครงสร้างระบบ SEO
                  ที่เข้มข้นเพื่อให้ได้ประสิทธิภาพสูงสุด
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="group rounded-[3rem] border border-slate-100 bg-white p-10 transition-all hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-900/5">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <BarChart3 size={28} />
                  </div>
                  <h4 className="font-heading mb-4 text-xs font-black tracking-widest text-slate-950 uppercase italic">
                    Optimization
                  </h4>
                  <p className="font-body text-sm leading-relaxed font-bold text-slate-500">
                    จัดการทรัพยากรและชุดคำสั่งทุกส่วนให้มีความกระชับที่สุด
                    เพื่อรองรับการเข้าถึงที่รวดเร็วจากทุกอุปกรณ์และทุกเครือข่าย
                  </p>
                </div>
                <div className="group rounded-[3rem] border border-slate-100 bg-white p-10 transition-all hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-900/5">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Layers size={28} />
                  </div>
                  <h4 className="font-heading mb-4 text-xs font-black tracking-widest text-slate-950 uppercase italic">
                    System Design
                  </h4>
                  <p className="font-body text-sm leading-relaxed font-bold text-slate-500">
                    จัดลำดับชุดข้อมูลและโครงสร้างหลังบ้านให้สัมพันธ์กัน
                    เพื่อสร้างความน่าเชื่อถือในหน้าผลการค้นหาของ Search Engine
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar: สรุปผลลัพธ์ของระบบ */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="rounded-[3.5rem] border border-slate-100 bg-white p-12 shadow-sm">
                <h3 className="font-heading mb-10 text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
                  Performance Metrics
                </h3>
                <div className="space-y-10">
                  {metrics.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 transition-colors hover:bg-blue-50">
                          {item.icon}
                        </div>
                        <span className="font-heading text-[11px] font-black tracking-widest text-slate-400 uppercase italic">
                          {item.label}
                        </span>
                      </div>
                      <span className="font-heading text-xl font-black text-slate-950">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Card: พิกัดเข้าชมโปรเจกต์จริง */}
              <div className="rounded-[3.5rem] bg-slate-950 p-12 text-white shadow-2xl shadow-blue-900/10">
                <h3 className="font-heading mb-4 text-2xl font-black tracking-tight text-blue-500 uppercase italic">
                  Project Live
                </h3>
                <p className="font-body mb-10 text-sm leading-relaxed font-bold text-slate-500">
                  ตรวจสอบประสิทธิภาพและผลลัพธ์การทำงานจริงบนสภาพแวดล้อม
                  Production
                </p>
                <Link
                  href="https://www.unlink-th.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-18 w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 text-[11px] font-black tracking-[0.2em] uppercase shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] hover:bg-blue-500 active:scale-[0.98]"
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

/**
 * ออกแบบระบบและจัดระเบียบโครงสร้างข้อมูลโดย: นายเอ็มซ่ามากส์
 */
