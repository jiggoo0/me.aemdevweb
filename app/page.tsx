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
  // Search, // ✅ ตัดออกเนื่องจากไม่ได้ใช้ในหน้านี้
  Globe,
  Sparkles,
  TrendingUp,
} from "lucide-react";

/**
 * HomePage - ฉบับนายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 * Identity: รับทำ SEO และรับปรึกษาการเขียน SEO Organic
 */
export default function HomePage() {
  const services = [
    {
      title: "รับทำ SEO & วางโครงสร้างเว็บ",
      description:
        "เปลี่ยนเว็บไซต์ให้เป็นเครื่องจักรช่วยหาเงิน ด้วยการวางโครงสร้าง Technical SEO และงานเขียนคุณภาพสูง เพื่อการติดอันดับที่ยั่งยืนในระยะยาว",
      image: "/images/service/aemdevweb.webp",
      link: "/services/aem-dev",
    },
    {
      title: "ดูแลระบบ & ดันอันดับธุรกิจ",
      description:
        "นำเทคนิคสายออร์แกนิคจากโปรเจกต์ Unlink-th มาปรับใช้เพื่อดันอันดับธุรกิจพี่ให้ขึ้นหน้าแรก Google โดยเน้นความปลอดภัยและผลลัพธ์ที่จับต้องได้จริง",
      image: "/images/service/Unlink-th.webp",
      link: "/services/unlink-th",
      isDark: true, 
    },
  ];

  return (
    <>
      <Schema />

      <div className="flex flex-col gap-24 pb-20">
        <Hero />

        <Container>
          <section id="services" className="scroll-m-20">
            <div className="mb-16 flex flex-col items-center space-y-4 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-blue-600 shadow-sm">
                <TrendingUp className="h-3.5 w-3.5" /> High-Performance SEO
              </div>
              <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-5xl">
                รับทำ SEO Organic <br className="hidden sm:block" />{" "}
                เปลี่ยนเว็บไซต์ให้เป็นสินทรัพย์ทำเงิน
              </h2>
              <p className="max-w-[750px] text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl">
                ผมช่วยวางรากฐานให้ Google ค้นหาธุรกิจพี่เจอเป็นอันดับแรก <br className="hidden md:block" />{" "}
                ด้วยการผสมผสานระหว่าง "ศาสตร์การเขียน" และ "เทคนิคการทำ SEO" ระดับลึกครับ
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </section>

          <section className="mt-24 border-t border-slate-100 pt-24">
            <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-black uppercase tracking-tighter text-blue-600">
                  <Globe className="h-4 w-4" /> Organic Search Insights
                </div>
                <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                  กลยุทธ์รับทำ SEO ให้โตแบบยั่งยืน <br /> สไตล์นายเอ็มซ่ามากส์
                </h2>
                <p className="max-w-xl text-lg font-medium leading-relaxed text-muted-foreground">
                  ผมหยิบเอาเทคนิคการปั้นอันดับ SME และการเขียนคอนเทนต์สายขาว <br className="hidden md:block" />{" "}
                  มาสรุปเป็นขั้นตอนที่ช่วยให้พี่ประหยัดงบโฆษณาได้ในระยะยาว
                </p>
              </div>
              <Button
                variant="outline"
                className="group border-2 rounded-full px-8 py-6 font-black transition-all hover:bg-slate-50"
                asChild
              >
                <Link href="/blog">
                  เจาะลึกวิชาทำ SEO ทั้งหมด
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="group border-2 border-dashed border-slate-200 bg-slate-50 p-16 text-center transition-colors hover:border-blue-200 rounded-[2.5rem]">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform group-hover:scale-110">
                <Sparkles className="h-8 w-8 text-blue-500" />
              </div>
              <p className="mb-2 text-sm font-black uppercase tracking-widest text-slate-400">
                SEO Masterclass
              </p>
              <h3 className="text-xl font-bold text-slate-600">
                เทคนิคการรับทำ SEO และปั้นเนื้อหาปี 2026 กำลังถูกเรียบเรียงเร็ว ๆ นี้
              </h3>
            </div>
          </section>
        </Container>

        <Container>
          <section className="relative overflow-hidden bg-slate-900 px-8 py-24 text-center text-white shadow-3xl shadow-blue-900/40 rounded-[3.5rem]">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[url('/images/grid.svg')] opacity-15" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="mb-8 text-4xl font-black leading-[1.1] md:text-6xl">
                อยากให้ธุรกิจพี่ <br /> ติดหน้าแรก Google หรือยังครับ?
              </h2>
              <p className="mb-12 text-lg font-medium leading-relaxed text-slate-400 sm:text-xl">
                ปรึกษาแผนการทำ SEO รายเดือน หรือต้องการคนดูแลการเขียนคอนเทนต์ <br className="hidden sm:block" />{" "}
                เพื่อให้เว็บไซต์ของพี่ทำงานแทนพนักงานขายตลอด 24 ชั่วโมงครับ
              </p>
              <div className="flex flex-wrap justify-center gap-5">
                <Button
                  size="lg"
                  className="h-16 rounded-full bg-blue-600 px-10 text-lg font-black shadow-lg shadow-blue-600/30 transition-all hover:scale-105 hover:bg-blue-700"
                  asChild
                >
                  <Link href="/contact">ปรึกษาเรื่องรับทำ SEO</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 rounded-full border-white/20 bg-white/5 px-10 text-lg font-black backdrop-blur-md transition-all hover:scale-105 hover:bg-white/10 text-white"
                  asChild
                >
                  <Link href="/services">ดูบริการทั้งหมด</Link>
                </Button>
              </div>
              <div className="mt-12 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500">
                <ShieldCheck className="h-4 w-4 text-green-500" />{" "}
                พาร์ทเนอร์ดูแลระบบและรับทำ SEO สายขาว 100%
              </div>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
}
