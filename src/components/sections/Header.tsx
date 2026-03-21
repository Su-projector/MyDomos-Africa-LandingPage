"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-navy">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 xl:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 text-xl font-heading font-bold text-white tracking-tight flex items-center gap-3">
            <div className="h-11 w-11 rounded-full overflow-hidden border border-gold/40 relative bg-white flex items-center justify-center shadow-inner">
              <Image 
                src="/logo.png" 
                alt="MyDomos Logo" 
                fill 
                className="object-contain scale-150 transition-transform" 
                priority
              />
            </div>
            <span>MyDomos Africa</span>
          </Link>
        </div>
        <div className="flex xl:hidden">
          <button 
            type="button" 
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden xl:flex xl:gap-x-8">
          <Link href="#platform" className="text-sm font-semibold leading-6 text-white hover:text-gold transition-colors">
            The Platform
          </Link>
          <Link href="#tenants" className="text-sm font-semibold leading-6 text-white hover:text-gold transition-colors">
            For Tenants
          </Link>
          <Link href="#landlords" className="text-sm font-semibold leading-6 text-white hover:text-gold transition-colors">
            For Landlords
          </Link>
          <Link href="#agents" className="text-sm font-semibold leading-6 text-white hover:text-gold transition-colors">
            For Agents
          </Link>
        </div>
        <div className="hidden xl:flex xl:flex-1 xl:justify-end gap-x-4">
          <Link href="#investors" className="text-sm flex items-center font-semibold leading-6 text-white hover:text-gold transition-colors mr-4">
            For Investors
          </Link>
          <a href="#waitlist">
            <Button variant="default">Join the Waitlist &rarr;</Button>
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-50 bg-navy/95 backdrop-blur-sm sm:ring-1 sm:ring-gray-900/10 h-screen overflow-y-auto">
          <div className="flex items-center justify-between p-4">
            <Link href="/" className="-m-1.5 p-1.5 text-xl font-heading font-bold text-white tracking-tight flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
              <div className="h-11 w-11 rounded-full overflow-hidden border border-gold/40 relative bg-white flex items-center justify-center shadow-inner">
                <Image 
                  src="/logo.png" 
                  alt="MyDomos Logo" 
                  fill 
                  className="object-contain scale-150 transition-transform" 
                />
              </div>
              <span>MyDomos Africa</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root px-6">
            <div className="-my-6 divide-y divide-gray-700">
              <div className="space-y-2 py-6">
                <Link href="#platform" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-gold" onClick={() => setMobileMenuOpen(false)}>
                  The Platform
                </Link>
                <Link href="#tenants" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-gold" onClick={() => setMobileMenuOpen(false)}>
                  For Tenants
                </Link>
                <Link href="#landlords" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-gold" onClick={() => setMobileMenuOpen(false)}>
                  For Landlords
                </Link>
                <Link href="#agents" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-gold" onClick={() => setMobileMenuOpen(false)}>
                  For Agents
                </Link>
                <Link href="#investors" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-gold" onClick={() => setMobileMenuOpen(false)}>
                  For Investors
                </Link>
              </div>
              <div className="py-6">
                <a href="#waitlist" onClick={() => setMobileMenuOpen(false)} className="block">
                  <Button variant="default" className="w-full">Join the Waitlist &rarr;</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
