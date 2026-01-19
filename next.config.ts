/** @format */
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, 
  compress: true, 

  // 📄 1. Extensions
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // 🖼️ 2. Images: เน้นความเร็วและลดการใช้ Bandwidth
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    minimumCacheTTL: 3600, // ✅ ปรับเป็น 1 ชม. เพื่อลดภาระ Server ในการประมวลผลรูปภาพซ้ำ
    remotePatterns: [
      { protocol: "https", hostname: "lin.ee" },
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  // 🛠️ 3. Compiler: เคลียร์ Main Thread ให้ว่างที่สุด
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },

  // ⚡ 4. Experimental: ความแรงระดับ Next.js 15
  experimental: {
    mdxRs: true, 
    // ✅ เพิ่มการจัดการเรื่อง Caching ในระดับ Webpack สำหรับ Next.js 15
    webpackBuildWorker: true, // ช่วยเรื่องการจัดการ Memory ในการ Build โปรเจกต์ขนาดใหญ่
    
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "sonner",
      "@radix-ui/react-icons",
      "@/components/ui",
    ],
  },
};

const withMDX = createMDX({
  // ✅ ระบุเวอร์ชันและการตั้งค่า MDX ให้ชัดเจนขึ้น
  extension: /\.mdx?$/, 
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
