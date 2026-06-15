"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ApplicationModal from "@/components/ApplicationModal";
import EMICalculator from "@/components/EMICalculator";
import EligibilityCalculator from "@/components/EligibilityCalculator";
import { CheckCircle2, Car, ThumbsUp, TrendingUp, ShieldCheck, ChevronRight } from "lucide-react";

export default function Loans() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calcTab, setCalcTab] = useState<"emi" | "eligibility">("emi");

  const categories = [
    {
      title: "New Car Loan",
      limit: "Up to 90% LTV",
      desc: "Instant sanction and door-step payout coordination for buying a new car.",
      features: ["Interest starting at 7.8% p.a.", "Tenures up to 7 Years (84 Months)", "Tied up with major dealers in AP", "Minimal processing fee"],
      icon: Car,
    },
    {
      title: "Used Car Loan",
      limit: "Up to 80% Value",
      desc: "Fast processing for buying pre-owned vehicles. Simplified evaluator valuation checks.",
      features: ["Interest starting at 9.5% p.a.", "Tenures up to 5 Years (60 Months)", "Valuation report within 2 hours", "Easy transfer of RC hypothecation"],
      icon: ThumbsUp,
    },
    {
      title: "Commercial Vehicle Loan",
      limit: "Up to ₹1.5 Crores",
      desc: "Custom fleet credit lines for logistics operations, buses, trucks, and loaders.",
      features: ["No collateral options", "Tenures up to 5 Years", "Flexible seasonal EMI schedules", "Cumulative loan structures"],
      icon: TrendingUp,
    },
    {
      title: "Two-Wheeler Loan",
      limit: "Quick Sanctions",
      desc: "Acquire passenger bikes and scooters with quick sanctions and low down payments.",
      features: ["Sanctions within 2 hours", "Tenures up to 3 Years (36 Months)", "Minimal income proof paperwork", "Transparent interest schedules"],
      icon: ShieldCheck,
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
            Vehicle Loan Products
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Choose from passenger car loans, commercial fleet financing, or two-wheeler credit lines.
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
              Estimate Auto Loan Outgoings & Limits
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Use our real-time calculators to simulate monthly payments and eligible vehicle loan capacity.
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
