"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingActions() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919999999999?text=Hi,%20I%20am%20interested%20in%20loans/investments%20from%20Capital%20Growth%20Finance.", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Call Now Button - Mobile Highlighted */}
      <motion.a
        href="tel:+919999999999"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 bg-secondary-blue hover:bg-primary-navy text-accent-gold rounded-full shadow-2xl border border-accent-gold/30 cursor-pointer focus:outline-none"
        title="Call Support"
      >
        <Phone className="w-6 h-6 animate-pulse" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.button
        onClick={handleWhatsApp}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl cursor-pointer focus:outline-none"
        title="WhatsApp Us"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </motion.button>
    </div>
  );
}
