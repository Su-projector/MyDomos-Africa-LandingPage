import React from 'react';
import { Button } from '@/components/ui/Button';

export function Waitlist() {
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
            <div className="text-center mb-10">
              <h3 className="text-2xl font-heading font-bold text-navy mb-4">Register your early access.</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Join the waitlist to be among the first landlords, tenants, and agents on My Domos Africa. Early access users receive priority onboarding and founding user recognition.
              </p>
            </div>

            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="fullname" className="sr-only">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="block w-full rounded-xl border-0 py-4 px-5 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-navy sm:text-base sm:leading-6 transition-all bg-gray-50/50"
                  placeholder="Enter your full name"
                  style={{ fontSize: '16px' }}
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-xl border-0 py-4 px-5 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-navy sm:text-base sm:leading-6 transition-all bg-gray-50/50"
                  placeholder="Enter your email address"
                  style={{ fontSize: '16px' }}
                />
              </div>

              <div>
                <label htmlFor="role" className="sr-only">User Role</label>
                <select
                  id="role"
                  name="role"
                  className="block w-full rounded-xl border-0 py-4 px-5 text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-navy sm:text-base sm:leading-6 transition-all bg-gray-50/50 appearance-none cursor-pointer"
                  defaultValue=""
                  style={{ fontSize: '16px' }}
                >
                  <option value="" disabled hidden>I am a...</option>
                  <option value="tenant">Tenant</option>
                  <option value="landlord">Landlord</option>
                  <option value="agent">Housing Agent</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="location" className="sr-only">State / City</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="block w-full rounded-xl border-0 py-4 px-5 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-navy sm:text-base sm:leading-6 transition-all bg-gray-50/50"
                  placeholder="Where are you based?"
                  style={{ fontSize: '16px' }}
                />
              </div>

              <div className="pt-2">
                <Button type="submit" variant="default" className="w-full h-14 text-base tracking-wide rounded-xl">
                  Join the Waitlist &rarr;
                </Button>
              </div>
            </form>
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
