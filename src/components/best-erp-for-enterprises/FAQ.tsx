"use client";

import React, { useState } from "react";

const EnterpriseERPFAQ: React.FC = () => {
  const faqs = [
    {
      q: "Which is the best ERP for enterprises in Delhi?",
      a: "The best ERP for enterprises in Delhi is one that supports multi-branch operations, advanced financial control, compliance management, and real-time analytics. BizPlusERP is built specifically for large organizations across Delhi NCR requiring scalability and centralized control.",
    },
    {
      q: "How does enterprise ERP improve operational efficiency?",
      a: "Enterprise ERP integrates finance, HR, inventory, CRM, and operations into a single system. This eliminates data silos, improves collaboration across departments, and enables leadership teams to make informed strategic decisions.",
    },
    {
      q: "Can the ERP system manage multi-location and multi-entity businesses?",
      a: "Yes. BizPlusERP allows enterprises in Delhi to manage multiple branches, subsidiaries, and entities with consolidated financial reporting and centralized data control.",
    },
    {
      q: "Does the enterprise ERP support compliance and audit requirements?",
      a: "Absolutely. The system includes GST compliance, audit trails, role-based access, regulatory reporting, and secure data management to meet enterprise-level governance standards.",
    },
    {
      q: "Is the ERP platform scalable for growing enterprises?",
      a: "Yes. BizPlusERP is designed to scale as your organization expands into new markets, branches, or business verticals without performance limitations.",
    },
    {
      q: "How long does enterprise ERP implementation take?",
      a: "Implementation timelines depend on organizational complexity, integrations, and customization needs. Large enterprises typically complete deployment in structured phases with dedicated support and training.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">
            Frequently Asked Questions – Enterprise ERP in Delhi
          </h2>
          <p className="text-slate-600">
            Get answers to common questions about choosing and implementing
            the best ERP solution for enterprises in Delhi NCR.
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

export default EnterpriseERPFAQ;