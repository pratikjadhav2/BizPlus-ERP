"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="pt-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-10 text-center">
        <div className="inline-block bg-sky-800 text-white px-3 py-0.5 rounded-full text-sm font-semibold mb-2">
          Trusted Enterprise ERP Partner in Delhi NCR
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Best ERP for Enterprises in Delhi
        </h1>

        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Looking for a powerful enterprise ERP solution in Delhi?
          BizPlusERP enables large organizations to manage multi-branch operations,
          finance, inventory, HR, CRM, compliance, and advanced analytics in one
          secure and scalable cloud-based platform built for enterprise growth.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="#contact"
            className="bg-gradient-to-r from-sky-700 to-sky-500 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Schedule Enterprise ERP Consultation
          </a>

          <a
            href="https://wa.me/917030323838"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 text-white px-5 py-3 rounded-lg font-semibold"
          >
            Connect with ERP Consultant
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold">✔</span> Multi-Branch & Multi-Location Management
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold">✔</span> Advanced Financial Control & Compliance
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold">✔</span> Enterprise-Grade Security & Customization
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;