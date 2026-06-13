"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ApplicationModal from "@/components/ApplicationModal";
import { Star, Quote, User, Sparkles } from "lucide-react";

const reviews = [
  {
    name: "Ramesh Krishna",
    location: "Vijayawada",
    service: "Business Loan",
    rating: 5,
    text: "Capital Growth Finance helped secure a Business Loan of ₹50 Lakhs for my retail outlet expansion in Benz Circle. The process was completely digital, and their rates were better than what regular local banks offered. Excellent team!",
  },
  {
    name: "Sowmya Reddy",
    location: "Guntur",
    service: "Home Loan Advisory",
    rating: 5,
    text: "We wanted a home loan with competitive rates. Their advisor guide Ramesh explained the process clearly and helped coordinate documentation quickly. Within 3 days, our home loan was sanctioned. Fully recommend them!",
  },
  {
    name: "Prasad Rao",
    location: "Visakhapatnam",
    service: "Mutual Funds & SIP",
    rating: 5,
    text: "I have been using their wealth advisory services for the past 4 years. The SIP recommendations are solid and have delivered a stable 14% CAGR, keeping my retirement planning on track. Highly professional and knowledgeable.",
  },
  {
    name: "Anitha Devi",
    location: "Vijayawada Rural",
    service: "Personal Loan",
    rating: 4,
    text: "Needed quick funds for a medical emergency. Capital Growth Finance processed a Personal Loan of ₹8 Lakhs within 24 hours. The documentation was minimal. Very thankful for their fast service.",
  },
  {
    name: "Venkatesh Babu",
    location: "Vijayawada",
    service: "Vehicle Loan",
    rating: 5,
    text: "Got quick vehicle financing for my logistics company's commercial fleet expansion. Extremely responsive staff, transparent processing fee schedules, and quick dealer payouts.",
  },
  {
    name: "Kiran Kumar",
    location: "Tenali",
    service: "Tax & Financial Advisory",
    rating: 5,
    text: "Outstanding consultancy services for ITR filing and tax exemptions. Saved a significant amount under 80C and corporate restructuring. Excellent experience overall.",
  },
];

export default function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenApplyModal={() => setIsModalOpen(true)} />

      {/* Header Banner */}
      <section className="bg-primary-navy py-16 text-center text-white border-b border-accent-gold/20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-secondary-blue to-primary-navy opacity-90" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-3">
          <span className="text-accent-gold text-xs font-bold uppercase tracking-widest block">Success Stories</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Customer Testimonials
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            See how we help individuals and local businesses achieve financial independence.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-150 p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.rating ? "text-accent-gold fill-accent-gold" : "text-slate-200"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="w-8 h-8 text-slate-100 absolute -top-4 -left-3 -z-0" />
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed relative z-10 italic">
                      "{rev.text}"
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 text-primary-navy flex items-center justify-center font-bold text-sm border border-slate-200">
                    <User className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-primary-navy">{rev.name}</h4>
                    <div className="flex gap-2 text-[10px] text-slate-400 font-semibold uppercase mt-0.5">
                      <span>{rev.service}</span>
                      <span>•</span>
                      <span className="text-accent-gold">{rev.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Callout */}
      <section className="py-20 bg-white border-t border-slate-100 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-navy">
            Become a part of our 5,000+ member family
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            We are dedicated to building long-term relationships based on credibility, support, and verified value addition. Start today!
          </p>
          <div className="pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary-navy hover:bg-secondary-blue text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-all text-sm"
            >
              Get Started with Us
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
