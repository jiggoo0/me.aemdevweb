/** @format */

import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

/**
 * MDX Components Configuration
 * กำหนดการแสดงผลของ HTML Tags ภายในไฟล์ MDX
 * เน้นความสะอาด (Clean UI) และโครงสร้าง SEO ที่ถูกต้อง
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 🏷️ Typography: จัดลำดับความสำคัญของหัวข้อ
    h1: ({ children }) => (
      <h1 className="mb-8 text-4xl font-black tracking-tighter text-slate-900 md:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 mb-6 text-2xl font-black tracking-tight text-slate-800 md:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-4 text-xl font-bold tracking-tight text-slate-800">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-6 text-lg leading-relaxed text-slate-600">
        {children}
      </p>
    ),

    // 🔗 Links & Navigation
    a: ({ href, children, ...props }) => {
      const isInternal = href?.startsWith("/");
      if (isInternal) {
        return (
          <Link 
            href={href as string} 
            className="font-bold text-blue-600 underline decoration-blue-200 decoration-2 underline-offset-4 transition-colors hover:text-blue-700 hover:decoration-blue-400"
            {...props}
          >
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-600 underline decoration-blue-200 decoration-2 underline-offset-4 transition-colors hover:text-blue-700 hover:decoration-blue-400"
          {...props}
        >
          {children}
        </a>
      );
    },

    // 🖼️ Media: จัดการรูปภาพให้เป็น Responsive
    img: (props) => (
      <div className="relative my-10 aspect-video w-full overflow-hidden rounded-[2.5rem] border-8 border-slate-50 shadow-xl">
        <Image
          fill
          className="object-cover"
          {...(props as ImageProps)}
          alt={props.alt || "AEMDEVWEB Blog Content"}
        />
      </div>
    ),

    // 📋 Lists
    ul: ({ children }) => (
      <ul className="mb-8 ml-6 list-disc space-y-3 text-lg text-slate-600">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-8 ml-6 list-decimal space-y-3 text-lg text-slate-600">
        {children}
      </ol>
    ),

    // 💻 Code Blocks
    code: ({ children }) => (
      <code className="rounded-lg bg-slate-100 px-1.5 py-0.5 font-mono text-sm font-bold text-blue-600">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mb-8 overflow-x-auto rounded-[2rem] bg-slate-900 p-8 font-mono text-sm leading-relaxed text-slate-100 shadow-2xl">
        {children}
      </pre>
    ),

    ...components,
  };
}
