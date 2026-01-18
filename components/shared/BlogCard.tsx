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
        "group flex flex-col h-full bg-white rounded-[2rem] border border-slate-100 overflow-hidden transition-all duration-500",
        "hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2",
        className
      )}
    >
      {/* Image Section */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-w-768px) 100vw, 33vw"
        />
        {/* Date Badge */}
        <div className="absolute top-4 left-4">
          <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
            <Calendar className="w-3 h-3 text-blue-600" />
            <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">
              {date}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-7">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
            <User className="w-3 h-3 text-blue-600" />
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            By {author}
          </span>
        </div>

        <h3 className="text-xl font-black text-slate-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-6 font-medium">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center text-blue-600 font-black text-[11px] uppercase tracking-widest gap-2">
          Read Article
          <div className="w-8 h-[2px] bg-blue-100 group-hover:w-12 group-hover:bg-blue-600 transition-all duration-500" />
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
