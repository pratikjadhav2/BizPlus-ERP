"use client";

import React, { useState } from "react";

const SMEERPFAQ: React.FC = () => {
  const faqs = [
    {
      q: "Which is the best ERP system for SMEs in Delhi?",
      a: "The best ERP system for SMEs in Delhi is one that integrates inventory, accounting, GST billing, CRM, payroll, and reporting into a single platform. BizPlusERP is designed specifically for small and medium businesses across Delhi NCR.",
    },
    {
      q: "How does ERP software help small and medium businesses?",
      a: "ERP software helps SMEs streamline daily operations, manage stock, automate billing, track sales, and generate real-time financial reports, improving efficiency and profitability.",
    },
    {
      q: "Is BizPlusERP affordable for SMEs in Delhi?",
      a: "Yes. BizPlusERP offers cost-effective and scalable pricing plans suitable for startups, small businesses, and growing medium enterprises in Delhi.",
    },
    {
      q: "Can the ERP system manage GST billing and compliance?",
      a: "Absolutely. The system provides GST-compliant invoicing, automated tax calculations, ledger management, and financial reporting to ensure full compliance for Delhi-based SMEs.",
    },
    {
      q: "Does the ERP support multi-branch or multi-location businesses?",
      a: "Yes. BizPlusERP allows SMEs in Delhi NCR to manage multiple offices, warehouses, or branches from a centralized dashboard with real-time data access.",
    },
    {
      q: "How long does it take to implement ERP for an SME in Delhi?",
      a: "Implementation time depends on business size and complexity, but most SMEs can go live within a few weeks with proper onboarding, data migration, and training support.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">
            Frequently Asked Questions – SME ERP in Delhi
          </h2>
          <p className="text-slate-600">
            Find answers to common questions about choosing and implementing
            the best ERP system for SMEs in Delhi NCR.
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

export default SMEERPFAQ;