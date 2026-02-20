"use client";

import React from 'react';

const Problems: React.FC = () => {
  const items = [
    { 
      title: 'Managing Business Operations in Excel?', 
      text: 'Multiple spreadsheets causing confusion, data errors, and lack of real-time visibility for Delhi businesses.' 
    },
    { 
      title: 'Inventory mismatches in your Delhi warehouse?', 
      text: 'Stock differences leading to overstock, stockouts, and delayed customer deliveries.' 
    },
    { 
      title: 'No centralized system for accounting & GST?', 
      text: 'Manual entries increasing compliance risks and financial reporting errors.' 
    },
    { 
      title: 'Sales, CRM & follow-ups not tracked properly?', 
      text: 'Lost leads and missed revenue opportunities due to unstructured processes.' 
    },
    { 
      title: 'No real-time business reports?', 
      text: 'Decision-making becomes slow without clear dashboards and performance insights.' 
    },
    { 
      title: 'Operations scattered across departments?', 
      text: 'Lack of integration between sales, inventory, accounts, and operations affecting growth.' 
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-center mb-3">
          Facing These Business Challenges in Delhi?
        </h3>
        <p className="text-center text-slate-500 mb-8">
          Without the best ERP software in Delhi, these issues directly impact your profits and growth.
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