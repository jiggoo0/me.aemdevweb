/** @format */

import { Facebook, MessageCircle, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  variant?: "aemdevweb" | "unlink";
  showLabel?: boolean;
}

/**
 * 🏗️ SocialLinks Component (v2.3 - LinkedIn Custom URL Updated)
 * ออกแบบมาเพื่อสร้างการเชื่อมต่อระหว่างพาร์ทเนอร์กับลูกค้า
 * อัปเดต LinkedIn URL เป็นภาษาอังกฤษเพื่อประสิทธิภาพสูงสุดด้าน SEO
 */
export default function SocialLinks({
  className,
  variant = "aemdevweb",
  showLabel = true,
}: SocialLinksProps) {
  // ชุดข้อมูลลิงก์ที่ได้รับการตรวจสอบความถูกต้อง (อัปเดต LinkedIn URL ใหม่)
  const links =
    variant === "aemdevweb"
      ? [
          {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/alongkorl-aemdevweb",
            icon: <Linkedin className="h-4 w-4 md:h-5 md:w-5" />,
            color: "group-hover:text-[#0A66C2] group-hover:bg-blue-50/50",
          },
          {
            name: "Line Official",
            href: "https://lin.ee/dDHISbG",
            icon: <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />,
            color: "group-hover:text-[#00B900] group-hover:bg-green-50",
          },
          {
            name: "AEMDEVWEB Page",
            href: "https://www.facebook.com/aemdevweb",
            icon: <Facebook className="h-4 w-4 md:h-5 md:w-5" />,
            color: "group-hover:text-[#1877F2] group-hover:bg-blue-50",
          },
          {
            name: "GitHub",
            href: "https://github.com/jiggoo0",
            icon: <Github className="h-4 w-4 md:h-5 md:w-5" />,
            color: "group-hover:text-slate-900 group-hover:bg-slate-100",
          },
        ]
      : [
          {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/alongkorl-aemdevweb",
            icon: <Linkedin className="h-4 w-4 md:h-5 md:w-5" />,
            color: "group-hover:text-[#0A66C2] group-hover:bg-blue-50/50",
          },
          {
            name: "Unlink-th Line",
            href: "https://lin.ee/EkHkRvI",
            icon: <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />,
            color: "group-hover:text-[#00B900] group-hover:bg-green-50",
          },
          {
            name: "Unlink-th Official",
            href: "https://www.facebook.com/profile.php?id=61586111353518",
            icon: <Facebook className="h-4 w-4 md:h-5 md:w-5" />,
            color: "group-hover:text-[#1877F2] group-hover:bg-blue-50",
          },
        ];

  return (
    <div className={cn("flex flex-wrap gap-3 md:gap-4", className)}>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group flex items-center gap-3 rounded-2xl border border-slate-100 px-5 py-3 transition-all duration-500",
            "bg-white/50 text-slate-500 backdrop-blur-sm",
            "hover:-translate-y-1.5 hover:border-transparent hover:shadow-xl hover:shadow-slate-200/50",
            link.color
          )}
          aria-label={link.name}
        >
          <span className="transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
            {link.icon}
          </span>
          {showLabel && (
            <span className="text-[11px] font-black tracking-[0.15em] uppercase transition-colors">
              {link.name}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}
