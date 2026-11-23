import type { Metadata } from "next";
import { Titillium_Web, Raleway, Josefin_Sans } from "next/font/google";
import "./globals.css";

const titillium = Titillium_Web({
  variable: "--font-titillium",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SIVRA Buildcon — Architecture & Interior Design Studio",
  description:
    "SIVRA Buildcon is an architecture and interior design studio creating individual, aesthetically stunning solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${titillium.variable} ${raleway.variable} ${josefin.variable} h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#555]">{children}</body>
    </html>
  );
}
