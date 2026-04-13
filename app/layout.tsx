import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zelt — Card Infrastructure for the Stablecoin Economy",
  description:
    "Launch your crypto card program in 90 days. Zelt is a Visa Principal Issuer offering Card-as-a-Service backed by stablecoins for Web3 companies.",
  keywords: [
    "stablecoin card",
    "crypto card",
    "Visa card",
    "card issuance",
    "USDC",
    "Web3",
    "DeFi",
    "LATAM",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
