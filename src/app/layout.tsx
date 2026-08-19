import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { PREFS_SCRIPT, DEFAULT_LANG } from "@/lib/prefs";
import { COMPANY } from "@/lib/company";
import { LangProvider } from "@/i18n";
import { ThemeProvider } from "@/lib/theme";
import MotionProvider from "@/components/MotionProvider";

const kanit = Kanit({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
  subsets: ["thai", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.site),
  title: "ThaiCloud | Packiko — Fulfilment Ecosystem for Online Commerce",
  description:
    "Packiko by ThaiCloud — ระบบนิเวศ Fulfilment สำหรับธุรกิจออนไลน์: เชื่อม OMS, VDO Proof, สต็อกจริง, หยิบ-แพ็ก-ส่ง, ขนส่ง และเครือข่าย HUB ไว้ในแพลตฟอร์มเดียว สร้างโดยทีมที่บริหารคลังจริงกว่า 10 ปี",
  keywords:
    "Packiko, ThaiCloud, fulfillment, fulfilment, warehouse, WMS, 3PL, e-commerce, OMS, ZORT, pick pack ship, VDO proof, Thailand",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Packiko by ThaiCloud — The Fulfilment Ecosystem for Online Commerce",
    description:
      "ตรวจสอบได้ • เห็นสต็อกจริง • เชื่อมขนส่ง • ขยายผ่าน HUB • ต่อยอดการเงิน — Add-in, Prime, Hub, Ultra",
    siteName: "ThaiCloud",
    locale: "th_TH",
    type: "website",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.legalName,
  url: COMPANY.site,
  logo: `${COMPANY.site}/brand/logo.png`,
  email: COMPANY.email,
  telephone: COMPANY.phone.replace(/\s/g, ""),
  taxID: COMPANY.registration,
  sameAs: [COMPANY.linkedin],
  address: {
    "@type": "PostalAddress",
    streetAddress: "1853/2-3 Soi Uthaifarm, Rim Thang Rot Fai Sai Pak Nam Road",
    addressLocality: "Khlong Tan, Khlong Toei",
    addressRegion: "Bangkok",
    postalCode: "10110",
    addressCountry: "TH",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // The prefs script rewrites class/lang before hydration — that is the point,
    // so React must not warn about the difference.
    <html lang={DEFAULT_LANG} className={kanit.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/brand/favicon.ico" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0e1217" media="(prefers-color-scheme: dark)" />
        {/* Blocking on purpose: it must run before the first paint. */}
        <script dangerouslySetInnerHTML={{ __html: PREFS_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <LangProvider>
            <MotionProvider>{children}</MotionProvider>
          </LangProvider>
        </ThemeProvider>

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-MJP9XE8QC2" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MJP9XE8QC2');
          `}
        </Script>
      </body>
    </html>
  );
}
