"use client";

import React, { useState } from "react";

const DelhiERPFAQ: React.FC = () => {
  const faqs = [
    {
      q: "Which is the best ERP system for businesses in Delhi?",
      a: "The best ERP system for Delhi businesses is one that integrates sales, accounting, inventory, CRM, and reporting into a single platform. BizPlusERP is designed specifically for Delhi-based SMEs, traders, distributors, and manufacturers looking for complete business automation.",
    },
    {
      q: "How much does ERP software cost in Delhi?",
      a: "ERP software pricing in Delhi depends on business size, number of users, and required modules. BizPlusERP offers flexible and affordable pricing models suitable for small and mid-sized companies without heavy upfront investment.",
    },
    {
      q: "Is cloud-based ERP better for Delhi businesses?",
      a: "Yes. Cloud ERP allows Delhi businesses to access data anytime, from multiple locations, without maintaining physical servers. It ensures secure backups, real-time reporting, and remote accessibility.",
    },
    {
      q: "Can ERP software manage GST billing and compliance?",
      a: "Absolutely. BizPlusERP supports GST billing, automated tax calculations, ledger management, and financial reporting, helping Delhi companies stay compliant with Indian tax regulations.",
    },
    {
      q: "Does the ERP system support multi-location operations in Delhi NCR?",
      a: "Yes. The system allows centralized control over multiple warehouses, offices, or retail branches across Delhi NCR with real-time inventory and financial visibility.",
    },
    {
      q: "How long does it take to implement ERP for a business in Delhi?",
      a: "Implementation time depends on business complexity, but most small and mid-sized businesses can go live within a few weeks with proper data migration and team training support.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">
            Frequently Asked Questions – Best ERP Software in Delhi
          </h2>
          <p className="text-slate-600">
            Get answers to common questions about choosing and implementing
            ERP software for businesses in Delhi NCR.
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

export default DelhiERPFAQ;