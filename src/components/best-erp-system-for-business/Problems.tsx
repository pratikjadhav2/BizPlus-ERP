"use client";

import React from 'react';

const Problems: React.FC = () => {
  const items = [
    { 
      title: 'Still Managing Your Business in Excel?', 
      text: 'Multiple spreadsheets create confusion, errors, and zero real-time visibility for growing businesses in Delhi.' 
    },
    { 
      title: 'Inventory Issues in Your Delhi Warehouse?', 
      text: 'Stock mismatches causing overstock, stockouts, and delayed deliveries affecting customer trust.' 
    },
    { 
      title: 'No Integrated Accounting & GST System?', 
      text: 'Manual accounting processes increase compliance risks and create financial inaccuracies.' 
    },
    { 
      title: 'Sales & CRM Not Properly Managed?', 
      text: 'Untracked leads and missed follow-ups result in lost revenue opportunities.' 
    },
    { 
      title: 'Lack of Real-Time Business Reports?', 
      text: 'Without live dashboards and performance insights, decision-making becomes slow and reactive.' 
    },
    { 
      title: 'Departments Working in Silos?', 
      text: 'Disconnected sales, inventory, accounts, and operations limit scalability and growth.' 
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center mb-3">
          Why Businesses in Delhi Need the Best ERP System
        </h2>
        <p className="text-center text-slate-500 mb-8">
          Without a centralized ERP system for business in Delhi, these operational challenges directly impact profitability and long-term growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="font-bold mb-2">{it.title}</h4>
              <p className="text-sm text-slate-500">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;