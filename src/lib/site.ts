export type NavItem = {
  label: string;
  href: string;
};

export type FooterItem = {
  label: string;
  href: string;
};

export type FeatureCard = {
  title: string;
  description: string;
};

export type PricingPlan = {
  name: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SimplePage = {
  title: string;
  eyebrow: string;
  intro: string;
  body: string[];
};

export const siteName = "Packiko by ThaiCloud";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Customers", href: "/customers" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
];

export const footerItems: FooterItem[] = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export const problemCards: FeatureCard[] = [
  {
    title: "Stock ไม่ตรง",
    description:
      "ขายไปแล้วแต่ของในคลังหาไม่เจอ จนต้องยกเลิกออเดอร์ คืนเงินลูกค้า และเสียคะแนนร้าน",
  },
  {
    title: "แพ็คผิด",
    description:
      "หยิบผิดรุ่น สี ไซส์ หรือแพ็คของไม่ครบ จนต้องส่งของใหม่ เสียค่าขนส่ง และเสียเวลาทีมงาน",
  },
  {
    title: "ลูกค้าเคลมสินค้า",
    description:
      "ลูกค้าบอกว่าได้ของไม่ครบ ไม่ได้ของ หรือของไม่ตรง แต่ร้านไม่มีหลักฐานเอาไว้ตรวจสอบ",
  },
  {
    title: "Marketplace มักตัดสินให้ลูกค้า",
    description:
      "เมื่อไม่มีหลักฐานว่าแพ็คอะไรไปจริง ร้านมักจบที่คืนเงิน แม้ทีมงานจะทำถูกขั้นตอนแล้วก็ตาม",
  },
];

export const solutionCards: FeatureCard[] = [
  {
    title: "Inventory Control",
    description: "เห็นสถานะสินค้าในคลังแบบ real-time เพื่อคุม stock ให้ตรงมากขึ้น",
  },
  {
    title: "Packing Verification",
    description: "ช่วยตรวจขั้นตอนการแพ็คเพื่อลดการหยิบผิด การส่งผิด และการแพ็คไม่ครบ",
  },
  {
    title: "วิดีโอหลักฐานระหว่างแพ็ค",
    description: "มีวิดีโอหลักฐานสำหรับทุก Order และค้นหาได้จากเลขออเดอร์ เวลาแพ็ค หรือพนักงาน",
  },
  {
    title: "Operations Dashboard",
    description: "เห็นภาพรวมการทำงานของคลังในหน้าเดียว จัดการทีมและ workflow ได้ง่ายขึ้น",
  },
];

export const videoSearchKeys = ["Order Number", "เวลา", "พนักงาน"];

export const stats = [
  { value: "45%", label: "ลดการแพ็คผิด" },
  { value: "30%", label: "แพ็คได้เร็วขึ้น" },
  { value: "100%", label: "มีหลักฐานทุก Order" },
];

export const useCases: FeatureCard[] = [
  {
    title: "ร้านค้าออนไลน์ที่ออเดอร์วิ่งทั้งวัน",
    description:
      "ใช้ Packiko เพื่อคุม stock ลดการแพ็คผิด และตอบเคสลูกค้าได้เร็วขึ้นเมื่อจำนวนออเดอร์เพิ่มต่อเนื่อง",
  },
  {
    title: "Fulfillment teams ที่ต้องคุมหลายโต๊ะแพ็ค",
    description:
      "ทำให้ workflow การแพ็คตรวจสอบได้ง่ายขึ้น และตามหลักฐานของแต่ละ Order ได้จากระบบเดียว",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    description: "สำหรับร้านที่เริ่มมีออเดอร์เยอะและต้องการคุม stock กับมีหลักฐานทุก Order",
    features: ["Inventory Control", "Video Evidence"],
  },
  {
    name: "Growth",
    description: "สำหรับทีมที่ต้องการลดการแพ็คผิดและเห็นภาพรวมงานแพ็คชัดขึ้นทุกวัน",
    features: ["Packing Verification", "Dashboard"],
    featured: true,
  },
  {
    name: "Enterprise",
    description: "สำหรับ warehouse หรือ fulfillment operation ที่มี volume สูงและ workflow ซับซ้อน",
    features: ["Custom Workflow", "Multi-team Support"],
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Packiko คืออะไร",
    answer:
      "Packiko คือระบบคลังสำหรับร้านออนไลน์และ fulfillment teams ที่ช่วยคุม stock ลดแพ็คผิด และเก็บวิดีโอหลักฐานทุก Order",
  },
  {
    question: "ต่างจากกล้องแพ็คของยังไง",
    answer:
      "Packiko ไม่ได้มีแค่วิดีโอย้อนหลัง แต่ค้นหาหลักฐานตาม Order Number, เวลา และพนักงานได้ พร้อมใช้ควบคู่กับการคุม stock และงานแพ็ค",
  },
  {
    question: "ต้องเปลี่ยน workflow ไหม",
    answer:
      "ส่วนใหญ่ไม่ต้องรื้อ workflow ใหม่ทั้งหมด แต่จะทำให้ขั้นตอนหยิบ แพ็ค และตรวจสอบชัดขึ้นเพื่อให้ทีมทำงานง่ายกว่าเดิม",
  },
  {
    question: "ใช้กับ marketplace ได้ไหม",
    answer:
      "ใช้เป็นหลักฐานเพื่อตรวจสอบและตอบเคสลูกค้าได้เร็วขึ้น โดยเฉพาะเวลามี dispute กับ Shopee, Lazada หรือ TikTok Shop",
  },
];

export const audienceStrip = [
  "Shopee sellers",
  "Lazada sellers",
  "TikTok Shop sellers",
  "Fulfillment teams",
];

export const simplePages: Record<string, SimplePage> = {
  platform: {
    title: "Platform",
    eyebrow: "Packiko by ThaiCloud",
    intro: "ดูภาพรวมของระบบที่ช่วยคุม stock ลดการแพ็คผิด และเก็บหลักฐานทุก Order",
    body: [
      "Packiko รวม Inventory Control, Packing Verification, Video Evidence และ Operations Dashboard ไว้ใน workflow เดียว",
      "ออกแบบมาสำหรับทีมที่ต้องคุมงานคลังทุกวันและต้องตอบปัญหาหน้างานได้เร็ว",
    ],
  },
  solutions: {
    title: "Solutions",
    eyebrow: "Packiko by ThaiCloud",
    intro: "เหมาะกับร้านค้าออนไลน์และ fulfillment teams ที่ต้องคุมออเดอร์จำนวนมากต่อวัน",
    body: [
      "ช่วยคุม stock ให้ตรงขึ้น ลดการหยิบผิด และทำให้การตรวจสอบย้อนหลังชัดขึ้น",
      "โดยเฉพาะในช่วงที่ออเดอร์พุ่งและทีมต้องทำงานหลายโต๊ะพร้อมกัน",
    ],
  },
  customers: {
    title: "Customers",
    eyebrow: "Packiko by ThaiCloud",
    intro: "เหมาะกับทีมที่ยังทำงานแบบลงหน้างานจริง แต่ต้องการระบบที่ช่วยคุม operation ให้แม่นขึ้น",
    body: [
      "ร้านออนไลน์ที่ขายดีใช้ Packiko เพื่อไม่ให้ stock mismatch และ packing error ลามเป็นปัญหาลูกค้า",
      "fulfillment teams ใช้เพื่อคุม workflow และเปิดดูหลักฐานตาม Order ได้จากระบบเดียว",
    ],
  },
  resources: {
    title: "Resources",
    eyebrow: "Packiko by ThaiCloud",
    intro: "คำถามที่ทีม operations มักสนใจก่อนเริ่มใช้ระบบ",
    body: [
      "Packiko ช่วยให้ทีมตอบเคสลูกค้าได้เร็วขึ้นด้วยข้อมูล Order และวิดีโอหลักฐานระหว่างแพ็ค",
      "เหมาะกับทีมที่ต้องการลดงานตามหาหลักฐานและทำให้การตรวจสอบคลังชัดขึ้น",
    ],
  },
  pricing: {
    title: "Pricing",
    eyebrow: "Packiko by ThaiCloud",
    intro: "เลือกแพ็กที่เหมาะกับ operation ปัจจุบัน แล้วค่อยขยายเมื่อทีมต้องการ workflow เพิ่มขึ้น",
    body: [
      "ราคาและการใช้งานถูกวางให้ practical สำหรับทีมที่กำลังโต",
      "เริ่มจากสิ่งที่ทีมต้องใช้จริงก่อน แล้วค่อยขยายตาม volume ของออเดอร์",
    ],
  },
  "book-demo": {
    title: "Book Demo",
    eyebrow: "Packiko by ThaiCloud",
    intro: "ดูว่า Packiko ช่วยให้คุณคุมคลังได้ง่ายขึ้นยังไง",
    body: [
      "ในเดโม คุณจะเห็นการคุม stock, การแพ็ค, dashboard และวิดีโอหลักฐานของแต่ละ Order",
      "เหมาะสำหรับทีมที่อยากเห็นภาพการใช้งานจริงก่อนเริ่มต้น",
    ],
  },
  about: {
    title: "About",
    eyebrow: "ThaiCloud",
    intro: "ThaiCloud คือบริษัทที่พัฒนา Packiko สำหรับทีม warehouse และ online seller volume สูง",
    body: [
      "แบรนด์หลักบนเว็บไซต์นี้คือ Packiko ซึ่งเป็นตัวผลิตภัณฑ์",
      "ThaiCloud จะอยู่ในบทบาทบริษัทและการสนับสนุนด้านแพลตฟอร์ม",
    ],
  },
  "case-studies": {
    title: "Case Studies",
    eyebrow: "Packiko by ThaiCloud",
    intro: "ตัวอย่างผลลัพธ์ที่ทีมมักคาดหวังเมื่อเริ่มคุมคลังอย่างจริงจัง",
    body: [
      "ลดการแพ็คผิด ลดเวลาหาหลักฐาน และทำให้ workflow หลังบ้านนิ่งขึ้น",
      "เหมาะกับทีมที่มีแรงกดดันจาก marketplace และ volume ออเดอร์ที่เพิ่มขึ้นต่อเนื่อง",
    ],
  },
  contact: {
    title: "Contact",
    eyebrow: "Packiko by ThaiCloud",
    intro: "คุยกับทีมเรื่อง workflow ปัจจุบัน ปัญหา stock และเคส dispute ที่คุณเจออยู่",
    body: [
      "ทีมจะช่วยวางเดโมให้ตรงกับหน้างานจริงของคุณ",
      "เหมาะกับทั้งร้านออนไลน์และ fulfillment operations",
    ],
  },
  privacy: {
    title: "Privacy",
    eyebrow: "ThaiCloud",
    intro: "แนวทางการดูแลข้อมูลของลูกค้าและข้อมูลหน้างานในระบบ Packiko",
    body: [
      "เก็บและใช้งานข้อมูลเท่าที่จำเป็นต่อการให้บริการ",
      "เน้นการปกป้องข้อมูลการปฏิบัติงานและหลักฐานที่เกี่ยวข้องกับแต่ละ Order",
    ],
  },
  terms: {
    title: "Terms",
    eyebrow: "ThaiCloud",
    intro: "ข้อกำหนดการใช้งานบริการ Packiko by ThaiCloud",
    body: [
      "ครอบคลุมขอบเขตบริการ การเข้าถึงระบบ และความรับผิดชอบในการใช้งาน",
      "รายละเอียดเชิงสัญญาและ deployment สามารถกำหนดตามแผนการใช้งานของแต่ละทีม",
    ],
  },
};
