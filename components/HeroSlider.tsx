"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/assets/oidaterapia/slider-1.jpg",
  "/assets/oidaterapia/slider-2.jpg",
  "/assets/oidaterapia/slider-3.jpg?v=1",
  "/assets/oidaterapia/slider-4.jpg",
  "/assets/oidaterapia/slider-5.jpg"
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slider ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-indigo/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-arena/90 via-transparent to-transparent" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-arena drop-shadow-xl tracking-widest mb-6"
        >
          Psicología Perenne
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-3xl font-sans text-tierra drop-shadow-lg max-w-4xl tracking-wide font-light"
        >
          Integrando la sabiduría milenaria y la fe sanadora para tu camino de evolución.
        </motion.p>
      </div>
    </div>
  );
}
