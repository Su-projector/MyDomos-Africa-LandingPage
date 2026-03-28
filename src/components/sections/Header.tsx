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
                alt="My Domos Africa - Institutional Rental Trust Layer Logo" 
                fill 
                sizes="44px"
                className="object-contain scale-110 transition-transform" 
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
        <div className="hidden xl:flex xl:items-center">
          <div className="flex xl:gap-x-8 mr-12 border-r border-white/10 pr-12">
            <Link href="#platform" className="text-sm whitespace-nowrap font-semibold leading-6 text-white hover:text-gold transition-colors">
              The Platform
            </Link>
            <a href="#tenants" className="text-sm whitespace-nowrap font-semibold leading-6 text-white hover:text-gold transition-colors">
              For Tenants
            </a>
            <a href="#landlords" className="text-sm whitespace-nowrap font-semibold leading-6 text-white hover:text-gold transition-colors">
              For Landlords
            </a>
            <a href="#agents" className="text-sm whitespace-nowrap font-semibold leading-6 text-white hover:text-gold transition-colors">
              For Agents
            </a>
            <Link href="#investors" className="text-sm whitespace-nowrap font-semibold leading-6 text-white hover:text-gold transition-colors">
              For Investors
            </Link>
          </div>
          <div className="flex xl:items-center xl:gap-x-8">
            <Link href="#build-with-us" className="text-sm whitespace-nowrap font-semibold leading-6 text-white hover:text-gold transition-colors">
              Build With Us
            </Link>
            <a href="#waitlist" className="shrink-0">
              <Button variant="default">Join the Waitlist &rarr;</Button>
            </a>
          </div>
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
                  alt="My Domos Africa - Institutional Rental Trust Layer Logo" 
                  fill 
                  sizes="44px"
                  className="object-contain scale-110 transition-transform" 
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
                <a href="#tenants" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-gold" onClick={() => setMobileMenuOpen(false)}>
                  For Tenants
                </a>
                <a href="#landlords" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-gold" onClick={() => setMobileMenuOpen(false)}>
                  For Landlords
                </a>
                <a href="#agents" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-gold" onClick={() => setMobileMenuOpen(false)}>
                  For Agents
                </a>
                <Link href="#investors" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-gold" onClick={() => setMobileMenuOpen(false)}>
                  For Investors
                </Link>
                <Link href="#build-with-us" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-gold" onClick={() => setMobileMenuOpen(false)}>
                  Build With Us
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
