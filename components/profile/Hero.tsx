/** @format */

import Image from "next/image";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/shared/SocialLinks";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { Sparkles, ShieldCheck, Search } from "lucide-react";

/**
 * Hero Component - ฉบับพาร์ทเนอร์ดูแลระบบและ SEO Organic
 * นำเสนออัตลักษณ์ของ อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)
 * เน้นความน่าเชื่อถือในฐานะผู้อยู่เบื้องหลังระบบ Unlink-th และผู้เชี่ยวชาญ Next.js
 */
export default function Hero() {
  const profile = {
    name: "อลงกรณ์ ยมเกิด",
    nickname: "นายเอ็มซ่ามากส์",
    title: "Expert Full-Stack Developer",
    secondaryTitle: "Technical SEO & ORM Specialist",
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      {/* 🌌 Background Elements - เพิ่มมิติและความพรีเมียม */}
      <div className="absolute right-0 top-0 -z-10 h-[600px] w-[600px] translate-x-1/3 translate-y-[-20%] rounded-full bg-blue-50/50 blur-3xl opacity-60" />
      <div className="absolute left-0 bottom-0 -z-10 h-[300px] w-[300px] translate-x-[-20%] translate-y-[20%] rounded-full bg-slate-50 blur-3xl opacity-40" />

      <Container>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          
          {/* 📝 Text Content Section */}
          <div className="flex-1 space-y-8 text-center md:text-left animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-blue-600 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" /> {profile.title}
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-black leading-[1.1] text-slate-900 md:text-7xl lg:text-8xl">
                {profile.name} <br />
                <span className="text-blue-600 italic">"{profile.nickname}"</span>
              </h1>
            </div>

            <p className="mx-auto max-w-xl text-lg font-medium leading-relaxed text-slate-600 md:mx-0 md:text-xl">
              ผู้อยู่เบื้องหลังโครงสร้างทางเทคนิคของ{" "}
              <span className="font-black text-slate-900 border-b-2 border-blue-600/30 hover:border-blue-600 transition-colors">
                Unlink-th
              </span>{" "}
              และที่ปรึกษาการพัฒนาเว็บไซต์ด้วย Next.js ที่เน้นผลลัพธ์จาก{" "}
              <span className="font-bold text-blue-600">SEO Organic</span> ระดับลึก
            </p>

            {/* Social Links Integration */}
            <div className="flex justify-center pt-2 md:justify-start">
              <SocialLinks variant="aemdevweb" />
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-6 md:justify-start">
              <Button
                asChild
                size="lg"
                className="h-16 rounded-full bg-blue-600 px-10 text-lg font-black shadow-xl shadow-blue-600/20 transition-all hover:scale-105 hover:bg-blue-700"
              >
                <Link href="/contact">เริ่มโปรเจกต์กับเรา</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-16 rounded-full border-2 border-slate-200 px-10 text-lg font-black transition-all hover:bg-slate-50"
              >
                <Link href="/about">ดูประวัติและผลงาน</Link>
              </Button>
            </div>
          </div>

          {/* 🖼️ Profile Image Section */}
          <div className="relative flex-1 w-full max-w-[500px] aspect-square animate-in fade-in zoom-in duration-1000">
            {/* Decorative Frames */}
            <div className="absolute inset-0 -z-10 rotate-6 rounded-[3.5rem] bg-blue-600/5" />
            <div className="absolute inset-0 -z-20 -rotate-3 rounded-[3.5rem] bg-slate-100" />

            <div className="relative h-full w-full overflow-hidden rounded-[3.5rem] border-4 border-white shadow-2xl">
              <Image
                src="/images/aemdevweb-hero.webp"
                alt={`${profile.name} - ${profile.nickname}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* 🏆 Trust Badge: Unlink-th Architect */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-2xl sm:block transition-transform hover:-translate-y-2 duration-500">
              <div className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
                <ShieldCheck className="h-4 w-4" /> Success Case
              </div>
              <p className="text-base font-black text-slate-900">
                Unlink-th Platform Architect
              </p>
              <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-slate-400">
                <Search className="h-3 w-3" /> Technical SEO Mastered
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
