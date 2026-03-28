"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, FileText, Globe } from 'lucide-react';

const trustSignals = [
  { icon: Globe, text: "Built for Africa" },
  { icon: ShieldCheck, text: "Secure & Verified" },
  { icon: FileText, text: "Digital Contracts" },
  { icon: UserCheck, text: "KYC Protected" },
];

export function TrustBar() {
  return (
    <div className="bg-navy py-6 sm:py-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-16 lg:gap-x-24">
          {trustSignals.map((signal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 text-gold/90 group"
            >
              <signal.icon className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:scale-110" />
              <span className="text-xs sm:text-sm font-heading font-bold uppercase tracking-widest text-white/90 group-hover:text-gold transition-colors">
                {signal.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
