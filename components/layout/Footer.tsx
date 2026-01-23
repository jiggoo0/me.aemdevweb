/** @format */

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import Container from "./Container";
import SocialLinks from "../shared/SocialLinks";
import { siteConfig } from "@/constants/site-config";

/**
 * Footer Component - ฉบับพาร์ทเนอร์ดูแลระบบและ SEO Organic
 * ปรับปรุงการเชื่อมโยงข้อมูลให้สอดคล้องกับตัวตน อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)
 * เน้นความน่าเชื่อถือด้วยข้อมูลที่ชัดเจนและ Professional Dark UI
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  // ข้อมูลโปรไฟล์ อ้างอิงจาก siteConfig เพื่อความถูกต้องของข้อมูล (Single Source of Truth)
  const profile = {
    name: siteConfig.fullName || "อลงกรณ์ ยมเกิด",
    nickname: siteConfig.expert,
    location: "กรุงเทพมหานคร, ประเทศไทย",
    email: siteConfig.email,
    phone: "099-999-8989", // ระบุตามฐานข้อมูลผู้เชี่ยวชาญ
  };

  return (
    <footer className="w-full border-t border-slate-900 bg-slate-950 pt-24 pb-12 text-slate-300">
      <Container>
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Section 1: Brand Identity - ตัวตนในฐานะ Specialist */}
          <div className="space-y-8 lg:col-span-1">
            <Link href="/" className="group flex w-fit flex-col">
              <span className="text-3xl leading-none font-black tracking-tighter text-white transition-colors group-hover:text-blue-500">
                ALONGKORL
              </span>
              <span className="mt-1 text-[11px] font-black tracking-[0.3em] text-blue-500 uppercase">
                AEMDEVWEB OWNER
              </span>
            </Link>
            <p className="max-w-[240px] text-sm leading-relaxed font-medium text-slate-400 italic">
              "ที่ปรึกษาการพัฒนา Next.js และผู้วางรากฐาน Technical SEO
              ให้กับระบบ Unlink-th มุ่งเน้นการสร้าง Digital Asset ที่ยั่งยืน"
            </p>
            <SocialLinks variant="aemdevweb" className="pt-2" />
          </div>

          {/* Section 2: Quick Navigation - เมนูเพื่อการ Crawling ที่ดีขึ้น */}
          <div className="space-y-8">
            <h4 className="border-l-4 border-blue-600 pl-4 text-xs font-black tracking-[0.2em] text-white uppercase">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-4 text-sm font-bold">
              <Link href="/" className="transition-colors hover:text-blue-400">
                หน้าแรก
              </Link>
              <Link
                href="/about"
                className="transition-colors hover:text-blue-400"
              >
                รู้จักนายเอ็ม
              </Link>
              <Link
                href="/services"
                className="transition-colors hover:text-blue-400"
              >
                บริการและราคา
              </Link>
              <Link
                href="/projects"
                className="transition-colors hover:text-blue-400"
              >
                เคสความสำเร็จ
              </Link>
              <Link
                href="/blog"
                className="transition-colors hover:text-blue-400"
              >
                คลังความรู้ SEO
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-blue-400"
              >
                ติดต่อจ้างงาน
              </Link>
            </nav>
          </div>

          {/* Section 3: Authority Case Study - การเชื่อมโยงแบรนด์หลัก */}
          <div className="space-y-8">
            <h4 className="border-l-4 border-slate-600 pl-4 text-xs font-black tracking-[0.2em] text-white uppercase">
              Featured Work
            </h4>
            <div className="space-y-4">
              <Link
                href="https://www.unlink-th.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-[2rem] border border-slate-800 bg-slate-900/40 p-5 transition-all hover:border-blue-500/50 hover:bg-slate-900"
              >
                <div className="mb-2 flex items-center gap-2">
                  <ShieldCheck size={14} className="text-blue-400" />
                  <span className="text-[10px] font-black tracking-widest text-blue-400 uppercase">
                    Flagship Platform
                  </span>
                </div>
                <span className="flex items-center justify-between text-base font-black text-slate-100">
                  Unlink-th
                  <ArrowUpRight className="h-5 w-5 opacity-30 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </span>
                <p className="mt-2 text-[11px] font-medium text-slate-500">
                  พัฒนาระบบและดูแลโครงสร้าง SEO เชิงเทคนิคแบบ 100%
                </p>
              </Link>
            </div>
          </div>

          {/* Section 4: Contact Details - ข้อมูลการติดต่อ Professional */}
          <div className="space-y-8">
            <h4 className="border-l-4 border-blue-600 pl-4 text-xs font-black tracking-[0.2em] text-white uppercase">
              Contact
            </h4>
            <ul className="space-y-5 text-sm font-bold">
              <li className="group flex items-center gap-4">
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-blue-400 transition-all group-hover:bg-blue-600 group-hover:text-white">
                  <Phone size={18} />
                </div>
                <a
                  href={`tel:${profile.phone.replace(/-/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {profile.phone}
                </a>
              </li>
              <li className="group flex items-center gap-4">
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-blue-400 transition-all group-hover:bg-blue-600 group-hover:text-white">
                  <Mail size={18} />
                </div>
                <a
                  href={`mailto:${profile.email}`}
                  className="transition-colors hover:text-white"
                >
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-slate-500">
                  <MapPin size={18} />
                </div>
                <span className="text-slate-400">{profile.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer: Rights & System Integrity */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-slate-900 pt-12 md:flex-row">
          <div className="flex flex-col items-center gap-3 font-mono text-[10px] tracking-widest text-slate-500 uppercase md:flex-row md:gap-6">
            <span>© {currentYear} Alongkorl Yomkerd.</span>
            <span className="hidden text-slate-800 md:inline">•</span>
            <span className="flex items-center gap-2">
              <Globe className="h-3 w-3 animate-[spin_10s_linear_infinite] text-blue-500" />
              BANGKOK, THAILAND
            </span>
            <span className="hidden text-slate-800 md:inline">•</span>
            <span>Technical SEO Specialist</span>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 shadow-inner">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
              Project Availability: ACTIVE
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
