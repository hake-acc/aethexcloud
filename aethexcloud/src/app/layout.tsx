import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/animations/LenisProvider";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://aethexcloud.com"
  ),
  title: {
    default: "AethexCloud — Where Your Ideas Find a Home",
    template: "%s | AethexCloud",
  },
  description:
    "Reliable cloud infrastructure for websites, VPS, Minecraft servers, Discord bots and Lavalink nodes. Built for creators, developers and growing communities.",
  keywords: [
    "Cloud Hosting",
    "Website Hosting",
    "Discord Bot Hosting",
    "Minecraft Hosting",
    "Minecraft Server Hosting",
    "India VPS",
    "Cheap VPS India",
    "Affordable VPS",
    "AMD EPYC VPS",
    "NVMe VPS",
    "Developer Hosting",
    "Cloud Infrastructure",
    "Game Hosting",
    "Lavalink Hosting",
    "Node Hosting",
  ],
  authors: [{ name: "AethexCloud" }],
  creator: "AethexCloud",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "AethexCloud",
    title: "AethexCloud — Where Your Ideas Find a Home",
    description:
      "Reliable cloud infrastructure for websites, VPS, Minecraft servers, Discord bots and Lavalink nodes.",
    images: [
      {
        url: "/aethex_cloud_logo.png",
        width: 512,
        height: 512,
        alt: "AethexCloud",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "AethexCloud — Where Your Ideas Find a Home",
    description:
      "Reliable cloud infrastructure for websites, VPS, Minecraft servers, Discord bots and Lavalink nodes.",
    images: ["/aethex_cloud_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <LenisProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
