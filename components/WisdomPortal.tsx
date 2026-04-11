import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

export default function WisdomPortal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Bloquear scroll cuando el modal está abierto
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
      {/* EL MEDALLÓN (Logo Trigger) */}
      <div className="relative flex items-center justify-center -my-6 z-50">
        {/* Pulsing Light Glow Effect behind the medallion */}
        <motion.div 
          className="absolute inset-0 bg-[#0A192F]/40 rounded-full blur-xl"
          animate={{ scale: isHovered ? 1.5 : 1.1, opacity: isHovered ? 0.8 : 0.4 }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: 'mirror' }}
        />

        <motion.button
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#0A192F] shadow-[0_0_20px_rgba(10,25,47,0.7)] hover:shadow-[0_0_35px_rgba(255,255,255,0.3)] border border-white/10 overflow-hidden flex items-center justify-center group outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          layoutId="portal-logo"
        >
          {/* Fondo Espacial Rotando */}
          <motion.div 
            className="absolute inset-[-50%] w-[200%] h-[200%] opacity-50 mix-blend-screen pointer-events-none"
            animate={{ 
              rotate: 360,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ 
              rotate: { repeat: Infinity, duration: 25, ease: 'linear' },
              scale: { duration: 0.5 }
            }}
          >
            <img 
              src="/assets/oidaterapia/espacio-fondo.png" 
              alt="Space background" 
              className="w-full h-full object-cover" 
            />
          </motion.div>

          {/* Logo Principal */}
          <motion.img 
            src="/assets/oidaterapia/logo-Oidaterapia.png"
            alt="Oidaterapia Logo" 
            className="absolute w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] z-10"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          {/* Borde Brillante Rotativo Interno */}
          <motion.div 
            className="absolute inset-0 rounded-full border border-[#B0D4E3]/30 z-20 pointer-events-none"
            animate={{
              boxShadow: [
                "inset 0 0 10px rgba(176,212,227,0.2)",
                "inset 0 0 25px rgba(176,212,227,0.5)",
                "inset 0 0 10px rgba(176,212,227,0.2)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      </div>

      {/* MODAL PORTAL DE SABIDURÍA */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 backdrop-blur-md"
          >
            {/* Fondo Modal - Espacio Extendido */}
            <motion.div 
              className="absolute inset-0 w-full h-full opacity-30"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "easeOut" }}
            >
              <img 
                src="/assets/oidaterapia/espacio-fondo.png" 
                alt="Modal Space" 
                className="w-full h-full object-cover" 
              />
            </motion.div>

            {/* Contenedor Contenido */}
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
              className="relative w-full max-w-6xl mx-auto p-6 md:p-12 my-10 bg-[#0A192F]/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex flex-col pt-16 z-20 overflow-hidden"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-white/20 text-white transition-all group"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <div className="text-center mb-12">
                <motion.h2 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-heading font-bold text-white flex items-center justify-center gap-3 drop-shadow-lg"
                >
                  <Sparkles className="text-cielo w-8 h-8" />
                  ¿Qué es Oidaterapia y su Autor?
                  <Sparkles className="text-cielo w-8 h-8" />
                </motion.h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-arena items-center">
                
                {/* SECCIÓN AUTOR */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col items-center text-center space-y-6"
                >
                  <div className="relative w-48 h-48 md:w-64 md:h-64">
                    {/* Pulsing ring around photo */}
                    <motion.div 
                      className="absolute inset-[-10%] rounded-full border border-indigo-400/30"
                      animate={{ scale: [1, 1.05, 1], rotate: 180 }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.div 
                      className="absolute inset-[-20%] rounded-full border border-dashed border-cielo/20"
                      animate={{ scale: [1, 1.1, 1], rotate: -180 }}
                      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    />
                    
                    {/* Foto */}
                    <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-[#0A192F] shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                      <motion.img 
                        src="/assets/oidaterapia/autor.jpg" 
                        alt="Ulrich Harlan"
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-tr from-cielo/0 via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                        style={{ mixBlendMode: 'overlay' }}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold font-heading text-white mb-2">Ulrich Harlan</h3>
                    <p className="text-cielo italic mb-4 font-serif text-lg">(Swami Paramadvaiti)</p>
                    <p className="font-sans leading-relaxed text-arena/90 text-sm md:text-base px-4">
                      Nacido en Alemania (1953), devoto estudiante de A.C. Bhaktivedanta Swami Prabhupada. 
                      Destacado pensador altruista e impulsor a nivel mundial del activismo por los derechos 
                      animales mediante el movimiento &quot;La Revolución de la Cuchara&quot; y la promoción ferviente del vegetarianismo. 
                      Propone la estructura profunda de la OIDA Terapia tras más de 35 años de expedición filosófica, devocional e investigativa por el mundo antiguo y moderno.
                    </p>
                  </div>
                </motion.div>

                {/* SECCIÓN TESIS OIDATERAPIA */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-8 bg-white/5 p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
                >
                  <motion.div 
                    className="absolute -top-32 -right-32 w-64 h-64 bg-cielo/10 blur-3xl rounded-full group-hover:bg-cielo/20 transition-colors duration-700" 
                  />

                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4 border-b border-white/20 pb-2">
                       La Tesis Fundamental
                    </h3>
                    <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-arena/90 mb-6">
                      Desarrollada en el marco conceptual supremo de la <strong className="text-cielo font-medium">Psicología Perenne</strong>, la Oidaterapia plantea que el vacío humano es espiritual y no puramente material.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-cielo rounded-full mt-2.5 mr-3 flex-shrink-0" />
                        <p className="font-sans leading-relaxed">
                          Su objetivo absoluto es guiar al individuo a lograr un estado de profunda <strong className="text-white">felicidad, equilibrio, amor y salud</strong>.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-cielo rounded-full mt-2.5 mr-3 flex-shrink-0" />
                        <p className="font-sans leading-relaxed">
                          La piedra angular de esta sanación se concibe a través de reactivar la <strong className="text-white">fe sanadora</strong> que yace inactiva.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-cielo rounded-full mt-2.5 mr-3 flex-shrink-0" />
                        <p className="font-sans leading-relaxed">
                          Fomenta de forma clínica y holística un cultivo universal de la fe, manteniéndose completamente <strong className="text-white">libre de sectarismos y dogmatismos institucionales</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 flex justify-center">
                    <button onClick={() => setIsOpen(false)} className="px-8 py-3 rounded-full border border-cielo text-cielo hover:bg-cielo hover:text-[#0A192F] font-bold tracking-widest uppercase transition-all duration-300">
                      Entrar a la Plataforma
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
