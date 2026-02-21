// "use client";

import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/best-erp-system-for-business/Header';
import Hero from '@/components/best-erp-system-for-business/Hero';
import Problems from '@/components/best-erp-system-for-business/Problems';
import Modules from '@/components/best-erp-system-for-business/Modules';
import DashboardSummary from '@/components/best-erp-system-for-business/DashboardSummary';
import Offer from '@/components/best-erp-system-for-business/Offer';
import Comparison from '@/components/best-erp-system-for-business/Comparison';
import Benefits from '@/components/best-erp-system-for-business/Benefits';
import Testimonials from '@/components/best-erp-system-for-business/Testimonials';
import FAQ from '@/components/best-erp-system-for-business/FAQ';
import LeadForm from '@/components/best-erp-system-for-business/LeadForm';
import Footer from '@/components/best-erp-system-for-business/Footer';
import BundleCRM from '@/components/best-erp-system-for-business/BundleCRM';
import FloatingActions from '@/components/best-erp-system-for-business/FloatingActions';
import Keywords from '@/components/best-erp-system-for-business/Keywords';


export const metadata = {
  title: "Best ERP System for Business in Delhi | BizPlusERP",

description:
  "Best ERP system for business in Delhi. Manage inventory, accounting, CRM, GST billing, and operations with BizPlusERP. Trusted by Delhi NCR businesses. Schedule a free demo today.",

keywords: [
  "Best ERP system for business in Delhi",
  "Business ERP software Delhi",
  "Top ERP system Delhi NCR",
  "Cloud ERP system Delhi",
  "ERP software for small business Delhi",
  "Inventory management ERP Delhi",
  "Accounting and GST billing software Delhi",
  "CRM integrated ERP system Delhi",
  "Affordable ERP solution Delhi",
  "All-in-one business ERP Delhi",
  "Enterprise resource planning Delhi NCR",
  "SME ERP software Delhi",
  "Multi-location ERP system Delhi",
  "Business automation software Delhi",
  "ERP provider in Delhi NCR",
  "BizPlusERP Delhi",
  "Business management software Delhi",
  "GST compliant ERP Delhi",
  "Complete ERP solution Delhi",
  "ERP for growing businesses Delhi"
],

alternates: {
  canonical: "https://www.yourdomain.com/best-erp-system-for-business-delhi"
},

openGraph: {
  title: "Best ERP System for Business in Delhi | BizPlusERP",
  description:
    "Streamline your business operations in Delhi with BizPlusERP. Control inventory, accounting, CRM, GST billing, and multi-branch management in one powerful cloud-based ERP system.",
  url: "https://www.yourdomain.com/best-erp-system-for-business-delhi",
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
 
