/** @format */

/**
 * Schema Component (JSON-LD) - ฉบับนายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 * วัตถุประสงค์: สร้าง Technical Authority ในฐานะผู้เชี่ยวชาญ "รับทำ SEO"
 * ปรับปรุง: ชูจุดเด่นเรื่องการทำ SEO Organic และการเป็นที่ปรึกษาด้านการเขียนคอนเทนต์
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
        // ✅ อัปเดต Job Title ให้ครอบคลุมการ "รับทำ SEO" และ "ปรึกษาการเขียน"
        "jobTitle": "ผู้เชี่ยวชาญรับทำ SEO Organic และที่ปรึกษาการเขียนคอนเทนต์เชิงกลยุทธ์",
        "description": "ผู้เชี่ยวชาญรับทำ SEO Organic และที่ปรึกษาการเขียนเนื้อหาเพื่อปั้นอันดับ Google ผู้อยู่เบื้องหลังการวางระบบเทคนิคัลของ Unlink-th มุ่งเน้นการเปลี่ยนเว็บไซต์ให้เป็นสินทรัพย์ทำเงินด้วยกลยุทธ์สายขาว 100% สำหรับ SME ไทย",
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
          "รับทำ SEO Organic (สายออร์แกนิค)",
          "การรับปรึกษาการเขียน SEO เพื่อเพิ่มยอดขาย",
          "การวางโครงสร้างเว็บไซต์ด้วย Next.js ที่รองรับ SEO ระดับลึก",
          "กลยุทธ์การทำ Organic Search สำหรับธุรกิจครอบครัวและ SME",
          "การจัดการชื่อเสียงออนไลน์ (Online Reputation Management)",
          "Technical SEO Auditing และการปรับแต่งความเร็วเว็บ (Performance)"
        ],
        "knowsLanguage": ["Thai", "English"]
      },
      {
        "@type": "Organization",
        "@id": "https://www.aemdevweb.com/#organization",
        "name": "AemDevWeb",
        "url": "https://www.aemdevweb.com",
        "logo": "https://me.aemdevweb.com/images/service/aemdevweb.webp",
        "description": "สตูดิโอรับทำ SEO และพาร์ทเนอร์วางกลยุทธ์การเขียนคอนเทนต์เพื่อการเติบโตอย่างยั่งยืนบน Google",
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
