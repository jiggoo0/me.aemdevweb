/** @format */

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  author?: string;
  slug: string;
  className?: string;
}

/**
 * BlogCard Component - ฉบับเน้น Visual Hierarchy & SEO
 * ปรับปรุง: สัดส่วนภาพ 16:9 สำหรับ Desktop และปรับให้ดูคลีนขึ้นเพื่อการอ่านที่ง่าย
 */
export default function BlogCard({
  title,
  description,
  image,
  date,
  author = "Alongkorl",
  slug,
  className,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white transition-all duration-500",
        "hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10",
        className
      )}
    >
      {/* 🖼️ Image Section - ปรับสัดส่วนให้เป็นมาตรฐาน 16:9 */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <Image
          src={image || "/images/service/aemdevweb.webp"}
          alt={`บทความ: ${title}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        
        {/* Glassmorphism Date Badge */}
        <div className="absolute left-6 top-6">
          <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 backdrop-blur-md shadow-sm border border-white/20">
            <Calendar className="h-3.5 w-3.5 text-blue-600" />
            <span className="text-[10px] font-black tracking-widest text-slate-900 uppercase">
              {date}
            </span>
          </div>
        </div>
      </div>

      {/* 📝 Content Section - จัดลำดับความสำคัญของเนื้อหา */}
      <div className="flex flex-1 flex-col p-8 lg:p-10">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <User size={12} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            By {author}
          </span>
        </div>

        <h3 className="mb-4 line-clamp-2 text-xl font-black leading-tight text-slate-900 transition-colors group-hover:text-blue-600 lg:text-2xl">
          {title}
        </h3>

        <p className="mb-8 line-clamp-3 text-sm font-medium leading-relaxed text-slate-500 transition-colors group-hover:text-slate-600">
          {description}
        </p>

        {/* 🔗 Interactive Footer */}
        <div className="mt-auto flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.2em] text-blue-600">
          <span>อ่านบทความเจาะลึก</span>
          <div className="h-[2px] w-10 bg-blue-100 transition-all duration-500 group-hover:w-16 group-hover:bg-blue-600" />
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  );
}
