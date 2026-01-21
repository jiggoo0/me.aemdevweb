/** @format */

import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Star,
  ShieldCheck,
} from "lucide-react";
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
 * 🏗️ ProjectCard Component - ฉบับพาร์ทเนอร์ดูแลระบบ (Architect Style)
 * เน้นการนำเสนอ Case Study ให้ดูมีมูลค่าและน่าเชื่อถือในระดับสูงสุด
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
        "group flex h-full flex-col overflow-hidden transition-all duration-700",
        "border-slate-100 bg-white shadow-sm hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(30,58,138,0.15)]",
        isFeatured &&
          "border-blue-100 ring-2 shadow-blue-50/50 ring-blue-600/10",
        className
      )}
    >
      {/* 🖼️ Image Section - Performance Optimized */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
        <Image
          src={image || "/images/service/aemdevweb.webp"}
          alt={`Project Case: ${title}`}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={isFeatured}
        />

        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        {/* Status Badges */}
        <div className="absolute top-6 left-6 z-10 flex flex-col gap-3">
          {isFeatured && (
            <span className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-2.5 text-[10px] font-black tracking-[0.2em] text-white uppercase shadow-2xl shadow-blue-600/40 transition-all group-hover:scale-105">
              <Star className="h-3.5 w-3.5 fill-white" /> Featured Case
            </span>
          )}
          {title.includes("Unlink-th") && (
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/50 bg-white/90 px-4 py-2 text-[9px] font-black tracking-[0.15em] text-slate-900 uppercase backdrop-blur-md">
              <ShieldCheck className="h-3 w-3 text-blue-600" /> System Architect
            </span>
          )}
        </div>
      </div>

      {/* 📝 Content Header */}
      <CardHeader className="space-y-5 p-8 pb-4 lg:p-10">
        <div className="flex items-start justify-between gap-6">
          <CardTitle className="text-2xl leading-tight font-black text-slate-900 transition-colors group-hover:text-blue-600 lg:text-3xl">
            {title}
          </CardTitle>
          {link && (
            <div className="hidden shrink-0 -translate-x-4 rounded-full bg-blue-50 p-2 text-blue-600 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 md:flex">
              <ArrowRight size={20} strokeWidth={3} />
            </div>
          )}
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-2 text-[9px] font-black tracking-[0.2em] text-slate-500 uppercase transition-all group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardHeader>

      {/* 📄 Description Body */}
      <CardContent className="flex-grow px-8 pb-10 lg:px-10">
        <p className="line-clamp-3 text-base leading-relaxed font-medium text-slate-500 transition-colors group-hover:text-slate-700 md:text-lg">
          {description}
        </p>
      </CardContent>

      {/* 🔗 Interactive Footer */}
      <CardFooter className="flex items-center justify-between border-t border-slate-50 bg-slate-50/20 px-8 py-7 transition-colors group-hover:bg-blue-50/30 lg:px-10">
        <div className="flex items-center gap-8">
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 text-[11px] font-black tracking-[0.2em] text-blue-600 uppercase transition-all hover:text-blue-800"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live Preview</span>
            </Link>
          )}
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.2em] text-slate-400 uppercase transition-all hover:text-slate-900"
            >
              <Github className="h-4 w-4" />
              <span>Repository</span>
            </Link>
          )}
        </div>

        {/* Subtle Indicator */}
        <div className="h-1.5 w-1.5 rounded-full bg-slate-200 transition-all group-hover:w-8 group-hover:bg-blue-600" />
      </CardFooter>
    </Card>
  );
}
