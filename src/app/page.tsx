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
  FileText
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ApplicationModal from "@/components/ApplicationModal";

// Data
const stats = [
  { value: "5000+", label: "Happy Customers" },
  { value: "₹100 Cr+", label: "Loans Processed" },
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Satisfaction Rate" },
];

const mainServices = [
  { title: "Personal Loans", desc: "Quick cash up to ₹20 Lakhs for personal milestones, travel, or medical emergencies.", icon: UserCheck },
  { title: "Business Loans", desc: "Capital loans up to ₹2 Crores to scale operations, purchase inventory, or upgrade tech.", icon: TrendingUp },
  { title: "Home Loans", desc: "Attractive interest rates with flexible tenures to build or buy your dream home.", icon: ShieldCheck },
  { title: "Vehicle Loans", desc: "Get fast approvals and high LTV financing on your new car or commercial vehicle.", icon: Award },
];

const faqs = [
  { q: "How quickly can I get loan approval?", a: "For pre-approved customer profiles, approval happens within 2 hours. Normal processing takes 24 to 48 hours after submitting verified documentation." },
  { q: "What documents are required?", a: "Standard requirements include: PAN card, Aadhaar card, past 6 months bank statements, and income proof (Salary slips & Form 16 for salaried; ITR & financial statements for self-employed)." },
  { q: "Do you provide business loans?", a: "Yes, we provide unsecured and secured business loans up to ₹2 Crores for businesses operating in Vijayawada and across Andhra Pradesh." },
  { q: "Can I apply online?", a: "Absolutely! You can apply directly through our online loan application form. Our advisors will then guide you digitally for subsequent steps." },
  { q: "What are the interest rates?", a: "Our interest rates are highly competitive, starting from 8.5% p.a. for Home Loans and 10.5% p.a. for Personal & Business Loans depending on credit profiling." },
];

const blogs = [
  { title: "Smart Ways to Manage Business Cash Flow", category: "Business Advice", date: "June 10, 2026", desc: "Learn essential strategies to optimize working capital and keep your cash flow healthy." },
  { title: "A Beginner's Guide to SIP & Mutual Funds", category: "Wealth Planning", date: "May 28, 2026", desc: "Understand how regular small investments can grow into a massive wealth corpus over time." },
  { title: "Understanding Home Loan Interest Rates", category: "Loan Guide", date: "May 15, 2026", desc: "Floating vs Fixed rates? Discover which home loan structure suits your financial budget." },
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
                <span>Premier Financial Solutions in Andhra Pradesh</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
              >
                Your Trusted <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-yellow-200 to-accent-gold">
                  Financial Growth
                </span> Partner
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
              >
                Helping individuals and businesses achieve their financial goals through smart lending, wealth investments, insurance advisory, and strategic financial planning.
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
                    <div className="w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold font-extrabold text-sm">C</div>
                    <div>
                      <span className="block text-xs font-bold text-white uppercase">Growth Dashboard</span>
                      <span className="block text-[10px] text-slate-400">Vijayawada, AP</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">ACTIVE PORTFOLIO</span>
                </div>

                {/* Main Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/5">
                    <span className="block text-[10px] text-slate-400 uppercase font-semibold">Total Wealth Growth</span>
                    <span className="block text-lg font-bold text-accent-gold mt-1">+24.8%</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/5">
                    <span className="block text-[10px] text-slate-400 uppercase font-semibold">Current Best APR</span>
                    <span className="block text-lg font-bold text-white mt-1">8.5% p.a.</span>
                  </div>
                </div>

                {/* SVG Visual Graph representing Growth */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex justify-between text-[10px] text-slate-400 mb-2">
                    <span>Performance (10Y CAGR)</span>
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
              Premium Lending Solutions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We process competitive credit lines for personal and business goals with minimal documentation and transparent guidelines.
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
              <span className="block text-accent-gold font-bold text-lg sm:text-xl">Quick Approval</span>
              <span className="block text-[10px] text-slate-300 uppercase">Within 24 Hours</span>
            </div>
            <div className="h-10 w-px bg-white/10 hidden md:block" />
            <div className="space-y-1">
              <span className="block text-accent-gold font-bold text-lg sm:text-xl">Minimal Documents</span>
              <span className="block text-[10px] text-slate-300 uppercase">Fully Digital Flow</span>
            </div>
            <div className="h-10 w-px bg-white/10 hidden md:block" />
            <div className="space-y-1">
              <span className="block text-accent-gold font-bold text-lg sm:text-xl">Lowest Interest Rates</span>
              <span className="block text-[10px] text-slate-300 uppercase">Starting at 8.5% p.a.</span>
            </div>
            <div className="h-10 w-px bg-white/10 hidden md:block" />
            <div className="space-y-1">
              <span className="block text-accent-gold font-bold text-lg sm:text-xl">Flexible EMI Options</span>
              <span className="block text-[10px] text-slate-300 uppercase">Up to 30 Years Tenure</span>
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
                Empowering Financial Journeys With Trust & Excellence
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                As a leading financial consulting firm in Vijayawada, Andhra Pradesh, we focus heavily on transparent charges, secure online processing, and structured wealth advice.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <ThumbsUp className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary-navy">Fast Loan Processing</h4>
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
                    <p className="text-[11px] text-slate-500">Dedicated credit officer assignments.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <ThumbsUp className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary-navy">Secure Transaction Portal</h4>
                    <p className="text-[11px] text-slate-500">Banking-grade 256-bit data protection.</p>
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
                  Capital Growth Finance operates locally in Vijayawada, catering to regions such as Guntur, Visakhapatnam, and Vijayawada rural. We offer simplified access to capital lines, wealth portfolios, and insurance safety nets.
                </p>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border border-slate-150 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-gold/25 text-primary-navy flex items-center justify-center font-bold">98%</div>
                    <div>
                      <h4 className="text-xs font-bold text-primary-navy">Customer Satisfaction</h4>
                      <p className="text-[10px] text-slate-400">Feedback from over 5,000 regional customers.</p>
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

      {/* Investment & Wealth Segment */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Wealth Visual */}
            <div className="lg:col-span-5 order-last lg:order-first">
              <div className="bg-white rounded-3xl p-6 border border-slate-150 shadow-lg space-y-4">
                <div className="flex justify-between items-center text-xs font-bold text-primary-navy uppercase tracking-wider pb-2 border-b border-slate-100">
                  <span>Investment Options</span>
                  <span className="text-accent-gold">Monthly SIP Calculator</span>
                </div>
                <div className="space-y-3.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Mutual Funds</span>
                    <span className="font-bold text-slate-700">12% - 15% Expected Returns</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-150 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-accent-gold rounded-full" />
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Fixed Income Solutions</span>
                    <span className="font-bold text-slate-700">7.5% - 8.5% Assured</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-150 rounded-full overflow-hidden">
                    <div className="w-3/5 h-full bg-primary-navy rounded-full" />
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Portfolio Management Services (PMS)</span>
                    <span className="font-bold text-slate-700">Custom Alpha portfolios</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-150 rounded-full overflow-hidden">
                    <div className="w-11/12 h-full bg-blue-600 rounded-full" />
                  </div>
                </div>
                <div className="pt-2 text-center">
                  <Link
                    href="/services"
                    className="inline-block text-xs font-bold text-primary-navy hover:text-accent-gold"
                  >
                    Calculate SIP Growth Goals →
                  </Link>
                </div>
              </div>
            </div>

            {/* Wealth Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-accent-gold/10 text-primary-navy text-xs font-bold uppercase tracking-wider">
                Investment Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-navy leading-tight">
                Secure Wealth Creation & Retirement Planning
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Invest smartly to counter inflation. Capital Growth Finance guides you to top-performing Mutual Funds, Systematic Investment Plans (SIPs), Portfolio Management, and tax-saver instruments.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-slate-100">
                  <h4 className="font-bold text-sm text-primary-navy">Mutual Funds</h4>
                  <p className="text-[11px] text-slate-500 mt-1">Growth oriented equity schemes.</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-100">
                  <h4 className="font-bold text-sm text-primary-navy">SIP Planning</h4>
                  <p className="text-[11px] text-slate-500 mt-1">Disciplined monthly wealth creation.</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-100">
                  <h4 className="font-bold text-sm text-primary-navy">Retirement Planning</h4>
                  <p className="text-[11px] text-slate-500 mt-1">Stable pension corpus development.</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-100">
                  <h4 className="font-bold text-sm text-primary-navy">Fixed Income</h4>
                  <p className="text-[11px] text-slate-500 mt-1">Low-risk debt and deposit securities.</p>
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
            Ready to Accelerate Your Wealth?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Get personalized assistance from our senior financial planning desk based in Benz Circle, Vijayawada. Connect today!
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
