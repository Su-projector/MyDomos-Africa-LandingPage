import React from 'react';
import { Button } from '@/components/ui/Button';

const openRoles = [
  {
    tier: 'Equity Contributor / Volunteer / Intern',
    title: 'Head of Product',
    description: 'Own the product roadmap for My Domos Africa. Translate user needs and business strategy into a structured, prioritised build plan.',
  },
  {
    tier: 'Equity Contributor / Volunteer / Intern',
    title: 'Product & UI/UX Designer',
    description: 'Design how DomosHQ and My Domos Africa look, feel, and communicate \u2014 from the brand identity system to every product screen.',
  },
  {
    tier: 'Volunteer / Intern',
    title: 'Graphic Designer',
    description: 'Produce the visual assets that bring the DomosHQ brand to life across marketing, social media, and communications.',
  },
  {
    tier: 'Volunteer / Intern',
    title: 'Social Media Strategist / Manager',
    description: 'Define and manage DomosHQ\u2019s institutional social media presence across LinkedIn, X, and Instagram from founding stage.',
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
            This is a rare invitation. You are being asked to join before the product is built, the brand is launched, or the story is known. That is what founding means.
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
              <p className="text-gray-600 leading-relaxed">
                {role.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contributor CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            We are not building a startup. We are building an institution. We need people who understand the difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="default" size="lg" className="w-full sm:w-auto">
              Apply Now &rarr;
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-navy text-gold">
              View All Open Roles &rarr;
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
