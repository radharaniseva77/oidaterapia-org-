import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Práctica y Herramientas | Oidaterapia',
};

import PurgaQuiz from "@/components/PurgaQuiz";

export default function HerramientasPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-indigo mb-6">
          Herramientas Prácticas
        </h1>
        <p className="text-lg font-sans text-indigo/80 max-w-2xl mx-auto">
          Encuentra diagramas interactivos, cuestionarios de autodescubrimiento y herramientas para la práctica de la Psicología Perenne en tu vida diaria.
        </p>
      </div>

      <section className="mb-16">
        <PurgaQuiz />
      </section>

      <section className="bg-white/50 p-8 rounded-3xl border border-tierra/30 text-center text-indigo">
        <h2 className="text-2xl font-bold mb-4 font-heading">Biblioteca de Diagramas</h2>
        <p className="opacity-80">Próximamente: Explora visualmente las etapas del camino de sanación.</p>
      </section>
    </div>
  );
}
