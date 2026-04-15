"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    question: "En tus etapas de crecimiento, ¿dónde solías depositar tu fe de forma más instintiva?",
    options: [
      { id: 'A', text: "En la autoridad, el qué dirán o el miedo al castigo." },
      { id: 'B', text: "En el escape de la realidad o el placer inmediato de los sentidos." },
      { id: 'C', text: "En ideologías que me exigían devoción ciega y controlaban mi entorno." },
      { id: 'D', text: "En personas o instituciones que finalmente me defraudaron profundamente." },
      { id: 'E', text: "En la compasión, la naturaleza y una conexión intuitiva de cuidado genuino." }
    ]
  },
  {
    question: "Hoy en día, ¿qué motor mueve principalmente tus decisiones?",
    options: [
      { id: 'A', text: "Mis proyectos personales, el éxito material y mis propios argumentos lógicos." },
      { id: 'B', text: "La competencia constante y maximizar el confort a toda costa." },
      { id: 'C', text: "Las reglas estrictas que alguien más delineó para mí, temiendo equivocarme." },
      { id: 'D', text: "Sigo buscando sin rumbo, a veces dudo de todo por guías errados del pasado." },
      { id: 'E', text: "El amor universal, el entusiasmo espiritual y estar en armonía con el entorno." }
    ]
  },
  {
    question: "Ante una crisis profunda, ¿cómo reacciona espontáneamente tu fe?",
    options: [
      { id: 'A', text: "Busco explicaciones prácticas, lógicas y trato de buscar culpables rápidos." },
      { id: 'B', text: "Busco intoxicación física o emocional para evadir o anestesiar el dolor." },
      { id: 'C', text: "Me aferro desesperadamente a dogmas que prometen salvarme si obedezco." },
      { id: 'D', text: "Siento un inmenso vacío y dolor al creer que todo esfuerzo es inútil." },
      { id: 'E', text: "Busco liberarme del sufrimiento a través del servicio, el perdón y el Guía Interno." }
    ]
  },
  {
    question: "¿Cómo percibes el propósito último de tu existencia?",
    options: [
      { id: 'A', text: "Acumular conocimiento empírico y dejar una huella en este mundo." },
      { id: 'B', text: "Asegurar mi supervivencia financiera y aprovechar el tiempo pasándolo bien." },
      { id: 'C', text: "Cumplir rígidamente una misión impuesta para no ser castigado o excluido." },
      { id: 'D', text: "Aún no lo sé, mi visión se fragmentó por el sectarismo y el sufrimiento del mundo." },
      { id: 'E', text: "Elevar mi nivel de conciencia divina y servir a la creación." }
    ]
  },
  {
    question: "¿Qué papel juega la introspección o meditación en tu vida diaria?",
    options: [
      { id: 'A', text: "Es más bien un análisis mental, debates constantes conmigo mismo sobre mis metas." },
      { id: 'B', text: "Evito el silencio, prefiero estar ocupado con distracciones y entretenimiento constante." },
      { id: 'C', text: "Solo medito o reflexiono cuando sigo una técnica estricta dictada por un superior." },
      { id: 'D', text: "Me cuesta meditar porque la duda y la desilusión interrumpen constantemente mi paz." },
      { id: 'E', text: "Es una herramienta vital para contactar a mi Guía Interno libre de dogmatismos." }
    ]
  },
  {
    question: "Cuando te relacionas con otras tradiciones místicas, ¿cuál es tu actitud?",
    options: [
      { id: 'A', text: "Las respeto si tienen lógica, pero mantengo escepticismo sobre lo sobrenatural." },
      { id: 'B', text: "Indiferencia total, creo que todas son invenciones para controlar a la gente." },
      { id: 'C', text: "Mi tradición es la única verdadera; las demás están en el error y deben ser salvadas." },
      { id: 'D', text: "Siento desconfianza general, ya que veo incoherencias en quienes las practican." },
      { id: 'E', text: "Siento profunda apertura y admiración, reconociendo la fe sanadora en todas sus formas." }
    ]
  },
  {
    question: "¿Has experimentado sanación interior profunda en algún momento?",
    options: [
      { id: 'A', text: "He logrado metas y estabilidad, pero no lo llamaría una sanación espiritual." },
      { id: 'B', text: "Creo que la sanación real no existe, solo hay momentos temporales de menos estrés." },
      { id: 'C', text: "Solo cuando seguí ciegamente a un líder, aunque en el fondo sentía miedo." },
      { id: 'D', text: "Intenté sanar, pero las traiciones y las crisis me demostraron que es muy efímero." },
      { id: 'E', text: "Sí, asumiendo mi rol de animado, purificando mis hábitos y guiado por la fe." }
    ]
  },
  {
    question: "¿Cómo enfrentas la transición o fin de la vida según tu fe actual?",
    options: [
      { id: 'A', text: "Como el fin absoluto que me resigno a aceptar como una realidad biológica indiscutible." },
      { id: 'B', text: "Lo evito pensar y vivo enfocado en aprovechar el momento mientras haya comodidades." },
      { id: 'C', text: "Espero ciegamente una recompensa del más allá basada únicamente en mi afiliación sectaria." },
      { id: 'D', text: "Me genera vacío y frustración pensar en perder todo lo construido sin garantías firmes." },
      { id: 'E', text: "Como parte de mi aprendizaje de animado, confiando en la eternidad de la unidad de conciencia." }
    ]
  }
];

const resultsData = {
  A: {
    estado: "Fe Parcial",
    diagnostico: "Tu fe se basa en nociones que aún están limitadas. Es una oportunidad para indagar más profundo, expandiendo tu consciencia hacia las dimensiones espirituales sin miedo."
  },
  B: {
    estado: "Fe Distorsionada",
    diagnostico: "Ciertos hábitos, egoísmo o apegos te están alejando de tu esencia real. Es momento de reorientar tu energía, practicando la compasión y priorizando la fe."
  },
  C: {
    estado: "Fe Manipulada",
    diagnostico: "Has entregado tu voluntad a estructuras dogmáticas por temor o dependencia. Es tiempo de recuperar tu autoría personal y escuchar directamente la voz de tu Guía Interno."
  },
  D: {
    estado: "Fe Decepcionada",
    diagnostico: "Las frustraciones del pasado te han llevado a un estado de escepticismo doloroso. No obstante, esa misma decepción es el impulso inicial necesario para buscar una verdad incondicional."
  },
  E: {
    estado: "Fe Sanadora",
    diagnostico: "Tu fe te conecta directamente con la verdad universal, irradiando coherencia. Continúa tu camino en el Círculo Sanador con firmeza, amor y servicio incondicional para con los demás."
  }
};

const backgrounds = [
  "#FAF7F2", // P1
  "#B0D4E3", // P2
  "#D9E2E8", // P3
  "#8DA5B8", // P4
  "#5D8AA8", // P5
  "#3b5998", // P6
  "#2C3E50", // P7
  "#1A263D", // P8
  "#1A365D"  // Result
];

const textColors = [
  "text-indigo", // P1
  "text-indigo", // P2
  "text-indigo", // P3
  "text-white",  // P4
  "text-white",  // P5
  "text-white",  // P6
  "text-white",  // P7
  "text-white",  // P8
  "text-arena"   // Result
];

export default function TestFeConciencia() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      if (res.ok) {
        setIsSubscribed(true);
      } else {
        alert("Hubo un error procesando el correo.");
      }
    } catch {
      alert("Hubo un error contactando el servidor.");
    } finally {
      setIsLoading(false);
    }
  };

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
    
    return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b) as 'A'|'B'|'C'|'D'|'E';
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

            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20 mt-12 space-y-6 text-left relative">
              <AnimatePresence>
                {isSubscribed && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#1A365D] rounded-3xl border border-white/30"
                  >
                    <div className="w-16 h-16 bg-arena text-indigo rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold font-heading mb-2 text-arena">¡Suscripción exitosa!</h3>
                    <p className="text-white/80 font-sans text-center max-w-sm px-6">
                      Pronto nos comunicaremos contigo enviando tus resultados.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <h4 className="text-lg md:text-xl font-medium text-center text-white">
                Ingresa tu correo para recibir una guía detallada sobre cómo elevar tu estado de conciencia y agendar una sesión.
              </h4>
              <form 
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  value={email}
                  disabled={isLoading}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu mejor correo..."
                  required
                  className="flex-1 px-6 py-4 rounded-full bg-indigo/50 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:bg-indigo/80 transition-all font-sans"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 rounded-full bg-arena text-indigo font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(250,247,242,0.4)] transition-all font-sans uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Enviando...' : 'Recibir Guía'}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
