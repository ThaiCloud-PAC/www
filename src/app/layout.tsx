/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
import Script from "next/script";
import { SiteFooter, SiteHeader, buildMetadata } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <link rel="icon" href="/creative-studio/img/favicon.ico" />
        <link rel="stylesheet" href="/vendor/css/bundle.min.css" />
        <link rel="stylesheet" href="/vendor/css/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="/vendor/css/swiper.min.css" />
        <link rel="stylesheet" href="/vendor/css/cubeportfolio.min.css" />
        <link rel="stylesheet" href="/vendor/css/slick.css" />
        <link rel="stylesheet" href="/vendor/css/slick-theme.css" />
        <link rel="stylesheet" href="/creative-studio/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/creative-studio/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/creative-studio/css/navigation.css" />
        <link rel="stylesheet" href="/creative-studio/css/settings.css" />
        <link rel="stylesheet" href="/creative-studio/css/style.css" />
        <link rel="stylesheet" href="/creative-studio/css/custom.css" />
      </head>
      <body>
        <div className="loader" id="loader-fade">
          <div className="loader-container">
            <ul className="loader-box">
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
        </div>
        <div className="pushwrap">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
        <div id="animated-cursor">
          <div id="cursor">
            <div id="cursor-loader" />
          </div>
        </div>
        <Script src="/vendor/js/bundle.min.js" strategy="afterInteractive" />
        <Script src="/vendor/js/jquery.fancybox.min.js" strategy="afterInteractive" />
        <Script src="/vendor/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/vendor/js/swiper.min.js" strategy="afterInteractive" />
        <Script src="/vendor/js/jquery.cubeportfolio.min.js" strategy="afterInteractive" />
        <Script src="/vendor/js/jquery.appear.js" strategy="afterInteractive" />
        <Script src="/vendor/js/parallaxie.min.js" strategy="afterInteractive" />
        <Script src="/vendor/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/vendor/js/slick.min.js" strategy="afterInteractive" />
        <Script src="/creative-studio/js/TweenMax.min.js" strategy="afterInteractive" />
        <Script src="/creative-studio/js/morphext.min.js" strategy="afterInteractive" />
        <Script src="/creative-studio/js/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
