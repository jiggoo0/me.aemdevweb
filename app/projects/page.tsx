/** @format */

import Container from "@/components/layout/Container";
import ProjectCard from "@/components/shared/ProjectCard";
import { getAllProjects } from "@/lib/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "เคสความสำเร็จและผลงาน | Alongkorl Yomkerd (AEMDEVWEB)",
  description:
    "รวบรวมโปรเจกต์ที่เน้นการวางโครงสร้างระบบและ Technical SEO ระดับ Specialist เพื่อสร้างความได้เปรียบทางธุรกิจอย่างยั่งยืน",
  alternates: {
    canonical: "https://me.aemdevweb.com/projects",
  },
};

/**
 * Projects Listing Page
 * นำเสนอเคสศึกษาเชิงเทคนิคที่ผ่านการทดสอบและใช้งานจริงในระดับ Production
 */
export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <main className="min-h-screen bg-white pb-32">
      <Container className="pt-24">
        {/* Header Section: ตอกย้ำภาพลักษณ์ความเชี่ยวชาญ */}
        <header className="mb-24 space-y-8 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-12 bg-blue-600" />
            <span className="text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase">
              Selected Case Studies
            </span>
          </div>

          <div className="max-w-4xl space-y-6">
            <h1 className="text-6xl font-black tracking-tighter text-slate-900 md:text-8xl leading-[0.9]">
              Proven <br />
              <span className="text-blue-600 italic">Results.</span>
            </h1>
            <p className="max-w-2xl text-xl font-medium leading-relaxed text-slate-500 md:text-2xl">
              การตกผลึกจากการแก้โจทย์ที่ต้องการความแม่นยำสูง ทั้งในแง่ของโครงสร้าง
              Code และประสิทธิภาพบน Search Engine Result Page (SERP)
            </p>
          </div>
        </header>

        {/* Project Grid Listing */}
        {projects && projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                link={project.link}
                isFeatured={true}
              />
            ))}
          </div>
        ) : (
          /* Empty State: กรณีรออัปเดตข้อมูล */
          <div className="rounded-[4rem] bg-slate-50 py-32 text-center border border-slate-100">
            <div className="mx-auto mb-6 h-1 w-20 bg-slate-200 overflow-hidden rounded-full">
               <div className="h-full w-1/2 bg-blue-600 animate-[shimmer_2s_infinite]" />
            </div>
            <p className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
              Pipeline Update
            </p>
          </div>
        )}

        {/* Closing Section: สร้างความเชื่อมั่นให้พาร์ทเนอร์ธุรกิจ */}
        <footer className="mt-32 rounded-[4rem] border-2 border-dashed border-slate-100 bg-slate-50/30 p-16 text-center lg:p-24">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-2xl shadow-slate-200/50">
            <div className="h-3 w-3 animate-pulse rounded-full bg-blue-600" />
          </div>
          <p className="text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase mb-4">
            Next Authority Project
          </p>
          <h3 className="text-3xl font-black text-slate-900 md:text-4xl">
            กำลังจัดเตรียมเคสถัดไป...
          </h3>
          <p className="mt-6 text-lg font-medium text-slate-500">
            โปรเจกต์ที่มีประสิทธิภาพสูงสุด <br className="md:hidden" /> อาจเป็นเว็บไซต์ของคุณ
          </p>
        </footer>
      </Container>
    </main>
  );
}
