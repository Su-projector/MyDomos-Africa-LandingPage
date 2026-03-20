"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type FlowAudience = 'Tenant Flow' | 'Landlord Flow' | 'Agent Flow';

const howItWorksData = {
  'Tenant Flow': [
    {
      num: '01',
      title: 'Verify before payment',
      desc: 'Check agents, landlords, and properties using Wahala Map (risk intelligence) and Vouch Registry (fraud and identity records) before committing financially. Know who you are dealing with before any money moves.'
    },
    {
      num: '02',
      title: 'Define and lock agreement',
      desc: 'All rental terms are agreed, documented, and locked before payment is made. Both parties sign the digital agreement within the platform. Nothing is assumed.'
    },
    {
      num: '03',
      title: 'Pay with protection',
      desc: 'Payments are tracked and structured to ensure accountability. Funds are only released when agreed conditions are met. Your money is not at risk.'
    },
    {
      num: '04',
      title: 'Record move-in condition',
      desc: 'Document the property condition at the start of tenancy using the platform. This record protects you throughout the tenancy and at exit.'
    },
    {
      num: '05',
      title: 'Maintain protected tenancy',
      desc: 'All payments, issues, agreements, and communications remain recorded and accessible for the full duration of your tenancy. Everything is documented.'
    }
  ],
  'Landlord Flow': [
    {
      num: '01',
      title: 'Create a tenancy record',
      desc: 'Set up a structured rental record for your property and invite your tenant to sync. No listing required — the platform works alongside however the tenant found your property.'
    },
    {
      num: '02',
      title: 'Agree on terms',
      desc: 'All rental conditions are clearly defined and documented within the platform before any payment is made. Both parties confirm.'
    },
    {
      num: '03',
      title: 'Receive structured payments',
      desc: 'Rent is paid and tracked through secure, organized channels. All payments are documented and traceable by default.'
    },
    {
      num: '04',
      title: 'Manage with records',
      desc: 'All interactions, updates, and communications throughout the tenancy are automatically documented. Nothing is left informal.'
    },
    {
      num: '05',
      title: 'Resolve with evidence',
      desc: 'Disputes are handled using the full recorded history of the tenancy. Every interaction is available as evidence.'
    }
  ],
  'Agent Flow': [
    {
      num: '01',
      title: 'Complete verification',
      desc: 'Establish a verified professional identity on the platform. Distinguish yourself from unverified operators. Your credential is your professional foundation.'
    },
    {
      num: '02',
      title: 'Facilitate structured deals',
      desc: 'Manage rental transactions with proper documentation from offer to execution. Every deal you facilitate is recorded and attributed to your profile.'
    },
    {
      num: '03',
      title: 'Handle agreements digitally',
      desc: 'All agreements are created, signed, and stored within the system. No paperwork. No ambiguity. Full accountability.'
    },
    {
      num: '04',
      title: 'Track all transactions',
      desc: 'Each deal is recorded and attributed to your agent record. Commissions are structured and tracked. Your professional history is formalized.'
    },
    {
      num: '05',
      title: 'Build long-term credibility',
      desc: 'Your performance history contributes to a visible reputation profile that compounds with every completed transaction.'
    }
  ]
};

export function HowItWorks() {
  const [activeFlow, setActiveFlow] = useState<FlowAudience>('Tenant Flow');

  return (
    <section id="how-it-works" className="py-24 bg-gray-50 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-navy">
            Before. During. After. You are covered.
          </h2>
        </div>

        {/* Mobile View: Vertical Stacked Blocks */}
        <div className="md:hidden flex flex-col gap-12">
          {(Object.keys(howItWorksData) as FlowAudience[]).map((flowType) => (
            <div key={flowType} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-navy px-6 py-4">
                <h3 className="text-xl font-heading font-bold text-gold uppercase tracking-wider">
                  {flowType}
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-8 relative">
                  {/* Vertical connecting line */}
                  <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-100 hidden sm:block"></div>
                  
                  {howItWorksData[flowType].map((step) => (
                    <div key={step.num} className="relative z-10 sm:pl-16">
                      <div className="hidden sm:flex absolute left-0 top-1 w-12 h-12 bg-blue-50 text-navy rounded-full items-center justify-center font-heading font-bold ring-4 ring-white">
                        {step.num}
                      </div>
                      <span className="inline-block sm:hidden px-3 py-1 mb-3 rounded border border-gray-200 bg-gray-50 text-navy font-heading font-bold text-sm">
                        Step {step.num}
                      </span>
                      <h4 className="text-lg font-heading font-bold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Tabbed Flow Component */}
        <div className="hidden md:block">
          <div className="flex justify-center border-b border-gray-200 mb-10">
            {(Object.keys(howItWorksData) as FlowAudience[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFlow(tab)}
                className={cn(
                  "px-8 py-4 text-sm font-heading font-bold uppercase tracking-wider transition-colors border-b-2",
                  activeFlow === tab 
                    ? "border-navy text-navy" 
                    : "border-transparent text-gray-400 hover:text-gray-700"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-12 shadow-sm min-h-[500px]">
            <div className="space-y-10 relative">
              {/* Connecting logical track */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-100"></div>

              {howItWorksData[activeFlow].map((step, idx) => (
                <div key={step.num} className="relative pl-20 transition-all duration-500 ease-in-out">
                  <div className={cn(
                    "absolute left-0 top-0.5 w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-lg ring-8 ring-white",
                    idx === 0 ? "bg-navy text-gold" : "bg-gray-100 text-gray-400"
                  )}>
                    {step.num}
                  </div>
                  <h4 className="text-xl font-heading font-bold text-navy mb-3">{step.title}</h4>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
