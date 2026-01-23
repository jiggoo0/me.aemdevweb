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
  Globe,
  Sparkles,
  TrendingUp,
} from "lucide-react";

/**
 * HomePage - ฉบับนายอลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)
 * จุดมุ่งหมาย: สร้างความเชื่อมั่น (Trust) และเปลี่ยนผู้เข้าชมให้เป็นพาร์ทเนอร์ธุรกิจ
 * ชูจุดเด่นเรื่อง Technical SEO และผลลัพธ์จากโปรเจกต์ Unlink-th
 */
export default function HomePage() {
  const services = [
    {
      title: "รับทำ SEO และวางโครงสร้างระบบ",
      description:
        "เปลี่ยนเว็บไซต์ให้เป็นเครื่องมือช่วยหาเงิน ด้วยการวางโครงสร้างระบบ Technical SEO และงานเขียนคุณภาพสูง เพื่อการติดอันดับที่ยั่งยืนในระยะยาว",
      image: "/images/service/aemdevweb.webp",
      link: "/services/aem-dev",
      features: [
        "Next.js 16 Performance",
        "Technical SEO Audit",
        "Content Strategy",
      ],
    },
    {
      title: "ดูแลระบบและดันอันดับธุรกิจ",
      description:
        "นำเทคนิคสายออร์แกนิคจากโปรเจกต์ Unlink-th มาปรับใช้เพื่อดันอันดับธุรกิจท่านให้ขึ้นหน้าแรก Google โดยเน้นความปลอดภัยและผลลัพธ์ที่จับต้องได้จริง",
      image: "/images/service/Unlink-th.webp",
      link: "/services/unlink-th",
      isDark: true,
      features: ["Reputation Management", "Organic Ranking", "Security First"],
    },
  ];

  return (
    <>
      {/* SEO Schema - ยืนยันตัวตน นายอลงกรณ์ ยมเกิด ระดับ Specialist */}
      <Schema />

      <div className="flex flex-col gap-24 pb-20">
        {/* Hero Section: ด่านแรกของการสร้าง Authority */}
        <Hero />

        {/* Services Section: บริการและการจัดการทางเทคนิค */}
        <Container as="section" id="services" className="scroll-m-20">
          <div className="mb-20 flex flex-col items-center space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100/50 bg-blue-50 px-5 py-2 text-xs font-black tracking-[0.2em] text-blue-600 uppercase shadow-sm">
              <TrendingUp className="h-4 w-4" /> High-Performance SEO Specialist
            </div>
            <h2 className="text-4xl leading-[1.1] font-black tracking-tight text-slate-900 sm:text-6xl">
              รับทำ SEO Organic <br className="hidden sm:block" />{" "}
              เปลี่ยนเว็บไซต์ให้เป็นสินทรัพย์ทำเงิน
            </h2>
            <p className="max-w-2xl text-xl leading-relaxed font-medium text-slate-500 md:text-2xl md:leading-10">
              ผมช่วยวางรากฐานให้ Google ค้นหาธุรกิจท่านเจอเป็นอันดับแรก{" "}
              <br className="hidden md:block" /> ด้วยการผสมผสานระหว่าง
              "ศาสตร์การจัดการเนื้อหา" และ "เทคนิคการทำ SEO" ระดับลึก
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-14">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </Container>

        {/* Blog Teaser Section: คลังวิชาทำอันดับ */}
        <Container
          as="section"
          className="mt-12 border-t border-slate-50 pt-32"
        >
          <div className="mb-16 flex flex-col items-end justify-between gap-10 md:flex-row">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-xs font-black tracking-[0.3em] text-blue-600 uppercase">
                <Globe className="h-5 w-5" /> Organic Search Insights
              </div>
              <h2 className="text-3xl font-black tracking-tighter text-slate-900 sm:text-5xl lg:text-6xl">
                กลยุทธ์รับทำ SEO ให้โตแบบยั่งยืน <br /> สไตล์นายเอ็มซ่ามากส์
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed font-medium text-slate-500 md:text-xl md:leading-9">
                ผมหยิบเอาเทคนิคการปั้นอันดับ SME และการเขียนคอนเทนต์สายขาว
                มาสรุปเป็นขั้นตอนที่ช่วยให้ท่านประหยัดงบโฆษณาได้ในระยะยาว
              </p>
            </div>
            <Button
              variant="outline"
              className="group h-16 rounded-full border-2 px-10 text-lg font-black transition-all hover:border-blue-200 hover:bg-slate-50"
              asChild
            >
              <Link href="/blog">
                เจาะลึกวิชาทำ SEO ทั้งหมด
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
          </div>

          {/* Coming Soon Articles - สร้างความน่าค้นหา */}
          <div className="group rounded-[3.5rem] border-4 border-dashed border-slate-100 bg-slate-50/50 p-20 text-center transition-all hover:border-blue-100">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-white shadow-2xl shadow-slate-200/50 transition-transform group-hover:scale-110 group-hover:rotate-6">
              <Sparkles className="h-10 w-10 text-blue-500" />
            </div>
            <p className="mb-3 text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">
              SEO Masterclass Content
            </p>
            <h3 className="text-2xl font-black tracking-tight text-slate-600">
              เทคนิคการรับทำ SEO และปั้นเนื้อหาปี 2026{" "}
              <br className="hidden sm:block" /> กำลังถูกเรียบเรียงเร็ว ๆ นี้
            </h3>
          </div>
        </Container>

        {/* Final CTA Section: ปิดการขายด้วยความมั่นคง */}
        <Container as="section">
          <div className="relative overflow-hidden rounded-[4rem] border border-white/5 bg-slate-950 px-10 py-28 text-center text-white shadow-[0_50px_100px_-20px_rgba(30,58,138,0.4)]">
            <div className="pointer-events-none absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
            <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
            <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-indigo-600/10 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-4xl">
              <h2 className="mb-10 text-4xl leading-[1.05] font-black tracking-tighter italic md:text-7xl">
                อยากให้ธุรกิจท่าน <br /> ติดหน้าแรก Google หรือยังครับ?
              </h2>
              <p className="mb-14 text-xl leading-relaxed font-medium text-slate-400 md:text-2xl md:leading-10">
                ปรึกษาแผนการทำ SEO รายเดือน หรือต้องการคนดูแลการเขียนคอนเทนต์{" "}
                <br className="hidden sm:block" />{" "}
                เพื่อให้เว็บไซต์ของท่านทำงานแทนพนักงานขายตลอด 24 ชั่วโมง
              </p>

              <div className="flex flex-col justify-center gap-6 sm:flex-row">
                <Button
                  size="lg"
                  className="h-16 rounded-full bg-blue-600 px-12 text-xl font-black shadow-xl shadow-blue-600/40 transition-all hover:scale-105 hover:bg-blue-700 active:scale-95"
                  asChild
                >
                  <Link href="/contact">ปรึกษาเรื่องรับทำ SEO</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 rounded-full border-white/20 bg-white/5 px-12 text-xl font-black text-white backdrop-blur-xl transition-all hover:scale-105 hover:bg-white/10"
                  asChild
                >
                  <Link href="/services">ดูบริการทั้งหมด</Link>
                </Button>
              </div>

              <div className="mt-16 flex items-center justify-center gap-3 text-xs font-black tracking-[0.3em] text-slate-500 uppercase">
                <ShieldCheck className="h-5 w-5 text-green-500" />{" "}
                พาร์ทเนอร์ดูแลระบบและรับทำ SEO สายขาว 100%
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
