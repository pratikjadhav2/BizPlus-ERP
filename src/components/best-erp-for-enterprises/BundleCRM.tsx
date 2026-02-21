"use client";

import React from "react";
import { Building2, ShieldCheck, BarChart3, Network } from "lucide-react";

const EnterpriseERPSection: React.FC = () => {
  const modules = [
    {
      title: "Multi-Branch & Multi-Entity Management",
      desc: "Centralized Control • Inter-Branch Transactions • Consolidated Reporting",
      icon: <Building2 size={22} strokeWidth={1.8} />,
    },
    {
      title: "Advanced Financial & Compliance Control",
      desc: "Multi-Entity Accounting • GST Compliance • Audit Trails • Regulatory Reporting",
      icon: <ShieldCheck size={22} strokeWidth={1.8} />,
    },
    {
      title: "Enterprise Analytics & BI Dashboards",
      desc: "Real-Time Insights • Executive Reports • Forecasting • KPI Monitoring",
      icon: <BarChart3 size={22} strokeWidth={1.8} />,
    },
    {
      title: "Integrated HR, CRM & Operations",
      desc: "Role-Based Access • Workflow Automation • Department Integration",
      icon: <Network size={22} strokeWidth={1.8} />,
    },
  ];

  return (
    <section className="border-y border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="mb-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-xs font-semibold tracking-wider text-sky-700 uppercase">
              Best ERP for Enterprises in Delhi
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-sky-700 md:text-4xl">
            Scalable Enterprise ERP Software for Large Organizations
          </h2>

          <p className="mx-auto max-w-2xl text-base text-slate-600">
            BizPlusERP is a secure and scalable enterprise ERP platform built
            for large businesses in Delhi. Manage finance, inventory, HR, CRM,
            compliance, and multi-location operations through one fully
            integrated cloud-based system designed for enterprise growth.
          </p>
        </div>

        {/* Module Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {modules.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-700 transition-all duration-300 group-hover:bg-sky-700 group-hover:text-white">
                  {item.icon}
                </div>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-sky-700">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseERPSection;