"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, FileSignature, UserCheck, ShieldCheck } from 'lucide-react';

const featureList = [
  {
    name: 'Escrow Payments',
    description: 'Rent is held in a secure, protected account and only released when move-in conditions are verified.',
    icon: Landmark,
  },
  {
    name: 'Digital Agreements',
    description: 'Legally-binding, cryptographically-stored lease agreements that protect every party on all sides.',
    icon: FileSignature,
  },
  {
    name: 'Tenant Verification',
    description: 'Instant, institutional-grade KYC and rental history checks to ensure you move in with the right people.',
    icon: UserCheck,
  },
  {
    name: 'Dispute Protection',
    description: 'An automated, evidence-based mediation layer that resolves rental disagreements without the stress.',
    icon: ShieldCheck,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white sm:py-32 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-navy"
          >
            Infrastructure-Grade Protection.
          </motion.h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Every feature on Domos is designed to build trust where it was previously non-existent.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featureList.map((feature, idx) => (
              <motion.div 
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="flex flex-col items-start bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-premium transition-all group"
              >
                <div className="rounded-2xl bg-white p-4 shadow-sm mb-6 group-hover:bg-navy group-hover:text-gold transition-colors">
                  <feature.icon className="h-7 w-7 text-navy group-hover:text-gold" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-heading font-bold leading-7 text-navy">
                  {feature.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-500 font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
