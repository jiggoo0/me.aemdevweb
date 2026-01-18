/** @format */
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils"; // ✅ นำมาใช้งานใน className ด้านล่าง

/**
 * ContactInfo Component
 * แสดงการ์ดข้อมูลการติดต่อหลัก 3 ช่องทาง
 */
export default function ContactInfo() {
  const contactMethods = [
    {
      icon: <Mail className="h-10 w-10 text-blue-600 mb-4 transition-transform group-hover:scale-110" />,
      title: "Email",
      value: "jiggo0@outlook.co.th",
      href: "mailto:jiggo0@outlook.co.th",
      description: "ตอบกลับภายใน 24 ชม.",
      color: "hover:border-blue-500/20",
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-green-600 mb-4 transition-transform group-hover:scale-110" />,
      title: "Line Official",
      value: "@aemdevweb",
      href: "https://lin.ee/your-id", 
      description: "ปรึกษาด่วนฟรี",
      color: "hover:border-green-500/20",
    },
    {
      icon: <MapPin className="h-10 w-10 text-red-600 mb-4 transition-transform group-hover:scale-110" />,
      title: "Location",
      value: "Kamphaeng Phet, TH",
      href: "https://maps.google.com",
      description: "พิกัดสำนักงาน",
      color: "hover:border-red-500/20",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 my-10">
      {contactMethods.map((method, index) => (
        <a
          key={index}
          href={method.href}
          target={method.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="group block transition-all"
        >
          <Card className={cn(
            "h-full border-2 border-transparent transition-all hover:shadow-md active:scale-95",
            method.color // ✅ ใช้งาน cn เพื่อรวม class แบบ dynamic
          )}>
            <CardContent className="flex flex-col items-center p-8 text-center h-full">
              {method.icon}
              <h3 className="font-bold text-lg mb-1 group-hover:text-blue-600 transition-colors">
                {method.title}
              </h3>
              <p className="text-sm font-medium text-neutral-900 mb-2">
                {method.value}
              </p>
              <p className="text-xs text-muted-foreground italic">
                {method.description}
              </p>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
}
