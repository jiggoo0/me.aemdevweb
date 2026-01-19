/** @format */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Header Component - ฉบับปรับปรุงความลื่นไหล (Premium Interaction)
 * รองรับการแสดงสถานะเมนูแบบไดนามิก และเอฟเฟกต์ Glassmorphism
 * ออกแบบมาเพื่อเป็นจุดเริ่มต้นของการสร้าง Trust ให้กับธุรกิจ SME
 */
export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ตรวจสอบการ Scroll เพื่อปรับเปลี่ยนสไตล์ของ Header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ปิดเมนูมือถือเมื่อมีการเปลี่ยนหน้า
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "หน้าแรก", href: "/" },
    { label: "เกี่ยวกับเอ็ม", href: "/about" },
    { label: "บริการ", href: "/services" },
    { label: "ผลงาน", href: "/projects" },
    { label: "คลังความรู้", href: "/blog" },
    { label: "ติดต่อเรา", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-slate-200/50 bg-white/80 backdrop-blur-xl"
          : "bg-transparent py-2"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* --- Logo Section: อัตลักษณ์แบรนด์ AEM DEV WEB --- */}
        <Link href="/" className="group flex items-center gap-1.5">
          <div className="rounded bg-blue-600 px-2 py-1 text-lg font-black text-white shadow-sm transition-transform group-hover:scale-110">
            AEM
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-900 transition-colors group-hover:text-blue-600">
            DEV<span className="italic text-blue-600">WEB</span>
          </span>
        </Link>

        {/* --- Navigation Links (Desktop) --- */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            // เช็ค Active State (รวมถึงหน้าย่อย เช่น /blog/[slug])
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative group text-sm font-black uppercase tracking-widest transition-colors",
                  isActive ? "text-blue-600" : "text-slate-500 hover:text-blue-600"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* --- Action Section --- */}
        <div className="flex items-center gap-4">
          <Button
            asChild
            size="sm"
            className="hidden rounded-full bg-blue-600 px-6 font-black shadow-lg shadow-blue-600/20 transition-transform hover:scale-105 hover:bg-blue-700 sm:flex"
          >
            <Link href="/contact">เริ่มโปรเจกต์</Link>
          </Button>

          {/* Mobile Menu Trigger */}
          <button
            className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 md:hidden"
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
          "absolute left-0 top-[65px] w-full border-b bg-white p-6 shadow-xl transition-all duration-300 md:hidden",
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-lg font-black uppercase tracking-widest transition-colors",
                pathname === link.href ? "text-blue-600" : "text-slate-600"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="mt-4 w-full rounded-full bg-blue-600 font-black h-12"
          >
            <Link href="/contact">เริ่มโปรเจกต์กับเรา</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
