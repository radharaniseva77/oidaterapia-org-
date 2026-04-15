"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// He cambiado esto a V3 para forzar a Vercel a descargar las imágenes de nuevo
const ASSET_VERSION = "20260415-v3";

const images = [
  `/assets/oidaterapia/slider-1.jpg?v=${ASSET_VERSION}`,
  `/assets/oidaterapia/slider-2.jpg?v=${ASSET_VERSION}`,
  `/assets/oidaterapia/slider-3.jpg?v=${ASSET_VERSION}`, // Esta es tu imagen nueva
  `/assets/oidaterapia/slider-4.jpg?v=${ASSET_VERSION}`,
  `/assets/oidaterapia/slider-5.jpg?v=${ASSET_VERSION}`
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
      <AnimatePresence mode="wait">
        <motion.img
          key={`${currentIndex}-${ASSET_VERSION}`}
          src={images[currentIndex]}
          alt={`Slider ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white drop-shadow-xl tracking-widest mb-6"
        >
          Psicología Perenne
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-3xl font-sans text-white drop-shadow-lg max-w-4xl tracking-wide font-light"
        >
          Integrando la sabiduría milenaria y la fe sanadora para tu camino de evolución.
        </motion.p>
      </div>
    </div>
  );
}