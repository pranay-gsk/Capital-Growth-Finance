"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ApplicationModal from "@/components/ApplicationModal";
import {
  UserCheck,
  TrendingUp,
  Home,
  Car,
  FileText,
  PieChart,
  ShieldCheck,
  Percent,
  CheckCircle,
  HelpCircle
} from "lucide-react";

const allServices = [
  {
    title: "Personal Loans",
    desc: "Unsecured lines of credit up to ₹20 Lakhs. Ideal for weddings, medical emergencies, education, or travel.",
    features: ["Interest rates from 10.5%", "Tenure: 1 to 5 Years", "Approval in 24 Hours", "Zero collateral required"],
    icon: UserCheck
  },
  {
    title: "Business Loans",
    desc: "Working capital, machinery loans, and structural debt lines up to ₹2 Crores to expand industrial operations.",
    features: ["Secured & Unsecured options", "Tenure: 1 to 7 Years", "Flexible repayment terms", "Minimal business vintage required"],
    icon: TrendingUp
  },
  {
    title: "Home Loans",
    desc: "Housing finance for building, acquiring, or renovating residential units in Vijayawada.",
    features: ["Interest rates from 8.5%", "Tenure: Up to 30 Years", "Top-up loan availability", "Simple legal verification support"],
    icon: Home
  },
  {
    title: "Vehicle Loans",
    desc: "Low-interest loans for buying personal cars, commercial fleets, or heavy-duty logistics vehicles.",
    features: ["Up to 90% on-road financing", "Instant online eligibility check", "Tenure: Up to 7 Years", "Hassle-free dealer tie-ups"],
    icon: Car
  },
  {
    title: "Mortgage Loans",
    desc: "Unlock the value of your commercial or residential property with Loan Against Property (LAP).",
    features: ["High ticket amounts", "Lower interest rates than personal loans", "Flexible end-use criteria", "Tenure: Up to 15 Years"],
    icon: Percent
  },
  {
    title: "Investment Planning",
    desc: "Expert portfolio building with Mutual Funds, Systematic Investment Plans (SIPs), and fixed-income assets.",
    features: ["Risk profile mapping", "1-on-1 counselor meetings", "High inflation-beating yields", "Periodic portfolio balancing"],
    icon: PieChart
  },
  {
    title: "Insurance Advisory",
    desc: "Life insurance, term coverage, and comprehensive corporate health plans to protect your family and staff.",
    features: ["Top general insurance tie-ups", "Cashless claims network check", "Tax exemption certificates", "Tailored premium options"],
    icon: ShieldCheck
  },
  {
    title: "Tax Planning",
    desc: "Legitimate tax saving planning, file submissions, and commercial advisory under IT Act regulations.",
    features: ["Section 80C & 80D optimizations", "ITR filing guidance", "Corporate tax consulting", "Audit representation assistance"],
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
          <span className="text-accent-gold text-xs font-bold uppercase tracking-widest block">Financial Catalog</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Comprehensive Financial Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            From quick retail loans to strategic wealth management and corporate tax filing assistance.
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
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-navy">Not sure which service fits your profile?</h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Meet our certified financial advisory team based in Vijayawada. We examine your balance sheets, credit history, and liabilities to propose the most affordable solutions.
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
