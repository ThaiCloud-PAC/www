export type NavItem = {
  label: string;
  href: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type ComparisonRow = {
  feature: string;
  legacy: string;
  thaiCloud: string;
};

export type PricingTier = {
  name: string;
  audience: string;
  description: string;
  highlights: string[];
  cta: string;
  featured?: boolean;
};

export type CaseStudy = {
  name: string;
  segment: string;
  summary: string;
  results: string[];
};

export type PageData = {
  slug: string;
  title: string;
  kicker: string;
  headline: string;
  intro: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  sections: {
    title: string;
    body?: string;
    features?: Feature[];
    bullets?: string[];
  }[];
};

export const siteName = "ThaiCloud";
export const siteTagline = "AI Fulfillment Infrastructure";

export const seoKeywords = [
  "AI Warehouse Platform",
  "Warehouse Automation Software",
  "Fulfillment Optimization Platform",
  "Packing Verification System",
  "Warehouse Video System",
  "AI Warehouse Vision",
];

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "Vision AI", href: "/vision-ai" },
  { label: "Solutions", href: "/solutions" },
  { label: "Technology", href: "/technology" },
  { label: "Developers", href: "/developers" },
  { label: "Customers", href: "/customers" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Book Demo", href: "/book-demo" },
];

export const platformStats = [
  "30-80% Reduction in Fulfillment Errors",
  "20-80% Labor Cost Optimization",
  "15-30% Faster Packing Operations",
];

export const trustedBy = [
  "High-volume eCommerce brands",
  "3PL fulfillment providers",
  "Enterprise logistics teams",
  "Regional warehouse operators",
];

export const mainProducts = ["Packiko Core", "Packiko Vision", "Packiko Automation"];

export const comparisonVideoRows: ComparisonRow[] = [
  { feature: "Packing Video Recording", legacy: "Yes", thaiCloud: "Yes" },
  { feature: "Order-Based Video Indexing", legacy: "Yes", thaiCloud: "Yes" },
  { feature: "Video Playback", legacy: "Yes", thaiCloud: "Yes" },
  { feature: "AI Error Detection", legacy: "No", thaiCloud: "Yes" },
  { feature: "Workflow Analysis", legacy: "No", thaiCloud: "Yes" },
  { feature: "Workforce Insights", legacy: "No", thaiCloud: "Yes" },
  { feature: "Operational Analytics", legacy: "No", thaiCloud: "Yes" },
  { feature: "Real-time Alerts", legacy: "No", thaiCloud: "Yes" },
];

export const comparisonWmsRows: ComparisonRow[] = [
  { feature: "Inventory Management", legacy: "Yes", thaiCloud: "Yes" },
  { feature: "Order Processing", legacy: "Yes", thaiCloud: "Yes" },
  { feature: "Warehouse Workflows", legacy: "Yes", thaiCloud: "Yes" },
  { feature: "Video Intelligence", legacy: "No", thaiCloud: "Yes" },
  { feature: "Workforce Analytics", legacy: "No", thaiCloud: "Yes" },
  { feature: "Operational Insights", legacy: "No", thaiCloud: "Yes" },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    audience: "Growing Operations",
    description: "Launch Packiko with fast onboarding for teams optimizing early-stage fulfillment.",
    highlights: ["Packiko Platform", "Basic Integrations", "Operational baseline dashboard"],
    cta: "Start with Starter",
  },
  {
    name: "Growth",
    audience: "Scaling Warehouses",
    description: "Add workflow optimization and automation for facilities handling increased order volume.",
    highlights: ["Workflow Optimization", "Automation Tools", "Advanced event analytics"],
    cta: "Talk to Growth Team",
    featured: true,
  },
  {
    name: "Enterprise",
    audience: "Large-Scale Operations",
    description: "Deploy custom architecture, enterprise-grade controls, and dedicated success support.",
    highlights: ["Custom Architecture", "Dedicated Support", "Tailored AI model tuning"],
    cta: "Contact Enterprise Sales",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    name: "High Volume eCommerce",
    segment: "Direct-to-consumer fulfillment",
    summary: "ThaiCloud automated packing verification and workforce balancing across peak shifts.",
    results: ["45% reduction in errors", "30% faster packing cycle"],
  },
  {
    name: "3PL Fulfillment",
    segment: "Multi-tenant 3PL operation",
    summary: "Unified event telemetry improved throughput predictability across client workflows.",
    results: ["40% improvement in throughput", "Higher order SLA consistency"],
  },
  {
    name: "Enterprise Warehouse",
    segment: "Regional enterprise distribution",
    summary: "Connected vision events and operational intelligence for full-shift visibility.",
    results: ["Automated workflows", "Real-time operational visibility"],
  },
];

export const pageData: Record<string, PageData> = {
  home: {
    slug: "/",
    title: "Home",
    kicker: "ThaiCloud Platform",
    headline: "The Intelligence Layer for Modern Fulfillment",
    intro:
      "ThaiCloud คือ AI infrastructure ที่ช่วยให้ Warehouse และ Fulfillment Operations ทำงานได้เร็วขึ้น ฉลาดขึ้น และมีประสิทธิภาพมากขึ้น ผ่าน AI-Powered Workflow Automation, Operational Intelligence และ Cloud-Native Platform. Built for High-Volume eCommerce, 3PL Providers และ Enterprise Logistics Teams.",
    ctaPrimary: { label: "Book a Demo", href: "/book-demo" },
    ctaSecondary: { label: "Explore Platform", href: "/platform" },
    sections: [
      {
        title: "Fulfillment operations are becoming increasingly complex",
        body: "เมื่อ eCommerce เติบโต Warehouse Operations ก็ซับซ้อนขึ้นอย่างมาก และหลายทีมยังพึ่งระบบที่เป็นเพียง record-keeping tools.",
        bullets: [
          "ค่าแรงเพิ่มขึ้น",
          "Workflow ไม่มี optimization",
          "Packing errors",
          "Bottlenecks ในการหยิบสินค้า",
          "Visibility ของ operations ต่ำ",
        ],
      },
      {
        title: "Introducing Packiko",
        body: "The AI Operating System for Warehouse Operations. Packiko เปลี่ยน warehouse operations ให้เป็น intelligent system โดยวิเคราะห์ข้อมูลแบบ real-time และ optimize การทำงานอย่างต่อเนื่อง.",
        features: [
          { title: "Picking Workflows", description: "Prioritize and sequence picks for smoother wave execution." },
          { title: "Packing Efficiency", description: "Detect inconsistencies and reduce repeat work at packing stations." },
          { title: "Workforce Allocation", description: "Balance task load by shift performance and queue pressure." },
          { title: "Order Prioritization", description: "Promote the right order at the right time for SLA control." },
        ],
      },
      {
        title: "From video recording to operational intelligence",
        body: "ThaiCloud เปลี่ยน video streams ให้กลายเป็น AI operational intelligence แทนการบันทึกภาพย้อนหลังอย่างเดียว.",
        bullets: [
          "Record packing events อัตโนมัติ",
          "Detect packing errors",
          "Index video ตาม order",
          "Analyze workflow efficiency",
        ],
      },
    ],
  },
  platform: {
    slug: "/platform",
    title: "Platform",
    kicker: "Packiko Platform",
    headline: "AI Infrastructure for Fulfillment Operations",
    intro:
      "Packiko รวม operational intelligence, automation และ system integrations เข้าไว้ใน platform เดียวสำหรับ warehouse teams ที่ต้อง scale อย่างมั่นคง.",
    ctaPrimary: { label: "Book a Platform Demo", href: "/book-demo" },
    ctaSecondary: { label: "View Pricing", href: "/pricing" },
    sections: [
      {
        title: "Core capabilities",
        features: [
          { title: "AI Workflow Optimization", description: "AI วิเคราะห์ warehouse activity และแนะนำ workflow ที่ทำงานได้ดีกว่าเดิม." },
          { title: "Error Reduction System", description: "AI verification ลด packing mistakes ก่อนส่งออก." },
          { title: "Workforce Intelligence", description: "วิเคราะห์ productivity และ workforce allocation ตามพฤติกรรมจริง." },
          { title: "Order Intelligence", description: "จัดลำดับ order ตาม operational efficiency และ business priority." },
        ],
      },
      {
        title: "Designed for daily warehouse decisions",
        bullets: [
          "Operational dashboard สำหรับ supervisor",
          "Analytics graphs สำหรับ continuous improvement",
          "Packing workflow views สำหรับ on-floor execution",
        ],
      },
    ],
  },
  visionAi: {
    slug: "/vision-ai",
    title: "Vision AI",
    kicker: "Packiko Vision",
    headline: "AI Computer Vision for Warehouse Operations",
    intro:
      "Packiko Vision เปลี่ยน warehouse cameras ให้เป็น AI operational sensors ที่ตีความเหตุการณ์จริงใน fulfillment flow แบบค้นหาและนำไปใช้ต่อได้.",
    ctaPrimary: { label: "Book Vision Demo", href: "/book-demo" },
    ctaSecondary: { label: "Explore Technology", href: "/technology" },
    sections: [
      {
        title: "Vision capabilities",
        features: [
          { title: "AI Packing Verification", description: "ตรวจสอบขั้นตอน packing และ flag จุดผิดพลาดตามนโยบายงาน." },
          { title: "Event-Based Video Intelligence", description: "Video ถูกแปลงเป็น searchable events ตาม order, employee และ timestamp." },
          { title: "Workflow Analysis", description: "วิเคราะห์ bottlenecks เพื่อเร่ง throughput ในช่วงชั่วโมงเร่งด่วน." },
          { title: "Workforce Insights", description: "วัด productivity patterns ของพนักงานเพื่อการจัดกำลังคนที่แม่นยำขึ้น." },
        ],
      },
    ],
  },
  solutions: {
    slug: "/solutions",
    title: "Solutions",
    kicker: "Outcome-Focused",
    headline: "Warehouse Intelligence Across Use Cases",
    intro:
      "ThaiCloud รองรับหลายรูปแบบ operation ตั้งแต่ high-volume eCommerce, 3PL ไปจนถึง enterprise network โดยยึดผลลัพธ์ที่วัดได้เป็นหลัก.",
    ctaPrimary: { label: "See Case Studies", href: "/case-studies" },
    ctaSecondary: { label: "Talk to Solutions Team", href: "/book-demo" },
    sections: [
      {
        title: "Built for high-volume fulfillment",
        features: [
          { title: "eCommerce Fulfillment", description: "ลด error rate และยกระดับ packing speed ในช่วงแคมเปญใหญ่." },
          { title: "3PL Operations", description: "จัดการ SLA หลายลูกค้าพร้อม visibility ที่ชัดเจนระดับ event." },
          { title: "Enterprise Logistics", description: "เชื่อมหลายคลัง หลายระบบ เพื่อ governance และ performance consistency." },
        ],
      },
      {
        title: "Why teams replace legacy video-only systems",
        body: "Traditional packing video systems เช่น Dobybot มุ่งการบันทึก video ขณะที่ ThaiCloud เพิ่ม intelligence layer เพื่อ action ได้ทันที.",
      },
      {
        title: "Why teams augment traditional WMS",
        body: "Traditional WMS เช่น JIBWMS จัดการ process ได้ดี แต่ยังขาด AI workflow optimization, video intelligence และ workforce analytics เชิงลึก.",
      },
    ],
  },
  technology: {
    slug: "/technology",
    title: "Technology",
    kicker: "Architecture",
    headline: "ThaiCloud Technology Architecture",
    intro:
      "ThaiCloud ถูกออกแบบบน modern cloud architecture เพื่อรองรับ high-volume fulfillment, millions of transactions และ AI decisioning แบบ near real-time.",
    ctaPrimary: { label: "Talk to Architecture Team", href: "/book-demo" },
    ctaSecondary: { label: "Explore Developer APIs", href: "/developers" },
    sections: [
      {
        title: "Architecture layers",
        features: [
          { title: "Data Ingestion Layer", description: "Collect data จาก warehouse systems, cameras, barcode scanners และ IoT devices." },
          { title: "Operational Data Platform", description: "Centralized infrastructure สำหรับ processing warehouse events." },
          { title: "AI Optimization Engine", description: "Machine learning models วิเคราะห์ operations และคาดการณ์จุดเสี่ยง." },
          { title: "Decision Intelligence Layer", description: "ส่ง recommendations สำหรับ workflow, workforce และ order prioritization." },
        ],
      },
      {
        title: "Cloud infrastructure",
        bullets: [
          "Horizontal scaling for peak campaign traffic",
          "Event-first processing for operational replay",
          "Secure API and integration-ready architecture",
        ],
      },
    ],
  },
  developers: {
    slug: "/developers",
    title: "Developers",
    kicker: "Developer Platform",
    headline: "APIs for Connected Fulfillment Systems",
    intro:
      "ThaiCloud APIs ช่วยให้ developers เชื่อม ERP, eCommerce, courier และ warehouse hardware เข้ากับ operational intelligence ได้ง่าย.",
    ctaPrimary: { label: "Book Technical Session", href: "/book-demo" },
    ctaSecondary: { label: "Explore Technology", href: "/technology" },
    sections: [
      {
        title: "Integration targets",
        bullets: ["ERP Systems", "eCommerce Platforms", "Courier APIs", "Warehouse Hardware"],
      },
      {
        title: "API domains",
        bullets: ["Order API", "Workflow API", "Operational Data API", "Automation API"],
      },
      {
        title: "Developer experience",
        body: "เริ่มเร็วด้วย predictable payloads, webhook events และตัวอย่าง integration flows สำหรับทีมที่ต้อง deploy แบบ production-first.",
      },
    ],
  },
  customers: {
    slug: "/customers",
    title: "Customers",
    kicker: "Customer Outcomes",
    headline: "Trusted by Fast-Growing Fulfillment Teams",
    intro:
      "ThaiCloud ทำงานร่วมกับ fulfillment leaders ทั่ว Southeast Asia เพื่อยกระดับความแม่นยำ ความเร็ว และการมองเห็นการปฏิบัติการแบบวันต่อวัน.",
    ctaPrimary: { label: "View Case Studies", href: "/case-studies" },
    ctaSecondary: { label: "Book a Customer Briefing", href: "/book-demo" },
    sections: [
      {
        title: "What customers improve first",
        bullets: [
          "Packing accuracy and dispute reduction",
          "Labor productivity and workload balancing",
          "Real-time operational visibility",
          "Faster response to bottlenecks",
        ],
      },
      {
        title: "ThaiCloud operating model",
        features: [
          { title: "Measure", description: "Capture operational events from floor systems and vision inputs." },
          { title: "Analyze", description: "Surface process inefficiencies with AI and event intelligence." },
          { title: "Optimize", description: "Apply recommendations across workflow, staffing, and prioritization." },
        ],
      },
    ],
  },
  caseStudies: {
    slug: "/case-studies",
    title: "Case Studies",
    kicker: "Customer Success",
    headline: "Measured Fulfillment Performance Gains",
    intro:
      "ตัวอย่างผลลัพธ์จากทีมที่ deploy ThaiCloud เพื่อแก้ปัญหา fulfillment complexity และเพิ่ม operational control ในระบบจริง.",
    ctaPrimary: { label: "Book Demo for Your Use Case", href: "/book-demo" },
    ctaSecondary: { label: "See Pricing", href: "/pricing" },
    sections: [
      {
        title: "Results from production operations",
        body: "ทุกกรณีด้านล่างสะท้อนแนวทางเดียวกัน: เชื่อมข้อมูล operation, สร้าง AI visibility, และตัดสินใจเร็วขึ้นบนหน้างาน.",
      },
    ],
  },
  resources: {
    slug: "/resources",
    title: "Resources",
    kicker: "Guides and Material",
    headline: "Operational Intelligence Resources",
    intro:
      "Resource center สำหรับทีม operations, technology และผู้บริหารที่กำลังวางแผนยกระดับ fulfillment ด้วย AI infrastructure.",
    ctaPrimary: { label: "Download Logo Guides", href: "#brand-resources" },
    ctaSecondary: { label: "Book Demo", href: "/book-demo" },
    sections: [
      {
        title: "Recommended resources",
        bullets: [
          "ThaiCloud Platform overview",
          "Warehouse AI implementation framework",
          "Vision event design patterns",
          "Operational KPI baseline checklist",
        ],
      },
      {
        title: "Screenshot capture roadmap",
        bullets: [
          "Dashboard Overview",
          "Packing Verification UI",
          "Order Video Replay",
          "AI Detection Overlay",
          "Workflow Analytics",
          "Operations Dashboard",
        ],
      },
    ],
  },
  pricing: {
    slug: "/pricing",
    title: "Pricing",
    kicker: "Flexible Pricing",
    headline: "Pricing for Fulfillment Operations at Every Stage",
    intro:
      "โมเดลราคาออกแบบให้สอดคล้องกับระดับความซับซ้อนของ operation ตั้งแต่ growing teams ไปจนถึง enterprise-scale networks.",
    ctaPrimary: { label: "Contact Sales", href: "/book-demo" },
    ctaSecondary: { label: "Compare Solutions", href: "/solutions" },
    sections: [
      {
        title: "Choose your operating scale",
        body: "เริ่มจาก baseline ที่เหมาะกับ volume ปัจจุบัน แล้วขยายสู่ automation และ enterprise controls ตาม roadmap ของทีมคุณ.",
      },
    ],
  },
  about: {
    slug: "/about",
    title: "About",
    kicker: "Company",
    headline: "ThaiCloud: AI Fulfillment Infrastructure",
    intro:
      "ThaiCloud สร้าง AI infrastructure สำหรับ modern fulfillment โดยเชื่อม operational data, computer vision และ automation เข้าด้วยกันเพื่อการตัดสินใจที่แม่นยำกว่า.",
    ctaPrimary: { label: "Book a Company Briefing", href: "/book-demo" },
    ctaSecondary: { label: "Explore Platform", href: "/platform" },
    sections: [
      {
        title: "Final positioning",
        body: "ThaiCloud เป็น AI fulfillment infrastructure platform ที่ผลักดัน warehouse intelligence layer เหนือระบบเดิม เพื่อให้ทีมปฏิบัติการส่งมอบได้เร็วและแม่นยำขึ้น.",
      },
      {
        title: "Product suite",
        bullets: ["Packiko Core", "Packiko Vision", "Packiko Automation"],
      },
      {
        title: "AI research at ThaiCloud",
        bullets: [
          "Warehouse workflow optimization",
          "Workforce planning algorithms",
          "Order prioritization models",
          "Operational simulation",
        ],
      },
    ],
  },
  bookDemo: {
    slug: "/book-demo",
    title: "Book Demo",
    kicker: "Live Session",
    headline: "Book a Demo",
    intro:
      "Discover how ThaiCloud can improve warehouse operations with AI-powered workflow automation, event intelligence, and fulfillment optimization.",
    ctaPrimary: { label: "Submit Demo Request", href: "#demo-form" },
    ctaSecondary: { label: "Explore Platform", href: "/platform" },
    sections: [
      {
        title: "Interactive demo agenda",
        bullets: ["Packing process walkthrough", "AI detection review", "Operational dashboard deep dive"],
      },
    ],
  },
};
