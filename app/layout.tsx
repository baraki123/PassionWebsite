import type { Metadata } from "next";
import { Fraunces, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Passion Growers — America's Flower Grower",
  description:
    "Family-owned. Farm-direct. From our farms in Colombia and Ecuador to the shelves of America's leading retailers — grown with passion, delivered with pride.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${cormorant.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
