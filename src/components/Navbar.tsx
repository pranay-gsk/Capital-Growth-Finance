"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, DollarSign, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenApplyModal?: () => void;
}

export default function Navbar({ onOpenApplyModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Loan Products", href: "/loans" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-primary-navy/95 backdrop-blur-md border-b border-accent-gold/20 py-3 shadow-lg"
            : "bg-primary-navy/90 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-accent-gold p-2 rounded-lg text-primary-navy font-bold flex items-center justify-center shadow-md shadow-accent-gold/20">
                <DollarSign className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-lg sm:text-xl tracking-tight leading-none group-hover:text-accent-gold transition-colors">
                  CAPITAL GROWTH
                </span>
                <span className="text-accent-gold text-[10px] sm:text-xs tracking-widest font-semibold uppercase mt-0.5">
                  FINANCE
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-sm font-medium tracking-wide transition-colors ${
                      isActive ? "text-accent-gold" : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBorder"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Contact & CTA Buttons */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="tel:+918888888888"
                className="flex items-center gap-2 text-slate-300 hover:text-accent-gold text-sm font-medium transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
              >
                <Phone className="w-4 h-4 text-accent-gold" />
                <span>+91 99999 99999</span>
              </a>
              <button
                onClick={onOpenApplyModal}
                className="bg-accent-gold hover:bg-gold-hover text-primary-navy font-bold text-sm px-5 py-2.5 rounded-lg shadow-lg shadow-accent-gold/15 transition-all hover:scale-105 duration-200"
              >
                Apply for Loan
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-primary-navy border-t border-accent-gold/15"
            >
              <div className="px-4 pt-4 pb-6 space-y-3">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                        isActive
                          ? "bg-accent-gold/10 text-accent-gold border-l-4 border-accent-gold"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <hr className="border-accent-gold/10 my-4" />
                <div className="flex flex-col gap-3 px-4">
                  <a
                    href="tel:+918888888888"
                    className="flex items-center gap-3 text-slate-300 py-2"
                  >
                    <Phone className="w-5 h-5 text-accent-gold" />
                    <span className="font-semibold">+91 99999 99999</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      if (onOpenApplyModal) onOpenApplyModal();
                    }}
                    className="w-full bg-accent-gold hover:bg-gold-hover text-primary-navy font-bold py-3 px-4 rounded-lg text-center flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Apply for Loan</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Spacer to avoid layout shift */}
      <div className="h-[76px] sm:h-[88px]" />
    </>
  );
}
