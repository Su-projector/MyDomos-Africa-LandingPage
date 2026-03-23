import React from 'react';

const values = ['Trust', 'Order', 'Accountability', 'Inclusivity', 'Dignity'];

export function WhyItMatters() {
  return (
    <section id="why-it-matters" className="py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-navy">
            Building the Infrastructure for Continental Trust
          </h2>
        </div>

        {/* Mission & Vision Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 overflow-hidden rounded-2xl border border-gray-200 shadow-sm mx-auto max-w-5xl">
          <div className="bg-navy p-10 lg:p-14">
            <h3 className="text-gold font-heading font-bold uppercase tracking-widest text-sm mb-6">Our Mission</h3>
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed font-heading">
              To bring order, trust, and financial structure to Africa&rsquo;s broken rental housing market &mdash; protecting landlords, empowering agents, and securing tenants.
            </p>
          </div>
          <div className="bg-navy p-10 lg:p-14">
            <h3 className="text-gold font-heading font-bold uppercase tracking-widest text-sm mb-6">Our Vision</h3>
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed font-heading">
              An Africa where every rental transaction is transparent, every agreement is enforceable, and every African can access housing with dignity.
            </p>
          </div>
        </div>
      </div>

      {/* Brand Values Strip */}
      <div className="mt-20 border-y border-gray-200 bg-navy relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10 px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-8 py-10 xl:grid xl:grid-cols-5 xl:gap-0 xl:divide-x xl:divide-gray-700 xl:py-6">
            {values.map((value) => (
              <div key={value} className="flex justify-center items-center px-4 py-2 md:px-8 md:py-4 xl:px-4 xl:py-6 whitespace-nowrap">
                <span className="text-xl sm:text-2xl xl:text-3xl font-heading font-bold text-gold tracking-wide">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Supporting Body Copy */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <div className="prose prose-lg mx-auto text-gray-600 prose-p:leading-relaxed">
          <p className="mb-8">
            Africa&rsquo;s rental market has operated on informal trust for generations. Verbal agreements. Cash transactions. Unaccountable agents. Zero protection for any party. That is not a feature of the market &mdash; it is a failure of the infrastructure that was never built.
          </p>
          <p className="mb-8 font-semibold text-gray-900">
            DomosHQ exists to build that infrastructure. Permanently, at institutional scale, and across the entire continent.
          </p>
          <p>
            My Domos Africa is not a workaround for a broken system. It is the system that should have always existed. Every rental transaction on My Domos Africa is verified, documented, and protected &mdash; for the tenant, the landlord, and the agent. For the first time.
          </p>
        </div>
      </div>
    </section>
  );
}
