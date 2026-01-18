/** @format */
import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  /** เนื้อหาภายในคอมโพเนนต์ */
  children: React.ReactNode;
  /** คลาส CSS เพิ่มเติมสำหรับปรับแต่ง (Tailwind) */
  className?: string;
  /** ไอดีสำหรับใช้ทำ Anchor Link หรืออ้างอิง */
  id?: string;
  /** เปลี่ยนแท็ก HTML (เช่น div, section, article, header) */
  as?: React.ElementType;
}

/**
 * Container Component
 * ทำหน้าที่ควบคุมความกว้างสูงสุด (Max-width: 1280px) และการจัดกึ่งกลาง (mx-auto)
 * เพื่อให้เลย์เอาต์ของเว็บไซต์มีความเป็นระเบียบและอ่านง่ายในทุกขนาดหน้าจอ
 */
export default function Container({
  children,
  className,
  id,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={cn(
        // เลย์เอาต์หลัก: จัดกึ่งกลาง และกำหนดความกว้างสูงสุดที่ 7xl (1280px)
        "mx-auto w-full max-w-7xl",
        // ระยะขอบ (Padding): ปรับตามขนาดหน้าจอ (Mobile: 16px, Tablet+: 24px/32px)
        "px-4 sm:px-6 lg:px-8",
        // รองรับคลาสที่ส่งมาจากภายนอกเพื่อ Overwrite หรือเพิ่มเติม
        className
      )}
    >
      {children}
    </Component>
  );
}
