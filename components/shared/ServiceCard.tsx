/** @format */

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  isDark?: boolean;
  features?: string[]; // ✅ เพิ่มเพื่อแสดงจุดเด่นของบริการนั้นๆ
}

/**
 * 🏗️ ServiceCard Component - ฉบับปรับปรุงความเสถียร (Runtime Safe)
 * ออกแบบมาเพื่อแยกความต่างระหว่างบริการ Web Dev ทั่วไป กับ Exclusive Service ของ Unlink-th
 */
export default function ServiceCard({
  title,
  description,
  image,
  link = "#",
  isDark = false,
  features = [],
}: ServiceCardProps) {
  // ตรวจสอบความปลอดภัยและความถูกต้องของ URL
  const safeLink = typeof link === "string" ? link : "#";
  const isExternal = safeLink.startsWith("http");

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[2.5rem] border transition-all duration-700 hover:-translate-y-3",
        isDark
          ? "border-slate-800 bg-slate-900 text-white shadow-[0_30px_60px_-15px_rgba(30,58,138,0.3)]"
          : "border-slate-100 bg-white text-slate-900 hover:shadow-2xl hover:shadow-blue-900/10"
      )}
    >
      {/* 🖼️ Image Section - ปรับสัดส่วน 16:10 ให้ดูเต็มตา */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-800">
        <Image
          src={image || "/images/service/aemdevweb.webp"}
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={isDark}
        />
        {/* Decorative Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t transition-opacity duration-700",
            isDark
              ? "from-slate-950/95 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-80"
              : "from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100"
          )}
        />
      </div>

      {/* 📝 Content Section */}
      <div className="flex flex-1 flex-col p-8 md:p-12">
        <div className="mb-6">
          <h3 className="mb-4 text-2xl font-black tracking-tight uppercase md:text-3xl lg:text-4xl">
            {title}
          </h3>
          <p
            className={cn(
              "text-base leading-relaxed font-medium opacity-70 md:text-lg",
              isDark ? "text-slate-300" : "text-slate-500"
            )}
          >
            {description}
          </p>
        </div>

        {/* ✅ Features List (ถ้ามี) - ช่วยปิดการขายได้ดีขึ้น */}
        {features.length > 0 && (
          <ul className="mb-10 space-y-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm font-bold tracking-tight"
              >
                <CheckCircle2
                  className={cn(
                    "h-4 w-4",
                    isDark ? "text-blue-400" : "text-blue-600"
                  )}
                />
                <span className={isDark ? "text-slate-400" : "text-slate-600"}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto">
          <Link
            href={safeLink}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={cn(
              "inline-flex w-full items-center justify-center rounded-[1.25rem] py-5 text-sm font-black tracking-[0.2em] uppercase transition-all active:scale-95 md:text-base",
              isDark
                ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20 hover:bg-white hover:text-blue-600"
                : "bg-slate-900 text-white shadow-xl shadow-slate-900/10 hover:bg-blue-600"
            )}
          >
            รายละเอียดบริการ
            <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* 🛡️ Exclusive Badge สำหรับบริการ Dark Mode (เช่น Unlink-th) */}
      {isDark && (
        <div className="absolute top-8 right-8 z-10 rounded-full border border-blue-400/20 bg-blue-600/10 px-4 py-1.5 backdrop-blur-md">
          <span className="text-[10px] font-black tracking-[0.2em] text-blue-400 uppercase">
            Premium Solution
          </span>
        </div>
      )}
    </div>
  );
}
