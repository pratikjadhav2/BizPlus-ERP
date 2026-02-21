"use client";

import React from "react";

const Problems: React.FC = () => {
  const items = [
    {
      title: "Still Managing Your Business in Excel?",
      text: "Multiple spreadsheets create confusion, data errors, and no real-time visibility for growing SMEs in Delhi.",
    },
    {
      title: "Inventory & Stock Mismatches?",
      text: "Manual stock tracking leads to overstocking, shortages, and delayed deliveries that affect customer satisfaction.",
    },
    {
      title: "Accounting & GST Compliance Issues?",
      text: "Without an integrated accounting system, SMEs struggle with GST billing, tax calculations, and financial accuracy.",
    },
    {
      title: "Sales & CRM Not Properly Managed?",
      text: "Untracked leads, missed follow-ups, and scattered customer data result in lost business opportunities.",
    },
    {
      title: "No Real-Time Business Reports?",
      text: "Without live dashboards and performance insights, business decisions become slow and reactive.",
    },
    {
      title: "Departments Working in Silos?",
      text: "Disconnected sales, inventory, accounts, and operations systems limit growth and scalability for SMEs.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900">
          Common Challenges Faced by SMEs in Delhi
        </h2>

        <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          Without a centralized ERP system for SMEs in Delhi, operational
          inefficiencies, stock errors, and financial mismanagement directly
          impact profitability and long-term business growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-semibold mb-3 text-slate-800">
                {it.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {it.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;