"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

const desktopLayers = [
  { 
    img: "/assets/oidaterapia/animado-1.png", text: "Generador y bienqueriente de todos los seres", z: 20,
    pos: "top-[15%] left-[2%] lg:left-[5%] xl:left-[10%]", lineX1: "20%", lineY1: "20%", lineX2: "45%", lineY2: "40%"
  },
  { 
    img: "/assets/oidaterapia/animado-2.png", text: "Energía espiritual omnipenetrante", z: 40,
    pos: "top-[25%] right-[2%] lg:right-[5%] xl:right-[10%]", lineX1: "80%", lineY1: "30%", lineX2: "55%", lineY2: "35%"
  },
  { 
    img: "/assets/oidaterapia/animado-3.png", text: "Unidad de conciencia individual (yo)", z: 30,
    pos: "top-[50%] left-[2%] lg:left-[5%] xl:left-[10%]", lineX1: "20%", lineY1: "55%", lineX2: "48%", lineY2: "50%"
  },
  { 
    img: "/assets/oidaterapia/animado-4.png", text: "Guía Interno", z: 30,
    pos: "top-[60%] right-[2%] lg:right-[5%] xl:right-[10%]", lineX1: "80%", lineY1: "65%", lineX2: "53%", lineY2: "55%"
  },
  { 
    img: "/assets/oidaterapia/animado-5.png", text: "Cuerpo sutil y cambiante (mente e intelecto)", z: 10,
    pos: "bottom-[15%] left-[2%] lg:left-[5%] xl:left-[10%]", lineX1: "25%", lineY1: "80%", lineX2: "45%", lineY2: "65%"
  },
  { 
    img: "/assets/oidaterapia/animado-6.png", text: "Cuerpo físico y cambiante", z: 5,
    pos: "bottom-[5%] right-[2%] lg:right-[5%] xl:right-[10%]", lineX1: "70%", lineY1: "85%", lineX2: "58%", lineY2: "75%"
  }
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
      {/* Botón Flotante Liberta */}
      <div className="fixed bottom-10 right-4 md:right-10 z-[90]">
        <motion.button
          onClick={() => setIsOpen(true)}
          className="relative outline-none z-[90] cursor-pointer"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src="/assets/oidaterapia/animado-flotante.png?v=2" 
            alt="Ontology Walkthrough" 
            className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]"
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
              className="fixed inset-0 z-[9999] flex flex-col items-center overflow-y-auto overflow-x-hidden bg-[#0A192F]"
            >
              {/* Fondo del Espacio */}
              <div className="fixed inset-0 pointer-events-none">
                <img 
                  src="/assets/oidaterapia/espacio-fondo.png?v=2" 
                  alt="Espacio Constelación" 
                  className="w-full h-full object-cover opacity-70 mix-blend-screen"
                />
              </div>

              {/* Contenido Contenedor */}
              <div className="relative z-10 w-full min-h-screen flex flex-col items-center pt-8 pb-20">
                {/* Botón de Cierre */}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="fixed top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white transition-all z-[100] backdrop-blur-md border border-white/20 group cursor-pointer shadow-lg"
                >
                  <X className="w-8 h-8 md:w-10 md:h-10 group-hover:rotate-90 transition-transform duration-300 drop-shadow-md" />
                </button>

                <motion.h2 
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white text-center drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] mt-4 mb-2 md:mb-10 px-4 max-w-4xl tracking-tight"
                >
                  Relación entre la Divinidad y el Animado
                </motion.h2>

                {/* Contenedor del Diagrama Ontológico */}
                <div className="relative w-full max-w-[1400px] flex flex-col lg:block items-center justify-center flex-1 px-4 lg:min-h-[700px] mt-10">
                  
                  {/* SVG Pointers (Desktop Only) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-[25]">
                    {desktopLayers.map((l, i) => (
                        <motion.line 
                            key={`line-${i}`}
                            x1={l.lineX1} y1={l.lineY1} x2={l.lineX2} y2={l.lineY2}
                            stroke="rgba(255,255,255,0.3)" strokeWidth="2"
                            strokeDasharray="6 6"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: i * 1.5 + 1.2, duration: 1 }}
                        />
                    ))}
                  </svg>

                  {/* Central Figure */}
                  <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] flex-shrink-0 lg:mx-auto z-20">
                    {desktopLayers.map((layer, index) => (
                        <motion.img
                            key={`img-${index}`}
                            src={layer.img}
                            className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                            style={{ zIndex: layer.z }}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: index * 1.5 + 0.5, duration: 1.5, ease: "easeOut" }}
                        />
                    ))}
                  </div>

                  {/* Texts - Absolute on Desktop, Stacked on Mobile */}
                  <div className="w-full flex flex-col gap-4 mt-8 lg:mt-0 lg:block lg:absolute lg:inset-0 pointer-events-none z-[50]">
                    {desktopLayers.map((layer, index) => (
                        <motion.div
                           key={`text-${index}`}
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: index * 1.5 + 0.5, duration: 1 }}
                           className={`lg:absolute ${layer.pos} w-full lg:w-64 xl:w-72 bg-black/60 backdrop-blur-xl p-4 lg:p-5 rounded-2xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-center flex items-center justify-center pointer-events-auto hover:bg-black/80 hover:scale-105 transition-all duration-300 mx-auto sm:max-w-sm`}
                        >
                             <p className="text-white/90 font-sans font-medium text-lg lg:text-xl drop-shadow-md leading-snug">{layer.text}</p>
                        </motion.div>
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
