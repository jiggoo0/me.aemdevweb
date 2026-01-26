/** @format */

import Link from "next/link";
import {
  Mail,
  // Phone ถูกลบออกเนื่องจากไม่ได้ใช้งาน (Unused Var)
  MapPin,
  Globe,
  ArrowUpRight,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import Container from "./Container";
import SocialLinks from "../shared/SocialLinks";
import { siteConfig } from "@/constants/site-config";

/**
 * Footer Component - Infrastructure Lead Version
 * รวมศูนย์ข้อมูลอัตลักษณ์ นายอลงกรณ์ ยมเกิด (นายเอ็มซ่าส์)
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-900 bg-slate-950 pt-24 pb-12 text-slate-300 antialiased">
      <Container>
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* 1. Identity & Vision: ข้อมูลตัวตนหลัก */}
          <div className="space-y-8 lg:col-span-1">
            <Link href="/" className="group flex w-fit flex-col">
              <span className="text-3xl font-black tracking-tighter text-white transition-colors group-hover:text-blue-500">
                ALONGKORL
              </span>
              <span className="mt-1 text-[10px] font-black tracking-[0.3em] text-blue-500 uppercase">
                {siteConfig.companyName} OWNER
              </span>
            </Link>
            <p className="max-w-[240px] text-sm leading-relaxed font-medium italic text-slate-400">
              &quot;ผู้วางรากฐาน Technical SEO ให้กับระบบ Unlink-th มุ่งเน้นการสร้าง Digital Asset ที่ยั่งยืน&quot;
            </p>
            <SocialLinks variant="aemdevweb" className="pt-2" />
          </div>

          {/* 2. Navigation Hub: แผนผังการเข้าถึงเนื้อหา */}
          <div className="space-y-8">
            <h4 className="border-l-4 border-blue-600 pl-4 text-[11px] font-black tracking-[0.2em] text-white uppercase">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-4 text-sm font-bold">
              {[
                { label: "หน้าแรก", href: "/" },
                { label: "รู้จักนายเอ็ม", href: "/about" },
                { label: "เคสความสำเร็จ", href: "/projects" },
                { label: "คลังความรู้ SEO", href: "/blog" },
                { label: "ติดต่อจ้างงาน", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="w-fit transition-colors hover:text-blue-400">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* 3. Flagship Showcase: ผลงานชิ้นเอก */}
          <div className="space-y-8">
            <h4 className="border-l-4 border-slate-600 pl-4 text-[11px] font-black tracking-[0.2em] text-white uppercase">
              Featured Work
            </h4>
            <Link
              href={siteConfig.commercialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-[2rem] border border-slate-800 bg-slate-900/40 p-5 transition-all hover:border-blue-500/50 hover:bg-slate-900"
            >
              <div className="mb-2 flex items-center gap-2">
                <ShieldCheck size={14} className="text-blue-400" />
                <span className="text-[9px] font-black tracking-widest text-blue-400 uppercase">
                  Flagship Platform
                </span>
              </div>
              <span className="flex items-center justify-between text-base font-black text-slate-100">
                Unlink-th
                <ArrowUpRight className="h-5 w-5 opacity-30 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
              </span>
              <p className="mt-2 text-[11px] font-medium text-slate-500">
                ดูแลโครงสร้าง SEO เชิงเทคนิคแบบครบวงจร
              </p>
            </Link>
          </div>

          {/* 4. Connection Channels: ช่องทางสื่อสารตรง */}
          <div className="space-y-8">
            <h4 className="border-l-4 border-blue-600 pl-4 text-[11px] font-black tracking-[0.2em] text-white uppercase">
              Contact
            </h4>
            <ul className="space-y-5 text-sm font-bold">
              <li className="group flex items-center gap-4">
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-blue-400 transition-all group-hover:bg-blue-600 group-hover:text-white">
                  <Mail size={18} />
                </div>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li className="group flex items-center gap-4">
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-blue-400 transition-all group-hover:bg-blue-600 group-hover:text-white">
                  <MessageCircle size={18} />
                </div>
                <a 
                  href={siteConfig.contact.line} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Line Official
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-slate-500">
                  <MapPin size={18} />
                </div>
                <span className="text-slate-400">Bangkok, Thailand</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Integrity Bar: แถบสถานะระบบ */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-slate-900 pt-12 md:flex-row">
          <div className="flex flex-col items-center gap-3 font-mono text-[9px] tracking-widest text-slate-500 uppercase md:flex-row md:gap-6">
            <span>© {currentYear} {siteConfig.fullName}</span>
            <span className="hidden text-slate-800 md:inline">•</span>
            <span className="flex items-center gap-2">
              <Globe className="h-3 w-3 animate-[spin_10s_linear_infinite] text-blue-500" />
              IDENTITY HUB
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 shadow-2xl">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
              Status: Active Specialist
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
