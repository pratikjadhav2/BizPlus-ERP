"use client";

import React from "react";

const Problems: React.FC = () => {
  const items = [
    {
      title: "Still Managing Production in Excel?",
      text: "Manual spreadsheets create errors in production planning, raw material tracking, and costing for manufacturing businesses in Delhi.",
    },
    {
      title: "Frequent Raw Material & Stock Mismatches?",
      text: "Inaccurate inventory records lead to overstocking, shortages, and unexpected production delays in your factory.",
    },
    {
      title: "No Proper BOM & Production Planning System?",
      text: "Without structured Bill of Materials (BOM) and planning tools, manufacturing processes become inefficient and costly.",
    },
    {
      title: "Job Work & Work Orders Not Tracked?",
      text: "Unmanaged job cards and subcontracting activities cause delays, wastage, and accountability issues.",
    },
    {
      title: "Lack of Real-Time Factory Reports?",
      text: "Without live dashboards for production, costing, and inventory, decision-making becomes reactive instead of strategic.",
    },
    {
      title: "Disconnected Production, Accounts & Sales?",
      text: "When manufacturing, inventory, accounting, and billing systems are not integrated, scalability and profit margins suffer.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900">
          Manufacturing Challenges Faced by Delhi Factories
        </h2>

        <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          Without a centralized manufacturing ERP system in Delhi, production
          delays, stock errors, and financial inefficiencies directly impact
          profitability and long-term factory growth.
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