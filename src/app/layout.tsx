import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { SiteLayout } from "@/components/site-shell";
import { seoKeywords, siteName, siteTagline } from "@/lib/site";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thaicloud.com"),
  title: {
    default: `${siteName} | ${siteTagline}`,
    template: `%s | ${siteName}`,
  },
  description:
    "ThaiCloud is a warehouse operations platform for high-volume online sellers. Control inventory, reduce packing mistakes, and keep video evidence for every order.",
  keywords: seoKeywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} antialiased`}>
        <SiteLayout>{children}</SiteLayout>
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
      </body>
    </html>
  );
}
