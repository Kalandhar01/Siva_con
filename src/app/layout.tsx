import type { Metadata } from "next";
import { Titillium_Web, Raleway } from "next/font/google";
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

export const metadata: Metadata = {
  title: "SIVRA Buildcon — Architecture & Interior Design Studio",
  description:
    "SIVRA Buildcon is an architecture and interior design studio creating individual, aesthetically stunning solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${titillium.variable} ${raleway.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#555]">{children}</body>
    </html>
  );
}
