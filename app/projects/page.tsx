/** @format */

import Container from "@/components/layout/Container";
import ProjectCard from "@/components/shared/ProjectCard";
import { getAllProjects } from "@/lib/projects";
import { Metadata } from "next";

/**
 * Project Listing Strategy
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: ตอกย้ำความน่าเชื่อถือผ่านผลงานจริง (Social Proof)
 * เป้าหมาย: แสดงให้เห็นถึงความแม่นยำในการวางโครงสร้างและผลลัพธ์บน Google
 * ควบคุมคุณภาพโดย: นายเอ็มซ่ามากส์
 */

export const metadata: Metadata = {
  title: "ผลงานและความสำเร็จ | อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)",
  description:
    "รวบรวมโปรเจกต์ที่เน้นการวางระบบโครงสร้างและ Technical SEO ระดับ Specialist เพื่อสร้างความได้เปรียบทางธุรกิจที่วัดผลได้จริง",
  alternates: {
    canonical: "https://me.aemdevweb.com/projects",
  },
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <main className="min-h-screen bg-white pb-32 selection:bg-blue-600/10">
      <Container className="pt-24">
        {/* Header Section: นำเสนอความมั่นใจในงานระบบ */}
        <header className="mb-24 space-y-8 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="h-[1.5px] w-12 bg-blue-600" />
            <span className="font-heading text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase italic">
              Proven Expertise
            </span>
          </div>

          <div className="max-w-4xl space-y-6">
            <h1 className="font-heading text-6xl leading-[0.9] font-black tracking-tighter text-slate-950 md:text-8xl lg:text-9xl">
              Proven <br />
              <span className="text-blue-600 italic">Results.</span>
            </h1>
            <p className="font-body max-w-2xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              ผลลัพธ์จากการจัดการระบบที่ต้องการความแม่นยำสูง
              ทั้งในแง่ของโครงสร้างโค้ด และประสิทธิภาพการแสดงผลบนระบบการค้นหา
              (SERP)
            </p>
          </div>
        </header>

        {/* Project Grid Listing: พิกัดแสดงผลงาน */}
        {projects && projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} isFeatured={true} />
            ))}
          </div>
        ) : (
          /* Empty State: กรณีอยู่ระหว่างการซิงค์ข้อมูล */
          <div className="rounded-[4rem] border border-slate-100 bg-slate-50 py-32 text-center">
            <div className="mx-auto mb-6 h-1 w-20 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-1/2 animate-[shimmer_2s_infinite] bg-blue-600" />
            </div>
            <p className="font-heading text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic">
              Updating Database
            </p>
          </div>
        )}

        {/* Closing Section: การันตีมาตรฐานความเรียบร้อย */}
        <footer className="mt-40 rounded-[4rem] border-2 border-dashed border-slate-200 bg-slate-50/50 p-16 text-center transition-colors hover:border-blue-200 lg:p-24">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-[2.5rem] bg-white shadow-2xl shadow-slate-200/50">
            <div className="h-3 w-3 animate-pulse rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
          </div>
          <p className="font-heading mb-4 text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
            Next Level Project
          </p>
          <h3 className="font-heading text-4xl font-black text-slate-950 uppercase italic">
            เตรียมพบกับเคสถัดไปเร็วๆ นี้
          </h3>
          <p className="font-body mt-6 text-xl font-bold text-slate-500">
            ระบบที่มีประสิทธิภาพสูงสุด <br className="md:hidden" />{" "}
            อาจเป็นเว็บไซต์ธุรกิจของคุณ
          </p>
        </footer>
      </Container>
    </main>
  );
}

/**
 * ออกแบบระบบและจัดระเบียบโครงสร้างข้อมูลโดย: นายเอ็มซ่ามากส์
 */
