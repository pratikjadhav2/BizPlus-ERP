// "use client";

import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/best-erp-for-enterprises/Header';
import Hero from '@/components/best-erp-for-enterprises/Hero';
import Problems from '@/components/best-erp-for-enterprises/Problems';
import Modules from '@/components/best-erp-for-enterprises/Modules';
import DashboardSummary from '@/components/best-erp-for-enterprises/DashboardSummary';
import Offer from '@/components/best-erp-for-enterprises/Offer';
import Comparison from '@/components/best-erp-for-enterprises/Comparison';
import Benefits from '@/components/best-erp-for-enterprises/Benefits';
import Testimonials from '@/components/best-erp-for-enterprises/Testimonials';
import FAQ from '@/components/best-erp-for-enterprises/FAQ';
import LeadForm from '@/components/best-erp-for-enterprises/LeadForm';
import Footer from '@/components/best-erp-for-enterprises/Footer';
import BundleCRM from '@/components/best-erp-for-enterprises/BundleCRM';
import FloatingActions from '@/components/best-erp-for-enterprises/FloatingActions';
import Keywords from '@/components/best-erp-for-enterprises/Keywords';


export const metadata = {
  title: "Best ERP for enterprises in Delhi | BizPlusERP",
  description: "Best ERP for enterprises in Delhi. Manage multi-branch operations, finance, inventory, HR, CRM, and advanced reporting with BizPlusERP. Scalable, secure, and customizable ERP solution for large businesses across Delhi NCR.",
  keywords: [
  "Best ERP for enterprises in Delhi",
  "Enterprise ERP software Delhi",
  "Corporate ERP solution Delhi NCR",
  "ERP for large businesses Delhi",
  "Multi-branch ERP system Delhi",
  "Enterprise resource planning Delhi",
  "Scalable ERP software Delhi",
  "Cloud ERP for enterprises Delhi",
  "Advanced ERP solution Delhi NCR",
  "ERP for corporate companies Delhi",
  "Integrated ERP system Delhi",
  "Finance and accounting ERP Delhi",
  "Inventory management ERP for enterprises Delhi",
  "Enterprise CRM ERP Delhi",
  "Customizable ERP software Delhi",
  "Secure enterprise ERP Delhi",
  "ERP implementation services Delhi",
  "Large organization ERP Delhi NCR",
  "Business process automation ERP Delhi",
  "BizPlusERP enterprise solution Delhi"
        ],
  alternates: {
    canonical: "https://www.yourdomain.com/best-erp-software-delhi"
  },
  openGraph: {
    title: "Best ERP for enterprises in Delhi | BizPlusERP",
    description: "Empower your enterprise in Delhi with BizPlusERP. Streamline finance, inventory, HR, CRM, multi-branch operations, and advanced reporting with a secure, scalable enterprise ERP platform.",
    url: "https://www.yourdomain.com/best-erp-software-delhi",
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
 
