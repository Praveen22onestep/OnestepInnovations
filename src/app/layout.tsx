import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "One Step Innovations | AI Automation for Manufacturing Excellence",
  description: "Transform business chaos into streamlined efficiency through AI and Technology. One Step Innovations Pty Ltd delivers AI Process Automation, AIOT Implementation, Business Process Improvement, and Strategic Management solutions across Australia.",
  keywords: [
    "AI automation",
    "business process improvement",
    "AIOT",
    "IoT solutions",
    "strategic management",
    "change management",
    "manufacturing automation",
    "supply chain optimization",
    "process automation Australia",
    "enterprise AI solutions",
    "digital transformation",
    "operational efficiency",
    "One Step Innovations",
  ],
  authors: [{ name: "Praveen Kumar Sudhakar", url: "https://onestepinnovations.com.au" }],
  creator: "One Step Innovations Pty Ltd",
  publisher: "One Step Innovations Pty Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "One Step Innovations | AI Automation for Manufacturing Excellence",
    description: "Transform business chaos into streamlined efficiency through AI and Technology. Your Growth Engine for business transformation.",
    url: "https://onestepinnovations.com.au",
    siteName: "One Step Innovations",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 200,
        height: 200,
        alt: "One Step Innovations Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Step Innovations | AI Automation for Manufacturing Excellence",
    description: "Transform business chaos into streamlined efficiency through AI and Technology.",
    images: ["/logo.png"],
  },
  verification: {
    google: "6RH2N9qMK5N0tkbySu0jVb-X5lGeK8htaI9N3F7aNu4",
  },
  alternates: {
    canonical: "https://onestepinnovations.com.au",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17639333154"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17639333154');
          `}
        </Script>
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-void text-foreground antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
