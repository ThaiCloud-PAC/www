export type NavItem = {
  label: string;
  href: string;
};

export type FooterItem = {
  label: string;
  href: string;
};

export type HeroCta = {
  label: string;
  href: string;
};

export type FeatureCard = {
  title: string;
  description: string;
};

export type ComparisonRow = {
  feature: string;
  standard: string;
  thaiCloud: string;
};

export type PricingTier = {
  name: string;
  description: string;
  highlights: string[];
  cta: string;
  featured?: boolean;
};

export type ResourceGuide = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PageKey =
  | "home"
  | "platform"
  | "solutions"
  | "customers"
  | "resources"
  | "pricing"
  | "about"
  | "caseStudies"
  | "contact"
  | "privacy"
  | "terms"
  | "bookDemo"
  | "technology"
  | "developers"
  | "visionAi";

export type PageData = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  intro: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
};

export const siteName = "Packiko by ThaiCloud";
export const siteTagline = "Warehouse operations platform";

export const seoKeywords = [
  "warehouse operations platform",
  "inventory control software",
  "packing verification",
  "packing video evidence",
  "ecommerce warehouse software",
  "ThaiCloud",
];

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

export const trustedBy = [
  "Fast-growing online sellers",
  "Fulfillment teams",
  "High-volume warehouse teams",
  "Operations leaders",
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

export const whyToolsFail = [
  "ระบบคลังไว้จด Stock แต่ไม่ได้ช่วยหาหลักฐานเวลาเกิดปัญหา",
  "กล้องดูย้อนหลังได้ แต่ค้นหาตาม Order ไม่ง่าย",
  "ทีมต้องไล่หาคลิปเองทุกครั้งเมื่อมี dispute",
  "กว่าจะหาคำตอบเจอ ร้านมักเสียเวลาและจบด้วยการคืนเงินลูกค้า",
];

export const solutionOverview: FeatureCard[] = [
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

export const platformCapabilities: FeatureCard[] = [
  {
    title: "Inventory Control",
    description: "ควบคุม stock แบบ real-time เพื่อลด oversell, stock mismatch และของหาย",
  },
  {
    title: "Packing Verification",
    description: "ลดการแพ็คผิดด้วยขั้นตอนตรวจสอบที่ชัดเจนสำหรับทีมแพ็ค",
  },
  {
    title: "Video Evidence",
    description: "วิดีโอหลักฐานระหว่างแพ็คทุก Order พร้อมค้นหาได้ทันทีเมื่อต้องตรวจสอบเคส",
  },
  {
    title: "Operations Dashboard",
    description: "เห็นจำนวน Order ที่กำลังแพ็ค ประสิทธิภาพทีม และปัญหาที่ต้องแก้ทันที",
  },
  {
    title: "Integrations",
    description: "เชื่อมต่อกับระบบ eCommerce และ ERP ที่ทีมใช้งานอยู่เดิม",
  },
];

export const solutionAudiences: FeatureCard[] = [
  {
    title: "For Large Online Sellers",
    description: "เหมาะสำหรับร้านที่มีออเดอร์จำนวนมากและต้องการคุม stock ลดการแพ็คผิด และแก้ dispute ได้เร็วขึ้น",
  },
  {
    title: "For Fulfillment Teams",
    description: "เหมาะสำหรับทีมแพ็คที่ต้องการ workflow ที่ชัดเจน ตรวจสอบได้ และลดข้อผิดพลาดในงานประจำวัน",
  },
];

export const customerOutcomes = [
  "45% ลดการแพ็คผิด",
  "30% เพิ่มความเร็วในการแพ็ค",
  "100% มีหลักฐานทุก Order",
];

export const homepageCustomers: FeatureCard[] = [
  {
    title: "ร้านค้าออนไลน์ที่ออเดอร์วิ่งทั้งวัน",
    description: "ใช้ Packiko เพื่อคุม stock ลดการแพ็คผิด และตอบเคสลูกค้าได้เร็วขึ้นเมื่อจำนวนออเดอร์เพิ่มต่อเนื่อง",
  },
  {
    title: "Fulfillment teams ที่ต้องคุมหลายโต๊ะแพ็ค",
    description: "ทำให้ workflow การแพ็คตรวจสอบได้ง่ายขึ้น และตามหลักฐานของแต่ละ Order ได้จากระบบเดียว",
  },
];

export const resourceGuides: ResourceGuide[] = [
  {
    title: "การจัดการคลังสินค้า",
    description: "แนวทางจัดระบบคลังให้รองรับออเดอร์ที่เพิ่มขึ้นโดยไม่เสียการควบคุมหน้างาน",
  },
  {
    title: "การลดการแพ็คผิด",
    description: "วิธีจัด workflow การหยิบและแพ็คให้ชัดเจนขึ้นสำหรับทีมที่มีหลายคน หลายรอบงาน",
  },
  {
    title: "วิธีจัดการเคสลูกค้าเคลม",
    description: "แนวทางตอบ dispute ให้เร็วขึ้นด้วยข้อมูล order และวิดีโอหลักฐานระหว่างแพ็ค",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    description: "สำหรับร้านที่เริ่มมีออเดอร์เยอะและต้องการคุม stock กับมีหลักฐานทุก Order",
    highlights: ["Inventory Control", "Video Evidence", "Book Demo"],
    cta: "Book Demo",
  },
  {
    name: "Growth",
    description: "สำหรับทีมที่ต้องการลดการแพ็คผิดและเห็นภาพรวมงานแพ็คชัดขึ้นทุกวัน",
    highlights: ["Packing Verification", "Dashboard", "Book Demo"],
    cta: "Book Demo",
    featured: true,
  },
  {
    name: "Enterprise",
    description: "สำหรับ warehouse หรือ fulfillment operation ที่มี volume สูงและ workflow ซับซ้อน",
    highlights: ["Custom Workflow", "Multi-team Support", "Book Demo"],
    cta: "Book Demo",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Packiko คืออะไร",
    answer: "Packiko คือระบบคลังสำหรับร้านออนไลน์และ fulfillment teams ที่ช่วยคุม stock ลดแพ็คผิด และเก็บวิดีโอหลักฐานทุก Order",
  },
  {
    question: "ต่างจากกล้องแพ็คของยังไง",
    answer: "Packiko ไม่ได้มีแค่วิดีโอย้อนหลัง แต่ค้นหาหลักฐานตาม Order Number, เวลา และพนักงานได้ พร้อมใช้ควบคู่กับการคุม stock และงานแพ็ค",
  },
  {
    question: "ต้องเปลี่ยน workflow ไหม",
    answer: "ส่วนใหญ่ไม่ต้องรื้อ workflow ใหม่ทั้งหมด แต่จะทำให้ขั้นตอนหยิบ แพ็ค และตรวจสอบชัดขึ้นเพื่อให้ทีมทำงานง่ายกว่าเดิม",
  },
];

export const comparisonRows: ComparisonRow[] = [
  { feature: "บันทึก Video", standard: "มี", thaiCloud: "มี" },
  { feature: "ค้นหา Video ตาม Order", standard: "ไม่มี", thaiCloud: "มี" },
  { feature: "ใช้เป็นหลักฐานเคลม", standard: "ยาก", thaiCloud: "ง่าย" },
  { feature: "ตรวจสอบการแพ็ค", standard: "ไม่มี", thaiCloud: "มี" },
  { feature: "วิเคราะห์ workflow", standard: "ไม่มี", thaiCloud: "มี" },
  { feature: "Operations Dashboard", standard: "ไม่มี", thaiCloud: "มี" },
];

export const marketplaceList = ["Shopee", "Lazada", "TikTok Shop"];

export const pageData: Record<PageKey, PageData> = {
  home: {
    slug: "/",
    title: "Home",
    description:
      "Packiko by ThaiCloud ช่วยร้านออนไลน์คุม stock ลดแพ็คผิด และมีวิดีโอหลักฐานทุก order สำหรับทีมที่รันออเดอร์จำนวนมากต่อวัน",
    eyebrow: "Packiko by ThaiCloud",
    headline: "ขายวันละหลายร้อยออเดอร์\nแต่คลังยังคุมอยู่",
    intro:
      "Packiko ช่วยร้านออนไลน์คุม Stock ลดแพ็คผิด และมีวิดีโอหลักฐานทุก Order",
    primaryCta: { label: "Book Demo", href: "/book-demo" },
  },
  platform: {
    slug: "/platform",
    title: "Platform",
    description: "ดูภาพรวมความสามารถของ ThaiCloud ตั้งแต่ inventory control ไปจนถึง video evidence และ dashboard",
    eyebrow: "ThaiCloud Platform",
    headline: "รวมระบบสำคัญของคลังไว้ในที่เดียว",
    intro:
      "ThaiCloud ช่วยให้ร้านออนไลน์และทีม fulfillment คุม stock ลดการแพ็คผิด และตรวจสอบงานแพ็คได้จากข้อมูลและวิดีโอในระบบเดียว",
    primaryCta: { label: "Book a Demo", href: "/book-demo" },
    secondaryCta: { label: "View Pricing", href: "/pricing" },
  },
  solutions: {
    slug: "/solutions",
    title: "Solutions",
    description: "ThaiCloud เหมาะกับทั้งร้านออนไลน์ขนาดใหญ่และทีม fulfillment ที่ต้องการ workflow ชัดเจนและตรวจสอบได้",
    eyebrow: "Solutions",
    headline: "เหมาะกับทีมที่ต้องคุมงานคลังทุกวัน",
    intro:
      "ThaiCloud ถูกออกแบบมาสำหรับผู้ขายออนไลน์ที่มี volume สูง และทีม fulfillment ที่ต้องการลดข้อผิดพลาดและตอบเคสได้เร็วขึ้น",
    primaryCta: { label: "Book a Demo", href: "/book-demo" },
    secondaryCta: { label: "See Pricing", href: "/pricing" },
  },
  customers: {
    slug: "/customers",
    title: "Customers",
    description: "ร้านค้าและทีม fulfillment ใช้ ThaiCloud เพื่อลดการแพ็คผิด ลดเวลาหาหลักฐาน และคุมคลังได้ดีขึ้น",
    eyebrow: "Customers",
    headline: "ร้านค้าและทีม fulfillment ที่ใช้ ThaiCloud",
    intro:
      "ลูกค้าหลายรายใช้ ThaiCloud เพื่อคุมงานหลังบ้านให้ชัดขึ้น ลดความผิดพลาด และหาหลักฐานได้เร็วเมื่อต้องตอบ dispute",
    primaryCta: { label: "Book a Demo", href: "/book-demo" },
    secondaryCta: { label: "View Case Studies", href: "/case-studies" },
  },
  resources: {
    slug: "/resources",
    title: "Resources",
    description: "บทความและคู่มือสำหรับทีมคลังที่ต้องการลดการแพ็คผิด จัดการ stock และรับมือกับเคสลูกค้าเคลม",
    eyebrow: "Resources",
    headline: "คู่มือสำหรับทีมที่ต้องคุมคลังให้แม่นขึ้น",
    intro:
      "รวมบทความและคู่มือเกี่ยวกับการจัดการคลังสินค้า การลดการแพ็คผิด และการจัดการเคสลูกค้าเคลมสำหรับทีมที่ทำงานจริงทุกวัน",
    primaryCta: { label: "Book a Demo", href: "/book-demo" },
  },
  pricing: {
    slug: "/pricing",
    title: "Pricing",
    description: "Flexible pricing สำหรับร้านออนไลน์และคลังสินค้าที่กำลังโต",
    eyebrow: "Pricing",
    headline: "Flexible pricing สำหรับร้านออนไลน์และคลังสินค้าที่กำลังโต",
    intro:
      "เลือกแพ็กเกจที่เหมาะกับ volume ปัจจุบันของคุณ แล้วค่อยขยายต่อเมื่อทีมต้องการ workflow tools, dashboard และ integrations เพิ่มขึ้น",
    primaryCta: { label: "Contact Sales", href: "/book-demo" },
    secondaryCta: { label: "Book a Demo", href: "/book-demo" },
  },
  about: {
    slug: "/about",
    title: "About",
    description: "ThaiCloud คือ warehouse operations platform สำหรับร้านออนไลน์และทีม fulfillment ที่มีออเดอร์จำนวนมาก",
    eyebrow: "About ThaiCloud",
    headline: "พลังของระบบคลังที่ช่วยงานจริงในทุกวัน",
    intro:
      "ThaiCloud สร้างระบบที่ช่วยให้ทีมคลังทำงานได้แม่นขึ้น ตรวจสอบได้ง่ายขึ้น และตอบปัญหาหน้างานได้เร็วขึ้น โดยไม่เพิ่มความซับซ้อนเกินจำเป็น",
    primaryCta: { label: "Book a Demo", href: "/book-demo" },
    secondaryCta: { label: "Contact", href: "/contact" },
  },
  caseStudies: {
    slug: "/case-studies",
    title: "Case Studies",
    description: "ผลลัพธ์ที่ร้านค้าและทีม fulfillment ได้จากการใช้ ThaiCloud",
    eyebrow: "Case Studies",
    headline: "ผลลัพธ์ที่ทีมปฏิบัติการต้องการเห็นจริง",
    intro:
      "ทีมที่ใช้ ThaiCloud มักเริ่มจากการต้องการลดการแพ็คผิด หาหลักฐานให้เร็วขึ้น และคุม stock ให้ตรงมากขึ้น แล้วจึงต่อยอดไปสู่ workflow ที่นิ่งกว่าเดิม",
    primaryCta: { label: "Book a Demo", href: "/book-demo" },
  },
  contact: {
    slug: "/contact",
    title: "Contact",
    description: "พูดคุยกับ ThaiCloud เกี่ยวกับการใช้งานสำหรับร้านออนไลน์และทีม fulfillment",
    eyebrow: "Contact",
    headline: "เริ่มคุยเรื่องคลังของคุณได้เลย",
    intro:
      "ถ้าคุณกำลังมองหาระบบที่ช่วยคุม stock ลดการแพ็คผิด และทำให้การตอบเคสลูกค้าเคลมเร็วขึ้น ThaiCloud พร้อมคุยกับทีมของคุณ",
    primaryCta: { label: "Book a Demo", href: "/book-demo" },
  },
  privacy: {
    slug: "/privacy",
    title: "Privacy",
    description: "นโยบายความเป็นส่วนตัวของ ThaiCloud",
    eyebrow: "Privacy",
    headline: "Privacy Policy",
    intro:
      "ThaiCloud ให้ความสำคัญกับข้อมูลของลูกค้าและข้อมูลการปฏิบัติงานในคลัง โดยกำหนดแนวทางการเก็บ ใช้ และปกป้องข้อมูลอย่างชัดเจน",
  },
  terms: {
    slug: "/terms",
    title: "Terms",
    description: "ข้อกำหนดการใช้งานของ ThaiCloud",
    eyebrow: "Terms",
    headline: "Terms of Use",
    intro:
      "ข้อกำหนดการใช้งานของ ThaiCloud ครอบคลุมการใช้งานแพลตฟอร์ม การเข้าถึงบริการ การใช้งานข้อมูล และความรับผิดชอบของทั้งสองฝ่าย",
  },
  bookDemo: {
    slug: "/book-demo",
    title: "Book Demo",
    description: "ดูว่า ThaiCloud ช่วยให้คุณคุมคลังได้ง่ายขึ้นอย่างไร",
    eyebrow: "Book Demo",
    headline: "ดูว่า ThaiCloud ช่วยให้คุณคุมคลังได้ง่ายขึ้นอย่างไร",
    intro:
      "ในเดโม คุณจะเห็นทั้ง Inventory Control, Packing Workflow, วิดีโอหลักฐานระหว่างแพ็ค และ Dashboard ที่ช่วยให้ทีมจัดการงานคลังได้ง่ายขึ้น",
    primaryCta: { label: "Submit Demo Request", href: "#demo-form" },
    secondaryCta: { label: "Explore Platform", href: "/platform" },
  },
  technology: {
    slug: "/technology",
    title: "Platform",
    description: "ThaiCloud platform overview",
    eyebrow: "ThaiCloud Platform",
    headline: "รวมระบบสำคัญของคลังไว้ในที่เดียว",
    intro:
      "ThaiCloud ช่วยให้ร้านออนไลน์และทีม fulfillment คุม stock ลดการแพ็คผิด และตรวจสอบงานแพ็คได้จากข้อมูลและวิดีโอในระบบเดียว",
    primaryCta: { label: "Book a Demo", href: "/book-demo" },
    secondaryCta: { label: "View Pricing", href: "/pricing" },
  },
  developers: {
    slug: "/developers",
    title: "Resources",
    description: "ThaiCloud resource center",
    eyebrow: "Resources",
    headline: "คู่มือสำหรับทีมที่ต้องคุมคลังให้แม่นขึ้น",
    intro:
      "รวมบทความและคู่มือเกี่ยวกับการจัดการคลังสินค้า การลดการแพ็คผิด และการจัดการเคสลูกค้าเคลมสำหรับทีมที่ทำงานจริงทุกวัน",
    primaryCta: { label: "Book a Demo", href: "/book-demo" },
  },
  visionAi: {
    slug: "/vision-ai",
    title: "Platform",
    description: "ThaiCloud platform overview",
    eyebrow: "ThaiCloud Platform",
    headline: "รวมระบบสำคัญของคลังไว้ในที่เดียว",
    intro:
      "ThaiCloud ช่วยให้ร้านออนไลน์และทีม fulfillment คุม stock ลดการแพ็คผิด และตรวจสอบงานแพ็คได้จากข้อมูลและวิดีโอในระบบเดียว",
    primaryCta: { label: "Book a Demo", href: "/book-demo" },
    secondaryCta: { label: "View Pricing", href: "/pricing" },
  },
};
