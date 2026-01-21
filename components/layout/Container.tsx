/** @format */

import { cn } from "@/lib/utils";
import React from "react";

/**
 * ContainerProps Interface
 * ออกแบบมาเพื่อรองรับการยืดหยุ่นของแท็ก HTML (Polymorphic)
 * ช่วยให้พาร์ทเนอร์อย่างนายเอ็มวางโครงสร้าง SEO ได้แม่นยำขึ้น
 */
interface ContainerProps<T extends React.ElementType> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: T;
}

/**
 * 🏗️ Container Component (Specialist Edition)
 * ควบคุมความกว้างของเนื้อหาให้สมดุล (Centered Layout)
 * รองรับการเรนเดอร์ทั้งแบบ div, section, article หรือ main
 */
export default function Container<T extends React.ElementType = "div">({
  children,
  className,
  id,
  as,
  ...props // รับ Props อื่นๆ ของแท็กนั้นๆ มาด้วย (เช่น aria-label)
}: ContainerProps<T> & React.ComponentPropsWithoutRef<T>) {
  const Component = as || "div";

  return (
    <Component
      id={id}
      className={cn(
        // 📏 เลย์เอาต์หลัก: จัดกึ่งกลาง (mx-auto) และกำหนดความกว้างสูงสุดที่ 1280px (7xl)
        "mx-auto w-full max-w-7xl",
        // 📱 Responsive Padding: ปรับระยะขอบให้สวยงามในทุกอุปกรณ์
        "px-5 sm:px-8 lg:px-12",
        // 🛠️ Custom Classes
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
