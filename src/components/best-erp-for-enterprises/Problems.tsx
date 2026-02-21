"use client";

import React from "react";

const Problems: React.FC = () => {
  const items = [
    {
      title: "Managing Multiple Branches Without Centralized Control?",
      text: "Disconnected systems across departments and locations create data silos, reporting delays, and operational inefficiencies for enterprises in Delhi.",
    },
    {
      title: "Complex Financial & Compliance Requirements?",
      text: "Large organizations struggle with multi-entity accounting, GST compliance, audits, and regulatory reporting without an integrated ERP platform.",
    },
    {
      title: "Lack of Real-Time Enterprise Visibility?",
      text: "Without consolidated dashboards and analytics, leadership teams cannot access accurate insights for strategic decision-making.",
    },
    {
      title: "Integration Challenges Across Departments?",
      text: "Finance, HR, supply chain, sales, and operations often operate on separate systems, limiting enterprise-wide collaboration.",
    },
    {
      title: "Scalability & Performance Limitations?",
      text: "Legacy software and disconnected tools restrict growth, automation, and expansion across new markets or branches.",
    },
    {
      title: "Data Security & Access Control Concerns?",
      text: "Enterprises require role-based access, data encryption, and secure cloud infrastructure to protect sensitive business information.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900">
          Enterprise Challenges Faced by Large Businesses in Delhi
        </h2>

        <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          Without a scalable enterprise ERP system in Delhi, operational
          complexity, compliance risks, and data silos can directly impact
          efficiency, profitability, and long-term growth.
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