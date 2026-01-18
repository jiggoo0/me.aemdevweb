/** @format */

/**
 * Schema Component (JSON-LD)
 * สำหรับสร้าง Structured Data ให้ Search Engine เข้าใจตัวตนของคุณอลงกรณ์ (Person)
 * และเชื่อมโยงความเชี่ยวชาญเข้ากับแบรนด์ AemDevWeb และ Unlink-th
 * เพื่อเพิ่ม Authority และความน่าเชื่อถือในผลการค้นหา
 */
export default function Schema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alongkorl Yomkerd",
    "alternateName": ["นายเอ็มซ่ามากส์", "Alongkorl Yomkerd (นายเอ็มซ่ามากส์)"],
    "givenName": "Alongkorl",
    "familyName": "Yomkerd",
    "url": "https://me.aemdevweb.com",
    "image": "https://me.aemdevweb.com/images/profile-photo.jpg",
    "jobTitle": "Full-Stack Developer & Technical SEO Specialist",
    "description": "นักพัฒนาเว็บไซต์จากจังหวัดกำแพงเพชร ผู้เชี่ยวชาญ Next.js และที่ปรึกษาด้าน SEO เชิงลึก ผู้อยู่เบื้องหลังการพัฒนาระบบจัดการชื่อเสียงออนไลน์ Unlink-th",
    "gender": "Male",
    "email": "jiggo0@outlook.co.th",
    "telephone": "+66123456789", // ปรับเป็นเบอร์จริงของคุณ
    "sameAs": [
      "https://www.aemdevweb.com",
      "https://www.unlink-th.com",
      "https://www.facebook.com/aemdevweb",
      "https://www.facebook.com/profile.php?id=61586317184043",
      "https://lin.ee/dDHISbG"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "AemDevWeb",
        "url": "https://www.aemdevweb.com"
      },
      {
        "@type": "Organization",
        "name": "Unlink-th",
        "url": "https://www.unlink-th.com"
      }
    ],
    "knowsAbout": [
      "Web Development",
      "Next.js 15",
      "React 19",
      "Technical SEO",
      "Online Reputation Management (ORM)",
      "Search Engine Optimization",
      "Full-stack Development",
      "SME Business Digitization"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kamphaeng Phet",
      "addressRegion": "Kamphaeng Phet",
      "addressCountry": "TH",
      "postalCode": "62000"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
