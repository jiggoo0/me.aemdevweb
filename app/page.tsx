/** @format */
import Hero from "@/components/profile/Hero";
import ServiceCard from "@/components/shared/ServiceCard";
import Schema from "@/components/profile/Schema";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Search,
  Globe,
} from "lucide-react";

/**
 * HomePage - ฉบับนายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 * เน้นการเป็น "พาร์ทเนอร์ดูแลระบบ" และ "ผู้เชี่ยวชาญ SEO Organic"
 */
export default function HomePage() {
  // ข้อมูลบริการหลักที่ดึงมาจาก Service Strategy
  const services = [
    {
      title: "วางระบบเว็บ & SEO Organic",
      description:
        "ผมสร้างเว็บไซต์ที่ไม่ได้มีดีแค่ความเร็ว แต่ถูกวางโครงสร้างสายออร์แกนิคมาตั้งแต่ต้น เพื่อให้ธุรกิจพี่ติดหน้าแรก Google ได้อย่างยั่งยืนโดยไม่ต้องพึ่งพาแต่ค่าโฆษณา",
      image: "/images/service/aemdevweb.webp",
      link: "/services/aem-dev",
    },
    {
      title: "ดูแลระบบ & ปั้นอันดับธุรกิจ",
      description:
        "ใช้ประสบการณ์จากการดูแลระบบ Unlink-th มาช่วยวิเคราะห์และดันอันดับเว็บไซต์ของพี่ให้สูงขึ้น ด้วยเทคนิค SEO สายขาวที่ปลอดภัยและเน้นผลลัพธ์ในระยะยาว",
      image: "/images/service/Unlink-th.webp",
      link: "/services/unlink-th",
      isDark: true, // เน้นความ Professional ในฐานะผู้อยู่เบื้องหลัง
    },
  ];

  return (
    <>
      {/* 🛠️ Technical SEO: Schema JSON-LD สำหรับระบุตัวตนบน Google */}
      <Schema />

      <div className="flex flex-col gap-24 pb-20">
        {/* 1. Hero Section: First Impression ของผู้เชี่ยวชาญ */}
        <Hero />

        <Container>
          {/* 2. Services Section: ทางออกเพื่อการเติบโตของ SME */}
          <section id="services" className="scroll-m-20">
            <div className="mb-16 flex flex-col items-center space-y-4 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-blue-600 shadow-sm">
                <Search className="h-3.5 w-3.5" /> SEO Organic Partner
              </div>
              <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-5xl">
                ปั้นเว็บไซต์ให้ "ติดหน้าแรก" <br className="hidden sm:block" />{" "}
                ด้วยกลยุทธ์สายออร์แกนิค
              </h2>
              <p className="max-w-[750px] text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl">
                ถ้าพี่กำลังหาคนดูแลระบบเว็บไซต์และอยากดันอันดับ Google ให้ยั่งยืน{" "}
                <br className="hidden md:block" />{" "}
                ผมพร้อมเป็นพาร์ทเนอร์ที่คอยดูแลและให้คำปรึกษาพี่ตั้งแต่วันแรกครับ
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </section>

          {/* 3. Latest Insights: คลังความรู้จากประสบการณ์จริง */}
          <section className="mt-24 border-t border-slate-100 pt-24">
            <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-black uppercase tracking-tighter text-blue-600">
                  <Globe className="h-4 w-4" /> Organic Search Strategy
                </div>
                <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                  เทคนิคปั้นอันดับออร์แกนิค <br /> ที่ SME ไทยต้องรู้
                </h2>
                <p className="max-w-xl text-lg font-medium leading-relaxed text-muted-foreground">
                  ผมหยิบเอาประสบการณ์จากการปั้นระบบและงัดข้อกับอัลกอริทึม Google{" "}
                  <br className="hidden md:block" />{" "}
                  มาย่อยเป็นขั้นตอนที่พี่เอาไปปรับใช้กับธุรกิจได้จริง
                </p>
              </div>
              <Button
                variant="outline"
                className="group border-2 rounded-full px-8 py-6 font-black transition-all hover:bg-slate-50"
                asChild
              >
                <Link href="/blog">
                  เจาะลึกวิชา SEO ทั้งหมด
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Placeholder สำหรับบทความใหม่ */}
            <div className="group border-2 border-dashed border-slate-200 bg-slate-50 p-16 text-center transition-colors hover:border-blue-200 rounded-[2.5rem]">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform group-hover:scale-110">
                <Search className="h-8 w-8 text-blue-500" />
              </div>
              <p className="mb-2 text-sm font-black uppercase tracking-widest text-slate-400">
                Latest Strategies
              </p>
              <h3 className="text-xl font-bold text-slate-600">
                บทความเรื่อง SEO ออร์แกนิค กำลังถูกอัปเดตให้ทันสมัยที่สุดเร็วๆ นี้
              </h3>
            </div>
          </section>
        </Container>

        {/* 4. Call to Action: ส่วนปิดการขายเพื่อเริ่มโปรเจกต์ */}
        <Container>
          <section className="relative overflow-hidden bg-slate-900 px-8 py-24 text-center text-white shadow-3xl shadow-blue-900/40 rounded-[3.5rem]">
            {/* Background Grid Pattern */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[url('/images/grid.svg')] opacity-15" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="mb-8 text-4xl font-black leading-[1.1] md:text-6xl">
                อยากให้ธุรกิจพี่ <br /> ไปอยู่หน้าแรก Google ไหม?
              </h2>
              <p className="mb-12 text-lg font-medium leading-relaxed text-slate-400 sm:text-xl">
                ไม่ว่าพี่จะต้องการคนดูแล SEO รายเดือน
                หรืออยากวางระบบเว็บไซต์ใหม่ที่เน้นยอดขาย{" "}
                <br className="hidden sm:block" />{" "}
                ผมพร้อมใช้เทคนิคสายออร์แกนิคมาช่วยให้ธุรกิจพี่เติบโตอย่างยั่งยืนครับ
              </p>
              <div className="flex flex-wrap justify-center gap-5">
                <Button
                  size="lg"
                  className="h-16 rounded-full bg-blue-600 px-10 text-lg font-black shadow-lg shadow-blue-600/30 transition-all hover:scale-105 hover:bg-blue-700"
                  asChild
                >
                  <Link href="/contact">ปรึกษาเรื่อง SEO ฟรี</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 rounded-full border-white/20 bg-white/5 px-10 text-lg font-black backdrop-blur-md transition-all hover:scale-105 hover:bg-white/10 text-white"
                  asChild
                >
                  <Link href="/services">ดูทางออกทั้งหมด</Link>
                </Button>
              </div>
              <div className="mt-12 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500">
                <ShieldCheck className="h-4 w-4 text-green-500" />{" "}
                มุ่งเน้นความยั่งยืนด้วยเทคนิค SEO สายขาว 100%
              </div>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
}
