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
 * Header Component - Infrastructure Control Version
 * รองรับสถานะเมนูแบบไดนามิก และเอฟเฟกต์ Glassmorphism
 * ออกแบบมาเพื่อสร้างความเชื่อมั่นให้ธุรกิจ SME ด้วยโครงสร้างระบบที่มั่นคง
 */
export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ตรวจสอบการ Scroll เพื่อปรับเปลี่ยนสไตล์ (Visual Feedback)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ปิดเมนูมือถืออัตโนมัติเมื่อเปลี่ยนหน้า
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "หน้าแรก", href: "/" },
    { label: "รู้จักนายเอ็ม", href: "/about" },
    { label: "บริการ & ราคา", href: "/services" },
    { label: "เคสความสำเร็จ", href: "/projects" },
    { label: "คลังความรู้", href: "/blog" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-[100] w-full transition-all duration-500",
        isScrolled
          ? "border-b border-slate-200/60 bg-white/70 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-4"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* --- Logo Section: อัตลักษณ์แบรนด์ AEMDEVWEB --- */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white shadow-lg shadow-blue-600/30 transition-transform group-hover:scale-110 group-hover:rotate-3">
            A
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-slate-900 transition-colors group-hover:text-blue-600">
              AEMDEV<span className="text-blue-600">WEB</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">
              Specialist
            </span>
          </div>
        </Link>

        {/* --- Navigation Links (Desktop) --- */}
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
                  "relative py-2 text-xs font-black tracking-[0.2em] uppercase transition-all",
                  isActive
                    ? "text-blue-600"
                    : "text-slate-500 hover:text-slate-900"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-blue-600" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* --- Action Section --- */}
        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden h-12 rounded-full bg-slate-900 px-8 text-sm font-black tracking-widest uppercase shadow-xl transition-all hover:scale-105 hover:bg-blue-600 sm:flex"
          >
            <Link href="/contact">
              <Rocket className="mr-2 h-4 w-4" /> เริ่มโปรเจกต์
            </Link>
          </Button>

          {/* Mobile Menu Trigger */}
          <button
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 transition-all hover:bg-blue-50 hover:text-blue-600 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* --- Mobile Navigation Menu --- */}
      <div
        className={cn(
          "absolute top-full left-0 w-full overflow-hidden bg-white/95 backdrop-blur-2xl transition-all duration-500 ease-in-out lg:hidden",
          isMobileMenuOpen
            ? "max-h-[100vh] border-b border-slate-100 shadow-2xl"
            : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-6 p-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-2xl font-black tracking-tighter uppercase transition-colors",
                pathname === link.href ? "text-blue-600" : "text-slate-900"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 border-t border-slate-100 pt-6">
            <Button
              asChild
              className="h-16 w-full rounded-[2rem] bg-blue-600 text-lg font-black shadow-2xl shadow-blue-600/30"
            >
              <Link href="/contact">ปรึกษาโครงสร้างระบบกับนายเอ็ม</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
