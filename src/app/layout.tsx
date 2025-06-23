import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SunLe – Just Say It",
  description: "24x7 personal AI companion that listens, comforts, and never judges.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "SunLe – Just Say It",
    description: "24x7 personal AI companion that listens, comforts, and never judges.",
    url: "https://sunle.in", // update to your real domain
    siteName: "SunLe",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SunLe: Just Say It",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SunLe – Just Say It",
    description: "24x7 personal AI companion that listens, comforts, and never judges.",
    images: ["/og-image.png"],
    creator: "@yourhandle", // optional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
