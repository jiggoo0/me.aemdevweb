/** @format */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Header Component - Specialist Edition
 * -------------------------------------------------------------------------
 * ระบบนำทางหลักที่เน้นความเร็วและการเข้าถึงข้อมูลที่ง่ายที่สุด
 * รองรับการแสดงผลแบบ Glassmorphism เพื่อความทันสมัยและสวยงาม
 * ออกแบบและดูแลระบบโดย: นายเอ็มซ่ามากส์
 */
export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ตรวจสอบการเลื่อนหน้าจอเพื่อปรับเปลี่ยนสไตล์ Header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ปิดเมนูบนมือถืออัตโนมัติเมื่อมีการเปลี่ยนหน้า
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "หน้าแรก", href: "/" },
    { label: "ทำความรู้จักกัน", href: "/about" },
    { label: "ผลงานและความสำเร็จ", href: "/projects" },
    { label: "คลังความรู้ SEO", href: "/blog" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-[100] w-full transition-all duration-500",
        isScrolled
          ? "border-b border-slate-200/60 bg-white/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-4"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* ส่วนแสดงสัญลักษณ์ (Brand Identity) */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white shadow-lg shadow-blue-600/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
            A
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-slate-950 transition-colors group-hover:text-blue-600">
              AEMDEV<span className="text-blue-600">WEB</span>
            </span>
            <span className="text-[9px] font-black tracking-[0.3em] text-slate-400 uppercase">
              Identity Hub
            </span>
          </div>
        </Link>

        {/* เมนูนำทางสำหรับหน้าจอขนาดใหญ่ (Desktop Navigation) */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-2 text-[11px] font-black tracking-[0.15em] uppercase transition-all",
                  isActive
                    ? "text-blue-600"
                    : "text-slate-500 hover:text-slate-950"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-blue-600" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ส่วนปุ่มดำเนินการหลัก (Action Hub) */}
        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden h-11 rounded-full bg-slate-950 px-8 text-xs font-black tracking-widest uppercase shadow-xl transition-all hover:scale-105 hover:bg-blue-600 sm:flex"
          >
            <Link href="/contact">
              <Rocket className="mr-2 h-3.5 w-3.5" /> ติดต่อพูดคุย
            </Link>
          </Button>

          {/* ปุ่มเปิด/ปิดเมนู สำหรับหน้าจอมือถือ */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-950 transition-all hover:bg-blue-50 hover:text-blue-600 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="เปิดเมนูนำทาง"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {/* เมนูนำทางบนมือถือ (Mobile Menu) */}
      <div
        className={cn(
          "absolute top-full left-0 w-full overflow-hidden bg-white/98 backdrop-blur-2xl transition-all duration-500 lg:hidden",
          isMobileMenuOpen
            ? "max-h-screen border-b border-slate-100 shadow-2xl"
            : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-6 p-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-3xl font-black tracking-tighter uppercase",
                pathname === link.href ? "text-blue-600" : "text-slate-950"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 border-t border-slate-100 pt-8">
            <Button
              asChild
              className="h-16 w-full rounded-2xl bg-blue-600 text-lg font-black shadow-2xl shadow-blue-600/30"
            >
              <Link href="/contact">เริ่มโปรเจกต์กับนายเอ็ม</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
