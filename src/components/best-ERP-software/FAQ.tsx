"use client";

import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    { 
      q: 'Why should Delhi businesses invest in ERP software?', 
      a: 'Delhi NCR businesses operate in a highly competitive market. ERP software helps centralize inventory, accounting, sales, and operations into one system, improving efficiency and profitability.' 
    },
    { 
      q: 'Is BizPlusERP suitable for small and mid-sized companies in Delhi?', 
      a: 'Yes, BizPlusERP is designed for SMEs, traders, distributors, and manufacturers. It scales as your business grows and does not require heavy IT infrastructure.' 
    },
    { 
      q: 'Can the ERP system handle multi-branch operations across Delhi NCR?', 
      a: 'Absolutely. Our ERP allows you to manage multiple warehouses, offices, or retail branches from a single centralized dashboard.' 
    },
    { 
      q: 'Does the ERP support inventory and warehouse management?', 
      a: 'Yes, the system provides real-time inventory tracking, stock valuation, warehouse control, and automated reorder alerts to prevent stockouts or overstocking.' 
    },
    { 
      q: 'How secure is our business data in the ERP system?', 
      a: 'BizPlusERP uses secure cloud infrastructure with role-based access, encrypted data storage, and regular backups to ensure complete data protection.' 
    },
    { 
      q: 'How can I get a demo of the best ERP software in Delhi?', 
      a: 'You can book a free consultation or request a live demo. Our team will understand your business requirements and show how the ERP can streamline your operations.' 
    }
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-center mb-6">
          Frequently Asked Questions – Delhi NCR
        </h3>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className={`p-4 rounded-2xl bg-slate-50 border ${open === i ? 'border-sky-100 shadow-md' : 'border-transparent'}`}>
              <button 
                onClick={() => setOpen(open === i ? null : i)} 
                className="w-full flex items-center justify-between"
              >
                <h4 className="font-bold text-left">{f.q}</h4>
                <div className="w-8 h-8 bg-sky-700 text-white rounded-lg flex items-center justify-center">
                  {open === i ? '-' : '+'}
                </div>
              </button>
              {open === i && (
                <div className="mt-3 text-slate-600">
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

export default FAQ;