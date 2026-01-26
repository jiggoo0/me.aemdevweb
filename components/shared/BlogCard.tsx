/** @format */

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, User, Hash } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  author?: string;
  tags?: string[];
  slug: string;
  className?: string;
}

/**
 * BlogCard Component - Technical Specialist Edition
 * ออกแบบมาเพื่อสร้างลำดับความสำคัญของข้อมูลและการเข้าถึงเนื้อหา (SEO Optimization)
 */
export default function BlogCard({
  title,
  description,
  image,
  date,
  author = "นายอลงกรณ์ ยมเกิด",
  tags = [],
  slug,
  className,
}: BlogCardProps) {
  // ตรวจสอบ fallback image สำหรับบทความ
  const blogImage = image || "/images/blog/aemdevweb.webp";

  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white transition-all duration-500",
        "hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-900/10",
        className
      )}
    >
      {/* Media Section */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-50">
        <Image
          src={blogImage}
          alt={`บทความ: ${title}`}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* ข้อมูลวันที่แบบ Glassmorphism */}
        <div className="absolute top-5 left-5 z-10">
          <div className="flex items-center gap-2 rounded-2xl border border-white/40 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md">
            <Calendar className="h-3.5 w-3.5 text-blue-600" />
            <span className="text-[10px] font-black tracking-widest text-slate-900 uppercase">
              {date}
            </span>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-8 lg:p-9">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-600 border border-blue-100">
              <User size={13} />
            </div>
            <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
              {author}
            </span>
          </div>

          {tags.length > 0 && (
            <div className="flex items-center gap-1 text-[9px] font-black tracking-widest text-blue-500 uppercase">
              <Hash size={10} />
              <span>{tags[0]}</span>
            </div>
          )}
        </div>

        <h3 className="mb-4 line-clamp-2 text-xl leading-snug font-black text-slate-900 transition-colors group-hover:text-blue-600 lg:text-2xl">
          {title}
        </h3>

        <p className="mb-8 line-clamp-3 text-sm leading-relaxed font-medium text-slate-500 transition-colors group-hover:text-slate-600 md:text-base">
          {description}
        </p>

        {/* Action Bar */}
        <div className="mt-auto flex items-center gap-3 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase">
          <span className="transition-all group-hover:tracking-[0.3em]">
            อ่านเนื้อหาเจาะลึก
          </span>
          <div className="h-[2px] w-8 bg-blue-100 transition-all duration-500 group-hover:w-12 group-hover:bg-blue-600" />
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 transition-colors group-hover:bg-blue-600 group-hover:text-white">
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
