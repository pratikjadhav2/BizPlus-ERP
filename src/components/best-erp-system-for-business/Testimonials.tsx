"use client";

import React from "react";

const DelhiERPTestimonials: React.FC = () => {
  const data = [
    {
      quote:
        "After implementing BizPlusERP, our Delhi operations became fully automated. From sales tracking to GST billing, everything is now centralized and error-free. We reduced manual work by nearly 40%.",
      author: "Rohit Bansal",
      role: "Operations Head, Bansal Industrial Supplies (Delhi)",
    },
    {
      quote:
        "We evaluated multiple ERP solutions in Delhi, but BizPlusERP stood out for its simplicity and complete business integration. Our inventory, accounts, and CRM now work seamlessly together.",
      author: "Priya Mehta",
      role: "CEO, Mehta Enterprises (Delhi NCR)",
    },
    {
      quote:
        "The real-time dashboards and financial reports gave us better control over profitability. BizPlusERP is truly one of the best ERP systems for growing businesses in Delhi.",
      author: "Amit Verma",
      role: "Managing Director, Verma TechnoFab (Delhi)",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">
            Trusted by Growing Businesses in Delhi
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            See why business owners across Delhi choose BizPlusERP to
            streamline operations, improve financial control, and scale
            efficiently.
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

export default DelhiERPTestimonials;