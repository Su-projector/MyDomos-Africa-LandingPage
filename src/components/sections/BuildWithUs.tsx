import React from 'react';
import { Button } from '@/components/ui/Button';

const openRoles = [
  {
    tier: 'Engineering',
    title: 'Frontend Engineer (Next.js / React)',
    description: 'Build the user-facing systems that power rental protection across Africa. You will work on high-performance interfaces, real-time verification flows, and mobile-first design at scale.',
    type: 'Full-time · Remote (Africa)'
  },
  {
    tier: 'Engineering',
    title: 'Backend Engineer (Node.js / Python)',
    description: 'Architect and scale the trust infrastructure layer — identity verification, payment protection, tenancy records, and dispute resolution systems across multiple African markets.',
    type: 'Full-time · Remote (Africa)'
  },
  {
    tier: 'Operations',
    title: 'Country Launcher — Nigeria',
    description: 'Own the go-to-market execution for our primary launch market. You will coordinate agent onboarding, tenant acquisition, landlord partnerships, and field operations across key Nigerian cities.',
    type: 'Full-time · Lagos, Nigeria'
  },
  {
    tier: 'Design',
    title: 'Product Designer',
    description: 'Design the institutional trust experience for millions of Africans entering the formal rental system for the first time. You will define interactions, interfaces, and user flows across web and mobile.',
    type: 'Full-time · Remote (Africa)'
  }
];

export function BuildWithUs() {
  return (
    <section id="build-with-us" className="py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-navy">
            We are building the team that builds this.
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-8 text-gray-600">
            DomosHQ is not hiring for roles. We are recruiting for a mission. If you believe Africa&rsquo;s rental market deserves institutional infrastructure &mdash; we want to hear from you.
          </p>
        </div>

        {/* 2x2 Role Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {openRoles.map((role, idx) => (
            <div 
              key={idx} 
              className="group relative bg-gray-50 rounded-2xl border border-gray-200 p-8 lg:p-10 hover:border-gold/50 hover:shadow-lg transition-all duration-300"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-bold font-heading tracking-wider uppercase mb-5">
                {role.tier}
              </span>
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-navy mb-4 group-hover:text-navy transition-colors">
                {role.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {role.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{role.type}</span>
              </div>
            </div>
          ))}
        </div>

        {/* General Application CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Don&rsquo;t see your role? We are always looking for exceptional people who believe in what we are building.
          </p>
          <Button variant="outline" size="lg" className="bg-navy text-gold">
            Send a General Application &rarr;
          </Button>
        </div>

      </div>
    </section>
  );
}
