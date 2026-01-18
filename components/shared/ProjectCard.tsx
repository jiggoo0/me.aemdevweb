/** @format */
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
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
 * ProjectCard Component
 * ออกแบบมาเพื่อนำเสนอผลงานหรือ Case Study (เช่น Unlink-th หรือ AEM Dev)
 * รองรับการแสดงผลแบบ Responsive และมี Hover Effects ที่พรีเมียม
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
        "group flex flex-col h-full overflow-hidden transition-all duration-500",
        "hover:shadow-2xl hover:-translate-y-2 border-slate-100 bg-white shadow-sm",
        isFeatured && "border-blue-200 ring-1 ring-blue-50/50 shadow-blue-50/50",
        className
      )}
    >
      {/* --- Image Section --- */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={`Project: ${title}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
          priority={isFeatured} // โหลดรูปเร็วขึ้นสำหรับโปรเจกต์เด่น
        />
        
        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {isFeatured && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg animate-pulse">
              Featured Case
            </span>
          </div>
        )}
      </div>

      {/* --- Content Section --- */}
      <CardHeader className="space-y-3 p-6 pb-4">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-xl font-black text-slate-900 leading-tight transition-colors group-hover:text-blue-600">
            {title}
          </CardTitle>
          {link && (
            <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0">
              <ArrowRight size={20} />
            </div>
          )}
        </div>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 bg-slate-50 text-slate-500 border border-slate-100 rounded-md transition-colors group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardHeader>

      <CardContent className="flex-grow px-6 pb-6">
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 group-hover:text-slate-700 transition-colors">
          {description}
        </p>
      </CardContent>

      {/* --- Footer / Links Section --- */}
      <CardFooter className="px-6 py-5 border-t border-slate-50 flex items-center justify-between bg-slate-50/10 group-hover:bg-blue-50/20 transition-colors">
        <div className="flex gap-5">
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-black text-blue-600 hover:text-blue-800 transition-all uppercase tracking-tight"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Preview
            </Link>
          )}
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-black text-slate-400 hover:text-slate-900 transition-all uppercase tracking-tight"
            >
              <Github className="w-3.5 h-3.5" />
              Repository
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
