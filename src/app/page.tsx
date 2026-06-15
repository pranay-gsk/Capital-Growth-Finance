"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Percent,
  Clock,
  ShieldCheck,
  UserCheck,
  Award,
  ThumbsUp,
  ArrowUpRight,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Calendar,
  BookOpen,
  ArrowRight,
  Sparkles,
  FileText,
  Car
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ApplicationModal from "@/components/ApplicationModal";

// Data
const stats = [
  { value: "8500+", label: "Vehicles Funded" },
  { value: "₹150 Cr+", label: "Loans Sanctioned" },
  { value: "10+", label: "Years Experience" },
  { value: "99%", label: "Satisfaction Rate" },
];

const mainServices = [
  { title: "New Car Loans", desc: "Get up to 90% on-road funding with attractive interest rates starting at 7.8% p.a.", icon: Car },
  { title: "Used Car Loans", desc: "Fast approval and simplified valuation checks for pre-owned passenger vehicles.", icon: ThumbsUp },
  { title: "Commercial Vehicles", desc: "Affordable fleet finance lines for buses, trucks, and multi-utility commercial setups.", icon: TrendingUp },
  { title: "Two-Wheeler Loans", desc: "Quick cash loans and minimal paperwork for purchase of scooters and bikes.", icon: ShieldCheck },
];

const faqs = [
  { q: "What is the maximum loan tenure for a vehicle loan?", a: "The maximum tenure is up to 7 years (84 months) for passenger vehicles and up to 5 years for commercial vehicles." },
  { q: "What is the maximum financing available (LTV)?", a: "We provide up to 90% of the on-road price (ex-showroom + road tax + insurance) for brand new passenger cars based on credit profile." },
  { q: "Do you offer loans for pre-owned/used cars?", a: "Yes! We offer used car loans up to 80% of the vehicle value determined by our certified evaluator partner." },
  { q: "Can I prepay or pre-close my auto loan?", a: "Yes, you can pre-close or prepay your vehicle loan in accordance with our transparent guidelines. There are no hidden charges." },
  { q: "How quickly is the loan sanctioned and paid out?", a: "Online approvals are processed within 2 hours. Once the final invoice and hypothecation details are agreed, disbursement to the dealership is done within 24 hours." },
];

const blogs = [
  { title: "How to Secure the Lowest Interest Rates on Vehicle Loans", category: "Buying Advice", date: "June 12, 2026", desc: "Learn how your credit rating, vehicle model choice, and tenure affect your monthly auto EMIs." },
  { title: "Buying a New vs. Used Car: A Complete Financing Comparison", category: "Loan Guide", date: "May 29, 2026", desc: "Examine LTV caps, interest rate variations, and depreciation factors when financing pre-owned vehicles." },
  { title: "Fulfilling Logistics Dreams: Commercial Fleet Finance Strategies", category: "Fleet Growth", date: "May 18, 2026", desc: "Understand tax deductions, interest subsidies, and repayment structure choices for commercial fleets." },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Navbar onOpenApplyModal={() => setIsModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-navy via-secondary-blue to-primary-navy pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden text-white">
        {/* Abstract Gold Background Glows */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Headline Details */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent-gold text-xs font-semibold tracking-wide uppercase"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
                <span>Premier Vehicle Finance in Andhra Pradesh</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
              >
                Drive Your Dream <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-yellow-200 to-accent-gold">
                  Vehicle Today
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
              >
                Helping individuals and business owners acquire passenger cars, commercial fleets, and two-wheelers through simple, high-LTV auto lending solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-accent-gold hover:bg-gold-hover text-primary-navy font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-accent-gold/20 hover:shadow-accent-gold/30 hover:scale-105 transition-all duration-200 text-base"
                >
                  Apply for Loan
                </button>
                <Link
                  href="/contact"
                  className="bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-3.5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 text-base"
                >
                  Get Free Consultation
                </Link>
              </motion.div>
            </div>

            {/* Dashboard Mockup/Fintech Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-[400px] lg:max-w-none rounded-3xl dark-glass p-6 shadow-2xl border border-accent-gold/20 space-y-6">
                {/* Simulated Header */}
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold font-extrabold text-sm"><Car className="w-4 h-4 text-accent-gold" /></div>
                    <div>
                      <span className="block text-xs font-bold text-white uppercase">Finance Dashboard</span>
                      <span className="block text-[10px] text-slate-400">Vijayawada, AP</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">ACTIVE DEALS</span>
                </div>

                {/* Main Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/5">
                    <span className="block text-[10px] text-slate-400 uppercase font-semibold">Vehicles Funded</span>
                    <span className="block text-lg font-bold text-accent-gold mt-1">8,500+</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/5">
                    <span className="block text-[10px] text-slate-400 uppercase font-semibold">Interest Rates From</span>
                    <span className="block text-lg font-bold text-white mt-1">7.8% p.a.</span>
                  </div>
                </div>

                {/* SVG Visual Graph representing Growth */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex justify-between text-[10px] text-slate-400 mb-2">
                    <span>Disbursement Trend (Lakhs)</span>
                    <span className="text-accent-gold font-bold">Capital Growth Finance</span>
                  </div>
                  <svg className="w-full h-32 overflow-visible" viewBox="0 0 100 35">
                    <defs>
                      <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#d4af37" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#d4af37" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Area path */}
                    <path
                      d="M0,35 Q15,30 30,22 T60,15 T100,2 L100,35 Z"
                      fill="url(#chartGlow)"
                    />
                    {/* Graph line */}
                    <path
                      d="M0,35 Q15,30 30,22 T60,15 T100,2"
                      fill="none"
                      stroke="#d4af37"
                      strokeWidth="2"
                    />
                    {/* Data Points */}
                    <circle cx="30" cy="22" r="1.5" fill="#ffffff" stroke="#d4af37" strokeWidth="1" />
                    <circle cx="60" cy="15" r="1.5" fill="#ffffff" stroke="#d4af37" strokeWidth="1" />
                    <circle cx="100" cy="2" r="1.5" fill="#ffffff" stroke="#d4af37" strokeWidth="1" />
                  </svg>
                  <div className="flex justify-between text-[8px] text-slate-500 mt-2">
                    <span>2016</span>
                    <span>2020</span>
                    <span>2026 (Present)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="bg-white py-12 border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-1">
                <span className="block text-3xl sm:text-4xl font-extrabold text-primary-navy tracking-tight">
                  {stat.value}
                </span>
                <span className="block text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Loan Products Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-accent-gold/10 text-primary-navy text-xs font-bold uppercase tracking-wider">
              Loan Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy">
              Premium Vehicle Lending Solutions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We process competitive credit lines for buying personal passenger cars, commercial transport fleets, and two-wheelers with minimal documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainServices.map((serv, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-navy text-accent-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <serv.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-navy group-hover:text-accent-gold transition-colors">
                    {serv.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {serv.desc}
                  </p>
                </div>
                <div className="pt-6">
                  <Link
                    href="/loans"
                    className="text-xs font-bold text-primary-navy hover:text-accent-gold flex items-center gap-1.5 group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Loan features strip */}
          <div className="mt-16 bg-primary-navy rounded-2xl p-6 md:p-8 border border-accent-gold/25 flex flex-wrap justify-around gap-6 text-white text-center">
            <div className="space-y-1">
              <span className="block text-accent-gold font-bold text-lg sm:text-xl">Quick Sanctions</span>
              <span className="block text-[10px] text-slate-300 uppercase">Within 4 Hours</span>
            </div>
            <div className="h-10 w-px bg-white/10 hidden md:block" />
            <div className="space-y-1">
              <span className="block text-accent-gold font-bold text-lg sm:text-xl">High LTV Limits</span>
              <span className="block text-[10px] text-slate-300 uppercase">Up to 90% On-Road Funding</span>
            </div>
            <div className="h-10 w-px bg-white/10 hidden md:block" />
            <div className="space-y-1">
              <span className="block text-accent-gold font-bold text-lg sm:text-xl">Lowest Interest Rates</span>
              <span className="block text-[10px] text-slate-300 uppercase">Starting at 7.8% p.a.</span>
            </div>
            <div className="h-10 w-px bg-white/10 hidden md:block" />
            <div className="space-y-1">
              <span className="block text-accent-gold font-bold text-lg sm:text-xl">Flexible Tenures</span>
              <span className="block text-[10px] text-slate-300 uppercase">Up to 7 Years (84 Months)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-accent-gold/10 text-primary-navy text-xs font-bold uppercase tracking-wider">
                Why Capital Growth Finance
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy leading-tight">
                Empowering Vehicle Ownership With Trust & Speed
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                As a leading auto finance consultant firm in Vijayawada, Andhra Pradesh, we focus heavily on transparent hypothecation terms, secure online applications, and fast dealer payouts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <ThumbsUp className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary-navy">Fast Dealer Payouts</h4>
                    <p className="text-[11px] text-slate-500">Same-day sanctioning opportunities.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <ThumbsUp className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary-navy">Transparent Charges</h4>
                    <p className="text-[11px] text-slate-500">No hidden fees, no pre-closure penalties.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <ThumbsUp className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary-navy">Expert Advisory Support</h4>
                    <p className="text-[11px] text-slate-500">Dedicated auto loan officer assignments.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <ThumbsUp className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary-navy">Hypothecation Clearance</h4>
                    <p className="text-[11px] text-slate-500">Smooth paperwork and dealer coordination.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Feature Card Display */}
            <div className="lg:col-span-6 relative">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-gold/10 rounded-full blur-xl" />
                <h3 className="text-primary-navy font-extrabold text-xl mb-4">Empowering Andhra Pradesh</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Capital Growth Finance operates locally in Vijayawada, catering to regions such as Guntur, Visakhapatnam, and Vijayawada rural. We offer simplified access to auto lending, commercial fleets, and refinancing options.
                </p>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border border-slate-150 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-gold/25 text-primary-navy flex items-center justify-center font-bold">99%</div>
                    <div>
                      <h4 className="text-xs font-bold text-primary-navy">Customer Satisfaction</h4>
                      <p className="text-[10px] text-slate-400">Feedback from over 8,500 regional customers.</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-slate-150 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-navy text-accent-gold flex items-center justify-center font-bold">10+</div>
                    <div>
                      <h4 className="text-xs font-bold text-primary-navy">Years Regional Presence</h4>
                      <p className="text-[10px] text-slate-400">Serving businesses and retail borrowers since 2016.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Financing Steps Segment */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Steps Visual */}
            <div className="lg:col-span-5 order-last lg:order-first">
              <div className="bg-white rounded-3xl p-6 border border-slate-150 shadow-lg space-y-4">
                <div className="flex justify-between items-center text-xs font-bold text-primary-navy uppercase tracking-wider pb-2 border-b border-slate-100">
                  <span>How It Works</span>
                  <span className="text-accent-gold">4-Step Sanction Process</span>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-accent-gold/25 text-primary-navy flex items-center justify-center font-extrabold text-xs shrink-0 mt-0.5">1</span>
                    <div>
                      <h4 className="text-xs font-bold text-primary-navy">Select Your Vehicle</h4>
                      <p className="text-[10px] text-slate-400">Choose any new car, pre-owned car or commercial vehicle from your preferred dealer.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-accent-gold/25 text-primary-navy flex items-center justify-center font-extrabold text-xs shrink-0 mt-0.5">2</span>
                    <div>
                      <h4 className="text-xs font-bold text-primary-navy">Calculate EMI & Apply</h4>
                      <p className="text-[10px] text-slate-400">Estimate your payments using our calculator and submit a quick client-side form.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-accent-gold/25 text-primary-navy flex items-center justify-center font-extrabold text-xs shrink-0 mt-0.5">3</span>
                    <div>
                      <h4 className="text-xs font-bold text-primary-navy">Verify & Sanction</h4>
                      <p className="text-[10px] text-slate-400">Our advisor validates your income statements and issues loan approval within 2-4 hours.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-accent-gold/25 text-primary-navy flex items-center justify-center font-extrabold text-xs shrink-0 mt-0.5">4</span>
                    <div>
                      <h4 className="text-xs font-bold text-primary-navy">Disbursal & Delivery</h4>
                      <p className="text-[10px] text-slate-400">We pay the dealership directly, transfer hypothecation, and you drive away.</p>
                    </div>
                  </div>
                </div>
                <div className="pt-2 text-center">
                  <Link
                    href="/loans"
                    className="inline-block text-xs font-bold text-primary-navy hover:text-accent-gold"
                  >
                    Check Loan EMI Instantly →
                  </Link>
                </div>
              </div>
            </div>

            {/* Steps Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-accent-gold/10 text-primary-navy text-xs font-bold uppercase tracking-wider">
                Seamless Financing Flow
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy leading-tight">
                Zero Stress Auto Financing Process
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Why get stuck in tedious banking lines? Capital Growth Finance coordinates directly with vehicle dealerships in Vijayawada and Guntur to expedite your delivery.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-slate-100">
                  <h4 className="font-bold text-sm text-primary-navy">Dealer Network</h4>
                  <p className="text-[11px] text-slate-500 mt-1">Direct tie-ups with premium car showrooms in AP.</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-100">
                  <h4 className="font-bold text-sm text-primary-navy">RC Hypothecation</h4>
                  <p className="text-[11px] text-slate-500 mt-1">Hassle-free registration and RTO paperwork support.</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-150">
                  <h4 className="font-bold text-sm text-primary-navy">Refinancing Options</h4>
                  <p className="text-[11px] text-slate-500 mt-1">Get up to 70% cash loans against your existing vehicles.</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-150">
                  <h4 className="font-bold text-sm text-primary-navy">Commercial Fleets</h4>
                  <p className="text-[11px] text-slate-500 mt-1">Flexible structures for transport startups & fleets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-accent-gold/10 text-primary-navy text-xs font-bold uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Quick answers regarding loan applications, criteria, and investment processing timelines.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-slate-150 rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 py-4 bg-slate-50 hover:bg-slate-100/60 flex justify-between items-center text-left text-sm font-bold text-primary-navy transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4.5 h-4.5 text-accent-gold shrink-0" />
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 py-4 bg-white border-t border-slate-150 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog & Resources Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-accent-gold/10 text-primary-navy text-xs font-bold uppercase tracking-wider">
              Financial Guides
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy">
              Knowledge & Advice Hub
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Stay updated with smart financial planning hacks, taxation updates, and investment tutorials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl border border-slate-150 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase">
                    <span className="text-accent-gold font-bold">{blog.category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {blog.date}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-primary-navy group-hover:text-accent-gold transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {blog.desc}
                  </p>
                </div>
                <div className="p-6 pt-0 border-t border-slate-50">
                  <Link
                    href="/loans"
                    className="text-xs font-bold text-primary-navy flex items-center gap-1 hover:text-accent-gold"
                  >
                    <BookOpen className="w-3.5 h-3.5" /> Read Full Article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Call to Action Section */}
      <section className="bg-primary-navy py-16 text-white text-center relative overflow-hidden border-t border-accent-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Drive Your New Vehicle?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Get personalized assistance from our senior vehicle lending desk based in Benz Circle, Vijayawada. Connect today!
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-accent-gold hover:bg-gold-hover text-primary-navy font-bold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-all text-sm"
            >
              Apply Online Now
            </button>
            <a
              href="tel:+919999999999"
              className="px-8 py-3 bg-white/10 hover:bg-white/15 rounded-lg border border-white/10 text-sm font-semibold transition-all"
            >
              Call an Expert
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />

      {/* Application Modal */}
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
