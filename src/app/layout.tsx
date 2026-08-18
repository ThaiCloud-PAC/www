import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Kanit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const kanit = Kanit({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
  subsets: ["thai", "latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThaiCloud | Packiko — Fulfilment Ecosystem for Online Commerce",
  description:
    "Packiko by ThaiCloud — ระบบนิเวศ Fulfilment สำหรับธุรกิจออนไลน์: เชื่อม OMS, VDO Proof, สต็อกจริง, หยิบ-แพ็ก-ส่ง, ขนส่ง และเครือข่าย HUB ไว้ในแพลตฟอร์มเดียว สร้างโดยทีมที่บริหารคลังจริงกว่า 10 ปี",
  keywords:
    "Packiko, ThaiCloud, fulfillment, fulfilment, warehouse, WMS, 3PL, e-commerce, OMS, ZORT, pick pack ship, VDO proof, Thailand",
  openGraph: {
    title: "Packiko by ThaiCloud — The Fulfilment Ecosystem for Online Commerce",
    description:
      "ตรวจสอบได้ • เห็นสต็อกจริง • เชื่อมขนส่ง • ขยายผ่าน HUB • ต่อยอดการเงิน — Add-in, Prime, Hub, Ultra",
    siteName: "ThaiCloud",
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${kanit.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link href="/minimal-creative/images/favicon.ico" rel="icon" />
        <link href="/vendor/css/bundle.min.css" rel="stylesheet" />
        <link href="/vendor/css/LineIcons.min.css" rel="stylesheet" />
        <link href="/vendor/css/jquery.fancybox.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/vendor/css/owl.carousel.min.css" />
        <link href="/vendor/css/cubeportfolio.min.css" rel="stylesheet" />
        <link href="/minimal-creative/css/line-awesome.min.css" rel="stylesheet" />
        <link href="/minimal-creative/css/style.css" rel="stylesheet" />
      </head>
      <body className="antialiased" data-spy="scroll" data-target=".navbar" data-offset="90">
        {children}
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MJP9XE8QC2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MJP9XE8QC2');
          `}
        </Script>

        {/* JavaScript Plugins */}
        <Script src="/vendor/js/bundle.min.js" strategy="beforeInteractive" />
        <Script src="/vendor/js/jquery.appear.js" strategy="lazyOnload" />
        <Script src="/vendor/js/jquery.fancybox.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/morphext.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/wow.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/jquery.cubeportfolio.min.js" strategy="lazyOnload" />
        <Script src="/minimal-creative/js/TweenMax.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/contact_us.js" strategy="lazyOnload" />
        <Script src="/minimal-creative/js/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
