"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Shield, Lock, FileCheck, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-32 pb-16 lg:pt-48 lg:pb-32">
      {/* Premium Mesh Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-70"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Strong Impact Copy */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-navy leading-[1.1]">
                Renting in Africa is <span className="text-gold">broken.</span><br />
                Domos fixes it.
              </h1>
              
              <p className="mt-8 text-lg sm:text-xl text-gray-600 max-w-2xl lg:mx-0 leading-relaxed font-medium">
                Africa&apos;s institutional rental trust layer. We eliminate fraud through verified identities, 
                secure escrow payments, and legally-binding digital agreements.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="#waitlist">
                  <Button size="lg" variant="default" className="w-full sm:w-auto px-10 h-16 text-lg shadow-premium">
                    Get Early Access &rarr;
                  </Button>
                </a>
                <a href="#solution">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto px-10 h-16 text-lg bg-navy text-gold border-navy font-bold">
                    See How It Works
                  </Button>
                </a>
              </div>

              {/* Verified Badge */}
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <div className="h-full w-full bg-navy/10 flex items-center justify-center text-[10px] font-bold text-navy">
                        UA
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 font-medium italic">
                  Join <span className="text-navy font-bold">early users</span> building trust in rentals.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Animated Floating UI Cards */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative h-[400px] sm:h-[500px] w-full">
              
              {/* Card 1: Tenant Verified */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-0 right-0 sm:right-12 z-30 glass p-6 rounded-2xl shadow-premium w-64 md:w-72"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Identity</p>
                    <p className="text-sm font-bold text-navy">Tenant Verified</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Escrow Secured */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-1/2 left-0 -translate-y-1/2 z-20 glass p-6 rounded-2xl shadow-premium w-64 md:w-72"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <Lock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Financials</p>
                    <p className="text-sm font-bold text-navy">Rent in Escrow</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Agreement Signed */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-0 right-4 sm:right-24 z-10 glass p-6 rounded-2xl shadow-premium w-64 md:w-72"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <FileCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Legal</p>
                    <p className="text-sm font-bold text-navy">Agreement Signed</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Geometric Shapes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 bg-gold/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute top-1/4 left-3/4 h-32 w-32 bg-navy/5 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
