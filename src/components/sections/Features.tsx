import React from 'react';
import { Home, Shield, TrendingUp } from 'lucide-react';

const features = [
  {
    name: 'Smart Property Management',
    description: 'Automate your daily operations, from rent collection to maintenance requests, with our intuitive platform.',
    icon: Home,
  },
  {
    name: 'Data-Driven Investments',
    description: 'Access real-time analytics and market insights to make informed decisions and maximize your ROI.',
    icon: TrendingUp,
  },
  {
    name: 'Secure & Transparent',
    description: 'Built with enterprise-grade security to ensure your data and transactions are always protected.',
    icon: Shield,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-base font-semibold leading-7 text-blue-600">Why Choose Us</h3>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Institutional-Grade Features for Africa&#39;s Rental Market
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-start bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="rounded-lg bg-blue-50 p-3 ring-1 ring-blue-100 mb-6">
                  <feature.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
