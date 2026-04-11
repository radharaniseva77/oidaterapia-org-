"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function InteractiveDiagrams() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    { id: 1, name: "Conciencia", desc: "El centro de la percepción humana de donde emana la observación sin juicios.", x: "50%", y: "20%" },
    { id: 2, name: "Guía Interno", desc: "La voz de la sabiduría sanadora a la que accesamos a través de Oida Terapia.", x: "20%", y: "60%" },
    { id: 3, name: "Fe Sanadora", desc: "La confianza vital en el proceso terapéutico y en nuestra sanación existencial.", x: "80%", y: "60%" },
  ];

  return (
    <div className="relative w-full h-[450px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex items-center justify-center p-8 bg-opacity-80 backdrop-blur-md">
       <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-white to-white"></div>
       
       {nodes.map((node) => (
         <motion.div
           key={node.id}
           className={`absolute w-36 h-36 rounded-full flex flex-col items-center justify-center text-center cursor-pointer shadow-lg transition-colors z-20 ${activeNode === node.id ? 'bg-secondary text-primary border-4 border-white' : 'bg-primary text-accent hover:bg-blue-900 border-2 border-transparent'}`}
           style={{ left: `calc(${node.x} - 4.5rem)`, top: `calc(${node.y} - 4.5rem)` }}
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           onClick={() => setActiveNode(node.id === activeNode ? null : node.id)}
         >
           <span className="font-heading font-bold text-sm tracking-wide px-2">{node.name}</span>
         </motion.div>
       ))}
       
       {activeNode && (
         <motion.div
           initial={{ opacity: 0, y: 20, scale: 0.9 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           className="absolute bottom-6 left-6 right-6 md:left-24 md:right-24 bg-primary text-accent p-6 rounded-xl shadow-2xl border border-blue-900/50 z-30 flex flex-col items-center text-center"
         >
           <h4 className="font-heading font-bold text-xl mb-2 text-secondary">{nodes.find(n => n.id === activeNode)?.name}</h4>
           <p className="text-sm opacity-90 max-w-xl text-balance">{nodes.find(n => n.id === activeNode)?.desc}</p>
         </motion.div>
       )}
       
       {/* Decorative Connecting Lines */}
       <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} x1="50%" y1="20%" x2="20%" y2="60%" stroke="#87CEEB" strokeWidth="2" strokeDasharray="8,8" />
          <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} x1="50%" y1="20%" x2="80%" y2="60%" stroke="#87CEEB" strokeWidth="2" strokeDasharray="8,8" />
          <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }} x1="20%" y1="60%" x2="80%" y2="60%" stroke="#87CEEB" strokeWidth="2" strokeDasharray="8,8" />
       </svg>
    </div>
  );
}
