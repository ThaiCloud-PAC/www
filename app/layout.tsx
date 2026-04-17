import Script from 'next/script';
import './globals.css';

export const metadata = {
  title: 'Creative Studio | MegaOne HTML5 Template',
  description: 'MegaOne multipurpose studio and portfolio HTML5 template',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
        <link rel="icon" href="/creative-studio/img/favicon.ico" />
        
        {/* Bundle */}
        <link rel="stylesheet" href="/vendor/css/bundle.min.css" />
        {/* Plugin Css */}
        <link rel="stylesheet" href="/vendor/css/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="/creative-studio/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/creative-studio/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/vendor/css/swiper.min.css" />
        <link rel="stylesheet" href="/vendor/css/cubeportfolio.min.css" />
        
        {/* Revolution Slider CSS Files */}
        <link rel="stylesheet" href="/creative-studio/css/navigation.css" />
        <link rel="stylesheet" href="/creative-studio/css/settings.css" />
        
        {/* Slick CSS Files */}
        <link rel="stylesheet" href="/vendor/css/slick.css" />
        <link rel="stylesheet" href="/vendor/css/slick-theme.css" />
        
        {/* Style Sheet */}
        <link rel="stylesheet" href="/creative-studio/css/style.css" />
        {/* Custom Style CSS File */}
        <link rel="stylesheet" href="/creative-studio/css/custom.css" />
      </head>
      <body data-spy="scroll" data-target=".navbar-nav" data-offset="90" className="cursor-light">
        {children}

        {/* JavaScript Plugins */}
        <Script src="/vendor/js/bundle.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/jquery.fancybox.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/swiper.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/jquery.cubeportfolio.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/jquery.appear.js" strategy="lazyOnload" />
        <Script src="/vendor/js/parallaxie.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/wow.min.js" strategy="lazyOnload" />
        <Script src="/creative-studio/js/owl.carousel.js" strategy="lazyOnload" />
        <Script src="/vendor/js/slick.min.js" strategy="lazyOnload" />
        <Script src="/creative-studio/js/TweenMax.min.js" strategy="lazyOnload" />
        <Script src="/creative-studio/js/morphext.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/jquery.themepunch.tools.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/jquery.themepunch.revolution.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/extensions/revolution.extension.actions.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/extensions/revolution.extension.carousel.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/extensions/revolution.extension.kenburn.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/extensions/revolution.extension.layeranimation.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/extensions/revolution.extension.migration.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/extensions/revolution.extension.navigation.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/extensions/revolution.extension.parallax.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/extensions/revolution.extension.slideanims.min.js" strategy="lazyOnload" />
        <Script src="/vendor/js/extensions/revolution.extension.video.min.js" strategy="lazyOnload" />
        <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgIfLQi8KTxTJahilcem6qHusV-V6XXjw&loading=async" strategy="lazyOnload" />
        <Script src="/creative-studio/js/maps.min.js" strategy="lazyOnload" />
        <Script src="/creative-studio/js/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
