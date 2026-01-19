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
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// 🎯 Metadata Strategy: ปรับปรุงให้ครอบคลุม "รับทำ SEO" เพื่อเพิ่มโอกาสในการค้นพบ
export const metadata: Metadata = {
  metadataBase: new URL("https://me.aemdevweb.com"),
  title: {
    // ✅ ใช้คำว่า "รับทำ SEO" ร่วมกับ "รับปรึกษาการเขียน" เพื่อดึง Traffic
    default: "อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์) | รับทำ SEO และรับปรึกษาการเขียน SEO Organic",
    template: "%s | นายเอ็มซ่ามากส์",
  },
  description:
    "รับทำ SEO และรับปรึกษาการเขียน SEO Organic (สายออร์แกนิค) ปั้นเว็บไซต์ให้เป็นสินทรัพย์ทำเงินสำหรับ SME ผู้อยู่เบื้องหลังระบบ Unlink-th ที่ช่วยให้ธุรกิจขยับขึ้นหน้าแรก Google ได้จริงอย่างยั่งยืน",
  keywords: [
    "รับทำ SEO",
    "รับทำ SEO Organic",
    "นายเอ็มซ่ามากส์",
    "Alongkorl Yomkerd",
    "รับปรึกษาการเขียน SEO",
    "รับทำ SEO สายขาว",
    "รับทำ SEO SME",
    "บริการทำ SEO รายเดือน",
    "ที่ปรึกษา SEO Organic",
    "AemDevWeb",
  ],
  authors: [{ name: "Alongkorl Yomkerd", url: "https://me.aemdevweb.com" }],
  creator: "Alongkorl Yomkerd",
  publisher: "AemDevWeb",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://me.aemdevweb.com",
    siteName: "AemDevWeb",
    // ✅ ปรับให้ Facebook แสดงผลเป็น "รับทำ SEO" เพื่อเรียกยอดคลิก
    title: "อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์) | รับทำ SEO และรับปรึกษาการเขียน SEO Organic",
    description: "ปั้นอันดับ Google ให้ยั่งยืนด้วยเทคนิคการเขียนและ Technical SEO สายออร์แกนิค",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alongkorl Yomkerd - SEO Specialist & Partner",
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
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "min-h-screen bg-background font-sans antialiased selection:bg-blue-100/50"
        )}
      >
        <Schema />

        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
