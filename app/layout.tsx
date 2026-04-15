import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-condensed",
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["normal", "italic"],
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
  description: "Fine line tattoo artist based in Toronto. Custom pieces, flash designs, and bookings.",
  openGraph: {
    title: "Tattoos by Jess",
    description: "Fine line tattoo artist based in Toronto. Custom pieces, flash designs, and bookings.",
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
      className={`${barlowCondensed.variable} ${hostGrotesk.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
