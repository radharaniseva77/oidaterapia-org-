"use client";

import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/573102436421"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
      transition={{ 
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center transition-all bg-transparent"
    >
      <img 
        src="/animado-flotante.png" 
        alt="Contáctanos - Oida Terapia" 
        className="w-24 h-24 object-contain drop-shadow-xl"
      />
    </motion.a>
  );
}
