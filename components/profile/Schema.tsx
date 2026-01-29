/** @format */

import React from "react";
import { siteConfig } from "@/constants/site-config";

/**
 * Schema Component (JSON-LD) - 2026 Identity Authority
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: เชื่อมโยงข้อมูลบุคคลและองค์กร (Unified Entity Bridge)
 * เป้าหมาย: ยืนยันตัวตนข้ามแพลตฟอร์มเพื่อสร้างความน่าเชื่อถือ (Authority)
 * จัดการและดูแลระบบโดย: นายเอ็มซ่ามากส์
 */
export default function Schema() {
  const authoritySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.fullName,
        alternateName: [
          "Alongkorl Yomkerd",
          "นายเอ็มซ่ามากส์",
          siteConfig.expertName,
          siteConfig.handle,
          "AEM",
        ],
        url: siteConfig.url,
        image: {
          "@type": "ImageObject",
          "@id": `${siteConfig.url}/#profilePhoto`,
          url: `${siteConfig.url}${siteConfig.profilePhoto}`,
          width: "800",
          height: "800",
          caption: siteConfig.fullName,
        },
        jobTitle: siteConfig.role,
        worksFor: { "@id": `${siteConfig.commercialUrl}/#organization` },
        knowsAbout: [
          "Technical SEO",
          "Web Structure",
          "SEO Architecture",
          "Next.js Development",
          "Web Performance Optimization",
          "Core Web Vitals",
        ],
        sameAs: [
          siteConfig.commercialUrl,
          siteConfig.contact.linkedin,
          siteConfig.contact.facebook,
          siteConfig.contact.x,
          siteConfig.contact.github,
          siteConfig.contact.line,
          "https://tiktok.com/@aemdevweb",
        ],
        description: siteConfig.description,
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.commercialUrl}/#organization`,
        name: siteConfig.companyName,
        alternateName: ["AEMDEVWEB", "Unlink-th"],
        url: siteConfig.commercialUrl,
        logo: {
          "@type": "ImageObject",
          // ใช้ Logo หลักจากโดเมนธุรกิจเพื่อให้ระบบจดจำภาพลักษณ์เดียวกันทั้งหมด
          url: "https://www.aemdevweb.com/images/logo-circuit.png",
        },
        founder: { "@id": `${siteConfig.url}/#person` },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Technical Support",
          email: siteConfig.email,
          url: `${siteConfig.commercialUrl}/contact`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.siteName,
        publisher: { "@id": `${siteConfig.url}/#person` },
        inLanguage: "th-TH",
        description: `คลังข้อมูลเทคนิคและผลงานของ ${siteConfig.fullName}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(authoritySchema) }}
      key="authority-entity-bridge"
    />
  );
}
