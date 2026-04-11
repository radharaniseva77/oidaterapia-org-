import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Práctica y Herramientas | Oida Terapia',
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

      <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-indigo/10">
          <h3 className="text-2xl font-heading font-bold text-indigo mb-4">Cuestionarios</h3>
          <p className="text-indigo/80 font-sans text-lg leading-relaxed">
            Los cuestionarios son una herramienta efectiva para que el animado comprenda su acercamiento al Círculo Sanador por medio de sus acciones, reconociendo hacia dónde avanza, cuándo se detiene o retrocede y cuáles actitudes predominan en su vida. Es un cuestionario de ubicación y de reconocimiento de zonas para mejorar.
          </p>
        </div>
        <div className="bg-arena p-8 rounded-3xl shadow-lg border-l-4 border-cielo">
          <h3 className="text-2xl font-heading font-bold text-indigo mb-4">Las Purgas</h3>
          <p className="text-indigo/80 font-sans text-lg leading-relaxed">
            Las Purgas de la OIDA Terapia nos ayudan a liberarnos de las influencias poco saludables. La OIDA Terapia promueve hacernos conscientes de estas influencias y liberarnos de ellas evitando ser sus receptores, por ejemplo dejando de consumirlas innecesariamente.
          </p>
        </div>
      </div>
    </div>
  );
}
