/** @format */
import Link from "next/link";
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from "lucide-react";
import Container from "./Container";
import SocialLinks from "../shared/SocialLinks";

/**
 * Footer Component
 * แสดงข้อมูลลิขสิทธิ์ ช่องทางติดต่อ และการเชื่อมโยงเครือข่ายธุรกิจ
 * ปรับปรุงให้รองรับ Next.js 15 และการจัดการ SEO เชิงเทคนิค
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  // ข้อมูลโปรไฟล์ที่อัปเดตตามจริงจากระบบ
  const profile = {
    name: "อลงกรณ์ ยมเกิด",
    nickname: "นายเอ็มซ่ามากส์",
    location: "กำแพงเพชร, ประเทศไทย",
    email: "jiggo0@outlook.co.th", // อัปเดตอีเมลตามข้อมูลล่าสุดของคุณ
    phone: "012-345-6789", // เปลี่ยนเป็นเบอร์จริงของคุณในภายหลัง
  };

  return (
    <footer className="w-full bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Section 1: Brand Identity & Strategy */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="flex flex-col group w-fit">
              <span className="text-2xl font-black text-white leading-none tracking-tight group-hover:text-blue-500 transition-colors">
                ALONGKORL
              </span>
              <span className="text-[10px] font-bold text-blue-500 tracking-[0.2em] uppercase mt-1">
                AemDevWeb Owner
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 italic">
              "ผู้อยู่เบื้องหลังโครงสร้างทางเทคนิคของ Unlink-th และผู้เชี่ยวชาญการพัฒนา Next.js 15 ครบวงจร"
            </p>
            <SocialLinks className="pt-2" />
          </div>

          {/* Section 2: Quick Navigation */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest border-l-2 border-blue-600 pl-3">
              เมนูหลัก
            </h4>
            <nav className="flex flex-col space-y-3 text-sm font-medium">
              <Link href="/" className="hover:text-blue-400 transition-colors">หน้าแรก</Link>
              <Link href="/about" className="hover:text-blue-400 transition-colors">เกี่ยวกับเรา</Link>
              <Link href="/services" className="hover:text-blue-400 transition-colors">บริการทั้งหมด</Link>
              <Link href="/projects" className="hover:text-blue-400 transition-colors">ผลงานที่ผ่านมา</Link>
              <Link href="/contact" className="hover:text-blue-400 transition-colors">ติดต่อจ้างงาน</Link>
            </nav>
          </div>

          {/* Section 3: Partner Case Study (SEO Boost) */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest border-l-2 border-slate-600 pl-3">
              Featured Case
            </h4>
            <div className="space-y-4">
              <Link 
                href="https://www.unlink-th.com" 
                target="_blank"
                className="group block p-4 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all shadow-sm"
              >
                <span className="text-xs font-bold text-blue-400 uppercase block mb-1">Unlink-th Platform</span>
                <span className="text-sm text-slate-200 flex items-center justify-between">
                  Reputation Management <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </span>
              </Link>
              <p className="text-[11px] text-slate-500 leading-relaxed px-1">
                *พัฒนาระบบและดูแลโครงสร้าง SEO เชิงเทคนิคให้กับแบรนด์ Unlink-th โดยตรง
              </p>
            </div>
          </div>

          {/* Section 4: Contact Details */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest border-l-2 border-blue-600 pl-3">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Phone size={16}/>
                </div>
                <a href={`tel:${profile.phone}`} className="hover:text-white transition-colors">{profile.phone}</a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={16}/>
                </div>
                <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors text-[13px]">{profile.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-blue-400">
                  <MapPin size={16}/>
                </div>
                <span className="text-slate-400">{profile.location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-slate-500 flex flex-col md:flex-row items-center gap-2 md:gap-4 font-mono">
            <span>© {currentYear} Alongkorl Yomkerd. All rights reserved.</span>
            <span className="hidden md:inline text-slate-800">|</span>
            <span className="flex items-center gap-1">
              <Globe className="w-3 h-3 animate-spin-slow" /> Kamphaeng Phet, TH
            </span>
          </div>
          
          <div className="flex items-center gap-4 bg-slate-900/50 px-3 py-1.5 rounded-full border border-slate-800">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
               Ready for New Projects
             </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
