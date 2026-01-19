/** @format */

import { cn } from "@/lib/utils";
import React from "react";

/**
 * ContainerProps Interface
 * รองรับการเปลี่ยนแท็ก HTML ผ่านพร็อพ `as` เพื่อช่วยเรื่อง Semantic SEO
 */
interface ContainerProps<T extends React.ElementType> {
  /** เนื้อหาภายในคอมโพเนนต์ */
  children: React.ReactNode;
  /** คลาส CSS เพิ่มเติมสำหรับปรับแต่ง (Tailwind) */
  className?: string;
  /** ไอดีสำหรับใช้ทำ Anchor Link หรืออ้างอิง */
  id?: string;
  /** เปลี่ยนแท็ก HTML เช่น div, section, main, article */
  as?: T;
}

/**
 * Container Component (ฉบับเสถียรสำหรับ Next.js 15)
 * ทำหน้าที่ควบคุมความกว้างสูงสุด (Max-width: 1280px) และการจัดกึ่งกลาง (mx-auto)
 * เพื่อให้เลย์เอาต์ของเว็บไซต์ "ลื่นหัวแตก" และอ่านง่ายในทุกขนาดหน้าจอ
 */
export default function Container<T extends React.ElementType = "div">({
  children,
  className,
  id,
  as,
}: ContainerProps<T> & React.ComponentPropsWithoutRef<T>) {
  // กำหนด Component เริ่มต้นเป็น div หากไม่ได้ส่งพร็อพ as มา
  const Component = as || "div";

  return (
    <Component
      id={id}
      className={cn(
        // เลย์เอาต์หลัก: จัดกึ่งกลาง และกำหนดความกว้างสูงสุดที่ 7xl (1280px)
        "mx-auto w-full max-w-7xl",
        // ระยะขอบ (Padding): ปรับตามขนาดหน้าจออย่างเป็นระบบ
        "px-4 sm:px-6 lg:px-8",
        // รองรับคลาสที่ส่งมาจากภายนอก
        className
      )}
    >
      {children}
    </Component>
  );
}
