"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SmartSearch() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full max-w-2xl mx-auto my-8">
      <div className={`relative flex items-center w-full h-14 rounded-full bg-white shadow-lg overflow-hidden border-2 transition-colors duration-300 ${isFocused ? 'border-secondary' : 'border-transparent'}`}>
        <div className="grid place-items-center h-full w-12 text-gray-400">
          <Search className="h-6 w-6" />
        </div>
        <input
          className="h-full w-full outline-none text-base text-primary pr-4 font-sans placeholder-gray-400"
          type="text"
          id="search"
          placeholder="Busca 'vagus nerve', 'atención plena' o 'fe sanadora'..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        />
      </div>
      <AnimatePresence>
        {query && isFocused && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 right-0 bg-white rounded-xl shadow-2xl p-4 z-40 border border-gray-100 text-left"
          >
            <p className="text-sm text-gray-500 mb-3 px-2">Sugerencias para: <span className="font-bold text-primary">{query}</span></p>
            <ul className="space-y-1">
              <li className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer text-sm font-medium text-primary flex items-center transition-colors">
                <Search className="h-4 w-4 mr-3 text-secondary" /> Explorar &quot;{query}&quot; en Sabiduría
              </li>
              <li className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer text-sm font-medium text-primary flex items-center transition-colors">
                <Search className="h-4 w-4 mr-3 text-secondary" /> Buscar &quot;{query}&quot; en Práctica / Herramientas
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
