"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Wallet, ShieldCheck, FileCheck } from 'lucide-react';

const previews = [
  {
    title: 'Institutional Dashboard',
    description: 'A holistic view of all rental activities, verification statuses, and historical records.',
    icon: LayoutDashboard,
    type: 'desktop'
  },
  {
    title: 'Protected Payments',
    description: 'Real-time escrow tracking and cryptographically verified transaction receipts.',
    icon: Wallet,
    type: 'mobile'
  },
  {
    title: 'Smart Agreements',
    description: 'Legally-binding contracts with embedded identity verification and audit trails.',
    icon: FileCheck,
    type: 'mobile'
  }
];

export function ProductPreview() {
  return (
    <section id="product-preview" className="py-24 bg-gray-50 sm:py-32 overflow-hidden border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-navy"
          >
            Infrastructure-Grade UI.
          </motion.h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Domos provides institutional-scale tools for the modern rental economy.
          </p>
        </div>

        <div className="space-y-32">
          {previews.map((preview, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
              
              {/* Copy Side */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="h-14 w-14 rounded-2xl bg-navy flex items-center justify-center text-gold shadow-lg mb-8">
                  <preview.icon className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-navy mb-6">{preview.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium italic">
                  &ldquo;{preview.description}&rdquo;
                </p>
                <div className="flex gap-4">
                  <ShieldCheck className="h-6 w-6 text-gold" />
                  <p className="text-sm font-bold text-navy uppercase tracking-widest">
                    Verified Infrastructure
                  </p>
                </div>
              </motion.div>

              {/* UI Mockup Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 relative w-full lg:max-w-none"
              >
                {/* Desktop Frame Container */}
                {preview.type === 'desktop' ? (
                  <div className="relative group perspective-1000">
                    <motion.div 
                      whileHover={{ rotateY: -2, rotateX: 2 }}
                      className="bg-white rounded-2xl shadow-premium border border-gray-100 overflow-hidden"
                    >
                      <div className="h-4 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-1.5 shadow-sm">
                        <div className="h-2 w-2 rounded-full bg-red-400"></div>
                        <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                        <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                      </div>
                      <div className="p-8 h-80 lg:h-96 flex flex-col gap-6">
                        <div className="h-8 w-1/4 bg-blue-50/50 rounded-lg"></div>
                        <div className="grid grid-cols-3 gap-6">
                          <div className="h-32 bg-gray-50/50 rounded-xl border border-gray-100"></div>
                          <div className="h-32 bg-gray-50/50 rounded-xl border border-gray-100"></div>
                          <div className="h-32 bg-gray-50/50 rounded-xl border border-gray-100"></div>
                        </div>
                        <div className="flex-1 bg-navy/5 rounded-xl border border-gray-100"></div>
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  /* Mobile Frame Container */
                  <div className="relative h-[500px] w-full flex justify-center perspective-1000">
                    <motion.div 
                      whileHover={{ scale: 1.05, rotateY: 3 }}
                      transition={{ duration: 0.4 }}
                      className="h-full w-64 md:w-72 bg-navy rounded-[3rem] border-4 border-white shadow-premium p-4 flex flex-col relative z-20 overflow-hidden"
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-1/3 bg-white rounded-b-xl z-30"></div>
                      <div className="flex-1 bg-white rounded-4xl p-6 flex flex-col gap-6">
                         <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                           {preview.icon === Wallet ? <Wallet className="h-5 w-5" /> : <FileCheck className="h-5 w-5" />}
                         </div>
                         <div className="space-y-2">
                           <div className="h-3 w-1/2 bg-gray-100 rounded-full"></div>
                           <div className="h-3 w-3/4 bg-gray-100 rounded-full"></div>
                         </div>
                         <div className="flex-1 bg-blue-50/30 rounded-2xl border border-blue-50"></div>
                         <div className="h-10 w-full bg-navy rounded-xl"></div>
                      </div>
                    </motion.div>
                    
                    {/* Shadow Decorators */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 bg-gold/10 rounded-full blur-3xl -z-10"></div>
                  </div>
                )}
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
