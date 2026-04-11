"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

const layers = [
  { img: "/assets/oidaterapia/animado-1.png", text: "Generador y bienqueriente de todos los seres" },
  { img: "/assets/oidaterapia/animado-2.png", text: "Energía espiritual omnipenetrante" },
  { img: "/assets/oidaterapia/animado-3.png", text: "Unidad de conciencia individual (yo)" },
  { img: "/assets/oidaterapia/animado-4.png", text: "Guía Interno" },
  { img: "/assets/oidaterapia/animado-5.png", text: "Cuerpo sutil y cambiante (mente e intelecto)" },
  { img: "/assets/oidaterapia/animado-6.png", text: "Cuerpo físico y cambiante" }
];

export default function OntologyWalkthrough() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      {/* Botón Flotante */}
      <div className="fixed bottom-24 right-4 z-[90]">
        <motion.button
          onClick={() => setIsOpen(true)}
          className="relative w-24 h-24 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_35px_rgba(255,255,255,0.8)] border-2 border-white/40 overflow-hidden outline-none bg-indigo/50 backdrop-blur-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src="/assets/oidaterapia/animado-flotante.png" 
            alt="Ontology Walkthrough" 
            className="w-full h-full object-cover p-1 rounded-full drop-shadow-md"
          />
        </motion.button>
      </div>

      {/* Modal Pantalla Completa */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4"
            >
              {/* Fondo del Espacio */}
              <div className="absolute inset-0 bg-[#0A192F]">
                <img 
                  src="/assets/oidaterapia/espacio-fondo.png" 
                  alt="Espacio" 
                  className="w-full h-full object-cover opacity-60 mix-blend-screen"
                />
              </div>

              {/* Contenido Contenedor */}
              <div className="relative z-10 w-full max-w-7xl h-full flex flex-col items-center pt-10 md:pt-20">
                {/* Botón de Cierre */}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white transition-all z-50 backdrop-blur-md border border-white/20 group"
                >
                  <X className="w-8 h-8 md:w-10 md:h-10 group-hover:rotate-90 transition-transform duration-300 drop-shadow-md" />
                </button>

                <motion.h2 
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-5xl font-heading font-bold text-white text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] mb-10"
                >
                  Relación entre la Divinidad y el Animado
                </motion.h2>

                <div className="relative flex flex-col lg:flex-row items-center justify-center w-full max-w-5xl gap-10 mt-10">
                  
                  {/* Contenedor de Textos */}
                  <div className="lg:w-1/3 order-2 lg:order-1 flex flex-col gap-6 w-full px-4">
                    {layers.map((layer, index) => (
                      <motion.div
                        key={`text-${index}`}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 1.5 + 0.5, duration: 1 }}
                        className="flex items-center gap-4 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg"
                      >
                        <div className="w-8 h-8 flex-shrink-0 bg-cielo rounded-full text-[#0A192F] flex items-center justify-center font-bold text-lg font-serif border border-white/50">
                          {index + 1}
                        </div>
                        <p className="text-white font-serif text-lg md:text-xl drop-shadow-md">
                          {layer.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Contenedor de Animación por Capas */}
                  <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] order-1 lg:order-2 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    {layers.map((layer, index) => (
                      <motion.img
                        key={`img-${index}`}
                        src={layer.img}
                        alt={`Capa ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 1.5 + 0.5, duration: 1.2, ease: "easeOut" }}
                      />
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
