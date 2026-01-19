/** @format */

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  link?: string;
  github?: string;
  className?: string;
  isFeatured?: boolean;
}

/**
 * ProjectCard Component - ฉบับพาร์ทเนอร์ดูแลระบบ (Architect Style)
 * ออกแบบมาเพื่อเน้นผลลัพธ์ของโปรเจกต์ (Case Study) 
 * รองรับการแสดงผลแบบพรีเมียมที่ Google และลูกค้า SME ชื่นชอบ
 */
export default function ProjectCard({
  title,
  description,
  image,
  tags = [],
  link,
  github,
  className,
  isFeatured = false,
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "group flex h-full flex-col overflow-hidden transition-all duration-500",
        "border-slate-100 bg-white shadow-sm hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-900/10",
        isFeatured && "ring-2 ring-blue-600/5 shadow-blue-50/50 border-blue-200/60",
        className
      )}
    >
      {/* 🖼️ Image Section - แสดงผลงานแบบเน้น Performance */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
        <Image
          src={image || "/images/service/aemdevweb.webp"}
          alt={`Project Case: ${title}`}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={isFeatured}
        />

        {/* Gradient Overlay แบบนุ่มนวลเมื่อ Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {isFeatured && (
          <div className="absolute left-5 top-5 z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-blue-600/30 transition-transform group-hover:scale-105">
              <Star className="h-3 w-3 fill-white" /> Featured Case
            </span>
          </div>
        )}
      </div>

      {/* 📝 Header & Tags Section */}
      <CardHeader className="space-y-4 p-8 pb-4">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-2xl font-black leading-tight text-slate-900 transition-colors group-hover:text-blue-600">
            {title}
          </CardTitle>
          {link && (
            <div className="hidden md:block transform text-blue-600 opacity-0 transition-all duration-500 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100">
              <ArrowRight size={24} strokeWidth={3} />
            </div>
          )}
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-slate-100 bg-slate-50/50 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-500 transition-all group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardHeader>

      {/* 📄 Description Section */}
      <CardContent className="flex-grow px-8 pb-8">
        <p className="line-clamp-3 text-base font-medium leading-relaxed text-slate-500 transition-colors group-hover:text-slate-600">
          {description}
        </p>
      </CardContent>

      {/* 🔗 Footer Interaction */}
      <CardFooter className="flex items-center justify-between border-t border-slate-50 bg-slate-50/30 px-8 py-6 transition-colors group-hover:bg-blue-50/40">
        <div className="flex gap-8">
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.1em] text-blue-600 transition-all hover:text-blue-800 hover:gap-3"
            >
              <ExternalLink className="h-4 w-4" />
              Live Preview
            </Link>
          )}
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.1em] text-slate-400 transition-all hover:text-slate-900"
            >
              <Github className="h-4 w-4" />
              Repository
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
