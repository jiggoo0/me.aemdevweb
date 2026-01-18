/** @format */
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
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
import { Layout, Rocket, ArrowRight, SearchSlash, ShieldCheck } from "lucide-react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 1. Typography
    h1: ({ className, ...props }) => (
      <h1 className={cn("mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)} {...props} />
    ),
    h2: ({ className, ...props }) => (
      <h2 className={cn("mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0", className)} {...props} />
    ),
    p: ({ className, ...props }) => (
      <p className={cn("leading-7 [&:not(:first-child)]:mt-6 text-neutral-700", className)} {...props} />
    ),

    // 2. การจัดการรูปภาพ (แก้ไขจุดที่ alt ถูกเขียนทับ)
    img: ({ alt, ...props }) => (
      <Image
        sizes="100vw"
        className="rounded-xl border shadow-md my-8"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
        // ✅ ต้องวาง alt ไว้หลังสุด เพื่อให้ค่าจาก MDX (ถ้ามี) ทับค่า Default
        // หรือถ้าไม่มีค่าส่งมา ก็จะใช้ "AEM DEV WEB..." เป็นค่าเริ่มต้น
        alt={alt || "AEM DEV WEB Content Image"} 
      />
    ),

    // 3. Navigation
    a: ({ href, className, ...props }) => (
      <Link
        href={href as string}
        className={cn("font-medium underline underline-offset-4 text-blue-600 hover:text-blue-800 transition-colors", className)}
        {...props}
      />
    ),

    // 4. Custom Components
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    Button,
    ProjectCard,
    
    // 5. Icons
    Layout,
    Rocket,
    ArrowRight,
    SearchSlash,
    ShieldCheck,

    ...components,
  };
}
