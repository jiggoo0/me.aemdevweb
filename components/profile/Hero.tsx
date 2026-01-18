/** @format */
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/shared/SocialLinks";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { Sparkles } from "lucide-react";

/**
 * Hero Component
 * ส่วนหน้าแรกของเว็บไซต์ แสดงชื่อและอัตลักษณ์ของ Alongkorl Yomkerd (นายเอ็มซ่ามากส์)
 * ออกแบบให้มีความพรีเมียมและดึงดูดความสนใจ (First Impression)
 */
export default function Hero() {
  const profile = {
    name: "อลงกรณ์ ยมเกิด",
    nickname: "นายเอ็มซ่ามากส์",
    title: "Expert Full-Stack Developer",
    secondaryTitle: "Technical SEO & ORM Specialist",
  };

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-white">
      {/* Background Decor - เพิ่มมิติให้กับหน้า Hero */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />

      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* ส่วนข้อมูลตัวอักษร */}
          <div className="flex-1 space-y-6 text-center md:text-left animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> {profile.title}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight">
              {profile.name} <br />
              <span className="text-blue-600 italic">"{profile.nickname}"</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
              ผู้อยู่เบื้องหลังโครงสร้างทางเทคนิคของ{" "}
              <span className="text-slate-900 font-bold border-b-2 border-blue-600">
                Unlink-th
              </span>{" "}
              และผู้เชี่ยวชาญการพัฒนาเว็บไซต์ด้วย Next.js 15 ที่รองรับ SEO
              ระดับลึก
            </p>

            <div className="pt-4 flex justify-center md:justify-start">
              {/* ตรวจสอบให้แน่ใจว่า SocialLinks รองรับพารามิเตอร์ที่ส่งไป */}
              <SocialLinks className="pt-2" />
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-6">
              <Button
                asChild
                size="lg"
                className="rounded-full px-10 h-14 text-base font-bold shadow-lg shadow-blue-100 hover:scale-105 transition-all bg-blue-600 hover:bg-blue-700"
              >
                <Link href="/contact">เริ่มโปรเจกต์กับเรา</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-10 h-14 text-base font-bold border-2 hover:bg-slate-50 transition-all border-slate-200"
              >
                <Link href="/about">ดูประวัติและผลงาน</Link>
              </Button>
            </div>
          </div>

          {/* ส่วนรูปภาพโปรไฟล์ */}
          <div className="flex-1 relative w-full max-w-[480px] aspect-square animate-in fade-in zoom-in duration-1000">
            {/* กรอบรูปดีไซน์ซ้อนทับ */}
            <div className="absolute inset-0 bg-blue-600/5 rounded-[3rem] rotate-6 -z-10" />
            <div className="absolute inset-0 bg-slate-100 rounded-[3rem] -rotate-3 -z-20" />

            <div className="relative w-full h-full overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white">
              <Image
                src="/images/aemdevweb-hero.webp"
                alt={`${profile.name} - ${profile.nickname}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
                sizes="(max-w-768px) 100vw, 50vw"
              />
            </div>

            {/* Floating Tag - แอบขายความเก่ง */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                Success Case
              </p>
              <p className="text-sm font-black text-slate-900 flex items-center gap-2">
                Unlink-th Platform Architect
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
