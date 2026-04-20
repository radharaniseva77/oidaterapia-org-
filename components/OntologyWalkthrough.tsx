"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

/*
  ORDEN Y JERARQUÍA EXTRÍCTAMENTE DEFINIDA:
  Aparición cronológica: 1 -> 2 -> 3 -> 4 -> 5 -> 6
  Z-Index Estricto (Tailwind classes):
  1: z-[10] | 2: z-[20] | 5: z-[30] | 6: z-[40] | 3: z-[50] | 4: z-[60]
*/
const sequentialLayers = [
  { id: 1, src: "/assets/oidaterapia/animado-1.png", layerClass: "z-[10]" },
  { id: 2, src: "/assets/oidaterapia/animado-2.png", layerClass: "z-[20]" },
  { id: 3, src: "/assets/oidaterapia/animado-3.png", layerClass: "z-[50]" },
  { id: 4, src: "/assets/oidaterapia/animado-4.png", layerClass: "z-[60]" },
  { id: 5, src: "/assets/oidaterapia/animado-5.png", layerClass: "z-[30]" },
  { id: 6, src: "/assets/oidaterapia/animado-6.png", layerClass: "z-[40]" },
];

/* Textos extraídos con líneas relativas apuntando rigurosamente a las áreas definidas */
const textNodes = [
  {
    id: 1,
    name: "Generador y bienqueriente de todos los seres",
    desc: "Aquel que está favorablemente dispuesto a ayudar a otros en el sendero de su vida en un nivel físico, mental y espiritual.",
    pos: "top-[10%] left-[2%] lg:left-[5%] xl:left-[10%]",
    lineX1: "25%", lineY1: "15%", lineX2: "50%", lineY2: "15%" // hacia la esfera superior
  },
  {
    id: 2,
    name: "Unidad de conciencia individual (yo)",
    desc: "En diferentes culturas se llama con diferentes nombres como: alma, atma, jiva etcétera. Científicamente es un ser que puede recibir, transmitir y asimilar información.",
    pos: "top-[40%] left-[2%] lg:left-[5%] xl:left-[10%]",
    lineX1: "25%", lineY1: "45%", lineX2: "45%", lineY2: "35%" // a la silueta (yo)
  },
  {
    id: 3,
    name: "Cuerpo sutil y cambiante (mente e intelecto)",
    desc: "Está conformado por la mente, la inteligencia y el ego. El ser está cubierto de un cuerpo astral...",
    pos: "top-[75%] left-[2%] lg:left-[5%] xl:left-[10%]",
    lineX1: "25%", lineY1: "80%", lineX2: "35%", lineY2: "62%" // hacia el área torso medio / contorno intermedio (blanco)
  },
  {
    id: 4,
    name: "Energía espiritual omnipenetrante",
    desc: "Hace parte de la totalidad eterna de la existencia, ocupando una posición superior a los cuerpos físico y sutil...",
    pos: "top-[10%] right-[2%] lg:right-[5%] xl:right-[10%]",
    lineX1: "75%", lineY1: "15%", lineX2: "55%", lineY2: "25%"
  },
  {
    id: 5,
    name: "Guía Interno",
    desc: "Es la fuerza que nos conecta con un mayor compromiso, nos cuida, guía y da la posibilidad de entablar una relación personal...",
    pos: "top-[45%] right-[2%] lg:right-[5%] xl:right-[10%]",
    lineX1: "75%", lineY1: "50%", lineX2: "50%", lineY2: "45%" // Hacia el pecho
  },
  {
    id: 6,
    name: "Cuerpo físico cambiante",
    desc: "Es el que le permite interactuar con el entorno a través de los sentidos. El cuerpo físico es cambiante por naturaleza...",
    pos: "top-[75%] right-[2%] lg:right-[5%] xl:right-[10%]",
    lineX1: "75%", lineY1: "80%", lineX2: "65%", lineY2: "80%" // hacia el borde exterior silueta
  }
];

// Stagger Variants (Animación en Bloque)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger estricto 0.15s
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2 } }
};

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
      <div className="fixed bottom-[20px] md:bottom-[20px] right-6 z-[90] w-16 flex justify-center">
        <motion.button
          onClick={() => setIsOpen(true)}
          className="relative outline-none z-[90] cursor-pointer"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src="/assets/oidaterapia/animado-flotante.png" 
            alt="Abrir Relación entre Divinidad y Animado" 
            className="w-[450px] h-[450px] md:w-[600px] md:h-[600px] object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]"
          />
        </motion.button>
      </div>

      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-[9999] flex flex-col items-center bg-[#0A192F] overflow-y-auto overflow-x-hidden p-4 md:p-8">
              
              <div className="fixed inset-0 pointer-events-none">
                <img 
                  src="/assets/oidaterapia/espacio-fondo.png" 
                  alt="Espacio"
                  className="w-full h-full object-cover opacity-60 mix-blend-screen"
                />
              </div>

              <div className="relative z-10 w-full min-h-screen flex flex-col items-center pb-20 pt-4">
                
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-0 right-0 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur-md border border-white/20 transition-transform hover:rotate-90 z-[100]"
                >
                  <X className="w-8 h-8" />
                </button>

                <motion.h2 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white text-center drop-shadow-xl mt-10 mb-8 max-w-4xl tracking-tight z-[100]"
                >
                  Relación entre la Divinidad y el Animado
                </motion.h2>

                <div className="relative w-full max-w-[1400px] flex flex-1 items-center justify-center min-h-[600px] lg:min-h-[800px] mt-4 lg:mt-8">

                  <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-[80]">
                    {textNodes.map((n) => (
                      <motion.line 
                        key={`vector-${n.id}`}
                        x1={n.lineX1} y1={n.lineY1} x2={n.lineX2} y2={n.lineY2}
                        stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 2.2, duration: 1.5 }}
                      />
                    ))}
                  </svg>

                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] flex-shrink-0 mx-auto"
                  >
                    {sequentialLayers.map((img) => (
                      <motion.img
                        key={`layer-${img.id}`}
                        src={img.src}
                        variants={itemVariants}
                        className={`absolute inset-0 w-full h-full object-contain pointer-events-none ${img.layerClass}`}
                      />
                    ))}
                  </motion.div>

                  <div className="absolute inset-x-0 bottom-[-400px] flex flex-col gap-4 lg:static z-[100]">
                    {textNodes.map((node, index) => (
                      <motion.div
                        key={`text-idx-${node.id}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5 + (index * 0.1), duration: 0.8 }}
                        className={`w-full max-w-[280px] lg:max-w-xs xl:max-w-sm mx-auto lg:absolute ${node.pos} bg-[#0A192F]/80 backdrop-blur-xl p-5 md:p-6 rounded-2xl border border-white/20 shadow-[0_5px_25px_rgba(0,0,0,0.5)] z-[100] transform lg:-translate-y-1/2`}
                      >
                        <h4 className="text-white font-heading font-bold text-lg leading-tight mb-2">
                          {node.name}
                        </h4>
                        <p className="text-[#FAF7F2]/80 font-sans text-base md:text-lg leading-relaxed">
                          {node.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
