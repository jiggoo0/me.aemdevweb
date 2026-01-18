/** @format */
"use client"; // เพิ่มเพื่อรองรับการเช็ค path ในฝั่ง client

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Header Component
 * ปรับปรุงให้รองรับเมนู Blog และการแสดงสถานะ Active Link
 */
export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { label: "หน้าแรก", href: "/" },
    { label: "เกี่ยวกับเรา", href: "/about" },
    { label: "บริการ", href: "/services" },
    { label: "ผลงาน", href: "/projects" },
    { label: "บล็อก", href: "/blog" }, // เพิ่มเมนู Blog สำหรับ Dynamic Blog
    { label: "ติดต่อ", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/50 bg-white/70 backdrop-blur-xl transition-all">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-1 group">
          <div className="bg-blue-600 text-white font-black px-1.5 py-0.5 rounded text-lg transition-transform group-hover:scale-110 shadow-sm">
            AEM
          </div>
          <span className="font-bold text-xl tracking-tighter text-neutral-900 group-hover:text-blue-600 transition-colors">
            DEV<span className="text-blue-600 italic">WEB</span>
          </span>
        </Link>
        
        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href}
                href={link.href} 
                className={cn(
                  "text-sm font-semibold transition-colors relative group",
                  isActive ? "text-blue-600" : "text-neutral-600 hover:text-blue-600"
                )}
              >
                {link.label}
                {/* Underline effect: แสดงเต็มถ้า active หรือแสดงตอน hover */}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300",
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Button asChild size="sm" className="hidden sm:flex bg-blue-600 hover:bg-blue-700 font-bold shadow-sm shadow-blue-200 rounded-full px-5">
            <Link href="/contact">เริ่มโปรเจกต์</Link>
          </Button>
          
          {/* Mobile Menu Trigger */}
          <button className="md:hidden p-2 text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors" aria-label="Open Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
}
