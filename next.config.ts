/** @format */
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

/**
 * 🚀 Next.js Config: Luminous Performance Edition (Ultimate Tuned)
 * Optimized for Next.js 15, MDX, and Maximum Core Web Vitals scores.
 */
const nextConfig: NextConfig = {
  // ✅ 1. Core Settings
  reactStrictMode: true,
  poweredByHeader: false, // Security: Hide Next.js signature
  compress: true, // Enable Gzip/Brotli compression

  // 📄 2. Extensions: Support for MDX and Standard Web Formats
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // 🖼️ 3. Image Optimization: Maximum Performance & Modern Formats
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lin.ee",
      },
      {
        protocol: "https",
        hostname: "**.supabase.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // 🛠️ 4. Compiler Options: Production Tuning
  compiler: {
    // ลบ console.log ใน production (ยกเว้น console.error) เพื่อลดการทำงานของ Main Thread
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error"],
          }
        : false,
  },

  // ⚡ 5. Experimental Features: Cutting-edge Speed
  experimental: {
    mdxRs: true, // 🦀 Rust-based compiler for MDX (Fastest build times)
    
    // 📦 Optimize Imports: Tree-shaking enhancement for smaller bundles
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "sonner",
      "clsx",
      "tailwind-merge",
      "date-fns",
      "lodash",
      "@radix-ui/react-icons",
      "@/components/ui",
    ],
  },

  // 🛠️ 6. Logging: Dev Experience
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

/**
 * 📝 MDX Configuration
 */
const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
