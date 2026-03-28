"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, FileSignature, Landmark, Home, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Verify',
    description: 'We verify the identity and records of the agent, landlord, and property before any money moves.',
    icon: Search,
    color: 'bg-blue-500',
  },
  {
    title: 'Agree',
    description: 'Parties sign a legally-binding digital lease agreement stored securely on our trust layer.',
    icon: FileSignature,
    color: 'bg-gold',
  },
  {
    title: 'Pay Securely',
    description: 'Rent is held in a protected escrow account and only released when all conditions are met.',
    icon: Landmark,
    color: 'bg-navy',
  },
  {
    title: 'Move In Safely',
    description: 'Transition into your new home with a digital record and permanent proof of tenancy.',
    icon: Home,
    color: 'bg-green-600',
  },
];

export function Solution() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    if (!isAutoScrolling) return;

    const container = scrollRef.current;
    if (!container || !container.children[0]) return;

    // Only automate on mobile (width < 768px)
    const checkMobile = () => window.innerWidth < 768;
    if (!checkMobile()) return;

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
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const stopAutoScroll = () => {
    if (isAutoScrolling) setIsAutoScrolling(false);
  };

  return (
    <section id="solution" className="py-24 bg-white sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-navy"
          >
            A Clear Path to Rental Trust.
          </motion.h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Domos replaces informal gambles with a structured, 4-step institutional process.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connecting Line (Desktop/Tablet) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

          <div 
            ref={scrollRef}
            onPointerDown={stopAutoScroll}
            onWheel={stopAutoScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 hide-scrollbar md:grid md:grid-cols-4 md:gap-8 relative z-10"
          >
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="flex-none w-[85vw] md:w-auto snap-center relative flex flex-col items-center text-center group"
                >
                  {/* Step Circle */}
                  <div className={`h-20 w-20 rounded-full ${step.color} flex items-center justify-center text-white shadow-lg mb-8 relative transition-transform group-hover:scale-110`}>
                    <step.icon className="h-10 w-10" />
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 h-8 w-8 bg-white rounded-full border border-gray-100 flex items-center justify-center text-navy font-bold text-sm shadow-md">
                      {idx + 1}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-4">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm lg:text-base px-4">
                    {step.description}
                  </p>
                </motion.div>

                {/* Horizontal Arrow between cards on Mobile only */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden flex items-center justify-center flex-none px-2">
                    <div className="h-12 w-12 rounded-full bg-white shadow-premium flex items-center justify-center text-gold border border-gray-50 group-hover:scale-110 transition-transform animate-pulse">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Final Methodology Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-8 bg-navy rounded-3xl text-center shadow-premium"
        >
          <p className="text-gold font-heading font-bold uppercase tracking-widest text-sm mb-4">The Domos Methodology</p>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white max-w-3xl mx-auto leading-relaxed">
            Verified identity. Legally-binding agreements. Protected payments. 
            <span className="text-gold"> Every single time.</span>
          </h3>
        </motion.div>

      </div>
    </section>
  );
}
