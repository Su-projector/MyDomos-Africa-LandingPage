"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, XCircle, Search, CreditCard, Users, ShieldAlert } from 'lucide-react';

const painPoints = [
  {
    icon: Users,
    title: 'Fake Agents & Landlords',
    description: 'Fraudulent listings and identity theft lead to millions in lost deposits every year across Africa.',
  },
  {
    icon: AlertCircle,
    title: 'No Enforceable Contracts',
    description: 'Verbal agreements leave both parties with zero legal standing when things go wrong.',
  },
  {
    icon: CreditCard,
    title: 'Payment Disputes',
    description: 'Direct transfers to unverified accounts offer no protection and no audit trail.',
  },
  {
    icon: Search,
    title: 'Shadow Market',
    description: 'A lack of historical data makes it impossible for good tenants or landlords to prove their record.',
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 bg-gray-50 sm:py-32 overflow-hidden border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Visual Pain Representation */}
          <div className="flex-1 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 bg-white rounded-3xl shadow-premium border border-gray-100"
            >
              <div className="absolute -top-4 -left-4 h-12 w-12 bg-red-500 rounded-xl flex items-center justify-center text-white shadow-lg animate-bounce">
                <ShieldAlert className="h-6 w-6" />
              </div>

              <div className="space-y-6">
                <div className="h-4 w-1/3 bg-gray-100 rounded-full"></div>
                <div className="space-y-3">
                  <div className="h-12 w-full bg-red-50 rounded-xl border border-red-100 flex items-center px-4 gap-4 text-red-600">
                    <XCircle className="h-5 w-5 shrink-0" />
                    <div className="h-2 w-full bg-red-200/50 rounded-full"></div>
                  </div>
                  <div className="h-12 w-full bg-red-50 rounded-xl border border-red-100 flex items-center px-4 gap-4 text-red-600 opacity-60">
                    <XCircle className="h-5 w-5 shrink-0" />
                    <div className="h-2 w-full bg-red-200/50 rounded-full"></div>
                  </div>
                </div>
                
                <div className="pt-4 flex flex-col items-center justify-center text-center">
                  <p className="text-navy font-bold text-lg mb-2">Market Exposure</p>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Current rental transactions lack documentation, leaving you 100% exposed to fraud.
                  </p>
                </div>
              </div>

              {/* Floating Warning Icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-8 right-8 p-3 bg-white rounded-xl shadow-lg border border-gray-100"
              >
                <div className="h-8 w-8 text-gold flex items-center justify-center">
                  <AlertCircle className="h-6 w-6" />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side: Copy & Pain Points */}
          <div className="flex-1 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-navy leading-tight">
                Africa&rsquo;s rental market is <span className="text-red-600">failing</span> you.
              </h2>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed font-medium">
                Every transaction today is a gamble. Without infrastructure, there is no accountability.
              </p>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {painPoints.map((point, idx) => (
                  <div key={idx} className="group">
                    <div className="h-10 w-10 rounded-lg bg-navy/5 flex items-center justify-center text-navy mb-4 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                      <point.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-navy mb-2">{point.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
