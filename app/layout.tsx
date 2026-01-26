/** @format */

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// Style & Utilities
import "./globals.css";
import { cn } from "@/lib/utils";

// Config & Components
import { siteConfig } from "@/constants/site-config";
import Schema from "@/components/profile/Schema";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/**
 * 1. Font Optimization
 * ใช้ display: 'swap' เพื่อป้องกัน Cumulative Layout Shift (CLS)
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
 * 2. Viewport Configuration
 * ตั้งค่าสีและสเกลเพื่อรองรับการใช้งานผ่าน Mobile ได้สมบูรณ์แบบ
 */
export const viewport: Viewport = {
  themeColor: "#020617", // Slate-950
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/**
 * 3. Technical SEO Metadata
 * กลยุทธ์: ตอกย้ำ Identity "นายอลงกรณ์ ยมเกิด" ในฐานะ Authority Entity
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} | Specialist Infrastructure & Technical SEO`,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: siteConfig.description,
  keywords: [
    "นายอลงกรณ์ ยมเกิด",
    "Alongkorl Yomkerd",
    "AEMDEVWEB",
    "นายเอ็มซ่ามากส์",
    "Technical SEO Consultant",
    "Next.js Infrastructure Specialist",
    "Web Performance Expert Thailand",
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
    siteName: siteConfig.fullName,
    title: `${siteConfig.fullName} | Technical SEO & Web Infrastructure`,
    description: "วางรากฐานระบบดิจิทัลด้วยประสิทธิภาพสูงสุดและการออกแบบโครงสร้างที่ถูกต้อง",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.fullName }],
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
 * 4. Root Layout Structure
 * โครงสร้างพื้นฐานของ me.aemdevweb.com เน้นความสะอาดและอ่านง่าย
 */
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="th" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          fontSans.variable,
          fontMono.variable,
          "min-h-screen bg-white font-sans antialiased selection:bg-blue-600/10"
        )}
      >
        {/* ยืนยันตัวตนระดับ Specialist ตั้งแต่จุดเริ่มโหลดหน้าเว็บ */}
        <Schema />

        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
