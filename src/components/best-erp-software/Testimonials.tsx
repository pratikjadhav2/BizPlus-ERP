"use client";

import React from 'react';

const Testimonials: React.FC = () => {
  const data = [
    { 
      quote: 'Implementing BizPlusERP helped us streamline inventory and GST billing across our Delhi warehouses. Our stock accuracy improved drastically within the first quarter.', 
      author: 'Vikram Malhotra', 
      role: 'Director, North India Trading Co. (Delhi)' 
    },
    { 
      quote: 'We were searching for the best ERP software in Delhi, and BizPlusERP delivered exactly what we needed. Sales, accounts, and inventory are now fully integrated.', 
      author: 'Neha Arora', 
      role: 'Founder, Arora Retail Solutions (Delhi NCR)' 
    },
    { 
      quote: 'Our production planning and costing are now completely system-driven. BizPlusERP gave us real-time dashboards that improved decision-making and profitability.', 
      author: 'Sandeep Khanna', 
      role: 'Managing Partner, Khanna Manufacturing Industries (Delhi)' 
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-center mb-6">
          What Delhi Business Owners Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="italic text-slate-600 mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{t.author}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;