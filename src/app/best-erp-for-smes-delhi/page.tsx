// "use client";

import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/best-erp-for-smes/Header';
import Hero from '@/components/best-erp-for-smes/Hero';
import Problems from '@/components/best-erp-for-smes/Problems';
import Modules from '@/components/best-erp-for-smes/Modules';
import DashboardSummary from '@/components/best-erp-for-smes/DashboardSummary';
import Offer from '@/components/best-erp-for-smes/Offer';
import Comparison from '@/components/best-erp-for-smes/Comparison';
import Benefits from '@/components/best-erp-for-smes/Benefits';
import Testimonials from '@/components/best-erp-for-smes/Testimonials';
import FAQ from '@/components/best-erp-for-smes/FAQ';
import LeadForm from '@/components/best-erp-for-smes/LeadForm';
import Footer from '@/components/best-erp-for-smes/Footer';
import BundleCRM from '@/components/best-erp-for-smes/BundleCRM';
import FloatingActions from '@/components/best-erp-for-smes/FloatingActions';
import Keywords from '@/components/best-erp-for-smes/Keywords';


export const metadata = {
  title: "Best ERP for SMEs in Delhi| BizPlusERP",
  description: "Best ERP for SMEs in Delhi. Manage inventory, accounting, CRM, GST billing, payroll, and business operations with BizPlusERP. Affordable cloud ERP trusted by small and medium businesses across Delhi NCR. Book a free demo today.",
  keywords: [
  "Best ERP for SMEs in Delhi",
  "SME ERP software Delhi",
  "ERP for small business Delhi",
  "ERP for medium business Delhi",
  "Cloud ERP for SMEs Delhi NCR",
  "Affordable ERP software Delhi",
  "Business management software for SMEs Delhi",
  "Inventory management ERP for SMEs Delhi",
  "Accounting and GST billing software Delhi",
  "CRM ERP for small business Delhi",
  "All-in-one ERP for SMEs Delhi",
  "Enterprise resource planning for SMEs Delhi",
  "Multi-location ERP for SMEs Delhi NCR",
  "Business automation software Delhi",
  "ERP provider for SMEs in Delhi",
  "Small company ERP software Delhi",
  "ERP solution for startups Delhi",
  "Growing business ERP Delhi",
  "SME business software Delhi",
  "BizPlusERP SME solution Delhi"
            ],
  alternates: {
    canonical: "https://www.yourdomain.com/best-erp-system-for-smes-delhi"
  },
  openGraph: {
    title: "Best ERP System for SMEs in Delhi | BizPlusERP",
   description: "Best ERP system for SMEs in Delhi. Manage inventory, accounting, CRM, GST billing, payroll, and business operations with BizPlusERP. Trusted by small and medium businesses across Delhi NCR. Book a free demo today.",
    url: "https://www.yourdomain.com/best-erp-system-for-smes-delhi",
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
 
