import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://onestepinnovations.com.au"),
  title: "One Step Innovations | AI Automation for Manufacturing Excellence",
  description: "AI-powered manufacturing process improvement for Australian businesses. Reduce downtime, optimize workflows with intelligent automation. Expert implementation included.",
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
    description: "AI-powered manufacturing process improvement for Australian businesses. Reduce downtime, optimize workflows with intelligent automation.",
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
    description: "AI-powered manufacturing process improvement for Australian businesses. Intelligent automation experts.",
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
    <html lang="en" data-scroll-behavior="smooth" className={`${dmSans.variable} ${playfair.variable}`}>
      <head>
        {/* Preload hero image */}
        <link rel="preload" href="/hero-bg-hq.png" as="image" />
      </head>
      <body className="bg-void text-foreground antialiased" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        {/* Google Tag (gtag.js) */}
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

            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.open(url, '_blank');
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-17639333154/-oiLCM7wg_EbEKK6i9tB',
                'value': 1.0,
                'currency': 'AUD',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "One Step Innovations Pty Ltd",
              "url": "https://onestepinnovations.com.au",
              "logo": "https://onestepinnovations.com.au/logo.png",
              "description": "Transform business chaos into streamlined efficiency through AI and Technology. AI Process Automation, AIOT Implementation, and Business Process Improvement.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "AU"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+61-476-289-975",
                "contactType": "sales",
                "email": "praveensudhakar@onestepinnovations.com.au"
              },
              "sameAs": [
                "https://www.linkedin.com/company/onestep-innovations/"
              ],
              "founder": {
                "@type": "Person",
                "name": "Praveen Kumar Sudhakar"
              },
              "areaServed": "AU",
              "serviceType": ["AI Process Automation", "Business Process Improvement", "AIOT Implementation", "Strategic Management", "Change Management", "Training and Development"]
            })
          }}
        />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
