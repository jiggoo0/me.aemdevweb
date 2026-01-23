/** @format */

import Image from "next/image";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/shared/SocialLinks";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { Sparkles, ShieldCheck, Search, ArrowRight } from "lucide-react";

/**
 * Hero Component - Infrastructure Lead Version
 * นำเสนออัตลักษณ์ของ นายอลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)
 * เน้นการสร้างความน่าเชื่อถือผ่านผลงานเชิงประจักษ์และความเชี่ยวชาญทางเทคนิค
 */
export default function Hero() {
  const profile = {
    name: "อลงกรณ์ ยมเกิด",
    nickname: "นายเอ็มซ่ามากส์",
    title: "Expert Full-Stack Developer",
    featuredProject: "Unlink-th Platform",
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-24 lg:py-32">
      {/* Background Decorations - เน้นมิติความพรีเมียมด้วย Glassmorphism */}
      <div className="absolute top-0 right-0 -z-10 h-[800px] w-[800px] translate-x-1/4 translate-y-[-20%] rounded-full bg-blue-50/60 opacity-70 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] translate-x-[-20%] translate-y-[20%] rounded-full bg-slate-50/80 blur-[100px]" />

      <Container>
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
          {/* Text Content Section */}
          <div className="flex-1 space-y-10 text-center md:text-left">
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-100/50 bg-blue-50 px-5 py-2 text-xs font-black tracking-[0.2em] text-blue-600 uppercase shadow-sm">
              <Sparkles className="h-4 w-4" /> {profile.title}
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl leading-[1.05] font-black tracking-tight text-slate-900 md:text-7xl lg:text-8xl">
                {profile.name} <br />
                <span className="text-blue-600 italic">
                  "{profile.nickname}"
                </span>
              </h1>
            </div>

            <p className="mx-auto max-w-2xl text-xl leading-relaxed font-medium text-slate-500 md:mx-0 md:text-2xl md:leading-10">
              ผู้อยู่เบื้องหลังโครงสร้างทางเทคนิคของ{" "}
              <span className="cursor-default border-b-4 border-blue-600/20 font-black text-slate-900 transition-all hover:border-blue-600">
                {profile.featuredProject}
              </span>{" "}
              และที่ปรึกษาการพัฒนาเว็บไซต์ด้วย Next.js ที่เน้นผลลัพธ์จาก{" "}
              <span className="font-bold text-blue-600">SEO Organic</span>{" "}
              ระดับลึก
            </p>

            {/* Social Links Integration */}
            <div className="flex justify-center pt-2 md:justify-start">
              <SocialLinks variant="aemdevweb" />
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col justify-center gap-5 pt-8 sm:flex-row md:justify-start">
              <Button
                asChild
                size="lg"
                className="h-16 rounded-full bg-blue-600 px-12 text-xl font-black shadow-2xl shadow-blue-600/30 transition-all hover:scale-105 hover:bg-blue-700 active:scale-95"
              >
                <Link href="/contact">
                  เริ่มโปรเจกต์กับผม <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-16 rounded-full border-2 border-slate-200 px-12 text-xl font-black transition-all hover:border-blue-200 hover:bg-slate-50 active:scale-95"
              >
                <Link href="/projects">ตรวจสอบเคสที่สำเร็จ</Link>
              </Button>
            </div>
          </div>

          {/* Profile Image Section - Optimized for LCP Performance */}
          <div className="relative aspect-square w-full max-w-[550px] flex-1">
            {/* Geometric Decor */}
            <div className="absolute inset-0 -z-10 rotate-6 rounded-[4rem] bg-blue-600/5 transition-transform duration-700 hover:rotate-12" />
            <div className="absolute inset-0 -z-20 -rotate-3 rounded-[4rem] bg-slate-100 transition-transform duration-700 hover:-rotate-6" />

            <div className="relative h-full w-full overflow-hidden rounded-[4rem] border-8 border-white shadow-2xl">
              <Image
                src="/images/aemdevweb-hero.webp"
                alt={`${profile.name} - ${profile.nickname}`}
                fill
                className="object-cover transition-transform duration-1000 hover:scale-110"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Authority Badge: Unlink-th Infrastructure Lead */}
            <div className="absolute -bottom-8 -left-8 hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-2xl transition-all duration-500 hover:-translate-y-3 sm:block">
              <div className="mb-3 flex items-center gap-2 text-xs font-black tracking-[0.2em] text-blue-600 uppercase">
                <ShieldCheck className="h-5 w-5" /> Success Case
              </div>
              <p className="text-xl font-black tracking-tight text-slate-900">
                Unlink-th Lead
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-bold text-slate-400">
                <Search className="h-4 w-4 text-blue-400" />
                <span>Technical SEO Mastered</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
