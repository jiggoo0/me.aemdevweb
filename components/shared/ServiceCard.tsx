/** @format */

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  isDark?: boolean;
}

/**
 * ServiceCard Component - ฉบับปรับปรุงความเสถียร (Runtime Safe)
 * ใช้สำหรับแสดงรายการบริการหลัก (AEM Dev / Unlink-th) 
 * รองรับการแสดงผลทั้ง Light และ Dark Mode พร้อม Interaction ที่ลื่นไหล
 */
export default function ServiceCard({
  title,
  description,
  image,
  link = "#",
  isDark = false,
}: ServiceCardProps) {
  
  // ตรวจสอบความปลอดภัยของ Link เพื่อป้องกันปัญหา startsWith of undefined
  // และตรวจสอบว่าเป็นลิงก์ภายนอกหรือไม่
  const safeLink = typeof link === "string" ? link : "#";
  const isExternal = safeLink.startsWith("http");

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl",
        isDark 
          ? "bg-slate-900 border-slate-800 text-white shadow-blue-900/10" 
          : "bg-white border-slate-100 text-slate-900"
      )}
    >
      {/* 🖼️ Image Section - แสดงผลรูปภาพด้วยอัตราส่วนที่เหมาะสม */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={image || "/images/service/aemdevweb.webp"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={isDark} // ให้ความสำคัญกับรูปภาพบริการหลัก (Unlink-th)
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t transition-opacity duration-500",
          isDark ? "from-slate-950/90 via-slate-950/20 to-transparent" : "from-black/10 to-transparent"
        )} />
      </div>

      {/* 📝 Content Section - จัดวาง Typography ให้ประณีต */}
      <div className="flex flex-1 flex-col p-8 md:p-10">
        <h3 className="mb-4 text-2xl font-black uppercase tracking-tight md:text-3xl">
          {title}
        </h3>
        <p className={cn(
          "mb-10 text-sm font-medium leading-relaxed opacity-80 md:text-base",
          isDark ? "text-slate-300" : "text-slate-500"
        )}>
          {description}
        </p>

        <div className="mt-auto">
          {/* ✅ ลิงก์ที่ได้รับการตรวจสอบความถูกต้องแล้ว */}
          <Link
            href={safeLink}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={cn(
              "inline-flex w-full items-center justify-center rounded-2xl py-5 text-sm font-black uppercase tracking-[0.15em] transition-all active:scale-95 md:text-base",
              isDark 
                ? "bg-white text-slate-900 hover:bg-blue-600 hover:text-white" 
                : "bg-slate-900 text-white hover:bg-blue-600 shadow-lg shadow-slate-900/10"
            )}
          >
            รายละเอียดบริการ
            <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
