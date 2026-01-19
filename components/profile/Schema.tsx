/** @format */

/**
 * Schema Component (JSON-LD) - ฉบับนายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 * วัตถุประสงค์: สร้าง Technical Authority บน Google Search
 * ปรับปรุง: ชูจุดเด่นเรื่อง SEO Organic และการเป็นพาร์ทเนอร์ดูแลระบบระยะยาว
 * นำเสนอในฐานะ "ผู้อยู่เบื้องหลัง" ความสำเร็จของ Unlink-th เพื่อสร้างความเชื่อมั่นสูงสุด
 */
export default function Schema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://me.aemdevweb.com/#person",
        "name": "Alongkorl Yomkerd",
        "alternateName": [
          "นายเอ็มซ่ามากส์",
          "พี่เอ็ม AEM",
          "เอ็มซ่ามากส์",
          "Alongkorl (นายเอ็มซ่ามากส์)"
        ],
        "url": "https://me.aemdevweb.com",
        "image": {
          "@type": "ImageObject",
          "url": "https://me.aemdevweb.com/images/profile-photo.jpg",
          "width": "800",
          "height": "800"
        },
        "jobTitle": "ที่ปรึกษาดูแลระบบเว็บไซต์และผู้เชี่ยวชาญ SEO Organic",
        "description": "ที่ปรึกษาและผู้อยู่เบื้องหลังการวางระบบเว็บไซต์ที่เน้นผลลัพธ์ทางธุรกิจ ผู้สร้างและดูแลระบบทั้งหมดของ Unlink-th ให้ปลอดภัยและทรงพลัง มุ่งเน้นการดูแล SEO Organic (สายออร์แกนิค) เพื่อช่วยให้ธุรกิจ SME ติดหน้าแรก Google ได้อย่างยั่งยืนโดยไม่พึ่งพาแค่ค่าโฆษณา",
        "gender": "Male",
        "email": "me@aemdevweb.com",
        "nationality": {
          "@type": "Country",
          "name": "Thailand"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kamphaeng Phet",
          "addressCountry": "TH"
        },
        "sameAs": [
          "https://www.aemdevweb.com",
          "https://www.unlink-th.com",
          "https://www.facebook.com/aemdevweb",
          "https://lin.ee/dDHISbG",
          "https://github.com/jiggoo0"
        ],
        "worksFor": { "@id": "https://www.aemdevweb.com/#organization" },
        "knowsAbout": [
          "การปั้นอันดับด้วย SEO Organic (สายออร์แกนิค)",
          "การดูแลระบบเว็บไซต์ให้โหลดไวระดับเสี้ยววินาที (ลื่นหัวแตก)",
          "กลยุทธ์การปั้นยอดขายด้วย Organic Search",
          "การจัดการและปกป้องชื่อเสียงออนไลน์ (Digital Reputation Management)",
          "การออกแบบเว็บไซต์ที่เน้นการปิดการขาย (Conversion Rate Optimization)",
          "การวางโครงสร้างระบบด้วย Next.js และ React"
        ],
        "knowsLanguage": ["Thai", "English"]
      },
      {
        "@type": "Organization",
        "@id": "https://www.aemdevweb.com/#organization",
        "name": "AemDevWeb",
        "url": "https://www.aemdevweb.com",
        "logo": "https://me.aemdevweb.com/images/service/aemdevweb.webp",
        "description": "สตูดิโอผู้ออกแบบเว็บไซต์และพาร์ทเนอร์วางกลยุทธ์ SEO Organic เพื่อการเติบโตที่ยั่งยืนสำหรับ SME ไทย",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "url": "https://me.aemdevweb.com/contact"
        }
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
