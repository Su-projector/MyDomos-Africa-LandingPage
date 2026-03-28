"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    if (!isAutoScrolling) return;

    const container = scrollRef.current;
    if (!container || !container.children[0]) return;

    // Only automate on mobile (width < 768px)
    const checkMobile = () => window.innerWidth < 768;
    if (!checkMobile()) return;

    // Get width of first child + gap
    const cardWidth = (container.children[0] as HTMLElement).offsetWidth + 24; 
    let direction = 1;

    const interval = setInterval(() => {
      if (!isAutoScrolling || !checkMobile()) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = container;

      if (scrollLeft + clientWidth >= scrollWidth - 100) {
        direction = -1;
      } else if (scrollLeft <= 20) {
        direction = 1;
      }

      const nextScroll = scrollLeft + (direction * cardWidth);
      
      container.scrollTo({
        left: nextScroll,
        behavior: 'smooth'
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const stopAutoScroll = () => {
    if (isAutoScrolling) setIsAutoScrolling(false);
  };

  return (
    <section id="build-with-us" className="py-24 bg-white sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-navy">
            Join the Team Building Africa&#39;s Rental Trust Layer
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-8 text-gray-600">
            This is a rare invitation. You are being asked to join before the product is built, the brand is launched, or the story is known. That is what founding means.
          </p>
        </div>

        {/* 2x2 Role Grid / Mobile Horizontal Scroll */}
        <div 
          ref={scrollRef}
          onPointerDown={stopAutoScroll}
          onWheel={stopAutoScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 hide-scrollbar md:grid md:grid-cols-2 md:gap-8 md:pb-0"
        >
          {openRoles.map((role, idx) => (
            <React.Fragment key={idx}>
              <div 
                className="flex-none w-[85vw] snap-center md:w-auto group relative bg-gray-50 rounded-2xl border border-gray-200 p-8 lg:p-10 hover:border-gold/50 hover:shadow-lg transition-all duration-300"
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

              {/* Horizontal Arrow between cards on Mobile */}
              {idx < openRoles.length - 1 && (
                <div className="md:hidden flex items-center justify-center flex-none px-2">
                  <div className="h-10 w-10 rounded-full bg-white shadow-premium flex items-center justify-center text-gold border border-gray-50 animate-pulse">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Contributor CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            We are not building a startup. We are building an institution. We need people who understand the difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:official.domoshq@gmail.com" className="w-full sm:w-auto">
              <Button variant="default" size="lg" className="w-full">
                Apply Now &rarr;
              </Button>
            </a>
            <a 
              href="https://docs.google.com/document/d/1fUd1HteFh5yZps2oC5flYsidNC8lGd4e" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto"
            >
              <Button variant="outline" size="lg" className="w-full bg-navy text-gold hover:bg-navy/90 border-gold/30 transition-all">
                View All Open Roles &rarr;
              </Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
