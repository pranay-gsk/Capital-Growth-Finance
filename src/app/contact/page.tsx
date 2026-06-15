"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ApplicationModal from "@/components/ApplicationModal";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  CheckCircle,
  HelpCircle
} from "lucide-react";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "New Car Loans",
    amount: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    // Simulate successful form submission client-side for static site
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919999999999?text=Hi,%20I%20have%20an%2520inquiry%20regarding%20Capital%20Growth%20Finance%20services.", "_blank");
  };

  return (
    <>
      <Navbar onOpenApplyModal={() => setIsModalOpen(true)} />

      {/* Header Banner */}
      <section className="bg-primary-navy py-16 text-center text-white border-b border-accent-gold/20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-secondary-blue to-primary-navy opacity-90" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-3">
          <span className="text-accent-gold text-xs font-bold uppercase tracking-widest block">Get In Touch</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Contact Us
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Contact our advisors or visit our head office in Vijayawada, Andhra Pradesh.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Info Panel */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-navy">
                  Vijayawada Head Office
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Have questions about EMI schedules, eligibility criteria, or need a custom wealth report? Call, write, or drop by our office.
                </p>
              </div>

              {/* Details List */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-navy text-accent-gold flex items-center justify-center shrink-0 border border-accent-gold/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary-navy">Office Address</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      3rd Floor, Golden Towers, Benz Circle, Vijayawada, Andhra Pradesh - 520010
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-navy text-accent-gold flex items-center justify-center shrink-0 border border-accent-gold/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary-navy">Contact Numbers</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      <a href="tel:+919999999999" className="hover:text-accent-gold transition-colors block">
                        +91 99999 99999 (Head Desk)
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-navy text-accent-gold flex items-center justify-center shrink-0 border border-accent-gold/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary-navy">Email Inquiries</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      <a href="mailto:info@capitalgrowthfinance.com" className="hover:text-accent-gold transition-colors block">
                        info@capitalgrowthfinance.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-navy text-accent-gold flex items-center justify-center shrink-0 border border-accent-gold/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary-navy">Office Timings</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Monday - Saturday: 9:30 AM to 6:30 PM (Sunday Closed)
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200">
                <button
                  onClick={handleWhatsApp}
                  className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center gap-2 text-xs sm:text-sm font-bold transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp Us</span>
                </button>
                <a
                  href="tel:+919999999999"
                  className="px-4 py-2.5 bg-slate-200 hover:bg-slate-300 text-primary-navy rounded-lg flex items-center gap-2 text-xs sm:text-sm font-bold transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Form Panel */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-150 p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-primary-navy mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-primary-navy">Message Received!</h4>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto">
                    Thank you for contacting us. One of our senior financial planning experts will reach out to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setErrorMsg(null);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        service: "Personal Loans",
                        amount: "",
                        message: "",
                      });
                    }}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter full name"
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold/40 focus:border-accent-gold text-xs sm:text-sm text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        pattern="[0-9]{10}"
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold/40 focus:border-accent-gold text-xs sm:text-sm text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold/40 focus:border-accent-gold text-xs sm:text-sm text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                        Service Required *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold/40 focus:border-accent-gold text-xs sm:text-sm text-slate-800 bg-white"
                      >
                        <option>New Car Loans</option>
                        <option>Used Car Loans</option>
                        <option>Commercial Vehicle Loans</option>
                        <option>Two-Wheeler Loans</option>
                        <option>Loan Against Vehicle</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                      Required Loan Amount (₹) - Optional
                    </label>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      placeholder="e.g. 1000000"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold/40 focus:border-accent-gold text-xs sm:text-sm text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                      Message / Inquiry Details
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold/40 focus:border-accent-gold text-xs sm:text-sm text-slate-800 resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-xs font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-accent-gold hover:bg-gold-hover disabled:bg-slate-200 text-primary-navy font-bold rounded-lg flex items-center justify-center gap-2 shadow-lg transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-navy border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Styled Google Maps Placeholder */}
      <section className="py-0 h-96 relative w-full bg-slate-200 border-t border-b border-slate-350">
        <div className="absolute inset-0 bg-[#e5e9f0] flex flex-col items-center justify-center p-4 text-center">
          <MapPin className="w-10 h-10 text-primary-navy animate-bounce mb-3" />
          <h4 className="text-base font-bold text-primary-navy">Capital Growth Finance Head Office Map</h4>
          <p className="text-xs text-slate-500 max-w-sm mt-1 mb-4">
            Benz Circle, Vijayawada, Andhra Pradesh 520010
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-primary-navy text-white text-xs font-bold rounded-lg border border-accent-gold/20 hover:bg-secondary-blue shadow-md transition-all"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
