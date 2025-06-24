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
  title: "SunLe: Talk Freely. We Don’t Ghost.",
  description: "Feeling bored or lonely? Come chat on the SunLe app — no drama, just good vibes. Slide in and say hi!",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "SunLe: Talk Freely. We Don’t Ghost.",
    description: "Feeling bored or lonely? Come chat on the SunLe app — no drama, just good vibes. Slide in and say hi!",
    url: "https://www.sunle.xyz", 
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
    title: " SunLe: Talk Freely. We Don’t Ghost.",
    description: "Feeling bored or lonely? Come chat on the SunLe app — no drama, just good vibes. Slide in and say hi!",
    images: ["/og-image.png"],
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
