import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Kanit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { PREFS_SCRIPT, DEFAULT_LANG } from "@/lib/prefs";
import { COMPANY } from "@/lib/company";
import { LangProvider } from "@/i18n";
import MotionProvider from "@/components/MotionProvider";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const kanit = Kanit({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
  subsets: ["thai", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.site),
  title: "Packiko | More orders. Fewer people. Faster delivery.",
  description:
    "Packiko is building the brain of the warehouse: software that tells people and machines what to do, so warehouses handle more orders in the same space, depend less on people, and deliver faster through a nationwide micro-fulfillment network.",
  keywords:
    "Packiko, ThaiCloud, fulfillment, warehouse, WMS, 3PL, e-commerce, micro-fulfillment, AI warehouse, pick pack ship, VDO proof, Thailand",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Packiko | More orders. Fewer people. Faster delivery.",
    description: "Three stories about fulfillment: Speed. Intelligence. Network.",
    siteName: "Packiko by ThaiCloud",
    locale: "en_US",
    alternateLocale: ["th_TH", "ko_KR", "zh_CN"],
    type: "website",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#04070c",
  colorScheme: "dark",
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.legalName,
  url: COMPANY.site,
  logo: `${COMPANY.site}/brand/packiko-logo.png`,
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
    // The prefs script rewrites `lang` before hydration — that is the point,
    // so React must not warn about the difference.
    <html
      lang={DEFAULT_LANG}
      className={`${geist.variable} ${geistMono.variable} ${kanit.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/brand/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/brand/icon-192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/brand/apple-touch-icon.png" />
        {/* Blocking on purpose: it must run before the first paint. */}
        <script dangerouslySetInnerHTML={{ __html: PREFS_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
      </head>
      <body className="antialiased">
        <LangProvider>
          <MotionProvider>{children}</MotionProvider>
        </LangProvider>

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
