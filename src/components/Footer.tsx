import Link from "next/link";
import { Car, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-navy text-slate-400 border-t border-accent-gold/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-accent-gold p-2 rounded-lg text-primary-navy font-bold flex items-center justify-center">
                <Car className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-lg tracking-tight leading-none group-hover:text-accent-gold transition-colors">
                  CAPITAL GROWTH
                </span>
                <span className="text-accent-gold text-[10px] tracking-widest font-semibold uppercase mt-0.5">
                  FINANCE
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Your trusted partner for affordable vehicle loans, commercial fleet financing, and hassle-free auto credit in Vijayawada, Andhra Pradesh. Empowering vehicle ownership through transparent terms.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="hover:text-accent-gold transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-accent-gold transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-accent-gold transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10" aria-label="Instagram">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="hover:text-accent-gold transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base tracking-wide uppercase mb-4 border-b border-accent-gold/20 pb-2">
              Vehicle Loan Products
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/loans" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  New Car Loans (High LTV)
                </Link>
              </li>
              <li>
                <Link href="/loans" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Used Car Loans (Quick Sanctions)
                </Link>
              </li>
              <li>
                <Link href="/loans" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Commercial Vehicle Financing
                </Link>
              </li>
              <li>
                <Link href="/loans" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Two-Wheeler Loans
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Refinancing & Loans Against Vehicle
                </Link>
              </li>
            </ul>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-white font-bold text-base tracking-wide uppercase mb-4 border-b border-accent-gold/20 pb-2">
              Why Choose Us
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Up to 90% On-Road Funding
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Minimal Documentation
                </Link>
              </li>
              <li>
                <Link href="/loans" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Flexible EMI Tenures (1-7 Yrs)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Tie-ups with Major Dealerships
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Quick Hypothecation Clearance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-base tracking-wide uppercase mb-4 border-b border-accent-gold/20 pb-2">
              Vijayawada Head Office
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                <span>
                  3rd Floor, Golden Towers, Benz Circle, Vijayawada, Andhra Pradesh - 520010
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent-gold shrink-0" />
                <a href="tel:+918888888888" className="hover:text-white transition-colors">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent-gold shrink-0" />
                <a href="mailto:info@capitalgrowthfinance.com" className="hover:text-white transition-colors">
                  info@capitalgrowthfinance.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-accent-gold shrink-0" />
                <span>Mon - Sat: 9:30 AM - 6:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-gold/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            &copy; {currentYear} Capital Growth Finance. All rights reserved. Designed for elite banking standards.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
