/** @format */

import { Metadata } from "next";
import Hero from "@/components/profile/Hero";
import Schema from "@/components/profile/Schema";
import Container from "@/components/layout/Container";
import ProjectCard from "@/components/shared/ProjectCard";
import BlogCard from "@/components/shared/BlogCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Globe,
  TrendingUp,
  Layout,
} from "lucide-react";
import { getAllProjects } from "@/lib/projects";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/constants/site-config";

/**
 * 1. Technical SEO Metadata
 * ตอกย้ำความน่าเชื่อถือระดับผู้เชี่ยวชาญ (Authority) ในหน้าแรกของ Identity Hub
 */
export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "./",
  },
};

/**
 * HomePage - Identity Hub: Alongkorl Yomkerd (นายเอ็มซ่ามากส์)
 * ศูนย์กลางการนำเสนอด้านการวางโครงสร้างระบบและกลยุทธ์ Technical SEO
 */
export default async function HomePage() {
  // ดึงข้อมูลโปรเจกต์และบทความพร้อมกันแบบ Parallel เพื่อประสิทธิภาพความเร็วสูงสุด
  const [allProjects, allPosts] = await Promise.all([
    getAllProjects(),
    getAllPosts(),
  ]);

  // คัดเลือก Node ข้อมูลมาแสดงผลในส่วนแนะนำ
  const featuredProjects = allProjects.slice(0, 2);
  const latestPosts = allPosts.slice(0, 3);

  return (
    <>
      {/* ยืนยันพิกัดตัวตนต่อระบบการค้นหาผ่าน JSON-LD */}
      <Schema />

      <div className="flex flex-col gap-28 pb-32">
        {/* ส่วนแนะนำตัวหลัก (Brand Hero) */}
        <Hero />

        {/* 1. Selected Works: แสดงเคสงานที่เน้นประสิทธิภาพและผลลัพธ์จริง */}
        <Container as="section" id="projects" className="scroll-m-20">
          <header className="mb-20 flex flex-col items-center space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase shadow-sm">
              <TrendingUp size={14} /> Performance & SEO Control
            </div>
            <h2 className="text-5xl leading-[0.95] font-black tracking-tighter text-slate-950 md:text-7xl">
              สร้างระบบที่แข็งแรง <br className="hidden sm:block" />{" "}
              เพื่อผลลัพธ์ที่ยั่งยืน
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed font-bold text-slate-500 md:text-xl">
              คัดสรรผลงานที่ให้ความสำคัญกับการตอบสนองที่รวดเร็วและโครงสร้างข้อมูลที่ถูกต้อง
              เพื่อให้เว็บไซต์ทำงานได้เต็มสมรรถนะในทุกแพลตฟอร์ม
            </p>
          </header>

          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:gap-20">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} isFeatured={true} />
            ))}
          </div>
        </Container>

        {/* 2. Insights & Knowledge: คลังความรู้สำหรับการพัฒนาที่ถูกต้อง */}
        <Container as="section" className="border-t border-slate-100 pt-28">
          <header className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
                <Globe size={18} /> Technical Knowledge Hub
              </div>
              <h2 className="text-4xl leading-none font-black tracking-tighter text-slate-950 md:text-6xl">
                บทความและการ{" "}
                <span className="text-blue-600 italic">อัปเดต</span>
              </h2>
            </div>
            <Button
              variant="outline"
              className="h-14 rounded-2xl border-slate-200 px-10 text-[11px] font-black tracking-widest uppercase transition-all hover:bg-slate-950 hover:text-white active:scale-95"
              asChild
            >
              <Link href="/blog" className="group flex items-center">
                คลังบทความทั้งหมด
                <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </header>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </Container>

        {/* 3. Call-To-Action: การเชื่อมโยงโครงการใหม่ */}
        <Container as="section">
          <div className="relative overflow-hidden rounded-[4rem] bg-slate-950 px-10 py-28 text-center text-white shadow-2xl shadow-blue-900/10">
            {/* พื้นหลังตาราง Grid ที่สื่อถึงความละเอียดของระบบ */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: "url('/grid.svg')",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 mx-auto max-w-4xl space-y-12">
              <div className="flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-blue-600 shadow-xl shadow-blue-600/30">
                  <Layout size={32} strokeWidth={2.5} />
                </div>
              </div>

              <h2 className="text-5xl leading-[0.9] font-black tracking-tighter italic md:text-8xl">
                Precision Code. <br /> Predictable Results.
              </h2>

              <div className="flex flex-col items-center gap-8">
                <Button
                  size="lg"
                  className="h-20 rounded-[1.5rem] bg-blue-600 px-16 text-xl font-black shadow-2xl shadow-blue-600/40 transition-all hover:scale-105 hover:bg-blue-500 active:scale-95"
                  asChild
                >
                  <Link href="/contact">เริ่มปรึกษาโครงการของคุณ</Link>
                </Button>

                <div className="flex flex-wrap items-center justify-center gap-8 text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase">
                  <span className="flex items-center gap-3">
                    <ShieldCheck size={16} className="text-blue-500" />{" "}
                    Specialist Verified
                  </span>
                  <span className="hidden h-1.5 w-1.5 rounded-full bg-slate-800 md:block" />
                  <span>Next.js Infrastructure Lead</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

/**
 * ออกแบบระบบและดูแลความเนี้ยบโดย: นายเอ็มซ่ามากส์
 */
