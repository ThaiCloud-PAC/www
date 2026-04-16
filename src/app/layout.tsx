import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { SiteLayout } from "@/components/site-shell";
import { seoKeywords, siteName, siteTagline } from "@/lib/site";
import Script from "next/script";
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Packiko by ThaiCloud",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://thaicloud.com",
    "description": "Warehouse operations platform for high-volume online sellers.",
    "publisher": {
      "@type": "Organization",
      "name": "ThaiCloud"
    }
  };

  return (
    <html lang="th">
      <body className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} antialiased`}>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
