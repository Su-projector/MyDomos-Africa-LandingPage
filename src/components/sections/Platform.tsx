"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type Audience = 'Tenants' | 'Landlords' | 'Agents';

const platformData = {
  Tenants: {
    label: 'FOR TENANTS',
    headline: 'Avoid blind payments. Stay protected.',
    description: 'My Domos Africa works alongside existing rental platforms to verify, protect, and manage rental transactions before, during, and after payment.',
    features: [
      'Verify agents, landlords, and properties before payment',
      'Identify risk zones and fraud patterns using Wahala Map',
      'Search phone numbers and identities using Vouch Registry',
      'Review and lock agreements before signing',
      'Pay through structured, protected channels with accountability conditions',
      'Store rental records and evidence securely',
      'Formal rental history that follows your profile',
      'Shared tenancy tools for co-renters'
    ],
    cta: 'Join the Tenant Waitlist'
  },
  Landlords: {
    label: 'FOR LANDLORDS',
    headline: 'Operate with structure and visibility.',
    description: 'Create and manage tenancy records for existing rental agreements. Sync with tenants after property discovery. Manage your property with institutional tools.',
    features: [
      'Verify tenant identity and rental history',
      'Create structured tenancy records and invite your tenant to sync',
      'Track rent payments transparently through documented channels',
      'Maintain documented interaction history across the tenancy lifecycle',
      'Enforceable tenancy agreements with legal standing',
      'Manage disputes with full recorded evidence'
    ],
    cta: 'Join the Landlord Waitlist'
  },
  Agents: {
    label: 'FOR HOUSING AGENTS',
    headline: 'Build credibility through structure.',
    description: 'Establish a verified professional identity. Facilitate rental transactions with documentation. Build a reputation that compounds through every deal.',
    features: [
      'Establish verified professional identity and credential',
      'Transaction facilitation tools for end-to-end deal management',
      'Manage rental agreements digitally with full documentation',
      'Verified identity and reputation system',
      'Track transactions and build a long-term performance profile',
      'Compliance with emerging regulatory standards'
    ],
    cta: 'Join the Agent Waitlist'
  }
};

export function Platform() {
  const [activeTab, setActiveTab] = useState<Audience>('Tenants');

  return (
    <section id="platform" className="py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-navy">
            One system. Full control over your rental.
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-700 font-medium">
            My Domos Africa does not help users find houses. It ensures they are protected when dealing with any rental they have already found.
          </p>
          <div className="mt-6 bg-blue-50/50 border border-blue-100 rounded-xl p-6 sm:p-8 inline-block text-left">
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-semibold">
              <span className="text-navy">My Domos Africa protects you</span> before payment (verification), during the transaction (agreements and escrow), and after move-in (records, disputes, and tenancy management).
            </p>
          </div>
        </div>

        {/* Desktop Interactive Tabs / Mobile Vertical Stack */}
        <div className="mt-16">
          
          {/* Mobile View: Vertical Stack */}
          <div className="flex flex-col gap-8 md:hidden">
            {(Object.keys(platformData) as Audience[]).map((key) => {
              const data = platformData[key];
              return (
                <div key={key} className="bg-gray-50 rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <span className="inline-block px-3 py-1 rounded-full bg-navy text-gold text-xs font-bold font-heading tracking-wider mb-4">
                    {data.label}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-navy mb-3">{data.headline}</h3>
                  <p className="text-gray-600 mb-6">{data.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {data.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-gold mr-3 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="default" className="w-full">{data.cta} &rarr;</Button>
                </div>
              );
            })}
          </div>

          {/* Desktop View: Interactive Tabs */}
          <div className="hidden md:block">
            <div className="flex justify-center border-b border-gray-200 mb-8">
              {(Object.keys(platformData) as Audience[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-8 py-4 text-lg font-heading font-bold transition-colors border-b-2",
                    activeTab === tab 
                      ? "border-navy text-navy" 
                      : "border-transparent text-gray-400 hover:text-gray-700"
                  )}
                >
                  For {tab}
                </button>
              ))}
            </div>

            <div className="bg-gray-50 rounded-3xl border border-gray-200 p-10 lg:p-14 shadow-sm min-h-[500px]">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-1">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-navy text-gold text-sm font-bold font-heading tracking-wider mb-6">
                    {platformData[activeTab].label}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-bold font-heading text-navy mb-6">
                    {platformData[activeTab].headline}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-10">
                    {platformData[activeTab].description}
                  </p>
                  <Button variant="default" size="lg">{platformData[activeTab].cta} &rarr;</Button>
                </div>
                
                <div className="flex-1 lg:border-l lg:border-gray-200 lg:pl-12">
                  <ul className="space-y-4">
                    {platformData[activeTab].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-base text-gray-700">
                        <CheckCircle2 className="h-6 w-6 text-gold mr-4 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
