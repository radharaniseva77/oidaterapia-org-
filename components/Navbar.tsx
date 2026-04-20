"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WisdomPortal from "@/components/WisdomPortal";

const modules = [
  {
    name: "Sabiduría",
    path: "/sabiduria",
    sub: ["Psicología perenne", "Quiénes somos", "Los ocho principios", "El autor"]
  },
  {
    name: "El camino",
    path: "/el-camino",
    sub: ["Animado", "Sanación", "Terapeuta Oida", "Frases"]
  },
  {
    name: "Ayudas terapéuticas",
    path: "/herramientas",
    sub: ["Consejos y terapias", "Oida artes", "Tests", "Herramientas Oida"]
  },
  {
    name: "Academia",
    path: "/academia",
    sub: ["Masterclass", "Talleres", "Cursos", "Formación internacional"]
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) setActiveDropdown(null);
    else setActiveDropdown(name);
  };

  return (
    /* Cambiado bg-[#F9F9F9] por bg-[#D9C5A3] (Beige) */
    <nav className="fixed w-full top-0 z-[60] bg-[#D9C5A3] shadow-md border-b border-gray-200 transition-all duration-300 py-6 px-4 sm:px-6 xl:px-8">
      <div className="max-w-[90rem] mx-auto flex items-center justify-between">

        <div className="flex items-center space-x-6 xl:space-x-10 flex-1">
          <div className="flex-shrink-0 z-[70]">
            <WisdomPortal />
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            {modules.map((mod) => (
              <div key={mod.name} className="relative group"
                onMouseEnter={() => setActiveDropdown(mod.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={mod.path} className="px-4 py-2 rounded-lg text-xl xl:text-2xl font-semibold transition-all duration-300 ease-out text-[#0A192F] hover:bg-white/50 hover:shadow-sm inline-flex items-center tracking-tight">
                  {mod.name}
                  <ChevronDown className="ml-1.5 h-4 w-4 opacity-70" />
                </Link>
                <AnimatePresence>
                  {activeDropdown === mod.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-3 w-64 rounded-2xl shadow-xl bg-white text-[#0A192F] border border-gray-100 overflow-hidden z-[80]"
                    >
                      <div className="py-2">
                        {mod.sub.map((subItem) => (
                          <Link
                            key={subItem}
                            href={`${mod.path}#${subItem.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, '-')}`}
                            className="block px-5 py-3 text-base hover:bg-beige-light hover:text-orange-600 transition-colors font-medium"
                          >
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

        <div className="hidden lg:flex items-center flex-shrink-0 ml-auto">
          <div className="relative group shadow-sm rounded-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-[#0A192F] transition-colors z-10" />
            <input
              type="text"
              placeholder="saber sobre las formaciones"
              className="pl-12 pr-6 py-3 w-72 xl:w-96 rounded-full border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0A192F] focus:border-transparent transition-all text-base placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="flex lg:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-3 rounded-full text-[#0A192F] bg-white/50 focus:outline-none transition-all"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white shadow-2xl rounded-3xl mt-4 overflow-hidden border border-gray-100 mx-2"
          >
            <div className="px-4 py-4 space-y-2">
              {modules.map((mod) => (
                <div key={mod.name}>
                  <button
                    onClick={() => toggleDropdown(mod.name)}
                    className="w-full text-left px-4 py-4 rounded-xl text-lg font-bold flex justify-between items-center text-[#0A192F] hover:bg-gray-50 transition-colors"
                  >
                    <span>{mod.name}</span>
                    <ChevronDown className={`h-6 w-6 transform transition-transform duration-300 ${activeDropdown === mod.name ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === mod.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-6 pb-2 space-y-1 border-l-2 border-gray-100 ml-4 mt-1"
                      >
                        {mod.sub.map((subItem) => (
                          <Link
                            key={subItem}
                            href={`${mod.path}#${subItem.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, '-')}`}
                            className="block px-3 py-3 rounded-xl text-base font-medium text-gray-600 hover:text-[#0A192F] hover:bg-gray-50 transition-colors"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}