"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PurgaQuiz() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    identidad: "",
    localizacion: "",
    entrega: "",
    transmutacion: "",
    email: ""
  });

  const nextStep = () => setStep((prev) => prev + 1);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-2xl mx-auto glass p-8 md:p-12 rounded-3xl my-12 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <img src="/assets/oidaterapia/icon-purga.png" alt="Icono Purga" className="w-32 h-32 object-contain" />
      </div>
      
      <div className="mb-10 relative z-10 text-center">
        <div className="flex justify-center mb-4">
          <img src="/assets/oidaterapia/icon-purga.png" alt="Quiz Icon" className="w-16 h-16 object-contain drop-shadow-md" />
        </div>
        <h3 className="text-3xl font-heading font-bold text-indigo">Sanación a través de la Purga</h3>
        <div className="flex justify-center mt-6">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className={`w-12 h-1.5 mx-1.5 rounded-full transition-all duration-500 ${
                step >= s ? "bg-cielo w-16 shadow-[0_0_8px_rgb(176,212,227,0.8)]" : "bg-indigo/10"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 min-h-[280px]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" variants={containerVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }} className="space-y-6 bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 md:p-10 border border-white relative z-20">
              <label className="block text-indigo font-heading text-xl font-medium tracking-wide">
                1. Identificación: ¿Qué carga intoxica tu paz interior ahora?
              </label>
              <textarea
                className="w-full p-5 rounded-2xl border border-white/40 focus:outline-none focus:ring-2 focus:ring-cielo bg-white/20 text-indigo min-h-[140px] text-lg transition-shadow backdrop-blur-sm shadow-inner"
                placeholder="Escribe lo que sientes..."
                value={formData.identidad}
                onChange={(e) => setFormData({ ...formData, identidad: e.target.value })}
              />
              <button
                onClick={nextStep}
                disabled={!formData.identidad.trim()}
                className="w-full py-4 bg-indigo text-arena rounded-full font-bold hover:bg-cielo hover:text-indigo hover:shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente Paso
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" variants={containerVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }} className="space-y-6 bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 md:p-10 border border-white relative z-20">
              <label className="block text-indigo font-heading text-xl font-medium tracking-wide">
                2. Localización: Visualiza: ¿Si este peso tuviera color o forma, dónde está en tu cuerpo?
              </label>
              <textarea
                className="w-full p-5 rounded-2xl border border-white/40 focus:outline-none focus:ring-2 focus:ring-cielo bg-white/20 text-indigo min-h-[140px] text-lg transition-shadow backdrop-blur-sm shadow-inner"
                placeholder="Cierra los ojos, visualiza y describe..."
                value={formData.localizacion}
                onChange={(e) => setFormData({ ...formData, localizacion: e.target.value })}
              />
              <button
                onClick={nextStep}
                disabled={!formData.localizacion.trim()}
                className="w-full py-4 bg-indigo text-arena rounded-full font-bold hover:bg-cielo hover:text-indigo hover:shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente Paso
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" variants={containerVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }} className="space-y-6 text-center bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 md:p-10 border border-white relative z-20">
              <label className="block text-indigo font-heading text-xl font-medium tracking-wide mb-8">
                3. Entrega: ¿Estás dispuesto/a a soltar esto?
              </label>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => {
                    setFormData({ ...formData, entrega: "Sí, entrego" });
                    nextStep();
                  }}
                  className="flex-1 py-5 border-2 border-indigo bg-indigo text-arena rounded-full font-bold hover:bg-cielo hover:border-cielo hover:text-indigo hover:shadow-lg transition-all"
                >
                  Sí, entrego al Guía Interno
                </button>
                <button
                  onClick={() => {
                    setFormData({ ...formData, entrega: "Estoy en proceso" });
                    nextStep();
                  }}
                  className="flex-1 py-5 border-2 border-indigo/20 bg-white/30 backdrop-blur-sm text-indigo rounded-full font-bold hover:bg-white/50 hover:shadow-md transition-all"
                >
                  Sigo en proceso
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" variants={containerVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }} className="space-y-6 bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 md:p-10 border border-white relative z-20">
              <label className="block text-indigo font-heading text-xl font-medium tracking-wide">
                4. Transmutación: ¿Qué cualidad divina invitas a ocupar este espacio?
              </label>
              <textarea
                className="w-full p-5 rounded-2xl border border-white/40 focus:outline-none focus:ring-2 focus:ring-cielo bg-white/20 text-indigo min-h-[140px] text-lg transition-shadow backdrop-blur-sm shadow-inner"
                placeholder="Paz, esperanza, amor pleno..."
                value={formData.transmutacion}
                onChange={(e) => setFormData({ ...formData, transmutacion: e.target.value })}
              />
              <button
                onClick={nextStep}
                disabled={!formData.transmutacion.trim()}
                className="w-full py-4 bg-indigo text-arena rounded-full font-bold hover:bg-cielo hover:text-indigo hover:shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Completar Purga
              </button>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div key="step5" variants={containerVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }} className="space-y-6 text-center bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 md:p-10 border border-white relative z-20">
              <h4 className="text-3xl font-heading font-bold text-indigo mb-3 drop-shadow-sm">Un Paso Hacia la Luz</h4>
              <p className="text-indigo/80 mb-6 text-lg tracking-wide">
                Déjanos tu correo para enviarte recomendaciones personalizadas y guías de integración espiritual.
              </p>
              <input
                type="email"
                placeholder="tuluz@correo.com"
                className="w-full p-5 rounded-full border border-white/40 focus:outline-none focus:ring-2 focus:ring-cielo bg-white/40 backdrop-blur-md text-indigo mb-6 text-center text-lg shadow-sm"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <button
                onClick={() => alert("Registro completado. ¡Gracias por compartir y permitir sanar!")}
                disabled={!formData.email.includes("@")}
                className="w-full py-4 bg-primary text-cielo rounded-full font-bold text-lg hover:bg-indigo hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide"
              >
                Finalizar y Recibir Guía
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
