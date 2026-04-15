import type { Metadata } from "next";
import {
  Anton,
  Bebas_Neue,
  Oswald,
  Space_Mono,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const hostGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/HostGrotesk-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../public/fonts/HostGrotesk-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-host-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tattoos by Jess",
  description: "Fine line tattoo artist based in South Florida. Custom pieces, flash designs, and bookings.",
  openGraph: {
    title: "Tattoos by Jess",
    description: "Fine line tattoo artist based in South Florida. Custom pieces, flash designs, and bookings.",
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
      className={`${anton.variable} ${bebas.variable} ${oswald.variable} ${spaceMono.variable} ${hostGrotesk.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
