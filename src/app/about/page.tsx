"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ApplicationModal from "@/components/ApplicationModal";
import { Compass, Target, Award, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenApplyModal={() => setIsModalOpen(true)} />

      {/* Header Banner */}
      <section className="bg-primary-navy py-16 text-center text-white border-b border-accent-gold/20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-secondary-blue to-primary-navy opacity-90" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-3">
          <span className="text-accent-gold text-xs font-bold uppercase tracking-widest block">About Us</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Empowering Financial Success
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Discover our history, mission, and how we serve retail and commercial clients across Andhra Pradesh.
          </p>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-navy">
                Who We Are
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Capital Growth Finance is a premier financial consulting and lending partner headquartered in Benz Circle, Vijayawada. We help individuals, families, and growing businesses access institutional-grade financial products in a simple, hassle-free manner.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you need immediate credit via Personal Loans, high-ticket Business capital, housing finance, or wealth advice (Mutual Funds, SIPs, and Insurance policies), our qualified financial counselors help secure the best market deals.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-slate-700 font-semibold">
                  <CheckCircle className="w-4.5 h-4.5 text-accent-gold" />
                  <span>Customer-First Advisory Process</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 font-semibold">
                  <CheckCircle className="w-4.5 h-4.5 text-accent-gold" />
                  <span>Over ₹100 Crores in cumulative disbursements</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 font-semibold">
                  <CheckCircle className="w-4.5 h-4.5 text-accent-gold" />
                  <span>Transparent processing with zero hidden fees</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent-gold/5 rounded-full blur-lg" />
              <h3 className="font-extrabold text-lg text-primary-navy mb-4">Our Local Footprint</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Serving Vijayawada, Guntur, Tenali, Amaravati, and surrounding Andhra Pradesh sectors with dedicated offline representatives.
              </p>
              <div className="border-t border-slate-200 pt-4 space-y-3">
                <div className="flex justify-between text-xs font-semibold text-slate-600">
                  <span>Headquarters</span>
                  <span className="text-primary-navy">Vijayawada, AP</span>
                </div>
                <div className="flex justify-between text-xs font-semibold text-slate-600">
                  <span>Established</span>
                  <span className="text-primary-navy">2016</span>
                </div>
                <div className="flex justify-between text-xs font-semibold text-slate-600">
                  <span>Advisors Directory</span>
                  <span className="text-primary-navy">15+ On-field Experts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision cards */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 border border-slate-150 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-accent-gold/20 text-primary-navy flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent-gold" />
                </div>
                <h3 className="text-xl font-bold text-primary-navy">Our Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To make banking-grade financial solutions, quick loans, and wealth-growth advisory simple, transparent, and digitally accessible to every household and enterprise in Andhra Pradesh.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 border border-slate-150 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary-navy text-accent-gold flex items-center justify-center">
                  <Compass className="w-6 h-6 text-accent-gold" />
                </div>
                <h3 className="text-xl font-bold text-primary-navy">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To become the most reliable and digitally advanced financial growth partner in Andhra Pradesh, fostering retail empowerment and SME acceleration through personalized financial engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values/Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-navy">Core Corporate Values</h2>
            <p className="text-slate-500 text-sm">Our operational pillars ensure security, stability, and customer satisfaction.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mx-auto text-primary-navy font-bold shadow-sm">1</div>
              <h4 className="font-bold text-base text-primary-navy">Absolute Transparency</h4>
              <p className="text-xs text-slate-500 max-w-[220px] mx-auto">Interest rate schedules, processing costs, and policies are detailed upfront with zero grey areas.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mx-auto text-primary-navy font-bold shadow-sm">2</div>
              <h4 className="font-bold text-base text-primary-navy">Financial Integrity</h4>
              <p className="text-xs text-slate-500 max-w-[220px] mx-auto">We strictly advise compliance, secure banking rules, and data vaults keeping investments absolutely protected.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mx-auto text-primary-navy font-bold shadow-sm">3</div>
              <h4 className="font-bold text-base text-primary-navy">Speed & Efficiency</h4>
              <p className="text-xs text-slate-500 max-w-[220px] mx-auto">We respect time. Leveraging digital applications ensures instant approvals and quick loan processing.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
