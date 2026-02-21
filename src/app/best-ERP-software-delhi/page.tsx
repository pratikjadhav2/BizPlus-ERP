// "use client";

import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/best-erp-software/Header';
import Hero from '@/components/best-erp-software/Hero';
import Problems from '@/components/best-erp-software/Problems';
import Modules from '@/components/best-erp-software/Modules';
import DashboardSummary from '@/components/best-erp-software/DashboardSummary';
import Offer from '@/components/best-erp-software/Offer';
import Comparison from '@/components/best-erp-software/Comparison';
import Benefits from '@/components/best-erp-software/Benefits';
import Testimonials from '@/components/best-erp-software/Testimonials';
import FAQ from '@/components/best-erp-software/FAQ';
import LeadForm from '@/components/best-erp-software/LeadForm';
import Footer from '@/components/best-erp-software/Footer';
import BundleCRM from '@/components/best-erp-software/BundleCRM';
import FloatingActions from '@/components/best-erp-software/FloatingActions';
import Keywords from '@/components/best-erp-software/Keywords';


export const metadata = {
  title: "Best ERP Software in Delhi | BizPlusERP",
  description: "Best ERP software in Delhi for inventory management, accounting, CRM, billing, and business automation. Trusted by growing businesses across Delhi NCR. Schedule a free demo today.", 
  keywords: [
                "Best ERP software in Delhi",
                "Top ERP software in Delhi",
                "ERP software Delhi NCR",
                "Business ERP software India",
                "Cloud ERP software Delhi",
                "Affordable ERP software Delhi",
                "ERP solution provider in Delhi",
                "Inventory management ERP Delhi",
                "Accounting ERP software India",
                "GST compliant ERP software Delhi",
                "CRM ERP software Delhi NCR",
                "Manufacturing ERP software Delhi",
                "SME ERP software India",
                "Enterprise resource planning software Delhi",
                "ERP software company in Delhi",
                "Billing and invoicing ERP Delhi",
                "Custom ERP software development Delhi",
                "Multi-branch ERP software India",
                "ERP software for small business Delhi",
                "Complete business management software India"
            ],
  alternates: {
    canonical: "https://www.yourdomain.com/best-erp-software-delhi"
  },
  openGraph: {
    title: "Best ERP Software in Delhi | BizPlusERP",
    description: "Looking for the best ERP software in Delhi? BizPlusERP offers inventory, accounting, CRM, billing, and complete business automation solutions for SMEs. Book a free demo today.",
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
 
