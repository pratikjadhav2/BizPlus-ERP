"use client";

import React from "react";

const SMEERPBenefits: React.FC = () => {
  const items = [
    "Complete Visibility Across Your SME Operations",
    "Accurate Inventory & Stock Control",
    "GST-Compliant Billing & Simplified Accounting",
    "Integrated CRM & Sales Management",
    "Automated Workflows & Task Management",
    "Improved Cash Flow & Higher Profit Margins",
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">
            Why SMEs in Delhi Choose BizPlusERP
          </h2>

          <p className="max-w-2xl mx-auto text-slate-600">
            Recognized as one of the best ERP systems for SMEs in Delhi,
            BizPlusERP helps small and medium businesses streamline operations,
            improve financial control, and scale efficiently with complete
            business automation.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-slate-50 text-center border border-slate-100 hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-semibold text-lg text-slate-700">
                {it}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SMEERPBenefits;