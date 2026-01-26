/** @format */

import Image from "next/image";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/shared/SocialLinks";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { Sparkles, ShieldCheck, Search, ArrowRight } from "lucide-react";
import { siteConfig } from "@/constants/site-config";

/**
 * Hero Component - Specialist Identity Version
 * นำเสนออัตลักษณ์ "นายอลงกรณ์ ยมเกิด" ผ่านผลงานเชิงประจักษ์
 */
export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      {/* Background Decor: เน้นความคลีนแบบมีมิติ (Glassmorphism Effect) */}
      <div className="absolute top-0 right-0 -z-10 h-[800px] w-[800px] translate-x-1/4 translate-y-[-20%] rounded-full bg-blue-50/50 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] translate-x-[-20%] translate-y-[20%] rounded-full bg-slate-50 blur-[100px]" />

      <Container>
        <div className="flex flex-col items-center gap-20 lg:flex-row lg:gap-24">
          
          {/* ส่วนเนื้อหา (Content Strategy) */}
          <div className="flex-1 space-y-12 text-center md:text-left">
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase shadow-sm">
              <Sparkles size={16} /> {siteConfig.role}
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl font-black leading-[0.95] tracking-tighter text-slate-900 md:text-8xl lg:text-9xl">
                {siteConfig.fullName} <br />
                <span className="text-blue-600 italic">
                  &quot;{siteConfig.expertName}&quot;
                </span>
              </h1>
            </div>

            <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-slate-500 md:mx-0 md:text-xl md:leading-9">
              ผู้อยู่เบื้องหลังการวางโครงสร้างทางเทคนิคของ{" "}
              <span className="cursor-default border-b-4 border-blue-600/20 font-black text-slate-900 transition-all hover:border-blue-600">
                Unlink-th Platform
              </span>{" "}
              และที่ปรึกษาด้าน Web Infrastructure ที่เน้นผลลัพธ์จาก{" "}
              <span className="font-bold text-blue-600 underline decoration-blue-600/30 decoration-4 underline-offset-8">SEO Organic</span>{" "}
              ระดับลึก
            </p>

            {/* การเชื่อมโยงอัตลักษณ์ (Social Presence) */}
            <div className="flex justify-center md:justify-start">
              <SocialLinks />
            </div>

            {/* ปุ่มนำทางหลัก (Call to Action) */}
            <div className="flex flex-col justify-center gap-5 pt-4 sm:flex-row md:justify-start">
              <Button
                asChild
                size="lg"
                className="h-18 rounded-2xl bg-blue-600 px-12 text-lg font-black shadow-2xl shadow-blue-600/40 transition-all hover:scale-105 hover:bg-blue-500 active:scale-95"
              >
                <Link href="/contact" className="flex items-center">
                  เริ่มโปรเจกต์กับผม <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-18 rounded-2xl border-2 border-slate-200 px-12 text-lg font-black transition-all hover:border-blue-600 hover:text-blue-600 active:scale-95"
              >
                <Link href="/projects">Case Studies</Link>
              </Button>
            </div>
          </div>

          {/* ส่วนแสดงภาพลักษณ์ (Visual Authority) */}
          <div className="relative aspect-square w-full max-w-[580px] flex-1">
            {/* Geometric Decorative Layers */}
            <div className="absolute inset-0 -z-10 rotate-6 rounded-[4rem] bg-blue-600/5 transition-transform duration-1000 group-hover:rotate-12" />
            <div className="absolute inset-0 -z-20 -rotate-3 rounded-[4rem] bg-slate-50 transition-transform duration-1000 group-hover:-rotate-6" />

            <div className="relative h-full w-full overflow-hidden rounded-[4rem] border-8 border-white shadow-2xl">
              <Image
                src={siteConfig.profilePhoto}
                alt={`${siteConfig.fullName} - ${siteConfig.role}`}
                fill
                className="object-cover transition-transform duration-1000 hover:scale-110"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Floating Badge: ตอกย้ำความสำเร็จเชิงประจักษ์ */}
            <div className="absolute -bottom-8 -left-8 hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-2xl transition-all duration-500 hover:-translate-y-3 sm:block">
              <div className="mb-3 flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
                <ShieldCheck size={16} /> Success Case
              </div>
              <p className="text-2xl font-black tracking-tight text-slate-900 leading-none">
                Unlink-th Lead
              </p>
              <div className="mt-3 flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <Search size={14} className="text-blue-600" />
                <span>Technical SEO Expert</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
