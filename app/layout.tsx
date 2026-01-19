/** @format */
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import Schema from "@/components/profile/Schema";

// ✅ นำ Container ออกจาก Import เพื่อแก้ปัญหา 'Container' is defined but never used

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Alongkorl Yomkerd (เอ็มซ่ามากส์) | Web Artisan & Solutions",
    template: "%s | Alongkorl Yomkerd",
  },
  description:
    "พื้นที่รวบรวมงานฝีมือดิจิทัลและบันทึกการเดินทางของ อลงกรณ์ ยมเกิด นักพัฒนาที่หลงรักในการสร้างเว็บไซต์ที่รวดเร็วและตอบโจทย์ธุรกิจจริง",
  keywords: [
    "AEM Dev Web",
    "Unlink-th",
    "รับทำเว็บไซต์",
    "Digital Reputation",
    "Alongkorl Yomkerd",
  ],
  authors: [{ name: "Alongkorl Yomkerd", url: "https://me.aemdevweb.com" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "min-h-screen bg-background font-sans antialiased selection:bg-blue-100/50"
        )}
      >
        {/* ✅ Schema JSON-LD สำหรับ Technical SEO */}
        <Schema />

        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {/* ✅ คืนอิสระให้แต่ละ Page จัด Layout เองได้เต็มที่ 
              ทำให้หน้า Services หรือ Project สามารถใช้ Grid Full-width ได้
            */}
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
