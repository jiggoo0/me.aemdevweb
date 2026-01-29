/** @format */

import {
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/constants/site-config";

/**
 * ContactInfo Component - Specialist Identity
 * -------------------------------------------------------------------------
 * พัฒนาและดูแลโดย: นายเอ็มซ่ามากส์
 * เน้นการแสดงผลที่ชัดเจน ทันสมัย และตอบสนองต่อผู้ใช้งานได้อย่างรวดเร็ว
 */
export default function ContactInfo() {
  const contactMethods = [
    {
      icon: (
        <Mail className="mb-5 h-12 w-12 text-blue-600 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
      ),
      title: "Email Contact",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      description: "พร้อมตอบกลับข้อมูลภายใน 24 ชม.",
      color: "hover:border-blue-500/30 bg-blue-50/5",
    },
    {
      icon: (
        <MessageCircle className="mb-5 h-12 w-12 text-[#00B900] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" />
      ),
      title: "Line Official",
      value: "@aemdevweb",
      href: siteConfig.contact.line,
      description: "พูดคุยเรื่องเทคนิค SEO และโครงสร้างเว็บฟรี",
      color: "hover:border-[#00B900]/30 bg-green-50/5",
    },
    {
      icon: (
        <MapPin className="mb-5 h-12 w-12 text-slate-400 transition-transform duration-500 group-hover:scale-110" />
      ),
      title: "Location",
      value: "Bangkok / Thailand",
      href: "#",
      description: "รองรับการดูแลธุรกิจทั่วประเทศ",
      color: "hover:border-slate-500/30 bg-slate-50/5",
    },
  ];

  return (
    <div className="my-16">
      {/* ส่วนยืนยันความปลอดภัยและความน่าเชื่อถือ */}
      <div className="mb-10 flex items-center justify-center gap-2 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase md:justify-start">
        <ShieldCheck className="h-4 w-4 text-blue-600" />
        <span>Secure and Direct Communication</span>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.href}
            target={method.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group relative block transition-all"
          >
            <Card
              className={cn(
                "relative h-full overflow-hidden rounded-[2.5rem] border-2 border-slate-100/80 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-900/5",
                method.color
              )}
            >
              <div className="absolute top-6 right-6 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100">
                <ArrowUpRight className="h-5 w-5 text-slate-300" />
              </div>

              <CardContent className="flex h-full flex-col items-center p-10 text-center lg:p-12">
                <div className="relative mb-2">
                  {method.icon}
                  <div className="absolute inset-0 -z-10 h-full w-full scale-150 rounded-full bg-current opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10" />
                </div>

                <h3 className="mb-3 text-[11px] font-black tracking-[0.2em] text-slate-400 uppercase transition-colors group-hover:text-blue-600">
                  {method.title}
                </h3>

                <p className="mb-3 text-xl font-black tracking-tight text-slate-900 md:text-2xl">
                  {method.value}
                </p>

                <p className="text-sm font-bold text-slate-500 italic opacity-80">
                  {method.description}
                </p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
