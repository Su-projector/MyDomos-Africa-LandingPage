import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const footerLinks = {
  Platform: [
    { label: 'The Platform', href: '#platform' },
    { label: 'For Tenants', href: '#tenants' },
    { label: 'For Landlords', href: '#landlords' },
    { label: 'For Agents', href: '#agents' },
  ],
  Company: [
    { label: 'About DomosHQ', href: '#why-it-matters' },
    { label: 'For Investors', href: '#investors' },
    { label: 'Build With Us', href: '#build-with-us' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Use', href: '#' },
    { label: 'Contact', href: '#waitlist' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 py-16 lg:py-20">

          {/* Brand Block (Left) */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight flex items-center gap-2 sm:gap-3">
              <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-full overflow-hidden border border-gold/40 shrink-0 relative bg-white flex items-center justify-center shadow-inner">
                <Image
                  src="/logo.png"
                  alt="MyDomos Logo"
                  fill
                  className="object-contain scale-150"
                />
              </div>
              <div>MyDomos <span className="text-white">Africa</span></div>
            </Link>
            <p className="mt-2 text-gold font-heading font-bold text-sm tracking-wide">
              Africa&rsquo;s Home for Rental Trust.
            </p>
            <div className="mt-8 flex gap-6">
              <Link href="https://www.linkedin.com/company/domoshq/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://x.com/DomosHQ" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">X (Twitter)</span>
              </Link>
              <Link href="mailto:official.mydomosafrica@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-heading font-bold text-white tracking-wider uppercase">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Legal Strip */}
        <div className="border-t border-gray-700/50 py-10 flex flex-col items-center text-center gap-6">
          <p className="text-base text-white/90 font-medium font-heading italic">
            DomosHQ builds the institution. My Domos Africa is the experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs tracking-wide text-gray-500 uppercase">
            <p>
              &copy; {new Date().getFullYear()} DomosHQ. All rights reserved.
            </p>
            <span className="hidden sm:inline text-gray-700">•</span>
            <p>
              My Domos Africa is a product of DomosHQ.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
