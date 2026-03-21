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
  title: "My Domos Africa | Institutional Rental Trust Layer",
  description: "Experience secure property management and payment protection. Build trust between tenants, landlords, and agents with Africa's rental infrastructure.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
      prefix="og: http://ogp.me/ns#"
    >
      <head>
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
