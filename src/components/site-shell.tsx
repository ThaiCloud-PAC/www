import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  caseStudies,
  comparisonVideoRows,
  comparisonWmsRows,
  mainProducts,
  navItems,
  pageData,
  platformStats,
  pricingTiers,
  siteName,
  siteTagline,
  trustedBy,
  type ComparisonRow,
  type PageData,
} from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#035897]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/thaicloud/thai-logo-primary.png"
            alt="ThaiCloud logo"
            width={148}
            height={40}
            className="h-9 w-auto"
            priority
          />
          <span className="hidden text-xs font-semibold tracking-[0.16em] text-white/75 md:inline-block">
            {siteTagline}
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-xs font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/book-demo"
          className="rounded-full bg-[#f37521] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#f58a1f]"
        >
          Book Demo
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#0671b8]/20 bg-[#035897] py-12 text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-semibold">{siteName}</p>
          <p className="mt-2 text-sm text-white/75">{siteTagline}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#60c7d3]">Products</p>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            {mainProducts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#60c7d3]">Brand Assets</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <BrandLink href="/brand/thaicloud/ThaiCloud Logo Guide.pdf" label="ThaiCloud Guide" />
            <BrandLink href="/brand/packiko/Packiko Logo Guide.pdf" label="Packiko Guide" />
            <BrandLink href="/brand/lisa/LISA Logo Guide.pdf" label="LISA Guide" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function BrandLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      className="rounded-full border border-white/25 px-3 py-1.5 text-xs text-white/85 transition hover:border-white/50 hover:text-white"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#035897]">
      <div className="bg-[radial-gradient(circle_at_top_left,_#60c7d326_0,_#ffffff_45%)]">
        <SiteHeader />
        <main>{children}</main>
      </div>
      <SiteFooter />
    </div>
  );
}

export function Hero({ data }: { data: PageData }) {
  return (
    <section className="relative overflow-hidden border-b border-[#0671b8]/15 bg-gradient-to-br from-[#035897] via-[#0671b8] to-[#08aa87] text-white">
      <div className="absolute -left-14 top-8 h-44 w-44 rounded-full bg-[#fab217]/35 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#f37521]/25 blur-3xl" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-12 lg:px-8 lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#60c7d3]">{data.kicker}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{data.headline}</h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/90">{data.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {data.ctaPrimary ? <Action href={data.ctaPrimary.href} primary label={data.ctaPrimary.label} /> : null}
            {data.ctaSecondary ? <Action href={data.ctaSecondary.href} label={data.ctaSecondary.label} /> : null}
          </div>
        </div>
        <ProductMockup />
      </div>
    </section>
  );
}

function Action({ href, label, primary }: { href: string; label: string; primary?: boolean }) {
  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
          primary
            ? "bg-[#f37521] text-white hover:bg-[#f58a1f]"
            : "border border-white/35 text-white hover:border-white/60 hover:bg-white/10"
        }`}
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
        primary
          ? "bg-[#f37521] text-white hover:bg-[#f58a1f]"
          : "border border-white/35 text-white hover:border-white/60 hover:bg-white/10"
      }`}
    >
      {label}
    </Link>
  );
}

function ProductMockup() {
  return (
    <div className="rounded-2xl border border-white/25 bg-white/10 p-4 shadow-2xl backdrop-blur">
      <div className="rounded-xl bg-white/95 p-4 text-[#035897]">
        <div className="flex items-center justify-between border-b border-[#035897]/10 pb-3">
          <p className="text-sm font-semibold">Operations Intelligence Console</p>
          <p className="rounded-full bg-[#08aa87]/12 px-2.5 py-1 text-[11px] font-semibold text-[#08aa87]">Live</p>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <MockTile label="Packing Accuracy" value="98.7%" accent="bg-[#08aa87]" />
          <MockTile label="Orders / Hour" value="1,240" accent="bg-[#0671b8]" />
          <MockTile label="AI Alerts" value="14" accent="bg-[#fab217]" />
          <MockTile label="Queue Delay" value="-21%" accent="bg-[#f37521]" />
        </div>
      </div>
    </div>
  );
}

function MockTile({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-lg border border-[#035897]/10 p-3">
      <p className="text-[11px] uppercase tracking-[0.12em] text-[#035897]/60">{label}</p>
      <div className="mt-1 flex items-center gap-2">
        <div className={`h-2.5 w-2.5 rounded-full ${accent}`} />
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
}

export function MetricStrip() {
  return (
    <section className="border-b border-[#0671b8]/15 bg-[#ffffff]">
      <div className="mx-auto grid w-full max-w-7xl gap-3 px-4 py-6 sm:px-6 md:grid-cols-3 lg:px-8">
        {platformStats.map((stat) => (
          <div key={stat} className="rounded-xl border border-[#0671b8]/20 bg-[#f7fbfe] px-4 py-4 text-sm font-semibold text-[#035897]">
            {stat}
          </div>
        ))}
      </div>
    </section>
  );
}

export function TrustedStrip() {
  return (
    <section className="border-b border-[#0671b8]/15 bg-white py-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-[#035897]/70">Trusted by fast-growing brands and fulfillment teams across Southeast Asia</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustedBy.map((item) => (
            <div key={item} className="rounded-full border border-[#0671b8]/20 bg-[#f7fbfe] px-4 py-2 text-sm text-[#035897]">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContentSections({ data }: { data: PageData }) {
  return (
    <section className="mx-auto w-full max-w-7xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
      {data.sections.map((section) => (
        <article key={section.title} className="rounded-2xl border border-[#0671b8]/15 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#035897]">{section.title}</h2>
          {section.body ? <p className="mt-3 text-base leading-relaxed text-[#035897]/80">{section.body}</p> : null}
          {section.features?.length ? <FeatureGrid features={section.features} /> : null}
          {section.bullets?.length ? <BulletList items={section.bullets} /> : null}
        </article>
      ))}
    </section>
  );
}

function FeatureGrid({ features }: { features: { title: string; description: string }[] }) {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {features.map((item) => (
        <div key={item.title} className="rounded-xl border border-[#0671b8]/15 bg-[#f7fbfe] p-4">
          <h3 className="font-semibold text-[#035897]">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#035897]/75">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm text-[#035897]/85">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-[7px] h-2 w-2 rounded-full bg-[#08aa87]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ComparisonBlock({ title, subtitle, rows }: { title: string; subtitle: string; rows: ComparisonRow[] }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl border border-[#0671b8]/15 bg-white shadow-sm">
        <div className="border-b border-[#0671b8]/15 bg-[#f7fbfe] px-6 py-5">
          <h2 className="text-2xl font-semibold text-[#035897]">{title}</h2>
          <p className="mt-2 text-sm text-[#035897]/75">{subtitle}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead>
              <tr className="border-b border-[#0671b8]/15 text-xs uppercase tracking-[0.12em] text-[#035897]/70">
                <th className="px-6 py-3">Feature</th>
                <th className="px-6 py-3">Traditional Systems</th>
                <th className="px-6 py-3">ThaiCloud</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-b border-[#0671b8]/10">
                  <td className="px-6 py-4 font-medium text-[#035897]">{row.feature}</td>
                  <td className="px-6 py-4 text-[#035897]/70">{row.legacy}</td>
                  <td className="px-6 py-4 font-semibold text-[#08aa87]">{row.thaiCloud}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function PricingGrid() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <div className="grid gap-5 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <article
            key={tier.name}
            className={`rounded-2xl border p-6 shadow-sm ${
              tier.featured
                ? "border-[#08aa87] bg-gradient-to-b from-[#08aa87]/8 to-white"
                : "border-[#0671b8]/15 bg-white"
            }`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0671b8]">{tier.name}</p>
            <h3 className="mt-2 text-xl font-semibold text-[#035897]">{tier.audience}</h3>
            <p className="mt-3 text-sm text-[#035897]/75">{tier.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-[#035897]/80">
              {tier.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[7px] h-2 w-2 rounded-full bg-[#fab217]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/book-demo"
              className="mt-6 inline-flex rounded-full bg-[#035897] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#0671b8]"
            >
              {tier.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CaseStudyGrid() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <div className="grid gap-5 lg:grid-cols-3">
        {caseStudies.map((item) => (
          <article key={item.name} className="rounded-2xl border border-[#0671b8]/15 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0671b8]">{item.segment}</p>
            <h3 className="mt-2 text-xl font-semibold text-[#035897]">{item.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#035897]/75">{item.summary}</p>
            <ul className="mt-4 space-y-2 text-sm font-medium text-[#08aa87]">
              {item.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function DemoForm() {
  return (
    <section id="demo-form" className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-2xl border border-[#0671b8]/15 bg-white p-7 shadow-sm lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="text-2xl font-semibold text-[#035897]">Book a Demo</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#035897]/75">
            Discover how ThaiCloud can improve warehouse operations with a session covering packing process, AI detection, and operational dashboards.
          </p>
          <div className="mt-5 space-y-3">
            <Image src="/brand/packiko/packiko-logo-primary.png" alt="Packiko logo" width={130} height={34} className="h-8 w-auto" />
            <Image src="/brand/lisa/lisa-logo-primary.png" alt="LISA logo" width={115} height={34} className="h-8 w-auto" />
          </div>
        </div>
        <form className="grid gap-3">
          <FormField label="Name" name="name" type="text" />
          <FormField label="Company" name="company" type="text" />
          <FormField label="Email" name="email" type="email" />
          <FormField label="Monthly Orders" name="monthly-orders" type="text" />
          <label className="text-sm font-medium text-[#035897]" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="rounded-xl border border-[#0671b8]/25 px-4 py-3 text-sm text-[#035897] outline-none ring-[#08aa87] focus:ring-2"
            placeholder="Share your current fulfillment challenges and target outcomes."
          />
          <button
            type="submit"
            className="mt-2 rounded-full bg-[#f37521] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#f58a1f]"
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
      <label className="text-sm font-medium text-[#035897]" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="rounded-xl border border-[#0671b8]/25 px-4 py-3 text-sm text-[#035897] outline-none ring-[#08aa87] focus:ring-2"
      />
    </>
  );
}

export function BrandResources() {
  return (
    <section id="brand-resources" className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-[#0671b8]/15 bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-semibold text-[#035897]">Brand Resource Downloads</h2>
        <p className="mt-3 text-sm text-[#035897]/75">
          Official vector logos and guidebooks used in this website build.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <ResourceCard
            title="ThaiCloud"
            logo="/brand/thaicloud/thai-logo-primary.png"
            aiFile="/brand/thaicloud/ThaiCloud LOGO.ai"
            guide="/brand/thaicloud/ThaiCloud Logo Guide.pdf"
          />
          <ResourceCard
            title="Packiko"
            logo="/brand/packiko/packiko-logo-primary.png"
            aiFile="/brand/packiko/Packiko LOGO.ai"
            guide="/brand/packiko/Packiko Logo Guide.pdf"
          />
          <ResourceCard
            title="LISA"
            logo="/brand/lisa/lisa-logo-primary.png"
            aiFile="/brand/lisa/LISA LOGO.ai"
            guide="/brand/lisa/LISA Logo Guide.pdf"
          />
        </div>
      </div>
    </section>
  );
}

function ResourceCard({ title, logo, aiFile, guide }: { title: string; logo: string; aiFile: string; guide: string }) {
  return (
    <article className="rounded-xl border border-[#0671b8]/15 bg-[#f7fbfe] p-4">
      <Image src={logo} alt={`${title} logo`} width={120} height={34} className="h-8 w-auto" />
      <p className="mt-3 text-sm font-semibold text-[#035897]">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <a className="rounded-full border border-[#0671b8]/25 px-3 py-1.5 text-[#035897]" href={aiFile} target="_blank" rel="noreferrer">
          Vector (.ai)
        </a>
        <a className="rounded-full border border-[#0671b8]/25 px-3 py-1.5 text-[#035897]" href={guide} target="_blank" rel="noreferrer">
          Guide (PDF)
        </a>
      </div>
    </article>
  );
}

export function StandardPage({ pageKey }: { pageKey: keyof typeof pageData }) {
  const data = pageData[pageKey];

  return (
    <>
      <Hero data={data} />
      {pageKey === "home" ? <TrustedStrip /> : null}
      {pageKey === "home" ? <MetricStrip /> : null}
      <ContentSections data={data} />
      {pageKey === "solutions" ? (
        <>
          <ComparisonBlock
            title="ThaiCloud vs Packing Video Systems"
            subtitle="Beyond video recording with AI operational intelligence"
            rows={comparisonVideoRows}
          />
          <ComparisonBlock
            title="ThaiCloud vs Traditional WMS"
            subtitle="Warehouse management versus warehouse intelligence"
            rows={comparisonWmsRows}
          />
          <div className="pb-10" />
        </>
      ) : null}
      {pageKey === "pricing" ? <PricingGrid /> : null}
      {pageKey === "caseStudies" ? <CaseStudyGrid /> : null}
      {pageKey === "resources" ? <BrandResources /> : null}
      {pageKey === "bookDemo" ? <DemoForm /> : null}
    </>
  );
}

export function buildMetadata(pageKey: keyof typeof pageData): Metadata {
  const data = pageData[pageKey];
  const title = `${data.title} | ${siteName}`;

  return {
    title,
    description: data.intro,
    keywords: [
      "AI warehouse platform",
      "Fulfillment optimization",
      "ThaiCloud",
      data.title,
      "Packiko",
      "Warehouse automation software",
    ],
    openGraph: {
      title,
      description: data.intro,
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
