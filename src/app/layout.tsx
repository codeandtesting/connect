import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/context";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "CONEKT | 24/7 Professional AI Voice Agents for Business",
    template: "%s | CONEKT"
  },
  description: "Transform your business with professional AI Voice Agents. Handle 10,000+ simultaneous calls 24/7 in 50+ languages with native fluency. Perfect for Healthcare, Real Estate, and Automotive industries.",
  keywords: [
    "AI Voice Agent", "Automated Phone System", "Voice AI for Business",
    "Conversational AI", "AI Call Center", "Call Automation Platform",
    "Multilingual AI Agent", "Healthcare Call Automation", "Real Estate AI Secretary",
    "Automotive Service AI", "B2B Voice AI", "CONEKT AI Solutions"
  ],
  authors: [{ name: "CONEKT Team" }],
  creator: "CONEKT",
  publisher: "CONEKT",
  alternates: {
    canonical: 'https://conekt.ai',
    languages: {
      'en-US': 'https://conekt.ai',
      'ru-RU': 'https://conekt.ai/ru', // If subfolders are implemented later
      'lv-LV': 'https://conekt.ai/lv',
    },
  },
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
        <LanguageProvider>
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "CONEKT AI",
                "operatingSystem": "Web-based",
                "applicationCategory": "BusinessApplication",
                "browserRequirements": "requires HTML5 support",
                "offers": {
                  "@type": "Offer",
                  "price": "299.00",
                  "priceCurrency": "USD",
                  "description": "Monthly subscription starting at $299 for 1,000 minutes"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "124"
                },
                "description": "Professional AI voice agents that pass the Turing test. Fully automate your business phone operations with native fluency in 50+ languages.",
                "featureList": [
                  "24/7 Availability",
                  "50+ Languages Support",
                  "CRM & ERP Integrations",
                  "Real-time Call Analytics",
                  "Neural Voice Engine"
                ]
              })
            }}
          />
        </LanguageProvider>
      </body>
    </html>
  );
}
