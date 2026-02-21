"use client";

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-10 text-center">
        <div className="inline-block bg-sky-800 text-white px-3 py-0.5 rounded-full text-sm font-semibold mb-2">
          Delhi NCR Businesses Trusted ERP Partner
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Best ERP System for Business in Delhi
        </h1>

        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Searching for the best ERP system for your business in Delhi? 
          BizPlusERP helps manufacturers, traders, distributors, retailers, and SMEs streamline inventory, accounting, CRM, billing, and operations in one powerful cloud-based business management system.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="#contact"
            className="bg-gradient-to-r from-sky-700 to-sky-500 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Schedule Free ERP Demo
          </a>

          <a
            href="https://wa.me/917030323838"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 text-white px-5 py-3 rounded-lg font-semibold"
          >
            Chat with ERP Expert on WhatsApp
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold">✔</span> Complete Inventory, GST & Billing Management
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold">✔</span> Real-Time Reports & Business Insights
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold">✔</span> Designed for Delhi NCR Growing Businesses
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;