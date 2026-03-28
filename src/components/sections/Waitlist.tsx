"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm as useFormspree } from '@formspree/react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { waitlistSchema, type WaitlistInput } from '@/lib/schemas/waitlist';
import { CheckCircle2, AlertCircle, Loader2, Users, Star, ArrowRight } from 'lucide-react';

type FormData = WaitlistInput;

export function Waitlist() {
  const [state, sendToFormspree] = useFormspree("mwvrgkey");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: FormData) => {
    await sendToFormspree(data);
  };

  React.useEffect(() => {
    if (state.succeeded) {
      reset();
    }
  }, [state.succeeded, reset]);

  return (
    <section id="waitlist" className="py-24 bg-navy sm:py-32 relative overflow-hidden">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.1),transparent)] pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-linear-to-r from-transparent via-gold/10 to-transparent"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Impact Copy & Social Proof */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white mb-8">
                The future of renting in Africa <span className="text-gold">starts here.</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-xl lg:mx-0 font-medium leading-relaxed">
                Join the foundational layer of Africa&apos;s digital rental economy. 
                Secure your spot as an early participant in the trust infrastructure.
              </p>

              {/* Social Proof Items */}
              <div className="space-y-6">
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-navy bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-400">
                        EA
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-bold text-gray-300">
                    Join <span className="text-gold">1,000+ early supporters</span> building trust.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md lg:mx-0">
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl">
                    <Star className="h-5 w-5 text-gold" />
                    <span className="text-sm font-bold text-white uppercase tracking-widest">Early Access</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl">
                    <Users className="h-5 w-5 text-gold" />
                    <span className="text-sm font-bold text-white uppercase tracking-widest">Priority Sync</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: High-Fidelity Form */}
          <div className="flex-1 w-full max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] shadow-premium p-8 sm:p-12 relative"
            >
              {state.succeeded ? (
                <div className="text-center py-10 animate-fade-in">
                  <div className="flex justify-center mb-6">
                    <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-navy mb-4">You&apos;re on the list!</h3>
                  <p className="text-gray-600 font-medium mb-10">
                    We&apos;ll be in touch with your priority onboarding details soon.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => window.location.reload()}
                    className="w-full h-14 border-navy text-navy font-bold rounded-2xl"
                  >
                    Register Another Account
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-10 text-center lg:text-left">
                    <h3 className="text-2xl font-heading font-bold text-navy mb-2 tracking-tight">Register Early Access</h3>
                    <p className="text-gray-500 font-medium text-sm">Priority onboarding for all waitlist members.</p>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    {state.errors && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex items-center gap-3 text-red-700 text-xs">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <p>Something went wrong. Please check your data or try again.</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <input
                          {...register('fullname')}
                          className="block w-full rounded-2xl border-0 py-4 px-5 text-navy ring-1 ring-inset ring-gray-100 focus:ring-2 focus:ring-navy transition-all bg-gray-50/50 placeholder:text-gray-400 font-medium"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <input
                          {...register('email')}
                          type="email"
                          className="block w-full rounded-2xl border-0 py-4 px-5 text-navy ring-1 ring-inset ring-gray-100 focus:ring-2 focus:ring-navy transition-all bg-gray-50/50 placeholder:text-gray-400 font-medium"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <select
                        {...register('role')}
                        className="block w-full rounded-2xl border-0 py-4 px-5 text-navy ring-1 ring-inset ring-gray-100 focus:ring-2 focus:ring-navy transition-all bg-gray-50/50 font-medium appearance-none cursor-pointer"
                      >
                        <option value="" disabled hidden>I am a...</option>
                        <option value="tenant">Tenant</option>
                        <option value="landlord">Landlord</option>
                        <option value="agent">Housing Agent</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <input
                        {...register('location')}
                        className="block w-full rounded-2xl border-0 py-4 px-5 text-navy ring-1 ring-inset ring-gray-100 focus:ring-2 focus:ring-navy transition-all bg-gray-50/50 placeholder:text-gray-400 font-medium"
                        placeholder="Current Location (City/State)"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-16 text-lg font-bold rounded-2xl shadow-premium mt-6"
                      disabled={state.submitting}
                    >
                      {state.submitting ? <Loader2 className="animate-spin" /> : "Secure My Access"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest font-bold mt-6">
                      Institutional Protection Guaranteed
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
