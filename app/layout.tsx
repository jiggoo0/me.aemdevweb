/** @format */
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import Schema from "@/components/profile/Schema";

// 1. Configure Fonts - ใช้มาตรฐาน Geist สำหรับ Modern UI
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

// 2. Viewport Settings - ปรับแต่งเพื่อการแสดงผลบน Mobile ที่สมบูรณ์
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // อนุญาตให้ User Zoom ได้เพื่อ Accessibility
};

// 3. Metadata Strategy - เน้นความเป็นผู้เชี่ยวชาญ SEO Organic และพาร์ทเนอร์ธุรกิจ
export const metadata: Metadata = {
  metadataBase: new URL("https://me.aemdevweb.com"),
  title: {
    // 🎨 Target Keywords: สร้างเว็บไซต์ + SEO Organic (สายออร์แกนิค)
    default: "อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์) | ที่ปรึกษาดูแลระบบเว็บไซต์และ SEO Organic",
    template: "%s | นายเอ็มซ่ามากส์",
  },
  description:
    "พาร์ทเนอร์ดูแลระบบเว็บไซต์และปั้นอันดับด้วย SEO Organic (สายออร์แกนิค) เน้นโครงสร้างที่ยั่งยืน ผู้อยู่เบื้องหลังระบบ Unlink-th ที่ช่วยให้ธุรกิจพี่ขยับขึ้นหน้าแรก Google ได้จริงโดยไม่พึ่งพาแค่ค่าโฆษณา",
  keywords: [
    "นายเอ็มซ่ามากส์",
    "Alongkorl Yomkerd",
    "ที่ปรึกษา SEO Organic",
    "รับทำ SEO สายออร์แกนิค",
    "ดูแล SEO รายเดือน",
    "รับสร้างเว็บไซต์ SME",
    "ดูแลระบบเว็บไซต์ระยะยาว",
    "ดันอันดับ Google แบบธรรมชาติ",
    "AemDevWeb",
    "Unlink-th Expert",
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
    apple: "/apple-touch-icon.png", // แนะนำให้เพิ่มในอนาคตเพื่อความพรีเมียม
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://me.aemdevweb.com",
    siteName: "AemDevWeb",
    title: "อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์) | ที่ปรึกษา SEO Organic",
    description: "สร้างเว็บไซต์และปั้นอันดับ Google แบบยั่งยืนสำหรับ SME",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alongkorl Yomkerd - SEO Organic Expert",
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

// 4. RootLayout Component
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
        {/* ✅ Schema JSON-LD: สำหรับระบุตัวตนพาร์ทเนอร์ด้านระบบและ SEO (Technical SEO) */}
        <Schema />

        <div className="relative flex min-h-screen flex-col">
          {/* ส่วนหัวของเว็บไซต์ */}
          <Header />

          {/* เนื้อหาหลักของแต่ละหน้า */}
          <main className="flex-1">
            {children}
          </main>

          {/* ส่วนท้ายของเว็บไซต์ */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
