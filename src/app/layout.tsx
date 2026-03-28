import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mydomosafrica.vercel.app"),
  title: "My Domos Africa | Rental Trust Layer for Landlords & Tenants",
  description: "Experience Africa's institutional rental trust layer. Secure property management, payment protection, and verified interactions for tenants, landlords, and agents.",
  keywords: [
    "My Domos Africa", 
    "My Domos", 
    "MyDomos", 
    "Domos Africa", 
    "DomosHQ", 
    "Domos", 
    "Domos Africa Rental Trust", 
    "Rental Trust Layer", 
    "Africa Property Management", 
    "Secure Rent Payments Africa", 
    "Tenant Protection Nigeria", 
    "Landlord Security Africa"
  ],
  alternates: {
    canonical: "https://mydomosafrica.vercel.app",
  },
  openGraph: {
    title: "My Domos Africa | Institutional Rental Trust Layer",
    description: "Experience secure property management and payment protection. Build trust between tenants, landlords, and agents with Africa's rental infrastructure.",
    url: "/",
    siteName: "My Domos Africa",
    images: [
      {
        url: "/og-image.png",
        secureUrl: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "My Domos Africa - Institutional Trust Layer",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Domos Africa | Institutional Rental Trust Layer",
    description: "Experience secure property management and payment protection. Build trust between tenants, landlords, and agents with Africa's rental infrastructure.",
    images: ["/og-image.png"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "My Domos Africa",
    "alternateName": ["My Domos", "MyDomos", "DomosHQ", "Domos"],
    "url": "https://mydomosafrica.vercel.app",
    "logo": "https://mydomosafrica.vercel.app/logo.png",
    "description": "Africa's institutional rental trust layer. My Domos Africa (a product of DomosHQ) provides secure property management and payment protection.",
    "sameAs": [
      "https://x.com/DomosHQ",
      "https://www.linkedin.com/company/domoshq/"
    ]
  };

  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
      prefix="og: http://ogp.me/ns#"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Redundant tags for WhatsApp crawler */}
        <meta property="og:image" content="https://mydomosafrica.vercel.app/og-image.png" />
        <meta property="og:image:secure_url" content="https://mydomosafrica.vercel.app/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
