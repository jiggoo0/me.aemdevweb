/** @format */
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

// --- [UI & Icons Components] ---
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/shared/ProjectCard";
import {
  Layout,
  Rocket,
  ArrowRight,
  Search,
  ShieldCheck,
  Sparkles,
  MousePointer2,
  Zap,
  CheckCircle2,
  Star,
  EyeOff,
  UserCheck,
  Lock,
  TrendingUp,
  HeartHandshake,
  Layers,
  XCircle,
  Info,
  AlertCircle,
  Lightbulb,
  Target,
  BarChart3,
  Globe,
  LayoutGrid,
  Store,
  MapPin,    // ✅ สำหรับปักหมุดทำเลทอง
  PiggyBank, // ✅ สำหรับการลงทุนและประหยัดงบ
  Users,     // ✅ สำหรับกลุ่มเป้าหมายและ SME
} from "lucide-react";

interface MdxImageProps {
  src?: string;
  alt?: string;
  [key: string]: unknown;
}

/**
 * useMDXComponents - ฉบับพาร์ทเนอร์ดูแลระบบและ SEO Organic
 * ปรับปรุง: ลงทะเบียนคอมโพเนนต์และไอคอนครบวงจร เพื่อป้องกัน ReferenceError
 * และแก้ไข Hydration Error ด้วยการใช้ span block แทน p สำหรับเนื้อหา MDX
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // 1. Typography Standard - เน้นความพรีเมียมสไตล์ Architect
    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          "mt-4 scroll-m-20 text-4xl font-black tracking-tight text-slate-900 lg:text-5xl",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          "mt-12 scroll-m-20 border-b pb-3 text-3xl font-bold tracking-tight text-slate-800 transition-colors first:mt-0",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn(
          "mt-8 scroll-m-20 text-2xl font-bold tracking-tight text-slate-800",
          className
        )}
        {...props}
      />
    ),

    // ✅ ป้องกัน Hydration Error: ใช้ <span> display: block แทน <p> 
    // เพื่อให้สามารถวาง Component บล็อกภายใน MDX ได้โดยไม่ผิดกฎ HTML
    p: ({ className, ...props }) => (
      <span
        className={cn(
          "block text-lg font-medium leading-8 text-slate-600 [&:not(:first-child)]:mt-6",
          className
        )}
        {...props}
      />
    ),

    ul: ({ className, ...props }) => (
      <ul
        className={cn(
          "my-6 ml-6 list-disc font-medium space-y-3 text-slate-600",
          className
        )}
        {...props}
      />
    ),
    blockquote: ({ className, ...props }) => (
      <div
        className={cn(
          "my-10 flex items-center gap-6 rounded-3xl bg-blue-50/50 p-8 border-l-8 border-blue-600 md:rounded-r-[2.5rem]",
          className
        )}
      >
        <Lightbulb className="hidden h-10 w-10 text-blue-600 shrink-0 md:block" />
        <blockquote
          className="text-lg font-bold italic text-blue-900"
          {...props}
        />
      </div>
    ),

    // 2. Optimized Image Management - รองรับ Image Optimization
    img: ({ alt, src, ...props }: MdxImageProps) => (
      <span className="relative my-10 block aspect-video w-full overflow-hidden rounded-[2rem] border-2 border-slate-100 shadow-xl transition-transform hover:scale-[1.01]">
        <Image
          fill
          src={src || ""}
          alt={alt || "AEM DEV WEB Content Image"}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
          {...props}
        />
      </span>
    ),

    // 3. Navigation & Registry
    Link,
    a: ({ href, className, ...props }) => (
      <Link
        href={href as string}
        className={cn(
          "font-bold text-blue-600 underline underline-offset-4 transition-colors hover:text-blue-800",
          className
        )}
        {...props}
      />
    ),

    // 4. Custom Components & UI Registry
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    Button,
    Badge,
    ProjectCard,

    // 5. Icons Mapping - ลงทะเบียนให้ MDX เรียกใช้งานได้โดยตรงตามชื่อคอมโพเนนต์
    Layout,
    Rocket,
    ArrowRight,
    Search,
    ShieldCheck,
    Sparkles,
    MousePointer2,
    Zap,
    CheckCircle2,
    Star,
    EyeOff,
    UserCheck,
    Lock,
    TrendingUp,
    HeartHandshake,
    Layers,
    XCircle,
    Info,
    AlertCircle,
    Lightbulb,
    Target,
    BarChart3,
    Globe,
    LayoutGrid,
    Store,
    MapPin,
    PiggyBank,
    Users,
  };
}
