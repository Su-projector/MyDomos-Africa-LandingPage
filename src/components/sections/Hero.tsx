import React from 'react';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-48 lg:pb-24">
      {/* Subtle background abstract shape */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-60"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold tracking-tight text-navy">
            Renting without MyDomos is renting unprotected.
          </h1>
          
          <div className="mt-8 text-lg sm:text-xl md:text-2xl leading-8 text-gray-700 font-medium">
            <p className="mb-2">Before you pay, verify.</p>
            <p className="mb-2">When you pay, stay protected.</p>
            <p>After you move in, stay in control.</p>
          </div>

          <p className="mt-8 text-base md:text-lg max-w-2xl mx-auto text-gray-600 bg-gray-50 py-3 px-6 rounded-lg inline-block border border-gray-100">
            My Domos Africa (the flagship institution of DomosHQ) provides a structured system that enables tenants, landlords, and agents to verify, agree, and transact with full protection across the rental process.
            <br />
            <span className="block mt-2 font-semibold text-navy italic">Used before, during, and after every rental transaction on My Domos.</span>
          </p>

          <p className="mt-6 text-sm text-gray-500 max-w-3xl mx-auto">
            My Domos Africa integrates with existing rental platforms and the offline market &mdash; adding a layer of verification, protection, and financial structure to every transaction.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#waitlist">
              <Button size="lg" variant="default" className="w-full sm:w-auto">
                Join the Waitlist &rarr;
              </Button>
            </a>
            <a href="#investors">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-navy text-gold">
                For Investors &rarr;
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Trust Signal Strip */}
      <div className="mt-20 border-t border-gray-100 bg-navy relative overflow-hidden flex-none">
        {/* Subtle Map Silhouette equivalent via CSS pattern/opacity */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-700/50 py-8">
            <div className="flex flex-col items-center justify-center p-6 text-center">
              <span className="text-4xl lg:text-5xl font-heading font-bold text-gold">180M+</span>
              <h3 className="mt-2 text-sm text-white font-normal">Nigerians &mdash; primary<br/>launch market</h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 text-center">
              <span className="text-4xl lg:text-5xl font-heading font-bold text-gold">1.4B+</span>
              <h3 className="mt-2 text-sm text-white font-normal">Africans &mdash; continental<br/>ambition</h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 text-center">
              <span className="text-4xl lg:text-5xl font-heading font-bold text-gold">3</span>
              <h3 className="mt-2 text-sm text-white font-normal">User sides: Tenants,<br/>Landlords, Agents</h3>
            </div>
            <div className="flex flex-col items-center justify-center p-6 text-center">
              <span className="text-4xl lg:text-5xl font-heading font-bold text-gold">$0</span>
              <h3 className="mt-2 text-sm text-white font-normal">Institutional coverage<br/>currently available</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
