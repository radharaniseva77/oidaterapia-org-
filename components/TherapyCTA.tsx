"use client";

import { motion } from "framer-motion";

export default function TherapyCTA() {
  return (
    <section className="bg-cielo py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
      <div className="relative max-w-4xl mx-auto text-center space-y-8 z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-heading font-extrabold text-indigo drop-shadow-sm"
        >
          ¿Buscas sanación profesional?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-indigo max-w-2xl mx-auto font-sans font-medium"
        >
          Agenda una sesión que integra Psicología Perenne y Fe Sanadora.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
        >
          <a 
            href="https://wa.me/573102221677"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-10 py-5 bg-indigo text-arena rounded-full font-bold text-lg hover:bg-tierra hover:text-indigo hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Agenda tu Cita Hoy
          </a>
        </motion.div>
      </div>
    </section>
  );
}
