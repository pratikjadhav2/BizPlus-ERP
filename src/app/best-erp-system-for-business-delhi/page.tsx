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
  description: "Best ERP System for Business in Delhi for inventory management, accounting, CRM, billing, and business automation. Trusted by growing businesses across Delhi NCR. Schedule a free demo today.", 
  keywords: [
    "Best ERP system for business in Delhi",
    "BizPlusERP Delhi",
    "Top ERP system in Delhi NCR",
    "Business ERP system Delhi",
    "ERP system provider in Delhi",
    "Best ERP software for small business Delhi",
    "Cloud ERP system Delhi NCR",
    "Affordable ERP system Delhi",
    "Inventory management ERP system Delhi",
    "Accounting and billing ERP Delhi",
    "CRM integrated ERP system Delhi",
    "GST compliant ERP system Delhi",
    "All-in-one business ERP Delhi",
    "Enterprise resource planning system Delhi",
    "ERP for growing businesses Delhi",
    "Complete business automation ERP Delhi",
    "Multi-location ERP system Delhi NCR",
    "Customizable ERP system Delhi",
    "SME ERP system Delhi",
    "BizPlusERP business software Delhi"
          ],
  alternates: {
    canonical: "https://www.yourdomain.com/best-erp-system-for-business-delhi"
  },
  openGraph: {
    title: "Best ERP System for Business in Delhi | BizPlusERP",
    description: "Looking for the best ERP system for business in Delhi? BizPlusERP offers inventory, accounting, CRM, billing, and complete business automation solutions for SMEs. Book a free demo today.",
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
 
