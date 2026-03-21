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
        width: 1200,
        height: 630,
        alt: "My Domos Africa - Institutional Trust Layer",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
