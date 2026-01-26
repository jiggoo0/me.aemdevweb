/** @format */

import React from "react";
import { siteConfig } from "@/constants/site-config";

/**
 * Schema Component (JSON-LD) - 2026 Identity Authority
 * การเชื่อมโยงข้อมูลอัตลักษณ์ (Person <-> Organization <-> Website)
 * เพื่อยืนยันตัวตน "นายอลงกรณ์ ยมเกิด" ต่อระบบ Search Engine
 */
export default function Schema() {
  const authoritySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        "name": siteConfig.fullName,
        "alternateName": [
          "Alongkorl Yomkerd",
          siteConfig.expertName,
          siteConfig.handle,
          "AEM",
        ],
        "url": siteConfig.url,
        "image": {
          "@type": "ImageObject",
          "@id": `${siteConfig.url}/#profilePhoto`,
          "url": `${siteConfig.url}${siteConfig.profilePhoto}`,
          "width": "800",
          "height": "800",
          "caption": siteConfig.fullName,
        },
        "jobTitle": siteConfig.role,
        "worksFor": { "@id": `${siteConfig.commercialUrl}/#organization` },
        "knowsAbout": [
          "Technical SEO",
          "Web Structure",
          "SEO Architecture",
          "Next.js Development",
          "Web Performance Optimization",
          "Core Web Vitals",
        ],
        "sameAs": [
          siteConfig.commercialUrl,
          siteConfig.contact.linkedin,
          siteConfig.contact.facebook,
          siteConfig.contact.x,
          siteConfig.contact.github,
        ],
        "description": siteConfig.description,
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.commercialUrl}/#organization`,
        "name": siteConfig.companyName,
        "alternateName": ["AEMDEVWEB", "Unlink-th"],
        "url": siteConfig.commercialUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteConfig.commercialUrl}/images/service/aemdevweb.webp`,
        },
        "founder": { "@id": `${siteConfig.url}/#person` },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Technical Support",
          "email": siteConfig.email,
          "url": `${siteConfig.url}/contact`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": siteConfig.siteName,
        "publisher": { "@id": `${siteConfig.url}/#person` },
        "inLanguage": "th-TH",
        "description": `คลังความรู้เชิงเทคนิคและพอร์ตโฟลิโอของ ${siteConfig.fullName}`,
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
