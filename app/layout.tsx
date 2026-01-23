/** @format */

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import Schema from "@/components/profile/Schema";
import { siteConfig } from "@/constants/site-config";

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
  themeColor: "#020617", // Slate-950 อ้างอิงตามโทนสีแบรนด์
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/**
 * Specialist SEO Strategy:
 * มุ่งเน้น Information Intent และ Personal Branding เพื่อแยกส่วนกับหน้าบริการ (www)
 * ดำเนินการโดย นายอลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} (${siteConfig.expert}) | Infrastructure Lead & Technical SEO Consultant`,
    template: `%s | ${siteConfig.expert}`,
  },
  description:
    "พื้นที่แบ่งปันประสบการณ์และวิสัยทัศน์ด้าน Technical SEO และการจัดการโครงสร้างระบบเว็บโดย นายอลงกรณ์ ยมเกิด ผู้อยู่เบื้องหลังระบบ Unlink-th และ AEMDEVWEB",
  keywords: [
    "อลงกรณ์ ยมเกิด",
    "นายอลงกรณ์ ยมเกิด",
    "นายเอ็มซ่ามากส์",
    "Alongkorl Yomkerd",
    "Technical SEO Consultant",
    "ที่ปรึกษา SEO",
    "ที่ปรึกษาการเขียน SEO Organic",
    "Next.js Infrastructure Specialist",
    "ผู้เชี่ยวชาญ SEO สายขาว",
    "Technical SEO Specialist Thailand",
  ],
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  publisher: siteConfig.companyName,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteConfig.url,
    siteName: `${siteConfig.fullName} Specialist Portfolio`,
    title: `${siteConfig.fullName} | Technical SEO & System Structure Specialist`,
    description:
      "เจาะลึกเทคนิคการทำ SEO สายขาว และการพัฒนาเว็บไซต์ระดับ High-Performance 100/100",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.fullName} - Technical SEO Consultant`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} (${siteConfig.expert}) | Technical SEO Specialist`,
    description: "ถอดบทเรียนการสร้างระบบ Unlink-th และโครงสร้างระบบเว็บยุคใหม่",
    images: [siteConfig.ogImage],
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
        {/* Schema สำหรับยืนยันตัวตนระดับ Specialist */}
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
