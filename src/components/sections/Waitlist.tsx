"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm as useFormspree } from '@formspree/react';
import { Button } from '@/components/ui/Button';
import { waitlistSchema, type WaitlistInput } from '@/lib/schemas/waitlist';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

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

  // Reset local form if Formspree succeeds (though we usually show success UI)
  React.useEffect(() => {
    if (state.succeeded) {
      reset();
    }
  }, [state.succeeded, reset]);

  return (
    <section id="waitlist" className="py-24 bg-navy sm:py-32 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white mb-6">
            My Domos Africa is coming. <span className="block mt-2 text-gold">Be among the first Africans to rent with institutional protection.</span>
          </h2>
        </div>

        {/* Waitlist Form Container */}
        <div className="mx-auto max-w-xl bg-white rounded-4xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="px-6 py-10 sm:px-12 sm:py-14">
            
            {state.succeeded ? (
              <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                <div className="flex justify-center mb-6">
                  <CheckCircle2 className="h-16 w-16 text-green-500" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">Welcome to the Club!</h3>
                <p className="text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
                  Thank you for joining! You&rsquo;ve been added to our early-access list. We&rsquo;ll be in touch soon.
                </p>
                <div className="mt-10">
                  <Button 
                    variant="outline" 
                    onClick={() => window.location.reload()}
                    className="border-navy text-navy hover:bg-navy/5"
                  >
                    Register another user
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-heading font-bold text-navy mb-4">Register your early access.</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Join the waitlist to be among the first landlords, tenants, and agents on My Domos Africa. Early access users receive priority onboarding.
                  </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                  {/* Formspree Server Errors (Fallback) */}
                  {state.errors && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex items-center gap-3 text-red-700 text-sm animate-in slide-in-from-top-2 duration-300">
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      <p>Something went wrong with the submission. Please try again.</p>
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullname" className="sr-only">Full Name</label>
                    <input
                      {...register('fullname')}
                      id="fullname"
                      className={`block w-full rounded-xl border-0 py-4 px-5 text-gray-900 ring-1 ring-inset ${errors.fullname ? 'ring-red-500 focus:ring-red-500' : 'ring-gray-200 focus:ring-navy'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-base sm:leading-6 transition-all bg-gray-50/50`}
                      placeholder="Enter your full name"
                      style={{ fontSize: '16px' }}
                    />
                    {errors.fullname && (
                      <p className="text-xs font-medium text-red-500 px-2">{errors.fullname.message}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className={`block w-full rounded-xl border-0 py-4 px-5 text-gray-900 ring-1 ring-inset ${errors.email ? 'ring-red-500 focus:ring-red-500' : 'ring-gray-200 focus:ring-navy'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-base sm:leading-6 transition-all bg-gray-50/50`}
                      placeholder="Enter your email address"
                      style={{ fontSize: '16px' }}
                    />
                    {errors.email && (
                      <p className="text-xs font-medium text-red-500 px-2">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Role Select */}
                  <div className="space-y-1.5">
                    <label htmlFor="role" className="sr-only">User Role</label>
                    <div className="relative">
                      <select
                        {...register('role')}
                        id="role"
                        className={`block w-full rounded-xl border-0 py-4 px-5 text-gray-900 ring-1 ring-inset ${errors.role ? 'ring-red-500 focus:ring-red-500' : 'ring-gray-200 focus:ring-navy'} focus:ring-2 focus:ring-inset sm:text-base sm:leading-6 transition-all bg-gray-50/50 appearance-none cursor-pointer`}
                        style={{ fontSize: '16px' }}
                      >
                        <option value="" disabled hidden>I am a...</option>
                        <option value="tenant">Tenant</option>
                        <option value="landlord">Landlord</option>
                        <option value="agent">Housing Agent</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    {errors.role && (
                      <p className="text-xs font-medium text-red-500 px-2">{errors.role.message}</p>
                    )}
                  </div>

                  {/* Location Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="location" className="sr-only">State / City</label>
                    <input
                      {...register('location')}
                      id="location"
                      className={`block w-full rounded-xl border-0 py-4 px-5 text-gray-900 ring-1 ring-inset ${errors.location ? 'ring-red-500 focus:ring-red-500' : 'ring-gray-200 focus:ring-navy'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-base sm:leading-6 transition-all bg-gray-50/50`}
                      placeholder="Where are you based?"
                      style={{ fontSize: '16px' }}
                    />
                    {errors.location && (
                      <p className="text-xs font-medium text-red-500 px-2">{errors.location.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      variant="default" 
                      className="w-full h-14 text-base tracking-wide rounded-xl flex items-center justify-center gap-2"
                      disabled={state.submitting}
                    >
                      {state.submitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Joining...</span>
                        </>
                      ) : (
                        <>
                          <span>Join the Waitlist</span>
                          <span>&rarr;</span>
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>
          
          {/* Privacy Note */}
          <div className="bg-gray-50 px-6 py-6 sm:px-12 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500 leading-relaxed" style={{ fontSize: '14px' }}>
              We will only use your information to send updates about My Domos Africa. Your data is never sold or shared with third parties.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
