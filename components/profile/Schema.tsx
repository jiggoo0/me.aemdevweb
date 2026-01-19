/** @format */

/**
 * Schema Component (JSON-LD)
 * ปรับปรุงใหม่: ตัดชื่อเทคโนโลยีเฉพาะทางออกทั้งหมด
 * เน้นการสื่อสารผ่าน "ความเชี่ยวชาญ" และ "ความตั้งใจในงานสร้างสรรค์"
 */
export default function Schema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alongkorl Yomkerd",
    "alternateName": [
      "นายเอ็มซ่ามากส์", 
      "เอ็มซ่ามากส์", 
      "Alongkorl (นายเอ็มซ่ามากส์)"
    ],
    "url": "https://me.aemdevweb.com",
    "image": "https://me.aemdevweb.com/images/profile-photo.jpg",
    "jobTitle": "Web Artisan & Digital Solution Architect",
    "description": "คนทำเว็บที่หลงรักในงานละเอียดและผลลัพธ์ที่จับต้องได้ ผมเชื่อว่าเว็บไซต์ที่ดีคือหัวใจสำคัญที่ช่วยให้ธุรกิจเติบโตอย่างมั่นคง ผู้อยู่เบื้องหลังการออกแบบและพัฒนาระบบจัดการข้อมูลดิจิทัล Unlink-th",
    "gender": "Male",
    "email": "me@aemdevweb.com",
    "nationality": {
      "@type": "Country",
      "name": "Thailand"
    },
    "sameAs": [
      "https://www.aemdevweb.com",
      "https://www.unlink-th.com",
      "https://www.facebook.com/aemdevweb",
      "https://lin.ee/dDHISbG"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "AemDevWeb",
        "url": "https://www.aemdevweb.com",
        "description": "สตูดิโอสร้างสรรค์เว็บไซต์เพื่อยกระดับธุรกิจยุคใหม่"
      },
      {
        "@type": "Organization",
        "name": "Unlink-th",
        "url": "https://www.unlink-th.com",
        "description": "ศูนย์รับปรึกษาและจัดการข้อมูลบนโลกออนไลน์"
      }
    ],
    "knowsAbout": [
      "Modern Web Craftsmanship",
      "Digital Business Optimization",
      "Search Engine Strategy",
      "Online Trust & Identity Management",
      "User-Centric Design",
      "SME Growth Solutions"
    ],
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": "Thai"
      },
      {
        "@type": "Language",
        "name": "English"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
