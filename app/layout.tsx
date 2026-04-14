import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Bebas_Neue,
  DM_Sans,
  Space_Mono,
  Pinyon_Script,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const pinyonScript = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jess — Creative Portfolio",
  description: "Photography, social media & creative direction by Jess.",
  openGraph: {
    title: "Jess — Creative Portfolio",
    description: "Photography, social media & creative direction by Jess.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${bebas.variable} ${dmSans.variable} ${spaceMono.variable} ${pinyonScript.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
