/** @format */

import Link from "next/link";
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from "lucide-react";
import Container from "./Container";
import SocialLinks from "../shared/SocialLinks";

/**
 * Footer Component - ฉบับพาร์ทเนอร์ดูแลระบบและ SEO Organic
 * ปรับปรุงการเชื่อมโยงข้อมูลให้สอดคล้องกับตัวตน Alongkorl Yomkerd (นายเอ็มซ่ามากส์)
 * เน้นความขลังและความน่าเชื่อถือด้วยข้อมูลที่ชัดเจนและ Professional UI
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  // ข้อมูลโปรไฟล์ที่อัปเดตตามจริง (อ้างอิงจากข้อมูลความเชี่ยวชาญล่าสุด)
  const profile = {
    name: "อลงกรณ์ ยมเกิด",
    nickname: "นายเอ็มซ่ามากส์",
    location: "กำแพงเพชร, ประเทศไทย",
    email: "me@aemdevweb.com", // ปรับให้เป็นอีเมลธุรกิจเพื่อความน่าเชื่อถือ
    phone: "012-345-6789", // แก้ไขเป็นเบอร์จริงของคุณเมื่อพร้อม
  };

  return (
    <footer className="w-full border-t border-slate-900 bg-slate-950 pt-20 pb-10 text-slate-300">
      <Container>
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Section 1: Brand Identity - เน้นความเป็นผู้อยู่เบื้องหลังระบบ */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="group flex w-fit flex-col">
              <span className="text-2xl font-black leading-none tracking-tight text-white transition-colors group-hover:text-blue-500">
                ALONGKORL
              </span>
              <span className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">
                AemDevWeb Owner
              </span>
            </Link>
            <p className="text-sm font-medium leading-relaxed italic text-slate-400">
              "ผู้อยู่เบื้องหลังโครงสร้างทางเทคนิคของ Unlink-th และที่ปรึกษาการพัฒนา Next.js ที่เน้นผลลัพธ์จาก SEO Organic ระดับลึก"
            </p>
            <SocialLinks variant="aemdevweb" className="pt-2" />
          </div>

          {/* Section 2: Quick Navigation - เมนูที่เข้าถึงง่ายช่วยเรื่อง SEO Crawling */}
          <div className="space-y-6">
            <h4 className="border-l-2 border-blue-600 pl-3 text-sm font-black uppercase tracking-widest text-white">
              เมนูหลัก
            </h4>
            <nav className="flex flex-col space-y-3 text-sm font-black">
              <Link href="/" className="transition-colors hover:text-blue-400">หน้าแรก</Link>
              <Link href="/about" className="transition-colors hover:text-blue-400">เกี่ยวกับเอ็ม</Link>
              <Link href="/services" className="transition-colors hover:text-blue-400">บริการทั้งหมด</Link>
              <Link href="/projects" className="transition-colors hover:text-blue-400">ผลงานที่ผ่านมา</Link>
              <Link href="/blog" className="transition-colors hover:text-blue-400">คลังความรู้ SEO</Link>
              <Link href="/contact" className="transition-colors hover:text-blue-400">ติดต่อจ้างงาน</Link>
            </nav>
          </div>

          {/* Section 3: Authority Proof - ตอกย้ำความเป็นเจ้าของระบบ Unlink-th */}
          <div className="space-y-6">
            <h4 className="border-l-2 border-slate-600 pl-3 text-sm font-black uppercase tracking-widest text-white">
              Featured Case
            </h4>
            <div className="space-y-4">
              <Link 
                href="https://www.unlink-th.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-slate-800 bg-slate-900/50 p-4 shadow-sm transition-all hover:border-blue-500/50"
              >
                <span className="mb-1 block text-xs font-black uppercase text-blue-400">Unlink-th Platform</span>
                <span className="flex items-center justify-between text-sm font-bold text-slate-200">
                  Reputation Management 
                  <ArrowUpRight className="h-4 w-4 opacity-50 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </span>
              </Link>
              <p className="px-1 text-[11px] font-medium leading-relaxed text-slate-500">
                *พัฒนาระบบและดูแลโครงสร้าง SEO เชิงเทคนิคให้กับแบรนด์ Unlink-th โดยตรง
              </p>
            </div>
          </div>

          {/* Section 4: Contact Details - ข้อมูลการติดต่อที่ชัดเจน */}
          <div className="space-y-6">
            <h4 className="border-l-2 border-blue-600 pl-3 text-sm font-black uppercase tracking-widest text-white">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-sm font-black">
              <li className="group flex items-center gap-3">
                <div className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-blue-400 transition-all group-hover:bg-blue-600 group-hover:text-white">
                  <Phone size={16}/>
                </div>
                <a href={`tel:${profile.phone}`} className="transition-colors hover:text-white">{profile.phone}</a>
              </li>
              <li className="group flex items-center gap-3">
                <div className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-blue-400 transition-all group-hover:bg-blue-600 group-hover:text-white">
                  <Mail size={16}/>
                </div>
                <a href={`mailto:${profile.email}`} className="text-[13px] transition-colors hover:text-white">{profile.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-blue-400">
                  <MapPin size={16}/>
                </div>
                <span className="text-slate-400">{profile.location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* --- Bottom Bar: Copyright & System Status --- */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-900 pt-8 md:flex-row">
          <div className="flex flex-col items-center gap-2 font-mono text-xs text-slate-500 md:flex-row md:gap-4">
            <span>© {currentYear} Alongkorl Yomkerd. All rights reserved.</span>
            <span className="hidden text-slate-800 md:inline">|</span>
            <span className="flex items-center gap-1">
              <Globe className="h-3 w-3 animate-[spin_10s_linear_infinite]" /> Kamphaeng Phet, TH
            </span>
          </div>
          
          <div className="flex items-center gap-4 rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1.5">
             <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
               Ready for New SEO Projects
             </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
