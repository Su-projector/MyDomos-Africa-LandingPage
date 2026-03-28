"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, ShieldCheck, Landmark, CheckSquare, ArrowRight, UserCircle2, Building2 } from 'lucide-react';

const trustFlow = [
  {
    from: 'Tenant',
    fromIcon: UserCircle2,
    to: 'Domos Trust Layer',
    toIcon: ShieldCheck,
    action: 'Verifies & Locks Terms',
    description: 'Tenant records identity and agrees to terms securely.'
  },
  {
    from: 'Domos Trust Layer',
    fromIcon: ShieldCheck,
    to: 'Landlord / Agent',
    toIcon: Building2,
    action: 'Secures & Releases',
    description: 'Landlord receives verified commitment and protected rent.'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50 sm:py-32 overflow-hidden border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-navy"
          >
            How Trust is Rebuilt.
          </motion.h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Domos acts as the institutional bridge between all parties.
          </p>
        </div>

        {/* Visual Flow: Tenant -> Domos -> Landlord */}
        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 relative z-10">
            
            {/* Party 1: Tenant */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center w-full lg:w-1/3"
            >
              <div className="h-24 w-24 rounded-full bg-white shadow-premium flex items-center justify-center text-navy mb-6 border border-gray-100">
                <UserCircle2 className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-2">The Tenant</h3>
              <p className="text-sm text-gray-500 font-medium px-4">Verifies agent, signs agreement, and pays into escrow.</p>
            </motion.div>

            {/* Bridge 1: Arrow & Action */}
            <div className="hidden lg:flex flex-col items-center justify-center flex-1">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-gold mb-2"
              >
                <ArrowRight className="h-8 w-8" />
              </motion.div>
              <span className="text-[10px] font-bold text-navy uppercase tracking-widest whitespace-nowrap">Secured by Domos</span>
            </div>

            {/* Center: Domos Trust Layer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center w-full lg:w-1/3 p-8 bg-navy rounded-[3rem] shadow-premium relative"
            >
              <div className="absolute -top-4 -right-4 h-12 w-12 bg-gold rounded-2xl flex items-center justify-center text-navy shadow-lg">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <div className="h-20 w-20 rounded-2xl bg-white/10 flex items-center justify-center text-gold mb-6 backdrop-blur-sm">
                <Landmark className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2">Domos Layer</h3>
              <p className="text-sm text-gold/80 font-medium px-4">Validates identity, locks contract, and holds funds.</p>
            </motion.div>

            {/* Bridge 2: Arrow & Action */}
            <div className="hidden lg:flex flex-col items-center justify-center flex-1">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                className="text-gold mb-2"
              >
                <ArrowRight className="h-8 w-8" />
              </motion.div>
              <span className="text-[10px] font-bold text-navy uppercase tracking-widest whitespace-nowrap">Verified Release</span>
            </div>

            {/* Party 2: Landlord / Agent */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center w-full lg:w-1/3"
            >
              <div className="h-24 w-24 rounded-full bg-white shadow-premium flex items-center justify-center text-navy mb-6 border border-gray-100">
                <Building2 className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-2">Landlord & Agent</h3>
              <p className="text-sm text-gray-500 font-medium px-4">Receives verified rent and documented tenancy record.</p>
            </motion.div>

          </div>

          {/* Background Path (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-gray-100 -z-10"></div>
        </div>

        {/* Closing CTA/Note */}
        <div className="mt-20 text-center">
          <p className="text-navy font-heading font-bold text-lg mb-4 italic">
            &ldquo;One platform. Three parties. Zero fraud.&rdquo;
          </p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-1.5 w-12 bg-navy rounded-full opacity-10"></div>
            ))}
            <div className="h-1.5 w-12 bg-gold rounded-full"></div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-1.5 w-12 bg-navy rounded-full opacity-10"></div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
