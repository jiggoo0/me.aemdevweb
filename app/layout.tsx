/** @format */

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// สไตล์และเครื่องมือจัดการระบบ
import "@/app/globals.css";
import { cn } from "@/lib/utils";

// ข้อมูลการตั้งค่าและส่วนประกอบหลัก
import { siteConfig } from "@/constants/site-config";
import Schema from "@/components/profile/Schema";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/**
 * 1. การจัดการฟอนต์ (Font Optimization)
 * ใช้ระบบจัดการฟอนต์สมัยใหม่เพื่อลดระยะเวลาการโหลดหน้าเว็บ
 * และป้องกันปัญหาการขยับของเลย์เอาต์ (CLS)
 */
const fontSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const fontMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/**
 * 2. การตั้งค่าการแสดงผลบนหน้าจอ (Viewport Configuration)
 * กำหนดค่าเพื่อรองรับการใช้งานบนมือถืออย่างสมบูรณ์และคุมโทนสีของระบบ
 */
export const viewport: Viewport = {
  themeColor: "#020617", // โทนสี Slate-950 เพื่อภาพลักษณ์ที่พรีเมียม
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/**
 * 3. ข้อมูลสำหรับการค้นหาเชิงเทคนิค (Technical SEO Metadata)
 * ยุทธศาสตร์: สร้างความน่าเชื่อถือให้กับตัวตน "อลงกรณ์ ยมเกิด" ในฐานะผู้เชี่ยวชาญ
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} | Technical SEO & Infrastructure Lead`,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: siteConfig.description,
  keywords: [
    "นายอลงกรณ์ ยมเกิด",
    "Alongkorl Yomkerd",
    "AEMDEVWEB",
    "นายเอ็มซ่ามากส์",
    "ที่ปรึกษาด้าน Technical SEO",
    "ผู้เชี่ยวชาญด้านโครงสร้างพื้นฐานเว็บไซต์",
    "การปรับแต่งความเร็วเว็บไซต์",
    "Next.js Specialist Thailand",
  ],
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  publisher: siteConfig.companyName,
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    title: `${siteConfig.fullName} | Identity Hub & Portfolio`,
    description:
      "วางรากฐานระบบดิจิทัลด้วยประสิทธิภาพสูงสุดและการออกแบบโครงสร้างที่ถูกต้อง",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.fullName} - ผู้เชี่ยวชาญด้าน Technical SEO`,
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

/**
 * 4. โครงสร้างหลักของเว็บไซต์ (Root Layout Structure)
 * วางพื้นฐานระบบให้มีความสะอาด อ่านง่าย และรองรับการขยายตัวในอนาคต
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* ฉีด Schema เพื่อยืนยันตัวตนระดับผู้เชี่ยวชาญทันทีที่เริ่มโหลดหน้าเว็บ */}
        <Schema />
      </head>
      <body
        className={cn(
          fontSans.variable,
          fontMono.variable,
          "min-h-screen bg-white font-sans antialiased selection:bg-blue-600/10"
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          {/* ส่วนนำทางหลัก (Navigation Hub) */}
          <Header />

          {/* พื้นที่จัดการเนื้อหาหลัก (Main Node) */}
          <main className="flex-1">{children}</main>

          {/* ส่วนท้ายและข้อมูลการติดต่อ (Contact Liaison) */}
          <Footer />
        </div>
      </body>
    </html>
  );
}

/**
 * พัฒนาและวางระบบโครงสร้างโดย: นายเอ็มซ่ามากส์
 */
