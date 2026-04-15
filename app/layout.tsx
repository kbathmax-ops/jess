import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
      className={`${spaceMono.variable} ${hostGrotesk.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
