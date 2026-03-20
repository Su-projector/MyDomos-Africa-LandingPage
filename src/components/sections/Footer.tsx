import React from 'react';
import Link from 'next/link';

const footerLinks = {
  Solutions: [
    { label: 'Rent Protection', href: '#platform' },
    { label: 'Agent Verification', href: '#platform' },
    { label: 'Tenancy Management', href: '#how-it-works' },
  ],
  Company: [
    { label: 'About DomosHQ', href: '#why-it-matters' },
    { label: 'For Investors', href: '#investors' },
    { label: 'Careers', href: '#build-with-us' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 py-16 lg:py-20">
          
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-xl font-heading font-bold text-white tracking-tight">
              MyDomos <span className="text-gold">Africa</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
              DomosHQ builds the institutional trust infrastructure that Africa&rsquo;s rental housing market has never had.
            </p>
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
        <div className="border-t border-gray-700/50 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} DomosHQ. All rights reserved.
          </p>
          <p className="text-gray-500">
            My Domos Africa is a product of DomosHQ.
          </p>
        </div>

      </div>
    </footer>
  );
}
