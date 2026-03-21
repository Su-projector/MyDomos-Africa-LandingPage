import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mydomos-africa.vercel.app"), // Replace with your production URL
  title: "My Domos Africa | Rental Trust & Protection Infrastructure",
  description: "The institutional trust layer for Africa's rental market. Verified agreements, payment protection, and property management for tenants, landlords, and agents.",
  openGraph: {
    title: "My Domos Africa | Rental Trust & Protection Infrastructure",
    description: "The institutional trust layer for Africa's rental market. Verified agreements, payment protection, and property management for tenants, landlords, and agents.",
    url: "/",
    siteName: "My Domos Africa",
    images: [
      {
        url: "/og-image.png",
        secureUrl: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "My Domos Africa - Institutional Trust Layer for Rental Market",
        type: 'image/png',
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Domos Africa | Rental Trust & Protection Infrastructure",
    description: "The institutional trust layer for Africa's rental market. Verified agreements, payment protection, and property management for tenants, landlords, and agents.",
    images: ["/og-image.png"],
    creator: "@domoshq",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  appleWebApp: {
    title: "My Domos Africa",
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
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
