"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    question: "En tus etapas de crecimiento, ¿dónde solías depositar tu fe de forma más instintiva?",
    options: [
      { id: 'A', text: "En la autoridad, recompensas o el miedo." },
      { id: 'B', text: "En el escape de la realidad o el placer inmediato." },
      { id: 'C', text: "En personas o ideologías que me defraudaron." },
      { id: 'D', text: "En la compasión, la naturaleza o el cuidado genuino." }
    ]
  },
  {
    question: "Hoy en día, ¿qué motor mueve tus decisiones?",
    options: [
      { id: 'A', text: "Mis proyectos, el activismo o mis argumentos." },
      { id: 'B', text: "La competencia y el confort de mis sentidos." },
      { id: 'C', text: "Sigo buscando, a veces dudo por guías errados del pasado." },
      { id: 'D', text: "El amor universal y el entusiasmo espiritual." }
    ]
  },
  {
    question: "Ante una crisis profunda, ¿cómo actúa tu fe?",
    options: [
      { id: 'A', text: "Busco explicaciones lógicas o culpables." },
      { id: 'B', text: "Busco intoxicación física/emocional para evadir el dolor." },
      { id: 'C', text: "Siento el inmenso dolor de haber confiado equivocadamente." },
      { id: 'D', text: "Busco liberarme del sufrimiento a través del servicio y el Guía Interno." }
    ]
  },
  {
    question: "¿Cómo percibes el propósito último de tu existencia?",
    options: [
      { id: 'A', text: "Acumular conocimiento empírico y dejar una huella material." },
      { id: 'B', text: "Maximizar el confort y asegurar la supervivencia." },
      { id: 'C', text: "Sanar mi visión fragmentada por el sectarismo del mundo." },
      { id: 'D', text: "Elevar mi nivel de conciencia y reactivar mi relación con la Divinidad." }
    ]
  },
  {
    question: "¿Qué herramienta es vital en tu vida para la introspección?",
    options: [
      { id: 'A', text: "El análisis mental o debates constantes." },
      { id: 'B', text: "Las distracciones y entretenimiento sensorial." },
      { id: 'C', text: "La duda constante, temiendo ser manipulado de nuevo." },
      { id: 'D', text: "El cultivo holístico de una fe libre de dogmatismos." }
    ]
  }
];

const resultsData = {
  A: {
    estado: "Fe Parcial",
    diagnostico: "Tu fe se basa en nociones que pueden llevarte a errores. Es una oportunidad para indagar y alcanzar una fe completa."
  },
  B: {
    estado: "Fe Distorsionada",
    diagnostico: "Ciertos hábitos o apegos a los sentidos están frenando tu sanación. Es momento de reorientar tu energía."
  },
  C: {
    estado: "Fe Decepcionada",
    diagnostico: "Has sentido el dolor de confiar equivocadamente, pero esto es un estímulo para buscar una guía genuina y trascendental."
  },
  D: {
    estado: "Fe Sanadora",
    diagnostico: "Tu fe te conecta con la verdad y te otorga fuerza. Estás en el camino del Círculo Sanador."
  }
};

const backgrounds = [
  "#FAF7F2", // P1
  "#B0D4E3", // P2
  "#D9E2E8", // P3
  "#8DA5B8", // P4
  "#3b5998", // P5
  "#1A365D"  // Result
];

const textColors = [
  "text-indigo", // P1
  "text-indigo", // P2
  "text-indigo", // P3
  "text-white",  // P4
  "text-white",  // P5
  "text-arena"   // Result
];

export default function TestFeConciencia() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [email, setEmail] = useState("");

  const handleOptionClick = (optionId: string) => {
    const newAnswers = [...answers, optionId];
    if (currentStep < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentStep(currentStep + 1);
    } else {
      setAnswers(newAnswers);
      setCurrentStep(questions.length); // Result phase
    }
  };

  const getMajority = () => {
    if (answers.length === 0) return 'A';
    const counts = answers.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b) as 'A'|'B'|'C'|'D';
  };

  const currentBg = backgrounds[Math.min(currentStep, backgrounds.length - 1)];
  const currentTextColor = textColors[Math.min(currentStep, backgrounds.length - 1)];

  const result = currentStep === questions.length ? resultsData[getMajority()] : null;

  return (
    <motion.div 
      className={`w-full min-h-[600px] flex items-center justify-center p-6 md:p-12 transition-colors duration-1000 ease-in-out rounded-3xl overflow-hidden relative shadow-2xl`}
      animate={{ backgroundColor: currentBg }}
    >
      <AnimatePresence mode="wait">
        {currentStep < questions.length ? (
          <motion.div
            key={`question-${currentStep}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className={`max-w-2xl w-full z-10 ${currentTextColor} space-y-8`}
          >
            <div className="space-y-4 text-center">
              <span className="text-sm font-bold tracking-widest uppercase opacity-70">
                Pregunta {currentStep + 1} de {questions.length}
              </span>
              <h3 className="text-3xl md:text-4xl font-heading font-medium leading-tight">
                {questions[currentStep].question}
              </h3>
            </div>

            <div className="space-y-4 mt-8 flex flex-col gap-3">
              {questions[currentStep].options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option.id)}
                  className={`w-full text-center p-5 rounded-full border-2 transition-all duration-300 font-sans text-lg 
                    ${currentStep >= Math.floor(questions.length / 2) 
                      ? 'border-white/30 hover:border-white hover:bg-white hover:text-[#3b5998] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]' 
                      : 'border-indigo/20 hover:border-indigo hover:bg-white hover:shadow-lg'
                    }
                  `}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className={`max-w-2xl w-full z-10 ${currentTextColor} text-center space-y-8`}
          >
            <div className="space-y-4">
              <span className="text-sm font-bold tracking-widest uppercase opacity-70">
                Tu Resultado
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-arena">
                Estado: {result?.estado}
              </h2>
              <p className="text-xl md:text-2xl font-sans leading-relaxed text-white/90">
                {result?.diagnostico}
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20 mt-12 space-y-6 text-left">
              <h4 className="text-lg md:text-xl font-medium text-center text-white">
                Ingresa tu correo para recibir una guía detallada sobre cómo elevar tu estado de conciencia y agendar una sesión.
              </h4>
              <form 
                onSubmit={(e) => { e.preventDefault(); }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu mejor correo..."
                  required
                  className="flex-1 px-6 py-4 rounded-full bg-indigo/50 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:bg-indigo/80 transition-all font-sans"
                />
                <button
                  type="submit"
                  className="px-8 py-4 rounded-full bg-arena text-indigo font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(250,247,242,0.4)] transition-all font-sans uppercase tracking-wide"
                >
                  Recibir Guía
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
