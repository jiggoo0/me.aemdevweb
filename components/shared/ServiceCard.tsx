/** @format */
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link?: string; // เปลี่ยนเป็น Optional เพื่อความยืดหยุ่น
  isDark?: boolean;
}

/**
 * ServiceCard Component
 * แก้ไขปัญหา Runtime Error: Cannot read properties of undefined (reading 'startsWith')
 */
export default function ServiceCard({
  title,
  description,
  image,
  link = "#", // ตั้งค่า Default เป็น string ว่างเพื่อป้องกัน undefined
  isDark = false,
}: ServiceCardProps) {
  
  // ตรวจสอบความปลอดภัยก่อนใช้เมธอด .startsWith()
  // ใช้ Optional Chaining และ Fallback เป็น false
  const isExternal = typeof link === "string" && link.startsWith("http");

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl",
        isDark 
          ? "bg-slate-900 border-slate-800 text-white" 
          : "bg-white border-slate-100 text-slate-900"
      )}
    >
      {/* ส่วนรูปภาพ (Image Section) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={image || "/images/service/aemdevweb.webp"} // Fallback image ถ้าไม่มีรูป
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-w-768px) 100vw, 50vw"
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t transition-opacity duration-500",
          isDark ? "from-slate-950/80 to-transparent" : "from-white/20 to-transparent"
        )} />
      </div>

      {/* ส่วนเนื้อหา (Content Section) */}
      <div className="flex flex-1 flex-col p-8 md:p-10">
        <h3 className="mb-4 text-2xl md:text-3xl font-black tracking-tight uppercase">
          {title}
        </h3>
        <p className={cn(
          "mb-8 text-sm md:text-base leading-relaxed opacity-70 font-medium",
          isDark ? "text-slate-300" : "text-slate-500"
        )}>
          {description}
        </p>

        <div className="mt-auto">
          {/* แก้ไขจุดที่เป็นปัญหา: ตรวจสอบค่า link ก่อนเรนเดอร์ */}
          <Link
            href={link}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={cn(
              "inline-flex w-full items-center justify-center rounded-2xl py-5 text-sm md:text-base font-black uppercase tracking-widest transition-all active:scale-95",
              isDark 
                ? "bg-white text-slate-900 hover:bg-blue-600 hover:text-white" 
                : "bg-slate-900 text-white hover:bg-blue-600"
            )}
          >
            รายละเอียดบริการ
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
