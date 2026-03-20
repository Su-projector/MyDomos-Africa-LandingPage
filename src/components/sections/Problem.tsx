import React from 'react';

const problems = [
  {
    num: '01',
    title: 'No Documentation',
    description: 'Rental transactions across Africa are verbal, undocumented, and unenforceable. There is no audit trail, no legal recourse, and no accountability for any party on any side of any transaction.',
  },
  {
    num: '02',
    title: 'No Trust Infrastructure',
    description: 'Landlords are exposed to defaulting tenants. Tenants are exposed to fraudulent agents. Agents operate without credential or accountability infrastructure. Zero protection. Everywhere.',
  },
  {
    num: '03',
    title: 'No Verification at Scale',
    description: 'No platform verifies agents or tenants at institutional scale across Africa. This problem has not been solved. The infrastructure does not exist. Until now.',
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 bg-gray-50 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-navy sm:text-5xl">
            Africa&rsquo;s rental market operates on broken trust.
          </h2>
          <p className="mt-4 text-lg md:text-xl leading-8 text-gray-600">
            Every party &mdash; tenant, landlord, and agent &mdash; is exposed on every transaction.
          </p>
        </div>

        {/* 3-Column Card Layout: Horizontal scroll on mobile, grid on desktop */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar md:grid md:grid-cols-3 md:gap-8 md:overflow-visible">
            {problems.map((problem) => (
              <div 
                key={problem.num} 
                className="flex-none w-[85vw] sm:w-[400px] md:w-auto snap-center bg-navy p-8 sm:p-10 rounded-2xl shadow-xl flex flex-col"
              >
                <div className="text-5xl font-heading font-bold text-gold mb-6">
                  {problem.num}
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4">
                  {problem.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed flex-1">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
