import { Roboto } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.scss";
import "./index.css";
import Providers from "./providers";
import { LanguageProvider } from "./context/LanguageContext";

// Load the Roboto font with specific weights
const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export async function generateMetadata() {
  // Logic to set title and description based on route or props
  return {
    title: "Maha Hot Air Balloons | Certified Hot Air Balloon Ride in UAE",
    description:
      "Experience stunning views of the desert and create unforgettable memories with our expert-guided aerial adventures. Book your hot air balloon Dubai today!",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Basic Cards  */}
        <meta property="og:title" content="Maha Hot Air Balloons" />
        <meta property="og:site_name" content="Maha Hot Air Balloons" />
        <meta property="og:url" content="https://mahaballoonadventures.ae" />
        <meta
          property="og:description"
          content="Experience stunning views of the
    desert and create unforgettable memories with our expert-guided aerial
    adventures. Book your hot air balloon Dubai today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://d3gelo9cifr8ed.cloudfront.net/assets/mahaNav.png"
        />

        {/* Twitter Cards  */}
        <meta name="twitter:card" content="Maha Hot Air Balloons" />
        <meta name="twitter:title" content="Maha Hot Air Balloons" />
        <meta
          name="twitter:description"
          content="Experience stunning views of the desert and create unforgettable memories with our expert-guided aerial adventures. Book your hot air balloon Dubai today!"
        />
        <meta name="twitter:url" content="https://mahaballoonadventures.ae" />
        <meta
          name="twitter:image"
          content="https://d3gelo9cifr8ed.cloudfront.net/assets/mahaNav.png"
        />
        <meta name="twitter:image:alt" content="Maha Hot Air Balloons Logo" />
        {/* Open Graph Tags for Facebook, WhatsApp, etc.  */}
        <meta property="og:title" content="Maha Hot Air Balloons" />
        <meta property="og:site_name" content="Maha Hot Air Balloons" />
        <meta property="og:url" content="https://mahaballoonadventures.ae" />
        <meta
          property="og:description"
          content="Experience stunning views of the desert and create unforgettable memories with our expert-guided aerial adventures. Book your hot air balloon Dubai today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://d3gelo9cifr8ed.cloudfront.net/assets/mahaNav.png"
        />
        <meta property="og:image:alt" content="Maha Hot Air Balloons Logo" />

        {/* Google Analytics */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      setTimeout(function () {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag("js", new Date());
        gtag("config", "G-MLRRDSGLKZ");
      }, 18000);
    `,
          }}
        />
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      setTimeout(function () {
        (function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
          var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
          j.async = true;
          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", "GTM-MHD42XNV");
      }, 18000);
    `,
          }}
        />
        {/* End Google Tag Manager  */}
        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      setTimeout(function () {
        (function (c, l, a, r, i, t, y) {
          c[a] =
            c[a] ||
            function () {
              (c[a].q = c[a].q || []).push(arguments);
            };
          t = l.createElement(r);
          t.async = 1;
          t.src = "https://www.clarity.ms/tag/" + i;
          y = l.getElementsByTagName(r)[0];
          y.parentNode.insertBefore(t, y);
        })(window, document, "clarity", "script", "on1ipzkr26");
      }, 18000);
    `,
          }}
        />

        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="FZb6pstdXqZAjwXkVSELCksbOqgVYjYj3t4b_gaQBck"
        />

        {/* Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      setTimeout(function () {
        !(function (f, b, e, v, n, t, s) {
          if (f.fbq) return;
          n = f.fbq = function () {
            n.callMethod
              ? n.callMethod.apply(n, arguments)
              : n.queue.push(arguments);
          };
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = !0;
          n.version = "2.0";
          n.queue = [];
          t = b.createElement(e);
          t.async = !0;
          t.src = v;
          s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s);
        })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
        
        fbq("init", "525109727037171");
        fbq("track", "PageView");
      }, 18000);
    `,
          }}
        />
      </head>
      <body
      // className={`${geistPoppinsRegular.variable} ${geistPoppinsSemiBold.variable} ${geistPoppinsMedium.variable} ${geistPoppinsBold.variable}`}
      >
        {/* Facebook Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=525109727037171&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MHD42XNV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          ></iframe>
        </noscript>
        <NextTopLoader color="#7ab342" showSpinner={false} />
        <LanguageProvider>
          <Providers>{children}</Providers>
        </LanguageProvider>
      </body>
    </html>
  );
}
