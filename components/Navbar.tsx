"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const modules = [
  { name: "Sabiduría", path: "/sabiduria", sub: ["Psicología Perenne", "Acerca de", "Los 8 Principios"] },
  { name: "El Camino", path: "/el-camino", sub: ["Sanación", "Animado", "El Terapeuta", "Fases"] },
  { name: "Herramientas", path: "/herramientas", sub: ["Cuestionarios", "Purgas", "Guías", "Diagramas"] },
  { name: "Estilo", path: "/estilo-de-vida", sub: ["Alimentación", "12 Pasos", "Oidartes", "Guía Interno"] },
  { name: "Academia", path: "/academia", sub: ["Comunidad", "Formaciones", "Oida Tours", "Cursos"] }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) setActiveDropdown(null);
    else setActiveDropdown(name);
  };

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-6 py-2">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative w-12 h-12 hover:scale-105 transition-transform duration-300">
              <img 
                src="/assets/oidaterapia/logo-oidaterapia.png"
                alt="Oidaterapia Logo" 
                className="object-contain w-full h-full drop-shadow-md"
              />
            </div>
          </Link>
        </div>
        
        <div className="hidden md:block">
          <div className="flex items-baseline space-x-2">
            {modules.map((mod) => (
              <div key={mod.name} className="relative group"
                onMouseEnter={() => setActiveDropdown(mod.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={mod.path} className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out text-indigo bg-transparent hover:glass hover:-translate-y-1 hover:shadow-lg inline-flex items-center">
                  {mod.name}
                  <ChevronDown className="ml-1 h-3 w-3 opacity-70" />
                </Link>
                <AnimatePresence>
                  {activeDropdown === mod.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-3 w-48 rounded-2xl shadow-xl glass text-indigo overflow-hidden backdrop-blur-xl"
                    >
                      <div className="py-2">
                        {mod.sub.map((subItem) => (
                          <Link key={subItem} href={`${mod.path}#${subItem.toLowerCase().replace(/ /g, '-')}`} className="block px-4 py-2 text-sm hover:bg-white/40 transition-colors font-medium">
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center">
           <button className="p-2.5 rounded-full text-indigo hover:glass hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
             <Search className="h-5 w-5" />
           </button>
        </div>

        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-full text-indigo hover:glass focus:outline-none transition-all"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass rounded-3xl mt-4 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {modules.map((mod) => (
                <div key={mod.name}>
                  <button
                    onClick={() => toggleDropdown(mod.name)}
                    className="w-full text-left px-4 py-3 rounded-2xl text-base font-medium flex justify-between items-center text-indigo hover:bg-white/30 transition-colors"
                  >
                    <Link href={mod.path} onClick={() => setIsOpen(false)}>{mod.name}</Link>
                    <ChevronDown className={`h-5 w-5 transform transition-transform duration-300 ${activeDropdown === mod.name ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === mod.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-6 pb-2 space-y-1"
                      >
                        {mod.sub.map((subItem) => (
                          <Link
                            key={subItem}
                            href={`${mod.path}#${subItem.toLowerCase().replace(/ /g, '-')}`}
                            className="block px-3 py-2 rounded-xl text-sm font-medium text-indigo/80 hover:text-indigo hover:bg-white/40 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-indigo/10">
                 <button className="w-full flex items-center justify-center p-4 rounded-full font-medium shadow-md bg-cielo/80 hover:bg-cielo transition text-indigo active:scale-95">
                   <Search className="h-5 w-5 mr-2" />
                   Buscar en la Biblioteca
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
