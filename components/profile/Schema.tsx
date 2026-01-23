/** @format */

import React from "react";
import { siteConfig } from "@/constants/site-config";

/**
 * Schema Component (JSON-LD) - 2026 Identity Authority
 * Implementation: Cross-Domain Entity Mapping (Person <-> Organization)
 * ยืนยันตัวตน นายอลงกรณ์ ยมเกิด ในฐานะ Infrastructure Lead ของ AEMDEVWEB
 */
export default function Schema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.fullName,
        alternateName: [
          siteConfig.expert,
          "Alongkorl Yomkerd",
          "อลงกรณ์ ยมเกิด",
          "AEM",
        ],
        url: siteConfig.url,
        image: {
          "@type": "ImageObject",
          url: siteConfig.profilePhoto,
          width: "800",
          height: "800",
        },
        jobTitle: siteConfig.role,
        worksFor: { "@id": `${siteConfig.commercialUrl}/#organization` },
        knowsAbout: [
          "Technical SEO",
          "Next.js Infrastructure",
          "Web Performance Optimization",
          "Online Reputation Management",
          "Search Engine Optimization",
        ],
        sameAs: [
          siteConfig.commercialUrl,
          siteConfig.contact.linkedin,
          siteConfig.contact.facebook,
          siteConfig.contact.x, // เพิ่มการเชื่อมโยงบัญชี X
          "https://github.com/jiggoo0",
        ],
        description: siteConfig.description,
        mainEntityOfPage: { "@id": `${siteConfig.url}/#website` },
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.commercialUrl}/#organization`,
        name: siteConfig.companyName,
        url: siteConfig.commercialUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.commercialUrl}/og-image.png`,
        },
        founder: { "@id": `${siteConfig.url}/#person` },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Technical Support",
          email: siteConfig.email, // แก้ไข Path ของ Email ให้ถูกต้อง
          url: siteConfig.url,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: `Identity Hub of ${siteConfig.fullName}`,
        publisher: { "@id": `${siteConfig.url}/#person` },
        inLanguage: "th-TH",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      key="authority-entity-bridge"
    />
  );
}
