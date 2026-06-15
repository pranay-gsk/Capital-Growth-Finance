"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ApplicationModal from "@/components/ApplicationModal";
import {
  Car,
  ThumbsUp,
  TrendingUp,
  ShieldCheck,
  Percent,
  FileText,
  CheckCircle
} from "lucide-react";

const allServices = [
  {
    title: "New Car Loans",
    desc: "Financing solutions for brand new passenger cars. Get competitive rates and high loan-to-value allocations.",
    features: ["Interest rates from 7.8% p.a.", "Tenure: Up to 7 Years", "Funding up to 90% on-road price", "Quick sanction and low processing fees"],
    icon: Car
  },
  {
    title: "Used Car Loans",
    desc: "Pre-owned passenger car loans featuring rapid vehicle valuation checks and simplified legal clearance.",
    features: ["Interest rates from 9.5% p.a.", "Tenure: Up to 5 Years", "Funding up to 80% valuation", "Fast dealer payout structures"],
    icon: ThumbsUp
  },
  {
    title: "Commercial Fleet Financing",
    desc: "Acquire buses, trucks, and light commercial vehicles to expand your company logistics and distribution capacity.",
    features: ["Custom fleet repayment charts", "Tenure: Up to 5 Years", "Funding up to 85% chassis cost", "No collateral required option"],
    icon: TrendingUp
  },
  {
    title: "Two-Wheeler Loans",
    desc: "Sanctions within hours for scooters, utility motorbikes, and premium sports bikes.",
    features: ["Superfast digital sanction", "Tenure: Up to 3 Years", "Low down-payment requirements", "Minimal income proof required"],
    icon: ShieldCheck
  },
  {
    title: "Loan Against Vehicle",
    desc: "Unlock immediate working capital or personal cash reserves by pledging your existing vehicle's equity.",
    features: ["Get up to 70% vehicle market value", "No vehicle age restrictions (up to 7 yrs)", "Refinance with minimal legal steps", "Maintain ownership & keep driving"],
    icon: Percent
  },
  {
    title: "RTO & NOC Coordination",
    desc: "End-to-end liaison support for hypothecation additions, registration transfers, and bank NOC clearances.",
    features: ["Direct liaison with regional RTO desks", "Quick Hypothecation removal assistance", "Transparent service fee structures", "Support for AP registration codes"],
    icon: FileText
  }
];

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleApply = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar onOpenApplyModal={() => setIsModalOpen(true)} />

      {/* Header Banner */}
      <section className="bg-primary-navy py-16 text-center text-white border-b border-accent-gold/20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-secondary-blue to-primary-navy opacity-90" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-3">
          <span className="text-accent-gold text-xs font-bold uppercase tracking-widest block">Service Catalog</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Comprehensive Vehicle Financing
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            From retail passenger car loans to heavy-duty fleet loans and refinance solutions.
          </p>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-150 p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary-navy text-accent-gold rounded-xl flex items-center justify-center shadow-md">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-navy">{service.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{service.desc}</p>
                  
                  {/* Features list */}
                  <div className="border-t border-slate-100 pt-4 space-y-2">
                    {service.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => handleApply(service.title)}
                    className="w-full py-2.5 bg-slate-50 hover:bg-accent-gold hover:text-primary-navy text-primary-navy font-bold text-xs sm:text-sm rounded-lg border border-slate-200 hover:border-accent-gold transition-colors"
                  >
                    Apply for {service.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Consultation Section */}
      <section className="py-16 bg-white text-center border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-navy">Not sure which financing service fits you?</h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Meet our certified auto loan advisory team based in Vijayawada. We coordinate directly with local dealers to propose the most affordable EMI structures.
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleApply("General Consultation")}
              className="bg-primary-navy hover:bg-secondary-blue text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-all text-sm"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
