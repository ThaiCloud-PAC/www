import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  customerOutcomes,
  faqs,
  footerItems,
  homepageTestimonials,
  marketplaceList,
  navItems,
  pageData,
  platformCapabilities,
  pricingTiers,
  problemCards,
  resourceGuides,
  siteName,
  siteTagline,
  solutionAudiences,
  solutionOverview,
  trustedBy,
  type FeatureCard,
  type PageKey,
} from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-[#f7f4ee]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/packiko/packiko-logo-primary.png"
            alt="Packiko by ThaiCloud logo"
            width={158}
            height={40}
            className="h-9 w-auto"
            priority
          />
          <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 md:inline-block">
            {siteTagline}
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/book-demo"
          className="rounded-full bg-[#0b6bcb] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#095aa9]"
        >
          Book Demo
        </Link>
      </div>
      <div className="border-t border-slate-900/6 lg:hidden">
        <div className="mx-auto flex w-full max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-slate-900/10 bg-white px-3 py-2 text-sm font-medium text-slate-700"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-900/10 bg-[#111827] text-slate-200">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">{siteName}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
            Warehouse operations platform for high-volume online sellers who need tighter inventory control,
            fewer packing mistakes, and video evidence for every order.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {footerItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f7f4ee] text-slate-950">
      <div className="bg-[radial-gradient(circle_at_top_left,_rgba(11,107,203,0.12),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(232,115,49,0.10),_transparent_28%)]">
        <SiteHeader />
        <main>{children}</main>
      </div>
      <SiteFooter />
    </div>
  );
}

function HeroAction({ href, label, primary }: { href: string; label: string; primary?: boolean }) {
  const className = `inline-flex rounded-full px-5 py-3 text-sm font-semibold transition ${
    primary
      ? "bg-[#e87331] text-white hover:bg-[#cf5f20]"
      : "border border-slate-900/12 bg-white text-slate-900 hover:border-slate-900/25"
  }`;

  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

function PageHero({ pageKey }: { pageKey: PageKey }) {
  const data = pageData[pageKey];

  return (
    <section className="px-4 pb-8 pt-14 sm:px-6 lg:px-8 lg:pb-12 lg:pt-18">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0b6bcb]">{data.eyebrow}</p>
          <h1 className="mt-4 whitespace-pre-line text-4xl font-semibold leading-tight text-slate-950 md:text-6xl">
            {data.headline}
          </h1>
          <p className="mt-6 max-w-3xl whitespace-pre-line text-base leading-8 text-slate-700">{data.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {data.primaryCta ? <HeroAction href={data.primaryCta.href} label={data.primaryCta.label} primary /> : null}
            {data.secondaryCta ? <HeroAction href={data.secondaryCta.href} label={data.secondaryCta.label} /> : null}
          </div>
        </div>
        <HeroPanel pageKey={pageKey} />
      </div>
    </section>
  );
}

function HeroPanel({ pageKey }: { pageKey: PageKey }) {
  if (pageKey === "home") {
    return (
      <div className="rounded-[2rem] border border-slate-900/10 bg-[#111827] p-6 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
        <div className="grid gap-4 sm:grid-cols-2">
          <PanelStat label="Inventory Control" value="คุม stock ให้ตรง" />
          <PanelStat label="Packing Verification" value="ลดการแพ็คผิด" />
          <PanelStat label="Video Evidence" value="มีทุก Order" />
          <PanelStat label="Marketplace Disputes" value="ตอบเคสได้เร็วขึ้น" />
        </div>
        <div className="mt-5 rounded-2xl bg-white/8 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8dc0f4]">Highlight</p>
          <p className="mt-2 text-2xl font-semibold">แพ็คของแล้ว ต้องมีหลักฐาน</p>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            เวลาลูกค้าเคลม คุณเปิดวิดีโอหลักฐานตาม Order ได้ทันที เพื่อดูว่าใส่อะไรลงกล่อง ใครเป็นคนแพ็ค และแพ็คเวลาไหน
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-slate-900/10 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0b6bcb]">Built for daily operations</p>
      <div className="mt-5 grid gap-3">
        {solutionOverview.slice(0, 4).map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-900/8 bg-[#f8fafc] p-4">
            <p className="text-sm font-semibold text-slate-950">{item.title}</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PanelStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
      <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{label}</p>
      <p className="mt-2 text-lg font-semibold">{value}</p>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0b6bcb]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">{title}</h2>
      {body ? <p className="mt-4 whitespace-pre-line text-base leading-8 text-slate-700">{body}</p> : null}
    </div>
  );
}

function FeatureGrid({ items }: { items: FeatureCard[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="rounded-[1.6rem] border border-slate-900/8 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-2xl border border-slate-900/8 bg-white px-5 py-4 text-sm leading-7 text-slate-700"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function TrustedStrip() {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl rounded-[1.8rem] border border-slate-900/8 bg-white p-6">
        <p className="text-sm font-medium text-slate-600">
          Trusted by fast-growing online sellers and fulfillment teams
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          ร้านค้าออนไลน์และคลัง fulfillment ใช้ Packiko เพื่อคุม Stock และลดปัญหาการแพ็คผิด
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustedBy.map((item) => (
            <div key={item} className="rounded-full bg-[#f8fafc] px-4 py-3 text-sm font-medium text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeProblemSection() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <SectionIntro
          eyebrow="Problems"
          title="ร้านออนไลน์ที่ขายดี มักเจอปัญหาเดียวกัน"
          body="พอออเดอร์เริ่มเยอะ

Stock เริ่มไม่ตรง
ทีมแพ็คเริ่มหยิบผิด
ลูกค้าเริ่มเคลมว่าได้ของไม่ครบ

บางครั้งต้องคืนเงิน
ทั้งที่ร้านแพ็คถูก

Packiko ช่วยให้ร้านค้าคุมคลังได้ง่ายขึ้น
และมีหลักฐานทุก Order"
        />
        <FeatureGrid items={problemCards} />
      </div>
    </section>
  );
}

function HomeSolutionOverview() {
  return (
    <section id="solution" className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <SectionIntro
          eyebrow="Solution"
          title="Packiko ช่วยให้คุณคุมคลังได้จริง"
          body="Packiko รวมเครื่องมือที่ทีมคลังต้องใช้จริงไว้ในที่เดียว ทั้งคุม stock ลดการแพ็คผิด เก็บวิดีโอหลักฐาน และดูภาพรวมงานแพ็คได้จาก dashboard"
        />
        <FeatureGrid items={solutionOverview} />
      </div>
    </section>
  );
}

function HomeVideoEvidenceSection() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <article className="rounded-[1.8rem] border border-slate-900/8 bg-white p-7 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0b6bcb]">Video Evidence</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">แพ็คของแล้ว ต้องมีหลักฐาน</h2>
          <p className="mt-4 whitespace-pre-line text-base leading-8 text-slate-700">
            เวลาลูกค้าเคลมว่า

            ได้ของไม่ครบ
            ไม่ได้ของ
            ได้ของผิด

            คุณสามารถเปิด

            วิดีโอหลักฐานระหว่างแพ็ค

            ดูได้ทันทีว่า

            ใส่อะไรลงกล่อง
            ใครเป็นคนแพ็ค
            แพ็คเวลาไหน
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <PanelStat label="ตรวจสอบได้" value="ใส่อะไรลงกล่อง" />
            <PanelStat label="ตรวจสอบได้" value="ใครเป็นคนแพ็ค" />
            <PanelStat label="ตรวจสอบได้" value="แพ็คเวลาไหน" />
          </div>
        </article>
      </div>
    </section>
  );
}

function HomeFeatureDetailSection({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl rounded-[1.8rem] border border-slate-900/8 bg-white p-7 shadow-sm">
        <SectionIntro eyebrow={eyebrow} title={title} body={body} />
      </div>
    </section>
  );
}

function HomeResults() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-5 rounded-[2rem] bg-[#0b6bcb] p-8 text-white lg:grid-cols-[0.95fr_1.05fr]">
        <SectionIntro
          eyebrow="Stats"
          title="ผลลัพธ์ที่ร้านค้าเห็นจริง"
          body="Packiko ช่วยให้ทีมแพ็คทำงานนิ่งขึ้น คุมความผิดพลาดได้ดีขึ้น และมีหลักฐานพร้อมใช้ทุก Order"
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {customerOutcomes.map((item) => (
            <div key={item} className="rounded-2xl bg-white/10 px-5 py-4 text-sm font-medium">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeTestimonialsSection() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <SectionIntro eyebrow="Testimonials" title="เสียงจากร้านค้าที่ใช้ Packiko" />
        <div className="grid gap-5 md:grid-cols-2">
          {homepageTestimonials.map((item) => (
            <article
              key={`${item.author}-${item.role}`}
              className="rounded-[1.6rem] border border-slate-900/8 bg-white p-6 shadow-sm"
            >
              <p className="text-base leading-8 text-slate-700">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-slate-950">{item.author}</p>
              <p className="text-sm text-slate-600">{item.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePricingSection() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <SectionIntro
          eyebrow="Pricing"
          title="ราคาที่ร้านค้าออนไลน์ใช้ได้จริง"
          body="เราออกแบบ Packiko ให้ร้านค้าออนไลน์ ใช้ระบบจัดการคลังได้โดยไม่ต้องลงทุนแพงแบบ enterprise"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={`rounded-[1.8rem] border p-7 shadow-sm ${
                tier.featured
                  ? "border-[#0b6bcb]/30 bg-[#0b6bcb] text-white"
                  : "border-slate-900/8 bg-white text-slate-950"
              }`}
            >
              <p
                className={`text-sm font-semibold uppercase tracking-[0.16em] ${
                  tier.featured ? "text-white/70" : "text-[#0b6bcb]"
                }`}
              >
                {tier.name}
              </p>
              <p className={`mt-4 text-sm leading-7 ${tier.featured ? "text-white/85" : "text-slate-700"}`}>
                {tier.description}
              </p>
              <ul className="mt-6 grid gap-3">
                {tier.highlights.map((item) => (
                  <li
                    key={item}
                    className={`rounded-2xl px-4 py-3 text-sm ${
                      tier.featured ? "bg-white/10" : "bg-[#f8fafc]"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/book-demo"
                className={`mt-7 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition ${
                  tier.featured
                    ? "bg-white text-[#0b6bcb] hover:bg-slate-100"
                    : "bg-[#111827] text-white hover:bg-slate-800"
                }`}
              >
                {tier.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeFaqSection() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-[1.8rem] border border-slate-900/8 bg-white p-7 shadow-sm">
        <SectionIntro eyebrow="FAQ" title="คำถามที่ทีมมักถามก่อนเริ่มใช้" />
        <div className="grid gap-4">
          {faqs.map((item) => (
            <article key={item.question} className="rounded-2xl bg-[#f8fafc] px-5 py-5">
              <h3 className="text-lg font-semibold text-slate-950">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 rounded-[2rem] border border-slate-900/8 bg-white p-8 shadow-sm">
        <SectionIntro
          title="ถ้าคลังเริ่มคุมยาก ถึงเวลาต้องมี Packiko"
          body="ลด Stock ไม่ตรง
ลดการแพ็คผิด
มีหลักฐานทุก Order"
        />
        <HeroAction href="/book-demo" label="Book Demo" primary />
      </div>
    </section>
  );
}

function GenericPageSection({
  title,
  body,
  cards,
  bullets,
}: {
  title: string;
  body?: string;
  cards?: FeatureCard[];
  bullets?: string[];
}) {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 rounded-[1.8rem] border border-slate-900/8 bg-white p-7 shadow-sm">
        <SectionIntro title={title} body={body} />
        {cards ? <FeatureGrid items={cards} /> : null}
        {bullets ? <BulletList items={bullets} /> : null}
      </div>
    </section>
  );
}

function PlatformPage() {
  return (
    <>
      <PageHero pageKey="platform" />
      <GenericPageSection
        title="Platform Overview"
        body="รวมระบบสำคัญของคลังไว้ในที่เดียว ทั้ง Inventory Control, Packing Verification, วิดีโอหลักฐานระหว่างแพ็ค และ Operations Dashboard"
        cards={platformCapabilities}
      />
      <GenericPageSection
        title="Designed for warehouse teams"
        bullets={[
          "ควบคุม stock แบบ real-time",
          "ลดการแพ็คผิดด้วย workflow ที่ตรวจสอบได้",
          "ค้นหาหลักฐานของแต่ละ Order ได้ทันที",
          "เห็นภาพรวมการทำงานของคลังในหน้าเดียว",
          "เชื่อมต่อกับระบบ eCommerce และ ERP",
        ]}
      />
      <FinalCta />
    </>
  );
}

function SolutionsPage() {
  return (
    <>
      <PageHero pageKey="solutions" />
      <GenericPageSection title="Solutions" cards={solutionAudiences} />
      <GenericPageSection
        title="What ThaiCloud helps teams do"
        bullets={[
          "คุม Stock ให้ตรง",
          "ลดการแพ็คผิด",
          "แก้ dispute กับลูกค้าได้เร็วขึ้น",
          "ทำให้ workflow การแพ็คชัดเจนและตรวจสอบได้",
        ]}
      />
      <FinalCta />
    </>
  );
}

function CustomersPage() {
  return (
    <>
      <PageHero pageKey="customers" />
      <GenericPageSection
        title="Outcomes"
        body="ลูกค้าหลายรายใช้ ThaiCloud เพื่อลดการแพ็คผิด ลดเวลาหาหลักฐาน และคุมคลังได้ดีขึ้น"
        bullets={customerOutcomes}
      />
      <GenericPageSection
        title="Why operations teams stay with ThaiCloud"
        bullets={[
          "ตอบเคส dispute ได้เร็วขึ้น",
          "ตรวจสอบงานแพ็คย้อนหลังได้จาก Order",
          "คุม workflow ได้ชัดขึ้นในช่วงออเดอร์พุ่ง",
          "ลดงานตามหาหลักฐานของทีมหลังบ้าน",
        ]}
      />
      <FinalCta />
    </>
  );
}

function ResourcesPage() {
  return (
    <>
      <PageHero pageKey="resources" />
      <GenericPageSection title="Guides" cards={resourceGuides} />
      <FinalCta />
    </>
  );
}

function PricingPage() {
  return (
    <>
      <PageHero pageKey="pricing" />
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={`rounded-[1.8rem] border p-7 shadow-sm ${
                tier.featured
                  ? "border-[#0b6bcb]/30 bg-[#0b6bcb] text-white"
                  : "border-slate-900/8 bg-white text-slate-950"
              }`}
            >
              <p className={`text-sm font-semibold uppercase tracking-[0.16em] ${tier.featured ? "text-white/70" : "text-[#0b6bcb]"}`}>
                {tier.name}
              </p>
              <p className={`mt-4 text-sm leading-7 ${tier.featured ? "text-white/85" : "text-slate-700"}`}>{tier.description}</p>
              <ul className="mt-6 grid gap-3">
                {tier.highlights.map((item) => (
                  <li key={item} className={`rounded-2xl px-4 py-3 text-sm ${tier.featured ? "bg-white/10" : "bg-[#f8fafc]"}`}>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/book-demo"
                className={`mt-7 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition ${
                  tier.featured
                    ? "bg-white text-[#0b6bcb] hover:bg-slate-100"
                    : "bg-[#111827] text-white hover:bg-slate-800"
                }`}
              >
                {tier.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero pageKey="about" />
      <GenericPageSection
        title="What ThaiCloud stands for"
        body="ThaiCloud ถูกสร้างมาเพื่อช่วยผู้ขายออนไลน์และทีม fulfillment แก้ปัญหาคลังที่เกิดขึ้นจริงทุกวัน ไม่ว่าจะเป็น stock ไม่ตรง การแพ็คผิด หรือการหาหลักฐานเมื่อเกิดเคสเคลม"
        bullets={[
          "ควบคุมงานคลังให้แม่นขึ้น",
          "ทำให้การทำงานของทีมตรวจสอบได้ง่ายขึ้น",
          "ช่วยตอบปัญหากับ marketplace ได้เร็วขึ้น",
        ]}
      />
      <FinalCta />
    </>
  );
}

function CaseStudiesPage() {
  return (
    <>
      <PageHero pageKey="caseStudies" />
      <GenericPageSection
        title="ผลลัพธ์ที่ลูกค้ามองหา"
        body="ร้านค้าและทีม fulfillment มักเริ่มต้นจากปัญหาเดียวกัน แล้วใช้ ThaiCloud เพื่อทำให้การทำงานหลังบ้านมีหลักฐานและควบคุมได้มากขึ้น"
        cards={[
          {
            title: "ลดการแพ็คผิด",
            description: "ทำให้ทีมแพ็คมี workflow ที่ชัดเจนและลดค่าเสียหายจากการส่งผิดหรือแพ็คไม่ครบ",
          },
          {
            title: "ลดเวลาหาหลักฐาน",
            description: "ค้นหาวิดีโอของ Order ได้เร็วขึ้นเมื่อเกิด dispute หรือเคสลูกค้าเคลม",
          },
          {
            title: "คุมคลังได้ดีขึ้น",
            description: "เห็นสถานะ stock และงานที่กำลังเกิดขึ้นในคลังได้ง่ายขึ้น",
          },
        ]}
      />
      <FinalCta />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero pageKey="contact" />
      <GenericPageSection
        title="How to reach us"
        bullets={[
          "Book a Demo เพื่อคุยกับทีมเรื่อง workflow, stock control และเคส dispute ของคุณ",
          "ใช้หน้า Demo Request เพื่อส่งรายละเอียดเบื้องต้นของ operation ปัจจุบัน",
          "ทีมจะใช้ข้อมูลนั้นเพื่อเตรียมเดโมให้ตรงกับปัญหาที่คุณกำลังเจอ",
        ]}
      />
      <FinalCta />
    </>
  );
}

function PrivacyPage() {
  return (
    <>
      <PageHero pageKey="privacy" />
      <GenericPageSection
        title="Privacy Principles"
        bullets={[
          "เก็บข้อมูลเท่าที่จำเป็นต่อการให้บริการ",
          "ใช้ข้อมูลเพื่อสนับสนุนการทำงานของระบบและการให้บริการลูกค้า",
          "ปกป้องข้อมูลการใช้งานและข้อมูลการปฏิบัติงานในคลังด้วยมาตรการที่เหมาะสม",
          "จำกัดการเข้าถึงข้อมูลตามบทบาทของผู้ใช้งานและทีมที่เกี่ยวข้อง",
        ]}
      />
    </>
  );
}

function TermsPage() {
  return (
    <>
      <PageHero pageKey="terms" />
      <GenericPageSection
        title="Terms of Use"
        bullets={[
          "การใช้งานแพลตฟอร์มต้องเป็นไปตามขอบเขตบริการที่ตกลงกัน",
          "ผู้ใช้งานต้องดูแลบัญชีและสิทธิ์เข้าถึงของทีมงานภายในองค์กร",
          "ข้อมูลและเนื้อหาที่บันทึกในระบบยังคงเป็นความรับผิดชอบของผู้ใช้งานตามข้อตกลงที่เกี่ยวข้อง",
          "ThaiCloud อาจปรับปรุงบริการเพื่อเพิ่มประสิทธิภาพ ความปลอดภัย และความเสถียรของระบบ",
        ]}
      />
    </>
  );
}

function DemoForm() {
  return (
    <section id="demo-form" className="px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-[2rem] border border-slate-900/8 bg-white p-7 shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0b6bcb]">Demo includes</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">ดูระบบที่ช่วยให้คลังคุมงานได้ชัดขึ้น</h2>
          <ul className="mt-6 grid gap-3">
            {["Inventory Control", "Packing Workflow", "วิดีโอหลักฐานระหว่างแพ็ค", "Dashboard"].map((item) => (
              <li key={item} className="rounded-2xl bg-[#f8fafc] px-4 py-3 text-sm text-slate-700">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl bg-[#111827] p-5 text-sm leading-7 text-slate-300">
            ThaiCloud ช่วยร้านที่ขายผ่าน {marketplaceList.join(" • ")} จัดการเคส dispute ได้เร็วขึ้นด้วยข้อมูลและวิดีโอหลักฐานระหว่างแพ็ค
          </div>
        </div>
        <form className="grid gap-3">
          <FormField label="Name" name="name" type="text" />
          <FormField label="Company" name="company" type="text" />
          <FormField label="Email" name="email" type="email" />
          <FormField label="Monthly Orders" name="monthly-orders" type="text" />
          <label className="text-sm font-medium text-slate-800" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="rounded-2xl border border-slate-900/12 px-4 py-3 text-sm text-slate-900 outline-none ring-[#0b6bcb] focus:ring-2"
          />
          <button
            type="submit"
            className="mt-2 rounded-full bg-[#e87331] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#cf5f20]"
          >
            Submit Demo Request
          </button>
        </form>
      </div>
    </section>
  );
}

function FormField({ label, name, type }: { label: string; name: string; type: string }) {
  return (
    <>
      <label className="text-sm font-medium text-slate-800" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="rounded-2xl border border-slate-900/12 px-4 py-3 text-sm text-slate-900 outline-none ring-[#0b6bcb] focus:ring-2"
      />
    </>
  );
}

function BookDemoPage() {
  return (
    <>
      <PageHero pageKey="bookDemo" />
      <DemoForm />
    </>
  );
}

function HomePage() {
  return (
    <>
      <PageHero pageKey="home" />
      <TrustedStrip />
      <HomeProblemSection />
      <HomeSolutionOverview />
      <HomeVideoEvidenceSection />
      <HomeFeatureDetailSection
        eyebrow="Inventory"
        title="คุม Stock ให้ตรงมากขึ้น"
        body="เมื่อข้อมูลในระบบกับของจริงไม่ตรง ปัญหาจะลามไปทั้งทีมขายและทีมแพ็ค

Packiko ช่วยให้คุณเห็นสถานะคลังได้ชัดขึ้น
และลดปัญหา Oversell"
      />
      <HomeFeatureDetailSection
        eyebrow="Packing Verification"
        title="ลดการแพ็คผิด"
        body="ช่วยให้ทีมแพ็คหยิบสินค้าได้ถูก
และตรวจสอบย้อนหลังได้ง่าย

ลดปัญหา

หยิบผิด
ส่งผิด
แพ็คไม่ครบ"
      />
      <HomeResults />
      <HomeTestimonialsSection />
      <HomePricingSection />
      <HomeFaqSection />
      <FinalCta />
    </>
  );
}

export function StandardPage({ pageKey }: { pageKey: PageKey }) {
  switch (pageKey) {
    case "home":
      return <HomePage />;
    case "platform":
    case "technology":
    case "visionAi":
      return <PlatformPage />;
    case "solutions":
      return <SolutionsPage />;
    case "customers":
      return <CustomersPage />;
    case "resources":
    case "developers":
      return <ResourcesPage />;
    case "pricing":
      return <PricingPage />;
    case "about":
      return <AboutPage />;
    case "caseStudies":
      return <CaseStudiesPage />;
    case "contact":
      return <ContactPage />;
    case "privacy":
      return <PrivacyPage />;
    case "terms":
      return <TermsPage />;
    case "bookDemo":
      return <BookDemoPage />;
    default:
      return <HomePage />;
  }
}

export function buildMetadata(pageKey: PageKey): Metadata {
  const data = pageData[pageKey];
  const title = `${data.title} | ${siteName}`;

  return {
    title,
    description: data.description,
    keywords: [
      "ThaiCloud",
      "warehouse operations platform",
      "inventory control",
      "packing verification",
      "video evidence for every order",
      data.title,
    ],
    openGraph: {
      title,
      description: data.description,
      url: `https://thaicloud.com${data.slug}`,
      siteName,
      images: [{ url: "/brand/thaicloud/thai-logo-primary.png", width: 1200, height: 630, alt: "ThaiCloud" }],
      type: "website",
    },
    alternates: {
      canonical: data.slug,
    },
  };
}
