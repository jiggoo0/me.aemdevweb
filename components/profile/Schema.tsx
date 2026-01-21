/** @format */

/**
 * 🛠️ Schema Component (JSON-LD) - Personal Branding Strategy
 * วัตถุประสงค์: ยืนยันตัวตน "Alongkorl Yomkerd" ในฐานะ Expert บน Knowledge Graph ของ Google
 * เชื่อมโยงประวัติการทำงานจาก LinkedIn URL ใหม่ เพื่อเพิ่มความน่าเชื่อถือ (EEAT)
 */
export default function Schema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://me.aemdevweb.com/#person",
        name: "Alongkorl Yomkerd",
        alternateName: [
          "อลงกรณ์ ยมเกิด",
          "นายเอ็มซ่ามากส์",
          "AEMDEVWEB",
          "Unlink-th Architect",
        ],
        url: "https://me.aemdevweb.com",
        image: {
          "@type": "ImageObject",
          url: "https://me.aemdevweb.com/images/profile-photo.jpg",
          width: "800",
          height: "800",
          caption: "นายเอ็มซ่ามากส์ - ที่ปรึกษา SEO และนักพัฒนาเว็บ",
        },
        jobTitle: "Technical SEO Consultant & Full-Stack Developer",
        description:
          "เปลี่ยนเว็บไซต์ให้เป็นสินทรัพย์ที่หาเงินเองได้ ผมคือ 'นายเอ็มซ่ามากส์' ที่ปรึกษาด้าน SEO และนักพัฒนาเว็บสาย Technical ผู้อยู่เบื้องหลังความปลอดภัยของ Unlink-th ผมมุ่งมั่นช่วย SME ไทยสร้างยอดขายจาก Organic Traffic ด้วยกลยุทธ์ที่ยั่งยืน",
        gender: "https://schema.org/Male",
        email: "me@aemdevweb.com",
        nationality: {
          "@type": "Country",
          name: "Thailand",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bangkok",
          addressRegion: "Thailand",
          addressCountry: "TH",
        },
        // ✅ อัปเดต LinkedIn เป็น Custom URL ใหม่ (alongkorl-aemdevweb)
        sameAs: [
          "https://www.aemdevweb.com",
          "https://www.unlink-th.com",
          "https://www.facebook.com/aemdevweb",
          "https://www.linkedin.com/in/alongkorl-aemdevweb",
          "https://lin.ee/dDHISbG",
          "https://github.com/jiggoo0",
        ],
        worksFor: { "@id": "https://www.aemdevweb.com/#organization" },
        knowsAbout: [
          { "@type": "Thing", name: "Technical SEO Strategy" },
          { "@type": "Thing", name: "Next.js Web Performance" },
          { "@type": "Thing", name: "Online Reputation Management (ORM)" },
          { "@type": "Thing", name: "Organic Traffic Growth for SME" },
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://www.aemdevweb.com/#organization",
        name: "AEMDEVWEB",
        url: "https://www.aemdevweb.com",
        logo: {
          "@type": "ImageObject",
          url: "https://me.aemdevweb.com/images/service/aemdevweb.webp",
        },
        founder: { "@id": "https://me.aemdevweb.com/#person" },
        slogan:
          "สร้างเว็บที่เปิดไวทันใจ เพื่อให้ธุรกิจของคุณนำหน้าคู่แข่งในทุกคลิก",
        description:
          "สตูดิโอพัฒนาเว็บไซต์และที่ปรึกษา SEO ครบวงจร เน้นความเร็ว ความปลอดภัย และผลลัพธ์ทางธุรกิจที่ยั่งยืนสำหรับ SME ไทย",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Technical Support",
          areaServed: "TH",
          availableLanguage: ["Thai", "English"],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
