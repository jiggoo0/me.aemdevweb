/** @format */

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import Schema from "@/components/profile/Schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2563eb", // Blue-600
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/**
 * 🎯 SEO Strategy: อัปเดต Metadata เพื่อเชื่อมโยงฐานะ Architect และ Specialist
 * เน้นการดึงดูดกลุ่มเป้าหมายที่ต้องการคุณภาพระดับ "Technical SEO"
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://me.aemdevweb.com"),
  title: {
    default:
      "อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์) | Technical SEO Specialist & Web Architect",
    template: "%s | นายเอ็มซ่ามากส์",
  },
  description:
    "รับทำ SEO และที่ปรึกษาการเขียน SEO Organic (สายขาว) โดย อลงกรณ์ ยมเกิด ผู้อยู่เบื้องหลังระบบ Unlink-th และ AEMDEVWEB ช่วยเปลี่ยนเว็บไซต์ให้เป็นสินทรัพย์ทำเงินสำหรับธุรกิจอย่างยั่งยืน",
  keywords: [
    "รับทำ SEO",
    "รับทำ SEO Organic",
    "นายเอ็มซ่ามากส์",
    "Alongkorl Yomkerd",
    "รับปรึกษาการเขียน SEO",
    "รับทำ SEO สายขาว",
    "Technical SEO Specialist",
    "AemDevWeb",
    "Unlink-th Architect",
  ],
  authors: [{ name: "Alongkorl Yomkerd", url: "https://me.aemdevweb.com" }],
  creator: "Alongkorl Yomkerd",
  publisher: "AemDevWeb",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://me.aemdevweb.com",
    siteName: "AEMDEVWEB Specialist Portfolio",
    title:
      "อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์) | Technical SEO & Web Architect",
    description:
      "ปั้นอันดับ Google ให้ยั่งยืนด้วยเทคนิคการพัฒนาเว็บ Performance สูง และ Technical SEO สายขาว",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alongkorl Yomkerd - Portfolio & Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์) | Technical SEO Specialist",
    description: "ผู้อยู่เบื้องหลังระบบ Unlink-th และบริการ SEO ระดับ Professional",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* ✅ ลงทะเบียน JSON-LD Schema (มีลิงก์ LinkedIn ใหม่เรียบร้อย) */}
        <Schema />
      </head>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "bg-background min-h-screen font-sans antialiased"
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
