/** @format */
import Hero from "@/components/profile/Hero"
import ServiceCard from "@/components/shared/ServiceCard"
import Schema from "@/components/profile/Schema"
import Container from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      title: "AEM Dev Web",
      description: "บริการรับทำเว็บไซต์สมัยใหม่สำหรับ SMEs ด้วยเทคโนโลยี Next.js 15 ที่รวดเร็ว ปลอดภัย และรองรับ SEO 100%",
      image: "/images/service/aemdevweb.webp",
      link: "/services/aem-dev", // เปลี่ยนจาก href เป็น link เพื่อให้ตรงกับ ServiceCard
    },
    {
      title: "Unlink-th",
      description: "บริการจัดการลบประวัติและข้อมูลออนไลน์ที่เสียหาย เพื่อปกป้องชื่อเสียงและภาพลักษณ์ดิจิทัลของคุณอย่างเป็นความลับ",
      image: "/images/service/Unlink-th.webp",
      link: "/services/unlink-th",
      isDark: true, // เพิ่มมิติให้การ์ด Unlink ดูพรีเมียมและน่าเกรงขาม
    },
  ]

  return (
    <>
      {/* 🛠️ SEO Schema: ช่วยให้ Google เข้าใจตัวตนของคุณอลงกรณ์และแบรนด์ */}
      <Schema />

      <div className="flex flex-col gap-24 pb-20">
        {/* 1. Hero Section: First Impression */}
        <Hero />

        <Container>
          {/* 2. Services Section: ธุรกิจหลัก */}
          <section id="services" className="scroll-m-20">
            <div className="flex flex-col items-center text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" /> Our Services
              </div>
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl text-slate-900">
                โซลูชันเพื่อธุรกิจยุคดิจิทัล
              </h2>
              <p className="max-w-[700px] text-muted-foreground text-lg font-medium">
                เรามุ่งมั่นที่จะส่งมอบคุณค่าผ่านเครื่องมือดิจิทัลที่ทันสมัยที่สุด เพื่อความสำเร็จของธุรกิจคุณ
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </section>

          {/* 3. Dynamic Blog Preview (Placeholder) */}
          <section className="mt-24 border-t pt-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl text-slate-900 uppercase">
                  Latest Insights
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl font-medium">
                  บทความแบ่งปันความรู้ด้าน Web Dev และเทคนิคการจัดการชื่อเสียงออนไลน์
                </p>
              </div>
              <Button variant="outline" className="rounded-full font-bold group" asChild>
                <Link href="/blog">
                  เข้าสู่บล็อกทั้งหมด
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            {/* จุดนี้สามารถดึง getSortedPostsData มา Map แสดงผลได้ในภายหลัง */}
            <div className="bg-slate-50 rounded-[2rem] p-12 text-center border-2 border-dashed border-slate-200">
               <p className="text-slate-400 font-bold uppercase tracking-widest">
                 Coming Soon: New Blog Posts in Next.js 15
               </p>
            </div>
          </section>
        </Container>

        {/* 4. Call to Action: ปิดการขาย */}
        <Container>
          <section className="rounded-[3rem] bg-slate-900 px-6 py-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-10 pointer-events-none" />
            
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              พร้อมที่จะสร้าง <br />
              โปรเจกต์ที่ยอดเยี่ยมหรือยัง?
            </h2>
            <p className="mb-10 text-slate-400 max-w-xl mx-auto text-lg font-medium">
              ไม่ว่าคุณจะต้องการเว็บไซต์ใหม่ หรือปรึกษาเรื่องการจัดการข้อมูลออนไลน์ 
              เราพร้อมให้คำแนะนำเชิงลึกที่เป็นความลับและเห็นผลจริง
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 h-14 font-bold text-lg" asChild>
                <Link href="/contact">ติดต่องาน / ปรึกษาฟรี</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full px-8 h-14 font-bold text-lg" asChild>
                <Link href="/projects">ดูพอร์ตโฟลิโอ</Link>
              </Button>
            </div>
          </section>
        </Container>
      </div>
    </>
  )
}
