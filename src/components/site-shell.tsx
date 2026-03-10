/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { Metadata } from "next";
import {
  audienceStrip,
  faqs,
  footerItems,
  navItems,
  pricingPlans,
  problemCards,
  simplePages,
  siteName,
  solutionCards,
  stats,
  useCases,
  videoSearchKeys,
} from "@/lib/site";

function SectionHeading({
  eyebrow,
  title,
  body,
  centered,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  centered?: boolean;
}) {
  return (
    <div className={`main-title wow fadeIn ${centered ? "text-center" : ""}`} data-wow-delay="300ms">
      {eyebrow ? <h5>{eyebrow}</h5> : null}
      <h2 className="mb-0" dangerouslySetInnerHTML={{ __html: title }} />
      {body ? <p className="mt-4 mb-0">{body}</p> : null}
    </div>
  );
}

function BrandLockup({ light }: { light?: boolean }) {
  return (
    <span className={`packiko-logo ${light ? "light" : ""}`}>
      <span className="packiko-wordmark">Packiko</span>
      <span className="packiko-submark">by ThaiCloud</span>
    </span>
  );
}

function FeatureCard({ title, description, accent }: { title: string; description: string; accent: string }) {
  return (
    <div className="col-lg-3 col-md-6 col-12 mb-4">
      <div className={`about-box packiko-card h-100 mx-auto ${accent}`}>
        <h5 className="font-weight-600 color-white mt-0 mb-15px">{title}</h5>
        <p className="font-weight-light color-white mb-0">{description}</p>
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="cursor-light">
      <nav className="navbar navbar-top-default navbar-expand-lg nav-three-circles black bottom-nav nav-box-shadow no-animation">
        <div className="container-fluid">
          <Link className="logo ml-lg-1" href="/">
            <BrandLockup />
          </Link>
          <div className="collapse navbar-collapse d-none d-lg-block">
            <ul className="nav navbar-nav mx-auto">
              {navItems.map((item) => (
                <li className="nav-item" key={item.href}>
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/book-demo" className="btn-setting btn-hvr-up btn-blue text-white mr-lg-3 d-none d-lg-block">
            Book Demo
          </Link>
          <a className="menu_bars d-inline-block menu-bars-setting animated-wrap sidemenu_toggle d-block d-lg-none">
            <div className="menu-lines animated-element">
              <span />
              <span />
              <span />
            </div>
          </a>
        </div>
      </nav>
      <a className="menu_bars menu-bars-setting animated-wrap sidemenu_toggle d-lg-inline-block d-none">
        <div className="menu-lines animated-element">
          <span />
          <span />
          <span />
        </div>
      </a>
      <div className="side-menu center">
        <div className="quarter-circle">
          <div className="menu_bars2 active" id="btn_sideNavClose">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="inner-wrapper justify-content-center">
          <div className="col-md-12 text-center">
            <Link href="/" className="logo-full mb-4 d-inline-flex">
              <BrandLockup light />
            </Link>
          </div>
          <nav className="side-nav m-0">
            <ul className="navbar-nav flex-lg-row">
              {navItems.map((item) => (
                <li className="nav-item" key={item.href}>
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="nav-item">
                <Link href="/book-demo" className="nav-link">
                  Book Demo
                </Link>
              </li>
            </ul>
          </nav>
          <div className="side-footer text-white w-100">
            <p className="text-white mb-0">Warehouse platform for high-volume online sellers</p>
          </div>
        </div>
      </div>
      <a id="close_side_menu" href="javascript:void(0);" />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="p-half bg-white" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 text-center text-lg-left mb-4 mb-lg-0">
            <BrandLockup />
            <p className="copyrights mt-4 mb-0 footer-description">
              Warehouse operations platform for high-volume online sellers who need tighter inventory control,
              fewer packing mistakes, and video evidence for every order.
            </p>
          </div>
          <div className="col-lg-7 col-md-12">
            <ul className="footer-links">
              {footerItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function HomePageContent() {
  return (
    <>
      <section id="home" className="packiko-hero cursor-light">
        <div className="hero-shape hero-shape-one" />
        <div className="hero-shape hero-shape-two" />
        <div className="container position-relative">
          <div className="row min-vh-100 align-items-center">
            <div className="col-lg-6 col-md-12 wow fadeInLeft" data-wow-delay="300ms">
              <p className="hero-eyebrow">Packiko by ThaiCloud</p>
              <h1>ขายวันละหลายร้อยออเดอร์<br />แต่คลังยังคุมอยู่</h1>
              <p className="hero-copy">
                Packiko ช่วยร้านออนไลน์คุม Stock ลดแพ็คผิด และมีวิดีโอหลักฐานทุก Order
                <br />
                <br />
                เวลาลูกค้าเคลม เปิดดูตาม Order ได้ทันที
                <br />
                <br />
                ใช้ได้กับ Shopee • Lazada • TikTok Shop
              </p>
              <div className="hero-actions">
                <Link href="/book-demo" className="btn-setting color-black btn-hvr-up btn-blue btn-hvr-yellow text-white">
                  Book Demo
                </Link>
                <a href="#video-evidence" className="btn-setting color-black btn-hvr-up btn-transparent-black">
                  ดูระบบทำงาน
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 wow fadeInRight" data-wow-delay="400ms">
              <div className="packiko-hero-panel">
                <div className="hero-panel-top">
                  <span className="panel-chip">Warehouse platform</span>
                  <span className="panel-chip">Video evidence</span>
                </div>
                <div className="hero-panel-video">
                  <div className="video-frame-header">
                    <span>Order PK-240318</span>
                    <span>14:28</span>
                  </div>
                  <div className="video-frame-body">
                    <div className="scan-column">
                      <span className="scan-label">Packing verification</span>
                      <strong>แพ็คครบ ตรวจสอบได้</strong>
                      <p>เห็นขั้นตอนแพ็คและย้อนดูหลักฐานได้จาก Order เดียวกัน</p>
                    </div>
                    <div className="timeline-column">
                      <div className="timeline-dot" />
                      <div className="timeline-line" />
                    </div>
                    <div className="evidence-column">
                      <span className="metric">Stock status</span>
                      <strong>พร้อมหยิบ</strong>
                      <span className="metric">Packed by</span>
                      <strong>Table 03 / Mint</strong>
                    </div>
                  </div>
                </div>
                <div className="hero-panel-stats">
                  {stats.map((item) => (
                    <div key={item.label} className="hero-mini-stat">
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="packiko-strip">
        <div className="container">
          <div className="audience-strip wow fadeInUp" data-wow-delay="300ms">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <h5>Trusted by fast-growing online sellers and fulfillment teams</h5>
                <p>ร้านค้าออนไลน์และคลัง fulfillment ใช้ Packiko เพื่อคุม Stock และลดปัญหาการแพ็คผิด</p>
              </div>
              <div className="col-lg-7">
                <div className="audience-pill-list">
                  {audienceStrip.map((item) => (
                    <span className="audience-pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about pb-0 overflow-visible" id="problems">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHeading
                eyebrow="Common pain points"
                title="ร้านออนไลน์ที่ขายดี <span class='color-pink'>มักเจอปัญหาเดียวกัน</span>"
                body="พอออเดอร์เริ่มเยอะขึ้น งานหลังบ้านจะเริ่มพลาดง่ายขึ้น ทั้ง stock ไม่ตรง แพ็คผิด และตอบเคสลูกค้าได้ช้าลงเพราะไม่มีหลักฐาน"
                centered
              />
            </div>
          </div>
          <div className="row mt-66px">
            {problemCards.map((item, index) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
                accent={["bg-blue", "bg-yellow", "bg-pink", "bg-black"][index] ?? "bg-blue"}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-light-gray packiko-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHeading
                eyebrow="Platform overview"
                title="Packiko ช่วยให้คุณ<span class='color-blue'>คุมคลังได้จริง</span>"
                body="Packiko รวมเครื่องมือที่ทีมคลังต้องใช้จริงไว้ในที่เดียว ทั้งคุม stock ลดการแพ็คผิด เก็บวิดีโอหลักฐาน และดูภาพรวมงานแพ็คได้จาก dashboard"
                centered
              />
            </div>
          </div>
          <div className="row mt-66px">
            {solutionCards.map((item, index) => (
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4" key={item.title}>
                <div className={`solution-box wow fadeInUp accent-${index + 1}`} data-wow-delay={`${300 + index * 100}ms`}>
                  <span className="solution-count">0{index + 1}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="video-evidence" className="half-section p-0 bg-change bg-yellow">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 p-0">
              <div className="hover-effect packiko-media-panel">
                <img alt="Video evidence placeholder" src="/creative-studio/img/work5.jpg" className="about-img" />
                <div className="media-overlay-card">
                  <p className="media-kicker">Video evidence</p>
                  <h4>ค้นหาได้ตาม Order Number, เวลา และพนักงาน</h4>
                  <ul>
                    {videoSearchKeys.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 p-lg-0">
              <div className="split-container-setting style-three text-center text-lg-left">
                <SectionHeading
                  eyebrow="Most important proof layer"
                  title="วิดีโอหลักฐานระหว่างแพ็คทุก <span class='color-pink'>Order</span>"
                  body="ทุกครั้งที่มีการแพ็คสินค้า ระบบจะบันทึกวิดีโอไว้เป็นหลักฐาน และค้นหาได้ทันทีจาก Order Number, เวลา และพนักงานที่แพ็ค"
                />
                <div className="evidence-search-list">
                  {videoSearchKeys.map((item) => (
                    <div className="evidence-search-item" key={item}>
                      {item}
                    </div>
                  ))}
                </div>
                <p className="color-black mt-4 mb-0">
                  เวลาลูกค้าเคลมหรือมี dispute คุณเปิดวิดีโอของ Order นั้นได้เลย เพื่อเช็กว่าแพ็คอะไรไป
                  ใครเป็นคนแพ็ค และใช้เป็นหลักฐานได้ทันที
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="about overflow-visible">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 pr-lg-5 mb-5 mb-lg-0 wow fadeInLeft" data-wow-delay="300ms">
              <div className="rare-box" />
              <img src="/creative-studio/img/about.jpg" className="about-img-small position-relative w-100" alt="Inventory control placeholder" />
            </div>
            <div className="col-lg-6 pl-lg-5">
              <SectionHeading
                eyebrow="Inventory feature"
                title="คุม Stock ให้<span class='color-blue'>ตรงมากขึ้น</span>"
                body="เห็น stock ชัดขึ้น ลดของหาย ลด oversell และช่วยให้ทีมรู้สถานะสินค้าในคลังได้เร็วกว่าเดิม"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="half-section p-0 bg-light-gray" id="packing-verification">
        <div className="container-fluid">
          <div className="row align-items-center flex-lg-row-reverse">
            <div className="col-lg-6 col-md-12 p-0">
              <div className="hover-effect">
                <img alt="Packing verification placeholder" src="/creative-studio/img/work2.jpg" className="about-img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 p-lg-0">
              <div className="split-container-setting text-center text-lg-left">
                <SectionHeading
                  eyebrow="Packing verification"
                  title="ลดการ<span class='color-pink'>แพ็คผิด</span>"
                  body="ทำให้ขั้นตอนหยิบและแพ็คตรวจสอบได้ชัดขึ้น ลดการหยิบผิด ส่งผิด หรือแพ็คไม่ครบในช่วงออเดอร์พุ่ง"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="parallax-setting parallaxie parallax1 packiko-stats">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <SectionHeading
                eyebrow="Results"
                title="ตัวเลขที่ทีมเห็นจาก<span class='color-yellow'>การใช้งานจริง</span>"
                body="Packiko ช่วยให้ทีมแพ็คทำงานนิ่งขึ้น คุมความผิดพลาดได้ดีขึ้น และมีหลักฐานพร้อมใช้ทุก Order"
              />
            </div>
            <div className="col-lg-7">
              <div className="row">
                {stats.map((item, index) => (
                  <div className="col-md-4 col-sm-6 mb-4" key={item.label}>
                    <div className="stats-box wow fadeInUp" data-wow-delay={`${300 + index * 100}ms`}>
                      <h3>{item.value}</h3>
                      <p>{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="customers" className="bg-white packiko-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHeading
                eyebrow="Customers"
                title="ร้านค้าและ fulfillment teams <span class='color-pink'>ที่ใช้ Packiko</span>"
                body="เหมาะกับทีมที่ต้องรันออเดอร์จำนวนมากต่อวัน และต้องการระบบที่ช่วยคุมหน้างานได้จริง"
                centered
              />
            </div>
          </div>
          <div className="row mt-66px">
            {useCases.map((item, index) => (
              <div className="col-lg-6 col-md-6 mb-4" key={item.title}>
                <div className={`use-case-card wow fadeInUp tone-${index + 1}`} data-wow-delay={`${300 + index * 100}ms`}>
                  <span className="use-case-label">Use case 0{index + 1}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-light-gray pricing-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionHeading
                eyebrow="Pricing"
                title="เลือกแพ็กที่เหมาะกับ<span class='color-pink'>ทีมของคุณ</span>"
                body="เริ่มจากแพ็กที่พอดีกับ operation ปัจจุบัน แล้วค่อยขยายเมื่อทีมต้องการ workflow และการควบคุมเพิ่มขึ้น"
                centered
              />
            </div>
          </div>
          <div className="row mt-66px mt-xs-4rem">
            {pricingPlans.map((plan, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 text-center mb-xs-5 wow fadeInUp" data-wow-delay={`${300 + index * 100}ms`} key={plan.name}>
                <div className={`pricing-item ${plan.featured ? "price-transform hvr-bg-yellow packiko-price-featured" : "hvr-bg-blue"}`}>
                  {plan.featured ? <div className="quarter-triangle" /> : null}
                  <div className="price-box clearfix">
                    <div className="price_title">
                      <h4 className="text-capitalize">{plan.name}</h4>
                    </div>
                  </div>
                  <div className="price plan-intro">
                    <p>{plan.description}</p>
                  </div>
                  <div className="price-description">
                    {plan.features.map((feature) => (
                      <p key={feature}>{feature}</p>
                    ))}
                  </div>
                  <div className="text-center">
                    <Link href="/book-demo" className="btn-setting color-black btn-hvr-up btn-blue btn-hvr-white">
                      Book Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="packiko-section bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHeading
                eyebrow="FAQ"
                title="คำถามที่ทีมมักถาม<span class='color-blue'>ก่อนเริ่มใช้</span>"
                centered
              />
            </div>
          </div>
          <div className="row mt-66px">
            {faqs.map((item, index) => (
              <div className="col-lg-6 col-md-6 mb-4" key={item.question}>
                <div className="faq-card wow fadeInUp" data-wow-delay={`${300 + index * 100}ms`}>
                  <h4>{item.question}</h4>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="final-cta" className="packiko-final-cta">
        <div className="container">
          <div className="cta-panel wow fadeInUp" data-wow-delay="300ms">
            <SectionHeading
              eyebrow="Book a demo"
              title="ดูว่า Packiko ช่วยให้คุณ<span class='color-yellow'>คุมคลังได้ง่ายขึ้นยังไง</span>"
              centered
            />
            <div className="text-center mt-4">
              <Link href="/book-demo" className="btn-setting color-black btn-hvr-up btn-yellow btn-hvr-pink text-white">
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function SimplePageContent({ slug }: { slug: string }) {
  const page = simplePages[slug];

  return (
    <>
      <section className="packiko-inner-hero">
        <div className="container">
          <div className="row min-vh-75 align-items-center">
            <div className="col-lg-8 mx-auto text-center wow fadeInUp" data-wow-delay="300ms">
              <p className="hero-eyebrow">{page.eyebrow}</p>
              <h1>{page.title}</h1>
              <p className="hero-copy mb-0">{page.intro}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="packiko-section bg-white">
        <div className="container">
          <div className="row">
            {page.body.map((paragraph, index) => (
              <div className="col-lg-6 mb-4" key={paragraph}>
                <div className="faq-card wow fadeInUp" data-wow-delay={`${300 + index * 100}ms`}>
                  <h4>{page.title}</h4>
                  <p>{paragraph}</p>
                </div>
              </div>
            ))}
          </div>
          {slug === "book-demo" ? (
            <div className="row mt-4">
              <div className="col-lg-8 mx-auto">
                <div className="contact-box demo-box">
                  <h3 className="mb-4">Book Demo</h3>
                  <form className="demo-form">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Company" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Daily orders" />
                    <textarea placeholder="Tell us about your current workflow" rows={5} />
                    <button type="submit" className="btn-setting color-black btn-hvr-up btn-blue btn-hvr-yellow text-white">
                      Submit Request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}

export function buildMetadata(title?: string): Metadata {
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  return {
    title: fullTitle,
    description:
      "Warehouse operations platform for high-volume online sellers who need tighter inventory control, fewer packing mistakes, and video evidence for every order.",
  };
}
