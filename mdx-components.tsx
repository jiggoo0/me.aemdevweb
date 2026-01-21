/** @format */
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// --- [Profile & Shared Components] ---
import Hero from "@/components/profile/Hero";
import ContactInfo from "@/components/profile/ContactInfo";
import ProjectCard from "@/components/shared/ProjectCard";

// --- [UI Components] ---
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
import { Input } from "@/components/ui/input";

// --- [Lucide Icons Registry] ---
// รวบรวม Icons ทั้งหมดที่ใช้ในหน้า About, Contact และ Blog
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
  MapPin,
  PiggyBank,
  Users,
  PenTool,
  Terminal,
  Mail,
  MessageSquare,
  Send,
  Clock,
  Phone,
  Facebook,
} from "lucide-react";

interface MdxImageProps {
  src?: string;
  alt?: string;
  [key: string]: unknown;
}

/**
 * useMDXComponents - ฉบับพาร์ทเนอร์ดูแลระบบและ SEO Organic
 * จัดการเรื่อง Registry คอมโพเนนต์เพื่อให้ไฟล์ .mdx เรียกใช้ Tag ได้โดยไม่ต้อง Import ซ้ำ
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // 1. Typography & Layout Standard
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

    // ✅ ป้องกัน Hydration Error ใน Next.js 15/16 โดยการใช้ span/div แทน p ในบางกรณี
    p: ({ className, ...props }) => (
      <span
        className={cn(
          "block text-lg leading-8 font-medium text-slate-600 [&:not(:first-child)]:mt-6",
          className
        )}
        {...props}
      />
    ),

    ul: ({ className, ...props }) => (
      <ul
        className={cn(
          "my-6 ml-6 list-disc space-y-3 font-medium text-slate-600",
          className
        )}
        {...props}
      />
    ),

    blockquote: ({ className, ...props }) => (
      <div
        className={cn(
          "my-10 flex items-center gap-6 rounded-3xl border-l-8 border-blue-600 bg-blue-50/50 p-8 md:rounded-r-[2.5rem]",
          className
        )}
      >
        <Lightbulb className="hidden h-10 w-10 shrink-0 text-blue-600 md:block" />
        <blockquote
          className="text-lg font-bold text-blue-900 italic"
          {...props}
        />
      </div>
    ),

    // 2. Media Optimization
    img: ({ alt, src, ...props }: MdxImageProps) => (
      <span className="relative my-10 block aspect-video w-full overflow-hidden rounded-[2rem] border-2 border-slate-100 shadow-xl transition-transform hover:scale-[1.01]">
        <Image
          fill
          src={src || ""}
          alt={alt || "AEMDEVWEB Content Image"}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
          {...props}
        />
      </span>
    ),

    // 3. Navigation
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

    // 4. Custom Registry (ลงทะเบียนเพื่อใช้ในไฟล์ .mdx)
    Hero,
    ContactInfo,
    ProjectCard,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    Button,
    Badge,
    Input,

    // 5. Lucide Icons Registry
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
    PenTool,
    Terminal,
    Mail,
    MessageSquare,
    Send,
    Clock,
    Phone,
    Facebook,
  };
}
