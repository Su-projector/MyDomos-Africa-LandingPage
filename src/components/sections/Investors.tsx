import React from 'react';
import { Button } from '@/components/ui/Button';

const roadmapData = [
  {
    phase: 'Phase 1',
    focus: 'Nigeria Launch \u2014 Rent Shield',
    market: '180M+ addressable population'
  },
  {
    phase: 'Phase 2',
    focus: 'West Africa Expansion',
    market: 'Key regional markets'
  },
  {
    phase: 'Phase 3',
    focus: 'Pan-Africa',
    market: 'Continental trust infrastructure'
  },
  {
    phase: 'Pathway',
    focus: 'CBN Sandbox',
    market: 'Regulatory compliance from day one'
  }
];

export function Investors() {
  return (
    <section id="investors" className="py-24 bg-gray-50 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-navy">
            A multi-billion dollar market with no institutional infrastructure.
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-8 text-gray-700">
            DomosHQ is building the foundational trust layer that Africa&rsquo;s rental economy requires &mdash; and has never had.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Market Opportunity */}
          <div>
            <h3 className="text-sm font-heading font-bold text-gold uppercase tracking-widest mb-8 text-center lg:text-left">Market Opportunity</h3>
            <div className="bg-navy rounded-3xl overflow-hidden shadow-xl text-center lg:text-left">
              <div className="p-8 lg:p-10 border-b border-gray-700/50">
                <h4 className="text-gold font-heading font-bold text-xl mb-4">The Market</h4>
                <p className="text-white leading-relaxed">
                  Africa&rsquo;s rental housing market represents billions of dollars in annual transactions &mdash; the overwhelming majority conducted informally, without documentation, verification, or legal protection. This is not a niche segment. It is the primary mode of housing for hundreds of millions of people.
                </p>
              </div>
              <div className="p-8 lg:p-10">
                <h4 className="text-gold font-heading font-bold text-xl mb-4">The Gap</h4>
                <p className="text-white leading-relaxed">
                  There is no platform operating at institutional scale that credentials agents, verifies rental parties, and protects all three sides of the transaction simultaneously. My Domos Africa integrates with existing rental platforms and the offline market &mdash; adding a layer of verification, protection, and financial structure to every transaction. The infrastructure category does not exist at scale. DomosHQ is building it first.
                </p>
              </div>
            </div>
          </div>

          {/* Roadmap Positioning */}
          <div className="flex flex-col h-full mt-8 lg:mt-0">
            <h3 className="text-sm font-heading font-bold text-gold uppercase tracking-widest mb-8 text-center lg:text-left">DomosHQ Roadmap Positioning</h3>
            <div className="flex-1 bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-navy">
                  <tr>
                    <th scope="col" className="py-5 pl-6 pr-3 text-left text-sm font-heading font-bold text-white tracking-wider w-1/4">Phase</th>
                    <th scope="col" className="px-3 py-5 text-left text-sm font-heading font-bold text-white tracking-wider w-1/2">Focus</th>
                    <th scope="col" className="px-3 py-5 text-left text-sm font-heading font-bold text-white tracking-wider w-1/4">Market</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {roadmapData.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="whitespace-nowrap py-6 pl-6 pr-3 text-base font-heading font-bold text-navy">{item.phase}</td>
                      <td className="px-3 py-6 text-base text-gray-700">{item.focus}</td>
                      <td className="px-3 py-6 text-sm text-gray-500">{item.market}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Investor CTA */}
            <div className="mt-12 bg-white p-8 rounded-3xl border border-gray-200 text-center shadow-sm flex flex-col items-center">
              <p className="text-base text-gray-800 font-medium max-w-md mb-8">
                If you are building a portfolio in African fintech, proptech, or institutional infrastructure &mdash; this is the conversation worth having.
              </p>
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-navy text-gold">
                Request the Investor Brief &rarr;
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
