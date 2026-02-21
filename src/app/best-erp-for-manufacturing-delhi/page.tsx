// "use client";

import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/best-erp-for-manufacturing/Header';
import Hero from '@/components/best-erp-for-manufacturing/Hero';
import Problems from '@/components/best-erp-for-manufacturing/Problems';
import Modules from '@/components/best-erp-for-manufacturing/Modules';
import DashboardSummary from '@/components/best-erp-for-manufacturing/DashboardSummary';
import Offer from '@/components/best-erp-for-manufacturing/Offer';
import Comparison from '@/components/best-erp-for-manufacturing/Comparison';
import Benefits from '@/components/best-erp-for-manufacturing/Benefits';
import Testimonials from '@/components/best-erp-for-manufacturing/Testimonials';
import FAQ from '@/components/best-erp-for-manufacturing/FAQ';
import LeadForm from '@/components/best-erp-for-manufacturing/LeadForm';
import Footer from '@/components/best-erp-for-manufacturing/Footer';
import BundleCRM from '@/components/best-erp-for-manufacturing/BundleCRM';
import FloatingActions from '@/components/best-erp-for-manufacturing/FloatingActions';
import Keywords from '@/components/best-erp-for-manufacturing/Keywords';


export const metadata = {
  title: "Best ERP for Manufacturing in Delhi| BizPlusERP",
  description:   "Best ERP for manufacturing in Delhi. Manage production planning, BOM, inventory, job work, GST billing, and accounting with BizPlusERP. Trusted by Delhi NCR manufacturers. Book a free demo today.", 
  keywords: [
  "Best ERP for Manufacturing in Delhi",
  "Manufacturing ERP software Delhi",
  "Top manufacturing ERP system Delhi NCR",
  "ERP for manufacturers in Delhi",
  "Factory management ERP Delhi",
  "Production management ERP Delhi",
  "Manufacturing business ERP Delhi",
  "Inventory management for manufacturing Delhi",
  "BOM management ERP Delhi",
  "Production planning software Delhi",
  "Job work management ERP Delhi",
  "Raw material tracking ERP Delhi",
  "Warehouse management ERP for manufacturers Delhi",
  "GST billing software for manufacturing Delhi",
  "Cloud manufacturing ERP Delhi NCR",
  "SME manufacturing ERP Delhi",
  "Small scale industry ERP Delhi",
  "Automated production ERP system Delhi",
  "Manufacturing accounting software Delhi",
  "BizPlusERP manufacturing solution Delhi"
            ],
  alternates: {
    canonical: "https://www.yourdomain.com/best-erp-system-for-manufacturing-delhi"
  },
  openGraph: {
    title: "Best ERP System for Manufacturing in Delhi | BizPlusERP",
    description: "Streamline your manufacturing operations in Delhi with BizPlusERP. Control production, raw materials, BOM, inventory, job work, and GST billing in one powerful cloud-based manufacturing ERP system.",
    url: "https://www.yourdomain.com/best-erp-system-for-manufacturing-delhi",
    siteName: "BizPlusERP",
    images: [
      {
        url: "https://www.yourdomain.com/og-image.jpg",
      },
    ],
    type: "website",
  },
};

const bsetERPsoftwarePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="pt-28">
        <Hero />
        <Problems />
        <Modules />
        <DashboardSummary />
        <Offer />
        <BundleCRM />
        <Comparison />
        <Benefits />
        <Testimonials />
        <FAQ />
        <LeadForm />
        {/* <Keywords /> */}
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default bsetERPsoftwarePage;
 
