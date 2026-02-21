"use client";

import React from "react";

const EnterpriseERPTestimonials: React.FC = () => {
  const data = [
    {
      quote:
        "BizPlusERP helped us centralize operations across our multiple branches in Delhi NCR. From consolidated financial reporting to real-time analytics, our leadership team now has complete enterprise-wide visibility.",
      author: "Rohit Mehra",
      role: "Chief Financial Officer, Mehra Group (Delhi)",
    },
    {
      quote:
        "Before implementing BizPlusERP, our departments operated on separate systems. Now finance, HR, inventory, and sales are fully integrated, improving collaboration and operational efficiency.",
      author: "Priyanka Kapoor",
      role: "Director of Operations, Kapoor Enterprises Ltd. (Delhi NCR)",
    },
    {
      quote:
        "The advanced dashboards, compliance controls, and role-based access have strengthened our governance and reporting accuracy. BizPlusERP is truly one of the best ERP solutions for enterprises in Delhi.",
      author: "Amit Khanna",
      role: "Managing Director, Khanna Global Industries (Delhi)",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">
            Trusted by Leading Enterprises in Delhi NCR
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            See why large organizations across Delhi choose BizPlusERP
            to streamline multi-branch operations, strengthen compliance,
            and drive enterprise-wide digital transformation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <p className="italic text-slate-600 mb-6 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold">
                  {t.author.charAt(0)}
                </div>

                <div>
                  <div className="font-semibold text-slate-800">
                    {t.author}
                  </div>
                  <div className="text-sm text-slate-500">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseERPTestimonials;