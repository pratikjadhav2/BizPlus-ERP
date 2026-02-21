// "use client";

import React from "react";
import Link from "next/link";

const Keywords: React.FC = () => {
  const keywords = [
    'best ERP software',
    'best ERP system for business',
    'best ERP for manufacturing',
    'best ERP for SMEs',
    'best ERP for enterprises',
    'best ERP software in India',
    'best cloud ERP software',
    'best ERP provider',
    'best ERP solution for companies',
    'best ERP for inventory management',
    'ERP for manufacturing companies',
    'ERP for retail business',
    'ERP for trading companies',
    'ERP for distributors',
    'ERP for wholesalers',
    'ERP for logistics companies',
    'ERP for construction companies',
    'ERP for healthcare industry',
    'ERP for education institutes',
    'ERP for pharma companies',
    'ERP for textile industry',
    'best ERP solution for business',
    'best ERP for accounting',
    'best ERP for warehouse management',
    'best ERP for production planning',
    'best ERP software company',
    'best ERP for finance management',
    'best ERP for supply chain',
    'ERP for small business',
    'ERP for medium business',
    'ERP for large enterprises',
    'ERP for growing businesses',
    'ERP for MSME',
    'ERP for multi location companies',
    'ERP for mid size companies',
    'ERP for startups',
    'ERP for corporations',
    'ERP for family business',
    'ERP for accounting business',
    'ERP for inventory business',
    'ERP for operations management',
    'best ERP software for business',
    'best ERP system for companies',
    'best ERP solution for enterprises',
    'best ERP software for organizations'
  ];

  // Convert text to SEO-friendly slug
  const createSlug = (text: string) =>
    text.toLowerCase().replace(/\s+/g, "-");

  return (
    <section className="py-12 bg-slate-50 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h4 className="text-2xl font-extrabold mb-6">
          Serving Delhi-NCR
        </h4>

        <div className="flex flex-wrap justify-center gap-3">
          {keywords.map((keyword) => (
            <Link
              key={keyword}
              href={`/erp/${createSlug(keyword)}`}
              className="px-4 py-2 bg-white rounded-full font-semibold text-sm hover:bg-sky-600 hover:text-white transition"
            >
              {keyword}
            </Link>
          ))}
        </div>   
      </div>
    </section>
  );
};

export default Keywords;