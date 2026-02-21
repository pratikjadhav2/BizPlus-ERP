"use client";

import React, { useState } from "react";

const ManufacturingERPFAQ: React.FC = () => {
  const faqs = [
    {
      q: "Which is the best ERP for manufacturing in Delhi?",
      a: "The best ERP for manufacturing in Delhi is one that manages production planning, BOM, raw materials, job work, costing, inventory, and GST billing in one system. BizPlusERP is designed specifically for factories and production units across Delhi NCR.",
    },
    {
      q: "How does ERP help manufacturing companies in Delhi?",
      a: "Manufacturing ERP software helps Delhi factories streamline production scheduling, track raw materials, manage work orders, control inventory, and generate real-time costing reports to improve operational efficiency and profitability.",
    },
    {
      q: "Can the ERP system manage BOM and production planning?",
      a: "Yes. BizPlusERP provides complete Bill of Materials (BOM) management, production planning, work order tracking, and capacity control to ensure smooth factory operations.",
    },
    {
      q: "Does the manufacturing ERP support job work and subcontracting?",
      a: "Absolutely. The system allows you to track job cards, subcontracting processes, material movement, and costing for outsourced production activities in Delhi-based manufacturing units.",
    },
    {
      q: "Is the ERP suitable for small and medium manufacturing businesses in Delhi?",
      a: "Yes. BizPlusERP is ideal for SMEs, small-scale industries, and mid-sized manufacturing companies in Delhi looking for affordable and scalable ERP solutions.",
    },
    {
      q: "How long does it take to implement manufacturing ERP in Delhi?",
      a: "Implementation time depends on factory size and complexity, but most Delhi manufacturing businesses can go live within a few weeks with proper data migration, training, and support.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">
            Frequently Asked Questions – Manufacturing ERP in Delhi
          </h2>
          <p className="text-slate-600">
            Find answers to common questions about choosing and implementing
            the best ERP system for manufacturing businesses in Delhi NCR.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`p-5 rounded-2xl bg-slate-50 border transition-all duration-300 ${
                open === i
                  ? "border-sky-200 shadow-md"
                  : "border-transparent"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between"
              >
                <h3 className="font-semibold text-left text-slate-800">
                  {f.q}
                </h3>
                <div className="w-8 h-8 bg-sky-700 text-white rounded-lg flex items-center justify-center font-bold">
                  {open === i ? "-" : "+"}
                </div>
              </button>

              {open === i && (
                <div className="mt-4 text-slate-600 leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingERPFAQ;