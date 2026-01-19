/** @format */

import { Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/**
 * ContactInfo Component - ฉบับพาร์ทเนอร์ดูแลระบบและ SEO Organic
 * ใช้สำหรับแสดงช่องทางติดต่อหลักที่เน้นความน่าเชื่อถือและการตอบกลับที่รวดเร็ว
 */
export default function ContactInfo() {
  const contactMethods = [
    {
      icon: <Mail className="mb-4 h-10 w-10 text-blue-600 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />,
      title: "Email Contact",
      value: "me@aemdevweb.com", // ปรับให้ตรงกับอีเมลทางการใน Schema
      href: "mailto:me@aemdevweb.com",
      description: "ตอบกลับภายใน 24 ชม.",
      color: "hover:border-blue-500/30 bg-blue-50/5",
    },
    {
      icon: <MessageCircle className="mb-4 h-10 w-10 text-green-600 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" />,
      title: "Line Official",
      value: "@aemdevweb",
      href: "https://lin.ee/dDHISbG", // ลิงก์ Line OA จริงของคุณ
      description: "ปรึกษาเทคนิค SEO ฟรี",
      color: "hover:border-green-500/30 bg-green-50/5",
    },
    {
      icon: <MapPin className="mb-4 h-10 w-10 text-red-600 transition-transform duration-500 group-hover:scale-110" />,
      title: "Location",
      value: "Kamphaeng Phet, TH",
      href: "https://www.google.com/maps/search/?api=1&query=Kamphaeng+Phet+Thailand",
      description: "พร้อมดูแลทั่วประเทศ",
      color: "hover:border-red-500/30 bg-red-50/5",
    },
  ];

  return (
    <div className="my-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              "relative h-full overflow-hidden border-2 border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl",
              method.color
            )}
          >
            {/* Visual Decor: ไอคอนลูกศรเล็กๆ มุมขวา */}
            <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <ArrowUpRight className="h-4 w-4 text-slate-300" />
            </div>

            <CardContent className="flex h-full flex-col items-center p-10 text-center">
              {method.icon}
              <h3 className="mb-2 text-lg font-black uppercase tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
                {method.title}
              </h3>
              <p className="mb-2 text-base font-bold text-slate-700">
                {method.value}
              </p>
              <p className="text-xs font-medium italic text-slate-400">
                {method.description}
              </p>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
}
