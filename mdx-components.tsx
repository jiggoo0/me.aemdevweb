/** @format */
import type { MDXComponents } from "mdx/types";
import Image from "next/image"; // ✅ ลบ ImageProps ออก
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
  Lock
} from "lucide-react";

// กำหนด Interface สำหรับ Props ของ Image ใน MDX
interface MdxImageProps {
  src?: string;
  alt?: string;
  [key: string]: unknown;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // 1. Typography Standard
    h1: ({ className, ...props }) => (
      <h1 className={cn("mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)} {...props} />
    ),
    h2: ({ className, ...props }) => (
      <h2 className={cn("mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0", className)} {...props} />
    ),
    p: ({ className, ...props }) => (
      <span className={cn("leading-7 [&:not(:first-child)]:mt-6 text-neutral-700 block", className)} {...props} />
    ),

    // 2. Optimized Image Management
    img: ({ alt, src, ...props }: MdxImageProps) => ( // ✅ ระบุ Type แทน any
      <span className="relative block w-full aspect-video my-8 overflow-hidden rounded-xl border shadow-md">
        <Image
          fill
          src={src || ""}
          alt={alt || "AEM DEV WEB Content Image"}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          {...props}
        />
      </span>
    ),

    // 3. Navigation & Registry
    a: ({ href, className, ...props }) => (
      <Link href={href as string} className={cn("font-medium underline underline-offset-4 text-blue-600 hover:text-blue-800 transition-colors", className)} {...props} />
    ),
    Link,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    Button,
    ProjectCard,

    // 4. Icons Mapping
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
    Lock
  };
}
