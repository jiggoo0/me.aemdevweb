/** @format */

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Star, Eye } from "lucide-react"; // ลบ ArrowRight และ ShieldCheck ออก
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
  slug: string; // คีย์สำหรับทำ Internal Link
  title: string;
  description: string;
  image: string;
  tags?: string[];
  link?: string; // ลิงก์ภายนอกไปยังเว็บไซต์จริง
  className?: string;
  isFeatured?: boolean;
}

/**
 * ProjectCard - Selected Case Showcase
 * นำเสนอโครงการด้วยการเน้นภาพลักษณ์ความสำเร็จเชิงเทคนิค
 */
export default function ProjectCard({
  slug,
  title,
  description,
  image,
  tags = [],
  link,
  className,
  isFeatured = false,
}: ProjectCardProps) {
  const displayImage = image || "/images/service/aemdevweb.webp";

  return (
    <Card
      className={cn(
        "group flex h-full flex-col overflow-hidden transition-all duration-700",
        "border-slate-100 bg-white shadow-sm hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(30,58,138,0.12)]",
        isFeatured && "border-blue-100 ring-1 ring-blue-600/10 shadow-blue-50/50",
        className
      )}
    >
      {/* 1. Image & Badge Overlay */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={displayImage}
          alt={`Project Case: ${title}`}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={isFeatured}
        />
        {/* Gradient Overlay สำหรับดึงระยะชัดลึกตอน Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {isFeatured && (
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-1.5 text-[10px] font-black tracking-widest text-white uppercase shadow-xl">
              <Star className="h-3 w-3 fill-white" /> Featured Case
            </span>
          )}
        </div>
      </div>

      {/* 2. Header & Tags */}
      <CardHeader className="space-y-4 p-6 lg:p-8">
        <CardTitle className="text-xl leading-tight font-black text-slate-900 transition-colors group-hover:text-blue-600 lg:text-2xl">
          {title}
        </CardTitle>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-slate-100 bg-slate-50/80 px-3 py-1 text-[9px] font-black tracking-wider text-slate-500 uppercase transition-all group-hover:bg-blue-50 group-hover:text-blue-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardHeader>

      {/* 3. Narrative Description */}
      <CardContent className="flex-grow px-6 pb-6 lg:px-8">
        <p className="line-clamp-3 text-sm leading-relaxed font-medium text-slate-500 transition-colors group-hover:text-slate-700">
          {description}
        </p>
      </CardContent>

      {/* 4. Functional Actions (Internal vs External) */}
      <CardFooter className="grid grid-cols-2 gap-3 border-t border-slate-50 bg-slate-50/20 px-6 py-5 lg:px-8">
        <Button
          asChild
          variant="outline"
          className="h-11 rounded-xl border-slate-200 text-[11px] font-black tracking-widest uppercase transition-all hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
        >
          <Link href={`/projects/${slug}`}>
            <Eye className="mr-2 h-3.5 w-3.5" />
            ชมผลงาน
          </Link>
        </Button>

        {link ? (
          <Button
            asChild
            className="h-11 rounded-xl bg-slate-900 text-[11px] font-black tracking-widest uppercase shadow-lg shadow-slate-900/10 transition-all hover:bg-blue-600"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-3.5 w-3.5" />
              เว็บไซต์
            </a>
          </Button>
        ) : (
          <div className="flex items-center justify-center text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
            Infrastructure
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
