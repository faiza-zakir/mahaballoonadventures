import { Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.scss";
import "./index.css";
import Providers from "./providers";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";

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
      </head>
      <body
      // className={`${geistPoppinsRegular.variable} ${geistPoppinsSemiBold.variable} ${geistPoppinsMedium.variable} ${geistPoppinsBold.variable}`}
      >
        <NextTopLoader color="#7ab342" showSpinner={false} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
