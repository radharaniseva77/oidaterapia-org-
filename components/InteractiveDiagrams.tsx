"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function InteractiveDiagrams() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    {
      id: 1, 
      name: "Generador y bienqueriente de todos los seres",
      desc: "Aquel que está favorablemente dispuesto a ayudar a otros en el sendero de su vida en un nivel físico, mental y espiritual.",
      x: "20%", y: "15%",
      lineEnd: { x: "48%", y: "18%" }
    },
    {
      id: 2, 
      name: "Unidad de conciencia individual (yo)",
      desc: "Ser vivo y consciente que siente, piensa y desea. Puede recibir, transmitir y asimilar información.",
      x: "20%", y: "45%",
      lineEnd: { x: "47%", y: "45%" }
    },
    {
      id: 3, 
      name: "Cuerpo sutil y cambiante (mente e intelecto)",
      desc: "Cuerpo astral compuesto por la mente, la inteligencia (facultad de juicio) y el ego.",
      x: "22%", y: "75%",
      lineEnd: { x: "45%", y: "65%" }
    },
    {
      id: 4, 
      name: "Energía espiritual omnipenetrante",
      desc: "Totalidad eterna de la existencia, ocupando una posición superior a los cuerpos físico y sutil que se caracterizan por ser cambiantes y temporales.",
      x: "82%", y: "25%",
      lineEnd: { x: "60%", y: "35%" }
    },
    {
      id: 5, 
      name: "Guía Interno",
      desc: "Fuerza que nos conecta con un mayor compromiso, nos cuida, guía y da la posibilidad de entablar una relación personal con la Fuente Suprema.",
      x: "80%", y: "55%",
      lineEnd: { x: "52%", y: "52%" }
    },
    {
      id: 6, 
      name: "Cuerpo físico cambiante",
      desc: "Cuerpo físico que permite interactuar con el entorno a través de los sentidos y es cambiante por naturaleza (nace, crece, permanece, se deteriora y perece).",
      x: "78%", y: "85%",
      lineEnd: { x: "55%", y: "75%" }
    }
  ];

  const images = [
    { src: "/animado-5.png", zIndex: "z-0" },
    { src: "/animado-6.png", zIndex: "z-0" },
    { src: "/animado-1.png", zIndex: "z-10" },
    { src: "/animado-2.png", zIndex: "z-20" },
    { src: "/animado-3.png", zIndex: "z-20" },
    { src: "/animado-4.png", zIndex: "z-20" },
  ];

  return (
    <div className="w-full flex justify-center items-center py-12 overflow-hidden bg-transparent">
      <div className="relative w-full max-w-[800px] h-[700px] mx-auto md:-ml-8 lg:ml-auto flex items-center justify-center">
        
        {/* Layered Diagram Container */}
        <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex items-center justify-center">
          {images.map((img, index) => (
            <img 
              key={index} 
              src={img.src} 
              alt={`Capa ${index + 1}`} 
              className={`absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-2xl ${img.zIndex}`} 
            />
          ))}
        </div>

        {/* Decorative Connecting Lines (Pointers) */}
        <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          {nodes.map((node) => (
            <motion.line 
              key={`line-${node.id}`}
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ pathLength: 1, opacity: activeNode === node.id || activeNode === null ? 0.6 : 0.1 }} 
              transition={{ duration: 1 }} 
              x1={node.x} 
              y1={node.y} 
              x2={node.lineEnd.x} 
              y2={node.lineEnd.y} 
              stroke="#ffffff" 
              strokeWidth={activeNode === node.id ? "3" : "2"} 
              strokeDasharray={activeNode === node.id ? "none" : "4,4"} 
              className="drop-shadow-md transition-all duration-300"
            />
          ))}
        </svg>

        {/* Radial Text Nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className={`absolute flex flex-col items-center text-center cursor-pointer transition-all duration-500 z-30 max-w-[140px] md:max-w-[200px]
              ${activeNode === node.id 
                ? 'scale-110 opacity-100 z-40' 
                : activeNode !== null 
                  ? 'opacity-40 scale-95' 
                  : 'opacity-90 hover:scale-105'
              }
            `}
            style={{ 
              left: node.x, 
              top: node.y, 
              transform: 'translate(-50%, -50%)' 
            }}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
          >
            <div className={`p-3 md:p-4 rounded-xl backdrop-blur-md border shadow-2xl transition-colors duration-300
              ${activeNode === node.id 
                ? 'bg-white/20 border-white text-white' 
                : 'bg-[#1A263D]/80 border-indigo/30 text-arena'
              }
            `}>
              <h4 className="font-heading font-medium text-xs md:text-sm leading-tight text-shadow-sm">
                {node.name}
              </h4>
            </div>
            
            {activeNode === node.id && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full mt-3 bg-white/95 text-[#1A263D] p-4 rounded-lg shadow-xl w-[220px] md:w-[280px] pointer-events-none border border-white/50"
              >
                <p className="text-xs md:text-sm font-sans leading-relaxed text-left">
                  {node.desc}
                </p>
              </motion.div>
            )}
          </motion.div>
        ))}

      </div>
    </div>
  );
}
