import type { Metadata } from "next";
import { DM_Serif_Display, Public_Sans, Geist } from "next/font/google";
import "./globals.css";

import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

import Header from "../components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const DmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "So Studio - On fait des sites efficaces & rentables",
  description:
    "Vous voulez faire un site web ? Spécialistes du web et de la com’ nous vous proposons des solutions aussi efficaces que rentables pour convertir vos prospects !",
  keywords:
    "création de sites web, création de sites internet, solutions pour convertir, web design, developpement web, site Wordpress, site e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", DmSerif.variable, publicSans.variable, "font-sans", geist.variable)}
    >
      <GoogleTagManager gtmId="GTM-M747NXG" />
      <GoogleAnalytics gaId="G-JZF4600W50" />

      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
