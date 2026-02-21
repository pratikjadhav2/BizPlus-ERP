"use client";

import React from "react";

const SMEERPTestimonials: React.FC = () => {
  const data = [
    {
      quote:
        "BizPlusERP helped us organize our inventory, billing, and accounting in one system. As a growing SME in Delhi, we now have better control over daily operations and financial reporting.",
      author: "Ankit Jain",
      role: "Founder, Jain Traders (Delhi)",
    },
    {
      quote:
        "Before implementing BizPlusERP, our sales and accounts were disconnected. Now our CRM, GST billing, and stock management work seamlessly together, saving time and reducing errors.",
      author: "Neha Verma",
      role: "Director, Verma Distributors (Delhi NCR)",
    },
    {
      quote:
        "The real-time dashboards and automated reports have improved our decision-making. BizPlusERP is truly one of the best ERP systems for SMEs in Delhi.",
      author: "Rahul Malhotra",
      role: "Managing Partner, Malhotra Enterprises (Delhi)",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">
            Trusted by SMEs Across Delhi NCR
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            See why small and medium businesses in Delhi choose BizPlusERP
            to streamline operations, improve financial control, and scale
            efficiently with a powerful cloud-based ERP system.
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

export default SMEERPTestimonials;