"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function InteractiveDiagrams() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  // Jerarquía estricta según indicaciones (Z-INDEX REAL)
  const animadoImages = [
    { id: 1, src: "/assets/oidaterapia/animado-1.png", zIndex: 10, delay: 0.2 }, // Fondo: animado-1
    { id: 5, src: "/assets/oidaterapia/animado-5.png", zIndex: 20, delay: 1.4 }, // Cuerpo sutil
    { id: 6, src: "/assets/oidaterapia/animado-6.png", zIndex: 30, delay: 1.7 }, // Cuerpo físico (Sobre el sutil)
    { id: 4, src: "/assets/oidaterapia/animado-4.png", zIndex: 40, delay: 1.1 }, // Conexiones
    { id: 3, src: "/assets/oidaterapia/animado-3.png", zIndex: 50, delay: 0.8 }, // Guía interno (Corazón)
    { id: 2, src: "/assets/oidaterapia/animado-2.png", zIndex: 60, delay: 0.5 }, // Divinidad (Esfera)
  ];

  /*
    Coordenadas Exactas para Líneas Requeridas por el Usuario:
    1 (Generador): hacia la esfera superior (top: 15%, left: 50%)
    4 (Guía Interno): hacia el centro del pecho (top: 45%, left: 50%)
    5 (Cuerpo Sutil): hacia el área del torso medio (top: 60%, left: 50%)
    6 (Cuerpo Físico): hacia el borde exterior (top: 80%, left: 50%)
  */
  const nodes = [
    {
      id: 1, 
      name: "Generador y bienqueriente de todos los seres",
      desc: "Aquel que está favorablemente dispuesto a ayudar a otros en el sendero de su vida en un nivel físico, mental y espiritual.",
      x: "15%", y: "15%",
      lineEnd: { x: "50%", y: "15%" },
      side: "left"
    },
    {
      id: 2, 
      name: "Unidad de conciencia individual (yo)",
      desc: "En diferentes culturas se llama con diferentes nombres como: alma, atma, jiva etcétera. Científicamente es un ser que puede recibir, transmitir y asimilar información. Es el ser vivo y consciente que siente, piensa y desea.",
      x: "10%", y: "45%",
      lineEnd: { x: "50%", y: "38%" },
      side: "left"
    },
    {
      id: 3, 
      name: "Cuerpo sutil y cambiante (mente e intelecto)",
      desc: "Está conformado por la mente, la inteligencia y el ego. El ser está cubierto de un cuerpo astral compuesto por la mente (el centro de las actividades de los sentidos y la fuente de las ideas de complacencia sensorial), la inteligencia (facultad de juicio que debe dirigir la mente) y el ego (el punto donde la conciencia individual se identifica con su existencia, pero al entrar en relación con el mundo, se identifica con él y olvida su verdadera identidad).",
      x: "15%", y: "85%",
      lineEnd: { x: "50%", y: "60%" },
      side: "left"
    },
    {
      id: 4, 
      name: "Energía espiritual omnipenetrante",
      desc: "Hace parte de la totalidad eterna de la existencia, ocupando una posición superior a los cuerpos físico y sutil que se caracterizan por ser cambiantes y temporales.",
      x: "85%", y: "15%",
      lineEnd: { x: "50%", y: "26%" },
      side: "right"
    },
    {
      id: 5, 
      name: "Guía Interno",
      desc: "Es la fuerza que nos conecta con un mayor compromiso, nos cuida, guía y da la posibilidad de entablar una relación personal con la Fuente Suprema.",
      x: "90%", y: "45%",
      lineEnd: { x: "50%", y: "45%" },
      side: "right"
    },
    {
      id: 6, 
      name: "Cuerpo físico cambiante",
      desc: "Es el que le permite interactuar con el entorno a través de los sentidos. El cuerpo físico es cambiante por naturaleza y está sujeto a nacer, crecer, permanecer por un tiempo, deteriorarse gradualmente y perecer.",
      x: "85%", y: "85%",
      lineEnd: { x: "50%", y: "80%" },
      side: "right"
    }
  ];

  return (
    <div className="w-full flex justify-center items-center py-20 overflow-hidden bg-transparent">
      <div className="relative w-full max-w-[1200px] h-[750px] flex items-center justify-center mx-auto">
        
        {/* Layered Diagram Container - ESTRICTAS COORDENADAS Z-INDEX */}
        <div className="relative w-[300px] h-[550px] md:w-[450px] md:h-[650px] flex items-center justify-center shrink-0 z-50">
          {animadoImages.map((img) => (
            <motion.img 
              key={img.id} 
              src={img.src} 
              alt={`Capa Animado ${img.id}`} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5, delay: img.delay, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-contain pointer-events-none" 
              style={{ zIndex: img.zIndex }}
            />
          ))}
        </div>

        {/* Decorative Connecting Lines (Pointers) SVG - DIRECTO y RECTO */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-[100]" xmlns="http://www.w3.org/2000/svg">
          {nodes.map((node) => (
            <motion.line 
              key={`line-${node.id}`}
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ pathLength: 1, opacity: activeNode === node.id || activeNode === null ? 0.8 : 0.2 }} 
              transition={{ duration: 1 }} 
              x1={node.side === 'left' ? `calc(${node.x} + 120px)` : `calc(${node.x} - 120px)`} 
              y1={node.y} 
              x2={node.lineEnd.x} 
              y2={node.lineEnd.y} 
              stroke="#ffffff" 
              strokeWidth={activeNode === node.id ? "3" : "1.5"} 
              strokeDasharray={activeNode === node.id ? "none" : "4,4"} 
              className="drop-shadow-lg transition-all duration-300"
            />
          ))}
        </svg>

        {/* Radial Text Nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className={`absolute flex flex-col ${node.side === 'left' ? 'items-end text-right' : 'items-start text-left'} cursor-pointer transition-all duration-500 max-w-[220px] md:max-w-[260px] z-[110]
              ${activeNode === node.id 
                ? 'scale-110 opacity-100' 
                : activeNode !== null 
                  ? 'opacity-50 scale-95' 
                  : 'opacity-100 hover:scale-105'
              }
            `}
            style={{ 
              left: node.x, 
              top: node.y, 
              transform: 'translate(-50%, -50%)',
              zIndex: activeNode === node.id ? 150 : 110
            }}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
          >
            <div className={`p-4 rounded-xl backdrop-blur-md border shadow-2xl transition-all duration-300 w-full
              ${activeNode === node.id 
                ? 'bg-white/20 border-white text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]' 
                : 'bg-[#0A192F]/90 border-indigo/40 text-[#FAF7F2]'
              }
            `}>
              <h4 className="font-heading font-medium text-sm md:text-base leading-snug tracking-wide text-shadow-sm">
                {node.name}
              </h4>
            </div>
            
            <AnimatePresence>
              {activeNode === node.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto', y: 15 }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`absolute ${node.side === 'left' ? 'right-0' : 'left-0'} top-full bg-white text-[#0A192F] p-5 rounded-2xl shadow-2xl w-[280px] md:w-[340px] pointer-events-none border border-black/10 z-[200] overflow-hidden`}
                >
                  <p className="text-xs md:text-[15px] font-sans leading-relaxed text-left font-medium">
                    {node.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

      </div>
    </div>
  );
}
