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
  themeColor: "#2563eb", // ใช้สี Blue-600 ประจำแบรนด์
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/**
 * 🎯 SEO Strategy: ปรับปรุง Metadata เพื่อการแข่งขันในตลาด "รับทำ SEO"
 * เน้นการดึงดูด Traffic จาก SME ที่ต้องการความยั่งยืน (Organic Growth)
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://me.aemdevweb.com"),
  title: {
    default:
      "อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์) | รับทำ SEO และที่ปรึกษาการเขียน SEO Organic",
    template: "%s | นายเอ็มซ่ามากส์",
  },
  description:
    "รับทำ SEO และรับปรึกษาการเขียน SEO Organic (สายขาว) ปั้นเว็บไซต์ให้เป็นสินทรัพย์ทำเงินสำหรับ SME ผู้อยู่เบื้องหลังระบบ Unlink-th ที่ช่วยให้ธุรกิจขยับขึ้นหน้าแรก Google ได้จริงอย่างยั่งยืน",
  keywords: [
    "รับทำ SEO",
    "รับทำ SEO Organic",
    "นายเอ็มซ่ามากส์",
    "Alongkorl Yomkerd",
    "รับปรึกษาการเขียน SEO",
    "รับทำ SEO สายขาว",
    "Technical SEO Specialist",
    "AemDevWeb",
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
    siteName: "AEMDEVWEB",
    title:
      "อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์) | รับทำ SEO และที่ปรึกษาการเขียน SEO Organic",
    description:
      "ปั้นอันดับ Google ให้ยั่งยืนด้วยเทคนิคการเขียนและ Technical SEO สายออร์แกนิค",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alongkorl Yomkerd - SEO Specialist & Architect",
      },
    ],
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
        {/* ✅ ลงทะเบียน JSON-LD Schema เพื่อยืนยันตัวตนบน Google Knowledge Graph */}
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
          {/* Main Content Area - ออกแบบให้ลื่นไหล รองรับการเรนเดอร์ MDX */}
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
