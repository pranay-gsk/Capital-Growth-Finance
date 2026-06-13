"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ApplicationModal from "@/components/ApplicationModal";
import EMICalculator from "@/components/EMICalculator";
import EligibilityCalculator from "@/components/EligibilityCalculator";
import { CheckCircle2, DollarSign, Briefcase, HomeIcon, Car, ChevronRight } from "lucide-react";

export default function Loans() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calcTab, setCalcTab] = useState<"emi" | "eligibility">("emi");

  const categories = [
    {
      title: "Personal Loan",
      limit: "Up to ₹20 Lakhs",
      desc: "Instant cash assistance for urgent private commitments. No collateral required.",
      features: ["Interest starting at 10.5% p.a.", "Tenure up to 60 Months", "2-hour approval for pre-approved profiles", "Processing fee 1.5% - 2%"],
      icon: DollarSign,
    },
    {
      title: "Business Loan",
      limit: "Up to ₹2 Crores",
      desc: "Capital reserves for machinery, expansion, inventory purchases, or retail setups.",
      features: ["Collateral-free options available", "Flexible dynamic EMI options", "Tenure up to 7 Years", "Minimum business vintage: 2 years"],
      icon: Briefcase,
    },
    {
      title: "Home Loan",
      limit: "Attractive Rates",
      desc: "Get funds to buy ready flats, construct villas, or purchase residential plots.",
      features: ["Interest starting at 8.5% p.a.", "Tenures up to 30 Years", "Balance transfer facilities", "Minimal legal paperwork support"],
      icon: HomeIcon,
    },
    {
      title: "Vehicle Loan",
      limit: "Fast Approvals",
      desc: "Financing for cars, two-wheelers, tractors, and corporate transport vectors.",
      features: ["Up to 90% LTV of asset valuation", "Tied up with major dealers in AP", "Tenure: 1 to 7 Years", "Same-day delivery verification"],
      icon: Car,
    },
  ];

  return (
    <>
      <Navbar onOpenApplyModal={() => setIsModalOpen(true)} />

      {/* Header Banner */}
      <section className="bg-primary-navy py-16 text-center text-white border-b border-accent-gold/20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-secondary-blue to-primary-navy opacity-90" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-3">
          <span className="text-accent-gold text-xs font-bold uppercase tracking-widest block">Lending Hub</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Tailored Loan Products
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Choose from a wide variety of unsecured personal credit or large-ticket commercial financing.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-150 p-6 sm:p-8 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-primary-navy text-accent-gold rounded-xl flex items-center justify-center shadow-md">
                      <cat.icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 bg-accent-gold/15 text-primary-navy text-xs font-bold rounded-full border border-accent-gold/20">
                      {cat.limit}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy">{cat.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{cat.desc}</p>
                  
                  {/* Bullet features */}
                  <div className="border-t border-slate-100 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cat.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3 bg-primary-navy hover:bg-secondary-blue text-white font-bold text-xs sm:text-sm rounded-lg flex items-center justify-center gap-1.5 transition-all shadow-md"
                  >
                    <span>Apply Online Now</span>
                    <ChevronRight className="w-4 h-4 text-accent-gold" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculators Tabs Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-10">
            <span className="inline-block px-3 py-1 bg-accent-gold/10 text-primary-navy text-xs font-bold uppercase tracking-wider rounded-full">
              Interactive Tools
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-navy">
              Estimate Loan Outgoings & Limits
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Use our real-time calculators to simulate monthly budgets and loan amount eligibility.
            </p>
          </div>

          {/* Tabs header */}
          <div className="flex border border-slate-200 rounded-xl overflow-hidden mb-8 max-w-sm mx-auto shadow-sm">
            <button
              onClick={() => setCalcTab("emi")}
              className={`flex-1 py-3 text-center text-xs sm:text-sm font-bold transition-all ${
                calcTab === "emi"
                  ? "bg-primary-navy text-white"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              EMI Calculator
            </button>
            <button
              onClick={() => setCalcTab("eligibility")}
              className={`flex-1 py-3 text-center text-xs sm:text-sm font-bold transition-all ${
                calcTab === "eligibility"
                  ? "bg-primary-navy text-white"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              Eligibility Check
            </button>
          </div>

          {/* Calculator Output */}
          <div className="transition-all duration-300">
            {calcTab === "emi" ? <EMICalculator /> : <EligibilityCalculator />}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
