"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/573102436421"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] animate-[pulse_3s_infinite] transition-all"
    >
      <div className="flex items-center gap-2">
        <MessageCircle className="h-6 w-6 mix-blend-screen drop-shadow-sm" />
        <span className="font-semibold hidden sm:block tracking-wide">Hablemos</span>
      </div>
    </motion.a>
  );
}
