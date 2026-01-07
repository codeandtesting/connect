import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "CONEKT | 24/7 Professional AI Voice Agents for Business",
    template: "%s | CONEKT"
  },
  description: "Transform your phone system from a cost center into a growth engine. Intelligent AI agents that handle calls 24/7 in 50+ languages with perfect accuracy and unlimited scalability.",
  keywords: ["AI Voice Agent", "Call Automation", "Customer Support AI", "Multilingual AI", "AI Call Manager", "Voice AI for Business", "CONEKT AI"],
  authors: [{ name: "CONEKT Team" }],
  creator: "CONEKT",
  publisher: "CONEKT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://conekt-ai.com", // Adjust with actual URL if known
    siteName: "CONEKT",
    title: "CONEKT | Intelligent AI Voice Agents",
    description: "Handle calls 24/7 in any language with native fluency. Slashing costs and maximizing ROI with professional AI call management.",
    images: [
      {
        url: "/images/phone_back_1.png", // Using a dramatic available image
        width: 1200,
        height: 630,
        alt: "CONEKT AI Voice Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CONEKT | AI Voice Agents for Global Scaling",
    description: "Native-level AI agents for your business phone systems. Available 24/7/365.",
    images: ["/images/phone_back_1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
