"use client";

import React from "react";

const ManufacturingERPTestimonials: React.FC = () => {
  const data = [
    {
      quote:
        "BizPlusERP completely transformed our production planning process. We now manage BOM, raw material tracking, and job work efficiently across our Delhi factory. Production delays have reduced significantly.",
      author: "Sanjay Gupta",
      role: "Plant Head, Gupta Engineering Works (Delhi)",
    },
    {
      quote:
        "Before BizPlusERP, we struggled with inventory mismatches and manual costing. Now our manufacturing accounting, GST billing, and warehouse management are fully automated and accurate.",
      author: "Ritika Sharma",
      role: "Director, Sharma Metal Industries (Delhi NCR)",
    },
    {
      quote:
        "The real-time production dashboards and costing reports gave us complete visibility into profitability. BizPlusERP is truly the best ERP for manufacturing businesses in Delhi.",
      author: "Manoj Khurana",
      role: "Managing Partner, Khurana Fabrication Pvt. Ltd. (Delhi)",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">
            Trusted by Manufacturing Companies in Delhi
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            See why factories and production units across Delhi NCR choose
            BizPlusERP to streamline manufacturing operations, control costs,
            and improve production efficiency.
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

export default ManufacturingERPTestimonials;