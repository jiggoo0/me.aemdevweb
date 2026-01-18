/** @format */
// ✅ แก้ไข: ลบ Send ออกจากรายการ Import เพื่อกำจัด Warning
import { Facebook, MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  variant?: "aemdevweb" | "unlink";
  showLabel?: boolean;
}

/**
 * SocialLinks Component (v2 - Refactored for aemdevweb.com)
 * ใช้สำหรับแสดงช่องทางติดต่อแยกตามแบรนด์และบริการ
 */
export default function SocialLinks({ 
  className, 
  variant = "aemdevweb",
  showLabel = true 
}: SocialLinksProps) {
  
  // กำหนดข้อมูลลิงก์แยกตาม Variant (AemDevWeb / Unlink-th)
  const links = variant === "aemdevweb" ? [
    { 
      name: "AemDevWeb Page", 
      href: "https://www.facebook.com/aemdevweb", 
      icon: <Facebook className="w-5 h-5" />,
      color: "hover:text-blue-600 hover:bg-blue-50/50"
    },
    { 
      name: "นายเอ็มซ่ามากส์", 
      href: "https://www.facebook.com/profile.php?id=61586317184043", 
      icon: <Facebook className="w-5 h-5" />,
      color: "hover:text-blue-500 hover:bg-blue-50/50"
    },
    { 
      name: "Line OA", 
      href: "https://lin.ee/dDHISbG", 
      icon: <MessageCircle className="w-5 h-5" />,
      color: "hover:text-green-600 hover:bg-green-50/50"
    }
  ] : [
    { 
      name: "Unlink-th Official", 
      href: "https://www.facebook.com/profile.php?id=61586111353518", 
      icon: <Facebook className="w-5 h-5" />,
      color: "hover:text-blue-900 hover:bg-slate-100"
    },
    { 
      name: "Unlink-th Line", 
      href: "https://lin.ee/EkHkRvI", 
      icon: <MessageCircle className="w-5 h-5" />,
      color: "hover:text-green-700 hover:bg-slate-100"
    }
  ];

  return (
    <div className={cn("flex flex-wrap gap-2 md:gap-3", className)}>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group flex items-center gap-2.5 px-3.5 py-2 rounded-xl transition-all duration-300 border border-transparent",
            "bg-slate-50/50 text-slate-600",
            link.color,
            "hover:border-current/10 hover:shadow-sm"
          )}
          title={link.name}
        >
          <span className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
            {link.icon}
          </span>
          {showLabel && (
            <span className="text-sm font-bold tracking-tight">
              {link.name}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}
