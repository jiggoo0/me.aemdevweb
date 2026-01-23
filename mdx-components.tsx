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
import {
  Heart,
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
 * useMDXComponents - ฉบับการจัดการโครงสร้างระบบและ SEO Organic 2026
 * แก้ไขปัญหา Prerender Error และจัดการการแสดงผลระดับสมรรถนะสูง
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // 1. การจัดการหัวข้อ (Typography Standards)
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

    // ✅ การจัดการ Tag ย่อยเพื่อป้องกัน Hydration Error
    p: ({ className, ...props }) => (
      <span
        className={cn(
          "block text-lg leading-8 font-medium text-slate-600 [&:not(:first-child)]:mt-6",
          className
        )}
        {...props}
      />
    ),

    // 2. การจัดการสื่อ (Media Optimization for LCP)
    img: ({ alt, src, ...props }: MdxImageProps) => (
      <span className="relative my-10 block aspect-video w-full overflow-hidden rounded-[2rem] border-2 border-slate-100 shadow-xl">
        <Image
          fill
          src={src || ""}
          alt={alt || "AEMDEVWEB Content Image"}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 75vw"
          {...props}
        />
      </span>
    ),

    // 3. การนำทาง (Navigation Hub)
    Link,
    a: ({ href, className, ...props }) => (
      <Link
        href={href as string}
        className={cn(
          "font-bold text-blue-600 underline underline-offset-4 hover:text-blue-800",
          className
        )}
        {...props}
      />
    ),

    // 4. การลงทะเบียนคอมโพเนนต์ (Custom Components)
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

    // 5. การลงทะเบียน Icon (Icon Registry)
    Heart,
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
